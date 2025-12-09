"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { ContactInfo, HeroBadge, HeroContent } from "@/content/site";
import type { HeroGalleryImage } from "@/content/hero-gallery";

type HeroSectionProps = {
  hero: HeroContent;
  badges: HeroBadge[];
  galleryImages: HeroGalleryImage[];
  contactInfo: ContactInfo;
};

const AUTO_ROTATE_INTERVAL = 5000;
const MANUAL_PAUSE_DURATION = 8000;

export default function HeroSection({
  hero,
  badges,
  galleryImages,
  contactInfo,
}: HeroSectionProps) {
  // Determine if currently open
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const currentHour = now.getHours();
  const isOpen = currentDay === 0 ? currentHour >= 7 && currentHour < 22 : currentHour >= 5 && currentHour < 22;
  const openUntil = currentDay === 0 ? "22:00 Uhr" : "22:00 Uhr";
  const opensAt = currentDay === 0 ? "07:00 Uhr" : "05:00 Uhr";

  const handleMenuClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.querySelector("#speisekarte")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="start" className="section-anchor w-full px-4 pb-8 pt-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-3xl bg-white/90 p-5 shadow-lg shadow-brotart-100 sm:gap-8 sm:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brotart-500 sm:text-sm">{hero.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
            {hero.title.leading}{" "}
            <span className="text-brotart-600 font-[var(--font-playfair)]">{hero.title.highlight}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-stone-600 sm:text-lg">{hero.description}</p>
        </div>

        {/* Opening Status Badge */}
        <div className={`inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-sm font-semibold shadow-md ${
          isOpen 
            ? "bg-green-50 text-green-700 border border-green-200 shadow-green-100" 
            : "bg-amber-50 text-amber-700 border border-amber-200 shadow-amber-100"
        }`}>
          <span className={`h-2 w-2 rounded-full ${isOpen ? "bg-green-500 animate-pulse" : "bg-amber-500"}`}></span>
          <span>
            {isOpen ? `Jetzt geöffnet bis ${openUntil}` : `Öffnet um ${opensAt}`}
          </span>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`tel:${contactInfo.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brotart-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brotart-300/50 transition-all hover:bg-brotart-700 hover:shadow-brotart-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500 sm:text-lg"
          >
            <span aria-hidden="true" className="text-xl leading-none">📞</span>
            <span>Jetzt anrufen</span>
          </a>
          <a
            href="#speisekarte"
            onClick={handleMenuClick}
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brotart-200 bg-white px-6 py-4 text-base font-semibold text-brotart-600 shadow-md transition-all hover:border-brotart-300 hover:bg-brotart-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500 sm:text-lg"
          >
            <span aria-hidden="true" className="text-xl leading-none">🍕</span>
            <span>Speisekarte ansehen</span>
          </a>
        </div>

        {/* Gallery */}
        <HeroGallery images={galleryImages} />

        {/* Trust Badges + WhatsApp mention */}
        <div className="flex flex-wrap items-center gap-3">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs shadow-sm sm:text-sm"
            >
              <span className="font-medium text-stone-950">{badge.label}</span>
              <span className="mx-2 text-stone-300" aria-hidden="true">{"\u00B7"}</span>
              <span className="text-stone-500">{badge.detail}</span>
            </div>
          ))}
        </div>

        {/* WhatsApp Channel - Subtle */}
        <a
          href="https://whatsapp.com/channel/0029VbBa9yiIN9igZCneGa1W"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-green-200 bg-green-50/50 px-4 py-2.5 text-sm font-medium text-green-700 shadow-sm transition-all hover:bg-green-50 hover:border-green-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span>News & Angebote via WhatsApp</span>
          <span aria-hidden="true" className="text-2xl font-bold">→</span>
        </a>
      </div>
    </section>
  );
}

type HeroGalleryProps = {
  images: HeroGalleryImage[];
};

function HeroGallery({ images }: HeroGalleryProps) {
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const derivedIndex = slides.length ? activeIndex % slides.length : 0;

  useEffect(() => {
    if (slides.length <= 1 || isPaused) return undefined;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_ROTATE_INTERVAL);

    return () => window.clearInterval(id);
  }, [slides.length, isPaused]);

  useEffect(() => {
    if (!isPaused) return undefined;
    const timeout = window.setTimeout(() => setIsPaused(false), MANUAL_PAUSE_DURATION);
    return () => window.clearTimeout(timeout);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    if (!slides.length) return;
    const nextIndex = (index + slides.length) % slides.length;
    setActiveIndex(nextIndex);
    if (slides.length > 1) {
      setIsPaused(true);
    }
  };

  const activeSlide = slides[derivedIndex];

  return (
    <div className="space-y-4 rounded-[28px] border border-stone-100/80 bg-gradient-to-b from-white/85 via-white to-white/90 p-4 shadow-inner shadow-brotart-50/40">
      <div className="relative overflow-hidden rounded-2xl bg-stone-950/5 shadow-lg" aria-label="Hero Galerie">
        <div className="relative aspect-[4/3] w-full">
          {slides.map((slide, index) => {
            const shouldRender =
              index === derivedIndex || (slides.length > 1 && index === (derivedIndex + 1) % slides.length);
            if (!shouldRender) return null;

            return (
              <div
                key={`${typeof slide.src === "string" ? slide.src : slide.src.src}-${index}`}
                className={`absolute inset-0 transition duration-700 ease-out ${
                  index === derivedIndex ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
                aria-hidden={index !== derivedIndex}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  fetchPriority={index === 0 ? "high" : undefined}
                  loading={index === 0 ? "eager" : "lazy"}
                  placeholder={typeof slide.src === "string" ? "empty" : "blur"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1100px"
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}

          {!slides.length && (
            <div className="flex h-full items-center justify-center bg-stone-100/80 text-sm font-medium text-stone-500">
              Galerie folgt in Kuerze
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/45 via-stone-950/0" />
          {slides.length > 1 && (
            <>
              <div className="absolute inset-y-0 left-0 flex items-center px-1 sm:px-3">
                <button
                  type="button"
                  onClick={() => goToSlide(derivedIndex - 1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brotart-200 bg-brotart-200/20 text-stone-900 transition hover:-translate-x-0.5 hover:bg-brotart-100/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500"
                >
                  <span className="sr-only">Vorheriges Bild</span>
                  <span aria-hidden="true" className="text-lg leading-none">
                    {"<"}
                  </span>
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center px-1 sm:px-3">
                <button
                  type="button"
                  onClick={() => goToSlide(derivedIndex + 1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brotart-200 bg-brotart-100/20 text-stone-900 transition hover:translate-x-0.5 hover:bg-brotart-100/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500"
                >
                  <span className="sr-only">Naechstes Bild</span>
                  <span aria-hidden="true" className="text-lg leading-none">
                    {">"}
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
        {activeSlide && (
          <span className="sr-only" aria-live="polite">
            {activeSlide.alt}
          </span>
        )}

        {slides.length > 1 && (
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
            {slides.map((slide, index) => {
              const isActive = index === derivedIndex;
              return (
                <button
                  key={`dot-${slide.src}-${index}`}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    isActive ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Bild ${index + 1} anzeigen`}
                  aria-current={isActive ? "true" : undefined}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
