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
  return { title: t("servicesTitle"), description: t("servicesDesc") };
}

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
        descHe: "תסריט מלא — מבנה נרטיבי, דיאלוג, VO ומסרים שמניעים לפעולה.",
        descEn: "Full script — narrative structure, dialogue, VO, and messages that drive action.",
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
        descHe: "תכנון לוגיסטי, תקציב, לוקיישנים, צוות ולוח זמנים — לפני שמשהו יוצא לדרך.",
        descEn: "Logistical planning, budget, locations, crew, and schedule — before anything goes out the door.",
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
        descHe: "ימי צילום מלאים — במאי, צלם, תאורה, סאונד וניהול לוקיישן.",
        descEn: "Full filming days — director, DP, lighting, sound, and location management.",
      },
      {
        id: "ai-generation",
        nameHe: "ג׳נרציית וידאו AI",
        nameEn: "AI Video Generation",
        descHe: "ייצור ויזואלים עם Kling, Runway Gen-3 Alpha ו-Midjourney — עולמות שלא ניתן לצלם.",
        descEn: "Creating visuals with Kling, Runway Gen-3 Alpha, and Midjourney — worlds you can't film.",
      },
      {
        id: "client-management",
        nameHe: "ניהול לקוח",
        nameEn: "Client Management",
        descHe: "הסטודיו מוביל את הפרויקט מקצה לקצה — נקודת קשר אחת, אחריות מלאה, ללא שרשרת של ביניים.",
        descEn: "The studio leads the project end to end — one point of contact, full accountability, no middlemen.",
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
        descHe: "גרסה סופית — תיקון צבעים בסיסי, גרפיקות ופורמטים לכל פלטפורמה.",
        descEn: "Final version — basic color correction, graphics, and formats for every platform.",
      },
      {
        id: "color-grading",
        nameHe: "צבע גריידינג",
        nameEn: "Color Grading",
        descHe: "עיצוב הלוק הסופי — טון, מצב רוח ועקביות ויזואלית על פני כל הסרט.",
        descEn: "Designing the final look — tone, mood, and visual consistency throughout the film.",
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
        descHe: "עיצוב שפה ויזואלית על פי Brand Book — מונטז', לוגו, כתוביות ויזואליות.",
        descEn: "Visual language design per Brand Book — montage, logo, visual subtitles.",
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
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#c8a96e] uppercase border border-[#c8a96e]/30 px-4 py-2 rounded-full">
              {isHe ? "שירותים" : "Services"}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#f5f5f0] mb-6 leading-tight">
            {isHe ? "מה אנחנו עושים" : "What We Do"}
          </h1>
          <p className="text-xl text-[#6b6b6b] max-w-2xl leading-relaxed">
            {isHe
              ? "הפקת וידאו היא תהליך. כל שלב בו דורש מומחיות, ניסיון ועין בימויית. אנחנו נמצאים איתכם מהרגע הראשון ועד המסירה הסופית."
              : "Video production is a process. Every stage requires expertise, experience, and a directorial eye. We're with you from the first moment to final delivery."}
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          {phases.map((phase, phaseIndex) => (
            <div key={phase.phase}>
              {/* Phase header */}
              <div className="flex items-center gap-4 mb-10">
                <span className="text-[#c8a96e] font-mono text-sm tracking-widest">
                  0{phaseIndex + 1}
                </span>
                <div className="h-px bg-[#1e1e1e] flex-1" />
                <h2 className="text-2xl font-black text-[#f5f5f0] uppercase tracking-wide">
                  {isHe ? phase.labelHe : phase.labelEn}
                </h2>
                <div className="h-px bg-[#1e1e1e] flex-1" />
              </div>

              {/* Services grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1e1e1e]">
                {phase.services.map((service) => (
                  <div key={service.id} className="bg-[#0a0a0a] p-7 hover:bg-[#111] transition-colors">
                    <h3 className="text-lg font-bold text-[#f5f5f0] mb-3">
                      {isHe ? service.nameHe : service.nameEn}
                    </h3>
                    <p className="text-sm text-[#6b6b6b] leading-relaxed">
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
          <div className="h-px bg-[#1e1e1e] mb-16" />
          <p className="text-2xl md:text-3xl font-black text-[#f5f5f0] mb-4">
            {isHe ? "מוכנים להתחיל?" : "Ready to Start?"}
          </p>
          <p className="text-[#6b6b6b] mb-10 text-lg">
            {isHe
              ? "ספרו לנו על הפרויקט ונבנה יחד את התהליך המתאים."
              : "Tell us about your project and we'll build the right process together."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#c8a96e] text-[#0a0a0a] font-bold text-sm tracking-widest uppercase rounded-sm hover:bg-[#f5f5f0] transition-colors"
            >
              {isHe ? "צור קשר" : "Contact Us"}
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border border-[#1e1e1e] text-[#f5f5f0]/70 font-bold text-sm tracking-widest uppercase rounded-sm hover:border-[#c8a96e]/50 hover:text-[#c8a96e] transition-colors"
            >
              {isHe ? "תיק עבודות" : "Portfolio"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
