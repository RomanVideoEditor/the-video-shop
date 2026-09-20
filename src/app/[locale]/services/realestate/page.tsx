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
          { q: "How much does commercial real estate video production cost in Israel?", a: "The cost of commercial real estate video production depends on your project scope – from a short property showcase to a full campaign with drone footage and professional editing. At Videoshop, we provide custom quotes tailored to every property owner and real estate agent's budget, with transparent pricing and no surprises." },
          { q: "Is drone filming legal in Israel for real estate videos?", a: "Yes, drone filming in Israel for real estate videos is completely legal when operated by a licensed drone operator with all required permits. Our team includes certified operators who understand local regulations and can bring impressive aerial perspectives to your property." },
          { q: "What's the difference between commercial real estate video and residential property video?", a: "Commercial real estate video requires a completely different approach – it needs to showcase business potential, foot traffic, demographics, and long-term value, while a residential property video focuses on lifestyle and comfort. We know exactly how to tell the story of each property type to attract the right audience." },
          { q: "Can real estate video production in Israel actually increase property sales?", a: "Absolutely – properties with quality video content receive more inquiries and offers from lenders and potential buyers. At Videoshop, we create videos that aren't just beautiful, but designed to sell – with strong storytelling, professional documentation, and drone footage when it matters." },

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
          { q: "כמה עולה ייצור וידאו נדל\"ן מסחרי בישראל?", a: "עלות וידאו נדל\"ן מסחרי תלויה בסקופ של הפרויקט – מ-סרטון קצר של נכס בודד ועד קמפיין מלא עם צילום רחפן ישראל ועריכה מקצועית. אנחנו ב-Videoshop מספקים הצעות מותאמות לתקציב של כל בעל נכס או סוכן נדלן, עם תמחור שקוף וללא הפתעות." },
          { q: "האם צילום רחפן ישראל חוקי לסרטוני נדלן?", a: "כן, צילום רחפן ישראל לסרטוני נדלן הוא לגמרי חוקי כאשר מבוצע על ידי מפעיל רחפן מוסמך עם כל ההיתרים הנדרשים. בצוות שלנו יש מפעילים מוסמכים שמבינים את כל התקנות המקומיות ויכולים להביא זווית חדשה ומרשימה לנכס שלך." },
          { q: "מה ההבדל בין וידאו נדל\"ן מסחרי לסרטון בעל נכס רגיל?", a: "וידאו נדל\"ן מסחרי דורש גישה שונה לגמרי – זה צריך להציג פוטנציאל עסקי, תנועת הולכים, נתונים דמוגרפיים והערך ארוך טווח, בעוד שסרטון בעל נכס מתמקד בחיים והנוחות. אנחנו יודעים בדיוק איך לספר את הסיפור של כל סוג נכס כדי למשוך את הקהל הנכון." },
          { q: "האם real estate video production israel יכול להגביר מכירות נכסים?", a: "בהחלט – נכסים עם סרטוני וידאו איכותיים מקבלים יותר בדיקות והצעות מהמשכנתאות והקונים פוטנציאליים. בVideoshop אנחנו יוצרים סרטונים שלא רק יפים, אלא גם מכוונים למכור – בעזרת סיפור חזק, תיעוד מקצועי וצילום רחפן ישראל כשצריך." },

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
