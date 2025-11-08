import type { ContactHighlight, SocialLink } from "@/content/site";

type ContactSectionProps = {
  highlights: ContactHighlight[];
  socialLinks: SocialLink[];
};

export default function ContactSection({ highlights, socialLinks }: ContactSectionProps) {
  return (
    <section id="kontakt" className="section-anchor mt-16">
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10 mx-auto max-w-5xl rounded-[3rem] bg-white/50 blur-3xl" />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2.5rem] border border-white/70 bg-white/95 p-8 shadow-2xl shadow-brotart-100">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">Kontakt & Bestellung</p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
              Wir freuen uns auf Ihren Besuch oder Ihre Vorbestellung.
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Rufen Sie an, schreiben Sie uns eine WhatsApp oder kommen Sie spontan vorbei – wir halten immer etwas
              Ofenfrisches bereit.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-stone-100 bg-stone-50/70 p-5 transition hover:-translate-y-0.5 hover:border-brotart-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brotart-500"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-stone-400">{item.label}</p>
                      <p className="text-lg font-semibold text-stone-900">{item.value}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-stone-500">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brotart-600">
                    {item.cta} <span aria-hidden="true">→</span>
                  </span>
                </a>
              ))}
            </div>
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Social & Presse</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-brotart-200 hover:text-brotart-600"
                  >
                    <span className="font-semibold">{social.label}</span>{" "}
                    <span className="text-stone-400">{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/70 bg-white p-8 shadow-2xl shadow-brotart-200">
            <h3 className="text-xl font-semibold text-stone-900">Schnelle Anfrage</h3>
            <p className="mt-2 text-sm text-stone-600">
              Schreiben Sie uns, welches Gebäck oder welche Partyplatte Sie benötigen – wir antworten innerhalb eines
              Werktags.
            </p>
            <form className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-stone-700">
                  Name
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Vor- und Nachname"
                    className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3.5 text-base focus:border-brotart-400 focus:bg-white focus:outline-none"
                  />
                </label>
                <label className="block text-sm font-medium text-stone-700">
                  Kontakt
                  <input
                    type="text"
                    name="contact"
                    autoComplete="email"
                    placeholder="E-Mail oder Telefonnummer"
                    className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3.5 text-base focus:border-brotart-400 focus:bg-white focus:outline-none"
                  />
                </label>
              </div>
              <label className="block text-sm font-medium text-stone-700">
                Nachricht
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Was dürfen wir vorbereiten?"
                  className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-base focus:border-brotart-400 focus:bg-white focus:outline-none"
                />
              </label>
              <label className="block text-sm font-medium text-stone-700">
                Wunschtermin (optional)
                <input
                  type="date"
                  name="date"
                  className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3.5 text-base text-stone-600 focus:border-brotart-400 focus:bg-white focus:outline-none"
                />
              </label>
              <button
                type="button"
                className="w-full rounded-2xl bg-brotart-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-brotart-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brotart-500"
              >
                Anfrage senden
              </button>
              <p className="text-xs text-stone-500">
                Hinweis: Formular dient als Demo. Bitte kontaktieren Sie uns per Telefon oder WhatsApp für verbindliche
                Bestellungen.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
