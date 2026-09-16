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
        ]}
      />
      <ServicePage
        h1={t("h1")}
        subtitle={t("subtitle")}
        body1={t("body1")}
        body2={t("body2")}
        features={t.raw("features") as string[]}
        ctaText="מוכנים ליצור תוכן שהארגון שלכם יהיה גאה בו?"
        badge="Corporate Video"
        locale={locale}
      />
    </>
  );
}
