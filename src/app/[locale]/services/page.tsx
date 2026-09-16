import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { buildAlternates } from "@/app/[locale]/layout";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("servicesTitle"),
    description: t("servicesDesc"),
    alternates: buildAlternates(locale, "services"),
    openGraph: { title: t("servicesTitle"), description: t("servicesDesc") },
    twitter: { card: "summary_large_image", title: t("servicesTitle"), description: t("servicesDesc") },
  };
}

const niches = [
  { href: "/services/hightech",   labelHe: "הייטק, ביטחוני ו-SaaS",    labelEn: "High-Tech, Defense & SaaS" },
  { href: "/services/realestate", labelHe: "נדל\"ן מסחרי ואדריכלות",    labelEn: "Real Estate & Architecture" },
  { href: "/services/corporate",  labelHe: "Employer Branding וגיוס",   labelEn: "Employer Branding & Recruitment" },
  { href: "/services/ai",         labelHe: "הפקות וידאו AI",            labelEn: "AI Video Production" },
  { href: "/services/training",   labelHe: "סרטי הדרכה ו-eLearning",   labelEn: "Training & eLearning Videos" },
  { href: "/services/animation",  labelHe: "אנימציה ומוגרפיקה",         labelEn: "Animation & Motion Graphics" },
  { href: "/services/defense",    labelHe: "ביטחוני וטכנולוגיה צבאית", labelEn: "Defense & Military Tech" },
];

const phases = [
  {
    phase: "pre",
    labelHe: "טרום-הפקה",
    labelEn: "Pre-Production",
    services: [
      {
        id: "creative",
        nameHe: "קריאטיב",
        nameEn: "Creative",
        descHe: "פיתוח הרעיון המרכזי, קונספט ויזואלי, ועולם תוכן שמתאים למותג ולמטרה.",
        descEn: "Developing the core idea, visual concept, and content world that fits the brand and goal.",
      },
      {
        id: "script",
        nameHe: "כתיבת תסריט",
        nameEn: "Scriptwriting",
        descHe: "תסריט מלא: מבנה נרטיבי, דיאלוג, VO ומסרים שמניעים לפעולה.",
        descEn: "Full script: narrative structure, dialogue, VO, and messages that drive action.",
      },
      {
        id: "research",
        nameHe: "תחקיר",
        nameEn: "Research",
        descHe: "הבנה עמוקה של הענף, המתחרים והקהל לפני שנוגעים במצלמה.",
        descEn: "Deep understanding of the industry, competitors, and audience before touching a camera.",
      },
      {
        id: "storyboard",
        nameHe: "סטוריבורד",
        nameEn: "Storyboard",
        descHe: "תרשים חזותי פריים-by-פריים שמאפשר לאשר כל זווית ורגע לפני יום הצילום.",
        descEn: "Frame-by-frame visual blueprint that lets you approve every angle and moment before filming day.",
      },
      {
        id: "production-consulting",
        nameHe: "ייעוץ הפקה",
        nameEn: "Production Consulting",
        descHe: "תכנון לוגיסטי, תקציב, לוקיישנים, צוות ולוח זמנים, לפני שמשהו יוצא לדרך.",
        descEn: "Logistical planning, budget, locations, crew, and schedule, before anything goes out the door.",
      },
      {
        id: "creative-consulting",
        nameHe: "ייעוץ קריאטיב",
        nameEn: "Creative Consulting",
        descHe: "גישה אסטרטגית: איך הסרט מתחבר לקמפיין, לאתר ולמסרים הכוללים של הלקוח.",
        descEn: "Strategic approach: how the film connects to the campaign, website, and client's overall messaging.",
      },
    ],
  },
  {
    phase: "production",
    labelHe: "הפקה",
    labelEn: "Production",
    services: [
      {
        id: "filming",
        nameHe: "הפקה",
        nameEn: "Production / Filming",
        descHe: "ימי צילום מלאים: במאי, צלם, תאורה, סאונד וניהול לוקיישן.",
        descEn: "Full filming days: director, DP, lighting, sound, and location management.",
      },
      {
        id: "ai-generation",
        nameHe: "ג׳נרציית וידאו AI",
        nameEn: "AI Video Generation",
        descHe: "ייצור ויזואלים עם Kling, Runway Gen-3 Alpha ו-Midjourney: עולמות שלא ניתן לצלם.",
        descEn: "Creating visuals with Kling, Runway Gen-3 Alpha, and Midjourney: worlds you can't film.",
      },
      {
        id: "client-management",
        nameHe: "ניהול לקוח",
        nameEn: "Client Management",
        descHe: "הסטודיו מוביל את הפרויקט מקצה לקצה: נקודת קשר אחת, אחריות מלאה, ללא שרשרת של ביניים.",
        descEn: "The studio leads the project end to end: one point of contact, full accountability, no middlemen.",
      },
    ],
  },
  {
    phase: "post",
    labelHe: "פוסט-פרודקשן",
    labelEn: "Post-Production",
    services: [
      {
        id: "offline-editing",
        nameHe: "עריכת אוף-ליין",
        nameEn: "Offline Editing",
        descHe: "בחירת הטייקים הטובים, בניית המבנה הנרטיבי, ומיפוי הסרט מחומרי הגלם.",
        descEn: "Selecting the best takes, building the narrative structure, and mapping the film from raw footage.",
      },
      {
        id: "online-editing",
        nameHe: "עריכת און-ליין",
        nameEn: "Online Editing",
        descHe: "גרסה סופית: תיקון צבעים בסיסי, גרפיקות ופורמטים לכל פלטפורמה.",
        descEn: "Final version: basic color correction, graphics, and formats for every platform.",
      },
      {
        id: "color-grading",
        nameHe: "צבע גריידינג",
        nameEn: "Color Grading",
        descHe: "עיצוב הלוק הסופי: טון, מצב רוח ועקביות ויזואלית על פני כל הסרט.",
        descEn: "Designing the final look: tone, mood, and visual consistency throughout the film.",
      },
      {
        id: "after-effects",
        nameHe: "אפטר אפקטס",
        nameEn: "After Effects / VFX",
        descHe: "אנימציה, ויזואל אפקטס, כותרות ואלמנטים גרפיים מותאמים.",
        descEn: "Animation, visual effects, titles, and custom graphic elements.",
      },
      {
        id: "graphic-design",
        nameHe: "עיצוב גרפי ושפה מיתוגית",
        nameEn: "Graphic Design & Brand Language",
        descHe: "עיצוב שפה ויזואלית על פי Brand Book: מונטז', לוגו, כתוביות ויזואליות.",
        descEn: "Visual language design per Brand Book: montage, logo, visual subtitles.",
      },
      {
        id: "mix-sound",
        nameHe: "מיקס וסאונד אפקטס",
        nameEn: "Mix & Sound Effects",
        descHe: "מיקס שמע, נרמול לאורד-לאודנס, אפקטים ומוזיקה מורשית.",
        descEn: "Audio mix, loudness normalization, effects, and licensed music.",
      },
    ],
  },
  {
    phase: "delivery",
    labelHe: "מסירה וייעוץ",
    labelEn: "Delivery & Consulting",
    services: [
      {
        id: "raw-transfer",
        nameHe: "העברת חומרי גלם",
        nameEn: "Raw Footage Transfer",
        descHe: "מסירת כל חומרי הגלם במבנה מסודר לאחסון ארכיוני.",
        descEn: "Delivery of all raw footage in an organized structure for archival storage.",
      },
    ],
  },
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isHe = locale === "he";

  return (
    <main className="min-h-screen">
      <BreadcrumbSchema locale={locale} crumbs={[{ name: isHe ? "שירותים" : "Services", path: "/services" }]} />
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #FFD000 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6" style={{ animation: "fadeInUp .45s ease both" }}>
            <span className="text-xs font-semibold tracking-[0.3em] text-[#FFD000] uppercase border border-[#FFD000]/30 px-4 py-2 rounded-full">
              {isHe ? "שירותים" : "Services"}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#111] mb-6 leading-tight" style={{ animation: "fadeInUp .5s .08s ease both" }}>
            {isHe ? "מה אנחנו עושים" : "What We Do"}
          </h1>
          <p className="text-xl text-[#555] max-w-2xl leading-relaxed" style={{ animation: "fadeInUp .5s .16s ease both" }}>
            {isHe
              ? "הפקת וידאו היא תהליך. כל שלב בו דורש מומחיות, ניסיון ועין בימויית. אנחנו נמצאים איתכם מהרגע הראשון ועד המסירה הסופית."
              : "Video production is a process. Every stage requires expertise, experience, and a directorial eye. We're with you from the first moment to final delivery."}
          </p>
        </div>
      </section>

      {/* Niche service pages */}
      <section className="pb-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-[#717171] uppercase tracking-widest mb-5">
            {isHe ? "לפי תחום" : "Browse by Specialty"}
          </h2>
          <div className="flex flex-wrap gap-3 stagger">
            {niches.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="px-5 py-2.5 border border-[#e5e5e5] rounded-full text-sm font-semibold text-[#333] hover:border-[#FFD000] hover:text-[#111] transition-colors duration-150 reveal"
              >
                {isHe ? n.labelHe : n.labelEn}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          {phases.map((phase, phaseIndex) => (
            <div key={phase.phase}>
              {/* Phase header */}
              <div className="flex items-center gap-4 mb-10">
                <span className="text-[#FFD000] font-mono text-sm tracking-widest">
                  0{phaseIndex + 1}
                </span>
                <div className="h-px bg-gray-200 flex-1" />
                <h2 className="text-2xl font-black text-[#111] uppercase tracking-wide">
                  {isHe ? phase.labelHe : phase.labelEn}
                </h2>
                <div className="h-px bg-gray-200 flex-1" />
              </div>

              {/* Services grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200 stagger">
                {phase.services.map((service) => (
                  <div key={service.id} className="bg-white p-7 hover:bg-[#f9f9f9] card-lift transition-colors reveal">
                    <h3 className="text-lg font-bold text-[#111] mb-3">
                      {isHe ? service.nameHe : service.nameEn}
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed">
                      {isHe ? service.descHe : service.descEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-px bg-gray-200 mb-16" />
          <p className="text-2xl md:text-3xl font-black text-[#111] mb-4">
            {isHe ? "מוכנים להתחיל?" : "Ready to Start?"}
          </p>
          <p className="text-[#555] mb-10 text-lg">
            {isHe
              ? "ספרו לנו על הפרויקט ונבנה יחד את התהליך המתאים."
              : "Tell us about your project and we'll build the right process together."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#FFD000] text-[#111] font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-[#f0c400] transition-colors"
            >
              {isHe ? "צור קשר" : "Contact Us"}
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border border-gray-200 text-[#111]/70 font-bold text-sm tracking-widest uppercase rounded-sm hover:border-[#FFD000]/50 hover:text-[#FFD000] transition-colors"
            >
              {isHe ? "תיק עבודות" : "Portfolio"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
