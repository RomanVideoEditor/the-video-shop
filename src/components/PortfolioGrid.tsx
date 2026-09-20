"use client";
import { useState, useEffect, useRef } from "react";
import PortfolioModal from "./PortfolioModal";

interface Video {
  id: string;
  titleHe: string;
  titleEn: string;
  descHe?: string;
  descEn?: string;
}

interface Props {
  anchors: Video[];   // always shown first (positions 1-3)
  pool: Video[];      // rotated challengers (positions 4-6)
  locale: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function pickChallengers(pool: Video[], n: number, seed: string): Video[] {
  // Deterministic shuffle per session using a simple seeded Fisher-Yates
  const arr = [...pool];
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  }
  for (let i = arr.length - 1; i > 0; i--) {
    h = (Math.imul(1664525, h) + 1013904223) | 0;
    const j = Math.abs(h) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, n);
}

export default function PortfolioGrid({ anchors, pool, locale }: Props) {
  const [active, setActive] = useState<Video | null>(null);
  const [displayed, setDisplayed] = useState<Video[]>([]);
  const [showAll, setShowAll] = useState(false);
  const seedRef = useRef<string>("");
  const isHe = locale === "he";

  useEffect(() => {
    // Stable session seed stored in sessionStorage so reload = same rotation
    let seed = sessionStorage.getItem("pf_seed");
    if (!seed) {
      seed = Date.now().toString(36) + Math.random().toString(36);
      sessionStorage.setItem("pf_seed", seed);
    }
    seedRef.current = seed;
    const challengers = pickChallengers(pool, 3, seed);
    setDisplayed([...anchors, ...challengers]);
  }, [anchors, pool]);

  const trackClick = (v: Video) => {
    try {
      window.gtag?.("event", "portfolio_video_click", {
        video_id: v.id,
        video_title: isHe ? v.titleHe : v.titleEn,
        slot_type: anchors.some((a) => a.id === v.id) ? "anchor" : "challenger",
      });
    } catch {}
  };

  const allVideos = [...anchors, ...pool];
  const visibleVideos = showAll ? allVideos : displayed;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleVideos.map((v, idx) => (
          <button
            key={v.id}
            onClick={() => { trackClick(v); setActive(v); }}
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

      {/* Show all toggle */}
      {!showAll && pool.length > 3 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2.5 rounded-full border border-[#111]/20 text-[#111] text-sm font-semibold hover:border-[#FFD000] hover:text-[#111] transition-colors duration-200"
          >
            {isHe ? `ראה את כל העבודות (${allVideos.length})` : `See all work (${allVideos.length})`}
          </button>
        </div>
      )}

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
