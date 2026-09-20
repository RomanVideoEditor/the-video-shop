import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { vlogPosts } from "@/lib/videos";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import VideoEmbed from "@/components/VideoEmbed";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export async function generateStaticParams() {
  return vlogPosts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = vlogPosts.find((p) => p.id === slug);
  if (!post) return {};
  const isHe = locale === "he";
  const title = isHe ? post.titleHe : post.titleEn;
  const desc = isHe ? post.excerptHe : post.excerptEn;
  const BASE = "https://www.the-videoshop.com";
  const canonical = isHe ? `${BASE}/vlog/${slug}` : `${BASE}/en/vlog/${slug}`;
  return {
    title,
    description: desc,
    alternates: {
      canonical,
      languages: {
        "he": `${BASE}/vlog/${slug}`,
        "en": `${BASE}/en/vlog/${slug}`,
        "x-default": `${BASE}/vlog/${slug}`,
      },
    },
    openGraph: {
      title,
      description: desc,
      url: canonical,
      images: post.coverImage ? [{ url: `${BASE}${post.coverImage}`, width: 1200, height: 630 }] : [],
      type: "article",
      publishedTime: post.date,
    },
  };
}

// Inline: handle **bold** and *italic*
function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, j) => {
    if (part.startsWith("**") && part.endsWith("**"))
      return <strong key={j} className="text-[#111] font-bold">{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*"))
      return <em key={j}>{part.slice(1, -1)}</em>;
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch)
      return <a key={j} href={linkMatch[2]} className="text-[#111] underline underline-offset-2 hover:text-[#FFD000] transition-colors" target="_blank" rel="noopener noreferrer">{linkMatch[1]}</a>;
    return part;
  });
}

// Render rich body: ## h2, ### h3, bold inline, [IMAGE], bullet lists, checkmark lines, paragraphs
function renderBody(text: string, sectionImages: string[], imageAlt: string) {
  const blocks = text.split(/\n\n+/);
  const elements: React.ReactNode[] = [];
  let imgIdx = 0;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i].trim();
    if (!block) continue;

    if (block.startsWith("[IMAGE")) {
      const src = sectionImages[imgIdx++];
      if (!src) continue;
      const captionMatch = block.match(/^\[IMAGE:\s*(.+)\]$/);
      const caption = captionMatch ? captionMatch[1] : null;
      elements.push(
        <figure key={`img-${i}`} className="my-10">
          <div className="relative w-full aspect-[16/7] rounded-xl overflow-hidden bg-[#111] border border-gray-200">
            <Image src={src} alt={caption || imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
          </div>
          {caption && (
            <figcaption className="mt-3 text-sm text-gray-500 text-center italic">{caption}</figcaption>
          )}
        </figure>
      );
      continue;
    }

    if (block === "---") {
      elements.push(<hr key={i} className="border-gray-200 my-12" />);
      continue;
    }

    if (block.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl md:text-3xl font-black text-[#111] mt-14 mb-4 leading-tight border-b border-gray-100 pb-3">
          {renderInline(block.slice(3))}
        </h2>
      );
      continue;
    }

    if (block.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg font-bold text-[#111] mt-10 mb-3 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#FFD000] rounded-full inline-block shrink-0" />
          {renderInline(block.slice(4))}
        </h3>
      );
      continue;
    }

    // Bullet / checkmark list block — consecutive lines starting with "- " or "✅" or "❌"
    const lines = block.split("\n");
    const isList = lines.every(l => /^[-✅❌•]\s/.test(l.trim()) || l.trim() === "");
    if (isList && lines.length > 1) {
      const items = lines.filter(l => l.trim());
      elements.push(
        <ul key={i} className="my-6 space-y-3 pl-1">
          {items.map((item, j) => {
            const raw = item.trim();
            const isCheck = raw.startsWith("✅");
            const isCross = raw.startsWith("❌");
            const content = raw.replace(/^[-✅❌•]\s*/, "");
            return (
              <li key={j} className="flex items-start gap-3">
                {isCheck ? (
                  <span className="mt-0.5 shrink-0 text-green-600 font-bold text-sm">✅</span>
                ) : isCross ? (
                  <span className="mt-0.5 shrink-0 text-red-500 font-bold text-sm">❌</span>
                ) : (
                  <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#FFD000]" />
                )}
                <span className="text-[#444] leading-relaxed text-[1rem]">{renderInline(content)}</span>
              </li>
            );
          })}
        </ul>
      );
      continue;
    }

    // Numbered item: **N. Title** — style as a mini heading
    const numberedMatch = block.match(/^\*\*(\d+)\.\s+(.+?)\*\*(\s*[\n][\s\S]*)?$/);
    if (numberedMatch) {
      const [, num, title, rest] = numberedMatch;
      elements.push(
        <div key={i} className="my-6">
          <div className="flex items-start gap-3 mb-2">
            <span className="shrink-0 w-7 h-7 rounded-full bg-[#FFD000]/15 border border-[#FFD000]/30 flex items-center justify-center text-xs font-black text-[#b89200]">
              {num}
            </span>
            <strong className="text-[#111] font-bold text-[1.05rem] leading-snug pt-0.5">{title}</strong>
          </div>
          {rest?.trim() && (
            <p className="text-[#555] leading-[1.85] text-[1.05rem] pl-10">{renderInline(rest.trim())}</p>
          )}
        </div>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={i} className="text-[#444] leading-[1.9] text-[1.05rem] mb-6">
        {renderInline(block)}
      </p>
    );
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = vlogPosts.find((p) => p.id === slug);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: "vlog" });
  const isHe = locale === "he";
  const title = isHe ? post.titleHe : post.titleEn;
  const body = isHe ? post.bodyHe : post.bodyEn;
  const BASE = "https://www.the-videoshop.com";
  const canonical = isHe ? `${BASE}/vlog/${slug}` : `${BASE}/en/vlog/${slug}`;
  const desc = isHe ? post.excerptHe : post.excerptEn;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: desc,
    url: canonical,
    datePublished: post.date,
    dateModified: post.date,
    image: post.coverImage ? `${BASE}${post.coverImage}` : `${BASE}/og-image.jpg`,
    author: { "@type": "Organization", name: "videoshop", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "videoshop",
      logo: { "@type": "ImageObject", url: `${BASE}/favicon.svg` },
    },
    inLanguage: isHe ? "he" : "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };

  return (
    <article className="pt-28 pb-24 px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <BreadcrumbSchema
        locale={locale}
        crumbs={[
          { name: isHe ? "בלוג" : "Blog", path: "/vlog" },
          { name: title, path: `/vlog/${slug}` },
        ]}
      />
      <div className="max-w-3xl mx-auto">

        {/* Back */}
        <Link
          href="/vlog"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#555] hover:text-[#FFD000] uppercase transition-colors mb-12"
        >
          ← {t("backToBlog")}
        </Link>

        {/* Tags + meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {post.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-semibold tracking-[0.3em] text-[#FFD000] uppercase border border-[#FFD000]/40 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
          <span className="text-[#555]/40">·</span>
          <time className="text-xs text-[#555]">
            {new Date(post.date).toLocaleDateString(isHe ? "he-IL" : "en-US", {
              year: "numeric", month: "long", day: "numeric",
            })}
          </time>
          {post.readingTime && (
            <>
              <span className="text-[#555]/40">·</span>
              <span className="text-xs text-[#555]">{post.readingTime} {t("minRead")}</span>
            </>
          )}
        </div>

        {/* Related video — shown before article title if exists */}
        {(post.relatedYoutubeId || post.relatedVimeoId) && (
          <div className="mb-10 rounded-xl overflow-hidden">
            <VideoEmbed
              youtubeId={post.relatedYoutubeId}
              vimeoId={post.relatedVimeoId}
              title={title}
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-black text-[#111] mb-8 leading-[1.1]">
          {title}
        </h1>

        {/* Excerpt / lead */}
        <p className="text-lg md:text-xl text-[#444] leading-relaxed mb-10 border-r-4 border-[#FFD000] pr-5">
          {isHe ? post.excerptHe : post.excerptEn}
        </p>

        {/* Cover image — hero */}
        {post.coverImage && (
          <div className="relative w-full aspect-[16/7] rounded-xl overflow-hidden bg-white border border-gray-200 mb-12">
            <Image
              src={post.coverImage}
              alt={`${title} | videoshop`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        )}

        {/* Body */}
        <div className="mt-2">
          {renderBody(body, post.sectionImages ?? [], title)}
        </div>

        {/* Author bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#FFD000]/20 flex items-center justify-center shrink-0">
            <span className="text-[#FFD000] font-bold text-sm">R</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#111] tracking-tight">videoshop</p>
            <p className="text-xs text-[#555]">
              {isHe ? "סטודיו בוטיק להפקות וידאו ו-AI" : "Boutique Video & AI Production Studio"}
            </p>
          </div>
        </div>

        {/* Related service internal link */}
        {post.relatedServiceHref && (
          <div className="mt-10 flex items-center gap-4 p-5 border border-[#FFD000]/20 rounded-xl bg-[#FFD000]/5">
            <div className="w-px h-10 bg-[#FFD000]/40 shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-widest text-[#FFD000]/80 uppercase mb-1">
                {isHe ? "השירות הרלוונטי" : "Related Service"}
              </p>
              <Link
                href={post.relatedServiceHref}
                className="text-sm font-bold text-[#111] hover:text-[#FFD000] transition-colors"
              >
                {isHe ? post.relatedServiceLabelHe : post.relatedServiceLabelEn} ›
              </Link>
            </div>
          </div>
        )}

        {/* Related posts */}
        {(() => {
          const related = vlogPosts
            .filter((p) => p.id !== slug && p.coverImage)
            .filter((p) => p.tags?.some((t) => post.tags?.includes(t)))
            .slice(0, 2);
          const fallback = related.length < 2
            ? vlogPosts.filter((p) => p.id !== slug && p.coverImage && !related.find((r) => r.id === p.id)).slice(0, 2 - related.length)
            : [];
          const posts2 = [...related, ...fallback].slice(0, 2);
          if (posts2.length === 0) return null;
          return (
            <div className="mt-16 pt-10 border-t border-gray-200">
              <p className="text-[10px] font-semibold tracking-[0.35em] text-[#555]/50 uppercase mb-6">
                {isHe ? "המשך לקרוא" : "Continue Reading"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {posts2.map((rp) => {
                  const rpTitle = isHe ? rp.titleHe : rp.titleEn;
                  return (
                    <Link key={rp.id} href={`/vlog/${rp.id}`} className="group block">
                      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white">
                        {/* Image */}
                        <div className="relative w-full aspect-[16/9] overflow-hidden">
                          <Image
                            src={rp.coverImage!}
                            alt={rpTitle}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, 380px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                        </div>
                        {/* Text over image bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-3">
                          <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 flex-1">
                            {rpTitle}
                          </h3>
                          <span className="shrink-0 w-9 h-9 rounded-full bg-[#FFD000] flex items-center justify-center group-hover:bg-white transition-colors">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={isHe ? "rotate-180" : ""}>
                              <path d="M3 8h10M9 4l4 4-4 4" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })()}

        {/* CTA */}
        <div className="mt-14 p-8 bg-white border border-gray-200 rounded-2xl">
          <p className="text-xs font-semibold tracking-tight text-[#FFD000] mb-3">videoshop</p>
          <h3 className="text-xl md:text-2xl font-black text-[#111] mb-3 leading-tight">
            {isHe
              ? "הפרויקט הבא שלכם מתחיל בשיחה"
              : "Your next project starts with a conversation"}
          </h3>
          <p className="text-sm text-[#555] mb-6 leading-relaxed">
            {isHe
              ? "אנחנו לא עובדים עם כולם. אנחנו עובדים עם מי שרוצה לעשות משהו שייזכרו בו. אם זה נשמע כמוכם, בואו נדבר."
              : "We don't work with everyone. We work with those who want to make something worth remembering. If that sounds like you, let's talk."}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#FFD000] text-[#111] font-bold px-8 py-3.5 rounded-sm hover:bg-[#f0c400] transition-colors text-sm tracking-wide uppercase"
          >
            {isHe ? "בואו נדבר" : "Let's Talk"}
          </Link>
        </div>

      </div>
    </article>
  );
}
