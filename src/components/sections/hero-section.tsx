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
  return (
    <section id="start" className="section-anchor w-full px-6 pb-16 pt-4">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-3xl bg-white/90 p-6 shadow-lg shadow-brotart-100 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">{hero.eyebrow}</p>
        <h1 className="text-4xl font-semibold text-stone-900 sm:text-5xl lg:text-6xl">
          {hero.title.leading}{" "}
          <span className="text-brotart-600 font-[var(--font-playfair)]">{hero.title.highlight}</span>{" "}
          {hero.title.trailing}
        </h1>
        <p className="max-w-2xl text-lg text-stone-600">{hero.description}</p>
        <p className="text-base text-brotart-700">{hero.secondary}</p>

        <div className="flex flex-wrap gap-4">
          <a
            href={`tel:${contactInfo.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-brotart-600 px-6 py-3 text-lg font-semibold text-white shadow-lg shadow-brotart-200 transition hover:-translate-y-0.5 hover:bg-brotart-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              ☎
            </span>
            <span>Jetzt anrufen: {contactInfo.displayPhone}</span>
          </a>
          <a
            href={contactInfo.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brotart-200 bg-white px-6 py-3 text-lg font-semibold text-brotart-600 shadow-lg shadow-brotart-50 transition hover:-translate-y-0.5 hover:border-brotart-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              📍
            </span>
            <span>Route planen</span>
          </a>
          <a
            href="https://whatsapp.com/channel/0029VbBa9yiIN9igZCneGa1W"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-6 py-3 text-lg font-semibold text-green-700 shadow-lg shadow-green-100 transition hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              🟢
            </span>
            <span>WhatsApp Kanal</span>
          </a>
        </div>

        {hero.supportingNote && (
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">{hero.supportingNote}</p>
        )}

        <HeroGallery images={galleryImages} />

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
