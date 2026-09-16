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
          background: "#FFD000",
        }} />

        {/* Background subtle grid */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(200,169,110,0.14) 0%, transparent 70%)",
        }} />

        {/* Top: logo + badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 999, background: "#FFD000", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 0, height: 0, borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderLeft: "14px solid #111", marginLeft: 3, display: "flex" }} />
            </div>
            <span style={{ color: "#f5f5f0", fontSize: 28, fontWeight: 900, letterSpacing: -1 }}>videoshop</span>
          </div>
          <div style={{
            border: "1px solid rgba(200,169,110,0.35)",
            borderRadius: 999,
            padding: "8px 20px",
            color: "#FFD000",
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
            background: "#FFD000",
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
