import fs from "node:fs";
import path from "node:path";

export type HeroGalleryImage = {
  src: string;
  alt: string;
};

const HERO_GALLERY_DIR = path.join(process.cwd(), "public", "hero-gallery");
const SUPPORTED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");

const withBasePath = (value: string) => {
  if (!value.startsWith("/")) return value;
  if (!basePath) return value;
  return value.startsWith(`${basePath}/`) ? value : `${basePath}${value}`;
};

const FALLBACK_GALLERY: HeroGalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1483691278019-cb7253bee49f?auto=format&fit=crop&w=1200&q=80",
    alt: "Holzofenbrot wird frisch auf dem Brett angerichtet",
  },
  {
    src: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80",
    alt: "Balkan-inspirierte Teller mit Dips und frischen Kraeutern",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    alt: "Warmer Gastraum mit Blick auf die Theke und Backwaren",
  },
];

const toAltText = (fileName: string) =>
  fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());

const loadHeroGalleryImages = (): HeroGalleryImage[] => {
  try {
    const files = fs.readdirSync(HERO_GALLERY_DIR, { withFileTypes: true });

    return files
      .filter((dirent) => dirent.isFile())
      .map((dirent) => dirent.name)
      .filter((name) => SUPPORTED_EXTENSIONS.has(path.extname(name).toLowerCase()))
      .sort()
      .map((fileName) => ({
        src: withBasePath(`/hero-gallery/${fileName}`),
        alt: `Balkan Bäckerei-Pizza-Grill ${toAltText(fileName)}`,
      }));
  } catch {
    return [];
  }
};

export const HERO_GALLERY_IMAGES: HeroGalleryImage[] = (() => {
  const localImages = loadHeroGalleryImages();
  return localImages.length ? localImages : FALLBACK_GALLERY;
})();
