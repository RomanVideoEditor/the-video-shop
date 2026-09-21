// ─── CLAUDE API — CONTENT GENERATION ─────────────────────────────────────────
import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.js";

const client = new Anthropic({ apiKey: CONFIG.anthropicApiKey });

// Generate 5 FAQ items for a given service page/topic in both Hebrew and English
export async function generateFaqItems(topic, existingFaqs = [], metrics) {
  const weakKeywords = metrics
    .filter((m) => m.position > 20)
    .map((m) => m.keyword)
    .join(", ");

  const safeLabel = topic.label.replace(/"/g, "'");
  const prompt = `You are an SEO specialist for videoshop (the-videoshop.com), a boutique video production studio in Tel Aviv, Israel.
The studio produces: corporate brand films, animation/explainer videos, AI video, high-tech/startup films, real estate video, training videos.
Real clients: Intel, Palo Alto Networks, Ashtrom, Ondas Holdings (NASDAQ).

Topic: "${safeLabel}" (page: ${topic.pagePath})
Weak keywords (position >20 in Google): ${weakKeywords || "all keywords need improvement"}

Existing FAQ questions already on this page:
${existingFaqs.map((q) => `- ${q}`).join("\n") || "(none)"}

Task: Generate 4 NEW FAQ items that:
1. Directly answer real questions people search for about "${topic.label}"
2. Include the weak keywords naturally in questions and answers
3. Are NOT duplicates of the existing FAQs listed above
4. Each answer is 2-4 sentences, factual, specific to videoshop
5. Written from videoshop's perspective ("we", "our", "us")

Return ONLY valid JSON (no markdown, no explanation):
[
  {
    "qHe": "שאלה בעברית?",
    "qEn": "Question in English?",
    "aHe": "תשובה בעברית.",
    "aEn": "Answer in English."
  }
]`;

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1500,
    messages: [{ role: "user", content: prompt }],
  });

  const text = response.content[0].text.trim();
  try {
    return JSON.parse(text);
  } catch {
    // Try to extract JSON from response
    const match = text.match(/\[[\s\S]*\]/);
    if (match) return JSON.parse(match[0]);
    throw new Error(`Claude returned invalid JSON: ${text.slice(0, 200)}`);
  }
}

// Internal link map for blog posts — keyword → service page URL
const INTERNAL_LINKS = {
  he: [
    { keyword: "סרט תדמית",        url: "/he/services/corporate" },
    { keyword: "סרטי חברה",        url: "/he/services/corporate" },
    { keyword: "employer branding", url: "/he/services/corporate" },
    { keyword: "הייטק",            url: "/he/services/hightech" },
    { keyword: "סטארטאפ",          url: "/he/services/hightech" },
    { keyword: "investor pitch",    url: "/he/services/hightech" },
    { keyword: "אנימציה",          url: "/he/services/animation" },
    { keyword: "סרטון הסבר",       url: "/he/services/animation" },
    { keyword: "וידאו AI",         url: "/he/services/ai" },
    { keyword: "בינה מלאכותית",    url: "/he/services/ai" },
    { keyword: "נדל\"ן",           url: "/he/services/realestate" },
    { keyword: "רחפן",             url: "/he/services/realestate" },
    { keyword: "מחיר",             url: "/he/pricing" },
    { keyword: "כמה עולה",         url: "/he/pricing" },
  ],
  en: [
    { keyword: "corporate video",         url: "/en/services/corporate" },
    { keyword: "employer branding",       url: "/en/services/corporate" },
    { keyword: "high-tech video",         url: "/en/services/hightech" },
    { keyword: "startup film",            url: "/en/services/hightech" },
    { keyword: "investor pitch",          url: "/en/services/hightech" },
    { keyword: "explainer video",         url: "/en/services/animation" },
    { keyword: "animation",               url: "/en/services/animation" },
    { keyword: "AI video",                url: "/en/services/ai" },
    { keyword: "real estate video",       url: "/en/services/realestate" },
    { keyword: "drone",                   url: "/en/services/realestate" },
    { keyword: "video production cost",   url: "/en/pricing" },
    { keyword: "how much",                url: "/en/pricing" },
  ],
};

function injectInternalLinks(body, lang) {
  const links = INTERNAL_LINKS[lang] ?? [];
  let result = body;
  const used = new Set();
  for (const { keyword, url } of links) {
    if (used.has(url)) continue; // max one link per destination page
    const regex = new RegExp(`(?<![\\[\\(])\\b(${keyword})\\b(?![\\]\\)])`, "i");
    if (regex.test(result)) {
      result = result.replace(regex, `[$1](https://www.the-videoshop.com${url})`);
      used.add(url);
    }
  }
  return result;
}

// Generate a short blog post targeting a specific keyword cluster
export async function generateBlogPost(topic, targetKeyword, metrics, relatedPosts = [], performanceInsights = null, conversionInsights = null) {
  const safeLabel = topic.label.replace(/"/g, "'");

  const relatedPostsBlock = relatedPosts.length
    ? `\nExisting blog posts you can link to (use [Post Title](https://www.the-videoshop.com/he/vlog/ID) in Hebrew body and /en/vlog/ID in English body — 1-2 links per post, natural placement only):\n${relatedPosts.map(p => `- ID: ${p.id} | He: ${p.titleHe} | En: ${p.titleEn}`).join("\n")}`
    : "";

  const insightsLines = [];
  if (performanceInsights?.promptSummary) insightsLines.push(performanceInsights.promptSummary);
  if (conversionInsights?.promptSummary)  insightsLines.push(conversionInsights.promptSummary);
  const insightsBlock = insightsLines.length
    ? `\nLearned from past successful cycles:\n${insightsLines.join("\n")}`
    : "";

  const prompt = `You are a content writer for videoshop (the-videoshop.com), a boutique B2B video production studio in Tel Aviv.

Write a blog post targeting the keyword: "${targetKeyword}"
Related to service: "${safeLabel}" (${topic.pagePath})
Other keywords to include naturally: ${topic.keywords.filter(k => k !== targetKeyword).slice(0, 3).join(", ")}
${insightsBlock}${relatedPostsBlock}
Requirements:
- Hebrew post with English translation
- Length: 500-700 words per language
- Structure: intro paragraph, 3-4 H2 sections with question-format headings, CTA at end
- Concrete, factual — mention real clients (Intel, Palo Alto, Ashtrom) where relevant
- Include 1-2 specific price ranges (in NIS) where relevant to the topic
- No fluff, no generic marketing language
- Add 1-2 internal links to the most relevant existing blog posts listed above (if any)

Return ONLY valid JSON:
{
  "id": "slug-in-english-no-spaces",
  "titleHe": "כותרת בעברית",
  "titleEn": "Title in English",
  "excerptHe": "תקציר קצר בעברית (1-2 משפטים)",
  "excerptEn": "Short excerpt in English (1-2 sentences)",
  "tags": ["tag1", "tag2", "tag3"],
  "bodyHe": "גוף המאמר בעברית עם ## כותרות H2",
  "bodyEn": "Article body in English with ## H2 headings"
}`;

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 3000,
    messages: [{ role: "user", content: prompt }],
  });

  const text = response.content[0].text.trim();
  let post;
  try {
    post = JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) post = JSON.parse(match[0]);
    else throw new Error(`Claude returned invalid JSON: ${text.slice(0, 200)}`);
  }

  // Inject internal links into both language bodies
  post.bodyHe = injectInternalLinks(post.bodyHe, "he");
  post.bodyEn = injectInternalLinks(post.bodyEn, "en");

  return post;
}
