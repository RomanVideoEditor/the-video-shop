import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https://img.youtube.com https://i.ytimg.com https://vumbnail.com https://i.vimeocdn.com https://www.google-analytics.com https://cdn.jsdelivr.net",
      "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com",
      "media-src 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // non-www → www (canonical)
      {
        source: "/:path*",
        has: [{ type: "host", value: "the-videoshop.com" }],
        destination: "https://www.the-videoshop.com/:path*",
        permanent: true,
      },
      // old blog paths → new vlog paths
      { source: "/blog", destination: "/vlog", permanent: true },
      { source: "/en/blog", destination: "/en/vlog", permanent: true },
      { source: "/blog/:slug*", destination: "/vlog/:slug*", permanent: true },
      { source: "/en/blog/:slug*", destination: "/en/vlog/:slug*", permanent: true },
      { source: "/post/:slug*", destination: "/vlog/:slug*", permanent: true },
      { source: "/en/post/:slug*", destination: "/en/vlog/:slug*", permanent: true },
      // old possible paths
      { source: "/services/recruitment", destination: "/services/corporate", permanent: true },
      { source: "/en/services/recruitment", destination: "/en/services/corporate", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "vumbnail.com" },
      { protocol: "https", hostname: "i.vimeocdn.com" },
    ],
  },
};

export default withNextIntl(nextConfig);
