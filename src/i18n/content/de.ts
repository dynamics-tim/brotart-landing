import {
  CONTACT_HIGHLIGHTS,
  CONTACT_INFO,
  CORE_VALUES,
  GOOGLE_MAPS_EMBED,
  GOOGLE_REVIEW_SUMMARY,
  GOOGLE_REVIEWS,
  HERO_BADGES,
  HERO_CONTENT,
  MENU_CATEGORIES,
  NAV_LINKS,
  OPENING_HOURS,
  SOCIAL_LINKS,
  SPECIALTIES,
} from "@/content/site";
import { HERO_GALLERY_IMAGES } from "@/content/hero-gallery";
import { DEFAULT_LOCALE, LOCALE_LABELS } from "../locales";
import type { SiteContent } from "../content";

export const baseContent: SiteContent = {
  locale: DEFAULT_LOCALE,
  languageName: LOCALE_LABELS[DEFAULT_LOCALE],
  languageLabel: "Sprache",
  skipToContentLabel: "Zum Inhalt springen",
  contactInfo: CONTACT_INFO,
  nav: {
    links: NAV_LINKS,
    openLabel: "Menü öffnen",
    closeLabel: "Menü schließen",
    logoAriaLabel: "Zur Startsektion scrollen",
    desktopTagline: "Mantije - Börek - Pizza",
    callLabel: "Jetzt anrufen",
    mainNavLabel: "Hauptnavigation",
    mobileNavLabel: "Mobile Navigation",
    jumpToLabel: "Zu",
    legalLinks: {
      impressum: "Impressum",
      privacy: "Datenschutz",
    },
  },
  hero: {
    content: HERO_CONTENT,
    badges: HERO_BADGES,
    galleryImages: HERO_GALLERY_IMAGES,
    ctas: {
      callNow: "Jetzt anrufen",
      viewMenu: "Speisekarte ansehen",
    },
    status: {
      openPrefix: "Jetzt geöffnet bis",
      closedPrefix: "Öffnet um",
      openUntil: "22:00 Uhr",
      opensAtWeekday: "05:00 Uhr",
      opensAtSunday: "07:00 Uhr",
    },
    galleryLabels: {
      aria: "Hero Galerie",
      fallback: "Galerie folgt in Kürze",
    },
    whatsappLabel: "News & Angebote via WhatsApp",
  },
  floatingCta: {
    label: "Jetzt bestellen",
    phoneDisplay: "07371 1296664",
    ariaLabel: "Direkt anrufen und bestellen unter 07371 1296664",
    showPriceBadge: false,
    priceBadge: "ab 2,50€",
  },
  specialties: {
    eyebrow: "Balkan Klassiker",
    title: "Börek, Mantije, Pizza & Frühstück in Riedlingen",
    description:
      "Jede Spezialität entsteht in kleinen Chargen, ruht mit Familien-Gewürzmischung und wird erst kurz vor dem Servieren frisch gebacken – knusprig, saftig und perfekt zum Mitnehmen.",
    items: SPECIALTIES,
  },
  menu: {
    eyebrow: "Speisekarte",
    defaultSectionName: "Weitere",
    takeawayLabel: "Zum Mitnehmen",
    orderNowLabel: "Jetzt bestellen",
    orderPhone: "+4973714095580",
    allergensTitle: "Zusatzstoffe",
    allergensLegend: {
      A: "Gluten",
      B: "Glutamat",
      C: "Pfeffer",
      D: "Salz",
      E: "Milch & Laktose",
      F: "Soja, Kartoffelstärke",
      H: "Knoblauch",
    },
    footerNote:
      "Alle Preise in Euro inkl. MwSt. – Preise und Verfügbarkeit können sich ändern – Stand: Dezember 2025",
    categories: MENU_CATEGORIES,
  },
  hours: {
    eyebrow: "Öffnungszeiten",
    heading: "05:00 - 22:00 Uhr, jeden Tag.",
    description:
      "Frühstück für Frühaufsteher, Mittagspause mit Grill & Pizza, abends Snacks für Spät- und Nachtschichten – immer frisch, immer freundlich, ohne Vorbestellung.",
    tipLabel: "Tipp",
    tipText: "Tagesangebote gibt es ab 10 Uhr – wer sicher ein Stück möchte, ruft kurz unter 07371 1296664 an.",
    openingHours: OPENING_HOURS,
    mapsEmbed: GOOGLE_MAPS_EMBED,
    mapConsent: {
      title: "Google Maps laden?",
      description:
        "Google Maps wird erst nach Ihrer Einwilligung geladen. Mit Klick auf \"Karte laden (Google)\" willige ich ein, dass Google Ireland/Google LLC (USA) meine IP-Adresse und Nutzungsdaten erhält; Cookies sind möglich.",
      cta: "Karte laden (Google)",
      note: "Hinweis: Einbettung widerrufen, indem Sie die Seite neu laden.",
      iframeTitle: "Google Maps - Balkan Bäckerei-Pizza-Grill Standort",
    },
    location: {
      eyebrow: "Standort",
      street: "Neue Unlinger Str. 19/1",
      city: "88499 Riedlingen",
      transport: "Parkplätze vor dem Laden - Buslinie 7606 \"Neue Unlinger Straße\"",
      cta: "Route planen",
    },
  },
  reviews: {
    eyebrow: "Bewertungen",
    heading: "Was unsere Gaeste sagen",
    description:
      "Stimmen aus Riedlingen, Neufra und Umgebung: echte Erfahrungsberichte zu Börek, Frühstück, Pizza und Takeaway der Balkan Bäckerei-Pizza-Grill-(Brotart).",
    buttonLabel: "Alle Rezensionen auf Google lesen",
    summary: GOOGLE_REVIEW_SUMMARY,
    reviews: GOOGLE_REVIEWS,
    labels: {
      average: "Durchschnitt",
      outOf: "/ 5",
      publicVoices: "öffentliche Stimmen",
      asOf: "Stand",
      source: "Quelle",
      starSuffix: "von 5 Sternen",
    },
  },
  about: {
    eyebrow: "Unsere Geschichte",
    heading: "Familienbetrieb mit Blick über den Tellerrand.",
    description:
      "Balkan Bäckerei-Pizza-Grill-(Brotart) verbindet handwerkliches Brotbacken mit authentischen Balkan-Rezepten. Wir kneten, füllen und grillen alles selbst – mit Mehl aus der Region, Gewürzmischungen aus der Familienküche und einem Ofen, der fast rund um die Uhr läuft.",
    differentiators: [
      {
        title: "Tagesaktuelle Theke",
        description: "Brot, Börek und Sesamzöpfe werden mehrmals täglich frisch gebacken – nichts liegt lange.",
      },
      {
        title: "Mittagszeit = Grillzeit",
        description: "Cevapcici, Wraps, Salate und Pizza gehen schnell über die Theke zum Mitnehmen.",
      },
      {
        title: "Abends entspannt",
        description: "Bis 22:00 Uhr warme Küche, Snacks und Desserts – perfekt nach Feierabend oder für Spätschichten.",
      },
    ],
    values: CORE_VALUES,
    whyTitle: "Warum Balkan Bäckerei-Pizza-Grill?",
  },
  contact: {
    eyebrow: "Kontakt & Bestellung",
    heading: "Wir freuen uns auf Ihren Besuch oder Ihre Vorbestellung.",
    description:
      "Rufen Sie an, schreiben Sie eine WhatsApp oder kommen Sie spontan vorbei – wir halten immer etwas Ofenfrisches bereit und packen es für Takeaway ein.",
    highlights: CONTACT_HIGHLIGHTS,
    socialHeading: "Social & Presse",
    socialLinks: SOCIAL_LINKS,
  },
  footer: {
    tagline: "Balkan-Soulfood in Riedlingen",
    noTracking: "Keine Cookies oder Tracking. Google Maps wird erst nach Ihrem Klick geladen.",
    backToTop: "Nach oben",
    rights: "Alle Rechte vorbehalten.",
  },
  legal: {
    backLabel: "Zurück zur Startseite",
    impressum: {
      metadata: {
        title: "Impressum",
        description: "Rechtliche Angaben zur Balkan Bäckerei-Pizza-Grill-(Brotart) in Riedlingen.",
      },
      title: "Impressum",
      sections: [
        {
          heading: "Angaben gemäß Paragraph 5 TMG",
          paragraphs: [CONTACT_INFO.company, CONTACT_INFO.street, `${CONTACT_INFO.zip} ${CONTACT_INFO.city}`],
        },
        {
          heading: "Kontakt",
          paragraphs: [`Telefon: ${CONTACT_INFO.displayPhone}`, `E-Mail: ${CONTACT_INFO.email}`],
        },
        {
          heading: "Vertretungsberechtigt",
          paragraphs: ["Familie Imeri", CONTACT_INFO.street, `${CONTACT_INFO.zip} ${CONTACT_INFO.city}`],
        },
        {
          heading: "Inhaltlich Verantwortlicher (Paragraph 18 Abs. 2 MStV)",
          paragraphs: ["Familie Imeri, Anschrift wie oben."],
        },
        {
          heading: "Umsatzsteuer-ID",
          paragraphs: [CONTACT_INFO.taxId],
        },
        {
          heading: "Streitschlichtung",
          paragraphs: [
            "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
          ],
        },
      ],
    },
    privacy: {
      metadata: {
        title: "Datenschutzerklärung",
        description: "Informationen zum Datenschutz bei Balkan Bäckerei-Pizza-Grill-(Brotart) in Riedlingen.",
      },
      title: "Datenschutzerklärung",
      sections: [
        {
          heading: "Einleitung",
          paragraphs: [
            "Wir freuen uns über Ihr Interesse an Balkan Bäckerei-Pizza-Grill-(Brotart). Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung Ihrer Daten beim Besuch unserer Website.",
          ],
        },
        {
          heading: "Verantwortlicher",
          paragraphs: [
            `${CONTACT_INFO.company}, ${CONTACT_INFO.street}, ${CONTACT_INFO.zip} ${CONTACT_INFO.city}`,
            `Telefon: ${CONTACT_INFO.displayPhone}`,
            `E-Mail: ${CONTACT_INFO.email}`,
          ],
        },
        {
          heading: "Hosting & Bereitstellung (GitHub Pages/CDN)",
          paragraphs: [
            "Unsere Website wird als statische Seite über GitHub Pages (GitHub Inc., 88 Colin P. Kelly Jr. St, San Francisco, CA 94107, USA) ausgeliefert. Dabei werden Server-Logfiles (IP-Adresse, Datum/Uhrzeit, abgerufene Datei, Referrer, User-Agent) zur technischen Bereitstellung verarbeitet. CDN-Dienstleister wie Fastly können eingebunden sein. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherer und schneller Auslieferung).",
            "Drittlandtransfer: GitHub/Fastly haben Sitz in den USA. Übermittlung erfolgt auf Basis von Standardvertragsklauseln; ein Restrisiko des US-Zugriffs kann nicht ausgeschlossen werden.",
            "Speicherdauer Logfiles: üblicherweise 7-30 Tage (anbieterabhängig), länger nur zu Beweiszwecken.",
          ],
        },
        {
          heading: "Cookies & Tracking",
          paragraphs: [
            "Wir setzen keine Cookies und keine Tracking-Tools ein. Es findet keine Profilbildung statt. Eine Verbindung zu Google entsteht nur, wenn Sie die Karte aktiv laden (siehe unten).",
          ],
        },
        {
          heading: "Schriftarten",
          paragraphs: [
            "Alle Schriftarten (Inter, Playfair Display, Orbitron) werden lokal mit next/font/google optimiert und als Webfonts direkt vom Server bereitgestellt. Es erfolgt kein direkter Abruf von Google Fonts Servern während des Seitenbesuchs. Die Schriftdateien werden beim Build-Prozess heruntergeladen und selbst gehostet, sodass keine Verbindung zu Google oder anderen Drittanbietern für Schriftarten hergestellt wird.",
          ],
        },
        {
          heading: "Externe Dienste - Google Maps (optionale Einbettung)",
          paragraphs: [
            "Wenn Sie über \"Karte laden (Google)\" zustimmen, wird eine Google-Maps-Karte geladen (Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland; Google LLC, USA). Dabei können IP-Adresse, Geräteinformationen, Nutzungsdaten und ggf. Standortdaten (wenn freigegeben) verarbeitet werden; Cookies sind möglich. Rechtsgrundlage: Ihre Einwilligung, Art. 6 Abs. 1 lit. a DSGVO. Ohne Klick wird keine Verbindung zu Google hergestellt. Widerruf: Seite neu laden ohne die Karte zu aktivieren.",
          ],
        },
        {
          heading: "Kommunikation",
          paragraphs: [
            "Telefon: Bei Anruf sehen wir Ihre Rufnummer; sie wird nur zur Bearbeitung der Anfrage genutzt (Art. 6 Abs. 1 lit. b/f DSGVO).",
            "E-Mail: Inhalte und Metadaten werden von unserem E-Mail-Provider verarbeitet; bitte keine sensiblen Daten per E-Mail senden.",
            "WhatsApp: Links zu wa.me bzw. unserem WhatsApp-Channel führen zu einem Dienst von Meta (WhatsApp Ireland/LLC, USA). Bei Nutzung verarbeitet WhatsApp Ihre Telefonnummer, IP, Geräte- und Nutzungsdaten nach deren Datenschutzrichtlinie. Rechtsgrundlage: Ihre freiwillige Nutzung/Einwilligung.",
          ],
        },
        {
          heading: "Ihre Rechte",
          paragraphs: [
            "Sie haben Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch sowie Beschwerde bei einer Aufsichtsbehörde. Kontaktieren Sie uns dazu unter den oben genannten Daten.",
          ],
        },
      ],
    },
  },
};
