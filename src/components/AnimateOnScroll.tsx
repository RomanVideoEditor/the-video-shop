"use client";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "left" | "scale";
  stagger?: boolean;
  delay?: number;
  threshold?: number;
  tag?: string;
}

export default function AnimateOnScroll({
  children,
  className = "",
  variant = "up",
  stagger = false,
  delay = 0,
  threshold = 0.12,
  tag: Tag = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) el.style.transitionDelay = `${delay}ms`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, threshold]);

  const baseClass =
    variant === "left" ? "reveal-left" : variant === "scale" ? "reveal-scale" : "reveal";

  return (
    <div ref={ref} className={`${baseClass} ${stagger ? "stagger" : ""} ${className}`}>
      {children}
    </div>
  );
}
