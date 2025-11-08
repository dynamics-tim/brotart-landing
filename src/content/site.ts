import dailyOffer from "./daily-offer.json";

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Start", href: "#start" },
  { label: "Angebot", href: "#angebot" },
  { label: "Über uns", href: "#ueber-uns" },
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
    details: "Varianten mit Rind, Spinat-Käse oder Kartoffel – knusprig im Steinofen gebacken.",
    icon: "🥧",
  },
  {
    name: "Mantije & Pide",
    description: "Handgerollte Teigschiffchen mit würzigen Füllungen.",
    details: "Ideal zum Teilen – serviert mit Ajvar, Joghurt oder frischen Kräutern.",
    icon: "🥟",
  },
  {
    name: "Holzofen-Pizza",
    description: "Dünner Boden, hohe Hitze, rauchiges Aroma.",
    details: "Signature-Pizza „Balkan“ mit hausgemachter Sudschuk, eingelegter Paprika und Kräuter-Öl.",
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
      "Gegründet von Familie Imeri – eine Kombination aus schwäbischer Bodenständigkeit und Balkan-Gastfreundschaft.",
  },
  {
    title: "Transparente Produktion",
    description:
      "Der Blick in den Ofen ist gewollt: Gäste sehen, wie Teig ruht, gefüllt wird und im Holzofen aufgeht.",
  },
  {
    title: "Gemeinsamkeit & Genuss",
    description:
      "BrotArt ist Treffpunkt für Frühaufsteher, Mittagspausen und späte Snack-Liebhaber – sieben Tage pro Woche.",
  },
];

export type OpeningHour = {
  days: string;
  hours: string;
};

export const OPENING_HOURS: OpeningHour[] = [
  { days: "Montag – Freitag", hours: "05:00 – 22:00 Uhr" },
  { days: "Samstag", hours: "06:00 – 22:00 Uhr" },
  { days: "Sonntag & Feiertag", hours: "07:00 – 21:00 Uhr" },
];

export const CONTACT_INFO = {
  company: "BrotArt – Bäckerei & Grill",
  street: "Neue Unlinger Straße 19",
  zip: "88499",
  city: "Riedlingen",
  phone: "+4973711296664",
  displayPhone: "07371 1296664",
  email: "hallo@brotart.de",
  whatsapp: "https://wa.me/4973711296664",
  mapsLink: "https://maps.app.goo.gl/RP7JbVXD8xV4yeQP6",
};

export const SOCIAL_LINKS = [
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

export const HERO_BADGES = [
  { label: "Neu seit 2024", detail: "Familiengeführt" },
  { label: "Täglich offen", detail: "05:00 – 22:00 Uhr" },
  { label: "Ofenfrisch", detail: "Burek · Pizza · Brot" },
];
