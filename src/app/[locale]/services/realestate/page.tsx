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
        ctaText="מוכנים לצלם את הפרויקט שלכם?"
        badge="Real Estate & Architecture"
        locale={locale}
      />
    </>
  );
}
