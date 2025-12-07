export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Start", href: "#start" },
  { label: "Angebot", href: "#angebot" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Bewertungen", href: "#bewertungen" },
  { label: "Öffnungszeiten", href: "#oeffnungszeiten" },
  { label: "Kontakt", href: "#kontakt" },
];

export type Specialty = {
  name: string;
  description: string;
  details: string;
  icon: string;
};

export const SPECIALTIES: Specialty[] = [
  {
    name: "Börek vom Blech",
    description: "Hausgemachter Strudelteig, täglich frisch gerollt und gefüllt.",
    details: "Rind, Spinat-Feta oder Kartoffel – knusprig gebacken in Riedlingen.",
    icon: "🥐",
  },
  {
    name: "Mantije & Pide",
    description: "Handgerollte Teigschiffchen mit würzigen Balkan-Füllungen.",
    details: "Zum Teilen gedacht – serviert mit Ajvar, Joghurt oder frischen Kräutern.",
    icon: "🥟",
  },
  {
    name: "Balkan-Pizza",
    description: "Dünner Boden, hohe Hitze, rauchiges Aroma wie vom Grill.",
    details: "Signature-Pizza »Balkan« mit Sudschuk, Paprika und Kräuteröl.",
    icon: "🍕",
  },
];

export type ValueCard = {
  title: string;
  description: string;
};

export const CORE_VALUES: ValueCard[] = [
  {
    title: "Familienbetrieb aus Riedlingen",
    description: "Geführt von Familie Imeri – schwäbische Bodenständigkeit trifft Balkan-Gastfreundschaft.",
  },
  {
    title: "Handwerklich & transparent",
    description: "Vom Teigkneten bis zum fertigen Produkt – bei uns wird alles frisch vor Ort zubereitet.",
  },
  {
    title: "Ganztägig frische Küche",
    description: "Treffpunkt für Frühaufsteher, Mittagspausen und Spätesser – sieben Tage pro Woche.",
  },
];

export type OpeningHour = {
  days: string;
  hours: string;
  schemaDays: string[];
  opens: string;
  closes: string;
};

export const OPENING_HOURS: OpeningHour[] = [
  { days: "Montag", hours: "05:00 – 22:00 Uhr", schemaDays: ["Monday"], opens: "05:00", closes: "22:00" },
  { days: "Dienstag", hours: "05:00 – 22:00 Uhr", schemaDays: ["Tuesday"], opens: "05:00", closes: "22:00" },
  { days: "Mittwoch", hours: "05:00 – 22:00 Uhr", schemaDays: ["Wednesday"], opens: "05:00", closes: "22:00" },
  { days: "Donnerstag", hours: "05:00 – 22:00 Uhr", schemaDays: ["Thursday"], opens: "05:00", closes: "22:00" },
  { days: "Freitag", hours: "05:00 – 22:00 Uhr", schemaDays: ["Friday"], opens: "05:00", closes: "22:00" },
  { days: "Samstag", hours: "05:00 – 22:00 Uhr", schemaDays: ["Saturday"], opens: "05:00", closes: "22:00" },
  { days: "Sonntag", hours: "07:00 – 22:00 Uhr", schemaDays: ["Sunday"], opens: "07:00", closes: "22:00" },
];

export type ContactInfo = {
  company: string;
  brandShort: string;
  brandInitials: string;
  street: string;
  zip: string;
  city: string;
  phone: string;
  displayPhone: string;
  email: string;
  whatsapp: string;
  mapsLink: string;
};

export const CONTACT_INFO: ContactInfo = {
  company: "Balkan Bäckerei-Pizza-Grill-(Brotart) – MANTIJE – BUREK",
  brandShort: "Balkan Bäckerei-Pizza-Grill",
  brandInitials: "BB",
  street: "Neue Unlinger Str. 19/1",
  zip: "88499",
  city: "Riedlingen",
  phone: "+4973711296664",
  displayPhone: "07371 1296664",
  email: "info@brotart-riedlingen.de",
  whatsapp: "https://wa.me/4973711296664",
  mapsLink:
    "https://maps.app.goo.gl/wvBW7zB8kgAzDZZc9",
};

export type ContactHighlight = {
  label: string;
  value: string;
  description: string;
  href: string;
  icon: string;
  cta: string;
  external?: boolean;
};

export const CONTACT_HIGHLIGHTS: ContactHighlight[] = [
  {
    label: "Telefon",
    value: CONTACT_INFO.displayPhone,
    description: "Direkt durchstellen & bestellen",
    href: `tel:${CONTACT_INFO.phone}`,
    icon: "📞",
    cta: "Jetzt anrufen",
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

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  // { label: "Instagram", href: "https://www.instagram.com/brotart.riedlingen", handle: "@brotart.riedlingen" },
  // { label: "Facebook", href: "https://www.facebook.com/brotart", handle: "@brotart" },
  { label: "Google Maps", href: CONTACT_INFO.mapsLink, handle: "Bewertungen" },
];

export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2652.274537273977!2d9.469986076934964!3d48.160365352393015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47997ef0fef98ecd%3A0x86b9034dfe921bd4!2sNeue%20Unlinger%20Str.%2019%2C%2088499%20Riedlingen!5e0!3m2!1sde!2sde!4v1731016480003!5m2!1sde!2sde";

export type HeroBadge = {
  label: string;
  detail: string;
};

export const HERO_BADGES: HeroBadge[] = [
  { label: "Neu seit 2024", detail: "Familiengeführt" },
  { label: "Täglich offen", detail: "05:00 – 22:00 Uhr" },
  { label: "Ofenfrisch", detail: "Börek · Pizza · Brot" },
];

export type HeroContent = {
  eyebrow: string;
  title: {
    leading: string;
    highlight: string;
    trailing: string;
  };
  description: string;
  secondary: string;
  image: {
    src: string;
    alt: string;
  };
  supportingNote?: string;
};

export const HERO_CONTENT: HeroContent = {
  eyebrow: "Balkan Bäckerei-Pizza-Grill in Riedlingen",
  title: {
    leading: "Börek, Mantije & Pizza",
    highlight: "frisch gebacken",
    trailing: "in der Neuen Unlinger Str. 19/1.",
  },
  description:
    "Ofenfrische Balkan-Spezialitäten ab 05:00 Uhr: Börek, Mantije, Pizza, Frühstück und Snacks zum Mitnehmen.",
  secondary:
    "Takeaway in Riedlingen · Jetzt vorbestellen unter 07371 1296664 oder direkt vorbeikommen.",
  image: {
    src: "/images/hero-borek.jpg",
    alt: "Frisch gebackene Börek und Mantije in Riedlingen",
  },
  supportingNote: "Familienbetrieb · Preiswertes Frühstück · Freundlicher Service",
};

export type GoogleReviewSummary = {
  averageRating: number;
  reviewCount: number;
  dataAsOf: string;
  source: string;
  url: string;
  highlights: string[];
};

export type GoogleReview = {
  author: string;
  role: string;
  relativeTime: string;
  rating: number;
  excerpt: string;
  highlight: string;
  topics: string[];
};

export const GOOGLE_REVIEW_SUMMARY: GoogleReviewSummary = {
  averageRating: 5,
  reviewCount: 86,
  dataAsOf: "08.11.2025",
  source: "Google Maps",
  url: CONTACT_INFO.mapsLink,
  highlights: [
    "Preis-Leistung für Frühstück & Börek wird oft gelobt",
    "Schnelle Mitnahme in Riedlingen",
    "Freundlicher Service von 05:00 bis 22:00 Uhr",
  ],
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    author: "Christian K.",
    role: "Local Guide aus Riedlingen",
    relativeTime: "vor 2 Monaten",
    rating: 5,
    excerpt:
      "Beste Börek der Stadt. Hol mir nach der Nachtschicht immer ein warmes Stück und einen Kaffee – lohnt den Umweg.",
    highlight: "Frühöffnung für Pendler",
    topics: ["Börek", "Frühstück", "Pendler"],
  },
  {
    author: "Julia H.",
    role: "Stammkundin",
    relativeTime: "vor 2 Wochen",
    rating: 5,
    excerpt:
      "Pizza mit Sudschuk mega, kann ich nur empfehlen. Der Inhaber versucht jeden Wunsch zu erfüllen.",
    highlight: "Takeaway klappt schnell",
    topics: ["Pizza", "Takeaway", "Service"],
  },
  {
    author: "Cornelia L.",
    role: "Frühstücksfan",
    relativeTime: "vor 1 Monat",
    rating: 5,
    excerpt:
      "Günstiges Frühstück, frische Sesamzöpfe und Mantije wie im Urlaub. Personal super freundlich.",
    highlight: "Preiswertes Frühstück",
    topics: ["Frühstück", "Mantije", "Service"],
  },
  {
    author: "Andy K.",
    role: "Handwerker aus Neufra",
    relativeTime: "vor 3 Wochen",
    rating: 5,
    excerpt:
      "Mittags schnell Brotzeit holen, abends noch Pizza – 05 bis 22 Uhr offen ist perfekt für Schichtarbeit.",
    highlight: "Lange Öffnungszeiten",
    topics: ["Öffnungszeiten", "Pizza", "Snacks"],
  },
];
