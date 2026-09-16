import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { vlogPosts } from "@/lib/videos";
import { buildAlternates } from "@/app/[locale]/layout";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const isHe = locale === "he";
  return {
    title: t("vlogTitle"),
    description: t("vlogDesc"),
    keywords: isHe
      ? ["כמה עולה סרט תדמית", "employer branding וידאו", "הפקת וידאו B2B", "סרט גיוס הון לסטארטאפ", "וידאו AI לעסקים", "הפקת וידאו ישראל"]
      : ["brand film cost", "employer branding video", "B2B video production", "startup fundraising video", "AI video for business", "video production Israel"],
    alternates: buildAlternates(locale, "vlog"),
    openGraph: { title: t("vlogTitle"), description: t("vlogDesc") },
    twitter: { card: "summary_large_image", title: t("vlogTitle"), description: t("vlogDesc") },
  };
}

export default async function VlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "vlog" });
  const isHe = locale === "he";

  return (
    <>
      <BreadcrumbSchema locale={locale} crumbs={[{ name: isHe ? "בלוג" : "Blog", path: "/vlog" }]} />
      {/* Header */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #FFD000 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.4em] text-[#FFD000]/70 uppercase mb-6" style={{ animation: "fadeInUp .45s ease both" }}>
            videoshop
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-[#111] mb-6 leading-tight" style={{ animation: "fadeInUp .5s .08s ease both" }}>
            {t("h1")}
          </h1>
          <p className="text-lg text-[#555] max-w-xl" style={{ animation: "fadeInUp .5s .16s ease both" }}>{t("subtitle")}</p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gray-200" />
      </div>

      {/* Posts */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {vlogPosts.map((post, index) => {
            const title = isHe ? post.titleHe : post.titleEn;
            const excerpt = isHe ? post.excerptHe : post.excerptEn;
            const isFirst = index === 0;

            return (
              <article key={post.id} className="reveal">
                <Link href={`/vlog/${post.id}`} className="group block py-10">
                  <div className={`flex gap-8 items-start ${isFirst ? "flex-col" : "flex-col sm:flex-row"}`}>
                    {/* Cover image */}
                    {post.coverImage && (
                      <div className={`relative overflow-hidden rounded-lg bg-white border border-gray-200 shrink-0 ${
                        isFirst ? "w-full aspect-[16/7]" : "w-full sm:w-56 aspect-video"
                      }`}>
                        <Image
                          src={post.coverImage}
                          alt={`${title} | videoshop Blog`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes={isFirst ? "(max-width: 768px) 100vw, 800px" : "(max-width: 640px) 100vw, 224px"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    )}

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      {/* Tags + date */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-[10px] font-semibold tracking-[0.25em] text-[#FFD000]/70 uppercase">
                            {tag}
                          </span>
                        ))}
                        <span className="text-[10px] text-[#555]">·</span>
                        <time className="text-[10px] text-[#555]">
                          {new Date(post.date).toLocaleDateString(isHe ? "he-IL" : "en-US", {
                            year: "numeric", month: "long", day: "numeric",
                          })}
                        </time>
                        {post.readingTime && (
                          <>
                            <span className="text-[10px] text-[#555]">·</span>
                            <span className="text-[10px] text-[#555]">
                              {post.readingTime} {t("minRead")}
                            </span>
                          </>
                        )}
                      </div>

                      <h2 className={`font-black text-[#111] leading-tight mb-3 group-hover:text-[#FFD000] transition-colors duration-200 ${
                        isFirst ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                      }`}>
                        {title}
                      </h2>

                      <p className="text-[#555] leading-relaxed text-sm mb-4 line-clamp-3">
                        {excerpt}
                      </p>

                      <span className="text-xs font-semibold tracking-widest text-[#FFD000]/60 uppercase group-hover:text-[#FFD000] transition-colors">
                        {t("readMore")}
                      </span>
                    </div>
                  </div>
                </Link>
                {index < vlogPosts.length - 1 && (
                  <div className="h-px bg-gray-200" />
                )}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
