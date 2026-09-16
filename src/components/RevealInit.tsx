"use client";
import { useEffect } from "react";

export default function RevealInit() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const applyObs = () => {
      document
        .querySelectorAll(".reveal, .reveal-left, .reveal-scale")
        .forEach((el) => obs.observe(el));
    };

    applyObs();

    // re-observe after route transitions (Next.js SPA navigation)
    const mo = new MutationObserver(applyObs);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      obs.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
