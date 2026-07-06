import type { MetadataRoute } from "next";
import { vlogPosts, portfolioVideos } from "@/lib/videos";

const BASE = "https://thevideoshop.co.il";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    { url: BASE, priority: 1.0 },
    { url: `${BASE}/en`, priority: 1.0 },
    { url: `${BASE}/portfolio`, priority: 0.9 },
    { url: `${BASE}/en/portfolio`, priority: 0.9 },
    { url: `${BASE}/vlog`, priority: 0.85 },
    { url: `${BASE}/en/vlog`, priority: 0.85 },
    { url: `${BASE}/about`, priority: 0.7 },
    { url: `${BASE}/en/about`, priority: 0.7 },
    { url: `${BASE}/contact`, priority: 0.7 },
    { url: `${BASE}/en/contact`, priority: 0.7 },
    { url: `${BASE}/services`, priority: 0.8 },
    { url: `${BASE}/en/services`, priority: 0.8 },
    { url: `${BASE}/services/hightech`, priority: 0.75 },
    { url: `${BASE}/en/services/hightech`, priority: 0.75 },
    { url: `${BASE}/services/realestate`, priority: 0.75 },
    { url: `${BASE}/en/services/realestate`, priority: 0.75 },
    { url: `${BASE}/services/corporate`, priority: 0.75 },
    { url: `${BASE}/en/services/corporate`, priority: 0.75 },
    { url: `${BASE}/services/defense`, priority: 0.75 },
    { url: `${BASE}/en/services/defense`, priority: 0.75 },
    { url: `${BASE}/services/ai`, priority: 0.75 },
    { url: `${BASE}/en/services/ai`, priority: 0.75 },
  ];

  const blogEntries = vlogPosts.flatMap((post) => [
    {
      url: `${BASE}/vlog/${post.id}`,
      lastModified: post.date ? new Date(post.date).toISOString() : now,
      priority: 0.8,
    },
    {
      url: `${BASE}/en/vlog/${post.id}`,
      lastModified: post.date ? new Date(post.date).toISOString() : now,
      priority: 0.8,
    },
  ]);

  return [
    ...staticPages.map((p) => ({
      url: p.url,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p.priority,
    })),
    ...blogEntries.map((e) => ({
      ...e,
      changeFrequency: "monthly" as const,
    })),
  ];
}
