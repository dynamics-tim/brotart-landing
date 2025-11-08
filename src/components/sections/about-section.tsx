import type { ValueCard } from "@/content/site";

type AboutSectionProps = {
  values: ValueCard[];
};

const differentiators = [
  {
    title: "Tagesaktuelle Theke",
    description: "Brot und Gebäck entstehen in kleinen Chargen über den Tag verteilt – nie abgestanden.",
  },
  {
    title: "Mittagszeit = Grillzeit",
    description: "Neben Burek & Pizza servieren wir Cevapcici vom Grill, hausgemachte Suppen und vegetarische Bowls.",
  },
  {
    title: "Abends entspannt",
    description: "Bis 22:00 Uhr warme Küche, Snacks und Desserts – perfekt nach Feierabend.",
  },
];

export default function AboutSection({ values }: AboutSectionProps) {
  return (
    <section id="ueber-uns" className="section-anchor bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row">
        <div className="flex-1 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">Unsere Geschichte</p>
          <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">Familienbetrieb mit Blick über den Tellerrand.</h2>
          <p className="text-lg text-stone-600">
            BrotArt entspringt der Liebe zu handwerklichem Brot und den Aromen der Balkan-Küche. Wir kneten, füllen und backen
            alles selbst – mit Mehl aus der Region und Gewürzmischungen aus der Familienküche. Transparent, ehrlich und mit viel
            Leidenschaft.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-stone-100 bg-brotart-50/60 p-5">
                <h3 className="text-lg font-semibold text-stone-900">{value.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="flex-1 rounded-[2rem] border border-stone-100 bg-gradient-to-br from-[#fef4ea] to-[#f9e2ca] p-8 shadow-inner">
          <h3 className="text-lg font-semibold text-stone-900">Warum BrotArt?</h3>
          <ul className="mt-6 space-y-6 text-stone-700">
            {differentiators.map((item) => (
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
