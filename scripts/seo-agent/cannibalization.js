// ─── KEYWORD CANNIBALIZATION DETECTOR ────────────────────────────────────────
// Queries GSC with page+query dimensions to find keywords where 2+ pages
// compete. Reports pairs in the email with severity + Claude-generated
// differentiation suggestions for the worst pair.
//
// "Damage score" = impressions × (1 - position delta / 30)
// The closer the two pages' positions, the higher the damage.

import Anthropic from "@anthropic-ai/sdk";
import { google }   from "googleapis";
import { CONFIG }   from "./config.js";

const client = new Anthropic({ apiKey: CONFIG.anthropicApiKey });

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: CONFIG.googleCredentials,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
}

// ── 1. Fetch page×query data ──────────────────────────────────────────────────

async function fetchPageQueryData(daysBack = 28) {
  const auth = await getAuth().getClient();
  const webmasters = google.searchconsole({ version: "v1", auth });

  const endDate   = new Date();
  const startDate = new Date(Date.now() - daysBack * 86400000);
  const fmt = (d) => d.toISOString().split("T")[0];

  const res = await webmasters.searchanalytics.query({
    siteUrl: CONFIG.gscSiteUrl,
    requestBody: {
      startDate:  fmt(startDate),
      endDate:    fmt(endDate),
      dimensions: ["page", "query"],
      rowLimit:   2500,
    },
  });

  return res.data?.rows ?? [];
}

// ── 2. Group by query and find conflicts ─────────────────────────────────────

function buildConflictPairs(rows) {
  // Group: query → [ { page, position, impressions, clicks } ]
  const byQuery = {};
  for (const row of rows) {
    const [page, query] = row.keys;
    if (!byQuery[query]) byQuery[query] = [];
    byQuery[query].push({
      page,
      position:    Math.round(row.position * 10) / 10,
      impressions: row.impressions,
      clicks:      row.clicks,
    });
  }

  const pairs = [];
  for (const [query, pages] of Object.entries(byQuery)) {
    // Only care if 2+ pages with meaningful impressions
    const relevant = pages
      .filter((p) => p.impressions >= 8)
      .sort((a, b) => a.position - b.position); // best position first

    if (relevant.length < 2) continue;

    const winner = relevant[0];
    for (const loser of relevant.slice(1)) {
      const totalImpressions = winner.impressions + loser.impressions;
      const posDelta = Math.abs(winner.position - loser.position);
      // Higher damage when positions are close (both competing hard)
      const damageScore = Math.round(totalImpressions * Math.max(0, 1 - posDelta / 30));

      pairs.push({
        query,
        winner: { page: winner.page, position: winner.position, impressions: winner.impressions },
        loser:  { page: loser.page,  position: loser.position,  impressions: loser.impressions  },
        totalImpressions,
        posDelta: Math.round(posDelta * 10) / 10,
        damageScore,
      });
    }
  }

  // Sort by damage descending — worst cannibalizations first
  return pairs.sort((a, b) => b.damageScore - a.damageScore);
}

// ── 3. Classify page type ─────────────────────────────────────────────────────

function pageType(url) {
  if (url.includes("/vlog/"))     return "blog";
  if (url.includes("/services/")) return "service";
  if (url.includes("/pricing"))   return "pricing";
  return "other";
}

function slugFromUrl(url) {
  const m = url.match(/\/([^/?#]+)\/?$/);
  return m ? m[1] : url;
}

// ── 4. Generate differentiation suggestion for the worst pair ─────────────────

async function generateDifferentiationSuggestion(pair) {
  const winnerType = pageType(pair.winner.page);
  const loserType  = pageType(pair.loser.page);
  const prompt = `You are an SEO specialist for videoshop (the-videoshop.com), a boutique B2B video production studio in Tel Aviv.

Two pages compete for the same keyword:
  Keyword: "${pair.query}"
  WINNER: ${pair.winner.page} (position ${pair.winner.position}, ${pair.winner.impressions} impressions)
  LOSER:  ${pair.loser.page}  (position ${pair.loser.position},  ${pair.loser.impressions} impressions)
  Page types: winner=${winnerType}, loser=${loserType}

Task: Write a short, actionable recommendation (3–4 sentences max) to resolve this cannibalization:
- If loser is a blog post and winner is a service page: suggest what specific long-tail angle the blog post should target instead
- If both are blog posts: suggest which one to keep and how to differentiate the other
- Be concrete: name the new target keyword or sub-topic

Return ONLY valid JSON:
{
  "recommendation": "...",
  "newTargetKeyword": "the specific keyword the loser should target instead",
  "severity": "high|medium|low"
}`;

  const response = await client.messages.create({
    model:      "claude-haiku-4-5-20251001",
    max_tokens: 300,
    messages:   [{ role: "user", content: prompt }],
  });

  const text = response.content[0].text.trim();
  try { return JSON.parse(text); }
  catch {
    const m = text.match(/\{[\s\S]*\}/);
    if (m) return JSON.parse(m[0]);
    return { recommendation: text.slice(0, 200), newTargetKeyword: "", severity: "medium" };
  }
}

// ── Public entry point ────────────────────────────────────────────────────────

export async function detectCannibalization() {
  console.log("[cannibalization] Fetching GSC page×query data...");
  const rows  = await fetchPageQueryData(28);
  const pairs = buildConflictPairs(rows);

  if (!pairs.length) {
    console.log("[cannibalization] No keyword cannibalization detected");
    return { pairs: [], suggestion: null };
  }

  // Limit to top 8 worst pairs for the email report
  const topPairs = pairs.slice(0, 8);
  console.log(`[cannibalization] Found ${pairs.length} cannibalizing pair(s). Top: "${topPairs[0]?.query}"`);

  // Generate suggestion only for the worst pair (to save API calls)
  let suggestion = null;
  try {
    suggestion = await generateDifferentiationSuggestion(topPairs[0]);
    console.log(`[cannibalization] Suggestion: ${suggestion.recommendation.slice(0, 80)}...`);
  } catch (err) {
    console.warn("[cannibalization] Suggestion generation failed:", err.message);
  }

  return { pairs: topPairs, suggestion, worstQuery: topPairs[0].query };
}
