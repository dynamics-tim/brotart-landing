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
  metadataBase: new URL("https://brotart-riedlingen.de"),
  title: {
    default: "Balkan Bäckerei-Pizza-Grill (Brotart) – Balkan-Spezialitäten & Bäckerei in Riedlingen",
    template: "%s | Balkan Bäckerei-Pizza-Grill",
  },
  description:
    "Balkan Bäckerei-Pizza-Grill (Brotart) in Riedlingen: Börek, Mantije, Holzofenpizza und frisches Brot – täglich bis 22:00 Uhr geöffnet.",
  keywords: [
    "Balkan Bäckerei-Pizza-Grill",
    "Bäckerei Riedlingen",
    "Balkan Spezialitäten Riedlingen",
    "Börek Riedlingen",
    "Mantije",
  ],
  openGraph: {
    title: "Balkan Bäckerei-Pizza-Grill (Brotart) in Riedlingen",
    description:
      "Börek, Mantije, Holzofenpizza und Brot frisch aus dem Ofen – täglich 05:00 bis 22:00 Uhr (So ab 07:00 Uhr) in der Neuen Unlinger Str. 19/1.",
    type: "website",
    url: "https://brotart-riedlingen.de",
    locale: "de_DE",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486887396153-fa416526c108?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Frisch gebackenes Brot bei Balkan Bäckerei-Pizza-Grill in Riedlingen",
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
