"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quoteHe: "עבודה עם Video Shop הייתה game changer אמיתי. יצירתיים, אמינים, ותמיד צעד קדימה.",
    quoteEn: "Working with Video Shop was a real game changer. Creative, reliable, and always one step ahead.",
    nameHe: "מאיה נגלר", nameEn: "Maya Nagler",
    roleHe: "Marcom Manager, אשטרום נכסים", roleEn: "Marcom Manager, Ashtrom",
    initials: "MN", color: "#AF52DE",
  },
  {
    quoteHe: "Video Shop פגעו בול! יצירתיים, אמינים, בזמן ובתקציב. מומלצים בחום!",
    quoteEn: "Video Shop nailed it! Creative, reliable, on time, and on budget. Highly recommended!",
    nameHe: "ענת אסא", nameEn: "Anat Assa",
    roleHe: "VP HR, CropX", roleEn: "VP HR, CropX",
    initials: "AA", color: "#34C759",
  },
  {
    quoteHe: "Video Shop פשוט מבינים את העניין. תהליך חלק, תוצאות מהממות. ממליץ בחום.",
    quoteEn: "Video Shop just gets it. Smooth process, killer results. Highly recommend.",
    nameHe: "דניאל מנשה", nameEn: "Daniel Menashe",
    roleHe: "Head of Design, Bright Data", roleEn: "Head of Design, Bright Data",
    initials: "DM", color: "#007AFF",
  },
  {
    quoteHe: "Video Shop הביאו את הסיפור שלנו לחיים עם דיוק ויצירתיות. הסרט הסופי העלה את המותג שלנו באחת.",
    quoteEn: "Video Shop brought our story to life with precision and creativity. The final video elevated our brand instantly.",
    nameHe: "אשלי רוז", nameEn: "Ashley Rose",
    roleHe: "Marketing, i-BrainTech", roleEn: "Marketing, i-BrainTech",
    initials: "AR", color: "#FF6B00",
  },
];

export default function TestimonialRotator({ isHe }: { isHe: boolean }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % testimonials.length);
        setFading(false);
      }, 400);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <div
      style={{ transition: "opacity 0.4s ease", opacity: fading ? 0 : 1 }}
      className="bg-white rounded-2xl p-8 md:p-12 border-s-4 border-s-[#FFD000] shadow-sm"
    >
      <div className="flex gap-0.5 mb-5">
        {[...Array(5)].map((_, j) => (
          <svg key={j} className="w-5 h-5 text-[#FFD000]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-lg md:text-xl text-[#111] font-medium leading-relaxed mb-7">
        &ldquo;{isHe ? t.quoteHe : t.quoteEn}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-white text-sm font-bold"
          style={{
            background: `linear-gradient(135deg, ${t.color}cc 0%, ${t.color} 100%)`,
            boxShadow: `0 2px 8px ${t.color}55`,
          }}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-bold text-[#111] text-sm">{isHe ? t.nameHe : t.nameEn}</p>
          <p className="text-xs text-[#717171]">{isHe ? t.roleHe : t.roleEn}</p>
        </div>
        {/* Dots */}
        <div className="flex gap-1.5 ms-auto">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false); }, 400); }}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{ background: i === current ? "#FFD000" : "#ddd" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
