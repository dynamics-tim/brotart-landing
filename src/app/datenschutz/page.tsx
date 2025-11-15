import Link from "next/link";
import { CONTACT_INFO } from "@/content/site";

export const metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zum Datenschutz bei Balkan Bäckerei-Pizza-Grill-(Brotart) in Riedlingen.",
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-stone-800">
      <Link href="/" className="text-sm text-brotart-600 underline">
        ← Zurück zur Startseite
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-stone-900">Datenschutzerklärung</h1>

      <section className="mt-8 space-y-4 text-sm leading-relaxed text-stone-700">
        <p>
          Wir freuen uns über Ihr Interesse an Balkan Bäckerei-Pizza-Grill-(Brotart). Der Schutz Ihrer personenbezogenen Daten
          ist uns wichtig. Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren Daten passiert, wenn Sie
          unsere Website besuchen.
        </p>

        <h2 className="text-lg font-semibold text-stone-900">Verantwortlicher</h2>
        <p>
          {CONTACT_INFO.company}, {CONTACT_INFO.street}, {CONTACT_INFO.zip} {CONTACT_INFO.city}
        </p>
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

        <h2 className="text-lg font-semibold text-stone-900">Hosting & Zugriffsdaten</h2>
        <p>
          Unsere Website wird als statische Seite über GitHub Pages bereitgestellt. Beim Aufruf werden Metadaten (z. B. Datum,
          Uhrzeit, IP-Adresse) in Server-Logs gespeichert. Diese Daten werden ausschließlich zur Sicherstellung des technischen
          Betriebs verwendet und nicht mit anderen Datenquellen zusammengeführt.
        </p>

        <h2 className="text-lg font-semibold text-stone-900">Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für
          den Fall von Anschlussfragen gespeichert. Eine Weitergabe erfolgt nicht ohne Ihre Einwilligung.
        </p>

        <h2 className="text-lg font-semibold text-stone-900">Cookies & Analyse</h2>
        <p>
          Aktuell setzen wir keine Cookies oder Tracking-Tools ein. Sollten wir zukünftig ein datenschutzkonformes Analytics-Tool
          (z. B. Plausible) implementieren, informieren wir hier ausführlich und holen – falls nötig – Ihre Einwilligung ein.
        </p>

        <h2 className="text-lg font-semibold text-stone-900">Ihre Rechte</h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
          personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen
          zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
        </p>
      </section>
    </main>
  );
}
