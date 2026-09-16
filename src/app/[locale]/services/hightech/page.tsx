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
  const title = t("servicesHightechTitle");
  const desc = t("servicesHightechDesc");
  const isHe = locale === "he";
  return {
    title,
    description: desc,
    keywords: isHe
      ? ["סרט תדמית לסטארטאפ", "הפקת וידאו הייטק", "investor pitch film", "סרט גיוס הון", "demo video", "הפקת וידאו B2B ישראל", "סרט תדמית לחברה"]
      : ["startup video production", "investor pitch film", "high-tech brand film", "B2B video Israel", "demo video production", "fundraising video"],
    alternates: buildAlternates(locale, "services/hightech"),
    openGraph: { title, description: desc },
    twitter: { card: "summary_large_image", title, description: desc },
  };
}

export default async function HightechPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.hightech" });
  const isHe = locale === "he";

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        crumbs={[
          { name: isHe ? "שירותים" : "Services", path: "/services" },
          { name: isHe ? "היי-טק וסטארטאפים" : "High-Tech & Startups", path: "/services/hightech" },
        ]}
      />
      <ServicePage
        h1={t("h1")}
        subtitle={t("subtitle")}
        body1={t("body1")}
        body2={t("body2")}
        features={t.raw("features") as string[]}
        ctaText="מוכנים ליצור את סרט הHigh-Tech שלכם?"
        badge="High-Tech & Startups"
        locale={locale}
      />
    </>
  );
}
