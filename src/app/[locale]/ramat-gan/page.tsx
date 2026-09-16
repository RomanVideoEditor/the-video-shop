import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildAlternates } from "@/app/[locale]/layout";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("ramatGanTitle"),
    description: t("ramatGanDesc"),
    alternates: buildAlternates(locale, "ramat-gan"),
    openGraph: { title: t("ramatGanTitle"), description: t("ramatGanDesc") },
  };
}

export default async function RamatGanPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isHe = locale === "he";

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Video Shop — הפקת וידאו רמת גן",
    description: isHe ? "חברת הפקת וידאו ברמת גן ובורסת יהלומים" : "Video production company in Ramat Gan and Diamond Exchange",
    address: {
      "@type": "PostalAddress",
      addressLocality: "רמת גן",
      addressCountry: "IL",
    },
    areaServed: "Ramat Gan",
    url: "https://www.the-videoshop.com/ramat-gan",
  };

  const areas = [
    { nameHe: "בורסת היהלומים", nameEn: "Diamond Exchange District" },
    { nameHe: "איזור הבנקים ופיננסים", nameEn: "Banking & Finance District" },
    { nameHe: "בית מגדלי עזריאלי", nameEn: "Azrieli Towers Area" },
    { nameHe: "פארק מלחה", nameEn: "Malcha Park" },
    { nameHe: "גן לאומי", nameEn: "National Park" },
    { nameHe: "גבעתיים ובני ברק", nameEn: "Givatayim & Bnei Brak" },
  ];

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BreadcrumbSchema locale={locale} crumbs={[{ name: isHe ? "הפקת וידאו רמת גן" : "Video Production Ramat Gan", path: "/ramat-gan" }]} />

      <section className="pt-32 pb-20 px-6 relative overflow-hidden" dir={isHe ? "rtl" : "ltr"}>
        <div aria-hidden="true" className="animate-float-slow pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-[0.06]" style={{ background: "radial-gradient(circle, #FFD000 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#FFD000] uppercase border border-[#FFD000]/30 px-4 py-2 rounded-full" style={{ animation: "fadeInUp .45s ease both" }}>
            {isHe ? "הפקת וידאו רמת גן" : "Video Production Ramat Gan"}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#111] mt-6 mb-6 leading-tight" style={{ animation: "fadeInUp .5s .08s ease both" }}>
            {isHe ? "הפקת וידאו ברמת גן" : "Video Production in Ramat Gan"}
          </h1>
          <p className="text-xl text-[#555] max-w-2xl leading-relaxed mb-8">
            {isHe
              ? "רמת גן — מרכז היהלומים, הבנקאות והפיננסים של ישראל. The Video Shop מתמחה בסרטי תדמית, הפקות קורפורייט ו-Employer Branding לחברות מהמגזר הפיננסי ועסקי."
              : "Ramat Gan — Israel's center of diamonds, banking, and finance. The Video Shop specializes in brand films, corporate productions, and Employer Branding for financial and business sector companies."}
          </p>
          <Link href="/contact" className="inline-block bg-[#FFD000] text-[#111] font-bold px-8 py-4 rounded-full hover:bg-[#f0c400] transition-colors">
            {isHe ? "קבל הצעת מחיר — רמת גן" : "Get a Quote — Ramat Gan"}
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f4f4f4]" dir={isHe ? "rtl" : "ltr"}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-[#111] mb-8">
            {isHe ? "אזורי צילום ברמת גן" : "Filming Areas in Ramat Gan"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger">
            {areas.map((a, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-[#e5e5e5] reveal card-lift">
                <span className="text-sm font-semibold text-[#333]">{isHe ? a.nameHe : a.nameEn}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6" dir={isHe ? "rtl" : "ltr"}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#111] mb-6">
            {isHe ? "הפקת וידאו לחברות ברמת גן" : "Video Production for Ramat Gan Companies"}
          </h2>
          {isHe ? (
            <div className="space-y-4 text-[#555] leading-relaxed">
              <p>רמת גן היא לא סתם עיר — היא עיר עסקים. בורסת היהלומים, בנקים, חברות ביטוח, קרנות השקעה וחברות נדל״ן — כולם ממוקמים בה ולכולם יש צורך בסרטי תדמית מקצועיים.</p>
              <p>אנחנו מכירים את הדינמיקה העסקית של רמת גן. יודעים לצלם בסביבות מודרניות של גורדי-שחקים, לוביות מפוארות ומרכזי עסקים, תוך שמירה על נוכחות מינימלית ובלתי פולשנית.</p>
              <p>מהיות רמת גן גובלת בתל אביב, אנחנו מגיעים אליכם מהר, עם צוות קומפקטי שמוכן לפעול בסביבה עסקית תחרותית.</p>
            </div>
          ) : (
            <div className="space-y-4 text-[#555] leading-relaxed">
              <p>Ramat Gan isn't just a city — it's a business city. The Diamond Exchange, banks, insurance companies, investment funds, and real estate firms — all based here and all need professional brand films.</p>
              <p>We understand Ramat Gan's business dynamics. We know how to film in modern high-rise environments, luxurious lobbies, and business centers, while maintaining a minimal and non-intrusive presence.</p>
              <p>Being adjacent to Tel Aviv, we reach you quickly with a compact team ready to operate in a competitive business environment.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-6 bg-[#111]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-4">
            {isHe ? "מחפשים הפקת וידאו ברמת גן?" : "Looking for Video Production in Ramat Gan?"}
          </h2>
          <Link href="/contact" className="inline-block bg-[#FFD000] text-[#111] font-bold px-10 py-4 rounded-full hover:bg-[#f0c400] transition-colors mt-2">
            {isHe ? "בואו נדבר" : "Let's Talk"}
          </Link>
        </div>
      </section>
    </main>
  );
}
