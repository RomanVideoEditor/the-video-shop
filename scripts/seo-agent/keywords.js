// ─── INDUSTRY KEYWORD RESEARCH ───────────────────────────────────────────────
// Runs every 4 cycles (~2 months) to surface trending keywords in the
// video production industry that we're not yet targeting.

import Anthropic from "@anthropic-ai/sdk";
import { CONFIG } from "./config.js";

const client = new Anthropic({ apiKey: CONFIG.anthropicApiKey });

export async function researchIndustryKeywords(currentTopics) {
  const existingKeywords = currentTopics.flatMap((t) => t.keywords).join(", ");

  const prompt = `You are an SEO strategist specializing in B2B video production in Israel.

The company: videoshop (the-videoshop.com) — boutique video production studio in Tel Aviv.
Services: corporate brand films, animation/explainer, AI video, high-tech startup films, real estate video, training videos.
Markets: Israel (Hebrew searches) + English-speaking markets (global B2B).

Current target keywords already in use:
${existingKeywords}

Task: Identify 15 high-opportunity keywords we are MISSING — keywords that:
1. Have real search volume (people actually search for these)
2. Are NOT already in our list above
3. Are relevant to video production for B2B companies in 2025-2026
4. Mix of Hebrew and English (include both)
5. Include emerging trends (AI video, vertical video, LinkedIn video, etc.)

For each keyword, rate opportunity: high / medium / low based on:
- Search volume estimate
- Competition level
- Fit for videoshop's services

Return ONLY valid JSON:
{
  "researchDate": "${new Date().toISOString().split("T")[0]}",
  "keywords": [
    {
      "keyword": "the keyword phrase",
      "language": "he" or "en",
      "opportunity": "high" | "medium" | "low",
      "rationale": "one sentence why this is valuable",
      "suggestedTopic": "which of our service pages this fits best"
    }
  ],
  "summary": "2-3 sentence overview of the biggest trends and gaps we should address"
}`;

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 2000,
    messages: [{ role: "user", content: prompt }],
  });

  const text = response.content[0].text.trim();
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw new Error(`Keyword research returned invalid JSON: ${text.slice(0, 200)}`);
  }
}
