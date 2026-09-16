"use client";
import { useEffect } from "react";

interface Props {
  videoId: string;
  titleHe: string;
  titleEn: string;
  descHe?: string;
  descEn?: string;
  locale: string;
  onClose: () => void;
}

export default function PortfolioModal({ videoId, titleHe, titleEn, descHe, descEn, locale, onClose }: Props) {
  const isHe = locale === "he";
  const title = isHe ? titleHe : titleEn;
  const desc  = isHe ? (descHe ?? "") : (descEn ?? "");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // nocookie + controls=0 hides all YouTube UI (profile, title, controls bar)
  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&controls=0&disablekb=1&fs=0&playsinline=1`;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[92vw] md:max-w-[85vw] lg:max-w-[78vw] xl:max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-10 right-0 z-10 flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          {isHe ? "סגור" : "Close"}
        </button>

        {/* Video — full width, 16:9, clean */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,.6)]">
          <iframe
            src={embedSrc}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
            title={title}
            style={{ border: "none", pointerEvents: "none" }}
          />
          {/* Invisible click layer — prevents accidental YouTube UI interactions */}
          <div className="absolute inset-0 cursor-default" onClick={(e) => e.preventDefault()} />
        </div>

        {/* Info below video */}
        <div className="mt-4" dir={isHe ? "rtl" : "ltr"}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#FFD000] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <h3 className="text-white font-bold text-base md:text-lg">{title}</h3>
            </div>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 text-xs font-medium transition-colors shrink-0 flex items-center gap-1 mt-1"
            >
              YouTube
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          {desc && (
            <p className="text-white/55 text-sm leading-relaxed mt-2 ps-8 max-w-2xl">{desc}</p>
          )}
        </div>
      </div>
    </div>
  );
}
