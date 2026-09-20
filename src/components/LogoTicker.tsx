"use client";
import { useEffect, useRef } from "react";

const clients = [
  { name: "Palo Alto Networks",   src: "/logos/palo-alto.webp",            maxW: 130 },
  { name: "Ashtrom",              src: "/logos/ashtrom.webp",              maxW: 110 },
  { name: "CropX",                src: "/logos/cropx.webp",                maxW: 100 },
  { name: "G City",               src: "/logos/gcity.webp",                maxW: 80  },
  { name: "Intel",                src: "/logos/intel.webp",                maxW: 70  },
  { name: "Sheba",                src: "/logos/sheba.webp",                maxW: 110 },
  { name: "Tadiran",              src: "/logos/tadiran.webp",              maxW: 100 },
  { name: "i-BrainTech",         src: "/logos/ibraintech.webp",           maxW: 110 },
  { name: "Natural Intelligence", src: "/logos/natural-intelligence.webp", maxW: 120 },
  { name: "UserWay",              src: "/logos/userway.webp",              maxW: 110 },
];

// Three copies so the reset is invisible even on wide screens
const track = [...clients, ...clients, ...clients];

export default function LogoTicker({ isHe }: { isHe: boolean }) {
  const railRef = useRef<HTMLDivElement>(null);
  const xRef   = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    // One "set" width (first 10 items) — rail holds 3 sets
    const getSetW = () => rail.scrollWidth / 3;

    const tick = () => {
      xRef.current -= 0.6; // px per frame (~36px/s at 60fps)
      if (Math.abs(xRef.current) >= getSetW()) {
        xRef.current += getSetW(); // jump back by exactly one set — invisible
      }
      rail.style.transform = `translateX(${xRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section id="clients" className="bg-white py-14 px-6 overflow-hidden">
      <style>{`
        .logo-item {
          filter: grayscale(1) opacity(0.55);
          mix-blend-mode: multiply;
          transition: filter 0.3s ease;
        }
        .logo-item:hover { filter: grayscale(0) opacity(1); }
      `}</style>
      <p className="text-center text-xs font-bold text-[#717171] uppercase tracking-widest mb-8 reveal">
        {isHe ? "סומכים עלינו" : "Trusted by"}
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />
        <div
          ref={railRef}
          className="flex gap-16 items-center will-change-transform"
          style={{ width: "max-content" }}
        >
          {track.map((c, i) => (
            <div key={i} className="logo-item shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.src}
                alt={c.name}
                loading="lazy"
                decoding="async"
                style={{ height: 40, width: "auto", maxWidth: c.maxW, objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
