"use client";
import { useState } from "react";
import Image from "next/image";

interface VideoEmbedProps {
  youtubeId?: string;
  vimeoId?: string;
  title: string;
  altText?: string;
  className?: string;
  vertical?: boolean;
}

export default function VideoEmbed({ youtubeId, vimeoId, title, altText, className = "", vertical = false }: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  const thumbUrl = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    : `https://vumbnail.com/${vimeoId}.jpg`;

  const embedSrc = youtubeId
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&controls=0`
    : `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0&color=c8a96e`;

  const aspectClass = vertical ? "aspect-[9/16]" : "aspect-video";

  if (playing) {
    return (
      <div className={`relative ${aspectClass} bg-black ${className}`}>
        <iframe
          src={embedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className={`relative ${aspectClass} bg-black group overflow-hidden w-full ${className}`}
      aria-label={`Play: ${title}`}
    >
      {(youtubeId || vimeoId) && (
        <Image
          src={thumbUrl}
          alt={altText ?? `videoshop – ${title} | Video production thumbnail`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#FFD000] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-[#111] ms-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
