import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildAlternates } from "@/app/[locale]/layout";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("pricingTitle"),
    description: t("pricingDesc"),
    alternates: buildAlternates(locale, "pricing"),
    openGraph: { title: t("pricingTitle"), description: t("pricingDesc") },
  };
}

const packages = [
  {
    nameHe: "סרטון קצר",
    nameEn: "Short Film",
    priceHe: "החל מ-₪9,000",
    priceEn: "From ₪9,000",
    descHe: "סרטון תדמית קצר עד 60 שניות, יום צילום אחד.",
    descEn: "Short brand film up to 60 seconds, one shoot day.",
    featuresHe: ["יום צילום אחד", "עריכה + מוזיקה", "2 סבבי תיקונים", "גרסה לרשתות חברתיות"],
    featuresEn: ["One shoot day", "Editing + music", "2 revision rounds", "Social media version"],
    highlight: false,
  },
  {
    nameHe: "סרט תדמית",
    nameEn: "Brand Film",
    priceHe: "החל מ-₪18,000",
    priceEn: "From ₪18,000",
    descHe: "סרט תדמית מלא 90-120 שניות, 2 ימי צילום, מוגרפיקה.",
    descEn: "Full brand film 90-120 seconds, 2 shoot days, motion graphics.",
    featuresHe: ["2 ימי צילום", "עריכה, צביעה ומוזיקה", "מוגרפיקה בסיסית", "3 סבבי תיקונים", "כל הפורמטים"],
    featuresEn: ["2 shoot days", "Editing, color & music", "Basic motion graphics", "3 revision rounds", "All formats"],
    highlight: true,
  },
  {
    nameHe: "חבילת פרמיום",
    nameEn: "Premium Package",
    priceHe: "החל מ-₪35,000",
    priceEn: "From ₪35,000",
    descHe: "הפקה מלאה: תסריט, 3+ ימי צילום, אנימציה, AI.",
    descEn: "Full production: script, 3+ shoot days, animation, AI.",
    featuresHe: ["כתיבת תסריט", "3+ ימי צילום", "אנימציה ומוגרפיקה מלאה", "AI ו-VFX", "סדרת גרסאות קצרות", "ליווי עד ההשקה"],
    featuresEn: ["Script writing", "3+ shoot days", "Full animation & motion graphics", "AI & VFX", "Short version series", "Support through launch"],
    highlight: false,
  },
  {
    nameHe: "Employer Branding",
    nameEn: "Employer Branding",
    priceHe: "החל מ-₪25,000",
    priceEn: "From ₪25,000",
    descHe: "סרטי גיוס ומיתוג מעסיק: ראיונות, B-Roll, אנרגיית צוות.",
    descEn: "Recruitment & employer branding: interviews, B-Roll, team energy.",
    featuresHe: ["2-3 ימי צילום", "עריכה דינמית", "כתוביות ועיצוב", "Non-actor directing", "גרסאות LinkedIn + IG"],
    featuresEn: ["2-3 shoot days", "Dynamic editing", "Subtitles & design", "Non-actor directing", "LinkedIn + IG versions"],
    highlight: false,
  },
];

const faqs = [
  {
    qHe: "האם ניתן להתאים את החבילות?",
    qEn: "Can packages be customized?",
    aHe: "כן. כל הצעת מחיר בנויה על פי הפרויקט הספציפי שלכם. המחירים כאן הם נקודת התחלה בלבד.",
    aEn: "Yes. Every quote is built around your specific project. Prices here are a starting point only.",
  },
  {
    qHe: "כמה זמן לוקח פרויקט?",
    qEn: "How long does a project take?",
    aHe: "בדרך כלל 3-6 שבועות מפגישת הקיק-אוף ועד המסירה הסופית, תלוי במורכבות.",
    aEn: "Typically 3-6 weeks from kick-off to final delivery, depending on complexity.",
  },
  {
    qHe: "האם יש עלויות נסתרות?",
    qEn: "Are there hidden costs?",
    aHe: "לא. הצעות המחיר שלנו מפורטות מראש: ימי צילום, עריכה, מוזיקה, מספר תיקונים — הכל כתוב.",
    aEn: "No. Our quotes are detailed upfront: shoot days, editing, music, number of revisions — everything is written.",
  },
  {
    qHe: "מה קורה אם אני עובר את מכסת התיקונים?",
    qEn: "What happens if I exceed the revision quota?",
    aHe: "תיקונים נוספים מחוץ לסקופ מתומחרים לפי שעה. זה קורה נדיר כי אנחנו מסנכרנים טוב בשלב הקריאייטיב.",
    aEn: "Additional revisions outside scope are priced hourly. This rarely happens because we sync well in the creative phase.",
  },
];

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isHe = locale === "he";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: isHe ? f.qHe : f.qEn,
      acceptedAnswer: { "@type": "Answer", text: isHe ? f.aHe : f.aEn },
    })),
  };

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema locale={locale} crumbs={[{ name: isHe ? "מחירון" : "Pricing", path: "/pricing" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#f4f4f4] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #FFD000 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-semibold tracking-[0.3em] bg-[#111] text-[#FFD000] uppercase px-4 py-2 rounded-full" style={{ animation: "fadeInUp .45s ease both" }}>
            {isHe ? "מחירון" : "Pricing"}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#111] mt-6 mb-4 leading-tight" style={{ animation: "fadeInUp .5s .08s ease both" }}>
            {isHe ? "כמה עולה הפקת וידאו?" : "How Much Does Video Production Cost?"}
          </h1>
          <p className="text-[#555] text-lg max-w-2xl mx-auto" style={{ animation: "fadeInUp .5s .16s ease both" }}>
            {isHe
              ? "מחירים שקופים, ללא הפתעות. כל פרויקט מקבל הצעת מחיר מותאמת — אלה הם טווחי ההתחלה."
              : "Transparent pricing, no surprises. Every project gets a custom quote — these are the starting ranges."}
          </p>
        </div>
      </section>

      {/* Packages grid */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 stagger">
          {packages.map((pkg) => (
            <div
              key={pkg.nameEn}
              className={`relative rounded-2xl p-8 border transition-all reveal card-lift ${
                pkg.highlight
                  ? "border-[#FFD000] bg-white shadow-[0_4px_32px_rgba(255,208,0,.18)]"
                  : "border-[#e5e5e5] bg-white hover:border-[#FFD000]/40"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#FFD000] text-[#111] text-xs font-bold px-4 py-1 rounded-full">
                    {isHe ? "הכי פופולרי" : "Most Popular"}
                  </span>
                </div>
              )}
              <h2 className="text-xl font-black text-[#111] mb-1">{isHe ? pkg.nameHe : pkg.nameEn}</h2>
              <p className="inline-block text-2xl font-black text-[#FFD000] bg-[#111] px-4 py-1 rounded-lg mb-3">{isHe ? pkg.priceHe : pkg.priceEn}</p>
              <p className="text-sm text-[#555] mb-6">{isHe ? pkg.descHe : pkg.descEn}</p>
              <ul className="space-y-2 mb-8">
                {(isHe ? pkg.featuresHe : pkg.featuresEn).map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#333]">
                    <span className="w-4 h-4 rounded-full bg-[#FFD000]/20 flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-[#111]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block text-center font-bold px-6 py-3 rounded-full text-sm transition-colors ${
                  pkg.highlight
                    ? "bg-[#FFD000] text-[#111] hover:bg-[#f0c400]"
                    : "border border-[#e5e5e5] text-[#111] hover:border-[#FFD000]"
                }`}
              >
                {isHe ? "קבל הצעת מחיר" : "Get a Quote"}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#717171] mt-8 max-w-xl mx-auto">
          {isHe
            ? "* כל המחירים ללא מע\"מ. הצעת מחיר מפורטת תוך 24 שעות מהפנייה הראשונה."
            : "* All prices excl. VAT. Detailed quote within 24 hours of first contact."}
        </p>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f4f4f4]" dir={isHe ? "rtl" : "ltr"}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-[#111] mb-10 text-center">
            {isHe ? "שאלות נפוצות על מחיר" : "Pricing FAQ"}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-[#e5e5e5]">
                <h3 className="font-bold text-[#111] mb-2">{isHe ? faq.qHe : faq.qEn}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{isHe ? faq.aHe : faq.aEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#111]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            {isHe ? "מוכנים לקבל הצעה מפורטת?" : "Ready for a Detailed Quote?"}
          </h2>
          <p className="text-[#aaa] mb-8">
            {isHe ? "נחזור תוך יום עסקים עם הצעת מחיר שקופה לפרויקט שלכם." : "We'll get back within one business day with a transparent quote for your project."}
          </p>
          <Link href="/contact" className="inline-block bg-[#FFD000] text-[#111] font-bold px-10 py-4 rounded-full hover:bg-[#f0c400] transition-colors">
            {isHe ? "צור קשר עכשיו" : "Contact Us Now"}
          </Link>
        </div>
      </section>
    </main>
  );
}
