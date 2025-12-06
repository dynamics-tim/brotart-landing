import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/sections/hero-section";
import SpecialtiesSection from "@/components/sections/specialties-section";
import AboutSection from "@/components/sections/about-section";
import ReviewsSection from "@/components/sections/reviews-section";
import HoursLocationSection from "@/components/sections/hours-location-section";
import ContactSection from "@/components/sections/contact-section";
import SiteFooter from "@/components/site-footer";
import ScrollBackground, { type SectionBackgroundConfig } from "@/components/scroll-background";
import {
  CONTACT_HIGHLIGHTS,
  CONTACT_INFO,
  CORE_VALUES,
  GOOGLE_MAPS_EMBED,
  GOOGLE_REVIEW_SUMMARY,
  GOOGLE_REVIEWS,
  HERO_BADGES,
  HERO_CONTENT,
  OPENING_HOURS,
  SOCIAL_LINKS,
  SPECIALTIES,
} from "@/content/site";
import { HERO_GALLERY_IMAGES } from "@/content/hero-gallery";

const SECTION_BACKDROPS: SectionBackgroundConfig[] = [
  {
    id: "start",
    layers: {
      color: "#fff9f3",
      image: `
        radial-gradient(circle at 20% 20%, rgba(255, 219, 188, 0.9), transparent 55%),
        radial-gradient(circle at 80% 0%, rgba(255, 247, 235, 0.85), transparent 55%),
        linear-gradient(135deg, rgba(255, 207, 174, 0.6), rgba(254, 247, 241, 0)),
        linear-gradient(180deg, #fff9f3 0%, #feeeda 45%, #f7d5b4 100%)
      `,
    },
    grainOpacity: 0.25,
  },
  {
    id: "angebot",
    layers: {
      color: "#fff6ef",
      image: `
        radial-gradient(circle at 10% 30%, rgba(255, 214, 170, 0.9), transparent 60%),
        radial-gradient(circle at 90% 20%, rgba(255, 239, 210, 0.75), transparent 55%),
        linear-gradient(115deg, rgba(255, 205, 190, 0.35), rgba(255, 205, 190, 0)),
        linear-gradient(180deg, #fff6ef 0%, #fce7d6 45%, #f6d4b5 100%)
      `,
    },
    grainOpacity: 0.22,
  },
  {
    id: "ueber-uns",
    layers: {
      color: "#fff5ee",
      image: `
        radial-gradient(circle at 15% 25%, rgba(255, 210, 180, 0.85), transparent 60%),
        radial-gradient(circle at 85% 10%, rgba(251, 235, 215, 0.75), transparent 55%),
        linear-gradient(120deg, rgba(231, 166, 120, 0.35), rgba(255, 255, 255, 0)),
        linear-gradient(180deg, #fff5ee 0%, #f8e2cc 40%, #f1cda9 100%)
      `,
    },
    grainOpacity: 0.2,
  },
  {
    id: "bewertungen",
    layers: {
      color: "#fff7f4",
      image: `
        radial-gradient(circle at 15% 20%, rgba(255, 204, 190, 0.9), transparent 60%),
        radial-gradient(circle at 80% 15%, rgba(255, 238, 226, 0.8), transparent 55%),
        linear-gradient(130deg, rgba(220, 157, 130, 0.35), rgba(255, 255, 255, 0)),
        linear-gradient(180deg, #fff7f4 0%, #fde7de 45%, #f6cdc2 100%)
      `,
    },
    grainOpacity: 0.28,
  },
  {
    id: "oeffnungszeiten",
    layers: {
      color: "#fff3ea",
      image: `
        radial-gradient(circle at 20% 25%, rgba(255, 208, 163, 0.85), transparent 58%),
        radial-gradient(circle at 85% 5%, rgba(253, 233, 205, 0.75), transparent 50%),
        linear-gradient(140deg, rgba(215, 140, 90, 0.35), rgba(255, 255, 255, 0)),
        linear-gradient(180deg, #fff3ea 0%, #f8dec5 50%, #f1c29b 100%)
      `,
    },
    grainOpacity: 0.26,
  },
  {
    id: "kontakt",
    layers: {
      color: "#fff1e6",
      image: `
        radial-gradient(circle at 18% 20%, rgba(255, 208, 150, 0.85), transparent 58%),
        radial-gradient(circle at 82% 10%, rgba(255, 229, 198, 0.75), transparent 55%),
        linear-gradient(150deg, rgba(216, 129, 90, 0.25), rgba(255, 255, 255, 0)),
        linear-gradient(180deg, #fff1e6 0%, #f8d8b4 45%, #edb47b 100%)
      `,
    },
    grainOpacity: 0.24,
  },
];

export default function Home() {
  return (
    <>
      <ScrollBackground sections={SECTION_BACKDROPS} />
      <main id="main" className="relative z-10 text-stone-900">
        <SiteHeader />
        <div className="relative isolate">
          <div className="absolute inset-x-0 top-0 flex justify-center">
            <div className="h-40 w-full max-w-4xl rounded-full bg-gradient-to-r from-[#f3ceb0] via-[#f9e6c9] to-[#f3ceb0] opacity-20 blur-3xl" />
          </div>
          <HeroSection
            hero={HERO_CONTENT}
            badges={HERO_BADGES}
            galleryImages={HERO_GALLERY_IMAGES}
            contactInfo={CONTACT_INFO}
          />
        </div>

        <SpecialtiesSection specialties={SPECIALTIES} />
        <AboutSection values={CORE_VALUES} />
        <ReviewsSection summary={GOOGLE_REVIEW_SUMMARY} reviews={GOOGLE_REVIEWS} />
        <HoursLocationSection
          openingHours={OPENING_HOURS}
          mapsEmbed={GOOGLE_MAPS_EMBED}
          mapsLink={CONTACT_INFO.mapsLink}
        />
        <ContactSection highlights={CONTACT_HIGHLIGHTS} socialLinks={SOCIAL_LINKS} />
      </main>

      <SiteFooter contactInfo={CONTACT_INFO} />
    </>
  );
}
