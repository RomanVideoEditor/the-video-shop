"use client";
import { useState } from "react";
import VideoEmbed from "@/components/VideoEmbed";
import type { PortfolioVideo, VideoCategory } from "@/lib/videos";

interface Labels {
  h1: string;
  subtitle: string;
  filterAll: string;
  filterHightech: string;
  filterProduct: string;
  filterAI: string;
  filterRealestate: string;
  filterCommercial: string;
  filterCreative: string;
  filterRecruitment: string;
  challenge: string;
  solution: string;
}

interface Props {
  locale: string;
  labels: Labels;
  videos: PortfolioVideo[];
}

type Filter = "all" | VideoCategory;

const categoryColors: Record<VideoCategory, string> = {
  hightech: "border-blue-500/30 text-blue-400",
  product: "border-purple-500/30 text-purple-400",
  ai: "border-cyan-500/30 text-cyan-400",
  realestate: "border-green-500/30 text-green-400",
  commercial: "border-orange-500/30 text-orange-400",
  creative: "border-pink-500/30 text-pink-400",
  recruitment: "border-yellow-500/30 text-yellow-400",
};

export default function PortfolioClient({ locale, labels, videos }: Props) {
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: labels.filterAll },
    { key: "hightech", label: labels.filterHightech },
    { key: "product", label: labels.filterProduct },
    { key: "ai", label: labels.filterAI },
    { key: "realestate", label: labels.filterRealestate },
    { key: "commercial", label: labels.filterCommercial },
    { key: "creative", label: labels.filterCreative },
    { key: "recruitment", label: labels.filterRecruitment },
  ];

  const filtered = filter === "all" ? videos : videos.filter((v) => v.category === filter);
  const isHe = locale === "he";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#FFD000] uppercase border border-[#FFD000]/30 px-4 py-2 rounded-full">
              Portfolio
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#111] mb-6">{labels.h1}</h1>
          <p className="text-xl text-[#555] max-w-2xl">{labels.subtitle}</p>
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
                    ? "bg-[#FFD000] text-[#111]"
                    : "border border-gray-200 text-[#555] hover:border-[#FFD000]/50 hover:text-[#FFD000]"
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
              <article key={video.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#FFD000]/30 transition-colors">
                <VideoEmbed
                  youtubeId={video.youtubeId}
                  vimeoId={video.vimeoId}
                  title={isHe ? video.titleHe : video.titleEn}
                  vertical={video.vertical}
                />
                <div className="p-6">
                  {video.client && (
                    <span className="text-xs font-semibold tracking-wider text-[#FFD000] uppercase">{video.client}</span>
                  )}
                  <h2 className="text-xl font-bold text-[#111] mt-2 mb-4">
                    {isHe ? video.titleHe : video.titleEn}
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-semibold text-[#555] uppercase tracking-widest block mb-1">
                        {labels.challenge}
                      </span>
                      <p className="text-sm text-[#666]">
                        {isHe ? video.challengeHe : video.challengeEn}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#555] uppercase tracking-widest block mb-1">
                        {labels.solution}
                      </span>
                      <p className="text-sm text-[#666]">
                        {isHe ? video.solutionHe : video.solutionEn}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[video.category]}`}>
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
