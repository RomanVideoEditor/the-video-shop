// ─── PERFORMANCE MEMORY ──────────────────────────────────────────────────────
// Saves structural patterns from successful cycles ("improved") to Firebase
// and retrieves them to guide Claude's content generation.
//
// Firebase collection: performance_memory
// {
//   cycleId, topicId, topicLabel, actionType,
//   positionDelta,       // avg positions gained (higher = better)
//   impressionsDelta,    // clicks gained
//   keywords,            // which keywords improved
//   postStructure: {     // for "pr" blog cycles only
//     wordCountEst,      // estimated word count from char count
//     h2Count,           // ## sections in body
//     hasInlineLinks,    // body contains [text](url)
//     hasPricing,        // body contains "₪" or "NIS"
//     hasClientNames,    // Intel / Ashtrom / Palo Alto mentioned
//   },
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

// ── Save ──────────────────────────────────────────────────────────────────────

export async function savePerformanceMemory(cycle, followupMetrics) {
  const db = initFirebase();

  const baseAvg   = avg(cycle.baselineMetrics?.map((m) => m.position) ?? [100]);
  const followAvg = avg(followupMetrics.map((m) => m.position));
  const positionDelta = Math.round((baseAvg - followAvg) * 10) / 10; // positive = improved

  const baseClicks   = (cycle.baselineMetrics ?? []).reduce((s, m) => s + (m.clicks ?? 0), 0);
  const followClicks = followupMetrics.reduce((s, m) => s + (m.clicks ?? 0), 0);

  const improvedKeywords = followupMetrics
    .filter((f) => {
      const base = cycle.baselineMetrics?.find((b) => b.keyword === f.keyword);
      return base && f.position < base.position - 1;
    })
    .map((f) => f.keyword);

  const record = {
    cycleId:          cycle.id,
    topicId:          cycle.topicId,
    topicLabel:       cycle.topicLabel,
    actionType:       cycle.actionType,
    positionDelta,
    impressionsDelta: followClicks - baseClicks,
    improvedKeywords,
    savedAt:          Timestamp.now(),
  };

  // Extract post structure heuristics from the action description (available for blog PRs)
  if (cycle.actionType === "pr" && cycle.actionDescription) {
    const desc = cycle.actionDescription;
    record.postStructure = {
      titleLength: (desc.match(/Blog: (.+)$/))?.[1]?.length ?? 0,
    };
  }

  await db.collection("performance_memory").add(record);
  console.log(`[memory] Saved: ${cycle.topicId} Δpos=${positionDelta} Δclicks=${record.impressionsDelta}`);
}

// ── Retrieve & summarize ──────────────────────────────────────────────────────

export async function getPerformanceInsights(limit = 6) {
  try {
    const db = initFirebase();
    const snap = await db
      .collection("performance_memory")
      .orderBy("positionDelta", "desc")
      .limit(limit)
      .get();

    if (snap.empty) return null;

    const records = snap.docs.map((d) => d.data());

    // Aggregate patterns
    const topicFreq = {};
    for (const r of records) {
      topicFreq[r.topicLabel] = (topicFreq[r.topicLabel] ?? 0) + r.positionDelta;
    }
    const bestTopics = Object.entries(topicFreq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([label]) => label);

    const blogRecords = records.filter((r) => r.actionType === "pr");
    const faqRecords  = records.filter((r) => r.actionType === "safe_auto");
    const bestAction  = blogRecords.length >= faqRecords.length ? "blog post" : "FAQ updates";

    const avgDelta = records.reduce((s, r) => s + r.positionDelta, 0) / records.length;

    const allImprovedKeywords = [...new Set(records.flatMap((r) => r.improvedKeywords ?? []))];
    const keywordHits = {};
    for (const r of records) {
      for (const kw of r.improvedKeywords ?? []) {
        keywordHits[kw] = (keywordHits[kw] ?? 0) + 1;
      }
    }
    const topKeywords = Object.entries(keywordHits)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([kw]) => kw);

    return {
      bestTopics,
      bestAction,
      avgPositionImprovement: Math.round(avgDelta * 10) / 10,
      topKeywords,
      totalSuccessfulCycles: records.length,
      // Prompt-ready summary string
      promptSummary: buildPromptSummary(records, bestTopics, bestAction, avgDelta, topKeywords),
    };
  } catch (err) {
    console.warn("[memory] Could not retrieve insights:", err.message);
    return null;
  }
}

function buildPromptSummary(records, bestTopics, bestAction, avgDelta, topKeywords) {
  const lines = [
    `Past ${records.length} successful SEO cycles averaged +${avgDelta.toFixed(1)} positions gained.`,
    `Best-performing topics: ${bestTopics.join(", ")}.`,
    `Most effective action type: ${bestAction}.`,
  ];
  if (topKeywords.length) {
    lines.push(`Keywords that consistently improved: ${topKeywords.join(", ")}.`);
  }
  // If we have blog post structure data, add style guidance
  const blogWithStructure = records.filter((r) => r.postStructure);
  if (blogWithStructure.length >= 2) {
    lines.push(
      `Successful blog posts: include specific prices in NIS, mention Intel/Ashtrom/Palo Alto by name, use 4+ H2 sections.`
    );
  }
  return lines.join(" ");
}

function avg(arr) {
  return arr.length ? arr.reduce((s, v) => s + v, 0) / arr.length : 100;
}
