import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildAlternates } from "@/app/[locale]/layout";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("jerusalemTitle"),
    description: t("jerusalemDesc"),
    alternates: buildAlternates(locale, "jerusalem"),
    openGraph: { title: t("jerusalemTitle"), description: t("jerusalemDesc") },
  };
}

export default async function JerusalemPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isHe = locale === "he";

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Video Shop — הפקת וידאו ירושלים",
    description: isHe ? "חברת הפקת וידאו בירושלים" : "Video production company in Jerusalem",
    address: {
      "@type": "PostalAddress",
      addressLocality: "ירושלים",
      addressCountry: "IL",
    },
    areaServed: "Jerusalem",
    url: "https://www.the-videoshop.com/jerusalem",
  };

  const specialties = [
    { heIcon: "🏛️", nameHe: "מוסדות ואקדמיה", nameEn: "Institutions & Academia" },
    { heIcon: "🕌", nameHe: "תרבות ומורשת", nameEn: "Culture & Heritage" },
    { heIcon: "🏥", nameHe: "בתי חולים ובריאות", nameEn: "Hospitals & Healthcare" },
    { heIcon: "🏛️", nameHe: "משרדי ממשלה", nameEn: "Government Ministries" },
    { heIcon: "🎓", nameHe: "אוניברסיטאות ומכללות", nameEn: "Universities & Colleges" },
    { heIcon: "🌍", nameHe: "NGO בינלאומיות", nameEn: "International NGOs" },
  ];

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BreadcrumbSchema locale={locale} crumbs={[{ name: isHe ? "הפקת וידאו ירושלים" : "Video Production Jerusalem", path: "/jerusalem" }]} />

      <section className="pt-32 pb-20 px-6 relative overflow-hidden" dir={isHe ? "rtl" : "ltr"}>
        <div aria-hidden="true" className="animate-float-slow pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, #FFD000 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.3em] bg-[#111] text-[#FFD000] uppercase px-4 py-2 rounded-full" style={{ animation: "fadeInUp .45s ease both" }}>
            {isHe ? "הפקת וידאו ירושלים" : "Video Production Jerusalem"}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#111] mt-6 mb-6 leading-tight" style={{ animation: "fadeInUp .5s .08s ease both" }}>
            {isHe ? "הפקת וידאו בירושלים" : "Video Production in Jerusalem"}
          </h1>
          <p className="text-xl text-[#555] max-w-2xl leading-relaxed mb-8">
            {isHe
              ? "ירושלים היא עיר עם סיפור עמוק. The Video Shop מביאה את הקסם הויזואלי של ירושלים לסרטי תדמית, תיעוד מוסדי וסרטי שיווק — עם הבנה של הרגישויות הייחודיות לעיר."
              : "Jerusalem is a city with a deep story. The Video Shop brings Jerusalem's visual magic to brand films, institutional documentation, and marketing videos — with sensitivity to the city's unique character."}
          </p>
          <Link href="/contact" className="inline-block bg-[#FFD000] text-[#111] font-bold px-8 py-4 rounded-full hover:bg-[#f0c400] transition-colors">
            {isHe ? "קבל הצעת מחיר — ירושלים" : "Get a Quote — Jerusalem"}
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f4f4f4]" dir={isHe ? "rtl" : "ltr"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-[#111] mb-8">
            {isHe ? "מי הלקוחות שלנו בירושלים?" : "Our Jerusalem Clients"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger">
            {specialties.map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-[#e5e5e5] flex items-center gap-3 reveal card-lift">
                <span className="text-2xl">{s.heIcon}</span>
                <span className="text-sm font-semibold text-[#333]">{isHe ? s.nameHe : s.nameEn}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6" dir={isHe ? "rtl" : "ltr"}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#111] mb-6">
            {isHe ? "למה לבחור ב-The Video Shop לירושלים?" : "Why Choose The Video Shop for Jerusalem?"}
          </h2>
          {isHe ? (
            <div className="space-y-4 text-[#555] leading-relaxed">
              <p>ירושלים דורשת גישה שונה מתל אביב. הצילומים בעיר העתיקה, ב-Mount Scopus, ברחביה ובמוסדות כמו האוניברסיטה העברית ובית החולים הדסה — כולם דורשים ניסיון, סבלנות ויחסים נכונים.</p>
              <p>אנחנו ביצענו עשרות הפקות בירושלים, כולל עבור מוסדות ממשלתיים, מוסאונים, בתי חולים, NGO בינלאומיות ואוניברסיטאות. אנחנו יודעים מה דרוש — ואוכלים לספק.</p>
              <p>הלוקיישנים בירושלים הם בין המרהיבים בעולם: ירושלים של זהב, שוק מחנה יהודה, מגדל דוד, הגן הבוטני — כל אחד מהם מספק רקע שאין שני לו.</p>
            </div>
          ) : (
            <div className="space-y-4 text-[#555] leading-relaxed">
              <p>Jerusalem requires a different approach than Tel Aviv. Filming in the Old City, Mount Scopus, Rehavia, and institutions like the Hebrew University and Hadassah Hospital — all require experience, patience, and the right relationships.</p>
              <p>We've executed dozens of productions in Jerusalem, including for government institutions, museums, hospitals, international NGOs, and universities. We know what it takes — and we can deliver.</p>
              <p>Jerusalem's locations are among the most breathtaking in the world: the golden city, Mahane Yehuda Market, Tower of David, the Botanical Garden — each provides an unmatched backdrop.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-4">
            {isHe ? "מחפשים הפקת וידאו בירושלים?" : "Looking for Video Production in Jerusalem?"}
          </h2>
          <Link href="/contact" className="inline-block bg-[#FFD000] text-[#111] font-bold px-10 py-4 rounded-full hover:bg-[#f0c400] transition-colors mt-2">
            {isHe ? "בואו נדבר" : "Let's Talk"}
          </Link>
        </div>
      </section>
    </main>
  );
}
