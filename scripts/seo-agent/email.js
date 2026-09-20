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

function buildHtml({ cycle, actionType, filesChanged, prUrl, baselineMetrics, followupMetrics, topicLabel }) {
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
  <div style="background:#111;padding:16px 24px;border-radius:8px 8px 0 0">
    <img src="https://www.the-videoshop.com/logo.svg" alt="videoshop" height="32" style="filter:brightness(0) invert(1)" onerror="this.style.display='none'"/>
    <h1 style="color:#FFD000;margin:8px 0 0;font-size:18px">SEO Agent — דוח דו-שבועי</h1>
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
    html: buildHtml(params),
  });

  console.log(`[email] Sent to ${CONFIG.emailTo}: ${subject}`);
}
