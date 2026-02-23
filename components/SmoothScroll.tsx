"use client";

import { useEffect } from "react";

// Custom smooth scroll with easing for same-page anchor links
// Gives a slower, more controlled feel than browser-default smooth scroll
export default function SmoothScroll() {
  useEffect(() => {
    function smoothScrollTo(target: HTMLElement, duration = 1100) {
      const navbarHeight = 77;
      const start = window.scrollY;
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      const startTime = performance.now();

      function easeInOutQuart(t: number): number {
        return t < 0.5
          ? 8 * t * t * t * t
          : 1 - Math.pow(-2 * t + 2, 4) / 2;
      }

      function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start + (targetTop - start) * easeInOutQuart(progress));
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    }

    function handleClick(e: MouseEvent) {
      const anchor = (e.target as Element).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const id = href.slice(1);
      const targetEl = document.getElementById(id);
      if (targetEl) {
        e.preventDefault();
        smoothScrollTo(targetEl);
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
