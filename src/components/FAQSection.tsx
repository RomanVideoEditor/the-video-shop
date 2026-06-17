"use client";
import { useState } from "react";
import { faqItems } from "@/lib/videos";

interface Props {
  locale: string;
}

export default function FAQSection({ locale }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const isHe = locale === "he";

  const titleHe = "שאלות נפוצות";
  const titleEn = "Frequently Asked Questions";
  const subtitleHe = "כל מה שרציתם לדעת לפני שמתחילים פרויקט וידאו";
  const subtitleEn = "Everything you wanted to know before starting a video project";

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4">
            {isHe ? titleHe : titleEn}
          </h2>
          <p className="text-[#6b6b6b]">{isHe ? subtitleHe : subtitleEn}</p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, i) => {
            const question = isHe ? item.questionHe : item.questionEn;
            const answer = isHe ? item.answerHe : item.answerEn;
            const isOpen = open === i;

            return (
              <div
                key={i}
                className={`border rounded-xl transition-colors ${
                  isOpen ? "border-[#c8a96e]/50 bg-[#111]" : "border-[#1e1e1e] bg-[#111]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-start"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-base leading-snug ${isOpen ? "text-[#c8a96e]" : "text-[#f5f5f0]"}`}>
                    {question}
                  </span>
                  <svg
                    className={`w-5 h-5 shrink-0 ms-4 transition-transform text-[#c8a96e] ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-[#f5f5f0]/70 leading-relaxed">{answer}</p>
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
