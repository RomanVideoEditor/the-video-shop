import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, answers, fastContact, reason } = body;

  const answersHtml = answers
    ? Object.entries(answers as Record<string, string>)
        .map(([q, a]) => `<tr><td style="padding:8px 12px;color:#888;font-size:13px">${q}</td><td style="padding:8px 12px;font-weight:600;font-size:13px">${a}</td></tr>`)
        .join("")
    : "";

  const subject = fastContact
    ? `⚡ בקשה מהירה: ${name} רוצה שתחזור אליו`
    : `📋 הצעת מחיר חדשה מ-${name} | ${email}`;

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#fff;border:1px solid #e5e5e5;border-radius:12px;overflow:hidden">
      <div style="background:#0a0a0a;padding:24px 32px;display:flex;align-items:center;gap:12px">
        <div style="width:32px;height:32px;background:#FFD000;border-radius:50%;display:flex;align-items:center;justify-content:center">
          <span style="color:#111;font-size:16px">▶</span>
        </div>
        <span style="color:#fff;font-weight:900;font-size:18px;letter-spacing:-0.5px">videoshop</span>
      </div>

      <div style="padding:32px">
        <h2 style="margin:0 0 4px;font-size:22px;color:#111">${subject}</h2>
        <p style="margin:0 0 24px;color:#888;font-size:14px">${new Date().toLocaleString("he-IL", { timeZone: "Asia/Jerusalem" })}</p>

        <table style="width:100%;border-collapse:collapse;background:#f9f9f9;border-radius:8px;overflow:hidden">
          <tr style="background:#FFD000">
            <td style="padding:10px 12px;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.05em">שדה</td>
            <td style="padding:10px 12px;font-weight:700;font-size:12px;text-transform:uppercase;letter-spacing:.05em">פרטים</td>
          </tr>
          <tr><td style="padding:8px 12px;color:#888;font-size:13px">שם</td><td style="padding:8px 12px;font-weight:600;font-size:13px">${name}</td></tr>
          <tr style="background:#f4f4f4"><td style="padding:8px 12px;color:#888;font-size:13px">מייל</td><td style="padding:8px 12px;font-weight:600;font-size:13px"><a href="mailto:${email}" style="color:#111">${email}</a></td></tr>
          <tr><td style="padding:8px 12px;color:#888;font-size:13px">טלפון</td><td style="padding:8px 12px;font-weight:600;font-size:13px">${phone || "—"}</td></tr>
          ${fastContact ? `<tr style="background:#f4f4f4"><td style="padding:8px 12px;color:#888;font-size:13px">סיבת פנייה</td><td style="padding:8px 12px;font-weight:600;font-size:13px">${reason || "—"}</td></tr>` : ""}
        </table>

        ${answersHtml ? `
        <h3 style="margin:24px 0 8px;font-size:14px;color:#555;text-transform:uppercase;letter-spacing:.08em">תשובות השאלון</h3>
        <table style="width:100%;border-collapse:collapse;background:#f9f9f9;border-radius:8px;overflow:hidden">
          ${answersHtml}
        </table>` : ""}

        <div style="margin-top:28px;padding:16px;background:#FFF8E1;border-radius:8px;border-right:4px solid #FFD000">
          <p style="margin:0;font-size:13px;color:#555">
            ${fastContact ? "⚡ פנייה מהירה — הלקוח רוצה שתחזור אליו בהקדם." : "📋 שאלון הושלם — יש לך מידע מלא לפני השיחה הראשונה."}
          </p>
        </div>
      </div>
    </div>
  </body></html>`;

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    await resend.emails.send({
      from: "videoshop <onboarding@resend.dev>",
      to: "gornih.roman@gmail.com",
      replyTo: email,
      subject,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
