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
  const title = t("servicesTrainingTitle");
  const desc = t("servicesTrainingDesc");
  const isHe = locale === "he";
  return {
    title,
    description: desc,
    keywords: isHe
      ? ["סרטי הדרכה לעובדים", "eLearning וידאו", "סרט onboarding", "הפקת סרטי הדרכה ישראל", "הדרכת עובדים בוידאו", "compliance וידאו", "סרטי הסבר מוצר"]
      : ["employee training video", "eLearning video production", "onboarding video Israel", "compliance training video", "product demo video", "instructional video production"],
    alternates: buildAlternates(locale, "services/training"),
    openGraph: { title, description: desc },
    twitter: { card: "summary_large_image", title, description: desc },
  };
}

export default async function TrainingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.training" });
  const isHe = locale === "he";

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        crumbs={[
          { name: isHe ? "שירותים" : "Services", path: "/services" },
          { name: isHe ? "סרטי הדרכה ו-eLearning" : "Training & eLearning Videos", path: "/services/training" },
        ]}
      />
      <ServicePage
        h1={t("h1")}
        subtitle={t("subtitle")}
        body1={t("body1")}
        body2={t("body2")}
        features={t.raw("features") as string[]}
        ctaText={isHe ? "רוצים להפוך את ההדרכות שלכם לתוכן שעובד?" : "Ready to turn your training into content that works?"}
        badge={isHe ? "הדרכה ו-eLearning" : "Training & eLearning"}
        locale={locale}
        relatedVideos={[
          { id: "7vCj49e42Ow", titleHe: "Vertica MedTech — סרט אונבורדינג רפואי", titleEn: "Vertica MedTech — Medical Onboarding Film" },
          { id: "coZNfEng59g", titleHe: "Intel Fab 28 קרית גת — תרגיל חירום 2025", titleEn: "Intel Fab 28 Kiryat Gat — Emergency Drill 2025" },
          { id: "nFaOyZwj2PY", titleHe: "Buildots — הדרכת מוצר", titleEn: "Buildots — Product Training" },
        ]}
        relatedPosts={[
          { id: "vertica-medtech-blog", titleHe: "Vertica MedTech — כשמדע הופך לסיפור אנושי", titleEn: "Vertica MedTech — When Science Becomes a Human Story" },
          { id: "intel-fab28-kgat-blog", titleHe: "Intel Fab 28 קרית גת — לצלם אקשן בזמן אמת", titleEn: "Intel Fab 28 Kiryat Gat — Filming Action in Real Time" },
          { id: "buildots-green-screen-blog", titleHe: "איך מפיקים גרין סקרין לסרט B2B", titleEn: "How to Produce Green Screen for a B2B Film" },
        ]}
        faqItems={isHe ? [
          { q: "מה ההבדל בין סרט הדרכה לסרטון Explainer?", a: "סרט הדרכה מלמד תהליך ספציפי שעובד/לקוח צריך לבצע — onboarding, נהלי בטיחות, שימוש במוצר. סרטון Explainer מסביר מה המוצר/שירות עושה לצורכי שיווק. שניהם יכולים להיות מאותה הפקה אם מתכננים נכון." },
          { q: "כמה עולה סרט הדרכה לעובדים?", a: "סרטי הדרכה פשוטים מתחילים בכ-8,000-20,000 ש\"ח. סרטי onboarding מורכבים עם אנימציה, CGI ומספר לוקיישנים (כמו שעשינו ל-Intel Fab 28) מגיעים לטווחים גבוהים יותר. כל פרויקט מתומחר לפי סקופ." },
          { q: "האם ניתן לשלב AI בסרטי הדרכה?", a: "כן — AI שימושי מאוד בסרטי הדרכה: אנימציות של תהליכים שקשה לצלם, קריין AI ב-50+ שפות, ועדכון תוכן ללא צילום מחדש. עבדנו עם Vertica MedTech על שילוב CGI רפואי בסרטי הדרכה." },
          { q: "האם סרטי ההדרכה מועלים ל-LMS?", a: "כן. אנחנו מספקים את הסרטים בפורמטים המתאימים לכל פלטפורמת LMS: MP4, SCORM-ready exports ותמלילים לנגישות. עבדנו עם חברות שמשתמשות ב-Moodle, TalentLMS, Cornerstone ועוד." },
        ] : [
          { q: "What is the difference between a training video and an explainer video?", a: "A training video teaches a specific process an employee/customer needs to perform — onboarding, safety procedures, product use. An explainer video explains what the product/service does for marketing purposes. Both can come from the same production if planned correctly." },
          { q: "How much does an employee training video cost?", a: "Simple training videos start at approximately $2,000-6,000 USD. Complex onboarding films with animation, CGI, and multiple locations (like what we did for Intel Fab 28) reach higher ranges. Every project is priced by scope." },
          { q: "Can AI be integrated into training videos?", a: "Yes — AI is very useful in training videos: animations of processes that are difficult to film, AI voiceover in 50+ languages, and content updates without re-filming. We worked with Vertica MedTech on integrating medical CGI into training films." },
          { q: "Are the training videos compatible with LMS platforms?", a: "Yes. We deliver videos in formats suitable for any LMS platform: MP4, SCORM-ready exports, and transcripts for accessibility. We have worked with companies using Moodle, TalentLMS, Cornerstone, and more." },
        ]}
      />
    </>
  );
}
