// ─── EMAIL SUMMARY ───────────────────────────────────────────────────────────
import nodemailer from "nodemailer";
import { CONFIG } from "./config.js";

function positionEmoji(pos) {
  if (pos <= 3)  return "🥇";
  if (pos <= 10) return "🟢";
  if (pos <= 20) return "🟡";
  return "🔴";
}

function delta(before, after) {
  if (before === null || after === null) return "–";
  const diff = after - before;
  if (diff < 0) return `▲ ${Math.abs(diff).toFixed(1)} (improved)`;
  if (diff > 0) return `▼ ${diff.toFixed(1)} (dropped)`;
  return "= no change";
}

function buildKeywordResearchSection(research) {
  if (!research) return "";
  const highOpp = research.keywords.filter((k) => k.opportunity === "high").slice(0, 8);
  const rows = highOpp.map((k) => `
    <tr>
      <td style="padding:6px 10px;border-bottom:1px solid #eee">${k.keyword}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">${k.language === "he" ? "🇮🇱" : "🌐"}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #eee;color:#666;font-size:12px">${k.suggestedTopic}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #eee;color:#888;font-size:11px">${k.rationale}</td>
    </tr>`).join("");

  return `
    <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
    <h3 style="font-size:14px;border-bottom:2px solid #FFD000;padding-bottom:6px">מחקר מילות מפתח — טרנדים בתעשייה</h3>
    <p style="font-size:13px;color:#444;margin:8px 0 12px">${research.summary}</p>
    <table style="width:100%;border-collapse:collapse;font-size:13px">
      <thead>
        <tr style="background:#f5f5f5">
          <th style="padding:6px 10px;text-align:right">מילת מפתח</th>
          <th style="padding:6px 10px">שפה</th>
          <th style="padding:6px 10px">דף מומלץ</th>
          <th style="padding:6px 10px">סיבה</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    <p style="font-size:11px;color:#999;margin-top:8px">* מחקר זה מופיע כל ~2 חודשים. הוסף מילות מפתח רלוונטיות ל-config.js ידנית.</p>`;
}

function buildPageSpeedSection(report) {
  if (!report) return "";
  const scoreColor = (s) => s >= 90 ? "#22c55e" : s >= 70 ? "#f59e0b" : "#ef4444";
  const rows = report.results.map((r) => {
    if (r.error) return `<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">${r.label}</td><td colspan="5" style="padding:6px 10px;border-bottom:1px solid #eee;color:#ef4444;font-size:12px">שגיאה: ${r.error}</td></tr>`;
    return `<tr>
      <td style="padding:6px 10px;border-bottom:1px solid #eee">${r.label}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center;font-weight:600;color:${scoreColor(r.performance)}">${r.performance}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center;color:${scoreColor(r.seo)}">${r.seo}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center;font-size:12px;color:#666">${r.lcp}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center;font-size:12px;color:#666">${r.cls}</td>
    </tr>`;
  }).join("");

  const alertBanner = report.alerts.length
    ? `<p style="background:#fef2f2;border-right:4px solid #ef4444;padding:10px 14px;border-radius:4px;font-size:13px;color:#b91c1c;margin-bottom:12px">⚠️ ${report.alerts.length} דף/דפים מתחת לסף ${report.threshold} — ביצועים נמוכים עלולים לפגוע בדירוג.</p>`
    : `<p style="background:#f0fdf4;border-right:4px solid #22c55e;padding:10px 14px;border-radius:4px;font-size:13px;color:#15803d;margin-bottom:12px">✅ כל הדפים מעל סף הביצועים (${report.threshold}+)</p>`;

  return `
    <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
    <h3 style="font-size:14px;border-bottom:2px solid #FFD000;padding-bottom:6px">Core Web Vitals — PageSpeed (Mobile)</h3>
    ${alertBanner}
    <table style="width:100%;border-collapse:collapse;font-size:13px">
      <thead>
        <tr style="background:#f5f5f5">
          <th style="padding:6px 10px;text-align:right">דף</th>
          <th style="padding:6px 10px">ביצועים</th>
          <th style="padding:6px 10px">SEO</th>
          <th style="padding:6px 10px">LCP</th>
          <th style="padding:6px 10px">CLS</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function buildCtrSection(pages) {
  if (!pages || pages.length === 0) return "";
  const rows = pages.slice(0, 8).map((p) => {
    const shortPage = p.page.replace("https://www.the-videoshop.com", "");
    return `<tr>
      <td style="padding:6px 10px;border-bottom:1px solid #eee;font-size:12px;direction:ltr">${shortPage}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">${p.position}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">${p.impressions.toLocaleString()}</td>
      <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center;color:#ef4444;font-weight:600">${p.ctr}%</td>
    </tr>`;
  }).join("");

  return `
    <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
    <h3 style="font-size:14px;border-bottom:2px solid #FFD000;padding-bottom:6px">⚠️ CTR נמוך — דפים שצריכים כותרת/תיאור חזקים יותר</h3>
    <p style="font-size:12px;color:#666;margin-bottom:12px">דפים עם דירוג טוב בגוגל אבל אחוז קליקים נמוך — הכותרת או ה-meta description לא מושכים מספיק.</p>
    <table style="width:100%;border-collapse:collapse;font-size:13px">
      <thead>
        <tr style="background:#f5f5f5">
          <th style="padding:6px 10px;text-align:right">דף</th>
          <th style="padding:6px 10px">מיקום</th>
          <th style="padding:6px 10px">חשיפות</th>
          <th style="padding:6px 10px">CTR</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    <p style="font-size:11px;color:#999;margin-top:6px">* הבוט יטפל בדפים אלה בריצות הבאות דרך Meta Optimizer.</p>`;
}

function buildMetaSection(metaResult) {
  if (!metaResult) return "";
  return `
    <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
    <h3 style="font-size:14px;border-bottom:2px solid #FFD000;padding-bottom:6px">Meta Description — עודכן אוטומטית</h3>
    <p style="font-size:13px;color:#444"><strong>דף:</strong> ${metaResult.topicLabel}</p>
    <p style="font-size:12px;color:#888"><strong>סיבה:</strong> ${metaResult.rationale}</p>
    <table style="width:100%;border-collapse:collapse;font-size:12px;margin-top:8px">
      <thead><tr style="background:#f5f5f5">
        <th style="padding:6px 10px;text-align:right">שפה</th>
        <th style="padding:6px 10px">לפני</th>
        <th style="padding:6px 10px">אחרי</th>
      </tr></thead>
      <tbody>
        <tr>
          <td style="padding:6px 10px;border-bottom:1px solid #eee">🇮🇱 עברית</td>
          <td style="padding:6px 10px;border-bottom:1px solid #eee;color:#888">${metaResult.before.he}</td>
          <td style="padding:6px 10px;border-bottom:1px solid #eee;color:#111">${metaResult.after.he}</td>
        </tr>
        <tr>
          <td style="padding:6px 10px">🌐 אנגלית</td>
          <td style="padding:6px 10px;color:#888">${metaResult.before.en}</td>
          <td style="padding:6px 10px;color:#111">${metaResult.after.en}</td>
        </tr>
      </tbody>
    </table>`;
}

function buildHtml({ cycle, actionType, filesChanged, prUrl, baselineMetrics, followupMetrics, topicLabel, keywordResearch, pageSpeedReport, metaResult, lowCtrPages }) {
  const hasFollowup = followupMetrics && followupMetrics.length > 0;

  const metricsRows = (baselineMetrics || []).map((b) => {
    const f = hasFollowup ? followupMetrics.find((m) => m.keyword === b.keyword) : null;
    const beforePos = b.position >= 100 ? "not ranked" : b.position;
    const afterPos  = f ? (f.position >= 100 ? "not ranked" : f.position) : "–";
    return `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #eee">${b.keyword}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:center">${positionEmoji(b.position)} ${beforePos}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:center">${f ? positionEmoji(f.position) : "–"} ${afterPos}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666">${f ? delta(b.position, f.position) : "awaiting"}</td>
      </tr>`;
  }).join("");

  const actionHtml = actionType === "pr" && prUrl
    ? `<p>📄 <strong>Pull Request:</strong> <a href="${prUrl}">${prUrl}</a> — review and merge to apply changes.</p>`
    : `<p>✅ <strong>Changes auto-merged to main</strong> (safe update: ${filesChanged?.join(", ")})</p>`;

  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head><meta charset="UTF-8"/></head>
<body style="font-family:Arial,sans-serif;color:#111;max-width:680px;margin:0 auto;padding:20px">
  <div style="background:#111;padding:20px 24px;border-radius:8px 8px 0 0;text-align:right">
    <span style="color:#FFD000;font-size:22px;font-weight:900;letter-spacing:-0.5px">the-videoshop</span><span style="color:#fff;font-size:13px;margin-right:10px;opacity:0.6">SEO Agent</span>
    <h1 style="color:#FFD000;margin:10px 0 0;font-size:17px;font-weight:400">דוח דו-שבועי</h1>
  </div>

  <div style="border:1px solid #eee;border-top:none;padding:24px;border-radius:0 0 8px 8px">
    <h2 style="font-size:16px;margin-top:0">נושא הפעולה: ${topicLabel}</h2>

    ${actionHtml}

    <h3 style="font-size:14px;border-bottom:2px solid #FFD000;padding-bottom:6px">מדדי מילות מפתח</h3>
    <table style="width:100%;border-collapse:collapse;font-size:13px">
      <thead>
        <tr style="background:#f5f5f5">
          <th style="padding:8px 12px;text-align:right">מילת מפתח</th>
          <th style="padding:8px 12px">לפני</th>
          <th style="padding:8px 12px">אחרי</th>
          <th style="padding:8px 12px">שינוי</th>
        </tr>
      </thead>
      <tbody>${metricsRows}</tbody>
    </table>

    ${!hasFollowup ? '<p style="color:#888;font-size:12px;margin-top:8px">* נתוני "אחרי" יופיעו בדוח הבא לאחר 2 שבועות של אינדוקס.</p>' : ""}

    ${buildMetaSection(metaResult)}
    ${buildCtrSection(lowCtrPages)}
    ${buildPageSpeedSection(pageSpeedReport)}
    ${buildKeywordResearchSection(keywordResearch)}

    <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
    <p style="font-size:11px;color:#999;margin:0">
      videoshop SEO Agent · רץ ב-GitHub Actions<br/>
      <a href="https://github.com/${CONFIG.githubRepo}/actions" style="color:#999">GitHub Actions →</a>
    </p>
  </div>
</body>
</html>`;
}

export async function sendSummaryEmail(params) {
  if (!CONFIG.smtpHost || !CONFIG.smtpUser || !CONFIG.smtpPass) {
    console.warn("[email] SMTP not configured — skipping email");
    return;
  }

  const transport = nodemailer.createTransport({
    host: CONFIG.smtpHost,
    port: 587,
    secure: false,
    auth: { user: CONFIG.smtpUser, pass: CONFIG.smtpPass },
  });

  const subject = `[SEO Agent] ${params.topicLabel} — ${params.actionType === "pr" ? "PR נפתח" : "שינוי אוטומטי"}`;

  await transport.sendMail({
    from: CONFIG.emailFrom,
    to: CONFIG.emailTo,
    subject,
    html: buildHtml({ ...params }),
  });

  console.log(`[email] Sent to ${CONFIG.emailTo}: ${subject}`);
}
