"use client";

import { useState } from "react";
import type { OpeningHour } from "@/content/site";

type HoursLocationSectionProps = {
  openingHours: OpeningHour[];
  mapsEmbed: string;
  mapsLink: string;
};

export default function HoursLocationSection({ openingHours, mapsEmbed, mapsLink }: HoursLocationSectionProps) {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section
      id="oeffnungszeiten"
      className="section-anchor mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row"
    >
      <div className="flex-1 rounded-3xl border border-stone-100 bg-white p-8 shadow-lg shadow-brotart-50">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">Öffnungszeiten</p>
        <h2 className="mt-2 text-3xl font-semibold text-stone-900">05:00 – 22:00 Uhr, jeden Tag.</h2>
        <p className="mt-3 text-stone-600">
          Frühstück für Frühaufsteher, Mittagspause mit Grill & Pizza, abends Snacks für Spät- und Nachtschichten – immer
          frisch, immer freundlich, ohne Vorbestellung.
        </p>

        <ul className="mt-6 space-y-4">
          {openingHours.map((entry) => (
            <li
              key={entry.days}
              className="flex items-center justify-between rounded-2xl border border-stone-100 bg-stone-50/60 px-4 py-3 text-sm"
            >
              <span className="font-medium text-stone-800">{entry.days}</span>
              <span className="text-stone-600">{entry.hours}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl bg-brotart-600 px-5 py-4 text-white">
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Tipp</p>
          <p className="mt-2 text-lg font-semibold">
            Tagesangebote gibt es ab 10 Uhr – wer sicher ein Stück möchte, ruft kurz unter 07371 1296664 an.
          </p>
        </div>
      </div>

      <div className="flex-1 space-y-4">
        <div className="flex h-full flex-col gap-4 rounded-3xl border border-stone-100 bg-white p-4 shadow-lg shadow-brotart-50">
          <div className="relative overflow-hidden rounded-2xl bg-stone-100">
            {mapLoaded ? (
              <iframe
                title="Google Maps – Balkan Bäckerei-Pizza-Grill Standort"
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
            ) : (
              <div className="flex h-72 flex-col items-center justify-center gap-4 p-6 text-center text-stone-600">
                <p className="text-lg font-semibold text-stone-900">Karte laden?</p>
                <p className="text-sm">
                  Durch einen Klick wird Google Maps eingebettet und es können Cookies von Google gesetzt werden.
                </p>
                <button
                  type="button"
                  onClick={() => setMapLoaded(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-brotart-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brotart-200 transition hover:-translate-y-0.5 hover:bg-brotart-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500"
                >
                  Karte laden
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 rounded-2xl bg-stone-50/70 px-5 py-4 text-sm text-stone-700 sm:flex-row sm:items-center sm:justify-between">
            <div>
              Neue Unlinger Str. 19/1, 88499 Riedlingen – Parkplätze vor dem Laden, Buslinie 7606 »Neue Unlinger Straße«.
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-brotart-600 font-semibold"
            >
              Route planen <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
