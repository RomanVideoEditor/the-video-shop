// ─── GOOGLE SEARCH CONSOLE API ───────────────────────────────────────────────
import { google } from "googleapis";
import { CONFIG } from "./config.js";

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: CONFIG.googleCredentials,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
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
