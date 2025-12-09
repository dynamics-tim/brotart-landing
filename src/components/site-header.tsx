"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { CONTACT_INFO, NAV_LINKS } from "@/content/site";

const SECTION_HASHES = NAV_LINKS.filter((link) => link.href.startsWith("#")).map((link) => link.href);

export default function SiteHeader() {
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0]?.href ?? "#start");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionElementsRef = useRef<HTMLElement[]>([]);

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

      const scrollPosition = window.scrollY + 100;
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
      setIsScrolled(window.scrollY > 20);
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
    setIsMenuOpen(false);
  };

  const activeIndex = NAV_LINKS.findIndex((link) => link.href === activeHref);

  return (
    <>
      <header
        className={`sticky top-0 z-20 border-b transition-all duration-300 ${
          isScrolled
            ? "border-white/30 bg-white/95 shadow-sm backdrop-blur-xl"
            : "border-white/20 bg-white/90 backdrop-blur-lg"
        }`}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3 py-3 sm:py-4">
            {/* Logo - Compact on mobile */}
            <Link
              href="#start"
              className="group flex items-center gap-2 sm:gap-3 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500 rounded-full"
              aria-label="Zur Startsektion scrollen"
            >
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-br from-brotart-600 to-brotart-400 text-sm font-bold text-white shadow-lg shadow-brotart-300/50 transition-shadow group-hover:shadow-brotart-400/70">
                {CONTACT_INFO.brandInitials}
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-xs font-bold text-brotart-600">{CONTACT_INFO.brandShort}</p>
                <p className="text-[10px] text-stone-500">Mantije · Burek · Pizza</p>
              </div>
            </Link>

            {/* Progress Dots - Mobile & Tablet only */}
            <div className="lg:hidden flex items-center justify-center gap-1.5 flex-1 px-2">
              {NAV_LINKS.map((link, index) => {
                const isActive = link.href === activeHref;
                return (
                  <button
                    key={link.href}
                    onClick={(event) => {
                      const anchor = event as unknown as MouseEvent<HTMLAnchorElement>;
                      handleNavClick(anchor, link.href);
                    }}
                    className="group p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brotart-500 rounded"
                    aria-label={`Zu ${link.label} springen`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span
                      className={`block rounded-full transition-all ${
                        isActive
                          ? "w-6 h-1.5 bg-brotart-600"
                          : "w-1.5 h-1.5 bg-stone-300 group-hover:bg-brotart-400"
                      }`}
                    ></span>
                  </button>
                );
              })}
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === activeHref;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                      isActive ? "text-brotart-600" : "text-stone-600 hover:text-brotart-500"
                    }`}
                    onClick={(event) => handleNavClick(event, link.href)}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brotart-600"></span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-600 transition-colors hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brotart-500"
              aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Menu Drawer */}
      <nav
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-40 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-stone-200">
            <span className="text-sm font-bold text-brotart-600">{CONTACT_INFO.brandShort}</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-stone-600 transition-colors hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brotart-500"
              aria-label="Menü schließen"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === activeHref;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3 px-6 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-brotart-50 text-brotart-600 border-r-4 border-brotart-600"
                      : "text-stone-700 hover:bg-stone-50"
                  }`}
                  onClick={(event) => handleNavClick(event, link.href)}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="p-4 border-t border-stone-200 bg-stone-50">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-brotart-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-brotart-400/30 transition-all hover:bg-brotart-500 hover:shadow-brotart-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500"
            >
              <span aria-hidden="true">📞</span>
              <span>Jetzt anrufen</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
