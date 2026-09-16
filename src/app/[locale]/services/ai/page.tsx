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
  const title = t("servicesAITitle");
  const desc = t("servicesAIDesc");
  const isHe = locale === "he";
  return {
    title,
    description: desc,
    keywords: isHe
      ? ["הפקת וידאו AI", "וידאו AI פוטוריאליסטי", "Kling AI וידאו", "Runway Gen-3 ישראל", "סרט AI לסטארטאפ", "ויזואליזציה AI ביטחוני", "סרט פיצ' AI"]
      : ["AI video production Israel", "photorealistic AI film", "Kling video generation", "Runway Gen-3 production", "AI pitch film", "defense AI visualization"],
    alternates: buildAlternates(locale, "services/ai"),
    openGraph: { title, description: desc },
    twitter: { card: "summary_large_image", title, description: desc },
  };
}

export default async function AIPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.ai" });
  const isHe = locale === "he";

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        crumbs={[
          { name: isHe ? "שירותים" : "Services", path: "/services" },
          { name: isHe ? "הפקת AI וידאו" : "AI Video Production", path: "/services/ai" },
        ]}
      />
      <ServicePage
        h1={t("h1")}
        subtitle={t("subtitle")}
        body1={t("body1")}
        body2={t("body2")}
        features={t.raw("features") as string[]}
        ctaText="מוכנים לקחת את ההפקה לדור הבא?"
        badge="AI Video Production"
        locale={locale}
      />
    </>
  );
}
