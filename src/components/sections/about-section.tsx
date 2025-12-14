"use client";

import { useI18n } from "@/i18n/i18n-provider";

export default function AboutSection() {
  const { content } = useI18n();
  const { about } = content;

  return (
    <section id="ueber-uns" className="section-anchor">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row">
        <div className="flex-1 space-y-6">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500 lg:text-left">
            {about.eyebrow}
          </p>
          <h2 className="text-center text-3xl font-semibold text-stone-900 sm:text-4xl lg:text-left">{about.heading}</h2>
          <p className="text-center text-lg text-stone-600 lg:text-left">{about.description}</p>
          <div className="grid gap-4 md:grid-cols-2">
            {about.values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-white/70 bg-white/90 p-5 shadow-lg shadow-brotart-50"
              >
                <p className="text-lg font-semibold text-stone-900">{value.title}</p>
                <p className="mt-2 text-sm text-stone-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="flex-1 rounded-[2rem] border border-stone-100 bg-gradient-to-br from-[#fef4ea] to-[#f9e2ca] p-8 shadow-inner">
          <p className="text-lg font-semibold text-stone-900">{about.whyTitle}</p>
          <ul className="mt-6 space-y-6 text-stone-700">
            {about.differentiators.map((item) => (
              <li key={item.title}>
                <strong className="font-semibold text-brotart-600">{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
