"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { CONTACT_INFO, NAV_LINKS } from "@/content/site";

export default function SiteHeader() {
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0]?.href ?? "#start");
  const [showBrandBar, setShowBrandBar] = useState(true);

  const sectionIds = useMemo(() => NAV_LINKS.map((link) => link.href).filter((href) => href.startsWith("#")), []);
  const sectionElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const recomputeSections = () => {
      sectionElementsRef.current = sectionIds
        .map((hash) => document.getElementById(hash.slice(1)))
        .filter((el): el is HTMLElement => Boolean(el));
    };

    const determineActiveSection = () => {
      const sections = sectionElementsRef.current;
      if (!sections.length) return;

      const scrollPosition = window.scrollY + 140; // accounts for sticky header height
      let currentId = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentId = section.id;
        } else {
          break;
        }
      }

      setActiveHref((prev) => {
        const nextHref = `#${currentId}`;
        return prev === nextHref ? prev : nextHref;
      });
    };

    const handleScroll = () => {
      setShowBrandBar(window.scrollY < 40);
      determineActiveSection();
    };

    const handleResize = () => {
      recomputeSections();
      determineActiveSection();
    };

    recomputeSections();
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [sectionIds]);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector<HTMLElement>(href);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveHref(href);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-white/40 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div
          className={`flex items-center gap-4 overflow-hidden transition-all duration-300 ${
            showBrandBar
              ? "max-h-24 opacity-100 translate-y-0 py-4"
              : "pointer-events-none -translate-y-2 max-h-0 opacity-0"
          }`}
        >
          <Link
            href="#start"
            className="flex min-w-max items-center gap-3 rounded-full border border-white/70 bg-white/95 px-3 py-2 shadow-sm shadow-white/60 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brotart-500"
            aria-label="Zur Startsektion scrollen"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brotart-600 to-brotart-400 text-sm font-semibold text-white shadow-md shadow-brotart-300">
              BA
            </div>
            <div className="leading-tight">
              <p className="text-[11px] uppercase tracking-[0.45em] text-stone-400">BrotArt</p>
              <p className="text-sm font-semibold text-stone-900">Bäckerei & Grill</p>
              <p className="text-[11px] text-stone-500">Handwerk & Balkan-Flair</p>
            </div>
          </Link>

          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="ml-auto inline-flex items-center rounded-full bg-brotart-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brotart-400 transition hover:bg-brotart-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500"
          >
            {CONTACT_INFO.displayPhone}
          </a>
        </div>

        <nav
          aria-label="Hauptnavigation"
          className="flex flex-wrap items-center justify-center gap-2 border-t border-white/70 py-3 text-sm font-medium text-stone-600"
        >
          {NAV_LINKS.map((link) => {
            const isActive = link.href === activeHref;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center rounded-full px-3.5 py-1.5 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-brotart-500 ${
                  isActive ? "bg-brotart-600 text-white shadow-sm shadow-brotart-300" : "hover:bg-brotart-50"
                }`}
                onClick={(event) => handleNavClick(event, link.href)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
