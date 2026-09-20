// ─── CONTENT FRESHNESS REFRESHER ─────────────────────────────────────────────
// Finds blog posts older than 90 days and updates them with a fresh intro
// paragraph + updated date. Google rewards recently-updated content.

import Anthropic from "@anthropic-ai/sdk";
import { Octokit } from "octokit";
import { CONFIG } from "./config.js";

const client = new Anthropic({ apiKey: CONFIG.anthropicApiKey });
const octokit = new Octokit({ auth: CONFIG.githubToken });
const [owner, repo] = CONFIG.githubRepo.split("/");

const REFRESH_AFTER_DAYS = 90;

async function getVideosFile() {
  const { data } = await octokit.rest.repos.getContent({
    owner, repo, path: "src/lib/videos.ts",
  });
  const content = Buffer.from(data.content, "base64").toString("utf8");
  return { content, sha: data.sha };
}

function parsePostDates(content) {
  // Extract id + date pairs from the videos.ts array
  const matches = [...content.matchAll(/id:\s*"([^"]+)"[\s\S]*?date:\s*"(\d{4}-\d{2}-\d{2})"/g)];
  return matches.map(([, id, date]) => ({ id, date: new Date(date) }));
}

async function generateRefreshParagraph(postId, postTitle, keywords) {
  const today = new Date().toISOString().split("T")[0];
  const prompt = `You are a content editor for videoshop (the-videoshop.com), a boutique B2B video production studio in Tel Aviv.

A blog post titled "${postTitle}" was written some months ago and needs a freshness update.
Today's date: ${today}

Write a short "עדכון ${today.slice(0, 7)}" (update paragraph) of 2-3 sentences in Hebrew and English that:
1. Acknowledges this article has been updated with current information
2. Adds one genuinely new/current insight about video production trends in 2026
3. Feels natural, not forced

Keywords to weave in naturally: ${keywords.join(", ")}

Return ONLY valid JSON:
{
  "updateHe": "פסקת עדכון בעברית (2-3 משפטים)",
  "updateEn": "Update paragraph in English (2-3 sentences)",
  "updateDate": "${today}"
}`;

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 400,
    messages: [{ role: "user", content: prompt }],
  });

  const text = response.content[0].text.trim();
  try { return JSON.parse(text); }
  catch { const m = text.match(/\{[\s\S]*\}/); if (m) return JSON.parse(m[0]); throw new Error("Invalid JSON from refresh"); }
}

export async function refreshStalePosts(topicKeywords = []) {
  const { content, sha } = await getVideosFile();
  const posts = parsePostDates(content);
  const today = new Date();

  const stale = posts.filter((p) => {
    const ageDays = (today - p.date) / 86400000;
    return ageDays >= REFRESH_AFTER_DAYS;
  });

  if (stale.length === 0) {
    console.log("[refresh] No stale posts found.");
    return null;
  }

  // Refresh the oldest post
  const target = stale.sort((a, b) => a.date - b.date)[0];
  console.log(`[refresh] Refreshing post: ${target.id} (age: ${Math.round((today - target.date) / 86400000)} days)`);

  // Extract title from content for context
  const titleMatch = content.match(new RegExp(`id:\\s*"${target.id}"[\\s\\S]*?titleHe:\\s*"([^"]+)"`));
  const titleHe = titleMatch?.[1] ?? target.id;

  const update = await generateRefreshParagraph(target.id, titleHe, topicKeywords.slice(0, 3));

  // Prepend update notice to bodyHe and bodyEn
  const heNotice = `\n\n> **עדכון ${update.updateDate.slice(0, 7)}:** ${update.updateHe}\n\n`;
  const enNotice = `\n\n> **Update ${update.updateDate.slice(0, 7)}:** ${update.updateEn}\n\n`;

  // Update date field and inject update notice into bodies
  let updated = content
    .replace(
      new RegExp(`(id:\\s*"${target.id}"[\\s\\S]*?date:\\s*)"\\d{4}-\\d{2}-\\d{2}"`),
      `$1"${update.updateDate}"`
    );

  // Inject update notice at start of bodyHe and bodyEn
  updated = updated.replace(
    new RegExp(`(id:\\s*"${target.id}"[\\s\\S]*?bodyHe:\\s*)"([^"]{0,50})`),
    (m, prefix, start) => `${prefix}"${heNotice.trim()} ${start}`
  );

  await octokit.rest.repos.createOrUpdateFileContents({
    owner, repo,
    path: "src/lib/videos.ts",
    message: `seo-agent: refresh blog post "${target.id}" date + intro [skip ci]`,
    content: Buffer.from(updated).toString("base64"),
    sha,
  });

  console.log(`[refresh] Refreshed: ${target.id} → new date ${update.updateDate}`);
  return { postId: target.id, titleHe, oldDate: target.date.toISOString().split("T")[0], newDate: update.updateDate, updateHe: update.updateHe };
}
