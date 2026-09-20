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
  const title = t("servicesAITitle");
  const desc = t("servicesAIDesc");
  const isHe = locale === "he";
  return {
    title,
    description: desc,
    keywords: isHe
      ? ["הפקת וידאו AI", "וידאו AI פוטוריאליסטי", "Kling AI וידאו", "Runway Gen-3 ישראל", "סרט AI לסטארטאפ", "ויזואליזציה AI ביטחוני", "סרט פיצ' AI"]
      : ["AI video production Israel", "photorealistic AI film", "Kling video generation", "Runway Gen-3 production", "AI pitch film", "defense AI visualization"],
    alternates: buildAlternates(locale, "services/ai"),
    openGraph: { title, description: desc },
    twitter: { card: "summary_large_image", title, description: desc },
  };
}

export default async function AIPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.ai" });
  const isHe = locale === "he";

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        crumbs={[
          { name: isHe ? "שירותים" : "Services", path: "/services" },
          { name: isHe ? "הפקת AI וידאו" : "AI Video Production", path: "/services/ai" },
        ]}
      />
      <ServicePage
        h1={t("h1")}
        subtitle={t("subtitle")}
        body1={t("body1")}
        body2={t("body2")}
        features={t.raw("features") as string[]}
        ctaText={isHe ? "מוכנים לקחת את ההפקה לדור הבא?" : "Ready to take production to the next generation?"}
        badge="AI Video Production"
        locale={locale}
        relatedVideos={[
          { id: "URDNpEwabCc", titleHe: "Airobotics — Developer Program", titleEn: "Airobotics — Developer Program" },
          { id: "N4iNxvFGA34", titleHe: "Iron Drone — ויזואליזציה AI", titleEn: "Iron Drone — AI Visualization" },
          { id: "mqVFjv-gPS4", titleHe: "Airobotics Optimus — FAA Type Certification", titleEn: "Airobotics Optimus — FAA Type Certification" },
        ]}
        relatedPosts={[
          { id: "airobotics-optimus-faa-blog", titleHe: "Airobotics Optimus — מאחורי הקלעים של סרטון ההכרזה", titleEn: "Airobotics Optimus — Behind the Announcement Film" },
          { id: "airobotics-developer-program-blog", titleHe: "כשהאנימציה מסבירה את הטכנולוגיה — Airobotics", titleEn: "When Animation Explains the Tech — Airobotics" },
          { id: "video-to-brand-identity", titleHe: "מהוידאו לזהות מותג — Iron Drone", titleEn: "From Video to Brand Identity — Iron Drone" },
        ]}
        faqItems={isHe ? [
          { q: "מה זה הפקת וידאו AI ואיך זה עובד?", a: "הפקת וידאו AI משתמשת בכלים כמו Midjourney (לתמונות), Kling ו-Runway Gen-3 (לוידאו מתמונה) ו-ElevenLabs (לקריין AI) כדי לייצר ויזואלים שלא ניתן לצלם בצורה קונבנציונלית. אנחנו משלבים כלים אלה עם כתיבת תסריט, בימוי ועריכה קולנועית." },
          { q: "האם AI מחליף צוות הפקה אמיתי?", a: "לא — AI הוא כלי, לא צוות. בלי במאי שיודע מה לבקש מה-AI, ועורך שיודע לחבר את הקטעים לנרטיב קוהרנטי, התוצאה נראית כמו תרגיל טכני. אנחנו מביאים 20 שנות ניסיון קולנועי לתוך כל פרויקט AI." },
          { q: "לאילו חברות מתאימה הפקת AI?", a: "בעיקר לחברות עם מוצר שעדיין לא קיים פיזית (סטארטאפ, גיוס הון), חברות ביטחוניות עם ציוד מסווג שלא ניתן לצלם, ופרויקטים שדורשים ויזואלים בעתיד (בינוי, תכנון עירוני, רפואה)." },
          { q: "כמה עולה סרט וידאו AI?", a: "פרויקט AI בסיסי מתחיל בכ-15,000-30,000 ש\"ח ועולה בהתאם לאורך ולמורכבות. Hybrid productions שמשלבים AI עם צילום חי עולים יותר. בשניהם — חוסכים עשרות אחוזים לעומת הפקה רגילה." },
        ] : [
          { q: "What is AI video production and how does it work?", a: "AI video production uses tools like Midjourney (for images), Kling and Runway Gen-3 (for video from image), and ElevenLabs (for AI voiceover) to create visuals that cannot be filmed conventionally. We combine these tools with screenwriting, directing, and cinematic editing." },
          { q: "Does AI replace a real production crew?", a: "No — AI is a tool, not a crew. Without a director who knows what to ask the AI, and an editor who knows how to connect the clips into a coherent narrative, the result looks like a technical exercise. We bring 20 years of cinematic experience into every AI project." },
          { q: "What companies is AI video production suitable for?", a: "Mainly companies with a product that doesn't yet physically exist (startup, fundraising), defense companies with classified equipment that cannot be filmed, and projects that require future visuals (construction, urban planning, medicine)." },
          { q: "How much does an AI video cost?", a: "A basic AI project starts at approximately $4,000-8,000 USD and scales with length and complexity. Hybrid productions combining AI with live action cost more. In both cases — you save tens of percentage points compared to conventional production." },
        ]}
      />
    </>
  );
}
