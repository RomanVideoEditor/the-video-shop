import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("aboutTitle"), description: t("aboutDesc") };
}

export default function AboutPage() {
  const t = useTranslations("about");

  const stats = [
    { num: t("stat1num"), label: t("stat1label") },
    { num: t("stat2num"), label: t("stat2label") },
    { num: t("stat3num"), label: t("stat3label") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#c8a96e] uppercase border border-[#c8a96e]/30 px-4 py-2 rounded-full">
              The Studio
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#f5f5f0] leading-tight mb-8">
            {t("h1")}
          </h1>
          <p className="text-xl text-[#f5f5f0]/70 leading-relaxed max-w-2xl">
            {t("intro")}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-[#111] border-y border-[#1e1e1e]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-5xl font-black text-[#c8a96e] mb-2">{s.num}</div>
                <div className="text-sm text-[#6b6b6b] font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-[#c8a96e] mb-6">{t("howTitle")}</h2>
              <p className="text-[#f5f5f0]/70 leading-relaxed text-lg">{t("howText")}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#c8a96e] mb-6">{t("techTitle")}</h2>
              <p className="text-[#f5f5f0]/70 leading-relaxed text-lg">{t("techText")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-[#111]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#f5f5f0] mb-16 text-center">תהליך העבודה שלנו</h2>
          <div className="space-y-0">
            {[
              { n: "01", title: "פגישת קיק-אוף", desc: "מבינים את הפרויקט, הקהל, המטרות והרגש שאנחנו רוצים לייצר." },
              { n: "02", title: "קונספט וסטוריבורד", desc: "מפתחים את הקונספט הקריאייטיבי, כותבים תסריט ומכינים סטוריבורד מפורט." },
              { n: "03", title: "יום הצילום", desc: "מגיעים מוכנים, יעילים ומקצועיים — מספר ימי צילום שממזערים הפרעה לשגרה שלכם." },
              { n: "04", title: "עריכה ופוסט-פרודקשן", desc: "עורכים, מוסיפים מוזיקה, פיצ'ים של AI ו-VFX לפי הצורך — עם לולאות פידבק קצרות." },
              { n: "05", title: "סרט סופי", desc: "מספקים את הסרט בכל הפורמטים הדרושים עם ליווי עד ההשקה." },
            ].map((step, i) => (
              <div key={i} className="flex gap-8 py-8 border-b border-[#1e1e1e] last:border-0 group">
                <div className="text-4xl font-black text-[#c8a96e]/30 group-hover:text-[#c8a96e]/60 transition-colors shrink-0 w-16">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-bold text-[#f5f5f0] text-lg mb-2">{step.title}</h3>
                  <p className="text-[#6b6b6b]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#f5f5f0] mb-6">{t("cta")}</h2>
          <Link
            href="/contact"
            className="inline-block bg-[#c8a96e] text-[#0a0a0a] font-bold px-10 py-5 rounded-full hover:bg-[#e8d5a8] transition-colors text-lg"
          >
            צור קשר
          </Link>
        </div>
      </section>
    </>
  );
}
