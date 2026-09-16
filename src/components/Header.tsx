"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isRTL = locale === "he";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/services",  label: t("services") },
    { href: "/portfolio", label: t("portfolio") },
    { href: "/vlog",      label: t("vlog") },
    { href: "/about",     label: t("about") },
  ];
  const otherLocale = locale === "he" ? "en" : "he";

  return (
    <header
      dir="ltr"
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
        scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,.08)]" : "border-b border-[#e5e5e5]"
      }`}
    >
      <nav className="max-w-[var(--container)] mx-auto px-6 flex items-center justify-between h-[64px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-[#FFD000] rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="font-bold text-[#111] text-[17px] tracking-tight">videoshop</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-[#555] hover:text-[#111] transition-colors duration-150 group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#FFD000] rounded-full transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Right: lang + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href={pathname}
            locale={otherLocale as "he" | "en"}
            aria-label={locale === "he" ? "Switch to English" : "עבור לעברית"}
            className="hover:scale-110 transition-transform duration-150 inline-block"
            title={locale === "he" ? "English" : "עברית"}
          >
            <img
              src={locale === "he"
                ? "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1fa-1f1f8.svg"
                : "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ee-1f1f1.svg"}
              alt=""
              width={28}
              height={28}
              className="rounded-sm"
            />
          </Link>
          <Link
            href="/contact"
            className="bg-[#FFD000] hover:bg-[#f0c400] text-[#111] font-bold px-5 py-2.5 rounded-full text-sm transition-colors duration-150"
          >
            {isRTL ? "קבל הצעת מחיר" : "Get a Quote"}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-[#111]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e5e5e5] px-6 py-5 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#555] hover:text-[#111] font-medium py-1.5 text-sm border-b border-[#f0f0f0] last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <Link
              href={pathname}
              locale={otherLocale as "he" | "en"}
              onClick={() => setMenuOpen(false)}
              className="inline-block"
            >
              <img
                src={locale === "he"
                  ? "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1fa-1f1f8.svg"
                  : "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ee-1f1f1.svg"}
                alt=""
                width={32}
                height={32}
                className="rounded-sm"
              />
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex-1 bg-[#FFD000] text-[#111] font-bold px-5 py-3 rounded-full text-sm text-center"
            >
              {isRTL ? "קבל הצעת מחיר" : "Get a Quote"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
