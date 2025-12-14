"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/i18n-provider";

export default function HoursLocationSection() {
  const { content } = useI18n();
  const { hours, contactInfo } = content;
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section
      id="oeffnungszeiten"
      className="section-anchor mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 lg:flex-row"
    >
      <div className="flex-1 rounded-3xl border border-stone-100 bg-white p-8 shadow-lg shadow-brotart-50">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">{hours.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-semibold text-stone-900">{hours.heading}</h2>
        <p className="mt-3 text-stone-600">{hours.description}</p>

        <ul className="mt-6 space-y-4">
          {hours.openingHours.map((entry) => (
            <li
              key={entry.days}
              className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm shadow-sm"
            >
              <span className="font-semibold text-stone-900">{entry.days}</span>
              <span className="font-medium text-stone-700">{entry.hours}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 space-y-4">
        <div className="flex h-full flex-col gap-4 rounded-3xl border border-stone-100 bg-white p-4 shadow-lg shadow-brotart-50">
          <div className="relative overflow-hidden rounded-2xl bg-stone-100">
            {mapLoaded ? (
              <iframe
                title={hours.mapConsent.iframeTitle}
                src={hours.mapsEmbed}
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-popups"
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-72 w-full border-0"
              />
            ) : (
              <div className="flex h-72 flex-col items-center justify-center gap-3 p-6 text-center text-stone-600">
                <p className="text-lg font-semibold text-stone-900">{hours.mapConsent.title}</p>
                <p className="text-sm">{hours.mapConsent.description}</p>
                <button
                  type="button"
                  onClick={() => setMapLoaded(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-brotart-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brotart-200 transition hover:-translate-y-0.5 hover:bg-brotart-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500"
                >
                  {hours.mapConsent.cta}
                </button>
                <p className="text-xs text-stone-500">{hours.mapConsent.note}</p>
              </div>
            )}
          </div>
          <div className="group rounded-2xl border border-white/70 bg-white/90 p-6 shadow-lg shadow-brotart-50 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brotart-100">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brotart-500">{hours.location.eyebrow}</p>
                <p className="text-base font-semibold text-stone-900">{hours.location.street}</p>
                <p className="text-sm text-stone-600">{hours.location.city}</p>
                <p className="text-sm text-stone-500">{hours.location.transport}</p>
              </div>
              <a
                href={contactInfo.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brotart-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brotart-200 transition hover:-translate-y-0.5 hover:bg-brotart-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500"
              >
                <span aria-hidden="true">{"->"}</span>
                {hours.location.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
