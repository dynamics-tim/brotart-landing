import type { GoogleReview, GoogleReviewSummary } from "@/content/site";

type ReviewsSectionProps = {
  summary: GoogleReviewSummary;
  reviews: GoogleReview[];
};

const starArray = Array.from({ length: 5 });

const formatRating = (value: number) => value.toFixed(1).replace(".", ",");

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function ReviewsSection({ summary, reviews }: ReviewsSectionProps) {
  const formattedAverage = formatRating(summary.averageRating);
  const formattedCount = new Intl.NumberFormat("de-DE").format(summary.reviewCount);

  return (
    <section id="bewertungen" className="section-anchor">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="flex flex-col gap-10 lg:gap-14">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start lg:gap-8">
            <div className="space-y-4 text-center lg:max-w-2xl lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">Bewertungen</p>
              <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">Was unsere Gäste sagen</h2>
              <p className="text-lg text-stone-600 lg:text-xl">
                Stimmen aus Riedlingen, Neufra und Umgebung: echte Erfahrungsberichte zu Börek, Frühstück, Pizza und Takeaway
                der Balkan Bäckerei-Pizza-Grill-(Brotart).
              </p>
            </div>

            <article className="flex flex-col justify-between rounded-[2rem] border border-white/60 bg-white/90 p-8 shadow-xl shadow-brotart-50 lg:sticky lg:top-10 lg:p-9">
              <div>
                <div className="flex flex-wrap items-end gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stone-400">Durchschnitt</p>
                    <div className="flex items-baseline gap-3">
                      <span className="text-6xl font-semibold text-stone-900">{formattedAverage}</span>
                      <span className="text-lg font-semibold text-stone-400">/ 5</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-brotart-500" aria-label={`${formattedAverage} von 5 Sternen`}>
                    {starArray.map((_, index) => (
                      <StarIcon key={index} />
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm text-stone-600">
                  {formattedCount} öffentliche Stimmen – Stand {summary.dataAsOf} – Quelle: {summary.source}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2 text-sm text-stone-700">
                  {summary.highlights.map((item) => (
                    <li key={item} className="rounded-full bg-brotart-100 px-4 py-1 font-medium text-stone-900">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={summary.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-stone-400/40 transition hover:-translate-y-0.5 hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
              >
                Alle Rezensionen auf Google lesen
                <ArrowIcon />
              </a>
            </article>
          </div>

          <div
            className="flex snap-x gap-6 overflow-x-auto pb-6 lg:grid lg:auto-rows-fr lg:grid-cols-2 lg:gap-8 lg:overflow-visible lg:pb-0 xl:grid-cols-3 2xl:grid-cols-4"
            role="list"
          >
            {reviews.map((review, index) => (
              <article
                key={`${review.author}-${index}`}
                role="listitem"
                className="group relative w-80 flex-shrink-0 snap-center rounded-3xl border border-white/70 bg-white/90 p-6 shadow-lg shadow-brotart-50 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl lg:w-auto lg:h-full lg:p-7"
              >
                <div
                  className="pointer-events-none absolute inset-x-7 top-0 hidden h-1 rounded-b-full bg-gradient-to-r from-brotart-400/80 via-brotart-500/80 to-brotart-400/80 opacity-0 transition group-hover:opacity-100 lg:block"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brotart-100 text-base font-semibold text-brotart-600">
                    {getInitials(review.author)}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-stone-900">{review.author}</p>
                    <p className="text-sm text-stone-500">{review.role}</p>
                  </div>
                  <span className="ml-auto text-xs font-medium uppercase tracking-wider text-stone-400">
                    {review.relativeTime}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-3 text-brotart-500">
                  <div className="flex items-center gap-0.5" aria-label={`${formatRating(review.rating)} von 5 Sternen`}>
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
