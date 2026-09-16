"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();
  const isHe = locale === "he";

  return (
    <footer className="bg-[#111] text-white border-t border-[#1a1a1a]">
      <div className="max-w-[var(--container)] mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#FFD000] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-[#111]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <span className="font-bold text-white text-[17px] tracking-tight">videoshop</span>
            </div>
            <p className="text-[#888] text-sm leading-relaxed mb-5 max-w-xs">{t("tagline")}</p>
            <a href="mailto:roman@the-videoshop.com" className="text-[#FFD000] hover:text-yellow-300 text-sm font-medium transition-colors duration-150">
              roman@the-videoshop.com
            </a>
            <div className="flex gap-5 mt-5 flex-wrap">
              {[
                { href: "https://www.youtube.com/@romangor",                 label: "YouTube" },
                { href: "https://il.linkedin.com/company/the-video-shop",    label: "LinkedIn" },
                { href: "https://www.facebook.com/Video.Shop.Productions",   label: "Facebook" },
                { href: "https://wa.me/972544545314",                        label: "WhatsApp" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-[#666] hover:text-[#FFD000] transition-colors duration-150 font-medium">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-widest mb-4">
              {isHe ? "שירותים" : "Specialties"}
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/services/hightech",   label: isHe ? "הייטק ו-SaaS"     : "High-Tech & SaaS" },
                { href: "/services/realestate", label: isHe ? "נדל\"ן ואדריכלות" : "Real Estate" },
                { href: "/services/corporate",  label: isHe ? "תדמית וגיוס"      : "Corporate & EB" },
                { href: "/services/ai",         label: isHe ? "הפקות AI"          : "AI Video" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#888] hover:text-white transition-colors duration-150">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-widest mb-4">
              {isHe ? "ניווט" : "Navigation"}
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/portfolio", label: nav("portfolio") },
                { href: "/vlog",      label: nav("vlog") },
                { href: "/about",     label: nav("about") },
                { href: "/contact",   label: nav("contact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#888] hover:text-white transition-colors duration-150">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e1e1e] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#555]">© {year} videoshop. {t("rights")}.</p>
          <span className="text-xs text-[#555]">{t("privacy")}</span>
        </div>
      </div>
    </footer>
  );
}
