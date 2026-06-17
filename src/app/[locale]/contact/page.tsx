import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("contactTitle"), description: t("contactDesc") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  const labels = {
    h1: t("h1"),
    subtitle: t("subtitle"),
    name: t("name"),
    company: t("company"),
    email: t("email"),
    phone: t("phone"),
    projectType: t("projectType"),
    projectTypes: t.raw("projectTypes") as string[],
    message: t("message"),
    submit: t("submit"),
    sending: t("sending"),
    success: t("success"),
    required: t("required"),
    trustedBy: t("trustedBy"),
    trustQuote: t("trustQuote"),
  };

  return <ContactForm labels={labels} locale={locale} />;
}
