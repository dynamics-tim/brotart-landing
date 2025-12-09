"use client";

import ScrollReveal from "@/components/scroll-reveal";
import { useI18n } from "@/i18n/i18n-provider";

const starArray = Array.from({ length: 5 });

export default function ReviewsSection() {
  const { content, locale } = useI18n();
  const { reviews } = content;

  const formatRating = (value: number) => {
    const formatted = value.toFixed(1);
    return locale === "de" ? formatted.replace(".", ",") : formatted;
  };

  const formattedAverage = formatRating(reviews.summary.averageRating);
  const formattedCount = new Intl.NumberFormat(locale === "de" ? "de-DE" : "en-US").format(reviews.summary.reviewCount);

  return (
    <section id="bewertungen" className="section-anchor">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 lg:gap-14">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start lg:gap-8">
            <ScrollReveal>
              <div className="space-y-4 text-center lg:max-w-2xl lg:text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">{reviews.eyebrow}</p>
                <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">{reviews.heading}</h2>
                <p className="text-lg text-stone-600 lg:text-xl">{reviews.description}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <article className="flex flex-col justify-between rounded-[2rem] border border-white/60 bg-white/90 p-8 shadow-xl shadow-brotart-50 lg:sticky lg:top-10 lg:p-9">
              <div>
                <div className="flex flex-wrap items-end gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-400">{reviews.labels.average}</p>
                    <div className="flex items-baseline gap-3">
                      <span className="text-6xl font-semibold text-stone-900">{formattedAverage}</span>
                      <span className="text-lg font-semibold text-stone-400">{reviews.labels.outOf}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-brotart-500" aria-label={`${formattedAverage} ${reviews.labels.starSuffix}`}>
                    {starArray.map((_, index) => (
                      <StarIcon key={index} />
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm text-stone-600">
                  {formattedCount} {reviews.labels.publicVoices} - {reviews.labels.asOf} {reviews.summary.dataAsOf} - {reviews.labels.source}: {reviews.summary.source}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2 text-sm text-stone-700">
                  {reviews.summary.highlights.map((item) => (
                    <li key={item} className="rounded-full bg-brotart-100 px-4 py-1 font-medium text-stone-900">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={reviews.summary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-stone-400/40 transition hover:-translate-y-0.5 hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
              >
                {reviews.buttonLabel}
                <ArrowIcon />
              </a>
            </article>
            </ScrollReveal>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -right-3 top-0 z-10 h-full w-32 bg-gradient-to-l from-stone-50 via-stone-50/60 via-30% to-transparent lg:hidden" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-6 top-1/2 z-20 flex -translate-y-1/2 items-center gap-1 lg:hidden" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-brotart-400/70 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-brotart-400/50" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            
            <div
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scrollbar-hide lg:grid lg:auto-rows-fr lg:grid-cols-2 lg:gap-8 lg:overflow-visible lg:pb-0 xl:grid-cols-3 2xl:grid-cols-4"
              role="list"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {reviews.reviews.map((review, index) => (
                <article
                  key={`${review.author}-${index}`}
                  role="listitem"
                  className="group relative w-80 flex-shrink-0 snap-center rounded-3xl border border-white/70 bg-white/90 p-6 shadow-lg shadow-brotart-50 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl lg:w-auto lg:h-full lg:p-7"
                >
                <div
                  className="pointer-events-none absolute inset-x-7 top-0 hidden h-1 rounded-b-full bg-gradient-to-r from-brotart-400/80 via-brotart-500/80 to-brotart-400/80 opacity-0 transition group-hover:opacity-100 lg:block"
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-base font-semibold text-stone-900">{review.author}</p>
                    <p className="text-sm text-stone-500">{review.role}</p>
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-stone-400">
                    {review.relativeTime}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-3 text-brotart-500">
                  <div className="flex items-center gap-0.5" aria-label={`${formatRating(review.rating)} ${reviews.labels.starSuffix}`}>
                    {starArray.map((_, starIndex) => (
                      <StarIcon key={starIndex} className="h-4 w-4" />
                    ))}
                  </div>
                  <span className="rounded-full bg-brotart-50 px-2.5 py-0.5 text-xs font-semibold text-brotart-600">
                    {formatRating(review.rating)}
                  </span>
                </div>
                <p className="mt-5 font-semibold uppercase tracking-[0.22em] text-brotart-500">{review.highlight}</p>
                <p className="mt-3 text-base leading-relaxed text-stone-700 lg:min-h-[130px]">&ldquo;{review.excerpt}&rdquo;</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {review.topics.map((topic) => (
                    <span key={topic} className="rounded-full bg-brotart-100 px-3 py-1 text-xs font-medium text-stone-900">
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-5 w-5 fill-current text-brotart-500 ${className}`}
    >
      <path d="M12 3.5 14.8 9l5.7.8-4.2 4.2 1 5.9L12 17.5 6.7 19.9l1-5.9-4.2-4.2L9.3 9z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M5 12h12m0 0-4-4m4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
