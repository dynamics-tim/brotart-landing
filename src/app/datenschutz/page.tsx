import Link from "next/link";
import { CONTACT_INFO } from "@/content/site";

export const metadata = {
  title: "Datenschutzerklärung",
  description: "Informationen zum Datenschutz bei Balkan Bäckerei-Pizza-Grill-(Brotart) in Riedlingen.",
};

export default function DatenschutzPage() {
  return (
    <main id="main" className="mx-auto max-w-4xl px-6 py-16 text-stone-800">
      <Link href="/" className="text-sm text-brotart-600 underline">
        ← Zurück zur Startseite
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-stone-900">Datenschutzerklärung</h1>

      <section className="mt-8 space-y-4 text-sm leading-relaxed text-stone-700">
        <p>
          Wir freuen uns über Ihr Interesse an Balkan Bäckerei-Pizza-Grill-(Brotart). Der Schutz Ihrer personenbezogenen Daten
          ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung Ihrer Daten beim Besuch unserer Website.
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

        <h2 className="text-lg font-semibold text-stone-900">Hosting & Bereitstellung (GitHub Pages/CDN)</h2>
        <p>
          Unsere Website wird als statische Seite über GitHub Pages (GitHub Inc., 88 Colin P. Kelly Jr. St, San Francisco, CA
          94107, USA) ausgeliefert. Dabei werden Server-Logfiles (IP-Adresse, Datum/Uhrzeit, abgerufene Datei, Referrer,
          User-Agent) zur technischen Bereitstellung verarbeitet. CDN-Dienstleister wie Fastly können eingebunden sein.
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherer und schneller Auslieferung).
        </p>
        <p>
          Drittlandtransfer: GitHub/Fastly haben Sitz in den USA. Übermittlung erfolgt auf Basis von Standardvertragsklauseln;
          ein Restrisiko des US-Zugriffs kann nicht ausgeschlossen werden.
        </p>
        <p>Speicherdauer Logfiles: üblicherweise 7–30 Tage (anbieterabhängig), länger nur zu Beweiszwecken.</p>

        <h2 className="text-lg font-semibold text-stone-900">Cookies & Tracking</h2>
        <p>
          Wir setzen keine Cookies und keine Tracking-Tools ein. Es findet keine Profilbildung statt. Eine Verbindung zu Google
          entsteht nur, wenn Sie die Karte aktiv laden (siehe unten).
        </p>

        <h2 className="text-lg font-semibold text-stone-900">Schriftarten</h2>
        <p>
          Schriftarten werden lokal mit <code>next/font</code> bereitgestellt. Es erfolgt kein Abruf von Google Fonts Servern.
        </p>

        <h2 className="text-lg font-semibold text-stone-900">Externe Dienste – Google Maps (optionale Einbettung)</h2>
        <p>
          Wenn Sie über „Karte laden (Google)“ zustimmen, wird eine Google-Maps-Karte geladen (Google Ireland Ltd., Gordon House,
          Barrow Street, Dublin 4, Irland; Google LLC, USA). Dabei können IP-Adresse, Geräteinformationen, Nutzungsdaten und ggf.
          Standortdaten (wenn freigegeben) verarbeitet werden; Cookies sind möglich. Rechtsgrundlage: Ihre Einwilligung,
          Art. 6 Abs. 1 lit. a DSGVO. Ohne Klick wird keine Verbindung zu Google hergestellt. Widerruf: Seite neu laden ohne die
          Karte zu aktivieren.
        </p>

        <h2 className="text-lg font-semibold text-stone-900">Kommunikation</h2>
        <p>
          Telefon: Bei Anruf sehen wir Ihre Rufnummer; sie wird nur zur Bearbeitung der Anfrage genutzt (Art. 6 Abs. 1 lit. b/f
          DSGVO).
        </p>
        <p>
          E-Mail: Inhalte und Metadaten werden von unserem E-Mail-Provider verarbeitet; bitte keine sensiblen Daten per E-Mail
          senden.
        </p>
        <p>
          WhatsApp: Links zu <code>wa.me</code> bzw. unserem WhatsApp-Channel führen zu einem Dienst von Meta (WhatsApp
          Ireland/LLC, USA). Bei Nutzung verarbeitet WhatsApp Ihre Telefonnummer, IP, Geräte- und Nutzungsdaten nach deren
          Datenschutzrichtlinie. Rechtsgrundlage: Ihre freiwillige Nutzung/Einwilligung.
        </p>

        <h2 className="text-lg font-semibold text-stone-900">Ihre Rechte</h2>
        <p>
          Sie haben Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit,
          Widerspruch sowie Beschwerde bei einer Aufsichtsbehörde. Kontaktieren Sie uns dazu unter den oben genannten Daten.
        </p>
      </section>
    </main>
  );
}
