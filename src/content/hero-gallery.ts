import type { StaticImageData } from "next/image";

import image0 from "../../public/hero-gallery/optimized/image0.webp";
import image1 from "../../public/hero-gallery/optimized/image1.webp";
import image2 from "../../public/hero-gallery/optimized/image2.webp";
import image3 from "../../public/hero-gallery/optimized/image3.webp";
import image4 from "../../public/hero-gallery/optimized/image4.webp";
import image5 from "../../public/hero-gallery/optimized/image5.webp";
import image6 from "../../public/hero-gallery/optimized/image6.webp";

export type HeroGalleryImage = {
  src: StaticImageData | string;
  alt: string;
};

export const HERO_GALLERY_IMAGES: HeroGalleryImage[] = [
  { src: image0, alt: "Ofenfrisches Borek mit Sesam und Kraeutern" },
  { src: image1, alt: "Frisch belegte Balkan-Snacks und Dips" },
  { src: image2, alt: "Pizza- und Grillzutaten werden vorbereitet" },
  { src: image3, alt: "Holzbrett mit frisch gebackenen Spezialitaeten" },
  { src: image4, alt: "Auslage mit warmen Backwaren und Snacks" },
  { src: image5, alt: "Herzhafte Balkan-Platte mit Salat und Brot" },
  { src: image6, alt: "Takeaway-Boxen mit ofenfrischen Speisen" },
];
