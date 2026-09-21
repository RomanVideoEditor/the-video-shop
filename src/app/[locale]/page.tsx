import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import dynamic from "next/dynamic";
import FAQSchema from "@/components/FAQSchema";
import CountUp from "@/components/CountUp";
import { vlogPosts } from "@/lib/videos";

const FAQSection = dynamic(() => import("@/components/FAQSection"));
const PortfolioGrid = dynamic(() => import("@/components/PortfolioGrid"));
import TestimonialRotator from "@/components/TestimonialRotator";
import LogoTicker from "@/components/LogoTicker";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("homeTitle"), description: t("homeDesc") };
}

/* ── data ─────────────────────────────────────────────────────────── */


// Anchors: always shown first — update based on GA4 data (highest click→contact conversion)
const portfolioAnchors = [
  {
    id: "8RbqUaMR9_c",
    titleHe: "להיות אשטרומיסט זה קודם כל אופי",
    titleEn: "Being an Ashtromist Is First of All Character",
    descHe: "קמפיין Employer Branding ארצי לאשטרום — אחת מהפקות הדגל שלנו. צילומים ב-20+ אתרים, עשרות עובדים non-actors, ועריכת 'פינג-פונג' קצבית שהפכה 'אשטרומיסט' מסיסמה לזהות.",
    descEn: "Nationwide Employer Branding campaign for Ashtrom — one of our flagship productions. Shoots across 20+ sites, dozens of non-actor employees, and rhythmic 'ping-pong' editing that turned 'Ashtromist' from a slogan into an identity.",
  },
  {
    id: "N4iNxvFGA34",
    titleHe: "IRON DRONE | Airobotics — הסרט שיצר שפה ויזואלית לחברה בורסאית",
    titleEn: "IRON DRONE | Airobotics — The Film That Created a Visual Language for a Public Company",
    descHe: "סרט ביטחוני-טכנולוגי שנבנה ללא Brand Book — ויצא כסטנדרט הוויזואלי הרשמי של ONDS. HUD/UI, Speed Ramps ו-Drone-to-Drone Tracking.",
    descEn: "A defense-tech film built without a Brand Book — and adopted as ONDS's official visual standard. HUD/UI, Speed Ramps, and Drone-to-Drone aerial tracking.",
  },
  {
    id: "JncBv6FbkRc",
    titleHe: "DRIDE: סרט Kickstarter שגייס מעל מיליון דולר",
    titleEn: "DRIDE: Kickstarter Film That Raised Over $1M",
    descHe: "אחד הקמפיינים הישראליים המוצלחים ביותר ב-Kickstarter. הסרט הפך מצלמת רכב חכמה לתנועה — ועזר לגייס מעל מיליון דולר.",
    descEn: "One of the most successful Israeli Kickstarter campaigns. The film turned a smart dashcam into a movement — raising over $1M in funding.",
  },
];

// Challenger pool: rotated randomly each session — 3 will be shown alongside anchors.
// GA4 event 'portfolio_video_click' shows which ones get clicked → promote winners to anchors.
const portfolioPool = [
  {
    id: "nFaOyZwj2PY",
    titleHe: "Buildots: Green Screen ו-Compositing אולפן",
    titleEn: "Buildots: Green Screen & Studio Compositing",
    descHe: "הפקת מסך ירוק מוקפדת עם שילוב UI של ממשק Buildots. שליטה מוחלטת על תאורה, זוויות וקומפוזיציה — ללא צורך באתרי בנייה פעילים.",
    descEn: "Meticulous green screen production with Buildots UI integration. Total control over lighting, angles and composition — without needing active construction sites.",
  },
  {
    id: "3mxQZMC9ZpI",
    titleHe: "Ludeo: Live-Action + אנימציה תלת-ממד לפלטפורמת גיימינג",
    titleEn: "Ludeo: Live-Action + 3D Animation for a Gaming Platform",
    descHe: "סרט קונספט לפלטפורמה שהופכת צפייה פסיבית לשחייה אינטראקטיבית. שילוב בין חדר גיימינג ריאליסטי ל'מעבדת Ludeo' תלת-ממדית.",
    descEn: "Concept film for a platform turning passive viewing into interactive play. Combines a realistic gaming room with a 3D 'Ludeo Lab' animated world.",
  },
  {
    id: "URDNpEwabCc",
    titleHe: "Airobotics Developer Program: הכרזה Host-Driven",
    titleEn: "Airobotics Developer Program: Host-Driven Announcement",
    descHe: "סרט הכרזה B2B לפלטפורמת רחפנים תעשייתיים — מנחה אחת מובילה ממשרדי הפיתוח למתקן הניסויים. VFX ו-UI integration אורגני.",
    descEn: "B2B announcement film for an industrial drone platform — one presenter guides from R&D offices to the test facility. Organic VFX and UI integration.",
  },
  {
    id: "yDJ5shdbFMw",
    titleHe: "BIG FASHION גלילות: קמפיין OOH מהאוויר",
    titleEn: "BIG FASHION Gililot: OOH Campaign from the Air",
    descHe: "תיעוד אווירי של פריסת שלטי חוצות ענק להשקת קניון. רחפן שמראה את מה שאף אחד לא רואה מהאדמה — את הנפח הכולל של הקמפיין.",
    descEn: "Aerial documentation of a massive billboard campaign for a mall launch. The drone shows what no one sees from the ground — the full volume of the campaign.",
  },
  {
    id: "ome2LtSiFWQ",
    titleHe: "אשטרום נכסים: סרט תדמית קורפורייט",
    titleEn: "Ashtrom Properties: Corporate Brand Film",
    descHe: "700K+ מ\"ר, 60 נכסים מניבים, פעילות בגרמניה ואנגליה. שילוב ארכיון היסטורי, רחפנים, CGI ולייב-אקשן בהפקה ארצית.",
    descEn: "700K+ sqm, 60 income-producing assets, operations in Germany and England. Combining historical archive, drones, CGI and live-action in a nationwide production.",
  },
  {
    id: "7vCj49e42Ow",
    titleHe: "Vertica: Onboarding רפואי עם CGI",
    titleEn: "Vertica: Medical Onboarding with CGI",
    descHe: "סרט הדרכה למוצר MedTech אינטימי — High-key אולפן, Blue Medical Mesh תלת-ממד, ו-Overhead Close-ups. ללא מבוכה, עם אמינות מקסימלית.",
    descEn: "Instructional film for an intimate MedTech product — High-key studio, 3D Blue Medical Mesh, Overhead and Extreme Close-ups. Zero embarrassment, maximum credibility.",
  },
  {
    id: "Fmd3fB5Pb-M",
    titleHe: "Connect 2 Innovate | Startup Nation Central",
    titleEn: "Connect 2 Innovate | Startup Nation Central",
    descHe: "דיפלומטיה דרך חדשנות — ישראל × מרוקו. מפעלי מים לצד שולחן אוכל מרוקאי. Kinetic Typography בכתב יד ופסקול אתני-מודרני.",
    descEn: "Innovation diplomacy — Israel × Morocco. Water plants alongside a Moroccan dinner table. Handwritten Kinetic Typography and an ethnic-modern soundtrack.",
  },
  {
    id: "d2Bckns6JTA",
    titleHe: "Intel Fab 28: תרגיל חירום קולנועי",
    titleEn: "Intel Fab 28: Cinematic Emergency Drill",
    descHe: "5 זירות מקבילות — Hazmat, שריפה, חילוץ מגובה, סריקת הריסות, מפקדה. FPV רחפן, גרפיקה טקטית וסאונד-דיזיין שמעצור הנשימה.",
    descEn: "5 simultaneous zones — Hazmat, fire, height rescue, debris search, command center. FPV drone, tactical graphics and breath-stopping sound design.",
  },
  {
    id: "coZNfEng59g",
    titleHe: "Intel Fab 28 קרית גת: תרגיל חירום 2025",
    titleEn: "Intel Fab 28 Kiryat Gat: Emergency Drill 2025",
    descHe: "4 זירות — שריפה, דליפת אמוניה, Rope Rescue מבור, Search & Rescue. מפת HUD עם לוויין. סיכום Emergency Manager בחפ\"ק.",
    descEn: "4 zones — fire, ammonia leak, Rope Rescue, Search & Rescue. Satellite HUD map. Emergency Manager summary at the command post.",
  },
  {
    id: "jAU89DS0oig",
    titleHe: "Intel IDC חיפה: תרגיל חירום 2025 — 3,000 עובדים",
    titleEn: "Intel IDC Haifa: Emergency Drill 2025 — 3,000 Employees",
    descHe: "6 זירות בו-זמניות, קמפוס ענק, מפת HUD דינמית 3D שמסמנת כל זירה בזמן אמת. ניהול אורכסטרלי של 6 צוותות צילום.",
    descEn: "6 simultaneous zones, vast campus, 3D dynamic HUD map marking each scene in real time. Orchestral management of 6 camera crews.",
  },
  {
    id: "mqVFjv-gPS4",
    titleHe: "Airobotics Optimus: הכרזת FAA Type Certification",
    titleEn: "Airobotics Optimus: FAA Type Certification Announcement",
    descHe: "מנכ\"ל Ondas Holdings (NASDAQ: ONDS) בלוקיישן לילי יוקרתי. תקריבי מאקרו של הזרוע הרובוטית. הכרזה שהפכה רגולציה יבשה לרגש.",
    descEn: "CEO of Ondas Holdings (NASDAQ: ONDS) at a premium night location. Robotic arm macro close-ups. An announcement that turned dry regulation into emotion.",
  },
  {
    id: "HKkqkHBSt7Q",
    titleHe: "Bright Data: AI Explainer",
    titleEn: "Bright Data: AI Explainer",
    descHe: "סרט Explainer לפלטפורמת ה-AI של Bright Data, חברת web data עולמית. טכנולוגיה מורכבת — בצורה ברורה ומשכנעת.",
    descEn: "An explainer film for Bright Data's AI platform, a global web data company. Complex technology — communicated clearly and compellingly.",
  },
  {
    id: "GFkN83F-DBU",
    titleHe: "אקרשטיין: 100 שנה",
    titleEn: "Akerstein: 100 Years",
    descHe: "סרט מחווה ל-100 שנות פעילות — שילוב ארכיון היסטורי עם צילום עכשווי. מורשת וחדשנות בסרט אחד.",
    descEn: "A tribute film marking 100 years — combining historical archive with contemporary cinematography. Legacy and innovation in one film.",
  },
  {
    id: "94W9SfZcx-Y",
    titleHe: "Levi Strauss: אירוע כוכבים",
    titleEn: "Levi Strauss: Celebrity Event",
    descHe: "תיעוד אירוע PR עם דודו ארז. הסרט הפך לתוכן ויראלי פנים-ארגוני — עובדים שיתפו אותו מרצון.",
    descEn: "PR event coverage with celebrity talent. The film became internal viral content — employees shared it voluntarily.",
  },
  {
    id: "rixmoZ4Y4Uk",
    titleHe: "Vertica: פרסומת לייפסטייל",
    titleEn: "Vertica: Lifestyle Ad",
    descHe: "פרסומת לייפסטייל לפרויקט הנדל\"ן היוקרתי. אסתטיקה, אור ותנועה — מוכרים חוויה, לא רק דירה.",
    descEn: "Lifestyle commercial for a luxury real estate project. Aesthetics, light and movement — selling an experience, not just an apartment.",
  },
];

const specialties = [
  { titleHe: "הייטק, ביטחוני ו-SaaS",   titleEn: "High-Tech, Defense & SaaS",       descHe: "סרטי B2B ל-Intel, Ondas Holdings (NASDAQ) ו-Palo Alto Networks — פיצ' שסוגר סבבי גיוס ו-Explainer שמנצח בדירקטוריונים.",      descEn: "B2B films for Intel, Ondas Holdings (NASDAQ) and Palo Alto Networks — pitch films that close rounds and explainers that win boardrooms.", href: "/services/hightech" },
  { titleHe: "נדל\"ן מסחרי ואדריכלות",  titleEn: "Real Estate & Architecture",       descHe: "מרחפן לסרט מותג: אשטרום נכסים, ג'י סיטי, BIG FASHION — מאתר הבנייה ועד אירוע פתיחת דגל.",                             descEn: "Drone to brand film: Ashtrom Properties, G City, BIG FASHION — from construction site to flagship opening day.",           href: "/services/realestate" },
  { titleHe: "Employer Branding וגיוס",  titleEn: "Employer Branding & Recruitment",  descHe: "הפקות ארציות ב-20+ אתרים — הפכנו 'אשטרומיסט' מסיסמה לזהות שאלפי עובדים חיים לפיה.",             descEn: "Nationwide productions across 20+ sites — turned 'Ashtromist' from a slogan into an identity thousands of employees live by.", href: "/services/corporate" },
  { titleHe: "הפקות וידאו AI",           titleEn: "AI Video Production",             descHe: "מסווג, לא קיים עדיין, או בלתי ניתן לצילום? Midjourney → Kling → Runway Gen-3 לחברות ביטחון וטכנולוגיה.",           descEn: "Classified, pre-built, or impossible to film? Midjourney → Kling → Runway Gen-3 pipeline for defense and tech companies.",                  href: "/services/ai" },
  { titleHe: "סרטי הדרכה ו-eLearning", titleEn: "Training & eLearning Videos",      descHe: "Onboarding רפואי לוורטיקה, תיעוד תרגיל חירום ל-Intel Fab 28 — תוכן הדרכה שעובדים אמיתיים צופים בו.", descEn: "Medical onboarding for Vertica MedTech, emergency drill documentation for Intel Fab 28 — training content real employees actually watch.", href: "/services/training" },
  { titleHe: "אנימציה ומוגרפיקה",      titleEn: "Animation & Motion Graphics",      descHe: "גרין סקרין לבילדוטס, עולמות גיימינג תלת-ממד ל-Ludeo — כשלייב אקשן לבד לא מספיק.",                       descEn: "Green screen compositing for Buildots, 3D gaming worlds for Ludeo — when live action alone isn't enough.",      href: "/services/animation" },
];

const whyItems: { statHe: string; statEn: string; titleHe: string; titleEn: string; descHe: string; descEn: string }[] = [
  {
    statHe: "בוטיק",  statEn: "Boutique",
    titleHe: "סטודיו, לא מפעל",
    titleEn: "Studio, Not a Factory",
    descHe: "תשומת לב מלאה לכל פרויקט — לא תהיה לקוח מספר 47.",
    descEn: "Full attention on every project — you won't be client number 47.",
  },
  {
    statHe: "A→Z",  statEn: "A→Z",
    titleHe: "ליווי אישי מלא",
    titleEn: "Full Personal Guidance",
    descHe: "מהברייף הראשון ועד הסרט המוגמר — איתך בכל שלב.",
    descEn: "From first brief to final delivery — with you every step of the way.",
  },
  {
    statHe: "TOP",  statEn: "TOP",
    titleHe: "מטובי המקצוענים בישראל",
    titleEn: "Top Professionals in Israel",
    descHe: "צוות בכיר של במאים, עורכים ואנשי מותג.",
    descEn: "Senior team of directors, editors and brand strategists.",
  },
  {
    statHe: "B2B",  statEn: "B2B",
    titleHe: "מבינים את השוק שלך",
    titleEn: "We Speak Your Market",
    descHe: "מדברים את שפת ההייטק, הנדל\"ן והתאגידים.",
    descEn: "We speak high-tech, real estate and corporate — fluently.",
  },
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
                  ? "סטודיו בוטיק B2B: הייטק, ביטחוני, נדל\"ן מסחרי ו-AI. לקוחות: Intel, Ondas Holdings (NASDAQ), Palo Alto Networks ועוד."
                  : "B2B boutique studio: high-tech, defense, commercial real estate and AI. Clients: Intel, Ondas Holdings (NASDAQ), Palo Alto Networks, and more."}
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
                  preload="auto"
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
                    <span className="text-[#FFD000] text-xs tracking-tight bg-[#111] px-1 rounded">★★★★★</span>
                  </div>
                  <p className="text-[10px] text-[#717171] leading-none mt-0.5">{isHe ? "100+ פרויקטים" : "100+ projects"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS — infinite marquee ────────────────────────────── */}
      <LogoTicker isHe={isHe} />

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
                      <CountUp to={s.to} suffix={s.suffix} suffixClassName="text-[#111]" />
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
                  <p className="inline-block text-2xl font-black text-[#FFD000] bg-[#111] px-3 py-1 rounded-lg mb-1 leading-none">{isHe ? item.statHe : item.statEn}</p>
                  <h3 className="font-bold text-[#111] text-[14px] mb-1">{isHe ? item.titleHe : item.titleEn}</h3>
                  <p className="text-[12px] text-[#666] leading-snug">{isHe ? item.descHe : item.descEn}</p>
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
          <PortfolioGrid anchors={portfolioAnchors} pool={portfolioPool} locale={locale} />
        </div>
      </section>

      {/* ── BLOG PREVIEW ─────────────────────────────────────────── */}
      {(() => {
        const recentPosts = [...vlogPosts]
          .filter(p => p.coverImage || p.relatedYoutubeId)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 3);
        return (
          <section className="bg-[#111] py-20 px-6">
            <div className="max-w-[var(--container)] mx-auto">
              <div className="flex flex-wrap items-center justify-between gap-y-3 mb-10 reveal">
                <div>
                  <p className="inline-flex items-center gap-2 text-xs font-bold text-[#FFD000] uppercase tracking-widest mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD000] inline-block shrink-0" />
                    {isHe ? "ישר מהסטודיו" : "From the studio"}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-[-0.01em]">
                    {isHe ? "תובנות והפקות אחרונות" : "Latest insights & productions"}
                  </h2>
                </div>
                <Link href="/vlog" className="text-sm font-bold text-[#FFD000] underline underline-offset-4 hover:no-underline shrink-0">
                  {isHe ? "כל הכתבות ←" : "All articles →"}
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/vlog/${post.id}`}
                    className="group bg-white/5 border border-white/10 rounded-[14px] overflow-hidden hover:border-[#FFD000]/50 transition-all duration-200 reveal"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.coverImage ?? `https://img.youtube.com/vi/${post.relatedYoutubeId}/mqdefault.jpg`}
                        alt={isHe ? post.titleHe : post.titleEn}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40" />
                      <div className="absolute top-3 end-3 bg-[#FFD000] text-[#111] text-[10px] font-bold px-2 py-1 rounded-full">
                        {post.readingTime} {isHe ? "דק׳" : "min"}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-white font-bold text-[14px] leading-snug mb-2 group-hover:text-[#FFD000] transition-colors duration-200 line-clamp-2">
                        {isHe ? post.titleHe : post.titleEn}
                      </h3>
                      <p className="text-[#888] text-xs leading-relaxed line-clamp-2">
                        {isHe ? post.excerptHe : post.excerptEn}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* ── SPECIALTIES ──────────────────────────────────────────── */}
      <section id="specialties" className="bg-[#f4f4f4] py-20 px-6">
        <div className="max-w-[var(--container)] mx-auto">
          <p className={`${sectionLabel} justify-center w-full flex reveal`}>{yellowDot}{isHe ? "תחומי התמחות" : "Specialties"}</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#111] text-center tracking-[-0.01em] mb-12 reveal">
            {isHe ? "אילו סרטי תדמית והפקות וידאו אנחנו מפיקים?" : "What types of corporate videos and brand films do we produce?"}
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
          <TestimonialRotator isHe={isHe} />
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-[#f4f4f4] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className={`${sectionLabel} justify-center w-full flex reveal`}>{yellowDot}{isHe ? "איך זה עובד?" : "How it works"}</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#111] text-center tracking-[-0.01em] mb-3 reveal">
            {isHe ? "איך מפיקים סרט תדמית איתנו?" : "How does video production work with us?"}
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

          {/* Stats */}
          <div className="flex justify-center flex-wrap gap-12 mt-12 mb-10 stagger">
            {[
              { to: 20,  suffix: "+", labelHe: "שנות ניסיון",      labelEn: "Years Experience" },
              { to: 100, suffix: "+", labelHe: "פרויקטים הושלמו",  labelEn: "Projects Completed" },
              { to: 4.9, suffix: "★", labelHe: "דירוג ממוצע",      labelEn: "Average Rating" },
            ].map((s) => (
              <div key={s.labelEn} className="text-center reveal-scale">
                <p className="text-4xl font-black text-[#111]">
                  <CountUp to={s.to} suffix={s.suffix} suffixClassName="text-[#111]" />
                </p>
                <p className="text-xs text-[#717171] mt-1 font-medium">{isHe ? s.labelHe : s.labelEn}</p>
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
