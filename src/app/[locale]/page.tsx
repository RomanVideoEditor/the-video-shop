import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import VideoEmbed from "@/components/VideoEmbed";
import FAQSection from "@/components/FAQSection";
import FAQSchema from "@/components/FAQSchema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("homeTitle"),
    description: t("homeDesc"),
  };
}

const clients = [
  "Palo Alto Networks",
  "Ashtrom",
  "Humavox",
  "CROPX",
  "TravelPerk",
  "ParaZero",
  "UserWay",
  "DRIDE",
  "מפעל הפיס",
  "יח דמרי",
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  const services = [
    { key: "1", title: t("s1title"), desc: t("s1desc"), href: "/services/defense", icon: "⬡" },
    { key: "2", title: t("s2title"), desc: t("s2desc"), href: "/services/realestate", icon: "🏗" },
    { key: "3", title: t("s3title"), desc: t("s3desc"), href: "/services/corporate", icon: "◆" },
    { key: "4", title: t("s4title"), desc: t("s4desc"), href: "/services/ai", icon: "✦" },
  ];

  const whyPoints = [t("why1"), t("why2"), t("why3"), t("why4"), t("why5"), t("why6")];

  return (
    <>
      <FAQSchema locale={locale} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(200,169,110,0.12) 0%, transparent 70%)"
        }} />
        {/* Thin horizontal rule for cinematic feel */}
        <div className="absolute top-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/20 to-transparent" />
        <div className="absolute bottom-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/10 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.4em] text-[#c8a96e]/70 uppercase mb-8">
            Tel Aviv &nbsp;·&nbsp; Boutique Video &amp; AI Studio
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-[108px] font-black text-[#f5f5f0] leading-[0.92] mb-6 tracking-tight">
            The<br />
            <span className="text-[#c8a96e]">Video</span> Shop
          </h1>
          <p className="text-sm font-semibold text-[#c8a96e]/70 tracking-[0.2em] uppercase mb-4">{t("h1sub")}</p>
          <p className="text-lg md:text-xl text-[#f5f5f0]/55 max-w-xl mx-auto leading-relaxed mb-12">{t("subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="bg-[#c8a96e] text-[#0a0a0a] font-bold px-8 py-3.5 rounded-sm hover:bg-[#e8d5a8] transition-colors text-sm tracking-wide uppercase">
              {t("cta")}
            </Link>
            <Link href="/portfolio" className="border border-[#f5f5f0]/15 text-[#f5f5f0]/70 font-medium px-8 py-3.5 rounded-sm hover:border-[#c8a96e]/50 hover:text-[#c8a96e] transition-colors text-sm tracking-wide uppercase">
              {t("ctaPortfolio")}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
          <div className="w-px h-14 bg-gradient-to-b from-[#c8a96e] to-transparent" />
        </div>
      </section>

      {/* Showreel */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#1e1e1e]">
            <VideoEmbed youtubeId="dQw4w9WgXcQ" title="The Video Shop — Showreel" />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 border-y border-[#1e1e1e]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-[#6b6b6b] uppercase mb-10">{t("socialProof")}</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 items-center">
            {clients.map((c) => (
              <div key={c} className="text-[#6b6b6b] hover:text-[#c8a96e] transition-colors text-sm font-semibold tracking-widest uppercase">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4">{t("servicesTitle")}</h2>
            <p className="text-[#6b6b6b] max-w-xl mx-auto">{t("servicesSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1e1e1e]">
            {services.map((s, i) => (
              <Link key={s.key} href={s.href} className="group bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c8a96e]/0 to-transparent group-hover:via-[#c8a96e]/40 transition-all duration-500" />
                <span className="text-[10px] font-semibold tracking-[0.3em] text-[#c8a96e]/40 uppercase mb-6 block">0{i + 1}</span>
                <h3 className="text-lg font-bold text-[#f5f5f0] mb-3 group-hover:text-[#c8a96e] transition-colors">{s.title}</h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-[#c8a96e]/0 group-hover:text-[#c8a96e]/70 transition-all duration-300 text-xs font-semibold tracking-widest uppercase">
                  <span className="w-6 h-px bg-[#c8a96e]/70" />
                  {locale === "he" ? "לפרטים" : "Learn more"}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 px-6 bg-[#111]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f0]">{t("whyTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-4 p-4">
                <div className="w-8 h-8 rounded-full bg-[#c8a96e]/20 text-[#c8a96e] flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-[#f5f5f0]/80 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection locale={locale} />

      {/* CTA Banner */}
      <section className="py-24 px-6 bg-[#111]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-6">
            {locale === "he" ? "מוכנים ליצור משהו מדהים?" : "Ready to create something amazing?"}
          </h2>
          <p className="text-[#6b6b6b] mb-8 text-lg">
            {locale === "he"
              ? "ספרו לנו על הפרויקט שלכם — נחזור אליכם תוך יום עסקים."
              : "Tell us about your project — we'll get back to you within one business day."}
          </p>
          <Link href="/contact" className="inline-block bg-[#c8a96e] text-[#0a0a0a] font-bold px-10 py-5 rounded-full hover:bg-[#e8d5a8] transition-colors text-lg">
            {t("cta")}
          </Link>
        </div>
      </section>
    </>
  );
}
