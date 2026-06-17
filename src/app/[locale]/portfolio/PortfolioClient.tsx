"use client";
import { useState } from "react";
import VideoEmbed from "@/components/VideoEmbed";
import type { PortfolioVideo, VideoCategory } from "@/lib/videos";

interface Labels {
  h1: string;
  subtitle: string;
  filterAll: string;
  filterDefense: string;
  filterRealestate: string;
  filterCorporate: string;
  challenge: string;
  solution: string;
}

interface Props {
  locale: string;
  labels: Labels;
  videos: PortfolioVideo[];
}

type Filter = "all" | VideoCategory;

export default function PortfolioClient({ locale, labels, videos }: Props) {
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: labels.filterAll },
    { key: "defense", label: labels.filterDefense },
    { key: "realestate", label: labels.filterRealestate },
    { key: "corporate", label: labels.filterCorporate },
  ];

  const filtered = filter === "all" ? videos : videos.filter((v) => v.category === filter);
  const isHe = locale === "he";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#c8a96e] uppercase border border-[#c8a96e]/30 px-4 py-2 rounded-full">
              Portfolio
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#f5f5f0] mb-6">{labels.h1}</h1>
          <p className="text-xl text-[#6b6b6b] max-w-2xl">{labels.subtitle}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f.key
                    ? "bg-[#c8a96e] text-[#0a0a0a]"
                    : "border border-[#1e1e1e] text-[#6b6b6b] hover:border-[#c8a96e]/50 hover:text-[#c8a96e]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((video) => (
              <article key={video.id} className="bg-[#111] border border-[#1e1e1e] rounded-2xl overflow-hidden hover:border-[#c8a96e]/30 transition-colors">
                <VideoEmbed
                  youtubeId={video.youtubeId}
                  title={isHe ? video.titleHe : video.titleEn}
                />
                <div className="p-6">
                  {video.client && (
                    <span className="text-xs font-semibold tracking-wider text-[#c8a96e] uppercase">{video.client}</span>
                  )}
                  <h2 className="text-xl font-bold text-[#f5f5f0] mt-2 mb-4">
                    {isHe ? video.titleHe : video.titleEn}
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-semibold text-[#6b6b6b] uppercase tracking-widest block mb-1">
                        {labels.challenge}
                      </span>
                      <p className="text-sm text-[#f5f5f0]/60">
                        {isHe ? video.challengeHe : video.challengeEn}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#6b6b6b] uppercase tracking-widest block mb-1">
                        {labels.solution}
                      </span>
                      <p className="text-sm text-[#f5f5f0]/60">
                        {isHe ? video.solutionHe : video.solutionEn}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${
                      video.category === "defense" ? "border-blue-500/30 text-blue-400" :
                      video.category === "realestate" ? "border-green-500/30 text-green-400" :
                      "border-orange-500/30 text-orange-400"
                    }`}>
                      {video.category}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
