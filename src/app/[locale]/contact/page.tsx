import type { Metadata } from "next";
import { buildAlternates } from "@/app/[locale]/layout";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import QuoteWizard from "./QuoteWizard";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const isHe = locale === "he";
  return {
    title: t("contactTitle"),
    description: t("contactDesc"),
    keywords: isHe
      ? ["הצעת מחיר סרט תדמית", "הפקת וידאו לעסקים", "צור קשר סטודיו וידאו", "הפקת וידאו B2B ישראל", "סרט תדמית מחיר"]
      : ["video production quote Israel", "B2B video studio contact", "brand film inquiry", "video production Israel"],
    alternates: buildAlternates(locale, "contact"),
    openGraph: { title: t("contactTitle"), description: t("contactDesc") },
    twitter: { card: "summary_large_image", title: t("contactTitle"), description: t("contactDesc") },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isHe = locale === "he";
  return (
    <>
      <BreadcrumbSchema locale={locale} crumbs={[{ name: isHe ? "צור קשר" : "Contact", path: "/contact" }]} />
      <QuoteWizard locale={locale} />
    </>
  );
}
