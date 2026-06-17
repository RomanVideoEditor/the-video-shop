"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e1e1e] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-[#f5f5f0] mb-3"><span className="text-[#c8a96e]">Video</span>Shop</h3>
            <p className="text-[#6b6b6b] text-sm leading-relaxed mb-4">{t("tagline")}</p>
            <a
              href="mailto:roman@the-videoshop.com"
              className="text-sm text-[#c8a96e] hover:underline"
            >
              roman@the-videoshop.com
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-[#c8a96e] uppercase tracking-widest mb-4">{nav("services")}</h4>
            <ul className="space-y-2">
              {[
                { href: "/services/defense", label: nav("servicesDefense") },
                { href: "/services/realestate", label: nav("servicesRealestate") },
                { href: "/services/corporate", label: nav("servicesCorporate") },
                { href: "/services/ai", label: nav("servicesAI") },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#6b6b6b] hover:text-[#c8a96e] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#c8a96e] uppercase tracking-widest mb-4">Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/portfolio", label: nav("portfolio") },
                { href: "/vlog", label: nav("vlog") },
                { href: "/about", label: nav("about") },
                { href: "/contact", label: nav("contact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#6b6b6b] hover:text-[#c8a96e] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://www.youtube.com/@romangor" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-[#6b6b6b] hover:text-[#c8a96e] transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://wa.me/972544545314" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-[#6b6b6b] hover:text-[#c8a96e] transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1e1e1e] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#6b6b6b]">
            © {year} VideoShop. {t("rights")}.
          </p>
          <Link href="/contact" className="text-xs text-[#6b6b6b] hover:text-[#c8a96e] transition-colors">
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
