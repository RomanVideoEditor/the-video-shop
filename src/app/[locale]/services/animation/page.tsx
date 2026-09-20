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
  const title = t("servicesAnimationTitle");
  const desc = t("servicesAnimationDesc");
  const isHe = locale === "he";
  return {
    title,
    description: desc,
    keywords: isHe
      ? ["סרטי אנימציה לעסקים", "מוגרפיקה ישראל", "motion graphics", "סרט Explainer אנימציה", "אנימציה 2D לחברות", "הפקת אנימציה ישראל", "סרטי הסבר אנימטיים"]
      : ["animation video production Israel", "motion graphics company Israel", "2D explainer video", "animated explainer film", "SaaS explainer animation", "corporate animation video"],
    alternates: buildAlternates(locale, "services/animation"),
    openGraph: { title, description: desc },
    twitter: { card: "summary_large_image", title, description: desc },
  };
}

export default async function AnimationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.animation" });
  const isHe = locale === "he";

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        crumbs={[
          { name: isHe ? "שירותים" : "Services", path: "/services" },
          { name: isHe ? "אנימציה ומוגרפיקה" : "Animation & Motion Graphics", path: "/services/animation" },
        ]}
      />
      <ServicePage
        h1={t("h1")}
        subtitle={t("subtitle")}
        body1={t("body1")}
        body2={t("body2")}
        features={t.raw("features") as string[]}
        ctaText={isHe ? "מה הרעיון שצריך לפרוץ מהמסך?" : "What's the idea that needs to break out of the screen?"}
        badge={isHe ? "אנימציה ומוגרפיקה" : "Animation & Motion Graphics"}
        locale={locale}
        relatedVideos={[
          { id: "nFaOyZwj2PY", titleHe: "Buildots — גרין סקרין וקומפוזיטינג", titleEn: "Buildots — Green Screen & Compositing" },
          { id: "3mxQZMC9ZpI", titleHe: "Ludeo — קונספט פילם גיימינג", titleEn: "Ludeo — Gaming Concept Film" },
          { id: "URDNpEwabCc", titleHe: "Airobotics — Developer Program", titleEn: "Airobotics — Developer Program" },
        ]}
        relatedPosts={[
          { id: "buildots-green-screen-blog", titleHe: "איך מפיקים גרין סקרין לסרט B2B", titleEn: "How to Produce Green Screen for a B2B Film" },
          { id: "ludeo-gaming-blog", titleHe: "גיימינג מפגש עם קולנוע — קונספט פילם ל-Ludeo", titleEn: "Gaming Meets Cinema — Concept Film for Ludeo" },
          { id: "airobotics-developer-program-blog", titleHe: "כשהאנימציה מסבירה את הטכנולוגיה — Airobotics", titleEn: "When Animation Explains the Tech — Airobotics" },
        ]}
        faqItems={isHe ? [
          { q: "כמה עולה סרטון אנימציה לחברה?", a: "סרטון אנימציה לחברה עולה בדרך כלל בין 12,000 ל-70,000 ש\"ח, תלוי באורך וסגנון. סרטוני Explainer קצרים (60-90 שניות) ב-2D הם הנפוצים ביותר לחברות הייטק ו-SaaS. מוגרפיקה פשוטה זולה יותר; אנימציה תלת-ממד מורכבת עולה יותר." },
          { q: "מה ההבדל בין מוגרפיקה לאנימציה?", a: "מוגרפיקה (Motion Graphics) עובדת עם צורות, טקסט ואיקונים — אידיאלית להסבר תהליכים, נתונים ומוצרי SaaS. אנימציה כוללת דמויות, עולמות ועלילות — טובה יותר לסיפור רגשי. לרוב הפרויקטים הב-B2B שלנו אנחנו משלבים את שניהם." },
          { q: "כמה זמן לוקח לייצר סרטון אנימציה?", a: "4-6 שבועות מקיק-אוף עד מסירה: שבועיים לסקריפט ו-storyboard, שבועיים לאנימציה, שבוע למיקס סאונד ומוזיקה. פרויקטים קצרים ופשוטים יכולים להסתיים תוך 3 שבועות." },
          { q: "האם ניתן לשלב אנימציה עם צילום חי (Live Action)?", a: "כן — זה בדיוק מה שעשינו עבור Buildots ו-Ludeo. Hybrid production משלב אנשים ומוצרים אמיתיים עם עולמות אנימטיים — התוצאה נראית כמו הפקת ענק ועובדת מצוין לקמפיינים שיווקיים ולסרטי השקה." },
          { q: "האם האנימציה מתאימה לרשתות חברתיות?", a: "לגמרי. כל סרטוני האנימציה שלנו מסופקים גם בגרסאות 9:16 לרילס וסטוריז, 1:1 לפיד, ועריכות מקוצרות ל-15/30 שניות לפרסום ממומן." },
          { q: "כמה עולה סרטון אנימציה לחברה?", a: "עלות סרטון אנימציה לחברה תלויה באורך הסרטון, מורכבות העיצוב, וכמות הרקע המקורי. אנו מציעים חבילות גמישות החל מ-₪5,000 עד ₪50,000+, בהתאם לצרכי התקציב של הלקוח. בואו נתאים פתרון אנימציה שמתאים לתקציב שלך." },
          { q: "מה ההבדל בין אנימציה הסברתית לסרטון קורפוריטיבי?", a: "אנימציה הסברתית מתמקדת בהסבר קונספט, מוצר או שירות בצורה פשוטה וחוזרת - בדרך כלל בן 60-90 שניות. סרטון קורפוריטיבי הוא יותר כללי ופוקוס על מותג, ערכים וסיפור החברה. אנו משתמשים בשתי גישות כדי להשיג מטרות שונות למטבח שלך." },
          { q: "האם אתם עושים animated explainer video עבור חברות הייטק בישראל?", a: "כן, אנו בעלי ניסיון עשיר ב-animated explainer video עבור חברות הייטק וסטארטאפים בישראל. עבדנו עם חברות כמו Intel ו-Palo Alto Networks, ואנו מבינים את הדיוקים הטכניים והדרישות של התעשייה. אנימציה הסברתית שלנו מפשטת קונספטים מורכבים לתוכן ברור וקשור." },
          { q: "איזה סגנון אנימציה הכי מתאים לסרטון אנימציה לחברה שלי?", a: "זה תלוי בזהות המותג שלך, קהל היעד, וההודעה שאתה רוצה להעביר. סגנונות מוטב עבור סרטון אנימציה לחברה כוללים motion graphics פשוטה, 2D אנימציה עדינה, או 3D מודרני - כולם יכולים ליצור סרטון אנימציה הסברתית אפקטיבי. אנו ממליצים על סגנון בהתאם לניתוח עומק של המטרות השיווקיות שלך." },

        ] : [
          { q: "How much does an animated explainer video cost?", a: "An animated explainer video typically costs between $3,000 and $18,000 USD, depending on length and style. Short 60-90 second 2D explainer videos are most common for high-tech and SaaS companies. Basic motion graphics are less expensive; complex 3D animation costs more." },
          { q: "What is the difference between motion graphics and animation?", a: "Motion graphics work with shapes, text, and icons — ideal for explaining processes, data, and SaaS products. Animation includes characters, worlds, and stories — better for emotional storytelling. For most B2B projects, we combine both." },
          { q: "How long does animation production take?", a: "4-6 weeks from kickoff to delivery: two weeks for script and storyboard, two weeks for animation, one week for sound mix and music. Short, simpler projects can be completed in 3 weeks." },
          { q: "Can animation be combined with live action filming?", a: "Yes — this is exactly what we did for Buildots and Ludeo. Hybrid production combines real people and products with animated worlds — the result looks like a major production and works great for marketing campaigns and launch films." },
          { q: "Is animation suitable for social media?", a: "Absolutely. All our animation videos are delivered in 9:16 versions for Reels and Stories, 1:1 for feed, and short edits of 15/30 seconds for paid advertising." },
        ]}
      />
    </>
  );
}
