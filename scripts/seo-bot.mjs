#!/usr/bin/env node
/**
 * The Video Shop — SEO bot
 *
 *   node scripts/seo-bot.mjs              audit + report (saved to scripts/reports/)
 *   node scripts/seo-bot.mjs --email      also send the report by email
 *   node scripts/seo-bot.mjs --no-live    skip fetching the live site
 *
 * Reads: Search Console (GSC), GA4 analytics, live page audit.
 * Writes: scripts/reports/seo-YYYY-MM-DD.md
 * Never publishes anything — the scheduled task does that separately.
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createTransport } from "nodemailer";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const REPORTS_DIR = path.join(__dirname, "reports");
fs.mkdirSync(REPORTS_DIR, { recursive: true });

// ── config ────────────────────────────────────────────────────────────────────
const KEY_FILE =
  process.env.GOOGLE_KEY_FILE ??
  path.join(ROOT, ".secrets", "google-key.json");

const SITE_URL = "https://www.the-videoshop.com";
const GSC_SITE = "sc-domain:the-videoshop.com";
const GA4_PROPERTY = process.env.GA4_PROPERTY_ID ?? "553054418";

const PAGES = [
  { path: "/", label: "דף הבית" },
  { path: "/services/corporate", label: "סרטי חברה" },
  { path: "/services/hightech", label: "הייטק/סטארטאפ" },
  { path: "/services/animation", label: "אנימציה" },
  { path: "/services/ai", label: "AI וידאו" },
  { path: "/services/realestate", label: "נדל\"ן" },
  { path: "/services/defense", label: "ביטחון" },
  { path: "/services/training", label: "הדרכה" },
  { path: "/pricing", label: "מחירים" },
  { path: "/portfolio", label: "פורטפוליו" },
  { path: "/about", label: "אודות" },
  { path: "/contact", label: "צור קשר" },
  { path: "/testimonials", label: "המלצות" },
  { path: "/vlog", label: "בלוג" },
  { path: "/tel-aviv", label: "תל אביב" },
  { path: "/jerusalem", label: "ירושלים" },
  { path: "/ramat-gan", label: "רמת גן" },
];

const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);

// ── Google auth (JWT, no external deps) ──────────────────────────────────────
let _key = null;
function key() {
  if (!_key) {
    if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
      _key = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    } else if (fs.existsSync(KEY_FILE)) {
      _key = JSON.parse(fs.readFileSync(KEY_FILE, "utf8"));
    } else {
      throw new Error(`No Google credentials found. Set GOOGLE_SERVICE_ACCOUNT_JSON or place key at ${KEY_FILE}`);
    }
  }
  return _key;
}

async function googleToken(scope) {
  const k = key();
  const now = Math.floor(Date.now() / 1000);
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const unsigned = `${b64({ alg: "RS256", typ: "JWT" })}.${b64({
    iss: k.client_email, scope, aud: "https://oauth2.googleapis.com/token",
    iat: now, exp: now + 3600,
  })}`;
  const sig = crypto.createSign("RSA-SHA256").update(unsigned).sign(k.private_key, "base64url");
  const tok = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${sig}`,
    }),
  }).then((r) => r.json());
  if (!tok.access_token) throw new Error(`Auth failed: ${JSON.stringify(tok)}`);
  return tok.access_token;
}

// ── Search Console ────────────────────────────────────────────────────────────
async function fetchGsc(daysBack = 30) {
  const token = await googleToken("https://www.googleapis.com/auth/webmasters.readonly");
  const end = new Date(Date.now() - 2 * 86400000).toISOString().slice(0, 10);
  const start = new Date(Date.now() - daysBack * 86400000).toISOString().slice(0, 10);
  const res = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        startDate: start, endDate: end,
        dimensions: ["page", "query"],
        rowLimit: 5000,
      }),
    }
  ).then((r) => r.json());
  if (res.error) throw new Error(`GSC error: ${res.error.message}`);
  return (res.rows ?? []).map((r) => ({
    page: r.keys[0].replace(SITE_URL, ""),
    query: r.keys[1],
    clicks: r.clicks,
    impressions: r.impressions,
    ctr: r.ctr,
    position: r.position,
  }));
}

// Inspect index status for all known pages
async function inspectIndex() {
  const token = await googleToken("https://www.googleapis.com/auth/webmasters.readonly");
  const results = [];
  for (const p of PAGES) {
    const url = `${SITE_URL}${p.path}`;
    try {
      const res = await fetch(
        `https://searchconsole.googleapis.com/v1/urlInspection/index:inspect`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
          body: JSON.stringify({ inspectionUrl: url, siteUrl: GSC_SITE }),
        }
      ).then((r) => r.json());
      const verdict = res.inspectionResult?.indexStatusResult?.verdict ?? "UNKNOWN";
      const coverage = res.inspectionResult?.indexStatusResult?.coverageState ?? "";
      results.push({ path: p.path, label: p.label, verdict, coverage });
    } catch (e) {
      results.push({ path: p.path, label: p.label, verdict: "ERROR", coverage: e.message });
    }
  }
  return results;
}

// ── GA4 ───────────────────────────────────────────────────────────────────────
async function ga4Report(token, body) {
  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY}:runReport`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  ).then((r) => r.json());
  if (res.error) throw new Error(`GA4 error: ${res.error.message}`);
  const dimHeaders = (res.dimensionHeaders ?? []).map((h) => h.name);
  return (res.rows ?? []).map((r) => ({
    dims: Object.fromEntries(dimHeaders.map((n, i) => [n, r.dimensionValues[i].value])),
    metrics: r.metricValues.map((m) => Number(m.value)),
  }));
}

async function fetchGa4() {
  const token = await googleToken("https://www.googleapis.com/auth/analytics.readonly");
  const dateRanges = [{ startDate: "30daysAgo", endDate: "today" }];

  const [overview] = await ga4Report(token, {
    dateRanges,
    metrics: [{ name: "sessions" }, { name: "activeUsers" }, { name: "engagementRate" }],
  });

  const channels = await ga4Report(token, {
    dateRanges,
    dimensions: [{ name: "sessionDefaultChannelGroup" }],
    metrics: [{ name: "sessions" }, { name: "engagedSessions" }],
  });

  const devices = await ga4Report(token, {
    dateRanges,
    dimensions: [{ name: "deviceCategory" }],
    metrics: [{ name: "sessions" }, { name: "engagementRate" }],
  });

  const countries = await ga4Report(token, {
    dateRanges,
    dimensions: [{ name: "country" }],
    metrics: [{ name: "sessions" }],
    limit: 10,
  });

  const pages = await ga4Report(token, {
    dateRanges,
    dimensions: [{ name: "pagePath" }],
    metrics: [{ name: "screenPageViews" }, { name: "activeUsers" }, { name: "userEngagementDuration" }],
    limit: 50,
  });

  const languages = await ga4Report(token, {
    dateRanges,
    dimensions: [{ name: "language" }],
    metrics: [{ name: "sessions" }],
    limit: 10,
  });

  return {
    sessions: overview?.metrics[0] ?? 0,
    users: overview?.metrics[1] ?? 0,
    engagementRate: overview?.metrics[2] ?? 0,
    channels,
    devices,
    countries,
    pages,
    languages,
  };
}

// ── Live page audit ───────────────────────────────────────────────────────────
async function auditPage(urlPath) {
  const url = `${SITE_URL}${urlPath}`;
  try {
    const t0 = Date.now();
    const res = await fetch(url, { redirect: "follow", headers: { "User-Agent": "Mozilla/5.0 (compatible; seo-bot/1.0)" } });
    const html = await res.text();
    const ms = Date.now() - t0;
    const robots = html.match(/<meta name="robots" content="([^"]*)"/i)?.[1] ?? "";
    const canonical = html.match(/<link rel="canonical" href="([^"]*)"/i)?.[1] ?? "";
    const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? "";
    const desc = html.match(/<meta name="description" content="([^"]*)"/i)?.[1] ?? "";
    const h1Count = (html.match(/<h1[\s>]/gi) ?? []).length;
    const hasHreflang = html.includes('hreflang=');
    const hasSchema = html.includes('application/ld+json');
    return {
      url, status: res.status, ms, robots, canonical,
      titleLen: [...title].length, descLen: [...desc].length,
      h1Count, hasHreflang, hasSchema,
      issues: [],
    };
  } catch (e) {
    return { url, status: 0, ms: 0, robots: "", canonical: "", titleLen: 0, descLen: 0, h1Count: 0, hasHreflang: false, hasSchema: false, issues: [e.message] };
  }
}

// ── Analysis helpers ──────────────────────────────────────────────────────────
function gscByPage(rows) {
  const m = new Map();
  for (const r of rows) {
    const o = m.get(r.page) ?? { clicks: 0, impressions: 0, posSum: 0, posWeight: 0 };
    o.clicks += r.clicks;
    o.impressions += r.impressions;
    o.posSum += r.position * r.impressions;
    o.posWeight += r.impressions;
    m.set(r.page, o);
  }
  return m;
}

function topQueries(rows, n = 20) {
  const m = new Map();
  for (const r of rows) {
    const o = m.get(r.query) ?? { clicks: 0, impressions: 0, posSum: 0, posWeight: 0 };
    o.clicks += r.clicks;
    o.impressions += r.impressions;
    o.posSum += r.position * r.impressions;
    o.posWeight += r.impressions;
    m.set(r.query, o);
  }
  return [...m.entries()]
    .map(([q, o]) => ({ query: q, clicks: o.clicks, impressions: o.impressions, position: o.posWeight ? o.posSum / o.posWeight : 0 }))
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, n);
}

function lowCtrPages(byPage) {
  return [...byPage.entries()]
    .map(([page, o]) => ({
      page,
      clicks: o.clicks,
      impressions: o.impressions,
      ctr: o.impressions ? o.clicks / o.impressions : 0,
      position: o.posWeight ? o.posSum / o.posWeight : 0,
    }))
    .filter((r) => r.impressions >= 30 && r.ctr < 0.03 && r.position <= 15)
    .sort((a, b) => b.impressions - a.impressions);
}

function nearMissPages(byPage) {
  return [...byPage.entries()]
    .map(([page, o]) => ({
      page,
      impressions: o.impressions,
      position: o.posWeight ? o.posSum / o.posWeight : 0,
    }))
    .filter((r) => r.impressions >= 20 && r.position >= 8 && r.position <= 25)
    .sort((a, b) => a.position - b.position);
}

// ── Report builder ────────────────────────────────────────────────────────────
function buildReport({ date, gscRows, byPage, ga4, liveAudit, indexStatus }) {
  const lines = [];
  const h = (n, t) => lines.push(`${"#".repeat(n)} ${t}`);
  const row = (...cols) => lines.push(`| ${cols.join(" | ")} |`);
  const sep = (n) => lines.push(`| ${Array(n).fill("---").join(" | ")} |`);
  const nl = () => lines.push("");

  h(1, `The Video Shop — דוח SEO שבועי | ${date}`);
  nl();

  // ── GSC summary
  const totalClicks = gscRows.reduce((a, r) => a + r.clicks, 0);
  const totalImpr = gscRows.reduce((a, r) => a + r.impressions, 0);
  h(2, "סקירה מהירה (30 יום)");
  lines.push(`- **Search Console:** ${totalClicks} קליקים, ${totalImpr} חשיפות`);
  if (ga4) {
    lines.push(`- **GA4:** ${ga4.sessions} סשנים, ${ga4.users} משתמשים, engagement ${(ga4.engagementRate * 100).toFixed(0)}%`);
    if (ga4.sessions < 50) lines.push(`- ⚠️ מדגם קטן (${ga4.sessions} סשנים) — אין להסיק מסקנות סטטיסטיות`);
  }
  nl();

  // ── GA4 breakdown
  if (ga4) {
    h(2, "מקורות תנועה");
    row("ערוץ", "סשנים", "מעורבות");
    sep(3);
    for (const c of ga4.channels.sort((a, b) => b.metrics[0] - a.metrics[0]).slice(0, 8)) {
      row(c.dims.sessionDefaultChannelGroup, c.metrics[0], `${(c.metrics[1] / (c.metrics[0] || 1) * 100).toFixed(0)}%`);
    }
    nl();

    h(2, "מדינות מובילות");
    row("מדינה", "סשנים");
    sep(2);
    for (const c of ga4.countries.slice(0, 8)) row(c.dims.country, c.metrics[0]);
    nl();

    h(2, "שפות מובילות");
    row("שפה", "סשנים");
    sep(2);
    for (const l of ga4.languages.slice(0, 6)) row(l.dims.language, l.metrics[0]);
    nl();

    h(2, "עמודים מובילים (GA4)");
    row("עמוד", "צפיות", "משתמשים", "זמן ממוצע (שנ')");
    sep(4);
    for (const p of ga4.pages.slice(0, 15)) {
      const avgSec = p.metrics[1] ? Math.round(p.metrics[2] / p.metrics[1]) : 0;
      row(p.dims.pagePath, p.metrics[0], p.metrics[1], avgSec);
    }
    nl();
  }

  // ── GSC: top queries
  h(2, "שאילתות מובילות (GSC, 30 יום)");
  const queries = topQueries(gscRows);
  row("שאילתה", "חשיפות", "קליקים", "מיקום");
  sep(4);
  for (const q of queries) row(q.query, q.impressions, q.clicks, q.position.toFixed(1));
  nl();

  // ── GSC: pages
  h(2, "ביצועי עמודים (GSC)");
  row("עמוד", "חשיפות", "קליקים", "CTR", "מיקום");
  sep(5);
  for (const [page, o] of [...byPage.entries()].sort((a, b) => b[1].impressions - a[1].impressions).slice(0, 15)) {
    const ctr = o.impressions ? (o.clicks / o.impressions * 100).toFixed(1) : "0";
    const pos = o.posWeight ? (o.posSum / o.posWeight).toFixed(1) : "-";
    row(page, o.impressions, o.clicks, `${ctr}%`, pos);
  }
  nl();

  // ── Low CTR opportunities
  const lowCtr = lowCtrPages(byPage);
  if (lowCtr.length) {
    h(2, "⚠️ CTR נמוך — עמודים שמדורגים אבל לא נלחצים");
    row("עמוד", "חשיפות", "CTR", "מיקום");
    sep(4);
    for (const p of lowCtr.slice(0, 8)) row(p.page, p.impressions, `${(p.ctr * 100).toFixed(1)}%`, p.position.toFixed(1));
    nl();
  }

  // ── Near-miss pages
  const nearMiss = nearMissPages(byPage);
  if (nearMiss.length) {
    h(2, "🎯 במרחק פגיעה (מיקום 8–25)");
    row("עמוד", "חשיפות", "מיקום");
    sep(3);
    for (const p of nearMiss.slice(0, 8)) row(p.page, p.impressions, p.position.toFixed(1));
    nl();
  }

  // ── Index status
  if (indexStatus.length) {
    h(2, "📋 סטטוס אינדוקס");
    row("עמוד", "סטטוס", "פירוט");
    sep(3);
    for (const p of indexStatus) {
      const emoji = p.verdict === "PASS" ? "✅" : p.verdict === "FAIL" ? "❌" : "⚠️";
      row(`${p.label} (${p.path})`, `${emoji} ${p.verdict}`, p.coverage);
    }
    nl();
  }

  // ── Live audit
  if (liveAudit.length) {
    h(2, "🔍 ביקורת עמודים חיים");
    const issues = [];
    for (const a of liveAudit) {
      if (a.status !== 200) issues.push(`❌ ${a.url} — HTTP ${a.status}`);
      if (a.h1Count === 0) issues.push(`⚠️ ${a.url} — אין H1`);
      if (a.h1Count > 1) issues.push(`⚠️ ${a.url} — ${a.h1Count} כותרות H1`);
      if (a.titleLen === 0) issues.push(`⚠️ ${a.url} — אין title`);
      if (a.titleLen > 65) issues.push(`⚠️ ${a.url} — title ארוך (${a.titleLen} תווים)`);
      if (a.descLen === 0) issues.push(`⚠️ ${a.url} — אין meta description`);
      if (!a.hasHreflang) issues.push(`⚠️ ${a.url} — חסר hreflang`);
      if (!a.hasSchema) issues.push(`⚠️ ${a.url} — אין JSON-LD schema`);
      if (a.ms > 3000) issues.push(`🐌 ${a.url} — איטי (${a.ms}ms)`);
    }
    if (issues.length === 0) {
      lines.push("✅ כל העמודים עברו ביקורת בסיסית ללא בעיות.");
    } else {
      for (const i of issues) lines.push(`- ${i}`);
    }
    nl();
  }

  // ── Recommendations
  h(2, "🚀 המלצות לשבוע הבא");
  let recIdx = 1;
  if (lowCtr.length) lines.push(`${recIdx++}. **שכתב title/description** של ${lowCtr[0].page} — ${lowCtr[0].impressions} חשיפות עם CTR ${(lowCtr[0].ctr * 100).toFixed(1)}% בלבד`);
  if (nearMiss.length) lines.push(`${recIdx++}. **חזק** את ${nearMiss[0].page} (מיקום ${nearMiss[0].position.toFixed(1)}) — קרוב לעמוד 1`);
  const notIndexed = indexStatus.filter((p) => p.verdict !== "PASS");
  if (notIndexed.length) lines.push(`${recIdx++}. **בדוק** למה ${notIndexed.map((p) => p.path).join(", ")} לא באינדקס`);
  lines.push(`${recIdx++}. הרץ בוט שבועי שוב ב-7 ימים כדי לעקוב אחרי שינויים`);
  nl();

  return lines.join("\n");
}

// ── Email sender ──────────────────────────────────────────────────────────────
async function sendEmail(subject, markdown) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? "seo-bot@the-videoshop.com";
  const to = process.env.NOTIFY_EMAIL ?? "gornih.roman@gmail.com";
  if (!host || !user || !pass) {
    console.warn("[bot] SMTP not configured — skipping email");
    return;
  }
  const transport = createTransport({ host, port: 587, auth: { user, pass } });
  const html = markdown
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\| (.+) \|/g, (_, cells) => `<tr>${cells.split(" | ").map((c) => `<td style="padding:6px 10px;border-bottom:1px solid #eee">${c}</td>`).join("")}</tr>`)
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/\n{2,}/g, "<br><br>");
  await transport.sendMail({
    from, to, subject,
    text: markdown,
    html: `<div style="font-family:sans-serif;max-width:800px;margin:0 auto;direction:rtl">${html}</div>`,
  });
  console.log(`[bot] Email sent to ${to}`);
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  const date = new Date().toISOString().slice(0, 10);
  console.log(`[bot] The Video Shop SEO Bot — ${date}`);

  // GSC
  let gscRows = [];
  let byPage = new Map();
  try {
    console.log("[bot] Fetching Search Console data...");
    gscRows = await fetchGsc(30);
    byPage = gscByPage(gscRows);
    console.log(`[bot] GSC: ${gscRows.length} rows, ${byPage.size} pages`);
  } catch (e) {
    console.warn(`[bot] GSC failed: ${e.message}`);
  }

  // GA4
  let ga4 = null;
  try {
    console.log("[bot] Fetching GA4 data...");
    ga4 = await fetchGa4();
    console.log(`[bot] GA4: ${ga4.sessions} sessions`);
  } catch (e) {
    console.warn(`[bot] GA4 failed: ${e.message}`);
  }

  // Index status
  let indexStatus = [];
  if (!flag("no-live")) {
    console.log("[bot] Inspecting index status...");
    try {
      indexStatus = await inspectIndex();
      const pass = indexStatus.filter((p) => p.verdict === "PASS").length;
      console.log(`[bot] Index: ${pass}/${indexStatus.length} pages indexed`);
    } catch (e) {
      console.warn(`[bot] Index inspection failed: ${e.message}`);
    }
  }

  // Live audit
  let liveAudit = [];
  if (!flag("no-live")) {
    console.log("[bot] Auditing live pages...");
    liveAudit = await Promise.all(PAGES.map((p) => auditPage(p.path)));
    console.log(`[bot] Live audit: ${liveAudit.length} pages`);
  }

  // Build report
  const report = buildReport({ date, gscRows, byPage, ga4, liveAudit, indexStatus });

  const reportPath = path.join(REPORTS_DIR, `seo-${date}.md`);
  fs.writeFileSync(reportPath, report, "utf8");
  console.log(`[bot] Report saved: ${reportPath}`);

  // Email
  if (flag("email")) {
    await sendEmail(`The Video Shop — דוח SEO | ${date}`, report);
  }

  console.log("[bot] Done.");
}

main().catch((e) => {
  console.error("[bot] Fatal error:", e);
  process.exit(1);
});
