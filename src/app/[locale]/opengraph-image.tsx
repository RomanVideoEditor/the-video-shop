import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Video Shop – Boutique Video & AI Production Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isHe = locale === "he";

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top gold line */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 4,
          background: "#c8a96e",
        }} />

        {/* Background subtle grid */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(200,169,110,0.14) 0%, transparent 70%)",
        }} />

        {/* Top: logo + badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 0 }}>
            <span style={{ color: "#c8a96e", fontSize: 32, fontWeight: 900, letterSpacing: -1 }}>Video</span>
            <span style={{ color: "#f5f5f0", fontSize: 32, fontWeight: 900, letterSpacing: -1 }}>Shop</span>
          </div>
          <div style={{
            border: "1px solid rgba(200,169,110,0.35)",
            borderRadius: 999,
            padding: "8px 20px",
            color: "#c8a96e",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}>
            Tel Aviv · Israel
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{
            fontSize: isHe ? 58 : 62,
            fontWeight: 900,
            color: "#f5f5f0",
            lineHeight: 1.05,
            letterSpacing: -2,
            direction: isHe ? "rtl" : "ltr",
          }}>
            {isHe
              ? "סטודיו בוטיק להפקות וידאו ו-AI"
              : "Boutique Video & AI\nProduction Studio"}
          </div>
          <div style={{
            fontSize: 22,
            color: "rgba(245,245,240,0.55)",
            fontWeight: 400,
            direction: isHe ? "rtl" : "ltr",
            lineHeight: 1.5,
          }}>
            {isHe
              ? "הייטק · ביטחוני · נדל\"ן מסחרי · AI Production · 20+ שנות ניסיון"
              : "High-tech · Defense · Real Estate · AI Production · 20+ years experience"}
          </div>
        </div>

        {/* Bottom: clients + CTA */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {["Palo Alto Networks", "Ashtrom", "Humavox", "CROPX"].map((c) => (
              <span key={c} style={{ color: "rgba(245,245,240,0.25)", fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>{c}</span>
            ))}
          </div>
          <div style={{
            background: "#c8a96e",
            color: "#0a0a0a",
            fontWeight: 800,
            fontSize: 16,
            padding: "14px 32px",
            borderRadius: 4,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>
            {isHe ? "בואו נדבר" : "Let's Talk"}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
