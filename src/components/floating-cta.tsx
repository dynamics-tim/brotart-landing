"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/i18n-provider";

export default function FloatingCTA() {
  const { content } = useI18n();
  const { floatingCta, contactInfo } = content;
  
  const [isVisible, setIsVisible] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSection = document.getElementById("start");
      const heroBottom = heroSection ? heroSection.offsetHeight : 800;

      // Show after scrolling past hero section
      const shouldShow = currentScrollY > heroBottom;

      // Hide when scrolling up (non-intrusive)
      const isScrollingUp = currentScrollY < lastScrollY && currentScrollY > heroBottom;

      if (shouldShow && !isScrollingUp) {
        setIsVisible(true);
        setIsHiding(false);
      } else if (isScrollingUp) {
        setIsHiding(true);
        // Delay hiding to avoid flickering
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          if (window.scrollY < lastScrollY) {
            setIsVisible(false);
          }
          setIsHiding(false);
        }, 150);
      } else if (!shouldShow) {
        setIsVisible(false);
        setIsHiding(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  if (!isVisible && !isHiding) return null;

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
        isVisible && !isHiding
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <a
        href={`tel:${contactInfo.phone}`}
        className="group relative flex items-center gap-3 rounded-full bg-gradient-to-r from-brotart-600 to-brotart-500 px-6 py-4 shadow-2xl shadow-brotart-400/40 transition-all hover:shadow-brotart-400/60 active:scale-95 sm:px-8 sm:py-5 animate-glow-pulse"
        aria-label={floatingCta.ariaLabel}
      >
        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className="absolute inset-0 animate-shine" />
        </div>

        {/* Pulsing dot indicator */}
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white animate-float" />
        </span>

        {/* CTA Content */}
        <div className="relative flex flex-col">
          <span className="text-xs font-medium uppercase tracking-wider text-white/90 sm:text-sm">
            {floatingCta.label}
          </span>
        </div>

        {/* Phone icon */}
        <svg
          className="relative h-6 w-6 text-white transition-transform group-hover:scale-110 group-active:rotate-12 sm:h-7 sm:w-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
        </svg>
      </a>

      {/* Price emphasis badge (optional, can be toggled) */}
      {floatingCta.showPriceBadge && (
        <div className="absolute -top-2 -right-2 animate-slide-up-fade">
          <div className="rounded-full bg-gradient-to-br from-green-400 to-green-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-green-400/50 sm:text-sm">
            {floatingCta.priceBadge}
          </div>
        </div>
      )}
    </div>
  );
}
