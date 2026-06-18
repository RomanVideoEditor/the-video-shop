import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("servicesAITitle"), description: t("servicesAIDesc") };
}

export default function AIPage() {
  const t = useTranslations("services.ai");
  return (
    <ServicePage
      h1={t("h1")}
      subtitle={t("subtitle")}
      body1={t("body1")}
      body2={t("body2")}
      features={t.raw("features") as string[]}
      ctaText="מוכנים לקחת את ההפקה לדור הבא?"
      badge="AI Video Production"
    />
  );
}
