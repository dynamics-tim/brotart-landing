import Image from "next/image";
import Link from "next/link";
import {
  CONTACT_INFO,
  CORE_VALUES,
  DAILY_OFFER,
  GOOGLE_MAPS_EMBED,
  HERO_BADGES,
  OPENING_HOURS,
  SOCIAL_LINKS,
  SPECIALTIES,
} from "@/content/site";
import SiteHeader from "@/components/site-header";

type ContactHighlight = {
  label: string;
  value: string;
  description: string;
  href: string;
  icon: string;
  cta: string;
  external?: boolean;
};

const heroImage =
  "https://images.unsplash.com/photo-1486887396153-fa416526c108?auto=format&fit=crop&w=1200&q=80";

export default function Home() {
  const fallbackDate = new Date();
  const parsedOfferDate = DAILY_OFFER.lastUpdated ? new Date(DAILY_OFFER.lastUpdated) : fallbackDate;
  const offerDate = new Intl.DateTimeFormat("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(Number.isNaN(parsedOfferDate.valueOf()) ? fallbackDate : parsedOfferDate);

  const contactHighlights: ContactHighlight[] = [
    {
      label: "Telefon",
      value: CONTACT_INFO.displayPhone,
      description: "Direkter Draht von 05:00 – 22:00 Uhr",
      href: `tel:${CONTACT_INFO.phone}`,
      icon: "☎️",
      cta: "Jetzt anrufen",
    },
    {
      label: "WhatsApp",
      value: "Sofortnachricht",
      description: "Fotos schicken, Bestellung abstimmen",
      href: CONTACT_INFO.whatsapp,
      icon: "💬",
      cta: "Chat öffnen",
      external: true,
    },
    {
      label: "E-Mail",
      value: CONTACT_INFO.email,
      description: "Antwort innerhalb eines Werktags",
      href: `mailto:${CONTACT_INFO.email}`,
      icon: "✉️",
      cta: "Mail schreiben",
    },
    {
      label: "Adresse",
      value: CONTACT_INFO.street,
      description: `${CONTACT_INFO.zip} ${CONTACT_INFO.city}`,
      href: CONTACT_INFO.mapsLink,
      icon: "📍",
      cta: "Route planen",
      external: true,
    },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: CONTACT_INFO.company,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.street,
      postalCode: CONTACT_INFO.zip,
      addressLocality: CONTACT_INFO.city,
      addressCountry: "DE",
    },
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    url: "https://brotart.de",
    openingHours: OPENING_HOURS.map(({ days, hours }) => `${days} ${hours}`),
    servesCuisine: ["Balkan", "Bakery", "Pizza"],
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };

  return (
    <>
      <main
        id="main"
        className="text-stone-900"
      >
        <SiteHeader />
        <div className="relative isolate bg-gradient-to-b from-[#fff9f3] via-[#fef4ea] to-[#f7e8dc]">
          <div className="absolute inset-x-0 top-0 flex justify-center">
            <div className="h-40 w-full max-w-4xl rounded-full bg-gradient-to-r from-[#f3ceb0] via-[#f9e6c9] to-[#f3ceb0] opacity-20 blur-3xl" />
          </div>

          <section
            id="start"
            className="section-anchor mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 pb-16 pt-4 md:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="flex flex-col gap-8 rounded-3xl bg-white/90 p-8 shadow-lg shadow-brotart-100">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">
                BrotArt Riedlingen
              </p>
              <h1 className="text-4xl font-semibold text-stone-900 sm:text-5xl lg:text-6xl">
                Brotkunst &{" "}
                <span className="text-brotart-600 font-[var(--font-playfair)]">Balkan-Genuss</span> unter einem Dach.
              </h1>
              <p className="max-w-xl text-lg text-stone-600">
                Frisch gebackenes Brot, saftiger Burek, Mantije, Holzofenpizza und wechselnde Mittagsteller – ab 05:00
                Uhr für Frühaufsteher geöffnet, bis 22:00 Uhr für Nachtschwärmer.
              </p>

              <div className="flex flex-wrap gap-3">
                {HERO_BADGES.map((badge) => (
                  <div
                    key={badge.label}
                    className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm shadow-sm"
                  >
                    <span className="font-medium text-stone-950">{badge.label}</span>
                    <span className="mx-2 text-stone-300">•</span>
                    <span className="text-stone-500">{badge.detail}</span>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-brotart-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-brotart-500"
                >
                  ☎︎ Jetzt anrufen
                </a>
                <a
                  href={CONTACT_INFO.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-6 py-4 text-lg font-semibold text-stone-800 transition hover:border-brotart-300"
                >
                  📍 Route planen
                </a>
              </div>

              <article className="rounded-2xl border border-brotart-100 bg-brotart-50/80 p-6 shadow-inner">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brotart-500">
                  {DAILY_OFFER.title}
                </p>
                <div className="mt-2 flex flex-wrap items-baseline gap-3">
                  <h2 className="text-3xl font-semibold text-brotart-700">{DAILY_OFFER.offer}</h2>
                  <span className="rounded-full bg-white px-3 py-1 text-lg font-semibold text-brotart-600">
                    {DAILY_OFFER.price}
                  </span>
                </div>
                <p className="mt-3 text-sm text-stone-600">{DAILY_OFFER.note}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-stone-400">
                  {DAILY_OFFER.tagline} – {offerDate}
                </p>
              </article>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#f7c9a0] via-[#fdd7b4] to-[#f6c093] opacity-70 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 shadow-2xl shadow-brotart-200">
                <Image
                  src={heroImage}
                  alt="Frisch gebackenes Brot aus dem Steinofen"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 text-sm font-medium text-stone-900 shadow-lg shadow-brotart-200">
                  Offenherzige Küche & direkte Sicht auf den Holzofen
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="angebot" className="section-anchor mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">Signatures</p>
            <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">Unsere beliebtesten Klassiker</h2>
            <p className="mx-auto max-w-3xl text-lg text-stone-600">
              Jede Spezialität wird morgens vorbereitet, ruht mit geheimer Gewürzmischung und wird erst kurz vor dem
              Servieren gebacken – so bleibt alles knusprig und saftig.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SPECIALTIES.map((specialty) => (
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

        <section id="ueber-uns" className="section-anchor bg-white/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row">
            <div className="flex-1 space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">Unsere Geschichte</p>
              <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">
                Familienbetrieb mit Blick über den Tellerrand.
              </h2>
              <p className="text-lg text-stone-600">
                BrotArt entsteht aus der Liebe zu handwerklichem Brot und der Sehnsucht nach den Aromen der Balkan-Küche.
                Wir kneten, füllen und backen alles selbst – mit Mehl aus der Region und Gewürzmischungen aus der
                Familienküche. Transparent, ehrlich und mit viel Leidenschaft.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {CORE_VALUES.map((value) => (
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
                <li>
                  <strong className="font-semibold text-brotart-600">Tagesaktuelle Theke:</strong> Brot und Gebäck
                  werden in kleinen Chargen über den Tag hinweg gebacken – nie abgestanden.
                </li>
                <li>
                  <strong className="font-semibold text-brotart-600">Mittagszeit = Grillzeit:</strong> Neben Burek &
                  Pizza servieren wir gegrillte Cevapcici, hausgemachte Suppen und vegetarische Bowls.
                </li>
                <li>
                  <strong className="font-semibold text-brotart-600">Abends entspannt:</strong> Bis 22:00 Uhr warmes
                  Essen, Snacks und Desserts – perfekt nach Feierabend.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="oeffnungszeiten" className="section-anchor mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row">
          <div className="flex-1 rounded-3xl border border-stone-100 bg-white p-8 shadow-lg shadow-brotart-50">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">Öffnungszeiten</p>
            <h2 className="mt-2 text-3xl font-semibold text-stone-900">Lange offen – jeden Tag.</h2>
            <p className="mt-3 text-stone-600">
              Frühaufsteher holen Croissants, Handwerker stärken sich mittags, Nachteulen bekommen warme Snacks – ohne
              Stress, ohne Vorbestellung.
            </p>

            <ul className="mt-6 space-y-4">
              {OPENING_HOURS.map((entry) => (
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
                Tagesangebote gibt es schon ab 10 Uhr – wer sicher ein Stück will, ruft kurz an.
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="flex h-full flex-col gap-4 rounded-3xl border border-stone-100 bg-white p-4 shadow-lg shadow-brotart-50">
              <iframe
                title="Google Maps – BrotArt Standort"
                src={GOOGLE_MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full rounded-2xl border-0"
              />
              <p className="text-sm text-stone-600">
                Parkplätze befinden sich direkt vor dem Laden. Buslinie 7606 hält an der Station „Neue Unlinger Straße“,
                drei Gehminuten entfernt.
              </p>
            </div>
          </div>
        </section>

        <section
          id="kontakt"
          className="section-anchor mt-16 bg-gradient-to-b from-[#fff6ed] via-[#fde9d4] to-[#fbd9b8]"
        >
          <div className="relative mx-auto max-w-6xl px-6 py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 mx-auto max-w-5xl rounded-[3rem] bg-white/50 blur-3xl"
            />
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[2.5rem] border border-white/70 bg-white/95 p-8 shadow-2xl shadow-brotart-100">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">Kontakt & Bestellung</p>
                <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
                  Wir freuen uns auf Ihren Besuch oder Ihre Vorbestellung.
                </h2>
                <p className="mt-4 text-lg text-stone-600">
                  Rufen Sie durch, schreiben Sie uns eine WhatsApp oder kommen Sie spontan vorbei – wir halten immer etwas
                  Ofenfrisches bereit.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {contactHighlights.map((item) => (
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
                    {SOCIAL_LINKS.map((social) => (
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
      </main>

      <footer className="bg-[#1f140d] text-[#f9f1e7]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#cba07f]">BrotArt</p>
            <p className="mt-2 text-2xl font-semibold">Ofenfrisch seit 2024</p>
            <p className="mt-2 text-sm text-[#d6c3b3]">
              Neue Unlinger Straße 19 · 88499 Riedlingen ·{" "}
              <a href={`tel:${CONTACT_INFO.phone}`} className="underline decoration-[#cba07f]">
                {CONTACT_INFO.displayPhone}
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-[#d6c3b3]">
            <Link href="/impressum" className="transition hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition hover:text-white">
              Datenschutz
            </Link>
            <a href="#start" className="transition hover:text-white">
              Nach oben
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-[#cba07f]">
          © {new Date().getFullYear()} BrotArt. Alle Rechte vorbehalten.
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
