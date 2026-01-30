"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useI18n } from "@/i18n/i18n-provider";
import type { HeroGalleryImage } from "@/content/hero-gallery";

const AUTO_ROTATE_INTERVAL = 8000; // 8 seconds between slides

export default function HeroSection() {
  const { content } = useI18n();
  const { hero, contactInfo } = content;
  const galleryImages = hero.galleryImages;
  const badges = hero.badges;

  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const currentHour = now.getHours();
  const isOpen = currentDay === 0 ? currentHour >= 7 && currentHour < 22 : currentHour >= 5 && currentHour < 22;
  const openUntil = hero.status.openUntil;
  const opensAt = currentDay === 0 ? hero.status.opensAtSunday : hero.status.opensAtWeekday;

  const handleMenuClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.querySelector("#speisekarte")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="start" className="section-anchor w-full px-4 pb-8 pt-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-3xl bg-white/90 p-5 shadow-lg shadow-brotart-100 sm:gap-8 sm:p-8">
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brotart-500 sm:text-sm">
            {hero.content.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
            {hero.content.title.leading}{" "}
            <span className="text-brotart-600 font-[var(--font-playfair)]">{hero.content.title.highlight}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-stone-600 sm:text-lg">{hero.content.description}</p>
        </div>

        <div
          className={`opacity-0 animate-fade-in-up inline-flex items-center gap-2 self-center sm:self-start rounded-full px-4 py-2 text-sm font-semibold shadow-md ${
            isOpen
              ? "bg-green-50 text-green-700 border border-green-200 shadow-green-100"
              : "bg-amber-50 text-amber-700 border border-amber-200 shadow-amber-100"
          }`}
          style={{ animationDelay: "100ms" }}
        >
          <span className={`h-2 w-2 rounded-full ${isOpen ? "bg-green-500 animate-pulse" : "bg-amber-500"}`}></span>
          <span>{isOpen ? `${hero.status.openPrefix} ${openUntil}` : `${hero.status.closedPrefix} ${opensAt}`}</span>
        </div>

        <div
          className="opacity-0 animate-fade-in-up flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          style={{ animationDelay: "200ms" }}
        >
          <a
            href={`tel:${contactInfo.phone}`}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-brotart-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brotart-300/50 transition-all hover:scale-105 hover:bg-brotart-700 hover:shadow-brotart-400/60 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500 sm:text-lg"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 animate-shine" />
            
            {/* Pulsing dot indicator */}
            
            <span aria-hidden="true" className="relative text-xl leading-none transition-transform group-hover:scale-110">
              {"\u260E"}
            </span>
            <span className="relative">{hero.ctas.callNow}</span>
          </a>
          <a
            href="#speisekarte"
            onClick={handleMenuClick}
            className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brotart-200 bg-white px-6 py-4 text-base font-semibold text-brotart-600 shadow-md transition-all hover:scale-105 hover:border-brotart-300 hover:bg-brotart-50 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500 sm:text-lg"
          >
            <span aria-hidden="true" className="text-xl leading-none transition-transform group-hover:scale-125 animate-arrow-bounce">
              {"\u2B07\uFE0F"}
            </span>
            <span className="transition-transform group-hover:scale-110 duration-200">{hero.ctas.viewMenu}</span>
          </a>
        </div>

        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <HeroGallery images={galleryImages} labels={hero.galleryLabels} />
        </div>

        <div className="opacity-0 animate-fade-in-up flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center" style={{ animationDelay: "500ms" }}>
          <a
            href="https://www.instagram.com/brotart_baeckerei"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-pink-200 bg-pink-50/50 px-4 py-2.5 text-sm font-medium text-pink-700 shadow-sm transition-all hover:bg-pink-50 hover:border-pink-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
            </svg>
            <span>{hero.instagramLabel}</span>
          </a>
          <a
            href="https://whatsapp.com/channel/0029VbBa9yiIN9igZCneGa1W"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-green-200 bg-green-50/50 px-4 py-2.5 text-sm font-medium text-green-700 shadow-sm transition-all hover:bg-green-50 hover:border-green-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>{hero.whatsappLabel}</span>
          </a>
        </div>

        <div className="opacity-0 animate-fade-in-up flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "400ms" }}>
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-xs shadow-sm sm:text-sm flex items-center gap-2"
            >
              {badge.icon && <span className="text-sm sm:text-base">{badge.icon}</span>}
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
  labels: {
    aria: string;
    fallback: string;
  };
};

function HeroGallery({ images, labels }: HeroGalleryProps) {
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const derivedIndex = slides.length ? activeIndex % slides.length : 0;

  // Preload next 2 images in background using native Image() constructor
  // This works with static export and ensures images are cached before needed
  useEffect(() => {
    if (slides.length <= 1) return;
    
    const preloadImages: HTMLImageElement[] = [];
    
    // Preload next 2 images ahead of current slide
    const nextIndex = (derivedIndex + 1) % slides.length;
    const nextNextIndex = (derivedIndex + 2) % slides.length;
    
    [nextIndex, nextNextIndex].forEach((idx) => {
      const slide = slides[idx];
      if (slide && typeof slide.src !== "string") {
        const img = new window.Image();
        img.src = slide.src.src;
        preloadImages.push(img);
      }
    });
    
    // Cleanup function
    return () => {
      preloadImages.forEach(img => {
        img.src = "";
      });
    };
  }, [derivedIndex, slides]);

  // Auto-rotation with progress tracking
  useEffect(() => {
    if (slides.length <= 1) return undefined;

    const progressInterval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / (AUTO_ROTATE_INTERVAL / 50));
      });
    }, 50);

    const rotationInterval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, AUTO_ROTATE_INTERVAL);

    return () => {
      window.clearInterval(progressInterval);
      window.clearInterval(rotationInterval);
    };
  }, [slides.length]);

  const activeSlide = slides[derivedIndex];

  return (
    <div className="rounded-2xl border border-stone-100/80 bg-gradient-to-br from-white/95 via-white/90 to-brotart-50/20 p-3 shadow-lg shadow-brotart-100/30 sm:rounded-3xl sm:p-4">
      <div className="relative overflow-hidden rounded-xl bg-stone-950/5 shadow-md sm:rounded-2xl" aria-label={labels.aria}>
        <div className="relative aspect-[16/10] w-full sm:aspect-[4/3]">
          {slides.map((slide, index) => {
            const isActive = index === derivedIndex;
            const isNext = slides.length > 1 && index === (derivedIndex + 1) % slides.length;
            const isPrevious = slides.length > 1 && index === (derivedIndex - 1 + slides.length) % slides.length;
            
            // Only render active, next (preloaded for instant swap), and previous (for smooth exit)
            const shouldRender = isActive || isNext || isPrevious;
            if (!shouldRender) return null;

            // First image gets priority loading for fastest LCP
            const hasPriority = index === 0;

            return (
              <div
                key={`${typeof slide.src === "string" ? slide.src : slide.src.src}-${index}`}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={!isActive}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={hasPriority}
                  placeholder={typeof slide.src === "string" ? "empty" : "blur"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1100px"
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}

          {!slides.length && (
            <div className="flex h-full items-center justify-center bg-stone-100/80 text-sm font-medium text-stone-500">
              {labels.fallback}
            </div>
          )}

          {/* Subtle gradient overlay for depth */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/30 via-transparent to-transparent" />

          {/* Progress indicator */}
          {slides.length > 1 && (
            <div className="absolute inset-x-0 bottom-0 h-1 bg-stone-900/20 backdrop-blur-sm">
              <div
                className="h-full bg-gradient-to-r from-brotart-400 to-brotart-600 transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {/* Slide counter badge */}
          {slides.length > 1 && (
            <div className="absolute right-3 top-3 rounded-full bg-stone-900/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:px-3.5 sm:py-2 sm:text-sm">
              {derivedIndex + 1} / {slides.length}
            </div>
          )}
        </div>

        {activeSlide && (
          <span className="sr-only" aria-live="polite" aria-atomic="true">
            {activeSlide.alt}. Bild {derivedIndex + 1} von {slides.length}
          </span>
        )}
      </div>
    </div>
  );
}
