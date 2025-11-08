import Image from "next/image";
import type { DailyOffer, HeroBadge, HeroContent } from "@/content/site";

type HeroSectionProps = {
  hero: HeroContent;
  badges: HeroBadge[];
  dailyOffer: DailyOffer;
  offerDate: string;
  phone: {
    raw: string;
    display: string;
  };
  mapsLink: string;
};

export default function HeroSection({
  hero,
  badges,
  dailyOffer,
  offerDate,
  phone,
  mapsLink,
}: HeroSectionProps) {
  return (
    <section
      id="start"
      className="section-anchor mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 pb-16 pt-4 md:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="flex flex-col gap-8 rounded-3xl bg-white/90 p-8 shadow-lg shadow-brotart-100">
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
                ·
              </span>
              <span className="text-stone-500">{badge.detail}</span>
            </div>
          ))}
        </div>

        <article className="rounded-2xl border border-brotart-100 bg-brotart-50/80 p-6 shadow-inner">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brotart-500">{dailyOffer.title}</p>
          <div className="mt-2 flex flex-wrap items-baseline gap-3">
            <h2 className="text-3xl font-semibold text-brotart-700">{dailyOffer.offer}</h2>
            <span className="rounded-full bg-white px-3 py-1 text-lg font-semibold text-brotart-600">{dailyOffer.price}</span>
          </div>
          <p className="mt-3 text-sm text-stone-600">{dailyOffer.note}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.3em] text-stone-400">
            {dailyOffer.tagline} – {offerDate}
          </p>
        </article>
      </div>
    </section>
  );
}
