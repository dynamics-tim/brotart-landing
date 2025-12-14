import type {
  ContactHighlight,
  ContactInfo,
  GoogleReview,
  GoogleReviewSummary,
  HeroBadge,
  HeroContent,
  MenuCategory,
  NavLink,
  OpeningHour,
  SocialLink,
  Specialty,
  ValueCard,
} from "@/content/site";
import type { HeroGalleryImage } from "@/content/hero-gallery";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from "./locales";
import { baseContent } from "./content/de";
import { createEnglishContent } from "./content/en";
import { createSlovenianContent } from "./content/sl";

export type LocalizedLegalSection = {
  heading: string;
  paragraphs: string[];
};

export type SiteContent = {
  locale: Locale;
  languageName: string;
  languageLabel: string;
  skipToContentLabel: string;
  contactInfo: ContactInfo;
  nav: {
    links: NavLink[];
    openLabel: string;
    closeLabel: string;
    logoAriaLabel: string;
    desktopTagline: string;
    callLabel: string;
    mainNavLabel: string;
    mobileNavLabel: string;
    jumpToLabel: string;
    legalLinks: {
      impressum: string;
      privacy: string;
    };
  };
  hero: {
    content: HeroContent;
    badges: HeroBadge[];
    galleryImages: HeroGalleryImage[];
    ctas: {
      callNow: string;
      viewMenu: string;
    };
    status: {
      openPrefix: string;
      closedPrefix: string;
      openUntil: string;
      opensAtWeekday: string;
      opensAtSunday: string;
    };
    galleryLabels: {
      aria: string;
      fallback: string;
    };
    whatsappLabel: string;
  };
  floatingCta: {
    label: string;
    phoneDisplay: string;
    ariaLabel: string;
    showPriceBadge: boolean;
    priceBadge: string;
  };
  specialties: {
    eyebrow: string;
    title: string;
    description: string;
    items: Specialty[];
  };
  menu: {
    eyebrow: string;
    defaultSectionName: string;
    takeawayLabel: string;
    orderNowLabel: string;
    orderPhone: string;
    allergensTitle: string;
    allergensLegend: Record<string, string>;
    footerNote: string;
    categories: MenuCategory[];
  };
  hours: {
    eyebrow: string;
    heading: string;
    description: string;
    tipLabel: string;
    tipText: string;
    openingHours: OpeningHour[];
    mapsEmbed: string;
    mapConsent: {
      title: string;
      description: string;
      cta: string;
      note: string;
      iframeTitle: string;
    };
    location: {
      eyebrow: string;
      street: string;
      city: string;
      transport: string;
      cta: string;
    };
  };
  reviews: {
    eyebrow: string;
    heading: string;
    description: string;
    buttonLabel: string;
    summary: GoogleReviewSummary;
    reviews: GoogleReview[];
    labels: {
      average: string;
      outOf: string;
      publicVoices: string;
      asOf: string;
      source: string;
      starSuffix: string;
    };
  };
  about: {
    eyebrow: string;
    heading: string;
    description: string;
    differentiators: { title: string; description: string }[];
    values: ValueCard[];
    whyTitle: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    highlights: ContactHighlight[];
    socialHeading: string;
    socialLinks: SocialLink[];
  };
  footer: {
    tagline: string;
    noTracking: string;
    backToTop: string;
    rights: string;
  };
  legal: {
    backLabel: string;
    impressum: {
      metadata: {
        title: string;
        description: string;
      };
      title: string;
      sections: LocalizedLegalSection[];
    };
    privacy: {
      metadata: {
        title: string;
        description: string;
      };
      title: string;
      sections: LocalizedLegalSection[];
    };
  };
};

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

const localeOverrides: Record<Locale, DeepPartial<SiteContent>> = {
  de: {},
  en: createEnglishContent(),
  sl: createSlovenianContent(),
};

export function getSiteContent(locale: Locale): SiteContent {
  const normalized = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
  const override = localeOverrides[normalized] ?? {};
  const content = mergeDeep(baseContent, override) as SiteContent;
  content.specialties.items = applySpecialtyIcons(content.specialties.items);
  return content;
}

function applySpecialtyIcons(items: Specialty[]): Specialty[] {
  // Ensure we always have emojis for the specialties; fall back only when missing
  const defaults = ["🥧", "🥟", "🍕"];
  return items.map((item, idx) => ({
    ...item,
    icon: item.icon ?? defaults[idx],
  }));
}

function mergeDeep<T>(base: T, override: DeepPartial<T>): T {
  if (override === undefined || override === null) {
    return base;
  }

  if (Array.isArray(base)) {
    return (override as T | undefined) ?? base;
  }

  if (typeof base === "object") {
    const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const key of Object.keys(override as Record<string, unknown>)) {
      const baseValue = (base as Record<string, unknown>)[key];
      const overrideValue = (override as Record<string, unknown>)[key];

      if (overrideValue === undefined) {
        continue;
      }

      if (typeof baseValue === "object" && baseValue !== null && !Array.isArray(baseValue)) {
        result[key] = mergeDeep(baseValue, overrideValue as DeepPartial<typeof baseValue>);
      } else {
        result[key] = overrideValue;
      }
    }
    return result as T;
  }

  return (override as T) ?? base;
}
