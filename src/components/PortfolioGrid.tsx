"use client";
import { useState } from "react";
import PortfolioModal from "./PortfolioModal";

interface Video {
  id: string;
  titleHe: string;
  titleEn: string;
  descHe?: string;
  descEn?: string;
}

interface Props {
  videos: Video[];
  locale: string;
}

export default function PortfolioGrid({ videos, locale }: Props) {
  const [active, setActive] = useState<Video | null>(null);
  const isHe = locale === "he";

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((v, idx) => (
          <button
            key={v.id}
            onClick={() => setActive(v)}
            className="group relative aspect-video bg-[#111] rounded-[14px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,.10)] hover:shadow-[0_6px_24px_rgba(0,0,0,.18)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#FFD000] focus:ring-offset-2"
            aria-label={isHe ? v.titleHe : v.titleEn}
          >
            <img
              src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
              alt={isHe ? v.titleHe : v.titleEn}
              loading={idx < 3 ? "eager" : "lazy"}
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors duration-300" />

            {/* Play icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-11 h-11 bg-[#FFD000] rounded-full flex items-center justify-center shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200">
                <svg className="w-5 h-5 text-black ms-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Title bar */}
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/75 to-transparent">
              <p className="text-white text-sm font-semibold leading-snug text-start">
                {isHe ? v.titleHe : v.titleEn}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <PortfolioModal
          videoId={active.id}
          titleHe={active.titleHe}
          titleEn={active.titleEn}
          descHe={active.descHe}
          descEn={active.descEn}
          locale={locale}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
