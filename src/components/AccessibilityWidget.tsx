"use client";
import { useState, useEffect, useCallback } from "react";

interface Feature {
  key: string;
  labelHe: string;
  labelEn: string;
  icon: string;
  action: (active: boolean) => void;
}

export default function AccessibilityWidget({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Record<string, boolean>>({});
  const isHe = locale === "he";

  const applyFontSize = useCallback((increase: boolean) => {
    const html = document.documentElement;
    if (increase) {
      html.style.fontSize = "120%";
    } else {
      html.style.fontSize = "";
    }
  }, []);

  const applyHighContrast = useCallback((on: boolean) => {
    if (on) {
      document.documentElement.setAttribute("data-contrast", "high");
    } else {
      document.documentElement.removeAttribute("data-contrast");
    }
  }, []);

  const applyGrayscale = useCallback((on: boolean) => {
    document.documentElement.style.filter = on ? "grayscale(100%)" : "";
  }, []);

  const applyReadableFont = useCallback((on: boolean) => {
    document.documentElement.style.fontFamily = on
      ? "Arial, sans-serif"
      : "";
  }, []);

  const applyHighlightLinks = useCallback((on: boolean) => {
    const style = document.getElementById("a11y-links");
    if (on) {
      const el = document.createElement("style");
      el.id = "a11y-links";
      el.textContent = "a { outline: 2px solid #c8a96e !important; outline-offset: 2px !important; }";
      document.head.appendChild(el);
    } else {
      style?.remove();
    }
  }, []);

  const applyStopAnimations = useCallback((on: boolean) => {
    const style = document.getElementById("a11y-animations");
    if (on) {
      const el = document.createElement("style");
      el.id = "a11y-animations";
      el.textContent = "*, *::before, *::after { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }";
      document.head.appendChild(el);
    } else {
      style?.remove();
    }
  }, []);

  const features: Feature[] = [
    {
      key: "fontSize",
      labelHe: "הגדלת טקסט",
      labelEn: "Larger Text",
      icon: "A+",
      action: applyFontSize,
    },
    {
      key: "contrast",
      labelHe: "ניגודיות גבוהה",
      labelEn: "High Contrast",
      icon: "◑",
      action: applyHighContrast,
    },
    {
      key: "grayscale",
      labelHe: "גווני אפור",
      labelEn: "Grayscale",
      icon: "⬜",
      action: applyGrayscale,
    },
    {
      key: "readableFont",
      labelHe: "פונט קריא",
      labelEn: "Readable Font",
      icon: "Aa",
      action: applyReadableFont,
    },
    {
      key: "links",
      labelHe: "הדגשת קישורים",
      labelEn: "Highlight Links",
      icon: "🔗",
      action: applyHighlightLinks,
    },
    {
      key: "stopAnimations",
      labelHe: "עצור אנימציות",
      labelEn: "Stop Animations",
      icon: "⏸",
      action: applyStopAnimations,
    },
  ];

  const toggle = (feature: Feature) => {
    const next = !active[feature.key];
    setActive((prev) => ({ ...prev, [feature.key]: next }));
    feature.action(next);
  };

  const resetAll = () => {
    features.forEach((f) => f.action(false));
    setActive({});
    document.documentElement.style.fontSize = "";
    document.documentElement.style.filter = "";
    document.documentElement.style.fontFamily = "";
    document.documentElement.removeAttribute("data-contrast");
    document.getElementById("a11y-links")?.remove();
    document.getElementById("a11y-animations")?.remove();
  };

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Trigger button — bottom left, above cookie banner */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={isHe ? "פתח תפריט נגישות" : "Open accessibility menu"}
        aria-expanded={open}
        className="fixed bottom-6 left-4 z-[190] w-12 h-12 rounded-full bg-[#c8a96e] text-[#0a0a0a] flex items-center justify-center shadow-lg hover:bg-[#e8d5a8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c8a96e] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
      >
        {/* Wheelchair / accessibility icon */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
          <circle cx="12" cy="4" r="2" />
          <path d="M10 7.5C10 7.5 8 8 8 10v5h2v-4h4v-1.5L12 8h-2zm2 5.5v5h2v-5h-2zm-4 2.5l-2 4h2l1.5-3H10v-1zm6.5 1.5c-.28 0-.5.22-.5.5v3h-3v2h4.5c.28 0 .5-.22.5-.5v-4.5c0-.28-.22-.5-.5-.5z" />
        </svg>
      </button>

      {/* Panel */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[195] bg-black/20 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label={isHe ? "תפריט נגישות" : "Accessibility menu"}
            className="fixed bottom-20 left-4 z-[200] w-72 bg-[#111] border border-[#1e1e1e] rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-[#1e1e1e] flex items-center justify-between">
              <h2 className="font-bold text-[#f5f5f0] text-sm">
                {isHe ? "הגדרות נגישות" : "Accessibility Settings"}
              </h2>
              <button
                onClick={() => setOpen(false)}
                aria-label={isHe ? "סגור" : "Close"}
                className="text-[#6b6b6b] hover:text-[#f5f5f0] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Features grid */}
            <div className="p-4 grid grid-cols-2 gap-2">
              {features.map((feature) => (
                <button
                  key={feature.key}
                  onClick={() => toggle(feature)}
                  aria-pressed={!!active[feature.key]}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl border text-xs font-medium transition-all ${
                    active[feature.key]
                      ? "bg-[#c8a96e]/20 border-[#c8a96e] text-[#c8a96e]"
                      : "bg-[#0a0a0a] border-[#1e1e1e] text-[#6b6b6b] hover:border-[#c8a96e]/40 hover:text-[#f5f5f0]"
                  }`}
                >
                  <span className="text-lg leading-none" aria-hidden="true">{feature.icon}</span>
                  <span>{isHe ? feature.labelHe : feature.labelEn}</span>
                </button>
              ))}
            </div>

            {/* Reset */}
            <div className="px-4 pb-4">
              <button
                onClick={resetAll}
                className="w-full text-xs text-[#6b6b6b] hover:text-[#f5f5f0] border border-[#1e1e1e] rounded-lg py-2 transition-colors"
              >
                {isHe ? "איפוס הכל" : "Reset All"}
              </button>
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-[#1e1e1e] bg-[#0a0a0a]">
              <p className="text-[10px] text-[#3a3a3a] text-center">
                VideoShop · Accessibility
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
