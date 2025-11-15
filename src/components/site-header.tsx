"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { CONTACT_INFO, NAV_LINKS } from "@/content/site";

const SECTION_HASHES = NAV_LINKS.filter((link) => link.href.startsWith("#")).map((link) => link.href);

export default function SiteHeader() {
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0]?.href ?? "#start");
  const [showBrandBar, setShowBrandBar] = useState(true);

  const sectionElementsRef = useRef<HTMLElement[]>([]);
  const showBrandBarRef = useRef(true);

  useEffect(() => {
    const recomputeSections = () => {
      sectionElementsRef.current = SECTION_HASHES
        .map((hash) => document.getElementById(hash.slice(1)))
        .filter((el): el is HTMLElement => Boolean(el))
        .sort((a, b) => a.offsetTop - b.offsetTop);
    };

    const determineActiveSection = () => {
      const sections = sectionElementsRef.current;
      if (!sections.length) return;

      const scrollPosition = window.scrollY + 140;
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

    const updateBrandBarVisibility = () => {
      const shouldShow = window.scrollY <= 1;
      if (shouldShow !== showBrandBarRef.current) {
        showBrandBarRef.current = shouldShow;
        setShowBrandBar(shouldShow);
      }
    };

    const handleScroll = () => {
      updateBrandBarVisibility();
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
  }, []);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      document.querySelector<HTMLElement>(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveHref(href);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-white/40 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div
          className="overflow-hidden transition-[max-height] duration-200"
          style={{ maxHeight: showBrandBar ? "80px" : "0px" }}
        >
          <div
            className={`flex items-center gap-4 py-3 transition duration-200 ${
              showBrandBar
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-3 opacity-0 pointer-events-none"
            }`}
          >
            <Link
              href="#start"
              className="flex min-w-max items-center gap-3 rounded-full border border-white/70 bg-white/95 px-3 py-2 shadow-sm shadow-white/60 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brotart-500"
              aria-label="Zur Startsektion scrollen"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brotart-600 to-brotart-400 text-sm font-semibold text-white shadow-md shadow-brotart-300">
                {CONTACT_INFO.brandInitials}
              </div>
              <div className="leading-tight">
                <p className="text-[11px] uppercase tracking-[0.45em] text-stone-400">{CONTACT_INFO.brandShort}</p>
                <p className="text-sm font-semibold text-stone-900">Bäckerei · Pizza · Grill</p>
                <p className="text-[11px] text-stone-500">Mantije · Burek · Pizza</p>
              </div>
            </Link>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="ml-auto inline-flex items-center justify-center gap-2 rounded-full bg-brotart-600 px-5 py-2 text-sm font-semibold text-white text-center shadow-sm shadow-brotart-400 transition hover:bg-brotart-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500"
            >
              <span aria-hidden="true" className="text-base leading-none">
                📞
              </span>
              <span className="leading-tight">{CONTACT_INFO.displayPhone}</span>
            </a>
          </div>
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
