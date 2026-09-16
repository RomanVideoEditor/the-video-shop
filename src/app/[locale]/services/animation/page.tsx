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
      />
    </>
  );
}
