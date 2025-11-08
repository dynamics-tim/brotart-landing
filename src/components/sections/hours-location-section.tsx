import type { OpeningHour } from "@/content/site";

type HoursLocationSectionProps = {
  openingHours: OpeningHour[];
  mapsEmbed: string;
};

export default function HoursLocationSection({ openingHours, mapsEmbed }: HoursLocationSectionProps) {
  return (
    <section
      id="oeffnungszeiten"
      className="section-anchor mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row"
    >
      <div className="flex-1 rounded-3xl border border-stone-100 bg-white p-8 shadow-lg shadow-brotart-50">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">Öffnungszeiten</p>
        <h2 className="mt-2 text-3xl font-semibold text-stone-900">Lange offen – jeden Tag.</h2>
        <p className="mt-3 text-stone-600">
          Frühaufsteher holen Croissants, Handwerker stärken sich mittags, Nachteulen bekommen warme Snacks – ohne Stress,
          ohne Vorbestellung.
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
          <p className="mt-2 text-lg font-semibold">Tagesangebote gibt es schon ab 10 Uhr – wer sicher ein Stück will, ruft kurz an.</p>
        </div>
      </div>

      <div className="flex-1 space-y-6">
        <div className="flex h-full flex-col gap-4 rounded-3xl border border-stone-100 bg-white p-4 shadow-lg shadow-brotart-50">
          <iframe
            title="Google Maps – BrotArt Standort"
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full rounded-2xl border-0"
          />
          <p className="text-sm text-stone-600">
            Parkplätze befinden sich direkt vor dem Laden. Buslinie 7606 hält an der Station „Neue Unlinger Straße“, drei
            Gehminuten entfernt.
          </p>
        </div>
      </div>
    </section>
  );
}
