"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { DailyOffer, HeroBadge, HeroContent } from "@/content/site";
import type { HeroGalleryImage } from "@/content/hero-gallery";

type HeroSectionProps = {
  hero: HeroContent;
  badges: HeroBadge[];
  dailyOffer: DailyOffer;
  offerDate: string;
  galleryImages: HeroGalleryImage[];
};

const AUTO_ROTATE_INTERVAL = 5000;
const MANUAL_PAUSE_DURATION = 8000;

export default function HeroSection({ hero, badges, dailyOffer, offerDate, galleryImages }: HeroSectionProps) {
  return (
    <section
      id="start"
      className="section-anchor mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 pb-16 pt-4 md:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="flex flex-col gap-8 rounded-3xl bg-white/90 p-6 shadow-lg shadow-brotart-100 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">{hero.eyebrow}</p>
        <h1 className="text-4xl font-semibold text-stone-900 sm:text-5xl lg:text-6xl">
          {hero.title.leading}{" "}
          <span className="text-brotart-600 font-[var(--font-playfair)]">{hero.title.highlight}</span>{" "}
          {hero.title.trailing}
        </h1>
        <p className="max-w-xl text-lg text-stone-600">{hero.description}</p>

        <div className="flex flex-wrap gap-3">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm shadow-sm"
            >
              <span className="font-medium text-stone-950">{badge.label}</span>
              <span className="mx-2 text-stone-300" aria-hidden="true">
                {"\u00B7"}
              </span>
              <span className="text-stone-500">{badge.detail}</span>
            </div>
          ))}
        </div>

        <HeroGallery images={galleryImages} supportingNote={hero.supportingNote} />

        <article className="rounded-2xl border border-brotart-100 bg-brotart-50/80 p-6 shadow-inner">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brotart-500">{dailyOffer.title}</p>
          <div className="mt-2 flex flex-wrap items-baseline gap-3">
            <h2 className="text-3xl font-semibold text-brotart-700">{dailyOffer.offer}</h2>
            <span className="rounded-full bg-white px-3 py-1 text-lg font-semibold text-brotart-600">{dailyOffer.price}</span>
          </div>
          <p className="mt-3 text-sm text-stone-600">{dailyOffer.note}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-stone-400">
            {dailyOffer.tagline} {"\u2013"} {offerDate}
          </p>
        </article>
      </div>
    </section>
  );
}

type HeroGalleryProps = {
  images: HeroGalleryImage[];
  supportingNote: string;
};

function HeroGallery({ images, supportingNote }: HeroGalleryProps) {
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
          {slides.map((slide, index) => (
            <div
              key={`${slide.src}-${index}`}
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
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 640px"
                className="h-full w-full object-cover"
              />
            </div>
          ))}

          {!slides.length && (
            <div className="flex h-full items-center justify-center bg-stone-100/80 text-sm font-medium text-stone-500">
              Galerie folgt in Kuerze
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/45 via-stone-950/0" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 text-white">
            <span className="text-[10px] uppercase tracking-[0.45em] text-white/80">BrotArt Galerie</span>
            <p className="text-base font-medium leading-tight">{supportingNote}</p>
          </div>

          {slides.length > 1 && (
            <>
              <div className="absolute inset-y-0 left-0 flex items-center px-1 sm:px-3">
                <button
                  type="button"
                  onClick={() => goToSlide(derivedIndex - 1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-stone-700 shadow ring-1 ring-white/70 transition hover:-translate-x-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500"
                >
                  <span className="sr-only">Vorheriges Bild</span>
                  <span aria-hidden="true" className="text-lg leading-none">
                    {"\u2190"}
                  </span>
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center px-1 sm:px-3">
                <button
                  type="button"
                  onClick={() => goToSlide(derivedIndex + 1)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-stone-700 shadow ring-1 ring-white/70 transition hover:translate-x-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500"
                >
                  <span className="sr-only">Naechstes Bild</span>
                  <span aria-hidden="true" className="text-lg leading-none">
                    {"\u2192"}
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

      {slides.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {slides.map((slide, index) => {
            const isActive = index === derivedIndex;
            return (
              <button
                key={`thumb-${slide.src}-${index}`}
                type="button"
                onClick={() => goToSlide(index)}
                className={`group relative min-w-[120px] flex-1 rounded-2xl border bg-white/90 p-1 text-left transition hover:-translate-y-0.5 hover:shadow ${
                  isActive ? "border-brotart-300 shadow-brotart-100" : "border-stone-200"
                }`}
                aria-pressed={isActive}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="120px"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-stone-950/35 via-transparent transition ${
                      isActive ? "opacity-70" : "opacity-0 group-hover:opacity-50"
                    }`}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] font-medium text-stone-500">
                  <span>{`Bild ${index + 1}`}</span>
                  {isActive && <span className="text-brotart-600">Live</span>}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
