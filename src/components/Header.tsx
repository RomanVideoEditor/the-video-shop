"use client";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isRTL = locale === "he";

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/portfolio", label: t("portfolio") },
    { href: "/vlog", label: t("vlog") },
    { href: "/contact", label: t("contact") },
  ];

  const serviceLinks = [
    { href: "/services/defense", label: t("servicesDefense") },
    { href: "/services/realestate", label: t("servicesRealestate") },
    { href: "/services/corporate", label: t("servicesCorporate") },
    { href: "/services/ai", label: t("servicesAI") },
  ];

  return (
    <header
      dir="ltr"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1e1e1e]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight transition-colors">
            <span className="text-[#c8a96e] group-hover:text-[#f5f5f0] transition-colors">Video</span><span className="text-[#f5f5f0] group-hover:text-[#c8a96e] transition-colors">Shop</span>
          </span>
        </Link>

        {/* Desktop Nav — flex-row-reverse in RTL so items start from right */}
        <div className={`hidden lg:flex items-center gap-8 ${isRTL ? "flex-row-reverse" : ""}`}>
          {/* Home */}
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-[#c8a96e] ${
              pathname === "/" ? "text-[#c8a96e]" : "text-[#f5f5f0]/80"
            }`}
          >
            {t("home")}
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button className="text-sm font-medium text-[#f5f5f0]/80 hover:text-[#c8a96e] transition-colors flex items-center gap-1.5">
              {t("services")}
              <svg className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div
                className={`absolute top-full w-64 bg-[#111] border border-[#1e1e1e] rounded-xl shadow-2xl py-2 ${isRTL ? "right-0 text-right" : "left-0 text-left"}`}
                style={{ marginTop: "-1px", paddingTop: "10px" }}
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                {/* invisible bridge to prevent gap */}
                <div className="absolute -top-3 left-0 right-0 h-3" />
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#f5f5f0]/70 hover:text-[#c8a96e] hover:bg-[#1a1a1a] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Rest of nav links */}
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#c8a96e] ${
                pathname === link.href ? "text-[#c8a96e]" : "text-[#f5f5f0]/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-[#f5f5f0] mr-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-t border-[#1e1e1e] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#f5f5f0]/80 hover:text-[#c8a96e] transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-[#1e1e1e] pt-4">
            <p className="text-xs text-[#6b6b6b] mb-2">{t("services")}</p>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-[#f5f5f0]/70 hover:text-[#c8a96e] transition-colors py-1.5 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
