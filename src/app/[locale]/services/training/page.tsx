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
      />
    </>
  );
}
