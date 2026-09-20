import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildAlternates } from "@/app/[locale]/layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isHe = locale === "he";
  const title = isHe
    ? "וידאו ביטחוני | סרטי Pitch לתעשיית הרחפנים והביטחון | videoshop"
    : "Defense Tech Video Production | Drone & Autonomy Pitch Films | videoshop";
  const desc = isHe
    ? "סרטי Investor Pitch לתעשיית הביטחון, הרחפנים והאוטונומציה. ויזואליזציות AI פוטוריאליסטיות לגיוס הון בינלאומי. ניסיון עם NDA ורגישות מלאה."
    : "Investor pitch films for the defense industry, drones, and autonomy. Photorealistic AI visualizations for international fundraising. Full NDA compliance and confidentiality.";
  return {
    title,
    description: desc,
    keywords: isHe
      ? ["וידאו ביטחוני", "סרט pitch לתעשיית הביטחון", "הפקת וידאו רחפנים", "ויזואליזציה AI ביטחוני", "סרט גיוס הון בינלאומי ביטחוני", "dual-use tech video"]
      : ["defense video production", "defense investor pitch film", "drone visualization", "autonomy tech pitch", "AI defense visualization", "dual-use tech film"],
    alternates: buildAlternates(locale, "services/defense"),
    openGraph: { title, description: desc },
    twitter: { card: "summary_large_image", title, description: desc },
  };
}

export default async function DefensePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isHe = locale === "he";

  const content = {
    he: {
      h1: "ביטחוני, טכנולוגי ו-AI",
      subtitle: "סרטי פיצ' מורכבים לתעשיית הביטחון, הרחפנים והאוטונומציה, עם ויזואליזציות פוטוריאליסטיות שמגייסות הון בינלאומי.",
      body1: "תעשיית הביטחון והטכנולוגיה הביטחונית דורשת רמת סודיות, דיוק ויזואלי ומשקל נרטיבי שלא כל סטודיו מסוגל לסיים. פיתחנו מתודולוגיה ייחודית לסרטי פיצ' בתחום זה, שמשלבת סטוריבורד קולנועי עם ויזואליזציות מבוססות AI, כולל Midjourney, Kling ו-Runway Gen-3 Alpha, לפרויקטים כמו \"Iron Bullet\" עבור Airobotics/Ondas Group.",
      body2: "הסרטים שאנחנו מפיקים לתחום הביטחוני נועדו לדלת אחת: חדרי הדירקטוריון וועדות ה-DHS של ממשלות ה-US. הם חייבים להיות מדויקים טכנית, מרשימים ויזואלית ומשכנעים עסקית, בבת אחת.",
      features: [
        "סרטי Investor Pitch לתחום הביטחוני",
        "ויזואליזציות רחפנים פוטוריאליסטיות",
        "AI Storyboarding עם Midjourney",
        "Kling + Runway Gen-3 Alpha",
        "סרטי B2B לגיוס הון בינלאומי",
        "הפקות Dual-Use Tech",
        "תסריטים טכניים ומורכבים",
        "עבודה עם NDAs ורגישות מלאה",
      ],
      cta: "מוכנים ליצור את הפיצ' שלכם?",
    },
    en: {
      h1: "Defense, Tech & AI",
      subtitle: "Complex pitch films for the defense, drone, and autonomy industry, with photorealistic AI visualizations that raise international capital.",
      body1: "The defense and defense-tech industry requires a level of confidentiality, visual precision, and narrative weight that not every studio can deliver. We've developed a unique methodology for pitch films in this field, combining cinematic storyboarding with AI-based visualizations, including Midjourney, Kling, and Runway Gen-3 Alpha, for projects like 'Iron Bullet' for Airobotics/Ondas Group.",
      body2: "The films we produce for the defense sector are aimed at one door: boardrooms and US government DHS committees. They must be technically precise, visually impressive, and business-convincing, all at once.",
      features: [
        "Defense Sector Investor Pitch Films",
        "Photorealistic Drone Visualizations",
        "AI Storyboarding with Midjourney",
        "Kling + Runway Gen-3 Alpha",
        "B2B Films for International Fundraising",
        "Dual-Use Tech Productions",
        "Complex Technical Scripts",
        "Full NDA & Confidentiality Compliance",
      ],
      cta: "Ready to create your pitch?",
    },
  };

  const c = isHe ? content.he : content.en;

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        crumbs={[
          { name: isHe ? "שירותים" : "Services", path: "/services" },
          { name: isHe ? "ביטחוני וטכנולוגי" : "Defense & Tech", path: "/services/defense" },
        ]}
      />
      <ServicePage
        h1={c.h1}
        subtitle={c.subtitle}
        body1={c.body1}
        body2={c.body2}
        features={c.features}
        ctaText={c.cta}
        badge="Defense & AI Tech"
        locale={locale}
        relatedVideos={[
          { id: "N4iNxvFGA34", titleHe: "Iron Drone Airobotics — תעשיית הרחפנים", titleEn: "Iron Drone Airobotics — Drone Industry" },
          { id: "coZNfEng59g", titleHe: "Intel Fab 28 קרית גת — תרגיל חירום 2025", titleEn: "Intel Fab 28 Kiryat Gat — Emergency Drill 2025" },
          { id: "mqVFjv-gPS4", titleHe: "Airobotics Optimus — FAA Type Certification", titleEn: "Airobotics Optimus — FAA Type Certification" },
        ]}
        relatedPosts={[
          { id: "video-to-brand-identity", titleHe: "מהוידאו לזהות מותג — Iron Drone", titleEn: "From Video to Brand Identity — Iron Drone" },
          { id: "intel-fab28-kgat-blog", titleHe: "Intel Fab 28 קרית גת — לצלם אקשן בזמן אמת", titleEn: "Intel Fab 28 Kiryat Gat — Filming Action in Real Time" },
          { id: "airobotics-optimus-faa-blog", titleHe: "Airobotics Optimus — מאחורי הקלעים של סרטון ההכרזה", titleEn: "Airobotics Optimus — Behind the Announcement Film" },
        ]}
        faqItems={isHe ? [
          { q: "האם אפשר לצלם ציוד ביטחוני מסווג?", a: "כן — אנחנו עובדים עם NDAs מלאות ומכירים את מגבלות הצילום של תעשיית הביטחון. כשהצילום הישיר בלתי אפשרי, אנחנו בונים ויזואליזציות AI פוטוריאליסטיות שמייצגות את הציוד מבלי לחשוף מידע רגיש." },
          { q: "למה חברות ביטחוניות צריכות סרטי Investor Pitch?", a: "חברות Dual-Use וביטחון-טק מגייסות הון ממשקיעים מוסדיים, קרנות ממשלתיות ופנטגון בארה\"ב. סרט פיצ' מקצועי מוכיח רצינות, מסביר טכנולוגיה מורכבת בצורה נגישה ומייצר אמון — בדיוק מה שצוות הסבר מילולי לבדו לא תמיד משיג." },
          { q: "האם אתם עובדים עם חברות Dual-Use (שימוש אזרחי-ביטחוני)?", a: "כן — זה אחד התחומים המרכזיים שלנו. עבדנו עם Airobotics/Ondas Holdings (NASDAQ: ONDS) על הפקות שמשרתות גם שוק הרחפנים האזרחי וגם משרד ההגנה האמריקאי." },
        ] : [
          { q: "Can classified defense equipment be filmed?", a: "Yes — we work with full NDAs and understand the filming restrictions of the defense industry. When direct filming is impossible, we build photorealistic AI visualizations that represent the equipment without exposing sensitive information." },
          { q: "Why do defense companies need Investor Pitch films?", a: "Dual-use and defense-tech companies raise capital from institutional investors, government funds, and the US Pentagon. A professional pitch film proves seriousness, explains complex technology in an accessible way, and builds trust — exactly what verbal explanation alone doesn't always achieve." },
          { q: "Do you work with Dual-Use (civilian-defense) companies?", a: "Yes — this is one of our core areas. We worked with Airobotics/Ondas Holdings (NASDAQ: ONDS) on productions that serve both the civilian drone market and the US Department of Defense." },
        ]}
      />
    </>
  );
}
