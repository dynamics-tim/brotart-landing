import ScrollReveal from "@/components/scroll-reveal";
import type { Specialty } from "@/content/site";

type SpecialtiesSectionProps = {
  specialties: Specialty[];
};

export default function SpecialtiesSection({ specialties }: SpecialtiesSectionProps) {
  return (
    <section id="angebot" className="section-anchor mx-auto max-w-6xl px-6 py-12">
      <div className="flex flex-col gap-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">Balkan Klassiker</p>
        <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">
          Börek, Mantije, Pizza & Frühstück in Riedlingen
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-stone-600">
          Jede Spezialität entsteht in kleinen Chargen, ruht mit Familien-Gewürzmischung und wird erst kurz vor dem Servieren
          frisch gebacken – knusprig, saftig und perfekt zum Mitnehmen.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {specialties.map((specialty) => (
          <article
            key={specialty.name}
            className="flex h-full flex-col gap-4 rounded-3xl border border-stone-100 bg-white p-6 shadow-lg shadow-brotart-50 transition hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{specialty.icon}</span>
              <h3 className="text-xl font-semibold text-stone-900">{specialty.name}</h3>
            </div>
            <p className="text-base text-stone-600">{specialty.description}</p>
            <p className="text-sm text-stone-500">{specialty.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
