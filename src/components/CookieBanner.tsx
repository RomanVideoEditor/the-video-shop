"use client";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";

export default function CookieBanner({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);
  const isHe = locale === "he";

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={isHe ? "הסכמה לשימוש בעוגיות" : "Cookie consent"}
      className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6"
    >
      <div className="max-w-3xl mx-auto bg-[#111] border border-[#1e1e1e] rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-sm text-[#f5f5f0]/80 leading-relaxed">
            {isHe
              ? "אנחנו משתמשים בעוגיות כדי לשפר את חוויית הגלישה שלכם ולנתח תעבורה. המשך גלישה מהווה הסכמה לשימוש בעוגיות."
              : "We use cookies to improve your browsing experience and analyze traffic. Continued use constitutes acceptance of cookies."}
            {" "}
            <Link
              href="/contact"
              className="text-[#c8a96e] underline underline-offset-2 hover:text-[#e8d5a8] transition-colors text-sm"
            >
              {isHe ? "מדיניות פרטיות" : "Privacy Policy"}
            </Link>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-sm text-[#6b6b6b] hover:text-[#f5f5f0] transition-colors px-4 py-2 rounded-lg border border-[#2a2a2a] hover:border-[#3a3a3a]"
          >
            {isHe ? "דחייה" : "Decline"}
          </button>
          <button
            onClick={accept}
            className="text-sm font-semibold bg-[#c8a96e] text-[#0a0a0a] px-5 py-2 rounded-lg hover:bg-[#e8d5a8] transition-colors"
          >
            {isHe ? "אישור" : "Accept"}
          </button>
        </div>
      </div>
    </div>
  );
}
