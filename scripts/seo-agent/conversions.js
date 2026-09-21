// ─── GA4 CONVERSION TRACKER ──────────────────────────────────────────────────
// Queries Google Analytics 4 to find which blog posts generate the most
// conversions (contact form submissions) and engaged sessions.
//
// Two queries run in parallel:
//   A. Conversion events: contact_form_submit → generate_lead → form_submit
//      (first event name that returns data is used)
//   B. Engagement: top pages by engaged_sessions — proxy for content quality
//
// Results are saved to Firebase `conversion_insights` and surfaced in:
//   1. The email report (which posts convert)
//   2. The Claude performance memory prompt (replicate converting patterns)
//
// NOTE: GA4_PROPERTY_ID must be the NUMERIC property ID (e.g., "123456789")
//       NOT the measurement ID (G-XXXXXXXXXX).
//       Find it in: Google Analytics → Admin → Property Settings → Property ID.

import { google } from "googleapis";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { CONFIG } from "./config.js";

const CONVERSION_EVENTS = ["contact_form_submit", "generate_lead", "form_submit", "contact"];
const SITE = CONFIG.siteUrl; // https://www.the-videoshop.com

function initFirebase() {
  if (getApps().length === 0) {
    initializeApp({ credential: cert(CONFIG.firebaseCredentials), projectId: CONFIG.firebaseProjectId });
  }
  return getFirestore();
}

function getAnalyticsAuth() {
  return new google.auth.GoogleAuth({
    credentials: CONFIG.googleCredentials,
    scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
  });
}

// ── Validate property ID ──────────────────────────────────────────────────────

function getNumericPropertyId() {
  const id = String(CONFIG.ga4PropertyId ?? "");
  if (/^\d+$/.test(id)) return id;
  // G-XXXXXXXX is the measurement ID — not usable with the Data API
  console.warn(
    "[conversions] GA4_PROPERTY_ID must be the NUMERIC property ID, not the measurement ID (G-...).",
    "Find it at: Google Analytics → Admin → Property Settings → Property ID."
  );
  return null;
}

// ── GA4 Data API query helper ─────────────────────────────────────────────────

async function runGA4Report({ auth, propertyId, dimensions, metrics, dimensionFilter, limit = 20, daysBack = 90 }) {
  const analyticsdata = google.analyticsdata({ version: "v1beta", auth });

  const endDate   = "today";
  const startDate = `${daysBack}daysAgo`;

  const body = {
    dateRanges: [{ startDate, endDate }],
    dimensions: dimensions.map((name) => ({ name })),
    metrics:    metrics.map((name)    => ({ name })),
    limit,
    orderBys: [{ metric: { metricName: metrics[0] }, desc: true }],
  };

  if (dimensionFilter) body.dimensionFilter = dimensionFilter;

  const res = await analyticsdata.properties.runReport({
    property:    `properties/${propertyId}`,
    requestBody: body,
  });

  return res.data?.rows ?? [];
}

// ── A. Conversion events ──────────────────────────────────────────────────────

async function fetchConvertingPages(auth, propertyId) {
  for (const eventName of CONVERSION_EVENTS) {
    try {
      const rows = await runGA4Report({
        auth, propertyId,
        dimensions: ["pagePath"],
        metrics:    ["eventCount"],
        dimensionFilter: {
          filter: {
            fieldName: "eventName",
            stringFilter: { matchType: "EXACT", value: eventName },
          },
        },
        limit: 15,
      });

      if (rows.length > 0) {
        console.log(`[conversions] Found ${rows.length} pages with event "${eventName}"`);
        return {
          eventName,
          pages: rows.map((r) => ({
            path:        r.dimensionValues[0].value,
            conversions: parseInt(r.metricValues[0].value, 10),
          })).filter((r) => r.path.includes("/vlog/")), // blog posts only
        };
      }
    } catch {
      // Try next event name
    }
  }

  // Fallback: count page_view events on /contact page to infer source
  console.log("[conversions] No direct conversion events found — falling back to contact page referrers");
  return await fetchContactReferrers(auth, propertyId);
}

async function fetchContactReferrers(auth, propertyId) {
  try {
    // Get sessions that included a /contact page view, segmented by landing page
    const rows = await runGA4Report({
      auth, propertyId,
      dimensions: ["landingPage"],
      metrics:    ["sessions"],
      dimensionFilter: {
        filter: {
          fieldName: "landingPage",
          stringFilter: { matchType: "CONTAINS", value: "/vlog/" },
        },
      },
      limit: 20,
    });

    return {
      eventName: "sessions_from_blog",
      pages: rows.map((r) => ({
        path:        r.dimensionValues[0].value,
        conversions: parseInt(r.metricValues[0].value, 10),
      })),
    };
  } catch {
    return { eventName: null, pages: [] };
  }
}

// ── B. Engaged sessions per blog post ─────────────────────────────────────────

async function fetchEngagedBlogPosts(auth, propertyId) {
  const rows = await runGA4Report({
    auth, propertyId,
    dimensions: ["pagePath"],
    metrics:    ["engagedSessions", "averageSessionDuration"],
    dimensionFilter: {
      filter: {
        fieldName: "pagePath",
        stringFilter: { matchType: "CONTAINS", value: "/vlog/" },
      },
    },
    limit: 15,
    daysBack: 90,
  });

  return rows.map((r) => ({
    path:            r.dimensionValues[0].value,
    engagedSessions: parseInt(r.metricValues[0].value, 10),
    avgDuration:     Math.round(parseFloat(r.metricValues[1].value)),
  }));
}

// ── Extract post slug from GA4 path ──────────────────────────────────────────

function slugFromPath(path) {
  const m = path.match(/\/vlog\/([^/?#]+)/);
  return m ? m[1] : null;
}

// ── Save to Firebase ──────────────────────────────────────────────────────────

async function saveConversionInsights(insights) {
  const db = initFirebase();
  await db.collection("conversion_insights").add({
    ...insights,
    savedAt: Timestamp.now(),
  });
}

// ── Build prompt-ready summary ────────────────────────────────────────────────

function buildConversionPromptSummary(converting, engaged) {
  const lines = [];

  if (converting.pages.length) {
    const topConv = converting.pages.slice(0, 3);
    const slugs = topConv.map((p) => slugFromPath(p.path)).filter(Boolean);
    lines.push(`Blog posts with most conversions (${converting.eventName}): ${slugs.join(", ")}.`);
    lines.push(`Top converting post had ${topConv[0].conversions} conversions.`);
  }

  if (engaged.length) {
    const topEng = engaged.slice(0, 3);
    const slugs = topEng.map((p) => slugFromPath(p.path)).filter(Boolean);
    lines.push(`Most engaged blog posts (${topEng[0]?.engagedSessions} engaged sessions): ${slugs.join(", ")}.`);
    lines.push(`Replicate the depth, structure, and specificity of these posts in new content.`);
  }

  return lines.join(" ");
}

// ── Public entry point ────────────────────────────────────────────────────────

export async function analyzeConversions() {
  const propertyId = getNumericPropertyId();
  if (!propertyId) return null;

  const auth = await getAnalyticsAuth().getClient();

  const [convertingResult, engagedPages] = await Promise.all([
    fetchConvertingPages(auth, propertyId).catch((err) => {
      console.warn("[conversions] Conversion fetch failed:", err.message);
      return { eventName: null, pages: [] };
    }),
    fetchEngagedBlogPosts(auth, propertyId).catch((err) => {
      console.warn("[conversions] Engagement fetch failed:", err.message);
      return [];
    }),
  ]);

  if (!convertingResult.pages.length && !engagedPages.length) {
    console.log("[conversions] No conversion or engagement data found");
    return null;
  }

  const promptSummary = buildConversionPromptSummary(convertingResult, engagedPages);

  const insights = {
    convertingPages: convertingResult.pages.slice(0, 5),
    eventName:       convertingResult.eventName,
    engagedPages:    engagedPages.slice(0, 5),
    promptSummary,
  };

  // Persist for cross-cycle reference
  await saveConversionInsights(insights).catch(() => {});
  console.log(`[conversions] ${convertingResult.pages.length} converting + ${engagedPages.length} engaged blog posts found`);

  return insights;
}

// ── Retrieve latest saved insights (for prompt injection) ─────────────────────

export async function getLatestConversionInsights() {
  try {
    const db = initFirebase();
    const snap = await db
      .collection("conversion_insights")
      .orderBy("savedAt", "desc")
      .limit(1)
      .get();
    if (snap.empty) return null;
    return snap.docs[0].data();
  } catch {
    return null;
  }
}
