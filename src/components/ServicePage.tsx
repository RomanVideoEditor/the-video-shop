import { Link } from "@/i18n/navigation";

interface ServicePageProps {
  h1: string;
  subtitle: string;
  body1: string;
  body2: string;
  features: string[];
  ctaText: string;
  badge: string;
  locale?: string;
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
}: ServicePageProps) {
  const schema = {
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
    inLanguage: locale === "he" ? "he" : "en",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Subtle orb */}
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #FFD000 0%, transparent 70%)" }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6" style={{ animation: "fadeInUp .45s ease both" }}>
            <span className="text-xs font-semibold tracking-[0.3em] text-[#FFD000] uppercase border border-[#FFD000]/30 px-4 py-2 rounded-full">
              {badge}
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl font-black text-[#111] leading-tight mb-6"
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
          <h2 className="text-2xl font-bold text-[#111] mb-12 reveal">מה כולל השירות</h2>
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
          <p className="text-[#aaa] mb-10">נחזור אליכם תוך יום עסקים עם הצעה מותאמת אישית.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FFD000] text-[#111] font-bold px-10 py-5 rounded-full hover:bg-[#f0c400] transition-colors text-lg animate-pulse-glow btn-bounce"
            >
              צור קשר
            </Link>
            <Link
              href="/portfolio"
              className="border border-[#f5f5f0]/20 text-white font-medium px-10 py-5 rounded-full hover:border-[#FFD000] hover:text-[#FFD000] transition-colors text-lg"
            >
              תיק עבודות
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
