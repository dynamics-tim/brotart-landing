import dailyOffer from "./daily-offer.json";

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
    name: "Burek vom Blech",
    description: "Hausgemachter Strudelteig, täglich frisch gefüllt.",
    details: "Rind, Spinat-Käse oder Kartoffel – knusprig im Steinofen gebacken.",
    icon: "🥟",
  },
  {
    name: "Mantije & Pide",
    description: "Handgerollte Teigschiffchen mit würzigen Füllungen.",
    details: "Zum Teilen gedacht – serviert mit Ajvar, Joghurt oder frischen Kräutern.",
    icon: "🥖",
  },
  {
    name: "Holzofen-Pizza",
    description: "Dünner Boden, hohe Hitze, rauchiges Aroma.",
    details: "Signature-Pizza „Balkan“ mit Sudschuk, eingelegter Paprika und Kräuteröl.",
    icon: "🍕",
  },
];

export type ValueCard = {
  title: string;
  description: string;
};

export const CORE_VALUES: ValueCard[] = [
  {
    title: "Familienbetrieb seit 2024",
    description:
      "Gegründet von Familie Imeri – schwäbische Bodenständigkeit trifft Balkan-Gastfreundschaft.",
  },
  {
    title: "Transparente Produktion",
    description: "Der Blick in den Ofen ist gewollt: Gäste sehen jede Etappe vom Teig bis zum Ofen.",
  },
  {
    title: "Gemeinsamkeit & Genuss",
    description: "Treffpunkt für Frühaufsteher, Mittagspausen und Nachtschwärmer – sieben Tage die Woche.",
  },
];

export type OpeningHour = {
  days: string;
  hours: string;
};

export const OPENING_HOURS: OpeningHour[] = [
  { days: "Montag – Freitag", hours: "05:00 – 22:00 Uhr" },
  { days: "Samstag", hours: "05:00 – 22:00 Uhr" },
  { days: "Sonntag", hours: "07:00 – 22:00 Uhr" },
];

export type ContactInfo = {
  company: string;
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
  company: "Balkan Bäckerei-Pizza-Grill-(Brotart) - MANTIJE - BUREK",
  street: "Neue Unlinger Str. 19/1",
  zip: "88499",
  city: "Riedlingen",
  phone: "+4973711296664",
  displayPhone: "07371 1296664",
  email: "kontakt@brotart-riedlingen.de",
  whatsapp: "https://wa.me/4973711296664",
  mapsLink: "https://maps.app.goo.gl/RP7JbVXD8xV4yeQP6",
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
    description: "Direkter Draht täglich 05:00 – 22:00 Uhr (So ab 07:00 Uhr)",
    href: `tel:${CONTACT_INFO.phone}`,
    icon: "📞",
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

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com", handle: "@brotart.riedlingen" },
  { label: "Facebook", href: "https://www.facebook.com", handle: "@brotart" },
  { label: "Schwäbische Zeitung", href: "https://www.schwaebische.de", handle: "Presse" },
];

export type DailyOffer = {
  title: string;
  tagline: string;
  offer: string;
  price: string;
  note: string;
  lastUpdated?: string;
};

export const DAILY_OFFER: DailyOffer = dailyOffer;

export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2652.274537273977!2d9.469986076934964!3d48.160365352393015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47997ef0fef98ecd%3A0x86b9034dfe921bd4!2sNeue%20Unlinger%20Str.%2019%2C%2088499%20Riedlingen!5e0!3m2!1sde!2sde!4v1731016480003!5m2!1sde!2sde";

export type HeroBadge = {
  label: string;
  detail: string;
};

export const HERO_BADGES: HeroBadge[] = [
  { label: "Neu seit 2024", detail: "Familiengeführt" },
  { label: "Täglich offen", detail: "05:00 – 22:00 Uhr (So ab 07:00 Uhr)" },
  { label: "Ofenfrisch", detail: "Burek · Pizza · Brot" },
];

export type HeroContent = {
  eyebrow: string;
  title: {
    leading: string;
    highlight: string;
    trailing: string;
  };
  description: string;
  image: {
    src: string;
    alt: string;
  };
  supportingNote?: string;
};

export const HERO_CONTENT: HeroContent = {
  eyebrow: "Balkan Bäckerei-Pizza-Grill (Brotart)",
  title: {
    leading: "Balkan-Spezialitäten &",
    highlight: "Backhandwerk",
    trailing: "aus Riedlingen.",
  },
  description:
    "Frisches Brot, Börek, Mantije, Holzofenpizza und Imbissgerichte – täglich ab 05:00 Uhr (Sonntag 07:00 Uhr) bis 22:00 Uhr geöffnet für Frühaufsteher und Spätesser.",
  image: {
    src: "https://images.unsplash.com/photo-1486887396153-fa416526c108?auto=format&fit=crop&w=1200&q=80",
    alt: "Frisch gebackenes Brot bei Balkan Bäckerei-Pizza-Grill in Riedlingen",
  },
  supportingNote: "Offenherzige Küche & direkte Sicht auf den Holzofen",
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
  reviewCount: 134,
  dataAsOf: "15.11.2025",
  source: "Google Maps",
  url: "https://www.google.com/maps/place/Balkan+B%C3%A4ckerei-Pizza-Grill-(Brotart)+-+MANTIJE+-+BUREK/@48.1499404,9.4871048,17z/data=!4m8!3m7!1s0x479a33a082553fc3:0x9e93d68f8046cbc0!8m2!3d48.1500973!4d9.4868941!9m1!1b1!16s%2Fg%2F11lf3jk52m?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D",
  highlights: [
    "Preis-Leistung wird besonders oft hervorgehoben",
    "Auswahl reicht von Börek über Wraps bis Cevapcici",
    "Servicefenster von 05:00 bis 22:00 Uhr fällt positiv auf",
  ],
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    author: "Christian Kell",
    role: "Local Guide | 42 Rezensionen | 122 Fotos",
    relativeTime: "vor 2 Monaten",
    rating: 5,
    excerpt:
      "Kann ich nur empfehlen. Super Auswahl, alles was ich bis jetzt probiert habe (Backwaren) war super. Fahre sogar immer, wenn ich morgens vom Dienst komme, einen kleinen Umweg um dort ...",
    highlight: "Pendler holen sich hier ihr frisches Gebäck",
    topics: ["Backwaren", "Frühstück", "Umweg-wert"],
  },
  {
    author: "Julia H.",
    role: "Local Guide | 33 Rezensionen | 5 Fotos",
    relativeTime: "vor 2 Wochen",
    rating: 5,
    excerpt:
      "Ein mit sehr viel Liebe geführter Laden. Der Inhaber war so bemüht, alle Wünsche der Kunden zu erfüllen. Extrem leckere Laugenstangen und auch alles andere war top. Es gibt sogar Wraps und Cevapcici.",
    highlight: "Service mit Handschlaggefühl",
    topics: ["Service", "Wraps", "Cevapcici"],
  },
  {
    author: "Cornelia Lutz",
    role: "Local Guide | 35 Rezensionen | 5 Fotos",
    relativeTime: "vor 2 Monaten",
    rating: 5,
    excerpt:
      "Mittlerweile mein Lieblingsbäcker in Riedlingen. Man wird immer freundlich bedient und Preis/Leistung einfach top! Die Qualität der Backwaren ist hervorragend ... Ob Börek, gefüllte Hörnchen oder Brötchen – alles super lecker!",
    highlight: "Lieblingsbäcker der Stadt",
    topics: ["Börek", "Preis-Leistung", "Gastfreundschaft"],
  },
  {
    author: "Andy Kolitsch",
    role: "Local Guide | 219 Rezensionen | 265 Fotos",
    relativeTime: "vor 2 Wochen",
    rating: 5,
    excerpt:
      "Sehr freundliches Personal. Essen frisch und sehr lecker. Super Öffnungszeiten 5-22 Uhr – perfekt für jeden. Große Auswahl.",
    highlight: "Frische Küche rund um die Uhr",
    topics: ["Öffnungszeiten", "Frische", "Auswahl"],
  },
];
