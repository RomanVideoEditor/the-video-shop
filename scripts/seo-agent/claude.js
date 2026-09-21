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
    const match = text.match(/\[[\s\S]*\]/);
    if (match) {
      try { return JSON.parse(match[0]); } catch {}
    }
    // GitHub Actions masks secrets inside stdout — if *** appears in the
    // response it means a secret value collided with generated text.
    // Log a warning and return an empty array so the cycle can continue.
    if (text.includes("***")) {
      console.warn("[claude] FAQ response contained masked secret token — skipping FAQ update this cycle");
      return [];
    }
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

// Determine what funnel stage to write for based on recent post history
function chooseFunnelStage(recentPostIds = []) {
  // Count recent posts by stage (inferred from slug patterns)
  const bottomSignals = ["מחיר", "עלות", "cost", "price", "השוואה", "comparison", "hire", "agency", "budget", "pricing"];
  const recentBottomCount = recentPostIds.filter((id) =>
    bottomSignals.some((s) => id.toLowerCase().includes(s))
  ).length;

  // 1 in 3 posts should be bottom-of-funnel (price/comparison/hire intent)
  if (recentBottomCount === 0 && recentPostIds.length >= 2) return "bottom";
  return "top"; // default: awareness / educational
}

// Generate a short blog post targeting a specific keyword cluster
export async function generateBlogPost(topic, targetKeyword, metrics, relatedPosts = [], performanceInsights = null, conversionInsights = null) {
  const safeLabel = topic.label.replace(/"/g, "'");

  const funnelStage = chooseFunnelStage(relatedPosts.map((p) => p.id));
  const funnelGuidance = funnelStage === "bottom"
    ? `FUNNEL STAGE: Bottom-of-funnel (decision intent).
This post targets someone who is READY TO BUY and comparing studios.
- Lead with a concrete price range in the title and intro (NIS)
- Include a comparison table or bullet list: "what you get at videoshop vs. a freelancer vs. a large agency"
- End with a direct CTA: "קבלו הצעת מחיר תוך 24 שעות" / "Get a quote within 24 hours"
- Mention at least one named client (Intel, Palo Alto, Ashtrom) + the outcome they got`
    : `FUNNEL STAGE: Top-of-funnel (awareness / educational).
This post targets someone learning about video production — build trust and authority.
- Educate, don't sell aggressively
- Include a practical tip or framework they can use immediately
- Soft CTA at end (e.g., "רוצה לדעת עוד?" / "Curious how we'd approach your project?")`;

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

${funnelGuidance}
${insightsBlock}${relatedPostsBlock}
General requirements:
- Hebrew post with English translation
- Length: 500-700 words per language
- Structure: intro paragraph, 3-4 H2 sections with question-format headings
- Concrete, factual — no generic marketing language
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

  // Sonnet for blog posts — higher quality B2B content justifies the cost
  const response = await client.messages.create({
    model: "claude-sonnet-5",
    max_tokens: 4000,
    messages: [{ role: "user", content: prompt }],
  });

  const text = response.content[0].text.trim();
  let post;
  try {
    post = JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      try { post = JSON.parse(match[0]); } catch {}
    }
    if (!post) {
      if (text.includes("***")) {
        throw new Error("Blog post response contained GitHub Actions masked secret token — retry next cycle");
      }
      throw new Error(`Claude returned invalid JSON: ${text.slice(0, 200)}`);
    }
  }

  // Inject internal links into both language bodies
  post.bodyHe = injectInternalLinks(post.bodyHe, "he");
  post.bodyEn = injectInternalLinks(post.bodyEn, "en");

  return post;
}
