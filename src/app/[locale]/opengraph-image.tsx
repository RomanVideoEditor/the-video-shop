import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "videoshop – Boutique Video & AI Production Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  await params;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo: circle play button + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* Yellow circle with play triangle */}
          <div style={{
            width: 96,
            height: 96,
            borderRadius: 999,
            background: "#FFD000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{
              width: 0,
              height: 0,
              borderTop: "20px solid transparent",
              borderBottom: "20px solid transparent",
              borderLeft: "34px solid #111111",
              marginLeft: 8,
              display: "flex",
            }} />
          </div>
          {/* Wordmark */}
          <span style={{
            fontSize: 88,
            fontWeight: 900,
            color: "#111111",
            letterSpacing: -3,
            lineHeight: 1,
          }}>
            videoshop
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
