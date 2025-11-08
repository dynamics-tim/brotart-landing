import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/sections/hero-section";
import SpecialtiesSection from "@/components/sections/specialties-section";
import AboutSection from "@/components/sections/about-section";
import ReviewsSection from "@/components/sections/reviews-section";
import HoursLocationSection from "@/components/sections/hours-location-section";
import ContactSection from "@/components/sections/contact-section";
import SiteFooter from "@/components/site-footer";
import {
  CONTACT_HIGHLIGHTS,
  CONTACT_INFO,
  CORE_VALUES,
  DAILY_OFFER,
  GOOGLE_MAPS_EMBED,
  GOOGLE_REVIEW_SUMMARY,
  GOOGLE_REVIEWS,
  HERO_BADGES,
  HERO_CONTENT,
  OPENING_HOURS,
  SOCIAL_LINKS,
  SPECIALTIES,
} from "@/content/site";

export default function Home() {
  const fallbackDate = new Date();
  const parsedOfferDate = DAILY_OFFER.lastUpdated ? new Date(DAILY_OFFER.lastUpdated) : fallbackDate;
  const offerDate = new Intl.DateTimeFormat("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(Number.isNaN(parsedOfferDate.valueOf()) ? fallbackDate : parsedOfferDate);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: CONTACT_INFO.company,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.street,
      postalCode: CONTACT_INFO.zip,
      addressLocality: CONTACT_INFO.city,
      addressCountry: "DE",
    },
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    url: "https://brotart.de",
    openingHours: OPENING_HOURS.map(({ days, hours }) => `${days} ${hours}`),
    servesCuisine: ["Balkan", "Bakery", "Pizza"],
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };

  return (
    <>
      <main id="main" className="text-stone-900">
        <SiteHeader />
        <div className="relative isolate bg-gradient-to-b from-[#fff9f3] via-[#fef4ea] to-[#f7e8dc]">
          <div className="absolute inset-x-0 top-0 flex justify-center">
            <div className="h-40 w-full max-w-4xl rounded-full bg-gradient-to-r from-[#f3ceb0] via-[#f9e6c9] to-[#f3ceb0] opacity-20 blur-3xl" />
          </div>
          <HeroSection
            hero={HERO_CONTENT}
            badges={HERO_BADGES}
            dailyOffer={DAILY_OFFER}
            offerDate={offerDate}
            phone={{ raw: CONTACT_INFO.phone, display: CONTACT_INFO.displayPhone }}
            mapsLink={CONTACT_INFO.mapsLink}
          />
        </div>

        <SpecialtiesSection specialties={SPECIALTIES} />
        <AboutSection values={CORE_VALUES} />
        <ReviewsSection summary={GOOGLE_REVIEW_SUMMARY} reviews={GOOGLE_REVIEWS} />
        <HoursLocationSection openingHours={OPENING_HOURS} mapsEmbed={GOOGLE_MAPS_EMBED} />
        <ContactSection highlights={CONTACT_HIGHLIGHTS} socialLinks={SOCIAL_LINKS} />
      </main>

      <SiteFooter contactInfo={CONTACT_INFO} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  );
}
