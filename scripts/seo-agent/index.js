#!/usr/bin/env node
// ─── SEO AGENT — MAIN ORCHESTRATOR ──────────────────────────────────────────
// Runs bi-weekly via GitHub Actions.
// Flow:
//   1. Check for a pending cycle (from 2 weeks ago) → measure followup metrics → close it
//   2. Pick the weakest-ranking topic not recently touched
//   3. Generate content improvements via Claude
//   4. Apply changes (safe = auto-commit, blog = PR)
//   5. Save cycle to Firebase
//   6. Send email summary

import { KEYWORD_TOPICS } from "./config.js";
import {
  getLastCycles,
  getPendingCycle,
  saveCycle,
  updateCycleResult,
  getRecentTopicIds,
} from "./state.js";
import { fetchKeywordMetrics, pickWeakestTopic, fetchLowCtrPages, pingSitemap, fetchOrphanQueries } from "./gsc.js";
import { generateFaqItems, generateBlogPost } from "./claude.js";
import { commitFaqItems, openBlogPostPr, getExistingBlogPosts } from "./changes.js";
import { sendSummaryEmail } from "./email.js";
import { researchIndustryKeywords } from "./keywords.js";
import { runPageSpeedAudit } from "./pagespeed.js";
import { optimizeMetaForTopic, optimizeTitleForTopic } from "./meta.js";
import { findLowHangingKeywords } from "./lowhanging.js";
import { refreshStalePosts } from "./refresh.js";

// ── Step 1: Close any pending cycle ──────────────────────────────────────────

async function closePendingCycle() {
  const pending = await getPendingCycle();
  if (!pending) return null;

  const topic = KEYWORD_TOPICS.find((t) => t.id === pending.topicId);
  if (!topic) return null;

  console.log(`[agent] Closing pending cycle for topic: ${topic.label}`);
  const followupMetrics = await fetchKeywordMetrics(topic.keywords, 7); // last week

  // Determine result
  const baseAvg = avg(pending.baselineMetrics.map((m) => m.position));
  const followAvg = avg(followupMetrics.map((m) => m.position));

  let result;
  if (followAvg < baseAvg - 2)      result = "improved";
  else if (followAvg > baseAvg + 2) result = "degraded";
  else                               result = "no_change";

  await updateCycleResult(pending.id, followupMetrics, result);

  await sendSummaryEmail({
    topicLabel: topic.label,
    actionType: pending.actionType,
    filesChanged: pending.filesChanged,
    prUrl: pending.prNumber
      ? `https://github.com/${process.env.GITHUB_REPOSITORY || ""}/pull/${pending.prNumber}`
      : null,
    baselineMetrics: pending.baselineMetrics,
    followupMetrics,
  });

  console.log(`[agent] Cycle closed: ${result} (avg position ${baseAvg.toFixed(1)} → ${followAvg.toFixed(1)})`);
  return result;
}

// ── Step 2–5: Run new cycle ───────────────────────────────────────────────────

async function runNewCycle(research) {
  const recentTopicIds = await getRecentTopicIds(60);
  const { topic, metrics } = await pickWeakestTopic(KEYWORD_TOPICS, recentTopicIds);

  console.log(`[agent] Selected topic: ${topic.label} (avg position: ${avg(metrics.map(m => m.position)).toFixed(1)})`);

  // Decide action: alternate between FAQ (safe) and blog (PR)
  const lastCycles = await getLastCycles(4);
  const lastAction = lastCycles[0]?.actionType;
  const actionType = lastAction === "safe_auto" ? "pr" : "safe_auto";

  let filesChanged = [];
  let prNumber = null;
  let actionDescription = "";

  // Low-hanging fruit — keywords at positions 11-25
  const lowHangingKeywords = await findLowHangingKeywords().catch((err) => {
    console.warn("[agent] Low-hanging keyword scan failed:", err.message);
    return [];
  });
  if (lowHangingKeywords.length) {
    console.log(`[agent] Top low-hanging keyword: "${lowHangingKeywords[0].keyword}" at pos ${lowHangingKeywords[0].position}`);
  }

  // CTR analysis — pages with good rank but poor click-through
  const lowCtrPages = await fetchLowCtrPages().catch((err) => {
    console.warn("[agent] CTR analysis failed:", err.message);
    return [];
  });
  if (lowCtrPages.length) {
    console.log(`[agent] ${lowCtrPages.length} page(s) with low CTR despite good position:`);
    lowCtrPages.forEach((p) => console.log(`  ${p.page} pos=${p.position} ctr=${p.ctr}%`));
  }

  // Always run PageSpeed audit
  const pageSpeedReport = await runPageSpeedAudit(process.env.PAGESPEED_API_KEY).catch((err) => {
    console.warn("[agent] PageSpeed audit failed:", err.message);
    return null;
  });

  // Meta + title optimizer (on safe_auto cycles)
  let metaResult = null;
  let titleResult = null;
  let refreshResult = null;
  if (actionType === "safe_auto") {
    const weakKeywords = metrics.filter((m) => m.position > 15).map((m) => m.keyword);
    const hasCtrIssue = lowCtrPages.some((p) => p.page.includes(topic.pagePath));

    if (weakKeywords.length > 0) {
      metaResult = await optimizeMetaForTopic(topic.id, topic.label, weakKeywords).catch((err) => {
        console.warn("[agent] Meta optimizer failed:", err.message);
        return null;
      });

      // Optimize title if this topic has a CTR issue or it's every other safe cycle
      const lastCycles = await getLastCycles(2);
      const shouldOptimizeTitle = hasCtrIssue || lastCycles.filter((c) => c.actionType === "safe_auto").length % 2 === 0;
      if (shouldOptimizeTitle) {
        titleResult = await optimizeTitleForTopic(topic.id, topic.label, weakKeywords, hasCtrIssue).catch((err) => {
          console.warn("[agent] Title optimizer failed:", err.message);
          return null;
        });
      }
    }

    // Content refresh — update a stale blog post
    refreshResult = await refreshStalePosts(topic.keywords).catch((err) => {
      console.warn("[agent] Content refresh failed:", err.message);
      return null;
    });

    const extraFiles = [
      ...(metaResult ? ["src/messages/he.json", "src/messages/en.json"] : []),
      ...(titleResult ? ["src/messages/he.json", "src/messages/en.json"] : []),
      ...(refreshResult ? ["src/lib/videos.ts"] : []),
    ];
    if (extraFiles.length) filesChanged.push(...[...new Set(extraFiles)]);
  }

  if (actionType === "safe_auto") {
    // Generate and commit FAQ items
    console.log("[agent] Generating FAQ items...");
    const newFaqs = await generateFaqItems(topic, [], metrics);
    const result = await commitFaqItems(topic.id, newFaqs);
    filesChanged = [result.filePath, ...(metaResult ? ["src/messages/he.json", "src/messages/en.json"] : [])];
    actionDescription = `Added ${result.itemsAdded} FAQ items to ${result.filePath}`;
    console.log(`[agent] Committed FAQ items: ${actionDescription}`);

    // Ping sitemap after committing changes to main
    await pingSitemap().catch(() => {});
  } else {
    // Fetch existing posts for internal linking
    const existingPosts = await getExistingBlogPosts(12).catch(() => []);
    if (existingPosts.length) {
      console.log(`[agent] Fetched ${existingPosts.length} existing posts for internal linking`);
    }

    // Generate blog post and open PR
    console.log("[agent] Generating blog post...");
    const weakestKeyword = metrics.sort((a, b) => b.position - a.position)[0].keyword;
    const post = await generateBlogPost(topic, weakestKeyword, metrics, existingPosts);
    post.topicId = topic.id;
    const { prNumber: num, prUrl, branch } = await openBlogPostPr(post);
    prNumber = num;
    filesChanged = ["src/lib/videos.ts"];
    actionDescription = `Opened PR #${num} for blog post: ${post.titleHe}`;
    console.log(`[agent] PR opened: ${prUrl}`);
  }

  // Save cycle
  const cycleId = await saveCycle({
    topicId: topic.id,
    topicLabel: topic.label,
    actionType,
    actionDescription,
    filesChanged,
    prNumber,
    baselineMetrics: metrics,
    followupMetrics: null,
    followupAt: null,
  });

  // Send email (no followup metrics yet — will be in the next cycle's email)
  await sendSummaryEmail({
    topicLabel: topic.label,
    topicId: topic.id,
    topicPagePath: topic.pagePath,
    actionType,
    filesChanged,
    prUrl: prNumber
      ? `https://github.com/${process.env.GITHUB_REPOSITORY || ""}/pull/${prNumber}`
      : null,
    baselineMetrics: metrics,
    followupMetrics: null,
    keywordResearch: research || null,
    pageSpeedReport: pageSpeedReport || null,
    metaResult: metaResult || null,
    titleResult: titleResult || null,
    refreshResult: refreshResult || null,
    lowCtrPages: lowCtrPages.length ? lowCtrPages : null,
    lowHangingKeywords: lowHangingKeywords.length ? lowHangingKeywords.slice(0, 10) : null,
  });

  console.log(`[agent] New cycle saved: ${cycleId}`);
}

// ── Main ──────────────────────────────────────────────────────────────────────

function avg(arr) {
  return arr.length ? arr.reduce((s, v) => s + v, 0) / arr.length : 100;
}

async function runKeywordResearch() {
  const lastCycles = await getLastCycles(4);
  // Run research every 4 cycles (~2 months)
  if (lastCycles.length > 0 && lastCycles.length % 4 !== 0) return;

  console.log("[agent] Running industry keyword research...");
  const research = await researchIndustryKeywords(KEYWORD_TOPICS);

  const highOpp = research.keywords.filter((k) => k.opportunity === "high");
  console.log(`[agent] Keyword research complete. ${highOpp.length} high-opportunity keywords found.`);
  console.log(`[agent] Summary: ${research.summary}`);

  // Log top keywords
  highOpp.forEach((k) => {
    console.log(`  [${k.language.toUpperCase()}] "${k.keyword}" → ${k.suggestedTopic}: ${k.rationale}`);
  });

  // GSC keyword gap analysis — queries we rank for but haven't written about yet
  const existingPosts = await getExistingBlogPosts(50).catch(() => []);
  const orphanQueries = await fetchOrphanQueries(existingPosts.map((p) => p.id)).catch(() => []);
  if (orphanQueries.length) {
    console.log(`[agent] ${orphanQueries.length} high-impression queries without dedicated posts:`);
    orphanQueries.forEach((q) => console.log(`  "${q.query}" — ${q.impressions} impressions, pos ${q.position}`));
    research.orphanQueries = orphanQueries;
  }

  return research;
}

async function main() {
  console.log("[agent] Starting SEO agent run at", new Date().toISOString());

  try {
    const research = await runKeywordResearch();
    await closePendingCycle();
    await runNewCycle(research);
    console.log("[agent] Done.");
  } catch (err) {
    console.error("[agent] Fatal error:", err);
    process.exit(1);
  }
}

main();
