// ─── LOW-HANGING FRUIT KEYWORD FINDER ────────────────────────────────────────
// Queries GSC for keywords ranking at positions 11-25 with decent impressions.
// These are the easiest wins — one good FAQ or blog post can push them to top 10.

import { google } from "googleapis";
import { CONFIG } from "./config.js";

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: CONFIG.googleCredentials,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
}

export async function findLowHangingKeywords(daysBack = 28, limit = 20) {
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

  // Positions 11-25, at least 20 impressions — easy to improve
  const lowHanging = rows
    .filter((r) => r.position >= 11 && r.position <= 25 && r.impressions >= 20)
    .map((r) => ({
      keyword: r.keys[0],
      position: Math.round(r.position * 10) / 10,
      impressions: r.impressions,
      clicks: r.clicks,
      ctr: Math.round((r.clicks / r.impressions) * 1000) / 10,
      potentialClicks: Math.round(r.impressions * 0.15), // ~15% CTR if in top 5
    }))
    .sort((a, b) => a.position - b.position) // closest to top 10 first
    .slice(0, limit);

  console.log(`[lowhanging] Found ${lowHanging.length} low-hanging keywords (pos 11-25)`);
  return lowHanging;
}
