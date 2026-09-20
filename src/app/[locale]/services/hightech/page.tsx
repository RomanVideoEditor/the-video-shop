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
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("servicesHightechTitle");
  const desc = t("servicesHightechDesc");
  const isHe = locale === "he";
  return {
    title,
    description: desc,
    keywords: isHe
      ? ["סרט תדמית לסטארטאפ", "הפקת וידאו הייטק", "investor pitch film", "סרט גיוס הון", "demo video", "הפקת וידאו B2B ישראל", "סרט תדמית לחברה"]
      : ["startup video production", "investor pitch film", "high-tech brand film", "B2B video Israel", "demo video production", "fundraising video"],
    alternates: buildAlternates(locale, "services/hightech"),
    openGraph: { title, description: desc },
    twitter: { card: "summary_large_image", title, description: desc },
  };
}

export default async function HightechPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.hightech" });
  const isHe = locale === "he";

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        crumbs={[
          { name: isHe ? "שירותים" : "Services", path: "/services" },
          { name: isHe ? "היי-טק וסטארטאפים" : "High-Tech & Startups", path: "/services/hightech" },
        ]}
      />
      <ServicePage
        h1={t("h1")}
        subtitle={t("subtitle")}
        body1={t("body1")}
        body2={t("body2")}
        features={t.raw("features") as string[]}
        ctaText={isHe ? "מוכנים ליצור את סרט הHigh-Tech שלכם?" : "Ready to create your High-Tech film?"}
        badge="High-Tech & Startups"
        locale={locale}
        relatedVideos={[
          { id: "URDNpEwabCc", titleHe: "Airobotics — Developer Program", titleEn: "Airobotics — Developer Program" },
          { id: "nFaOyZwj2PY", titleHe: "Buildots — טכנולוגיית בנייה חכמה", titleEn: "Buildots — Smart Construction Tech" },
          { id: "Fmd3fB5Pb-M", titleHe: "Startup Nation — Connect2Innovate", titleEn: "Startup Nation — Connect2Innovate" },
        ]}
        relatedPosts={[
          { id: "airobotics-developer-program-blog", titleHe: "כשהאנימציה מסבירה את הטכנולוגיה — Airobotics", titleEn: "When Animation Explains the Tech — Airobotics" },
          { id: "buildots-green-screen-blog", titleHe: "איך מפיקים גרין סקרין לסרט B2B", titleEn: "How to Produce Green Screen for a B2B Film" },
          { id: "startup-nation-connect2innovate-blog", titleHe: "Startup Nation Connect2Innovate — אירוע לאומי בפריים", titleEn: "Startup Nation Connect2Innovate — National Event on Film" },
        ]}
        faqItems={isHe ? [
          { q: "כמה עולה סרט תדמית לחברת הייטק?", a: "סרט תדמית לסטארטאפ או חברת הייטק מתחיל בעשרות אלפי שקלים ועולה בהתאם למורכבות. הפקות עם אנימציה, VFX או AI עשויות להגיע ליותר. אנחנו מתמחרים לפי הסקופ — שיחת הכרה ראשונה היא תמיד חינמית." },
          { q: "מה ההבדל בין Investor Pitch Video לסרט תדמית?", a: "Investor Pitch Video מיועד לשכנע משקיעים — הוא מסביר את הבעיה, הפתרון, ה-traction ולמה עכשיו. סרט תדמית בונה מותג לאורך זמן. לרוב מומלץ להפיק את שניהם בהפקה אחת כדי לחסוך עלויות." },
          { q: "האם אתם עובדים עם חברות לפני גיוס הון?", a: "כן — זה אחד הזמנים הכי קריטיים לסרט. חברות שמגיעות לדמו-דיי עם סרט מקצועי סוגרות יותר. עבדנו עם סטארטאפים מ-seed ועד Series B." },
          { q: "כמה זמן לוקח לייצר סרט לחברת הייטק?", a: "3-5 שבועות מקיק-אוף עד סרט סופי: שבוע לכתיבה וסטוריבורד, 1-2 ימי צילום, ו-2-3 שבועות עריכה ופוסט-פרודקשן. פרויקטי אקספרס ב-10-14 יום אפשריים לפי בקשה." },
          { q: "האם ניתן לצלם באנגלית לשוק הבינלאומי?", a: "בהחלט. כל הפרויקטים שלנו מסופקים בעברית ובאנגלית לפי הצורך. עבדנו עם חברות שמגיעות ל-US investors, EU VCs וכנסים בינלאומיים." },
        ] : [
          { q: "How much does a high-tech brand film cost?", a: "A startup or high-tech brand film starts in the range of tens of thousands of shekels and scales with complexity. Productions with animation, VFX, or AI may cost more. We price by scope — the initial call is always free." },
          { q: "What is the difference between an Investor Pitch Video and a brand film?", a: "An Investor Pitch Video is designed to convince investors — it explains the problem, solution, traction, and why now. A brand film builds the brand over time. We often recommend producing both in a single production to reduce costs." },
          { q: "Do you work with pre-fundraising companies?", a: "Yes — this is one of the most critical times for a film. Companies that arrive at Demo Day with a professional film close more deals. We have worked with startups from seed through Series B." },
          { q: "How long does it take to produce a high-tech film?", a: "3-5 weeks from kickoff to final film: one week for script and storyboard, 1-2 filming days, and 2-3 weeks editing and post-production. Express projects in 10-14 days are possible on request." },
          { q: "Can you produce the film in English for the international market?", a: "Absolutely. All our projects are delivered in Hebrew and English as needed. We work with companies targeting US investors, EU VCs, and international conferences." },
        ]}
      />
    </>
  );
}
