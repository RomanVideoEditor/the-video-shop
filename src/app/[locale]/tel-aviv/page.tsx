import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildAlternates } from "@/app/[locale]/layout";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("telAvivTitle"),
    description: t("telAvivDesc"),
    alternates: buildAlternates(locale, "tel-aviv"),
    openGraph: { title: t("telAvivTitle"), description: t("telAvivDesc") },
  };
}

export default async function TelAvivPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isHe = locale === "he";

  const clients = [
    { nameHe: "סטארטאפים וחברות הייטק", nameEn: "Startups & High-Tech Companies" },
    { nameHe: "חברות נדל\"ן מסחרי", nameEn: "Commercial Real Estate Companies" },
    { nameHe: "מותגי אורח חיים ואופנה", nameEn: "Lifestyle & Fashion Brands" },
    { nameHe: "מסעדות ואירועים", nameEn: "Restaurants & Events" },
    { nameHe: "FinTech ו-Insurtech", nameEn: "FinTech & Insurtech" },
    { nameHe: "NGO ומגזר שלישי", nameEn: "NGO & Third Sector" },
  ];

  const locations = [
    { nameHe: "רוטשילד ושדרות המרכז", nameEn: "Rothschild Blvd & Central Streets" },
    { nameHe: "נמל תל אביב", nameEn: "Tel Aviv Port" },
    { nameHe: "שכונת פלורנטין", nameEn: "Florentine Neighborhood" },
    { nameHe: "אזור התעשייה הצפוני", nameEn: "Northern Industrial Zone" },
    { nameHe: "מוזיאון ת\"א ויפו", nameEn: "Tel Aviv Museum & Jaffa" },
    { nameHe: "גן הירקון וחוף הים", nameEn: "Yarkon Park & the Beach" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Video Shop — הפקת וידאו תל אביב",
    description: isHe ? "חברת הפקת וידאו בתל אביב" : "Video production company in Tel Aviv",
    address: {
      "@type": "PostalAddress",
      addressLocality: "תל אביב",
      addressCountry: "IL",
    },
    areaServed: "Tel Aviv",
    url: "https://www.the-videoshop.com/tel-aviv",
  };

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BreadcrumbSchema locale={locale} crumbs={[{ name: isHe ? "הפקת וידאו תל אביב" : "Video Production Tel Aviv", path: "/tel-aviv" }]} />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden" dir={isHe ? "rtl" : "ltr"}>
        <div aria-hidden="true" className="animate-float-slow pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, #FFD000 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#FFD000] uppercase border border-[#FFD000]/30 px-4 py-2 rounded-full" style={{ animation: "fadeInUp .45s ease both" }}>
            {isHe ? "הפקת וידאו תל אביב" : "Video Production Tel Aviv"}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#111] mt-6 mb-6 leading-tight" style={{ animation: "fadeInUp .5s .08s ease both" }}>
            {isHe ? "חברת הפקת וידאו בתל אביב" : "Video Production Company in Tel Aviv"}
          </h1>
          <p className="text-xl text-[#555] max-w-2xl leading-relaxed mb-8">
            {isHe
              ? "The Video Shop מספקת שירותי הפקת וידאו לעסקים בתל אביב וגוש דן. סרטי תדמית, Employer Branding, הפקות הייטק ועוד — הכל מסטודיו מקצועי ליד ביתכם."
              : "The Video Shop provides video production services for businesses in Tel Aviv and Greater Tel Aviv. Brand films, Employer Branding, high-tech productions and more — all from a professional studio near you."}
          </p>
          <Link href="/contact" className="inline-block bg-[#FFD000] text-[#111] font-bold px-8 py-4 rounded-full hover:bg-[#f0c400] transition-colors">
            {isHe ? "קבל הצעת מחיר — תל אביב" : "Get a Quote — Tel Aviv"}
          </Link>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 px-6 bg-[#f4f4f4]" dir={isHe ? "rtl" : "ltr"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-[#111] mb-8">
            {isHe ? "עם מי עובדים בתל אביב?" : "Who We Work With in Tel Aviv"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger">
            {clients.map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-[#e5e5e5] reveal card-lift">
                <span className="text-sm font-semibold text-[#333]">{isHe ? c.nameHe : c.nameEn}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 px-6" dir={isHe ? "rtl" : "ltr"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-[#111] mb-4">
            {isHe ? "לוקיישנים בתל אביב" : "Filming Locations in Tel Aviv"}
          </h2>
          <p className="text-[#555] mb-8">
            {isHe
              ? "ניסיון נרחב בצילום בכל אזורי תל אביב, כולל קבלת אישורים ותיאום עם עיריית תל אביב."
              : "Extensive experience filming across all Tel Aviv areas, including permits and coordination with Tel Aviv Municipality."}
          </p>
          <div className="flex flex-wrap gap-3">
            {locations.map((l, i) => (
              <span key={i} className="px-4 py-2 bg-[#f4f4f4] rounded-full text-sm font-medium text-[#333]">
                {isHe ? l.nameHe : l.nameEn}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="py-16 px-6 bg-white border-t border-[#e5e5e5]" dir={isHe ? "rtl" : "ltr"}>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-2xl font-black text-[#111] mb-6">
            {isHe ? "הפקת וידאו בתל אביב — כל מה שצריך לדעת" : "Video Production in Tel Aviv — Everything You Need to Know"}
          </h2>
          {isHe ? (
            <>
              <p className="text-[#555] leading-relaxed mb-4">
                תל אביב היא עיר שמעולם לא עוצרת — ולכן גם לסרטי הוידאו שלה יש אנרגיה מיוחדת. The Video Shop מתמחה בהפקת וידאו לעסקים בתל אביב, עם הבנה עמוקה של הפזמון הצבעוני, הפלורנטין, השינקין, העסקים ברוטשילד ועד לנמל תל אביב.
              </p>
              <p className="text-[#555] leading-relaxed mb-4">
                שוק הוידאו בתל אביב תחרותי. כדי להתבלט, צריך יותר מסרטון פשוט. צריך קונספט, סיפור ואיכות ויזואלית שמתחרה עם הטוב בעולם. זה בדיוק מה שאנחנו מספקים.
              </p>
              <p className="text-[#555] leading-relaxed">
                אנחנו מכירים את הביורוקרטיה הישראלית, את אישורי הצילום בתל אביב, את הלוקיישנים הטובים ואת הזמנים הנכונים לצלם. מניסיון של עשרות פרויקטים בגוש דן.
              </p>
            </>
          ) : (
            <>
              <p className="text-[#555] leading-relaxed mb-4">
                Tel Aviv is a city that never stops — and that's why videos shot here have a special energy. The Video Shop specializes in video production for Tel Aviv businesses, with deep familiarity with Florentin, Shenkin, Rothschild, and the Tel Aviv Port.
              </p>
              <p className="text-[#555] leading-relaxed mb-4">
                The Tel Aviv video market is competitive. To stand out, you need more than a simple clip. You need concept, story, and visual quality that competes with the world's best. That's exactly what we deliver.
              </p>
              <p className="text-[#555] leading-relaxed">
                We know Israeli bureaucracy, Tel Aviv filming permits, the best locations, and the right times to shoot. From the experience of dozens of projects in the greater Tel Aviv area.
              </p>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-4">
            {isHe ? "מחפשים חברת הפקת וידאו בתל אביב?" : "Looking for a Video Production Company in Tel Aviv?"}
          </h2>
          <Link href="/contact" className="inline-block bg-[#FFD000] text-[#111] font-bold px-10 py-4 rounded-full hover:bg-[#f0c400] transition-colors mt-2">
            {isHe ? "בואו נדבר" : "Let's Talk"}
          </Link>
        </div>
      </section>
    </main>
  );
}
