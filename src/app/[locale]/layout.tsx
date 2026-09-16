import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import { Inter, Heebo } from "next/font/google";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LangSwitcher from "@/components/LangSwitcher";
import CookieBanner from "@/components/CookieBanner";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import RevealInit from "@/components/RevealInit";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400","500","600","700","800","900"], display: "swap", variable: "--font-inter" });
const heebo = Heebo({ subsets: ["hebrew","latin"], weight: ["400","500","600","700","800","900"], display: "swap", variable: "--font-heebo" });

const SITE_URL = "https://www.the-videoshop.com";

function buildSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoProductionService",
        "@id": `${SITE_URL}/#service`,
        name: "videoshop",
        alternateName: "the-videoshop",
        description:
          locale === "he"
            ? "סטודיו בוטיק להפקות וידאו ו-AI לחברות B2B מובילות: הייטק, ביטחוני, נדל\"ן מסחרי וקורפורייט. 20 שנות ניסיון, 100+ סרטים."
            : "Boutique video & AI production studio for leading B2B companies: high-tech, defense, commercial real estate and corporate. 20 years experience, 100+ films.",
        url: SITE_URL,
        sameAs: [
          "https://www.youtube.com/@romangor",
          "https://www.facebook.com/Video.Shop.Productions",
          "https://il.linkedin.com/company/the-video-shop",
          "https://www.the-videoshop.com",
        ],
        areaServed: [
          { "@type": "Country", name: "Israel" },
          { "@type": "Country", name: "United States" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Video Production Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Defense & AI Tech Video" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real Estate & Architecture Video" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate & Brand Video" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Video Production" } },
          ],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        name: "videoshop",
        image: `${SITE_URL}/og-image.jpg`,
        email: "roman@the-videoshop.com",
        telephone: "+972-54-454-5314",
        url: SITE_URL,
        address: {
          "@type": "PostalAddress",
          addressCountry: "IL",
          addressLocality: "Tel Aviv",
        },
        priceRange: "$$$",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "47",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  };
}

export function buildAlternates(locale: string, path: string = "") {
  const slug = path ? `/${path}` : "";
  return {
    canonical: locale === "he" ? `${SITE_URL}${slug}` : `${SITE_URL}/en${slug}`,
    languages: {
      "he": `${SITE_URL}${slug}`,
      "en": `${SITE_URL}/en${slug}`,
      "x-default": `${SITE_URL}${slug}`,
    },
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: { default: t("homeTitle"), template: "%s | videoshop" },
    description: t("homeDesc"),
    metadataBase: new URL(SITE_URL),
    alternates: buildAlternates(locale),
    openGraph: {
      siteName: "videoshop",
      locale: locale === "he" ? "he_IL" : "en_US",
      type: "website",
      title: t("ogTitle"),
      description: t("ogDesc"),
      images: [{ url: locale === "he" ? "/he/opengraph-image" : "/en/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: t("ogTitle"), description: t("ogDesc") },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();
  const isRTL = locale === "he";
  const schema = buildSchema(locale);

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} className={`${inter.variable} ${heebo.variable}`}>
      <head>
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#f4f4f4] text-[#111]">
        <NextIntlClientProvider messages={messages}>
          <LangSwitcher locale={locale} />
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
          <AccessibilityWidget locale={locale} />
          <CookieBanner locale={locale} />
          <RevealInit />
        </NextIntlClientProvider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KJBDYMNGWW" strategy="lazyOnload" />
        <Script id="ga4-init" strategy="lazyOnload">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-KJBDYMNGWW');`}</Script>
      </body>
    </html>
  );
}
