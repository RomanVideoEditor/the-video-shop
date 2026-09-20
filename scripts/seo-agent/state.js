// ─── STATE MANAGEMENT (Firebase Firestore) ───────────────────────────────────
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { CONFIG } from "./config.js";

let db;

function initFirebase() {
  if (getApps().length === 0) {
    initializeApp({
      credential: cert(CONFIG.firebaseCredentials),
      projectId: CONFIG.firebaseProjectId,
    });
  }
  db = getFirestore();
}

// ── Schema for a cycle document ──────────────────────────────────────────────
// {
//   id: string (auto),
//   startedAt: Timestamp,
//   topicId: string,
//   topicLabel: string,
//   actionType: "safe_auto" | "pr",
//   actionDescription: string,
//   filesChanged: string[],
//   prNumber: number | null,
//   baselineMetrics: { keyword, impressions, clicks, position }[],
//   followupMetrics: { ... }[] | null,
//   followupAt: Timestamp | null,
//   result: "pending" | "improved" | "no_change" | "degraded",
// }

export async function getLastCycles(limit = 10) {
  initFirebase();
  const snap = await db
    .collection("seo_cycles")
    .orderBy("startedAt", "desc")
    .limit(limit)
    .get();
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getPendingCycle() {
  initFirebase();
  const snap = await db
    .collection("seo_cycles")
    .where("result", "==", "pending")
    .orderBy("startedAt", "asc")
    .limit(1)
    .get();
  if (snap.empty) return null;
  const doc = snap.docs[0];
  return { id: doc.id, ...doc.data() };
}

export async function saveCycle(cycle) {
  initFirebase();
  const ref = db.collection("seo_cycles").doc();
  await ref.set({ ...cycle, startedAt: Timestamp.now(), result: "pending" });
  return ref.id;
}

export async function updateCycleResult(cycleId, followupMetrics, result) {
  initFirebase();
  await db.collection("seo_cycles").doc(cycleId).update({
    followupMetrics,
    followupAt: Timestamp.now(),
    result,
  });
}

// Which topics were used recently (to avoid repeating the same topic)
export async function getRecentTopicIds(withinDays = 60) {
  initFirebase();
  const since = new Date(Date.now() - withinDays * 86400000);
  const snap = await db
    .collection("seo_cycles")
    .where("startedAt", ">", Timestamp.fromDate(since))
    .get();
  return snap.docs.map((d) => d.data().topicId);
}
