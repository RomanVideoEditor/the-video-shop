"use client";
import { useState } from "react";

type Step = "quiz" | "fast" | "contact" | "done";

const QUESTIONS_HE = [
  {
    q: "אתם עסק או אנשים פרטיים?",
    options: [
      { emoji: "🏢", label: "חברה / עסק" },
      { emoji: "🙋", label: "אדם פרטי" },
      { emoji: "🏗️", label: "פרויקט נדל\"ן" },
      { emoji: "🤷", label: "לא בטוח" },
    ],
  },
  {
    q: "מה אתם רוצים לצלם?",
    options: [
      { emoji: "🎤", label: "סרט על החברה שלנו" },
      { emoji: "🏠", label: "נכס / בניין" },
      { emoji: "🎉", label: "אירוע" },
      { emoji: "💡", label: "משהו אחר" },
    ],
  },
  {
    q: "למה אתם צריכים את הסרט?",
    options: [
      { emoji: "📢", label: "לשווק / לפרסם" },
      { emoji: "💰", label: "לגייס כסף / משקיעים" },
      { emoji: "👥", label: "לגייס עובדים" },
      { emoji: "📚", label: "הדרכה / תוכן פנימי" },
    ],
  },
  {
    q: "מתי אתם צריכים את זה מוכן?",
    options: [
      { emoji: "🔥", label: "דחוף — חודש" },
      { emoji: "📅", label: "2–3 חודשים" },
      { emoji: "🌱", label: "עוד אין לחץ" },
      { emoji: "🤔", label: "לא יודע עדיין" },
    ],
  },
  {
    q: "מה הטווח תקציבי?",
    options: [
      { emoji: "💳", label: "עד ₪10,000" },
      { emoji: "💵", label: "₪10K–₪40K" },
      { emoji: "💎", label: "₪40K+" },
      { emoji: "❓", label: "טרם הוחלט" },
    ],
  },
];

const QUESTIONS_EN = [
  {
    q: "Are you a business or individual?",
    options: [
      { emoji: "🏢", label: "Company / Business" },
      { emoji: "🙋", label: "Individual" },
      { emoji: "🏗️", label: "Real estate project" },
      { emoji: "🤷", label: "Not sure" },
    ],
  },
  {
    q: "What do you want to film?",
    options: [
      { emoji: "🎤", label: "Company / brand film" },
      { emoji: "🏠", label: "Property / building" },
      { emoji: "🎉", label: "Event" },
      { emoji: "💡", label: "Something else" },
    ],
  },
  {
    q: "Why do you need the video?",
    options: [
      { emoji: "📢", label: "Marketing / advertising" },
      { emoji: "💰", label: "Fundraising / investors" },
      { emoji: "👥", label: "Hiring / HR" },
      { emoji: "📚", label: "Training / internal" },
    ],
  },
  {
    q: "When do you need it ready?",
    options: [
      { emoji: "🔥", label: "Urgent — 1 month" },
      { emoji: "📅", label: "2–3 months" },
      { emoji: "🌱", label: "No rush" },
      { emoji: "🤔", label: "Not sure yet" },
    ],
  },
  {
    q: "What's your budget range?",
    options: [
      { emoji: "💳", label: "Under ₪10,000" },
      { emoji: "💵", label: "₪10K–₪40K" },
      { emoji: "💎", label: "₪40K+" },
      { emoji: "❓", label: "TBD" },
    ],
  },
];

export default function QuoteWizard({ locale }: { locale: string }) {
  const isHe = locale === "he";
  const questions = isHe ? QUESTIONS_HE : QUESTIONS_EN;

  const [step, setStep] = useState<Step>("quiz");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [fastReason, setFastReason] = useState("");
  const [sending, setSending] = useState(false);

  const progress = Math.round((qIndex / questions.length) * 100);

  const handleAnswer = (label: string) => {
    const newAnswers = { ...answers, [questions[qIndex].q]: label };
    setAnswers(newAnswers);
    if (qIndex < questions.length - 1) {
      setQIndex(qIndex + 1);
    } else {
      setStep("contact");
    }
  };

  const submitForm = async (isFast: boolean) => {
    setSending(true);
    await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: contact.name || (isHe ? "לא צוין" : "Not provided"),
        email: contact.email,
        phone: contact.phone,
        fastContact: isFast,
        reason: isFast ? fastReason : undefined,
        answers: Object.keys(answers).length > 0 ? answers : undefined,
      }),
    });
    setSending(false);
    setStep("done");
  };

  const inputCls =
    "w-full bg-white border border-gray-200 rounded-xl px-5 py-4 text-[#111] placeholder-[#bbb] focus:outline-none focus:border-[#FFD000] focus:ring-2 focus:ring-[#FFD000]/20 transition-all text-base";

  if (step === "done") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-24" dir={isHe ? "rtl" : "ltr"}>
        <div className="text-center max-w-lg w-full">
          <div className="w-24 h-24 rounded-full bg-[#FFD000] flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(255,208,0,0.4)]">
            <span className="text-4xl">🎬</span>
          </div>
          <h2 className="text-4xl font-black text-[#111] mb-3">
            {isHe ? "קיבלנו! נחזור אליך בקרוב ✌️" : "Got it! We'll be in touch soon ✌️"}
          </h2>
          <p className="text-[#555] text-lg mb-12 max-w-sm mx-auto">
            {isHe
              ? "בדרך כלל נחזור תוך יום עסקים אחד."
              : "We usually reply within one business day."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={isHe ? "/portfolio" : "/en/portfolio"}
              className="border border-gray-200 rounded-2xl p-5 hover:border-[#FFD000] hover:bg-[#FFF8E1] transition-all text-center"
            >
              <div className="text-2xl mb-2">🎥</div>
              <p className="font-bold text-[#111] text-sm">{isHe ? "תיק עבודות" : "Portfolio"}</p>
              <p className="text-xs text-[#888] mt-1">{isHe ? "ראו מה עשינו" : "See our work"}</p>
            </a>
            <a
              href={isHe ? "/vlog" : "/en/vlog"}
              className="border border-gray-200 rounded-2xl p-5 hover:border-[#FFD000] hover:bg-[#FFF8E1] transition-all text-center"
            >
              <div className="text-2xl mb-2">📖</div>
              <p className="font-bold text-[#111] text-sm">{isHe ? "הבלוג שלנו" : "Our Blog"}</p>
              <p className="text-xs text-[#888] mt-1">{isHe ? "טיפים והפקות" : "Tips & insights"}</p>
            </a>
            <a
              href="https://wa.me/972544545314"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 rounded-2xl p-5 hover:border-[#FFD000] hover:bg-[#FFF8E1] transition-all text-center"
            >
              <div className="text-2xl mb-2">💬</div>
              <p className="font-bold text-[#111] text-sm">WhatsApp</p>
              <p className="text-xs text-[#888] mt-1">{isHe ? "דחוף? דברו איתנו" : "Urgent? Chat now"}</p>
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (step === "fast") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20" dir={isHe ? "rtl" : "ltr"}>
        <div className="w-full max-w-md">
          <button
            onClick={() => setStep("quiz")}
            className="text-xs text-[#888] mb-8 flex items-center gap-1 hover:text-[#111] transition-colors"
          >
            ← {isHe ? "חזרה לשאלון" : "Back to quiz"}
          </button>
          <h2 className="text-3xl font-black text-[#111] mb-2">
            {isHe ? "נחזור אליך 👋" : "We'll reach out 👋"}
          </h2>
          <p className="text-[#555] mb-8">
            {isHe ? "השאירו פרטים ונחזור אליכם תוך יום." : "Leave your details and we'll reply within a day."}
          </p>
          <div className="space-y-4">
            <input
              className={inputCls}
              placeholder={isHe ? "שם" : "Name"}
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
            />
            <input
              className={inputCls}
              type="email"
              placeholder={isHe ? "מייל *" : "Email *"}
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
              required
            />
            <input
              className={inputCls}
              type="tel"
              placeholder={isHe ? "טלפון" : "Phone"}
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            />
            <textarea
              className={inputCls}
              rows={3}
              placeholder={isHe ? "במה נוכל לעזור?" : "How can we help?"}
              value={fastReason}
              onChange={(e) => setFastReason(e.target.value)}
            />
            <button
              onClick={() => submitForm(true)}
              disabled={!contact.email || sending}
              className="w-full bg-[#FFD000] text-[#111] font-black py-4 rounded-xl text-base disabled:opacity-40 hover:bg-[#f0c400] transition-colors"
            >
              {sending ? (isHe ? "שולח..." : "Sending...") : isHe ? "שלחו לי חזרה" : "Contact me"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === "contact") {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20" dir={isHe ? "rtl" : "ltr"}>
        <div className="w-full max-w-md">
          <div className="text-2xl mb-6">🙌</div>
          <h2 className="text-3xl font-black text-[#111] mb-2">
            {isHe ? "איך נחזור אליכם?" : "How do we reach you?"}
          </h2>
          <p className="text-[#555] mb-8">
            {isHe
              ? "תשאירו טלפון או מייל — נחזור תוך יום."
              : "Leave a phone or email — we'll be back within a day."}
          </p>
          <div className="space-y-4">
            <input
              className={inputCls}
              placeholder={isHe ? "שם" : "Name"}
              value={contact.name}
              onChange={(e) => setContact({ ...contact, name: e.target.value })}
            />
            <input
              className={inputCls}
              type="tel"
              placeholder={isHe ? "טלפון 📱" : "Phone 📱"}
              value={contact.phone}
              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            />
            <input
              className={inputCls}
              type="email"
              placeholder={isHe ? "מייל" : "Email"}
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
            />
            <button
              onClick={() => submitForm(false)}
              disabled={(!contact.phone && !contact.email) || sending}
              className="w-full bg-[#FFD000] text-[#111] font-black py-4 rounded-xl text-base disabled:opacity-40 hover:bg-[#f0c400] transition-colors"
            >
              {sending ? (isHe ? "שולח..." : "Sending...") : isHe ? "שלחו לי הצעה 🚀" : "Send me a proposal 🚀"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const current = questions[qIndex];
  return (
    <div className="min-h-screen flex flex-col px-6 pt-24 pb-16" dir={isHe ? "rtl" : "ltr"}>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <div className="h-full bg-[#FFD000] transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full">
        <p className="text-xs font-bold text-[#bbb] tracking-widest uppercase mb-10">
          {qIndex + 1} / {questions.length}
        </p>

        <h2 className="text-3xl md:text-4xl font-black text-[#111] mb-10 text-center leading-tight">
          {current.q}
        </h2>

        <div className="grid grid-cols-2 gap-3 w-full">
          {current.options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => handleAnswer(opt.label)}
              className="border border-gray-200 rounded-2xl px-4 py-5 text-[#111] font-semibold text-sm text-center hover:border-[#FFD000] hover:bg-[#FFF8E1] active:scale-[0.97] transition-all duration-150 flex flex-col items-center gap-2"
            >
              <span className="text-3xl">{opt.emoji}</span>
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => setStep("fast")}
          className="text-sm text-[#888] hover:text-[#FFD000] transition-colors underline underline-offset-4"
        >
          {isHe ? "עדיף שתחזרו אליי ישירות ←" : "Just contact me directly →"}
        </button>
      </div>
    </div>
  );
}
