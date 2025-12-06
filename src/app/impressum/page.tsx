import Link from "next/link";
import { CONTACT_INFO } from "@/content/site";

export const metadata = {
  title: "Impressum",
  description: "Rechtliche Angaben zur Balkan Bäckerei-Pizza-Grill-(Brotart) in Riedlingen.",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-stone-800">
      <Link href="/" className="text-sm text-brotart-600 underline">
        ← Zurück zur Startseite
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-stone-900">Impressum</h1>

      <section className="mt-8 space-y-2">
        <h2 className="text-lg font-semibold">Angaben gemäß § 5 TMG</h2>
        <p>{CONTACT_INFO.company}</p>
        <p>{CONTACT_INFO.street}</p>
        <p>
          {CONTACT_INFO.zip} {CONTACT_INFO.city}
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="text-lg font-semibold">Kontakt</h2>
        <p>
          Telefon:{" "}
          <a href={`tel:${CONTACT_INFO.phone}`} className="text-brotart-600 underline">
            {CONTACT_INFO.displayPhone}
          </a>
        </p>
        <p>
          E-Mail:{" "}
          <a href={`mailto:${CONTACT_INFO.email}`} className="text-brotart-600 underline">
            {CONTACT_INFO.email}
          </a>
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="text-lg font-semibold">Verantwortlich für den Inhalt</h2>
        <p>Familie Imeri</p>
        <p>{CONTACT_INFO.street}</p>
        <p>
          {CONTACT_INFO.zip} {CONTACT_INFO.city}
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="text-lg font-semibold">Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            className="text-brotart-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </section>
    </main>
  );
}
