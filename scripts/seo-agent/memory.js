// ─── PERFORMANCE MEMORY ──────────────────────────────────────────────────────
// Saves every closed cycle (improved / no_change / degraded) to Firebase
// and retrieves patterns to guide Claude's content generation.
//
// Firebase collection: performance_memory
// {
//   cycleId, topicId, topicLabel, actionType,
//   result,              // "improved" | "no_change" | "degraded"
//   positionDelta,       // avg positions gained (negative = degraded)
//   impressionsDelta,
//   improvedKeywords,
//   savedAt: Timestamp,
// }

import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { CONFIG } from "./config.js";

let db;
function initFirebase() {
  if (getApps().length === 0) {
    initializeApp({ credential: cert(CONFIG.firebaseCredentials), projectId: CONFIG.firebaseProjectId });
  }
  db = getFirestore();
  return db;
}

// ── Save (called for every closed cycle, not only "improved") ─────────────────

export async function savePerformanceMemory(cycle, followupMetrics, result) {
  const db = initFirebase();

  const baseAvg   = avg(cycle.baselineMetrics?.map((m) => m.position) ?? [100]);
  const followAvg = avg(followupMetrics.map((m) => m.position));
  const positionDelta = Math.round((baseAvg - followAvg) * 10) / 10;

  const baseClicks   = (cycle.baselineMetrics ?? []).reduce((s, m) => s + (m.clicks ?? 0), 0);
  const followClicks = followupMetrics.reduce((s, m) => s + (m.clicks ?? 0), 0);

  const improvedKeywords = followupMetrics
    .filter((f) => {
      const base = cycle.baselineMetrics?.find((b) => b.keyword === f.keyword);
      return base && f.position < base.position - 1;
    })
    .map((f) => f.keyword);

  const degradedKeywords = followupMetrics
    .filter((f) => {
      const base = cycle.baselineMetrics?.find((b) => b.keyword === f.keyword);
      return base && f.position > base.position + 1;
    })
    .map((f) => f.keyword);

  const record = {
    cycleId:           cycle.id,
    topicId:           cycle.topicId,
    topicLabel:        cycle.topicLabel,
    actionType:        cycle.actionType,
    result,            // "improved" | "no_change" | "degraded"
    positionDelta,
    impressionsDelta:  followClicks - baseClicks,
    improvedKeywords,
    degradedKeywords,
    savedAt:           Timestamp.now(),
  };

  await db.collection("performance_memory").add(record);
  const sign = positionDelta > 0 ? "+" : "";
  console.log(`[memory] Saved [${result}]: ${cycle.topicId} Δpos=${sign}${positionDelta}`);
}

// ── Retrieve & summarize ──────────────────────────────────────────────────────

export async function getPerformanceInsights(limit = 20) {
  try {
    const db = initFirebase();
    const snap = await db
      .collection("performance_memory")
      .orderBy("savedAt", "desc")
      .limit(limit)
      .get();

    if (snap.empty) return null;

    const all       = snap.docs.map((d) => d.data());
    const winners   = all.filter((r) => r.result === "improved");
    const failures  = all.filter((r) => r.result === "no_change" || r.result === "degraded");

    if (!winners.length && !failures.length) return null;

    // ── Winner patterns ──────────────────────────────────────────────────────
    const winnerTopicFreq = {};
    for (const r of winners) {
      winnerTopicFreq[r.topicLabel] = (winnerTopicFreq[r.topicLabel] ?? 0) + r.positionDelta;
    }
    const bestTopics = Object.entries(winnerTopicFreq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([label]) => label);

    const winnerBlogs = winners.filter((r) => r.actionType === "pr").length;
    const winnerFaqs  = winners.filter((r) => r.actionType === "safe_auto").length;
    const bestAction  = winnerBlogs >= winnerFaqs ? "blog post" : "FAQ updates";

    const avgDelta = winners.length
      ? winners.reduce((s, r) => s + r.positionDelta, 0) / winners.length
      : 0;

    const kwHits = {};
    for (const r of winners) {
      for (const kw of r.improvedKeywords ?? []) {
        kwHits[kw] = (kwHits[kw] ?? 0) + 1;
      }
    }
    const topKeywords = Object.entries(kwHits)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([kw]) => kw);

    // ── Failure patterns ─────────────────────────────────────────────────────
    const failTopicFreq = {};
    for (const r of failures) {
      failTopicFreq[r.topicLabel] = (failTopicFreq[r.topicLabel] ?? 0) + 1;
    }
    const worstTopics = Object.entries(failTopicFreq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .map(([label]) => label);

    const failBlogs = failures.filter((r) => r.actionType === "pr").length;
    const failFaqs  = failures.filter((r) => r.actionType === "safe_auto").length;
    const failAction = failBlogs > failFaqs ? "blog posts" : "FAQ updates";

    const degradedKwHits = {};
    for (const r of failures) {
      for (const kw of r.degradedKeywords ?? []) {
        degradedKwHits[kw] = (degradedKwHits[kw] ?? 0) + 1;
      }
    }
    const worstKeywords = Object.entries(degradedKwHits)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([kw]) => kw);

    return {
      // Success
      bestTopics,
      bestAction,
      avgPositionImprovement: Math.round(avgDelta * 10) / 10,
      topKeywords,
      totalSuccessfulCycles: winners.length,
      // Failure
      worstTopics,
      failAction,
      worstKeywords,
      totalFailedCycles: failures.length,
      // Prompt
      promptSummary: buildPromptSummary({
        winners, failures,
        bestTopics, bestAction, avgDelta, topKeywords,
        worstTopics, failAction, worstKeywords,
      }),
    };
  } catch (err) {
    console.warn("[memory] Could not retrieve insights:", err.message);
    return null;
  }
}

function buildPromptSummary({ winners, failures, bestTopics, bestAction, avgDelta, topKeywords, worstTopics, failAction, worstKeywords }) {
  const lines = [];

  if (winners.length) {
    lines.push(`Past ${winners.length} successful SEO cycles averaged +${avgDelta.toFixed(1)} positions.`);
    lines.push(`What worked: ${bestAction} on topics [${bestTopics.join(", ")}].`);
    if (topKeywords.length) lines.push(`Keywords that responded well: ${topKeywords.join(", ")}.`);
    lines.push(`Winning post traits: specific NIS prices, named clients (Intel/Ashtrom/Palo Alto), 4+ H2 sections, internal links.`);
  }

  if (failures.length) {
    lines.push(`⚠ ${failures.length} cycle(s) had no improvement.`);
    if (worstTopics.length) lines.push(`Topics that underperformed: ${worstTopics.join(", ")} — avoid generic angles on these.`);
    if (worstKeywords.length) lines.push(`Keywords that degraded: ${worstKeywords.join(", ")} — do NOT target these directly.`);
    if (failAction) lines.push(`Least effective action type on stagnant topics: ${failAction}.`);
  }

  return lines.join(" ");
}

function avg(arr) {
  return arr.length ? arr.reduce((s, v) => s + v, 0) / arr.length : 100;
}
