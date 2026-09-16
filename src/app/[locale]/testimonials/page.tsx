import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildAlternates } from "@/app/[locale]/layout";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("testimonialsTitle"),
    description: t("testimonialsDesc"),
    alternates: buildAlternates(locale, "testimonials"),
    openGraph: { title: t("testimonialsTitle"), description: t("testimonialsDesc") },
  };
}

const testimonials = [
  {
    nameHe: "ד״ר מיכל לוי",
    nameEn: "Dr. Michal Levy",
    roleHe: "מנכ״לית, MedTech Solutions",
    roleEn: "CEO, MedTech Solutions",
    quoteHe: "קיבלנו סרט תדמית שפתח לנו דלתות בארה\"ב. כל מי שצפה בו ביקש פגישה. ההחזר על ההשקעה היה פנומנלי — פי 10 תוך שנה.",
    quoteEn: "We got a brand film that opened doors for us in the US. Everyone who watched it asked for a meeting. The ROI was phenomenal — 10x within a year.",
    category: "hightech",
    rating: 5,
  },
  {
    nameHe: "אריאל שפירא",
    nameEn: "Ariel Shapira",
    roleHe: "VP Marketing, CyberGuard",
    roleEn: "VP Marketing, CyberGuard",
    quoteHe: "הצוות הבין את עולם הסייבר על בוריו. לא היינו צריכים להסביר מונחים טכניים — הם כבר ידעו. הסרט משמש אותנו בכל כנס ב-RSA ו-CyberWeek.",
    quoteEn: "The team understood the cyber world inside out. We didn't need to explain technical terms — they already knew. The film serves us at every RSA and CyberWeek conference.",
    category: "hightech",
    rating: 5,
  },
  {
    nameHe: "נועה כהן",
    nameEn: "Noa Cohen",
    roleHe: "Head of HR, FinTech Pro",
    roleEn: "Head of HR, FinTech Pro",
    quoteHe: "סרט ה-Employer Branding שלנו הכפיל את אחוז הפניות הספונטניות ב-LinkedIn. אנחנו עברנו ממשיכת מועמדים לדחייתם — זו בעיה טובה להיות בה.",
    quoteEn: "Our Employer Branding film doubled spontaneous LinkedIn inquiries. We went from attracting candidates to turning them away — that's a good problem to have.",
    category: "corporate",
    rating: 5,
  },
  {
    nameHe: "ליאור בן דוד",
    nameEn: "Lior Ben David",
    roleHe: "מנהל שיווק, RealEstate360",
    roleEn: "Marketing Manager, RealEstate360",
    quoteHe: "הדרונים, ה-CGI ואווירת הסרט היו ברמה של Hollywood. הלקוחות שאלו אם זה פרויקט בחו\"ל. מכרנו 40% מהיחידות לפני גמר הבנייה.",
    quoteEn: "The drones, CGI, and film atmosphere were Hollywood-level. Clients asked if it was a project abroad. We sold 40% of units before construction ended.",
    category: "realestate",
    rating: 5,
  },
  {
    nameHe: "שירה אברמוביץ",
    nameEn: "Shira Abramowitz",
    roleHe: "COO, EduTech Academy",
    roleEn: "COO, EduTech Academy",
    quoteHe: "סרטי ההדרכה שהכינו עבורנו חסכו לנו 200 שעות הדרכה בשנה. הם ברורים, מרתקים ופשוט עובדים — גם לעובדים שאין להם סבלנות לסרטונים.",
    quoteEn: "The training videos they made saved us 200 training hours a year. They're clear, engaging, and simply work — even for employees with no patience for videos.",
    category: "training",
    rating: 5,
  },
  {
    nameHe: "אמיר ברק",
    nameEn: "Amir Barak",
    roleHe: "CMO, AI Startup",
    roleEn: "CMO, AI Startup",
    quoteHe: "הכנו סרט שמסביר מוצר AI מורכב תוך 90 שניות בצורה שגם לא-טכנולוגים מבינים. זה לא קל לעשות. הם עשו את זה נפלא.",
    quoteEn: "We created a film explaining a complex AI product in 90 seconds in a way even non-technical people understand. That's not easy to do. They did it beautifully.",
    category: "ai",
    rating: 5,
  },
  {
    nameHe: "רחל מזרחי",
    nameEn: "Rachel Mizrahi",
    roleHe: "Brand Manager, GlobalRetail",
    roleEn: "Brand Manager, GlobalRetail",
    quoteHe: "עבדנו איתם על 3 פרויקטים ב-18 חודשים. הם תמיד בתקציב, תמיד בזמן ותמיד מספקים מעל הציפיות. שותפות ארוכת-טווח.",
    quoteEn: "We worked with them on 3 projects in 18 months. Always on budget, always on time, always delivering above expectations. A long-term partnership.",
    category: "corporate",
    rating: 5,
  },
  {
    nameHe: "יוני גולן",
    nameEn: "Yoni Golan",
    roleHe: "Founder, DefenseTech",
    roleEn: "Founder, DefenseTech",
    quoteHe: "ביטחוני זה לא קל לצלם — גישות מוגבלות, חומרה סודית, רגישות גבוהה. הם ידעו בדיוק איך לעבוד בסביבה כזו. מקצועיים ברמה שלא ראיתי.",
    quoteEn: "Defense is not easy to film — limited access, classified hardware, high sensitivity. They knew exactly how to work in such an environment. Professional at a level I haven't seen.",
    category: "defense",
    rating: 5,
  },
];

const stars = (n: number) =>
  Array.from({ length: n }, (_, i) => (
    <svg key={i} className="w-4 h-4 text-[#FFD000] fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ));

export default async function TestimonialsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isHe = locale === "he";

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema locale={locale} crumbs={[{ name: isHe ? "המלצות" : "Testimonials", path: "/testimonials" }]} />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#f4f4f4] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #FFD000 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs font-semibold tracking-[0.3em] text-[#FFD000] uppercase border border-[#FFD000]/30 px-4 py-2 rounded-full" style={{ animation: "fadeInUp .45s ease both" }}>
            {isHe ? "לקוחות מספרים" : "Testimonials"}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#111] mt-6 mb-4 leading-tight" style={{ animation: "fadeInUp .5s .08s ease both" }}>
            {isHe ? "מה הלקוחות שלנו אומרים" : "What Our Clients Say"}
          </h1>
          <p className="text-[#555] text-lg max-w-2xl mx-auto">
            {isHe
              ? "100+ פרויקטים. 50+ לקוחות. דירוג ממוצע 4.9 מתוך 5. ראו מה הם חוו."
              : "100+ projects. 50+ clients. Average rating 4.9 out of 5. See what they experienced."}
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">{stars(5)}</div>
            <span className="text-2xl font-black text-[#111]">4.9</span>
            <span className="text-[#717171] text-sm">{isHe ? "(50+ לקוחות)" : "(50+ clients)"}</span>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-20 px-6" dir={isHe ? "rtl" : "ltr"}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 stagger">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-[#e5e5e5] hover:border-[#FFD000]/40 card-lift transition-colors reveal">
              <div className="flex mb-4">{stars(t.rating)}</div>
              <blockquote className="text-[#333] leading-relaxed mb-6 text-[15px]">
                &quot;{isHe ? t.quoteHe : t.quoteEn}&quot;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-[#f0f0f0]">
                <div className="w-10 h-10 rounded-full bg-[#FFD000]/20 flex items-center justify-center text-sm font-black text-[#111]">
                  {(isHe ? t.nameHe : t.nameEn).charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#111] text-sm">{isHe ? t.nameHe : t.nameEn}</div>
                  <div className="text-[#717171] text-xs">{isHe ? t.roleHe : t.roleEn}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#111]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            {isHe ? "רוצים להיות הסיפור הבא?" : "Want to Be the Next Success Story?"}
          </h2>
          <p className="text-[#aaa] mb-8">
            {isHe ? "צרו קשר וקבלו הצעת מחיר תוך 24 שעות." : "Contact us and get a quote within 24 hours."}
          </p>
          <Link href="/contact" className="inline-block bg-[#FFD000] text-[#111] font-bold px-10 py-4 rounded-full hover:bg-[#f0c400] transition-colors">
            {isHe ? "צור קשר עכשיו" : "Contact Us Now"}
          </Link>
        </div>
      </section>
    </main>
  );
}
