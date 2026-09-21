// ─── FEATURED SNIPPET OPTIMIZER ──────────────────────────────────────────────
// Detects blog posts ranking at positions 2–5 in Google Search (prime snippet
// territory) and prepends a concise 40–55 word "direct answer" paragraph to
// maximise the chance of capturing position 0 (featured snippet).
//
// Workflow:
//   1. Query GSC for pages ranked 2–5 with sufficient impressions
//   2. Filter to blog post URLs (/vlog/)
//   3. Skip posts already optimised (tracked in Firebase: snippet_optimizations)
//   4. Claude generates a bilingual direct-answer paragraph
//   5. Prepend to bodyHe / bodyEn in videos.ts and commit to main

import Anthropic from "@anthropic-ai/sdk";
import { Octokit }  from "octokit";
import { google }   from "googleapis";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { CONFIG } from "./config.js";

const client  = new Anthropic({ apiKey: CONFIG.anthropicApiKey });
const octokit = new Octokit({ auth: CONFIG.githubToken });
const [owner, repo] = CONFIG.githubRepo.split("/");

function initFirebase() {
  if (getApps().length === 0) {
    initializeApp({ credential: cert(CONFIG.firebaseCredentials), projectId: CONFIG.firebaseProjectId });
  }
  return getFirestore();
}

// ── 1. Find candidates ────────────────────────────────────────────────────────

async function findSnippetCandidates() {
  const auth = new google.auth.GoogleAuth({
    credentials: CONFIG.googleCredentials,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
  const client = await auth.getClient();
  const webmasters = google.searchconsole({ version: "v1", auth: client });

  const endDate   = new Date();
  const startDate = new Date(Date.now() - 28 * 86400000);
  const fmt = (d) => d.toISOString().split("T")[0];

  // Query by page+query to get the top query per page
  const res = await webmasters.searchanalytics.query({
    siteUrl: CONFIG.gscSiteUrl,
    requestBody: {
      startDate:  fmt(startDate),
      endDate:    fmt(endDate),
      dimensions: ["page", "query"],
      rowLimit:   500,
    },
  });

  const rows = res.data?.rows ?? [];

  // Group by page: keep only the row with highest impressions per page
  const byPage = {};
  for (const row of rows) {
    const [page, query] = row.keys;
    if (!byPage[page] || row.impressions > byPage[page].impressions) {
      byPage[page] = { page, query, position: row.position, impressions: row.impressions, clicks: row.clicks };
    }
  }

  return Object.values(byPage)
    .filter((r) => {
      const isBlogPost = r.page.includes("/vlog/");
      const isSnippetZone = r.position >= 1.5 && r.position <= 5.5;
      const hasEnoughImpressions = r.impressions >= 30;
      return isBlogPost && isSnippetZone && hasEnoughImpressions;
    })
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 3); // max 3 candidates per cycle
}

// ── 2. Check if already optimised ────────────────────────────────────────────

async function getAlreadyOptimised() {
  const db = initFirebase();
  const snap = await db.collection("snippet_optimizations").get();
  return new Set(snap.docs.map((d) => d.data().postId));
}

async function markOptimised(postId, query, position) {
  const db = initFirebase();
  await db.collection("snippet_optimizations").add({
    postId, query, position, addedAt: Timestamp.now(),
  });
}

// ── 3. Extract post slug from URL ─────────────────────────────────────────────

function slugFromUrl(url) {
  // https://www.the-videoshop.com/vlog/some-post  → some-post
  // https://www.the-videoshop.com/en/vlog/some-post → some-post
  const m = url.match(/\/vlog\/([^/?#]+)/);
  return m ? m[1] : null;
}

// ── 4. Generate bilingual snippet paragraph ───────────────────────────────────

async function generateSnippetParagraph(postId, query, position) {
  const prompt = `You are an SEO specialist for videoshop (the-videoshop.com), a boutique B2B video production studio in Tel Aviv.

A blog post on the site ranks at position ${position.toFixed(1)} for the query: "${query}"
This is in the featured-snippet zone (positions 2–5). A concise direct-answer paragraph at the
top of the post can capture position 0 (featured snippet box).

Write such a paragraph — 40–55 words each language — that:
1. Directly answers "${query}" in the very first sentence
2. Is factual and specific (mention a price range, timeframe, or client example where natural)
3. Flows naturally as an article introduction (not a bulleted list)
4. Ends with a soft lead-in to the rest of the article

Return ONLY valid JSON:
{
  "snippetHe": "פסקת תשובה ישירה בעברית (40–55 מילה)",
  "snippetEn": "Direct answer paragraph in English (40–55 words)"
}`;

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 400,
    messages: [{ role: "user", content: prompt }],
  });

  const text = response.content[0].text.trim();
  try { return JSON.parse(text); }
  catch {
    const m = text.match(/\{[\s\S]*\}/);
    if (m) return JSON.parse(m[0]);
    throw new Error(`[snippet] Invalid JSON from Claude: ${text.slice(0, 100)}`);
  }
}

// ── 5. Inject into videos.ts ──────────────────────────────────────────────────

async function injectSnippetIntoVideos(postId, snippetHe, snippetEn) {
  const { data } = await octokit.rest.repos.getContent({ owner, repo, path: "src/lib/videos.ts" });
  const content  = Buffer.from(data.content, "base64").toString("utf8");
  const sha      = data.sha;

  // Find the bodyHe and bodyEn fields for this post and prepend the snippet
  // Pattern: id: "POST_ID" ... bodyHe: "EXISTING_BODY"
  // We escape and prepend before the existing body content

  const safeHe = snippetHe.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const safeEn = snippetEn.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const hePrefix = `${safeHe}\\n\\n`;
  const enPrefix = `${safeEn}\\n\\n`;

  // Replace bodyHe for this specific post
  const heRegex = new RegExp(
    `(id:\\s*"${postId}"[\\s\\S]*?bodyHe:\\s*)"([^"]{0,20})`,
    "m"
  );
  const enRegex = new RegExp(
    `(id:\\s*"${postId}"[\\s\\S]*?bodyEn:\\s*)"([^"]{0,20})`,
    "m"
  );

  if (!heRegex.test(content)) {
    throw new Error(`[snippet] Could not find bodyHe for post: ${postId}`);
  }

  let updated = content
    .replace(heRegex, (_, prefix, start) => `${prefix}"${hePrefix}${start}`)
    .replace(enRegex, (_, prefix, start) => `${prefix}"${enPrefix}${start}`);

  await octokit.rest.repos.createOrUpdateFileContents({
    owner, repo,
    path:    "src/lib/videos.ts",
    message: `seo-agent: featured snippet paragraph for "${postId}" [skip ci]`,
    content: Buffer.from(updated).toString("base64"),
    sha,
  });

  console.log(`[snippet] Injected snippet into: ${postId}`);
}

// ── Public entry point ────────────────────────────────────────────────────────

export async function optimizeSnippetCandidates() {
  const candidates    = await findSnippetCandidates();
  if (!candidates.length) {
    console.log("[snippet] No snippet candidates found (no pages at pos 2–5)");
    return null;
  }

  const alreadyDone = await getAlreadyOptimised();
  const fresh = candidates.filter((c) => {
    const slug = slugFromUrl(c.page);
    return slug && !alreadyDone.has(slug);
  });

  if (!fresh.length) {
    console.log("[snippet] All snippet candidates already optimised");
    return null;
  }

  // Process the best candidate only (highest impressions)
  const target = fresh[0];
  const slug   = slugFromUrl(target.page);
  console.log(`[snippet] Targeting: "${slug}" for query "${target.query}" at pos ${target.position.toFixed(1)}`);

  const { snippetHe, snippetEn } = await generateSnippetParagraph(slug, target.query, target.position);
  await injectSnippetIntoVideos(slug, snippetHe, snippetEn);
  await markOptimised(slug, target.query, target.position);

  return {
    postId:      slug,
    query:       target.query,
    position:    Math.round(target.position * 10) / 10,
    impressions: target.impressions,
    snippetHe,
    snippetEn,
  };
}
