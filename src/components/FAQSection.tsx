"use client";
import { useState } from "react";
import { faqItems } from "@/lib/videos";

export default function FAQSection({ locale }: { locale: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const isHe = locale === "he";

  return (
    <section id="faq" className="bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD000] inline-block" />
          <p className="text-xs font-bold text-[#717171] uppercase tracking-widest">FAQs</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-[#111] text-center tracking-[-0.01em] mb-3">
          {isHe ? "שאלות נפוצות" : "Frequently Asked Questions"}
        </h2>
        <p className="text-[#555] text-center mb-10 text-[15px]">
          {isHe ? "כל מה שרציתם לדעת לפני שמתחילים פרויקט וידאו" : "Everything you wanted to know before starting a video project"}
        </p>

        <div className="space-y-2">
          {faqItems.map((item, i) => {
            const question = isHe ? item.questionHe : item.questionEn;
            const answer   = isHe ? item.answerHe   : item.answerEn;
            const isOpen   = open === i;
            return (
              <div
                key={i}
                className={`border rounded-[14px] transition-all duration-200 ${
                  isOpen
                    ? "border-[#FFD000] bg-white shadow-[0_2px_12px_rgba(255,208,0,.15)]"
                    : "border-[#e5e5e5] bg-[#f4f4f4] hover:border-[#d0d0d0]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-start"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-[15px] leading-snug ${isOpen ? "text-[#111]" : "text-[#333]"}`}>
                    {question}
                  </span>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ms-4 transition-all duration-200 ${isOpen ? "bg-[#FFD000]" : "bg-white border border-[#e5e5e5]"}`}>
                    <svg className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#111]" : "text-[#888]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-[#555] leading-relaxed text-[15px]">{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
