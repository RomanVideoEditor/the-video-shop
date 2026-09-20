import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { buildAlternates } from "@/app/[locale]/layout";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import CountUp from "@/components/CountUp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("aboutTitle"),
    description: t("aboutDesc"),
    alternates: buildAlternates(locale, "about"),
    openGraph: { title: t("aboutTitle"), description: t("aboutDesc") },
    twitter: { card: "summary_large_image", title: t("aboutTitle"), description: t("aboutDesc") },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const isRTL = locale === "he";

  return (
    <>
      <BreadcrumbSchema locale={locale} crumbs={[{ name: isRTL ? "אודות" : "About", path: "/about" }]} />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #FFD000 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6" style={{ animation: "fadeInUp .45s ease both" }}>
            <span className="text-xs font-semibold tracking-[0.3em] bg-[#111] text-[#FFD000] uppercase px-4 py-2 rounded-full">
              The Studio
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl font-black text-[#111] leading-tight mb-8"
            style={{ animation: "fadeInUp .5s .08s ease both" }}
          >
            {t("h1")}
          </h1>
          <p
            className="text-xl text-[#555] leading-relaxed max-w-2xl"
            style={{ animation: "fadeInUp .5s .16s ease both" }}
          >
            {t("intro")}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-[#f4f4f4] border-y border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center stagger">
            {[
              { to: 20, suffix: "+", label: t("stat1label") },
              { to: 100, suffix: "+", label: t("stat2label") },
              { to: 4.9, suffix: "★", label: t("stat3label") },
            ].map((s) => (
              <div key={s.label} className="reveal-scale">
                <div className="text-5xl font-black text-[#FFD000] mb-2">
                  <CountUp to={s.to} suffix={s.suffix} />
                </div>
                <div className="text-sm text-[#555] font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="reveal">
              <h2 className="text-2xl font-bold text-[#FFD000] mb-6">{t("howTitle")}</h2>
              <p className="text-[#555] leading-relaxed text-lg">{t("howText")}</p>
            </div>
            <div className="reveal">
              <h2 className="text-2xl font-bold text-[#FFD000] mb-6">{t("techTitle")}</h2>
              <p className="text-[#555] leading-relaxed text-lg">{t("techText")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111] mb-16 text-center reveal">
            {isRTL ? "תהליך העבודה שלנו" : "Our Process"}
          </h2>
          <div className="space-y-0 stagger" dir={isRTL ? "rtl" : "ltr"}>
            {[
              {
                n: "01",
                titleHe: "פגישת קיק-אוף",       titleEn: "Kick-off Meeting",
                descHe:  "מבינים את הפרויקט, הקהל, המטרות והרגש שאנחנו רוצים לייצר.",
                descEn:  "We understand the project, audience, goals and emotion we want to create.",
              },
              {
                n: "02",
                titleHe: "קונספט וסטוריבורד",    titleEn: "Concept & Storyboard",
                descHe:  "מפתחים את הקונספט הקריאייטיבי, כותבים תסריט ומכינים סטוריבורד מפורט.",
                descEn:  "We develop the creative concept, write the script and prepare a detailed storyboard.",
              },
              {
                n: "03",
                titleHe: "יום הצילום",            titleEn: "Shoot Day",
                descHe:  "מגיעים מוכנים, יעילים ומקצועיים. מספר ימי צילום שממזערים הפרעה לשגרה שלכם.",
                descEn:  "We arrive prepared, efficient and professional. Shoot days are streamlined to minimize disruption.",
              },
              {
                n: "04",
                titleHe: "עריכה ופוסט-פרודקשן",  titleEn: "Editing & Post-Production",
                descHe:  "עורכים, מוסיפים מוזיקה, פיצ'ים של AI ו-VFX לפי הצורך, עם לולאות פידבק קצרות.",
                descEn:  "We edit, add music, AI and VFX elements as needed, with short feedback loops.",
              },
              {
                n: "05",
                titleHe: "סרט סופי",              titleEn: "Final Film",
                descHe:  "מספקים את הסרט בכל הפורמטים הדרושים עם ליווי עד ההשקה.",
                descEn:  "We deliver the film in all required formats, with support through the launch.",
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-8 py-8 border-b border-gray-200 last:border-0 group reveal">
                <div className="text-4xl font-black text-[#FFD000]/30 group-hover:text-[#FFD000]/60 transition-colors shrink-0 w-16 text-center">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-bold text-[#111] text-lg mb-2">{isRTL ? step.titleHe : step.titleEn}</h3>
                  <p className="text-[#555]">{isRTL ? step.descHe : step.descEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#111] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(ellipse, #FFD000 0%, transparent 70%)" }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10 reveal">
          <h2 className="text-3xl font-bold text-white mb-6 shimmer-text">{t("cta")}</h2>
          <Link
            href="/contact"
            className="inline-block bg-[#FFD000] text-[#111] font-bold px-10 py-5 rounded-full hover:bg-[#f0c400] transition-colors text-lg animate-pulse-glow btn-bounce"
          >
            {isRTL ? "צור קשר" : "Contact Us"}
          </Link>
        </div>
      </section>
    </>
  );
}
