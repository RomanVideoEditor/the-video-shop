import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { vlogPosts } from "@/lib/videos";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import VideoEmbed from "@/components/VideoEmbed";

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
  const BASE = "https://thevideoshop.co.il";
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

// Render rich body: ## h2, ### h3, **bold** inline, [IMAGE] placeholder, paragraphs
function renderBody(text: string, coverImage: string | undefined, imageAlt: string) {
  const blocks = text.split(/\n\n+/);
  const elements: React.ReactNode[] = [];
  let imageInserted = false;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i].trim();
    if (!block) continue;

    if (block === "[IMAGE]") {
      imageInserted = true;
      elements.push(
        <figure key={`img-${i}`} className="my-12 -mx-4 md:-mx-12">
          <div className="relative w-full aspect-[16/7] rounded-xl overflow-hidden bg-[#111] border border-[#1e1e1e]">
            {coverImage ? (
              <Image
                src={coverImage}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#6b6b6b] text-xs tracking-widest uppercase">Image placeholder</span>
              </div>
            )}
          </div>
        </figure>
      );
      continue;
    }

    if (block.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl md:text-3xl font-black text-[#f5f5f0] mt-14 mb-5 leading-tight">
          {block.slice(3)}
        </h2>
      );
      continue;
    }

    if (block.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-[#c8a96e] mt-10 mb-4">
          {block.slice(4)}
        </h3>
      );
      continue;
    }

    if (block === "---") {
      elements.push(<hr key={i} className="border-[#1e1e1e] my-12" />);
      continue;
    }

    // Regular paragraph — handle **bold** inline
    const parts = block.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={j} className="text-[#f5f5f0] font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    elements.push(
      <p key={i} className="text-[#f5f5f0]/65 leading-[1.85] text-[1.05rem] mb-6">
        {rendered}
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

  return (
    <article className="pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Back */}
        <Link
          href="/vlog"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#6b6b6b] hover:text-[#c8a96e] uppercase transition-colors mb-12"
        >
          ← {t("backToBlog")}
        </Link>

        {/* Tags + meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {post.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-semibold tracking-[0.3em] text-[#c8a96e] uppercase border border-[#c8a96e]/25 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
          <span className="text-[#6b6b6b]/40">·</span>
          <time className="text-xs text-[#6b6b6b]">
            {new Date(post.date).toLocaleDateString(isHe ? "he-IL" : "en-US", {
              year: "numeric", month: "long", day: "numeric",
            })}
          </time>
          {post.readingTime && (
            <>
              <span className="text-[#6b6b6b]/40">·</span>
              <span className="text-xs text-[#6b6b6b]">{post.readingTime} {t("minRead")}</span>
            </>
          )}
        </div>

        {/* Related video — shown before article title if exists */}
        {(post.relatedYoutubeId || post.relatedVimeoId) && (
          <div className="mb-10 rounded-xl overflow-hidden border border-[#1e1e1e] shadow-2xl">
            <VideoEmbed
              youtubeId={post.relatedYoutubeId}
              vimeoId={post.relatedVimeoId}
              title={title}
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-black text-[#f5f5f0] mb-8 leading-[1.1]">
          {title}
        </h1>

        {/* Excerpt / lead */}
        <p className="text-lg md:text-xl text-[#c8a96e]/80 leading-relaxed mb-10 border-r-2 border-[#c8a96e]/30 pr-5">
          {isHe ? post.excerptHe : post.excerptEn}
        </p>

        {/* Cover image — hero */}
        {post.coverImage && (
          <div className="relative w-full aspect-[16/7] rounded-xl overflow-hidden bg-[#111] border border-[#1e1e1e] mb-12">
            <Image
              src={post.coverImage}
              alt={`${title} | The Video Shop`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        )}

        {/* Body */}
        <div className="mt-2">
          {renderBody(body, post.coverImage, title)}
        </div>

        {/* Author bar */}
        <div className="mt-16 pt-8 border-t border-[#1e1e1e] flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#c8a96e]/20 flex items-center justify-center shrink-0">
            <span className="text-[#c8a96e] font-bold text-sm">R</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#f5f5f0]">The Video Shop</p>
            <p className="text-xs text-[#6b6b6b]">
              {isHe ? "סטודיו בוטיק להפקות וידאו ו-AI" : "Boutique Video & AI Production Studio"}
            </p>
          </div>
        </div>

        {/* Related service internal link */}
        {post.relatedServiceHref && (
          <div className="mt-10 flex items-center gap-4 p-5 border border-[#c8a96e]/20 rounded-xl bg-[#c8a96e]/5">
            <div className="w-px h-10 bg-[#c8a96e]/40 shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-widest text-[#c8a96e]/60 uppercase mb-1">
                {isHe ? "השירות הרלוונטי" : "Related Service"}
              </p>
              <Link
                href={post.relatedServiceHref}
                className="text-sm font-bold text-[#f5f5f0] hover:text-[#c8a96e] transition-colors"
              >
                {isHe ? post.relatedServiceLabelHe : post.relatedServiceLabelEn} ›
              </Link>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 p-8 bg-[#111] border border-[#1e1e1e] rounded-2xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c8a96e]/60 uppercase mb-3">The Video Shop</p>
          <h3 className="text-xl md:text-2xl font-black text-[#f5f5f0] mb-3 leading-tight">
            {isHe
              ? "הפרויקט הבא שלכם מתחיל בשיחה"
              : "Your next project starts with a conversation"}
          </h3>
          <p className="text-sm text-[#6b6b6b] mb-6 leading-relaxed">
            {isHe
              ? "אנחנו לא עובדים עם כולם — אנחנו עובדים עם מי שרוצה לעשות משהו שייזכרו בו. אם זה נשמע כמוכם, בואו נדבר."
              : "We don't work with everyone — we work with those who want to make something worth remembering. If that sounds like you, let's talk."}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#c8a96e] text-[#0a0a0a] font-bold px-8 py-3.5 rounded-sm hover:bg-[#e8d5a8] transition-colors text-sm tracking-wide uppercase"
          >
            {isHe ? "בואו נדבר" : "Let's Talk"}
          </Link>
        </div>

      </div>
    </article>
  );
}
