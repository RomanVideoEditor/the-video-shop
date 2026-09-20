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
  const title = t("servicesRealestateTitle");
  const desc = t("servicesRealestateDesc");
  const isHe = locale === "he";
  return {
    title,
    description: desc,
    keywords: isHe
      ? ["וידאו נדל\"ן מסחרי", "צילום רחפן נדל\"ן", "סרט שיווק נדל\"ן", "הפקת וידאו נדל\"ן ישראל", "צילום רחפן מורשה", "תיעוד פרויקטי נדל\"ן"]
      : ["real estate video Israel", "drone cinematography real estate", "property marketing film", "commercial real estate video", "licensed drone filming"],
    alternates: buildAlternates(locale, "services/realestate"),
    openGraph: { title, description: desc },
    twitter: { card: "summary_large_image", title, description: desc },
  };
}

export default async function RealEstatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.realestate" });
  const isHe = locale === "he";

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        crumbs={[
          { name: isHe ? "שירותים" : "Services", path: "/services" },
          { name: isHe ? "נדל\"ן ואדריכלות" : "Real Estate & Architecture", path: "/services/realestate" },
        ]}
      />
      <ServicePage
        h1={t("h1")}
        subtitle={t("subtitle")}
        body1={t("body1")}
        body2={t("body2")}
        features={t.raw("features") as string[]}
        ctaText={isHe ? "מוכנים לצלם את הפרויקט שלכם?" : "Ready to film your project?"}
        badge="Real Estate & Architecture"
        locale={locale}
        relatedVideos={[
          { id: "ome2LtSiFWQ", titleHe: "אשטרום נכסים — סרט מותג", titleEn: "Ashtrom Properties — Brand Film" },
          { id: "yDJ5shdbFMw", titleHe: "BIG FASHION גלילות — חנות ראשית חדשה", titleEn: "BIG FASHION Gililot — New Flagship Store" },
          { id: "8RbqUaMR9_c", titleHe: "אשטרומיסט — פרויקט הדגל", titleEn: "Ashtromist — Flagship Project" },
        ]}
        relatedPosts={[
          { id: "ashtrom-properties-blog", titleHe: "אשטרום נכסים — כשנדל\"ן מסחרי הופך לסיפור", titleEn: "Ashtrom Properties — When Commercial Real Estate Becomes a Story" },
          { id: "big-fashion-giliot-blog", titleHe: "BIG FASHION גלילות — רחפן, OOH ותיעוד פתיחה", titleEn: "BIG FASHION Gililot — Drone, OOH & Opening Day" },
          { id: "ashtromist-employer-branding-case-study", titleHe: "אשטרומיסט — מחקר מקרה: מיתוג מעסיק", titleEn: "Ashtromist — Case Study: Employer Branding" },
        ]}
        faqItems={isHe ? [
          { q: "מה כולל סרט שיווקי לנדל\"ן מסחרי?", a: "סרט נדל\"ן מסחרי כולל בדרך כלל: צילומי רחפן, צילומי שטח ואדריכלות, ראיונות עם בכירים ודיירים, ואנימציות תכנון לפרויקטים שטרם נבנו. התוצאה היא סרט שמוכר לשוכרים, משקיעים וגורמי מימון." },
          { q: "האם אתם מורשי טיסה ברחפן?", a: "כן — כל הצוות שלנו מוסמך לטיסות רחפן מסחריות בישראל בהתאם לתקנות רשות התעופה האזרחית. עבדנו בפרויקטים של אשטרום, G City, BIG FASHION ועוד." },
          { q: "כמה עולה סרט וידאו לפרויקט נדל\"ן?", a: "תלוי בסקופ — מסרט שיווקי קצר לדיגיטל ועד סרט תדמית מלא לאירוע פתיחה. מתחיל בעשרות אלפי שקלים ועולה בהתאם לכמות ימי הצילום ורמת הפוסט." },
          { q: "האם אפשר לצלם פרויקט שעדיין נמצא בבנייה?", a: "בהחלט — לפעמים זה הזמן הכי חשוב. תיעוד שלבי הבנייה, הדמיות AI למה שיהיה, וצילומי רחפן מהאוויר יחד עם ה-rendering הסופי יוצרים סרט מכירה חזק לפני שהפרויקט מוכן." },
        ] : [
          { q: "What does a commercial real estate marketing video include?", a: "A commercial real estate film typically includes: drone footage, ground and architecture filming, executive and tenant interviews, and planning animations for pre-built projects. The result is a film that sells to tenants, investors, and financing bodies." },
          { q: "Are you licensed drone operators?", a: "Yes — our entire team is certified for commercial drone flights in Israel per Civil Aviation Authority regulations. We have worked on projects for Ashtrom, G City, BIG FASHION, and more." },
          { q: "How much does a real estate video cost?", a: "It depends on scope — from a short digital marketing video to a full brand film for an opening event. Starting in the range of tens of thousands of shekels and scaling with number of filming days and post-production level." },
          { q: "Can you film a project that is still under construction?", a: "Absolutely — sometimes that's the most important time. Documenting construction phases, AI visualizations of what will be, and drone aerials combined with the final rendering create a powerful pre-sales film before the project is ready." },
        ]}
      />
    </>
  );
}
