import { Link } from "@/i18n/navigation";

interface RelatedVideo {
  id: string;
  titleHe: string;
  titleEn: string;
}

interface RelatedPost {
  id: string;
  titleHe: string;
  titleEn: string;
}

interface FAQItem {
  q: string;
  a: string;
}

interface ServicePageProps {
  h1: string;
  subtitle: string;
  body1: string;
  body2: string;
  features: string[];
  ctaText: string;
  badge: string;
  locale?: string;
  relatedVideos?: RelatedVideo[];
  relatedPosts?: RelatedPost[];
  faqItems?: FAQItem[];
}

export default function ServicePage({
  h1,
  subtitle,
  body1,
  body2,
  features,
  ctaText,
  badge,
  locale,
  relatedVideos,
  relatedPosts,
  faqItems,
}: ServicePageProps) {
  const isHe = locale === "he";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: h1,
    description: subtitle,
    provider: {
      "@type": "LocalBusiness",
      name: "The Video Shop",
      url: "https://www.the-videoshop.com",
    },
    areaServed: { "@type": "Country", name: "Israel" },
    inLanguage: isHe ? "he" : "en",
  };

  const faqSchema = faqItems && faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  } : null;

  const schema = serviceSchema;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-[#111]">
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #FFD000 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6" style={{ animation: "fadeInUp .45s ease both" }}>
            <span className="text-xs font-semibold tracking-[0.3em] bg-[#FFD000] text-[#111] uppercase px-4 py-2 rounded-full">
              {badge}
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-6"
            style={{ animation: "fadeInUp .5s .08s ease both" }}
          >
            {h1}
          </h1>
          <p
            className="text-xl text-[#FFD000] leading-relaxed max-w-2xl font-medium"
            style={{ animation: "fadeInUp .5s .16s ease both" }}
          >
            {subtitle}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 px-6 bg-[#111] border-y border-gray-200">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="text-[#aaa] leading-relaxed text-lg reveal">{body1}</p>
          <p className="text-[#aaa] leading-relaxed text-lg reveal">{body2}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#111] mb-12 reveal">
            {isHe ? "מה כולל השירות" : "What's included"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-[#FFD000]/40 card-lift transition-colors reveal"
              >
                <div className="w-5 h-5 rounded-full bg-[#FFD000] flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-[#111]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#111]/80 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Videos */}
      {relatedVideos && relatedVideos.length > 0 && (
        <section className="py-20 px-6 bg-[#111]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-10 reveal">
              {isHe ? "צפו בדוגמאות מהז'אנר" : "Watch examples from this genre"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedVideos.map((v) => (
                <a
                  key={v.id}
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-video bg-[#222] rounded-xl overflow-hidden hover:ring-2 hover:ring-[#FFD000] transition-all duration-200"
                  aria-label={isHe ? v.titleHe : v.titleEn}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                    alt={isHe ? v.titleHe : v.titleEn}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-[#FFD000] rounded-full flex items-center justify-center opacity-90 group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-4 h-4 text-black ms-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 start-0 end-0 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-xs font-semibold leading-snug">
                      {isHe ? v.titleHe : v.titleEn}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Blog Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#111] mb-8 reveal">
              {isHe ? "קראו עוד בבלוג" : "Read more on the blog"}
            </h2>
            <div className="flex flex-col gap-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/vlog/${post.id}`}
                  className="group flex items-center gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-[#FFD000] transition-colors duration-200 reveal"
                >
                  <div className="w-2 h-2 rounded-full bg-[#FFD000] shrink-0" />
                  <span className="text-[#111] font-medium group-hover:text-[#111] transition-colors">
                    {isHe ? post.titleHe : post.titleEn}
                  </span>
                  <svg
                    className={`w-4 h-4 text-[#111]/30 group-hover:text-[#FFD000] transition-colors ms-auto shrink-0 ${isHe ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <section className="py-20 px-6 bg-[#f4f4f4]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#111] mb-10 reveal">
              {isHe ? "שאלות נפוצות" : "Frequently Asked Questions"}
            </h2>
            <div className="flex flex-col gap-4">
              {faqItems.map((item, i) => (
                <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden reveal">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer font-semibold text-[#111] list-none select-none hover:bg-gray-50 transition-colors">
                    <span>{item.q}</span>
                    <svg className="w-5 h-5 text-[#FFD000] shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-5 text-[#555] leading-relaxed text-[15px]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-6 bg-[#111] relative overflow-hidden">
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(ellipse, #FFD000 0%, transparent 70%)" }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10 reveal">
          <h2 className="text-3xl font-bold text-white mb-4 shimmer-text">
            {ctaText}
          </h2>
          <p className="text-[#aaa] mb-10">
            {isHe
              ? "נחזור אליכם תוך יום עסקים עם הצעה מותאמת אישית."
              : "We'll get back to you within one business day with a tailored proposal."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FFD000] text-[#111] font-bold px-10 py-5 rounded-full hover:bg-[#f0c400] transition-colors text-lg animate-pulse-glow btn-bounce"
            >
              {isHe ? "צור קשר" : "Get in touch"}
            </Link>
            <Link
              href="/portfolio"
              className="border border-[#f5f5f0]/20 text-white font-medium px-10 py-5 rounded-full hover:border-[#FFD000] hover:text-[#FFD000] transition-colors text-lg"
            >
              {isHe ? "תיק עבודות" : "Portfolio"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
