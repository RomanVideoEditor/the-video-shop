import { Link } from "@/i18n/navigation";

interface ServicePageProps {
  h1: string;
  subtitle: string;
  body1: string;
  body2: string;
  features: string[];
  ctaText: string;
  badge: string;
  schemaType?: string;
}

export default function ServicePage({
  h1,
  subtitle,
  body1,
  body2,
  features,
  ctaText,
  badge,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold tracking-[0.3em] text-[#c8a96e] uppercase border border-[#c8a96e]/30 px-4 py-2 rounded-full">
              {badge}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#f5f5f0] leading-tight mb-6">
            {h1}
          </h1>
          <p className="text-xl text-[#c8a96e] leading-relaxed max-w-2xl font-medium">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 px-6 bg-[#111] border-y border-[#1e1e1e]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="text-[#f5f5f0]/70 leading-relaxed text-lg">{body1}</p>
          <p className="text-[#f5f5f0]/70 leading-relaxed text-lg">{body2}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#f5f5f0] mb-12">מה כולל השירות</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4 p-5 bg-[#111] border border-[#1e1e1e] rounded-xl hover:border-[#c8a96e]/40 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#c8a96e] flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[#f5f5f0]/80 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#111]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#f5f5f0] mb-4">
            {ctaText}
          </h2>
          <p className="text-[#6b6b6b] mb-10">נחזור אליכם תוך יום עסקים עם הצעה מותאמת אישית.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#c8a96e] text-[#0a0a0a] font-bold px-10 py-5 rounded-full hover:bg-[#e8d5a8] transition-colors text-lg"
            >
              צור קשר
            </Link>
            <Link
              href="/portfolio"
              className="border border-[#f5f5f0]/20 text-[#f5f5f0] font-medium px-10 py-5 rounded-full hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors text-lg"
            >
              תיק עבודות
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
