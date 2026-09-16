import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import dynamic from "next/dynamic";
import FAQSchema from "@/components/FAQSchema";
import CountUp from "@/components/CountUp";

const FAQSection = dynamic(() => import("@/components/FAQSection"));
const PortfolioGrid = dynamic(() => import("@/components/PortfolioGrid"));

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("homeTitle"), description: t("homeDesc") };
}

/* ── data ─────────────────────────────────────────────────────────── */

const clients = [
  { name: "Palo Alto Networks", style: "font-bold tracking-tight text-[15px]" },
  { name: "Ashtrom",            style: "font-bold tracking-widest text-[13px] uppercase" },
  { name: "Bright Data",        style: "font-semibold text-[15px]" },
  { name: "Airobotics",         style: "font-bold italic text-[14px]" },
  { name: "Nucleai",            style: "font-bold text-[15px]" },
  { name: "Vertica",            style: "font-bold tracking-wide text-[14px]" },
  { name: "DRIDE",              style: "font-black tracking-widest text-[14px] uppercase" },
  { name: "Levi Strauss",       style: "font-semibold text-[14px]" },
  { name: "UserWay",            style: "font-bold text-[15px]" },
  { name: "CROPX",              style: "font-black tracking-wider text-[13px] uppercase" },
  { name: "מפעל הפיס",          style: "font-bold text-[14px]" },
  { name: "Humavox",            style: "font-bold text-[14px]" },
];

const portfolioVideos = [
  {
    id: "rixmoZ4Y4Uk",
    titleHe: "Vertica: פרסומת לייפסטייל",
    titleEn: "Vertica: Lifestyle Ad",
    descHe: "פרסומת לייפסטייל לפרויקט הנדל\"ן היוקרתי Vertica. הסרט שם דגש על תחושת החיים בפרויקט: אסתטיקה, אור ותנועה, כדי למכור חוויה, לא רק דירה.",
    descEn: "A lifestyle commercial for the luxury real estate project Vertica. The film focuses on the feeling of living in the development: aesthetics, light and movement, selling an experience, not just an apartment.",
  },
  {
    id: "94W9SfZcx-Y",
    titleHe: "Levi Strauss: אירוע כוכבים",
    titleEn: "Levi Strauss: Celebrity Event",
    descHe: "תיעוד אירוע יחסי ציבור של Levi Strauss עם כוכבים ומשפיענים ישראלים. הסרט לכד את האווירה, האנרגיה והרגעים האותנטיים של הערב.",
    descEn: "Coverage of a Levi Strauss PR event with Israeli celebrities and influencers. The film captured the atmosphere, energy and authentic moments of the evening.",
  },
  {
    id: "VsiMUos3_58",
    titleHe: "Nucleai: אירוע חברה",
    titleEn: "Nucleai: Company Event",
    descHe: "Nucleai היא סטארטאפ AI רפואי שפיתח פתרונות לניתוח פתולוגיה דיגיטלית. הסרט תיעד את אירוע החברה השנתי ושימש לתקשורת פנים-ארגונית וגיוס עובדים.",
    descEn: "Nucleai is a medical AI startup developing digital pathology analysis solutions. The film documented their annual company event for internal communications and employer branding.",
  },
  {
    id: "HKkqkHBSt7Q",
    titleHe: "Bright Data: AI Explainer",
    titleEn: "Bright Data: AI Explainer",
    descHe: "סרט Explainer לפלטפורמת ה-AI של Bright Data, חברת web data עולמית. האתגר: להסביר מוצר טכנולוגי מורכב בצורה ברורה ומושכת לקהל עסקי.",
    descEn: "An explainer film for Bright Data's AI platform, a global web data company. The challenge: communicate a complex tech product clearly and compellingly to a business audience.",
  },
  {
    id: "JncBv6FbkRc",
    titleHe: "DRIDE: Kickstarter",
    titleEn: "DRIDE: Kickstarter",
    descHe: "סרט קמפיין Kickstarter למצלמת הרכב החכמה DRIDE. הסרט עזר לגייס מעל מיליון דולר, אחד מהקמפיינים הישראליים המוצלחים ביותר בפלטפורמה.",
    descEn: "A Kickstarter campaign film for the DRIDE smart dashcam. The film helped raise over $1M, one of the most successful Israeli campaigns on the platform.",
  },
  {
    id: "GFkN83F-DBU",
    titleHe: "אקרשטיין: 100 שנה",
    titleEn: "Akerstein: 100 Years",
    descHe: "סרט מחווה לציון 100 שנות פעילות של קבוצת אקרשטיין, מהחברות הגדולות בישראל לתשתיות ובנייה. שילוב של ארכיון היסטורי עם צילום עכשווי.",
    descEn: "A tribute film marking 100 years of the Akerstein Group, one of Israel's largest infrastructure and construction companies. A blend of historical archive with contemporary cinematography.",
  },
  {
    id: "N4iNxvFGA34",
    titleHe: "Iron Drone Airobotics",
    titleEn: "Iron Drone Airobotics",
    descHe: "סרט הדגמה לטכנולוגיית Iron Drone של Airobotics, מערכת רחפן אוטונומית לאבטחה ותגובה לאיומים. הסרט שילב צילומי אוויר מרשימים עם הסברת יכולות המוצר.",
    descEn: "A demo film for Airobotics' Iron Drone technology, an autonomous drone system for security and threat response. Combining impressive aerial footage with clear product capability storytelling.",
  },
  {
    id: "loW4i8ZOLNA",
    titleHe: "להיות אשטרומיסט",
    titleEn: "Be an Ashtromist",
    descHe: "סרט Employer Branding לקבוצת אשטרום שמטרתו למשוך טאלנטים צעירים. הסרט מציג את התרבות, הפרויקטים והאנשים שמאחורי אחת מחברות הנדל\"ן המובילות בישראל.",
    descEn: "An employer branding film for the Ashtrom Group aimed at attracting young talent. The film showcases the culture, projects and people behind one of Israel's leading real estate companies.",
  },
  {
    id: "M0EhoVJsxJM",
    titleHe: "מקבי: אירוע קורפורייט",
    titleEn: "Maccabi: Corporate Event",
    descHe: "תיעוד אירוע קורפורייט גדול לרשת שירותי הבריאות מקבי. הסרט שימש לתקשורת פנים-ארגונית ולהצגת ערכי החברה לאלפי עובדים.",
    descEn: "Coverage of a large corporate event for the Maccabi Healthcare network. The film served internal communications and conveyed company values to thousands of employees.",
  },
];

const specialties = [
  { titleHe: "הייטק, ביטחוני ו-SaaS",   titleEn: "High-Tech, Defense & SaaS",       descHe: "סרטי פיצ', Tech Explainer וקונספט: מה שמסביר את הבלתי ניתן להסברה.",      descEn: "Pitch films, Tech Explainers and concept videos: explaining the unexplainable.", href: "/services/hightech" },
  { titleHe: "נדל\"ן מסחרי ואדריכלות",  titleEn: "Real Estate & Architecture",       descHe: "צילומי רחפן ואדריכלות לאשטרום, ג'י סיטי ועוד.",                             descEn: "Drone and architectural videos for Israel's leading real estate firms.",           href: "/services/realestate" },
  { titleHe: "Employer Branding וגיוס",  titleEn: "Employer Branding & Recruitment",  descHe: "סרטי גיוס שמושכים טאלנטים, Kickstarter שגייס מעל מיליון דולר.",             descEn: "Recruitment films that attract talent, with Kickstarter campaigns that raised $1M+.", href: "/services/corporate" },
  { titleHe: "הפקות וידאו AI",           titleEn: "AI Video Production",             descHe: "Kling, Runway Gen-3, Midjourney: עולמות שהמצלמה לא יכולה לצלם.",           descEn: "Kling, Runway Gen-3, Midjourney: worlds no camera can reach.",                  href: "/services/ai" },
  { titleHe: "אירועים קורפורייט",        titleEn: "Corporate Events",                descHe: "תיעוד וידאו מקצועי של כנסים, השקות מוצרים ואירועי חברה.",                  descEn: "Professional coverage of conferences, product launches and company events.",      href: "/services/corporate" },
  { titleHe: "סרטי מוצר ו-Explainer",  titleEn: "Product & Explainer Videos",       descHe: "דמו מוצר ברור שמסביר את הערך ב-60 שניות.",                                 descEn: "Clear product demos that communicate value in 60 seconds.",                      href: "/services/hightech" },
  { titleHe: "סרטי הדרכה ו-eLearning", titleEn: "Training & eLearning Videos",      descHe: "Onboarding, הדרכת מוצר ו-compliance: מה שעובדים אמיתיים צופים ומיישמים.", descEn: "Onboarding, product training and compliance: what real employees watch and implement.", href: "/services/training" },
  { titleHe: "אנימציה ומוגרפיקה",      titleEn: "Animation & Motion Graphics",      descHe: "2D, Explainer ו-Motion Design: כשהמצלמה לא מספיקה.",                       descEn: "2D animation, Explainer and Motion Design: when the camera is not enough.",      href: "/services/animation" },
];

const whyItems = [
  { titleHe: "מגיעים תוך 24 שעות",    titleEn: "Brief within 24 hours",    descHe: "קבלו הצעת מחיר מפורטת תוך שעות מהפנייה הראשונה.",                              descEn: "Receive a detailed quote within hours of your first contact." },
  { titleHe: "לקוחות Fortune סומכים", titleEn: "Fortune clients trust us",  descHe: "Palo Alto Networks, Ashtrom, Bright Data ועוד 50+ חברות מובילות.",              descEn: "Palo Alto Networks, Ashtrom, Bright Data and 50+ leading companies." },
  { titleHe: "תמחור שקוף",             titleEn: "Transparent pricing",      descHe: "מחיר ברור מראש, ללא עלויות נסתרות, עם אפשרות לשותפות ארוכת טווח.",            descEn: "Clear pricing upfront, no hidden costs, with long-term partnership options." },
  { titleHe: "ביצוע ללא פשרות",        titleEn: "Flawless execution",       descHe: "כל פרויקט בנוי לפי הבריף שלכם, On-brand ולפי הסטנדרט הגבוה ביותר.",          descEn: "Every project is built around your brief, on-brand, to the highest standard." },
];

const steps = [
  { num: "1", tag: "Brief",      titleHe: "בריף",   titleEn: "Brief",      descHe: "ספרו לנו מה אתם צריכים: סוג הסרט ולוח הזמנים. תקבלו הצעת מחיר מיידית.", descEn: "Tell us what you need: shoot type and timeline. You'll receive an instant quote." },
  { num: "2", tag: "Production", titleHe: "הפקה",   titleEn: "Production", descHe: "בימוי, צילום ועריכה מקצועית עם צוות קל ויעיל, פוקוס מלא על התוצאה.",      descEn: "Directing, shooting and professional editing with a lean crew, full focus on results." },
  { num: "3", tag: "Delivery",   titleHe: "אספקה",  titleEn: "Delivery",   descHe: "הסרט הסופי בכל הפורמטים הנדרשים: רשתות, אתר, מצגת משקיעים.",           descEn: "Final video in all formats: social, web, investor presentations." },
];

/* ── shared style tokens ───────────────────────────────────────────── */
const sectionLabel = "inline-flex items-center gap-2 text-xs font-bold text-[#717171] uppercase tracking-widest mb-3";
const yellowDot = <span className="w-1.5 h-1.5 rounded-full bg-[#FFD000] inline-block shrink-0" />;
const cardBase = "bg-white border border-[#e5e5e5] rounded-[14px] shadow-[0_1px_3px_rgba(0,0,0,.06)]";
const btnPrimary = "inline-block bg-[#FFD000] hover:bg-[#f0c400] text-[#111] font-bold rounded-full transition-colors duration-150";

/* ── page ─────────────────────────────────────────────────────────── */

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isHe = locale === "he";

  return (
    <>
      <link rel="preload" href="/hero-poster.jpg" as="image" fetchPriority="high" />
      <FAQSchema locale={locale} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-[#f4f4f4] pt-[64px] relative overflow-hidden">
        {/* Floating orb decorations — CSS-only, zero JS */}
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #FFD000 0%, transparent 70%)" }}
        />
        <div
          aria-hidden="true"
          className="animate-float pointer-events-none absolute bottom-8 left-8 w-48 h-48 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #FFD000 0%, transparent 70%)", animationDelay: "2s" }}
        />
        {/* Dot grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #11111110 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-[var(--container)] mx-auto px-6 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div className={isHe ? "order-2 lg:order-1" : ""}>
              {/* Badge — fades in first */}
              <div
                className="inline-flex items-center gap-2 bg-white border border-[#e5e5e5] rounded-full px-4 py-1.5 mb-7 shadow-[0_1px_3px_rgba(0,0,0,.06)]"
                style={{ animation: "fadeInUp .5s ease both" }}
              >
                <span className="text-sm">⭐</span>
                <span className="text-sm font-semibold text-[#111]">
                  {isHe ? "דירוג" : "Rated"} <strong>4.9</strong> · <strong>100+</strong> {isHe ? "פרויקטים" : "projects"}
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#111] leading-[1.06] tracking-[-0.02em] mb-5"
                style={{ animation: "fadeInUp .55s .1s ease both" }}
              >
                {isHe ? (
                  <>הפקת וידאו מקצועית<br />לעסקים המובילים<br />בישראל</>
                ) : (
                  <>Professional Video<br />Production Services<br />in Israel</>
                )}
              </h1>

              <p
                className="text-[17px] text-[#555] leading-relaxed mb-9 max-w-[440px]"
                style={{ animation: "fadeInUp .55s .2s ease both" }}
              >
                {isHe
                  ? "סטודיו בוטיק עם 20 שנות ניסיון: הייטק, נדל\"ן מסחרי, Employer Branding והפקות AI."
                  : "Boutique studio with 20 years experience: high-tech, real estate, employer branding and AI productions."}
              </p>

              <div style={{ animation: "fadeInUp .55s .3s ease both" }}>
                <Link href="/contact" aria-label={isHe ? "קבל הצעת מחיר מיידית לפרויקט הוידאו שלך" : "Get an instant quote for your video project"} className={`${btnPrimary} px-8 py-4 text-base animate-pulse-glow btn-bounce`}>
                  {isHe ? "קבל הצעת מחיר מיידית" : "Get an Instant Quote"}
                </Link>
              </div>
            </div>

            {/* Right — looping video */}
            <div className={`relative ${isHe ? "order-1 lg:order-2" : ""}`} style={{ animation: "scaleIn .65s .1s ease both" }}>
              <div className="relative rounded-[20px] overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,.18)] aspect-video">
                {/* Yellow ring decoration */}
                <div
                  aria-hidden="true"
                  className="animate-spin-slow absolute -top-6 -right-6 w-24 h-24 rounded-full border-2 border-dashed border-[#FFD000]/40 pointer-events-none"
                />
                <video
                  src="/hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  poster="/hero-poster.jpg"
                  aria-hidden="true"
                  role="presentation"
                  className="w-full h-full object-cover"
                >
                  <track kind="captions" src="" label={isHe ? "עברית" : "English"} />
                </video>
              </div>

              {/* Rating card — floats */}
              <div
                className={`animate-float absolute -bottom-5 ${isHe ? "-end-4" : "-start-4"} bg-white rounded-[14px] shadow-[0_4px_16px_rgba(0,0,0,.12)] px-4 py-3 flex items-center gap-3 border border-[#e5e5e5]`}
                style={{ animationDelay: "1s" }}
              >
                <div className="w-9 h-9 bg-[#FFD000] rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#111]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#111] leading-none mb-0.5">Rated Excellent</p>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-black text-[#111]">4.9</span>
                    <span className="text-[#FFD000] text-xs tracking-tight">★★★★★</span>
                  </div>
                  <p className="text-[10px] text-[#717171] leading-none mt-0.5">{isHe ? "100+ פרויקטים" : "100+ projects"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS — infinite marquee ────────────────────────────── */}
      <section id="clients" className="bg-white py-14 px-6 overflow-hidden">
        <p className="text-center text-xs font-bold text-[#717171] uppercase tracking-widest mb-8 reveal">
          {isHe ? "סומכים עלינו" : "Trusted by"}
        </p>
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{ background: "linear-gradient(to right, white, transparent)" }} />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{ background: "linear-gradient(to left, white, transparent)" }} />
          {/* Marquee track — duplicated for seamless loop */}
          <div className="flex w-max animate-marquee gap-12 items-center">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="shrink-0 grayscale opacity-50 hover:opacity-90 hover:grayscale-0 transition-all duration-200 cursor-default">
                <span className={`text-[#222] ${c.style}`}>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ───────────────────────────────────────────── */}
      <section id="why" className="bg-[#f4f4f4] py-20 px-6">
        <div className="max-w-[var(--container)] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div className="reveal">
              <p className={sectionLabel}>{yellowDot}{isHe ? "למה videoshop?" : "Why videoshop?"}</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#111] leading-tight tracking-[-0.01em] mb-6">
                {isHe
                  ? "למה לבחור ב-videoshop?"
                  : "Why choose videoshop for video production?"}
              </h2>

              {/* Stats row with CountUp */}
              <div className="grid grid-cols-3 gap-3 mt-2 stagger">
                {[
                  { to: 100, suffix: "+", labelHe: "פרויקטים",     labelEn: "Projects" },
                  { to: 20,  suffix: "+", labelHe: "שנות ניסיון",  labelEn: "Years Exp." },
                  { to: 4.9, suffix: "★", labelHe: "דירוג ממוצע",  labelEn: "Avg. Rating" },
                ].map((s) => (
                  <div key={s.labelEn} className={`${cardBase} p-4 text-center reveal-scale`}>
                    <p className="text-xl font-black text-[#111]">
                      <CountUp to={s.to} suffix={s.suffix} />
                    </p>
                    <p className="text-[11px] text-[#717171] mt-1 font-medium">{isHe ? s.labelHe : s.labelEn}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 4 feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 stagger">
              {whyItems.map((item, i) => (
                <div key={i} className={`${cardBase} p-6 card-lift hover:border-[#FFD000]/60 transition-all duration-200 reveal`}>
                  <h3 className="font-bold text-[#111] text-[15px] mb-2">{isHe ? item.titleHe : item.titleEn}</h3>
                  <p className="text-sm text-[#555] leading-relaxed">{isHe ? item.descHe : item.descEn}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust banner */}
          <div className={`${cardBase} mt-14 p-8 text-center reveal`}>
            <h3 className="text-xl font-black text-[#111] mb-1">
              {isHe ? "סטודיו מהמובילים בישראל" : "Israel's leading video production studio"}
            </h3>
            <p className="text-sm text-[#555] mb-6">
              {isHe
                ? "חברות הייטק, נדל\"ן ומגזר ביטחוני בוחרות ב-videoshop."
                : "High-tech, real estate and defense companies across Israel choose videoshop."}
            </p>
            <div className="flex justify-center flex-wrap gap-10 stagger">
              {[
                { to: 20,  suffix: "+", labelHe: "שנות ניסיון",      labelEn: "Years Experience" },
                { to: 100, suffix: "+", labelHe: "פרויקטים הושלמו",  labelEn: "Projects Completed" },
                { to: 4.9, suffix: "★", labelHe: "דירוג ממוצע",      labelEn: "Average Rating" },
              ].map((s) => (
                <div key={s.labelEn} className="text-center reveal-scale">
                  <p className="text-3xl font-black text-[#111]">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </p>
                  <p className="text-xs text-[#717171] mt-1 font-medium">{isHe ? s.labelHe : s.labelEn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ────────────────────────────────────────────── */}
      <section id="portfolio" className="bg-white py-20 px-6">
        <div className="max-w-[var(--container)] mx-auto">
          <div className="flex items-center justify-between mb-10 reveal">
            <div>
              <p className={sectionLabel}>{yellowDot}{isHe ? "עבודות נבחרות" : "Selected Work"}</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#111] tracking-[-0.01em]">
                {isHe ? "תיק עבודות" : "Portfolio"}
              </h2>
            </div>
            <Link href="/portfolio" className="text-sm font-bold text-[#111] underline underline-offset-4 hover:no-underline">
              {isHe ? "הצג עוד ←" : "Show more →"}
            </Link>
          </div>
          <PortfolioGrid videos={portfolioVideos} locale={locale} />
        </div>
      </section>

      {/* ── SPECIALTIES ──────────────────────────────────────────── */}
      <section id="specialties" className="bg-[#f4f4f4] py-20 px-6">
        <div className="max-w-[var(--container)] mx-auto">
          <p className={`${sectionLabel} justify-center w-full flex reveal`}>{yellowDot}{isHe ? "תחומי התמחות" : "Specialties"}</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#111] text-center tracking-[-0.01em] mb-12 reveal">
            {isHe ? "מה אנחנו מציעים" : "What we offer"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
            {specialties.map((s, i) => (
              <Link
                key={i}
                href={s.href}
                className="group bg-white border border-[#e5e5e5] rounded-[14px] p-6 card-lift hover:border-[#FFD000] hover:shadow-[0_4px_16px_rgba(0,0,0,.08)] transition-all duration-200 reveal"
              >
                <h3 className="font-bold text-[#111] text-[15px] mb-2">{isHe ? s.titleHe : s.titleEn}</h3>
                <p className="text-sm text-[#555] leading-relaxed mb-4">{isHe ? s.descHe : s.descEn}</p>
                <span className="text-sm font-bold text-[#111] group-hover:text-[#111] inline-flex items-center gap-1">
                  {isHe ? "למידע נוסף" : "Learn more"}
                  <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-150">{isHe ? "→" : "→"}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className={`${cardBase} p-8 md:p-12 border-s-4 border-s-[#FFD000] reveal`}>
            <div className="flex gap-0.5 mb-5">
              {[...Array(5)].map((_, j) => (
                <svg key={j} className="w-5 h-5 text-[#FFD000]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-lg md:text-xl text-[#111] font-medium leading-relaxed mb-7">
              &ldquo;{isHe
                ? "עבודה עם videoshop הייתה game changer אמיתי. יצירתיים, אמינים ותמיד צעד אחד קדימה."
                : "Working with videoshop was a real game changer. Creative, reliable, and always one step ahead."}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFD000] rounded-full flex items-center justify-center shrink-0">
                <span className="font-black text-sm text-[#111]">DM</span>
              </div>
              <div>
                <p className="font-bold text-[#111] text-sm">Daniel Menashe</p>
                <p className="text-xs text-[#717171]">{isHe ? "מנהל שיווק" : "Marketing Director"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-[#f4f4f4] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className={`${sectionLabel} justify-center w-full flex reveal`}>{yellowDot}{isHe ? "איך זה עובד?" : "How it works"}</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#111] text-center tracking-[-0.01em] mb-3 reveal">
            {isHe ? "התהליך שלנו" : "Our Process"}
          </h2>
          <p className="text-[#555] text-center mb-12 max-w-sm mx-auto reveal">
            {isHe ? "מבריף ועד הסרט הסופי, פשוט, מהיר ומקצועי." : "From brief to final film: simple, fast and professional."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 stagger">
            {steps.map((step, i) => (
              <div key={step.num} className={`${cardBase} p-7 relative card-lift reveal`}>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-9 end-0 w-4 h-px bg-[#e5e5e5] translate-x-full z-10" />
                )}
                <div className="w-11 h-11 bg-[#FFD000] rounded-full flex items-center justify-center mb-5 font-black text-[#111] text-base animate-pulse-glow">
                  {step.num}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#717171] mb-1.5">{step.tag}</p>
                <h3 className="font-bold text-[#111] text-lg mb-2">{isHe ? step.titleHe : step.titleEn}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{isHe ? step.descHe : step.descEn}</p>
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <Link href="/contact" aria-label={isHe ? "קבל הצעת מחיר מיידית — צרו קשר" : "Get an instant quote — contact us"} className={`${btnPrimary} px-8 py-4 text-base btn-bounce`}>
              {isHe ? "קבל הצעת מחיר מיידית" : "Get an Instant Quote"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <FAQSection locale={locale} />

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="bg-[#111] py-20 px-6 relative overflow-hidden">
        {/* Subtle yellow glow in dark section */}
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(ellipse, #FFD000 0%, transparent 70%)" }}
        />
        <div className="max-w-2xl mx-auto text-center relative z-10 reveal">
          <p className="text-xs font-bold text-[#FFD000] uppercase tracking-widest mb-4">
            {isHe ? "מוכנים להתחיל?" : "Ready to start?"}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-[-0.01em] mb-4 shimmer-text">
            {isHe ? "קבל הצעת מחיר מיידית" : "Get an Instant Quote"}
          </h2>
          <p className="text-[#888] mb-9 text-[17px]">
            {isHe ? "ספרו לנו על הפרויקט, ונחזור עם הצעה תוך שעות." : "Tell us about your project, and we'll respond with a quote within hours."}
          </p>
          <Link href="/contact" aria-label={isHe ? "קבל הצעת מחיר מיידית לפרויקט הבא שלך" : "Get an instant quote for your next project"} className={`${btnPrimary} px-10 py-4 text-lg animate-pulse-glow btn-bounce`}>
            {isHe ? "קבל הצעת מחיר מיידית" : "Get an Instant Quote"}
          </Link>
        </div>
      </section>
    </>
  );
}
