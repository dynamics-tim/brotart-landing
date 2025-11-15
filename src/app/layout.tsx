import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import {
  CONTACT_INFO,
  OPENING_HOURS,
  SOCIAL_LINKS,
} from "@/content/site";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://brotart-riedlingen.de"),
  title: {
    default: "Balkan Bäckerei-Pizza-Grill-(Brotart) - MANTIJE - BUREK in Riedlingen",
    template: "%s | Balkan Bäckerei-Pizza-Grill",
  },
  description:
    "Balkan Bäckerei-Pizza-Grill-(Brotart) serviert Börek, Mantije, Holzofenpizza und frisches Brot – täglich 05:00 bis 22:00 Uhr in Riedlingen.",
  keywords: [
    "Balkan Bäckerei-Pizza-Grill",
    "Bäckerei Riedlingen",
    "Balkan Spezialitäten",
    "Burek",
    "Mantije",
    "Holzofenpizza",
  ],
  openGraph: {
    title: "Balkan Bäckerei-Pizza-Grill-(Brotart) - MANTIJE - BUREK in Riedlingen",
    description:
      "Frisches Brot, Burek, Mantije und Holzofenpizza – täglich von 05:00 bis 22:00 Uhr in der Neuen Unlinger Str. 19/1 in Riedlingen.",
    type: "website",
    url: "https://brotart-riedlingen.de",
    locale: "de_DE",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486887396153-fa416526c108?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ofenfrisches Brot aus dem Steinofen",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: CONTACT_INFO.company,
  url: "https://brotart-riedlingen.de",
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  image: "https://images.unsplash.com/photo-1486887396153-fa416526c108?auto=format&fit=crop&w=1200&q=80",
  priceRange: "€",
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT_INFO.street,
    postalCode: CONTACT_INFO.zip,
    addressLocality: CONTACT_INFO.city,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.1603653,
    longitude: 9.4725603,
  },
  openingHoursSpecification: OPENING_HOURS.map(({ schemaDays, opens, closes }) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: schemaDays.map((day) => `https://schema.org/${day}`),
    opens,
    closes,
  })),
  servesCuisine: ["Balkan", "Bakery", "Pizza"],
  sameAs: SOCIAL_LINKS.map((link) => link.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = JSON.stringify(LOCAL_BUSINESS_SCHEMA);

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: localBusinessJsonLd }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <a href="#main" className="skip-link">
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
