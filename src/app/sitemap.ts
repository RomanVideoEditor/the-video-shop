import type { MetadataRoute } from "next";
import { vlogPosts } from "@/lib/videos";

const BASE = "https://www.the-videoshop.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: { url: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
    { url: BASE, priority: 1.0, freq: "weekly" },
    { url: `${BASE}/en`, priority: 1.0, freq: "weekly" },
    { url: `${BASE}/portfolio`, priority: 0.9, freq: "weekly" },
    { url: `${BASE}/en/portfolio`, priority: 0.9, freq: "weekly" },
    { url: `${BASE}/services`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/en/services`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/services/hightech`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/en/services/hightech`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/services/corporate`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/en/services/corporate`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/services/realestate`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/en/services/realestate`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/services/ai`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/en/services/ai`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/services/defense`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/en/services/defense`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/services/animation`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/en/services/animation`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/services/training`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/en/services/training`, priority: 0.85, freq: "monthly" },
    { url: `${BASE}/vlog`, priority: 0.8, freq: "weekly" },
    { url: `${BASE}/en/vlog`, priority: 0.8, freq: "weekly" },
    { url: `${BASE}/about`, priority: 0.65, freq: "monthly" },
    { url: `${BASE}/en/about`, priority: 0.65, freq: "monthly" },
    { url: `${BASE}/contact`, priority: 0.75, freq: "monthly" },
    { url: `${BASE}/en/contact`, priority: 0.75, freq: "monthly" },
    { url: `${BASE}/pricing`, priority: 0.80, freq: "monthly" },
    { url: `${BASE}/en/pricing`, priority: 0.80, freq: "monthly" },
    { url: `${BASE}/testimonials`, priority: 0.70, freq: "monthly" },
    { url: `${BASE}/en/testimonials`, priority: 0.70, freq: "monthly" },
  ];

  const blogEntries = vlogPosts.flatMap((post) => [
    {
      url: `${BASE}/vlog/${post.id}`,
      lastModified: post.date ? new Date(post.date).toISOString() : now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE}/en/vlog/${post.id}`,
      lastModified: post.date ? new Date(post.date).toISOString() : now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]);

  return [
    ...staticPages.map((p) => ({
      url: p.url,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...blogEntries,
  ];
}
