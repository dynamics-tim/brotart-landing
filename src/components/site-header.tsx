"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import LanguageSwitcher from "@/components/language-switcher";
import { useI18n } from "@/i18n/i18n-provider";

export default function SiteHeader() {
  const { content } = useI18n();
  const { nav, contactInfo } = content;

  const sectionHashes = useMemo(
    () => nav.links.filter((link) => link.href.startsWith("#")).map((link) => link.href),
    [nav.links]
  );

  const [activeHref, setActiveHref] = useState(nav.links[0]?.href ?? "#start");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const recomputeSections = () => {
      sectionElementsRef.current = sectionHashes
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
  }, [sectionHashes]);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      document.querySelector<HTMLElement>(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveHref(href);
    setIsMenuOpen(false);
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.querySelector("#start")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveHref("#start");
  };

  return (
    <>
      <header
        className={`sticky top-0 z-20 border-b transition-all duration-300 ${
          isScrolled ? "border-white/30 bg-white/95 shadow-sm backdrop-blur-xl" : "border-white/20 bg-white/90 backdrop-blur-lg"
        }`}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between gap-3 py-3 sm:py-4">
            <Link
              href="#start"
              onClick={handleLogoClick}
              className="group flex items-center gap-2 sm:gap-3 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500 rounded-full"
              aria-label={nav.logoAriaLabel}
            >
              <div className="flex h-9 w-auto sm:h-10 items-center justify-center rounded-full bg-gradient-to-br from-brotart-600 to-brotart-400 px-2.5 sm:px-3 text-xs sm:text-sm font-black text-white shadow-lg shadow-brotart-300/50 transition-shadow group-hover:shadow-brotart-400/70 font-[var(--font-orbitron)] tracking-wider italic">
                {contactInfo.brandInitials}
              </div>
              <div className="hidden sm:block leading-tight">
                <p className="text-xs font-bold text-brotart-600">{contactInfo.brandShort}</p>
                <p className="text-[10px] text-stone-500">{nav.desktopTagline}</p>
              </div>
            </Link>

            <div className="lg:hidden flex items-center justify-center gap-1.5 flex-1 px-2">
              {nav.links.map((link) => {
                const isActive = link.href === activeHref;
                return (
                  <button
                    key={link.href}
                    onClick={(event) => {
                      const anchor = event as unknown as MouseEvent<HTMLAnchorElement>;
                      handleNavClick(anchor, link.href);
                    }}
                    className="group p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brotart-500 rounded"
                    aria-label={`${nav.jumpToLabel} ${link.label} springen`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span
                      className={`block rounded-full transition-all ${
                        isActive ? "w-6 h-1.5 bg-brotart-600" : "w-1.5 h-1.5 bg-stone-300 group-hover:bg-brotart-400"
                      }`}
                    ></span>
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <nav aria-label={nav.mainNavLabel} className="flex items-center gap-1">
                {nav.links.map((link) => {
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
              <LanguageSwitcher variant="desktop" />
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-600 transition-colors hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brotart-500"
              aria-label={isMenuOpen ? nav.closeLabel : nav.openLabel}
              aria-expanded={isMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      <nav
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-40 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label={nav.mobileNavLabel}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-stone-200">
            <span className="text-sm font-bold text-brotart-600">{contactInfo.brandShort}</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-stone-600 transition-colors hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brotart-500"
              aria-label={nav.closeLabel}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            {nav.links.map((link) => {
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

            <div className="mt-4 pt-4 border-t border-stone-200">
              <Link
                href="/impressum"
                className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-stone-600 hover:bg-stone-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {nav.legalLinks.impressum}
              </Link>
              <Link
                href="/datenschutz"
                className="flex items-center gap-3 px-6 py-3 text-sm font-medium text-stone-600 hover:bg-stone-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {nav.legalLinks.privacy}
              </Link>
            </div>
          </div>

          <div className="p-4 border-t border-stone-200 bg-stone-50">
            <div className="flex items-center gap-3">
              <LanguageSwitcher variant="mobile" />
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brotart-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-brotart-400/30 transition-all hover:bg-brotart-500 hover:shadow-brotart-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500"
              >
                <span aria-hidden="true">{"\u260E"}</span>
                <span>{nav.callLabel}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
