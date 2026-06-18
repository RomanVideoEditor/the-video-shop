import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LangSwitcher from "@/components/LangSwitcher";
import CookieBanner from "@/components/CookieBanner";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import "../globals.css";

const SITE_URL = "https://thevideoshop.co.il";

function buildSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoProductionService",
        "@id": `${SITE_URL}/#service`,
        name: "The Video Shop",
        alternateName: "VideoShop",
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
        knowsAbout: [
          "B2B Video Production",
          "Investor Pitch Video",
          "AI Concept Film",
          "Defense Tech Visualization",
          "Pre-visualization for Defense",
          "Photorealistic AI Video",
          "Real Estate Video",
          "Corporate Video",
          "Drone Videography",
          "Kling AI",
          "Runway Gen-3",
          "Midjourney",
          "Hard-Surface AI Consistency",
          "HUD UI Overlay",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Video Production Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Defense & AI Tech Video", description: "Investor pitch films for defense, drone and autonomy industries with AI visualizations." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real Estate & Architecture Video", description: "Drone cinematography and marketing films for commercial real estate developers." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate & Brand Video", description: "Employer branding, onboarding and corporate films." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Video Production", description: "Kling, Runway Gen-3 Alpha and Midjourney productions for visuals that exceed traditional budgets." } },
          ],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        name: "The Video Shop",
        image: `${SITE_URL}/og-image.jpg`,
        email: "roman@the-videoshop.com",
        telephone: "+972-54-454-5314",
        url: SITE_URL,
        address: {
          "@type": "PostalAddress",
          addressCountry: "IL",
          addressLocality: "Tel Aviv",
        },
        founder: {
          "@type": "Person",
          name: "Roman Gornih",
          jobTitle: "Director & Producer",
        },
        priceRange: "$$$",
      },
    ],
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
    title: { default: t("homeTitle"), template: "%s" },
    description: t("homeDesc"),
    metadataBase: new URL("https://thevideoshop.co.il"),
    alternates: {
      canonical: locale === "he" ? "https://thevideoshop.co.il" : "https://thevideoshop.co.il/en",
      languages: {
        "he": "https://thevideoshop.co.il",
        "en": "https://thevideoshop.co.il/en",
        "x-default": "https://thevideoshop.co.il",
      },
    },
    openGraph: {
      siteName: "The Video Shop",
      locale: locale === "he" ? "he_IL" : "en_US",
      type: "website",
      images: [{
        url: locale === "he" ? "/he/opengraph-image" : "/en/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The Video Shop – Boutique Video & AI Production Studio",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDesc"),
      images: [locale === "he" ? "/he/opengraph-image" : "/en/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
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
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Global Structured Data — present on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#f5f5f0]">
        <NextIntlClientProvider messages={messages}>
          <LangSwitcher locale={locale} />
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
          <AccessibilityWidget locale={locale} />
          <CookieBanner locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
