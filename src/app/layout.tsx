import type { Metadata } from "next";
import { Inter, Playfair_Display, Orbitron } from "next/font/google";

import { CONTACT_INFO, OPENING_HOURS, SOCIAL_LINKS } from "@/content/site";
import "./globals.css";
import Providers from "./providers";
import { DEFAULT_LOCALE } from "@/i18n/locales";
import { getSiteContent } from "@/i18n/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["700", "900"],
  display: "swap",
});

const baseUrl = "https://brotart-riedlingen.de";
const heroOgImage = `${baseUrl}/images/hero-borek.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Balkan Bäckerei-Pizza-Grill (Brotart) - Börek, Mantije & Pizza in Riedlingen",
    template: "%s | Balkan Bäckerei-Pizza-Grill Riedlingen",
  },
  description:
    "Balkan Bäckerei-Pizza-Grill-(Brotart) in Riedlingen: Börek, Mantije, Pizza, Frühstück und Snacks zum Mitnehmen - täglich von 05:00 bis 22:00 Uhr in der Neuen Unlinger Str. 19/1, 88499 Riedlingen. Jetzt anrufen: 07371 1296664.",
  keywords: [
    "Balkan Bäckerei Riedlingen",
    "Börek Neue Unlinger Str 19/1",
    "Pizza Riedlingen",
    "Frühstück Riedlingen",
    "Takeaway Riedlingen",
  ],
  openGraph: {
    title: "Balkan Bäckerei-Pizza-Grill - Börek, Mantije & Pizza in Riedlingen",
    description:
      "Ofenfrische Balkan-Spezialitäten, Frühstück und Pizza zum Mitnehmen. Neue Unlinger Str. 19/1 – Telefon 07371 1296664.",
    type: "website",
    url: baseUrl,
    locale: "de_DE",
    images: [
      {
        url: heroOgImage,
        width: 1200,
        height: 630,
        alt: "Balkan Börek und Pizza frisch gebacken in Riedlingen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balkan Bäckerei-Pizza-Grill in Riedlingen",
    description: "Börek, Mantije, Pizza & Frühstück ab 05:00 Uhr – Neue Unlinger Str. 19/1 – 07371 1296664.",
    images: [heroOgImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["Bakery", "Restaurant"],
  "@id": `${baseUrl}/#localbusiness`,
  name: CONTACT_INFO.company,
  url: baseUrl,
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  image: heroOgImage,
  priceRange: "€",
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT_INFO.street,
    postalCode: CONTACT_INFO.zip,
    addressLocality: CONTACT_INFO.city,
    addressRegion: "BW",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.1603653,
    longitude: 9.4725603,
  },
  hasMap: CONTACT_INFO.mapsLink,
  sameAs: [CONTACT_INFO.mapsLink, ...SOCIAL_LINKS.map((link) => link.href)],
  openingHoursSpecification: OPENING_HOURS.map(({ schemaDays, opens, closes }) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: schemaDays.map((day) => `https://schema.org/${day}`),
    opens,
    closes,
  })),
  servesCuisine: ["Balkan", "Börek", "Mantije", "Pizza", "Bakery"],
  acceptsReservations: false,
  takeaway: true,
  delivery: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseContent = getSiteContent(DEFAULT_LOCALE);
  const localBusinessJsonLd = JSON.stringify(LOCAL_BUSINESS_SCHEMA);

  return (
    <html lang={DEFAULT_LOCALE}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.svg" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self' https://images.unsplash.com data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; frame-src https://www.google.com; object-src 'none'; base-uri 'self'; form-action 'self';"
        />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), payment=()" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: localBusinessJsonLd }} />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${orbitron.variable} antialiased`}>
        <a href="#main" className="skip-link">
          {baseContent.skipToContentLabel}
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
