import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";
import VideoObjectSchema from "@/components/VideoObjectSchema";
import { portfolioVideos, toIsoDuration, vimeoThumb, ytThumb } from "@/lib/videos";
import { buildAlternates } from "@/app/[locale]/layout";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("portfolioTitle"),
    description: t("portfolioDesc"),
    alternates: buildAlternates(locale, "portfolio"),
    openGraph: { title: t("portfolioTitle"), description: t("portfolioDesc") },
    twitter: { card: "summary_large_image", title: t("portfolioTitle"), description: t("portfolioDesc") },
  };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "portfolio" });

  const labels = {
    h1: t("h1"),
    subtitle: t("subtitle"),
    filterAll: t("filterAll"),
    filterHightech: t("filterHightech"),
    filterProduct: t("filterProduct"),
    filterAI: t("filterAI"),
    filterRealestate: t("filterRealestate"),
    filterCommercial: t("filterCommercial"),
    filterCreative: t("filterCreative"),
    filterRecruitment: t("filterRecruitment"),
    challenge: t("challenge"),
    solution: t("solution"),
  };

  const isHe = locale === "he";
  return (
    <>
      <BreadcrumbSchema locale={locale} crumbs={[{ name: isHe ? "תיק עבודות" : "Portfolio", path: "/portfolio" }]} />
      {/* VideoObject schema for every portfolio video */}
      {portfolioVideos.map((v) => {
        const thumb = v.youtubeId ? ytThumb(v.youtubeId) : v.vimeoId ? vimeoThumb(v.vimeoId) : null;
        if (!thumb) return null;
        return (
          <VideoObjectSchema
            key={v.id}
            name={locale === "he" ? v.titleHe : v.titleEn}
            description={locale === "he" ? v.solutionHe : v.solutionEn}
            thumbnailUrl={thumb}
            uploadDate={v.date ?? "2023-01-01"}
            embedUrl={
              v.youtubeId
                ? `https://www.youtube.com/embed/${v.youtubeId}`
                : v.vimeoId
                ? `https://player.vimeo.com/video/${v.vimeoId}`
                : undefined
            }
            duration={v.duration ? toIsoDuration(v.duration) : undefined}
          />
        );
      })}
      <PortfolioClient locale={locale} labels={labels} videos={portfolioVideos} />
    </>
  );
}
