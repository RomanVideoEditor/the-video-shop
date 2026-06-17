"use client";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";

export default function LangSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const otherLocale = locale === "he" ? "en" : "he";
  const flag = locale === "he" ? "🇺🇸" : "🇮🇱";

  return (
    <Link
      href={pathname}
      locale={otherLocale as "he" | "en"}
      className="fixed top-4 right-4 z-[100] text-2xl w-10 h-10 flex items-center justify-center rounded-full bg-[#0a0a0a]/80 backdrop-blur border border-[#1e1e1e] hover:border-[#c8a96e]/60 transition-all shadow-lg"
      aria-label={locale === "he" ? "Switch to English" : "עבור לעברית"}
    >
      {flag}
    </Link>
  );
}
