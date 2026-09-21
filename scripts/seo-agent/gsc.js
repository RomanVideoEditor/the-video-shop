// ─── GOOGLE SEARCH CONSOLE API ───────────────────────────────────────────────
import { google } from "googleapis";
import { CONFIG } from "./config.js";

function getAuth(readWrite = false) {
  return new google.auth.GoogleAuth({
    credentials: CONFIG.googleCredentials,
    scopes: readWrite
      ? ["https://www.googleapis.com/auth/webmasters"]
      : ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
}

// Fetch click/impression/position data for a list of keywords over the last N days
export async function fetchKeywordMetrics(keywords, daysBack = 28) {
  const auth = await getAuth().getClient();
  const webmasters = google.searchconsole({ version: "v1", auth });

  const endDate = new Date();
  const startDate = new Date(Date.now() - daysBack * 86400000);
  const fmt = (d) => d.toISOString().split("T")[0];

  const results = [];

  for (const keyword of keywords) {
    try {
      const res = await webmasters.searchanalytics.query({
        siteUrl: CONFIG.gscSiteUrl,
        requestBody: {
          startDate: fmt(startDate),
          endDate: fmt(endDate),
          dimensions: ["query"],
          dimensionFilterGroups: [
            {
              filters: [
                { dimension: "query", operator: "equals", expression: keyword },
              ],
            },
          ],
          rowLimit: 1,
        },
      });

      const row = res.data?.rows?.[0];
      results.push({
        keyword,
        impressions: row?.impressions ?? 0,
        clicks: row?.clicks ?? 0,
        position: row?.position ? Math.round(row.position * 10) / 10 : 100,
      });
    } catch {
      results.push({ keyword, impressions: 0, clicks: 0, position: 100 });
    }
  }

  return results;
}

// Return the topic with the weakest average GSC position
// among topics that haven't been touched in 60 days
export async function pickWeakestTopic(topics, recentTopicIds) {
  const candidates = topics.filter((t) => !recentTopicIds.includes(t.id));
  if (candidates.length === 0) return topics[0]; // fallback: cycle from start

  const scored = await Promise.all(
    candidates.map(async (topic) => {
      const metrics = await fetchKeywordMetrics(topic.keywords, 28);
      const avgPos =
        metrics.reduce((sum, m) => sum + m.position, 0) / metrics.length;
      return { topic, avgPos, metrics };
    })
  );

  // Highest position number = weakest ranking = most opportunity
  scored.sort((a, b) => b.avgPos - a.avgPos);
  return scored[0];
}

// Fetch all pages ranked in GSC, find ones with good position but low CTR
// These are candidates for meta/title improvement
export async function fetchLowCtrPages(daysBack = 28, positionThreshold = 15, ctrThreshold = 0.03) {
  const auth = await getAuth().getClient();
  const webmasters = google.searchconsole({ version: "v1", auth });

  const endDate = new Date();
  const startDate = new Date(Date.now() - daysBack * 86400000);
  const fmt = (d) => d.toISOString().split("T")[0];

  const res = await webmasters.searchanalytics.query({
    siteUrl: CONFIG.gscSiteUrl,
    requestBody: {
      startDate: fmt(startDate),
      endDate: fmt(endDate),
      dimensions: ["page"],
      rowLimit: 50,
    },
  });

  const rows = res.data?.rows ?? [];
  return rows
    .filter((r) => r.position <= positionThreshold && r.impressions > 30 && (r.clicks / r.impressions) < ctrThreshold)
    .map((r) => ({
      page: r.keys[0],
      position: Math.round(r.position * 10) / 10,
      impressions: r.impressions,
      clicks: r.clicks,
      ctr: Math.round((r.clicks / r.impressions) * 1000) / 10, // as %
    }))
    .sort((a, b) => a.position - b.position); // best position first (most fixable)
}

// ── Sitemap ping ──────────────────────────────────────────────────────────────

// Notify Google Search Console that the sitemap has been updated
export async function pingSitemap() {
  try {
    const auth = await getAuth(true).getClient();
    const webmasters = google.searchconsole({ version: "v1", auth });
    const sitemapUrl = `${CONFIG.siteUrl}/sitemap.xml`;
    await webmasters.sitemaps.submit({
      siteUrl: CONFIG.gscSiteUrl,
      feedpath: sitemapUrl,
    });
    console.log(`[gsc] Sitemap submitted: ${sitemapUrl}`);
  } catch (err) {
    console.warn("[gsc] Sitemap ping failed:", err.message);
  }
}

// ── Keyword gap analysis ──────────────────────────────────────────────────────

// Fetch queries with high impressions that aren't already covered by existing post IDs/titles
export async function fetchOrphanQueries(existingPostIds = [], daysBack = 90, limit = 8) {
  try {
    const auth = await getAuth().getClient();
    const webmasters = google.searchconsole({ version: "v1", auth });

    const endDate = new Date();
    const startDate = new Date(Date.now() - daysBack * 86400000);
    const fmt = (d) => d.toISOString().split("T")[0];

    const res = await webmasters.searchanalytics.query({
      siteUrl: CONFIG.gscSiteUrl,
      requestBody: {
        startDate: fmt(startDate),
        endDate: fmt(endDate),
        dimensions: ["query"],
        rowLimit: 200,
      },
    });

    const rows = res.data?.rows ?? [];
    // Filter out brand queries and queries already covered by existing posts
    const covered = existingPostIds.map((id) => id.toLowerCase().replace(/-/g, " "));
    return rows
      .filter((r) => {
        const q = r.keys[0].toLowerCase();
        const isBrand = q.includes("videoshop") || q.includes("video shop") || q.includes("הוידאו שופ");
        const isCovered = covered.some((c) => q.includes(c.slice(0, 12)));
        return !isBrand && !isCovered && r.impressions >= 50;
      })
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, limit)
      .map((r) => ({
        query: r.keys[0],
        impressions: r.impressions,
        clicks: r.clicks,
        position: Math.round(r.position * 10) / 10,
        ctr: Math.round((r.clicks / r.impressions) * 1000) / 10,
      }));
  } catch (err) {
    console.warn("[gsc] Orphan query fetch failed:", err.message);
    return [];
  }
}
