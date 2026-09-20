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
  const title = t("servicesCorporateTitle");
  const desc = t("servicesCorporateDesc");
  const isHe = locale === "he";
  return {
    title,
    description: desc,
    keywords: isHe
      ? ["employer branding וידאו", "סרט גיוס עובדים", "מיתוג מעסיק", "employer branding ישראל", "סרט תדמית ארגוני", "גיוס עובדים עם תוכן"]
      : ["employer branding video Israel", "recruitment film", "company culture video", "employer brand film", "HR video production"],
    alternates: buildAlternates(locale, "services/corporate"),
    openGraph: { title, description: desc },
    twitter: { card: "summary_large_image", title, description: desc },
  };
}

export default async function CorporatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.corporate" });
  const isHe = locale === "he";

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        crumbs={[
          { name: isHe ? "שירותים" : "Services", path: "/services" },
          { name: isHe ? "קורפורייט וידאו" : "Corporate Video", path: "/services/corporate" },
  {
    q: "האם videoshop מעבדה עם startup וחברות high-tech לסרטי תדמית?",
    a: "כן, אנחנו מתמחים בעבודה עם חברות high-tech וstartup בתל אביב ובכל ישראל. הלקוחות שלנו כוללים Intel, Palo Alto Networks וOndas Holdings, ואנחנו יודעים איך להציג טכנולוגיה מורכבת בדרך חזותית ומעניינת. אנחנו גם מומחים בסרטי AI video וסרטי הסבר שמעניינים משקיעים ולקוחות כאחד.",
  },

        ]}
      />
      <ServicePage
        h1={t("h1")}
        subtitle={t("subtitle")}
        body1={t("body1")}
        body2={t("body2")}
        features={t.raw("features") as string[]}
        ctaText={isHe ? "מוכנים ליצור תוכן שהארגון שלכם יהיה גאה בו?" : "Ready to create content your organization will be proud of?"}
        badge="Corporate Video"
        locale={locale}
        relatedVideos={[
          { id: "8RbqUaMR9_c", titleHe: "אשטרומיסט — סרט מיתוג מעסיק", titleEn: "Ashtromist — Employer Branding Film" },
          { id: "N4iNxvFGA34", titleHe: "Iron Drone Airobotics — סרט תדמית", titleEn: "Iron Drone Airobotics — Brand Film" },
          { id: "7vCj49e42Ow", titleHe: "Vertica MedTech — סרט אונבורדינג", titleEn: "Vertica MedTech — Onboarding Film" },
        ]}
        relatedPosts={[
          { id: "ashtromist-employer-branding-case-study", titleHe: "אשטרומיסט — מחקר מקרה: מיתוג מעסיק", titleEn: "Ashtromist — Case Study: Employer Branding" },
          { id: "video-to-brand-identity", titleHe: "מהוידאו לזהות מותג — Iron Drone", titleEn: "From Video to Brand Identity — Iron Drone" },
          { id: "vertica-medtech-blog", titleHe: "Vertica MedTech — כשמדע הופך לסיפור אנושי", titleEn: "Vertica MedTech — When Science Becomes a Human Story" },
        ]}
        faqItems={isHe ? [
          { q: "מה ההבדל בין Employer Branding לסרט גיוס עובדים?", a: "סרט גיוס עובדים מיועד לגייס מועמד ספציפי לתפקיד ספציפי — הוא מיידי ופרגמטי. Employer Branding הוא סיפור ארוך טווח של מה זה אומר לעבוד אצלכם — הוא מחזק את המותג המעסיק לאורך שנים. שניהם יכולים לצאת מאותה הפקה." },
          { q: "כמה עולה סרט קורפורייט לחברה?", a: "סרט תדמית קורפורייט מתחיל בעשרות אלפי שקלים ועולה בהתאם לסקופ: מספר ימי צילום, לוקיישנים ורמת הפוסט-פרודקשן. חברות גדולות כמו אשטרום ו-Intel בחרו בנו לפרויקטים ארוכי טווח של מספר סרטים." },
          { q: "האם הסרט מתאים גם לכנסים ולמצגות לדירקטוריון?", a: "כן — זה אחד השימושים הנפוצים ביותר. סרט קורפורייט מקצועי מעלה את רמת הפרזנטציה בכנסים, פגישות משקיעים ואירועי שנה. אנחנו מספקים גם גרסאות ממוקדות לשימושים שונים." },
          { q: "האם אתם יכולים לצלם ב-20 אתרים שונים?", a: "כן. פיתחנו מתודולוגיית צילום רב-זירתי עבור אשטרום ו-Intel — 6 צוותות, 6 זירות, תיאום מרכזי. גם אם יש לכם 50 סניפים, אנחנו יודעים לייצר קוהרנטיות ויזואלית בכל אתר." },
        ] : [
          { q: "What is the difference between Employer Branding and a recruitment video?", a: "A recruitment video targets a specific candidate for a specific role — it's immediate and pragmatic. Employer Branding is a long-term story of what it means to work for you — it strengthens your employer brand for years. Both can come from the same production." },
          { q: "How much does a corporate brand film cost?", a: "A corporate brand film starts in the range of tens of thousands of shekels and scales with scope: number of filming days, locations, and level of post-production. Large companies like Ashtrom and Intel have chosen us for long-term multi-film projects." },
          { q: "Is the film suitable for conferences and board presentations?", a: "Yes — this is one of the most common uses. A professional corporate film raises the level of presentations at conferences, investor meetings, and annual events. We also provide focused versions for different uses." },
          { q: "Can you film across 20 different sites?", a: "Yes. We developed a multi-zone filming methodology for Ashtrom and Intel — 6 crews, 6 zones, central coordination. Even if you have 50 branches, we know how to create visual coherence across every site." },
        ]}
      />
    </>
  );
}
