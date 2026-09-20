// ─── META DESCRIPTION OPTIMIZER ──────────────────────────────────────────────
// Analyzes weak-performing pages (low CTR in GSC) and rewrites their
// meta descriptions in he.json + en.json to improve click-through rate.

import Anthropic from "@anthropic-ai/sdk";
import { Octokit } from "octokit";
import { CONFIG } from "./config.js";

const client = new Anthropic({ apiKey: CONFIG.anthropicApiKey });
const octokit = new Octokit({ auth: CONFIG.githubToken });
const [owner, repo] = CONFIG.githubRepo.split("/");

// Map GSC topic id → message keys
const TOPIC_META_KEYS = {
  corporate:  { he: "servicesCorporateDesc",  en: "servicesCorporateDesc"  },
  hightech:   { he: "servicesHightechDesc",    en: "servicesHightechDesc"   },
  animation:  { he: "servicesAnimationDesc",   en: "servicesAnimationDesc"  },
  ai:         { he: "servicesAIDesc",          en: "servicesAIDesc"         },
  realestate: { he: "servicesRealestateDesc",  en: "servicesRealestateDesc" },
  training:   { he: "servicesTrainingDesc",    en: "servicesTrainingDesc"   },
  pricing:    { he: "pricingDesc",             en: "pricingDesc"            },
};

async function generateTitleTag(topicLabel, keywords, currentTitleHe, currentTitleEn, ctrIssue = false) {
  const prompt = `You are an SEO specialist for videoshop (the-videoshop.com), a boutique B2B video production studio in Tel Aviv.

Service page: "${topicLabel}"
${ctrIssue ? "⚠️ This page has LOW CTR despite good ranking — the title is not compelling enough." : ""}
Target keywords: ${keywords.join(", ")}

Current Hebrew title: "${currentTitleHe}"
Current English title: "${currentTitleEn}"

Rewrite BOTH title tags to:
1. Lead with the primary keyword (first 3 words if possible)
2. Stay under 60 characters each
3. Include a differentiator (price signal, client name, or unique claim)
4. Hebrew title: end with "| videoshop" or similar brand tag
5. English title: include "Israel" for geo-targeting

Return ONLY valid JSON:
{
  "titleHe": "כותרת חדשה בעברית עד 60 תווים | videoshop",
  "titleEn": "New English title under 60 chars | videoshop",
  "changeRationale": "One sentence explaining the improvement"
}`;

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 300,
    messages: [{ role: "user", content: prompt }],
  });

  const text = response.content[0].text.trim();
  try { return JSON.parse(text); }
  catch { const m = text.match(/\{[\s\S]*\}/); if (m) return JSON.parse(m[0]); throw new Error("Invalid JSON from title optimizer"); }
}

async function generateMetaDescription(topicLabel, keywords, currentDescHe, currentDescEn) {
  const prompt = `You are an SEO specialist for videoshop (the-videoshop.com), a boutique B2B video production studio in Tel Aviv.

Service page: "${topicLabel}"
Target keywords (weak in Google, need boosting): ${keywords.join(", ")}

Current Hebrew meta description:
"${currentDescHe}"

Current English meta description:
"${currentDescEn}"

Task: Rewrite BOTH meta descriptions to:
1. Include 1-2 target keywords naturally at the start or early in the text
2. Stay under 155 characters each
3. Have a clear value proposition + implicit CTA (e.g. "קבלו הצעת מחיר" / "Get a quote")
4. Keep the premium B2B tone — specific, confident, no generic filler
5. Mention a real client name (Intel / Palo Alto Networks / Ashtrom) if it fits naturally

Return ONLY valid JSON:
{
  "descHe": "תיאור חדש בעברית עד 155 תווים",
  "descEn": "New English description up to 155 characters",
  "changeRationale": "One sentence explaining what changed and why"
}`;

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 500,
    messages: [{ role: "user", content: prompt }],
  });

  const text = response.content[0].text.trim();
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error(`Meta optimizer returned invalid JSON: ${text.slice(0, 200)}`);
  }
}

async function getJsonFile(filePath) {
  const { data } = await octokit.rest.repos.getContent({ owner, repo, path: filePath });
  const content = Buffer.from(data.content, "base64").toString("utf8");
  return { parsed: JSON.parse(content), sha: data.sha, raw: content };
}

async function commitJsonFile(filePath, sha, obj, commitMsg) {
  const updated = JSON.stringify(obj, null, 2) + "\n";
  await octokit.rest.repos.createOrUpdateFileContents({
    owner, repo,
    path: filePath,
    message: commitMsg,
    content: Buffer.from(updated).toString("base64"),
    sha,
  });
}

export async function optimizeTitleForTopic(topicId, topicLabel, weakKeywords, ctrIssue = false) {
  const titleKeys = {
    corporate:  { he: "servicesCorporateTitle",  en: "servicesCorporateTitle"  },
    hightech:   { he: "servicesHightechTitle",    en: "servicesHightechTitle"   },
    animation:  { he: "servicesAnimationTitle",   en: "servicesAnimationTitle"  },
    ai:         { he: "servicesAITitle",          en: "servicesAITitle"         },
    realestate: { he: "servicesRealestateTitle",  en: "servicesRealestateTitle" },
    training:   { he: "servicesTrainingTitle",    en: "servicesTrainingTitle"   },
    pricing:    { he: "pricingTitle",             en: "pricingTitle"            },
  };

  const keys = titleKeys[topicId];
  if (!keys) return null;

  const heFile = await getJsonFile("src/messages/he.json");
  const enFile = await getJsonFile("src/messages/en.json");

  const currentTitleHe = heFile.parsed.meta?.[keys.he] ?? "";
  const currentTitleEn = enFile.parsed.meta?.[keys.en] ?? "";

  console.log(`[meta] Optimizing title for: ${topicLabel}`);
  const result = await generateTitleTag(topicLabel, weakKeywords, currentTitleHe, currentTitleEn, ctrIssue);

  if (result.titleHe.length > 65) result.titleHe = result.titleHe.slice(0, 62) + "...";
  if (result.titleEn.length > 65) result.titleEn = result.titleEn.slice(0, 62) + "...";

  heFile.parsed.meta[keys.he] = result.titleHe;
  await commitJsonFile("src/messages/he.json", heFile.sha, heFile.parsed,
    `seo-agent: optimize title tag for ${topicId} [skip ci]`);

  const enRefresh = await getJsonFile("src/messages/en.json");
  enRefresh.parsed.meta[keys.en] = result.titleEn;
  await commitJsonFile("src/messages/en.json", enRefresh.sha, enRefresh.parsed,
    `seo-agent: optimize English title tag for ${topicId} [skip ci]`);

  console.log(`[meta] Title updated for ${topicId}: ${result.changeRationale}`);
  return { topicId, before: { he: currentTitleHe, en: currentTitleEn }, after: { he: result.titleHe, en: result.titleEn }, rationale: result.changeRationale };
}

export async function optimizeMetaForTopic(topicId, topicLabel, weakKeywords) {
  const keys = TOPIC_META_KEYS[topicId];
  if (!keys) {
    console.warn(`[meta] No meta key mapping for topic: ${topicId}`);
    return null;
  }

  // Load both message files
  const heFile = await getJsonFile("src/messages/he.json");
  const enFile = await getJsonFile("src/messages/en.json");

  const currentDescHe = heFile.parsed.meta?.[keys.he] ?? "";
  const currentDescEn = enFile.parsed.meta?.[keys.en] ?? "";

  console.log(`[meta] Optimizing meta for: ${topicLabel}`);
  const result = await generateMetaDescription(topicLabel, weakKeywords, currentDescHe, currentDescEn);

  // Validate lengths
  if (result.descHe.length > 160) result.descHe = result.descHe.slice(0, 157) + "...";
  if (result.descEn.length > 160) result.descEn = result.descEn.slice(0, 157) + "...";

  // Patch and commit Hebrew
  heFile.parsed.meta[keys.he] = result.descHe;
  await commitJsonFile(
    "src/messages/he.json",
    heFile.sha,
    heFile.parsed,
    `seo-agent: update Hebrew meta description for ${topicId} [skip ci]`
  );

  // Re-fetch to get updated sha before second commit
  const enFileRefresh = await getJsonFile("src/messages/en.json");
  enFileRefresh.parsed.meta[keys.en] = result.descEn;
  await commitJsonFile(
    "src/messages/en.json",
    enFileRefresh.sha,
    enFileRefresh.parsed,
    `seo-agent: update English meta description for ${topicId} [skip ci]`
  );

  console.log(`[meta] Updated descriptions for ${topicId}: ${result.changeRationale}`);
  return {
    topicId,
    topicLabel,
    before: { he: currentDescHe, en: currentDescEn },
    after:  { he: result.descHe, en: result.descEn },
    rationale: result.changeRationale,
  };
}
