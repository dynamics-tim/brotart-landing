import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
  metadataBase: new URL("https://brotart.de"),
  title: {
    default: "BrotArt – Bäckerei & Grill in Riedlingen",
    template: "%s | BrotArt",
  },
  description:
    "BrotArt vereint schwäbische Backkunst mit Balkan-Spezialitäten – täglich frisch, lange Öffnungszeiten und herzlicher Service in Riedlingen.",
  keywords: [
    "BrotArt",
    "Bäckerei Riedlingen",
    "Balkan Spezialitäten",
    "Burek",
    "Holzofenpizza",
  ],
  openGraph: {
    title: "BrotArt – Bäckerei & Grill in Riedlingen",
    description:
      "Frisches Brot, Burek, Mantije und Holzofenpizza – täglich von früh bis spät geöffnet in der Neuen Unlinger Straße 19.",
    type: "website",
    url: "https://brotart.de",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <a href="#main" className="skip-link">
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  );
}
