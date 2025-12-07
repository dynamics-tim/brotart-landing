export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Start", href: "#start" },
  { label: "Angebot", href: "#angebot" },
  { label: "Speisekarte", href: "#speisekarte" },
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
    details: "Rind, Spinat-Feta oder Käse - knusprig gebacken in Riedlingen.",
    icon: "🥧",
  },
  {
    name: "Mantije & Pide",
    description: "Handgerollte Teigschiffchen mit würzigen Balkan-Füllungen.",
    details: "Zum Teilen gedacht - serviert mit Ajvar, Joghurt oder frischen Kräutern.",
    icon: "🥙",
  },
  {
    name: "Balkan-Pizza",
    description: "Dünner Boden, hohe Hitze, rauchiges Aroma wie vom Grill.",
    details: "Signature-Pizza „Balkan“ mit Sudschuk, Paprika und Kräuteröl.",
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
    description: "Geführt von Familie Imeri - schwäbische Bodenständigkeit trifft Balkan-Gastfreundschaft.",
  },
  {
    title: "Handwerklich & transparent",
    description: "Vom Teigkneten bis zum fertigen Produkt - bei uns wird alles frisch vor Ort zubereitet.",
  },
  {
    title: "Ganztägig frische Küche",
    description: "Treffpunkt für Frühaufsteher, Mittagspausen und Spätesser - sieben Tage pro Woche.",
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
  { days: "Montag", hours: "05:00 - 22:00 Uhr", schemaDays: ["Monday"], opens: "05:00", closes: "22:00" },
  { days: "Dienstag", hours: "05:00 - 22:00 Uhr", schemaDays: ["Tuesday"], opens: "05:00", closes: "22:00" },
  { days: "Mittwoch", hours: "05:00 - 22:00 Uhr", schemaDays: ["Wednesday"], opens: "05:00", closes: "22:00" },
  { days: "Donnerstag", hours: "05:00 - 22:00 Uhr", schemaDays: ["Thursday"], opens: "05:00", closes: "22:00" },
  { days: "Freitag", hours: "05:00 - 22:00 Uhr", schemaDays: ["Friday"], opens: "05:00", closes: "22:00" },
  { days: "Samstag", hours: "05:00 - 22:00 Uhr", schemaDays: ["Saturday"], opens: "05:00", closes: "22:00" },
  { days: "Sonntag", hours: "07:00 - 22:00 Uhr", schemaDays: ["Sunday"], opens: "07:00", closes: "22:00" },
];

export type ContactInfo = {
  company: string;
  brandShort: string;
  brandInitials: string;
  street: string;
  zip: string;
  city: string;
  phone: string;
  taxId: string;
  displayPhone: string;
  email: string;
  whatsapp: string;
  mapsLink: string;
};

export const CONTACT_INFO: ContactInfo = {
  company: "Balkan Bäckerei-Pizza-Grill-(Brotart) - MANTIJE - BUREK",
  brandShort: "Balkan Bäckerei-Pizza-Grill",
  brandInitials: "BB",
  street: "Neue Unlinger Str. 19/1",
  zip: "88499",
  city: "Riedlingen",
  phone: "+4973711296664",
  taxId: "79446/11617",
  displayPhone: "07371 1296664",
  email: "baeckereibrotart@gmail.com",
  whatsapp: "https://wa.me/4973711296664",
  mapsLink: "https://maps.app.goo.gl/wvBW7zB8kgAzDZZc9",
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
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.9327990446327!2d9.482023191558474!3d48.15010077615481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a33a082553fc3%3A0x9e93d68f8046cbc0!2sBalkan%20B%C3%A4ckerei-Pizza-Grill-(Brotart)%20-%20MANTIJE%20-%20BUREK!5e0!3m2!1sde!2sde!4v1765094047223!5m2!1sde!2sde";

export type HeroBadge = {
  label: string;
  detail: string;
};

export const HERO_BADGES: HeroBadge[] = [
  { label: "Neu seit 2024", detail: "Familiengeführt" },
  { label: "Täglich offen", detail: "05:00 - 22:00 Uhr" },
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
  description: "Ofenfrische Balkan-Spezialitäten ab 05:00 Uhr: Börek, Mantije, Pizza, Frühstück und Snacks zum Mitnehmen.",
  secondary: "Takeaway in Riedlingen – Jetzt vorbestellen unter 07371 1296664 oder direkt vorbeikommen.",
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
      "Beste Börek der Stadt. Hol mir nach der Nachtschicht immer ein warmes Stück und einen Kaffee - lohnt den Umweg.",
    highlight: "Frühöffnung für Pendler",
    topics: ["Börek", "Frühstück", "Pendler"],
  },
  {
    author: "Julia H.",
    role: "Stammkundin",
    relativeTime: "vor 2 Wochen",
    rating: 5,
    excerpt: "Pizza mit Sudschuk mega, kann ich nur empfehlen. Der Inhaber versucht jeden Wunsch zu erfüllen.",
    highlight: "Takeaway klappt schnell",
    topics: ["Pizza", "Takeaway", "Service"],
  },
  {
    author: "Cornelia L.",
    role: "Frühstücksfan",
    relativeTime: "vor 1 Monat",
    rating: 5,
    excerpt: "Günstiges Frühstück, frische Sesamzöpfe und Mantije wie im Urlaub. Personal super freundlich.",
    highlight: "Preiswertes Frühstück",
    topics: ["Frühstück", "Mantije", "Service"],
  },
  {
    author: "Andy K.",
    role: "Handwerker aus Neufra",
    relativeTime: "vor 3 Wochen",
    rating: 5,
    excerpt:
      "Mittags schnell Brotzeit holen, abends noch Pizza - 05 bis 22 Uhr offen ist perfekt für Schichtarbeit.",
    highlight: "Lange Öffnungszeiten",
    topics: ["Öffnungszeiten", "Pizza", "Snacks"],
  },
];

// Speisekarte
export type MenuItem = {
  name: string;
  description: string;
  price: string;
  note?: string;
  allergens?: string[];
};

export type MenuCategory = {
  id: string;
  title: string;
  description: string;
  header: string;
  subtitle: string;
  items: MenuItem[];
  visible?: boolean;
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "grill",
    title: "Grillgerichte",
    description:
      "Balkan-Grill mit Rind und Geflügel – frisch gegrillt, mit Salat und Brot. Ideal zum Mitnehmen oder direkt genießen.",
    header: "Grillgerichte in Riedlingen – Cevapcici, Sucuk, Pleskawitza",
    subtitle: "Balkangrill mit Rind und Geflügel: Cevapcici, Sucuk, Pleskawitza und mehr. Frisch gegrillt, mit Salat und Brot – ideal zum Mitnehmen oder vor Ort genießen.",
    items: [
      {
        name: "Cevapcici (Rind)",
        description: "Mit Salat und Brot – 10 Stk.",
        price: "10,00 €",
        note: "Halbe Portion 5,00 € – 5 Stk.",
        allergens: [],
      },
      {
        name: "Hamburger (Rind)",
        description: "Mit Salat",
        price: "5,00 €",
        allergens: [],
      },
      {
        name: "Cheeseburger (Rind)",
        description: "Mit Salat",
        price: "6,00 €",
        allergens: [],
      },
      {
        name: "Hähnchenbrust",
        description: "Mit Salat und Brot",
        price: "11,00 €",
        allergens: [],
      },
      {
        name: "Sucuk (Rind)",
        description: "Mit Salat und Brot",
        price: "11,00 €",
        allergens: ["A", "B", "C", "D"],
      },
      {
        name: "Pleskawitza (standard)",
        description: "Mit Salat und Brot",
        price: "10,00 €",
        allergens: [],
      },
      {
        name: "Pleskawitza (mit Käse)",
        description: "Mit Salat und Brot",
        price: "12,00 €",
        allergens: [],
      },
      {
        name: "Target vom Rind",
        description: "Mit Salat und Brot",
        price: "17,00 €",
        allergens: ["A", "B", "C", "D"],
      },
      {
        name: "Gemischter Salat",
        description: "Frisch angerichtet",
        price: "4,00 €",
        allergens: ["D"],
      },
      {
        name: "Extra Brot",
        description: "Ofenfrisches Brot",
        price: "1,20 €",
        allergens: ["A", "D"],
      },
    ],
    visible: true,
  },
  {
    id: "ofen",
    title: "Ofen-Spezialitäten",
    description: "Börek, Mantije und Pizza frisch gebacken aus dem Ofen.",
    header: "Ofen-Spezialitäten – Börek, Mantije & Pizza",
    subtitle: "Ofenfrische Balkan-Klassiker: Börek mit verschiedenen Füllungen, handgerollte Mantije und Pizza mit rauchigem Aroma – täglich frisch gebacken.",
    items: [
      {
        name: "Börek (Rind)",
        description: "Ofenfrisches Brot",
        price: "4,00 €",
        allergens: ["A", "D"],
      },
      {
        name: "Börek (Spinat-Feta)",
        description: "Ofenfrisches Brot",
        price: "4,00 €",
        allergens: ["A", "D"],
      },
      {
        name: "Börek (Käse)",
        description: "Ofenfrisches Brot",
        price: "4,00 €",
        allergens: ["A", "D"],
      },
      {
        name: "Mantije (Rind) - 7 Stück",
        description: "Frisch angerichtet",
        price: "5,00 €",
        allergens: ["A", "D"],
      }
    ],
    visible: true,
  },
  {
    id: "backwaren",
    title: "Backwaren & Frühstück",
    description: "Sesamzöpfe, Croissants, belegte Brötchen und süße Teilchen.",
    header: "Backwaren & Frühstück ab 05:00 Uhr",
    subtitle: "Frische Sesamzöpfe, Croissants, belegte Brötchen und süße Teilchen – perfekt für einen guten Start in den Tag.",
    items: [
      {
        name: "Sesamzopf",
        description: "Ofenfrisch, mit Sesam bestreut",
        price: "2,50 €",
        allergens: ["A", "D"],
      },
      {
        name: "Croissant",
        description: "Buttrig und frisch gebacken",
        price: "1,50 €",
        allergens: ["A", "D"],
      }
    ],
    visible: false,
  },
];
