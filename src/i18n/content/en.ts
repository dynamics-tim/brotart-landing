import {
  CONTACT_INFO,
  GOOGLE_MAPS_EMBED,
  GOOGLE_REVIEW_SUMMARY,
  GOOGLE_REVIEWS,
  HERO_CONTENT,
  type HeroBadge,
  type MenuCategory,
  type NavLink,
  type OpeningHour,
  type Specialty,
  type ValueCard,
} from "@/content/site";
import type { DeepPartial, SiteContent } from "../content";

export function createEnglishContent(): DeepPartial<SiteContent> {
  const navLinks: NavLink[] = [
    { label: "Home", href: "#start" },
    { label: "Offerings", href: "#angebot" },
    { label: "Menu", href: "#speisekarte" },
    { label: "Opening hours", href: "#oeffnungszeiten" },
    { label: "Reviews", href: "#bewertungen" },
    { label: "About us", href: "#ueber-uns" },
    { label: "Contact", href: "#kontakt" },
  ];

    const heroBadges: HeroBadge[] = [
    { label: "New since 2024", detail: "Family-run" },
    { label: "Open daily", detail: "05:00 - 22:00" },
    { label: "Oven-fresh", detail: "Börek · Pizza · Bread" },
  ];

  const specialties: Specialty[] = [
    {
      name: "Börek from the tray",
      description: "House-made filo dough, rolled fresh each morning and filled generously.",
      details: "Beef, spinach-feta or cheese - baked crisp in Riedlingen.",
      icon: "🥧",
    },
    {
      name: "Mantije & pide",
      description: "Hand-rolled dough boats with hearty Balkan fillings.",
      details: "Made for sharing - with ajvar, yogurt or fresh herbs.",
      icon: "🥟",
    },
    {
      name: "Balkan pizza",
      description: "Thin crust, high heat, a hint of smoky grill flavor.",
      details: 'Signature "Balkan" pizza with sujuk, peppers and herb oil.',
      icon: "🍕",
    },
  ];
const values: ValueCard[] = [
    {
      title: "Family business from Riedlingen",
      description: "Run by the Imeri family – Swabian roots meet Balkan hospitality.",
    },
    {
      title: "Handcrafted & transparent",
      description: "From kneading dough to the final product – everything is made fresh on site.",
    },
    {
      title: "Fresh all day",
      description: "For early birds, lunch breaks and late dinners – seven days a week.",
    },
  ];

  const openingHours: OpeningHour[] = [
    { days: "Monday", hours: "05:00 - 22:00", schemaDays: ["Monday"], opens: "05:00", closes: "22:00" },
    { days: "Tuesday", hours: "05:00 - 22:00", schemaDays: ["Tuesday"], opens: "05:00", closes: "22:00" },
    { days: "Wednesday", hours: "05:00 - 22:00", schemaDays: ["Wednesday"], opens: "05:00", closes: "22:00" },
    { days: "Thursday", hours: "05:00 - 22:00", schemaDays: ["Thursday"], opens: "05:00", closes: "22:00" },
    { days: "Friday", hours: "05:00 - 22:00", schemaDays: ["Friday"], opens: "05:00", closes: "22:00" },
    { days: "Saturday", hours: "05:00 - 22:00", schemaDays: ["Saturday"], opens: "05:00", closes: "22:00" },
    { days: "Sunday", hours: "07:00 - 22:00", schemaDays: ["Sunday"], opens: "07:00", closes: "22:00" },
  ];

  const menuCategories: MenuCategory[] = [
    {
      id: "grill",
      title: "Grill specialties",
      description: "Balkan grill with beef and poultry - freshly grilled, with salad and bread. Perfect for takeaway or enjoy on site.",
      header: "Grill specialties - Cevapcici, Pljeskavica & more",
      subtitle:
        "Balkan grill with beef and poultry: Cevapcici, Pljeskavica, Sudzhuk and more. Freshly grilled, with salad and bread - perfect for takeaway or enjoy on site.",
      items: [
        {
          name: "Cevapcici (small portion)",
          description: "5 pieces with salad and bread",
          price: "5,00 €",
          section: "Meat dishes",
        },
        {
          name: "Cevapcici",
          description: "10 pieces with salad and bread",
          price: "10,00 €",
          section: "Meat dishes",
        },
        {
          name: "Pljeskavica",
          description: "With salad and bread",
          price: "10,00 €",
          section: "Meat dishes",
        },
        {
          name: "Pljeskavica with cheese",
          description: "With salad and bread",
          price: "12,00 €",
          section: "Meat dishes",
        },
        {
          name: "Gurmanska Pljeskavica",
          description: "With salad and bread",
          price: "16,50 €",
          section: "Meat dishes",
        },
        {
          name: "Sudzhuk",
          description: "With salad and bread",
          price: "11,00 €",
          section: "Meat dishes",
        },
        {
          name: "Steak",
          description: "With salad and bread",
          price: "17,00 €",
          section: "Meat dishes",
        },
        {
          name: "Chicken breast",
          description: "With salad and bread",
          price: "11,00 €",
          section: "Poultry",
        },
        {
          name: "Chicken leg",
          description: "With salad and bread",
          price: "15,00 €",
          section: "Poultry",
        },
        {
          name: "Mixed meat",
          description: "With salad and bread",
          price: "15,00 €",
          section: "Meat dishes",
        },
        {
          name: "BrotArt Burger",
          description: "",
          price: "5,00 €",
          section: "Burger",
        },
        {
          name: "Burger with egg",
          description: "",
          price: "6,00 €",
          section: "Burger",
        },
        {
          name: "Cheeseburger",
          description: "",
          price: "6,00 €",
          section: "Burger",
        },
        {
          name: "Tortilla",
          description: "With chicken breast",
          price: "6,00 €",
          section: "Snacks",
        },
        {
          name: "Sandwich",
          description: "Various toppings",
          price: "4,00 €",
          section: "Snacks",
        },
        {
          name: "Salad",
          description: "Side salad",
          price: "4,00 €",
          section: "Sides",
        },
      ],
      visible: true,
      allergensVisible: false,
    },
    {
      id: "ofen",
      title: "Oven specialties",
      description: "Börek, Mantije and more - freshly baked from the oven.",
      header: "Oven specialties - Börek & Mantije",
      subtitle:
        "Oven-fresh Balkan classics: Börek with various fillings and hand-rolled Mantije - baked fresh daily.",
      items: [
        {
          name: "Burek with cheese",
          description: "",
          price: "4,00 €",
          section: "Burek",
        },
        {
          name: "Burek with spinach and cheese",
          description: "",
          price: "4,00 €",
          section: "Burek",
        },
        {
          name: "Burek with meat",
          description: "",
          price: "4,00 €",
          section: "Burek",
        },
        {
          name: "Burek with potato",
          description: "",
          price: "4,00 €",
          section: "Burek",
        },
        {
          name: "Pizzaburek",
          description: "",
          price: "4,00 €",
          section: "Burek",
        },
        {
          name: "Mantija (1 piece)",
          description: "",
          price: "1,00 €",
          section: "Mantije",
        },
        {
          name: "Mantije (1 portion)",
          description: "",
          price: "5,00 €",
          section: "Mantije",
        },
        {
          name: "Pizza Margarita",
          description: "1 piece",
          price: "3,50 €",
          section: "Pizza",
        },
        {
          name: "Pizza Tuna",
          description: "1 piece",
          price: "3,50 €",
          section: "Pizza",
        },
        {
          name: "Pizza Salami",
          description: "1 piece",
          price: "3,50 €",
          section: "Pizza",
        },
        {
          name: "Whole pizza",
          description: "Toppings of your choice",
          price: "12,00 €",
          section: "Pizza",
        },
        {
          name: "Leberkäse in a roll",
          description: "",
          price: "3,00 €",
          section: "Snacks",
        },
      ],
      visible: true,
      allergensVisible: false,
    },
  ];

  return {
    locale: "en",
    languageName: "English",
    languageLabel: "Language",
    skipToContentLabel: "Skip to content",
    nav: {
      links: navLinks,
      openLabel: "Open menu",
      closeLabel: "Close menu",
      logoAriaLabel: "Scroll to start",
      desktopTagline: "Mantije · Börek · Pizza",
      callLabel: "Call now",
      mainNavLabel: "Main navigation",
      mobileNavLabel: "Mobile navigation",
      jumpToLabel: "Jump to",
      legalLinks: {
        impressum: "Imprint",
        privacy: "Privacy",
      },
    },
    hero: {
      content: {
        eyebrow: "Balkan bakery-pizza-grill in Riedlingen",
        title: {
          leading: "Börek, mantije & pizza",
          highlight: "freshly baked",
          trailing: "on Neue Unlinger Str. 19/1.",
        },
        description: "Oven-fresh Balkan specialties from 05:00: börek, mantije, pizza, breakfast and snacks to go.",
        secondary: "Takeaway in Riedlingen – preorder at 07371 1296664 or just drop by.",
        image: HERO_CONTENT.image,
        supportingNote: "Family-run · Affordable breakfast · Friendly service",
      },
      badges: heroBadges,
      ctas: {
        callNow: "Call now",
        viewMenu: "View menu",
      },
      status: {
        openPrefix: "Open until",
        closedPrefix: "Opens at",
        openUntil: "22:00",
        opensAtWeekday: "05:00",
        opensAtSunday: "07:00",
      },
      galleryLabels: {
        aria: "Hero gallery",
        fallback: "Gallery coming soon",
      },
      whatsappLabel: "News & offers via WhatsApp",
    },
    floatingCta: {
      label: "Order now",
      phoneDisplay: "07371 1296664",
      ariaLabel: "Call now and order at 07371 1296664",
      showPriceBadge: false,
      priceBadge: "from €2.50",
    },
    specialties: {
      eyebrow: "Balkan classics",
      title: "Börek, mantije, pizza & breakfast in Riedlingen",
      description:
        "Each specialty is made in small batches, rests with the family spice blend and is baked fresh right before serving – crispy, juicy and perfect to go.",
      items: specialties,
    },
    menu: {
      eyebrow: "Menu",
      defaultSectionName: "Other",
      takeawayLabel: "Ready for takeaway",
      orderNowLabel: "Order now",
      orderPhone: "+4973714095580",
      allergensTitle: "Additives",
      allergensLegend: {
        A: "Gluten",
        B: "Glutamate",
        C: "Pepper",
        D: "Salt",
        E: "Milk & lactose",
        F: "Soy, potato starch",
        H: "Garlic",
      },
      footerNote: "All prices in EUR incl. VAT – prices and availability may change – as of: December 2025",
      categories: menuCategories,
    },
    hours: {
      eyebrow: "Opening hours",
      heading: "05:00 - 22:00, every day.",
      description:
        "Breakfast for early birds, lunch break with grill & pizza, evening snacks for late and night shifts – always fresh, always friendly, no pre-order needed.",
      tipLabel: "Tip",
      tipText: "Daily specials from 10:00 – to be sure you get a portion, call 07371 1296664.",
      openingHours,
      mapsEmbed: GOOGLE_MAPS_EMBED,
      mapConsent: {
        title: "Load Google Maps?",
        description:
          'Google Maps only loads after your consent. By clicking "Load map (Google)" you agree that Google Ireland/Google LLC (USA) receives your IP address and usage data; cookies may be set.',
        cta: "Load map (Google)",
        note: "Note: withdraw by reloading the page without activating the map.",
        iframeTitle: "Google Maps – Balkan Bakery-Pizza-Grill location",
      },
      location: {
        eyebrow: "Location",
        street: "Neue Unlinger Str. 19/1",
        city: "88499 Riedlingen",
        transport: 'Parking in front · Bus line 7606 "Neue Unlinger Straße"',
        cta: "Plan route",
      },
    },
    reviews: {
      eyebrow: "Reviews",
      heading: "What our guests say",
      description:
        "Voices from Riedlingen, Neufra and the region: real experiences about börek, breakfast, pizza and takeaway at Balkan bakery-pizza-grill-(Brotart).",
      buttonLabel: "Read all Google reviews",
      summary: {
        ...GOOGLE_REVIEW_SUMMARY,
        highlights: [
          "Great value for breakfast & börek",
          "Fast takeaway in Riedlingen",
          "Friendly service from 05:00 to 22:00",
        ],
      },
      reviews: GOOGLE_REVIEWS,
      labels: {
        average: "Average",
        outOf: "/ 5",
        publicVoices: "public voices",
        asOf: "As of",
        source: "Source",
        starSuffix: "out of 5 stars",
      },
    },
    about: {
      eyebrow: "Our story",
      heading: "Family-run with a broad outlook.",
      description:
        "Balkan bakery-pizza-grill-(Brotart) combines artisanal bread baking with authentic Balkan recipes. We knead, fill and grill everything ourselves – with regional flour, family spice blends and an oven that runs almost around the clock.",
      differentiators: [
        {
          title: "Fresh counter all day",
          description: "Bread, börek and sesame braids baked several times daily – nothing sits for long.",
        },
        {
          title: "Lunchtime = grill time",
          description: "Cevapcici, wraps, salads and pizza move quickly over the counter to-go.",
        },
        {
          title: "Relaxed evenings",
          description: "Hot kitchen until 22:00, snacks and desserts – perfect after work or for late shifts.",
        },
      ],
      values,
      whyTitle: "Why Balkan bakery-pizza-grill?",
    },
    contact: {
      eyebrow: "Contact & orders",
      heading: "We look forward to your visit or pre-order.",
      description:
        "Call us, send a WhatsApp or drop by spontaneously – we always have something oven-fresh and pack it for takeaway.",
      highlights: [
        {
          label: "Phone",
          value: CONTACT_INFO.displayPhone,
          description: "Call directly & order",
          href: `tel:${CONTACT_INFO.phone}`,
          icon: "🥧",
          cta: "Call now",
        },
        {
          label: "Address",
          value: CONTACT_INFO.street,
          description: `${CONTACT_INFO.zip} ${CONTACT_INFO.city}`,
          href: CONTACT_INFO.mapsLink,
          icon: "🥟",
          cta: "Plan route",
          external: true,
        },
      ],
      socialHeading: "Social & press",
      socialLinks: [{ label: "Google Maps", href: CONTACT_INFO.mapsLink, handle: "Reviews" }],
    },
    footer: {
      tagline: "Balkan soul food in Riedlingen",
      noTracking: "No cookies or tracking. Google Maps only loads after your click.",
      backToTop: "Back to top",
      rights: "All rights reserved.",
    },
    legal: {
      backLabel: "Back to homepage",
      impressum: {
        metadata: {
          title: "Imprint",
          description: "Legal information for Balkan bakery-pizza-grill-(Brotart) in Riedlingen.",
        },
        title: "Imprint",
        sections: [
          {
            heading: "Provider",
            paragraphs: [CONTACT_INFO.company, CONTACT_INFO.street, `${CONTACT_INFO.zip} ${CONTACT_INFO.city}`],
          },
          {
            heading: "Contact",
            paragraphs: [`Phone: ${CONTACT_INFO.displayPhone}`, `Email: ${CONTACT_INFO.email}`],
          },
          {
            heading: "Authorized representatives",
            paragraphs: ["Family Imeri", CONTACT_INFO.street, `${CONTACT_INFO.zip} ${CONTACT_INFO.city}`],
          },
          {
            heading: "Responsible (German media law)",
            paragraphs: ["Family Imeri, address as above."],
          },
          {
            heading: "VAT ID",
            paragraphs: [CONTACT_INFO.taxId],
          },
          {
            heading: "Dispute resolution",
            paragraphs: [
              "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/. We are not obliged or willing to participate in dispute resolution before a consumer arbitration board.",
            ],
          },
        ],
      },
      privacy: {
        metadata: {
          title: "Privacy policy",
          description: "Privacy information for Balkan bakery-pizza-grill-(Brotart) in Riedlingen.",
        },
        title: "Privacy policy",
        sections: [
          {
            heading: "Introduction",
            paragraphs: [
              "We are delighted by your interest in Balkan bakery-pizza-grill-(Brotart). Protecting your personal data is important to us. Below we inform you about the processing of your data when visiting our website.",
            ],
          },
          {
            heading: "Controller",
            paragraphs: [
              `${CONTACT_INFO.company}, ${CONTACT_INFO.street}, ${CONTACT_INFO.zip} ${CONTACT_INFO.city}`,
              `Phone: ${CONTACT_INFO.displayPhone}`,
              `Email: ${CONTACT_INFO.email}`,
            ],
          },
          {
            heading: "Hosting & delivery (GitHub Pages/CDN)",
            paragraphs: [
              "Our website is delivered as a static page via GitHub Pages (GitHub Inc., USA). Server log files (IP address, date/time, requested file, referrer, user agent) are processed for technical delivery. CDN providers like Fastly may be involved. Legal basis: Art. 6(1)(f) GDPR (legitimate interest in secure and fast delivery).",
              "Third-country transfer: GitHub/Fastly are based in the USA. Transfer relies on standard contractual clauses; a residual US access risk cannot be excluded.",
              "Log retention: typically 7–30 days (provider dependent), longer only for evidence.",
            ],
          },
          {
            heading: "Cookies & tracking",
            paragraphs: [
              "We use no cookies and no tracking tools. No profiling takes place. A connection to Google occurs only if you actively load the map (see below).",
            ],
          },
          {
            heading: "Fonts",
            paragraphs: [
              "All fonts (Inter, Playfair Display, Orbitron) are locally hosted via next/font/google. No requests to Google Fonts servers occur during visits.",
            ],
          },
          {
            heading: "External services – Google Maps (optional)",
            paragraphs: [
              'If you click "Load map (Google)", a Google Maps view loads (Google Ireland/Google LLC, USA). IP address, device information, usage data and possibly location data (if shared) may be processed; cookies are possible. Legal basis: your consent, Art. 6(1)(a) GDPR. Without a click there is no connection to Google. Withdrawal: reload the page without activating the map.',
            ],
          },
          {
            heading: "Communication",
            paragraphs: [
              "Phone: We see your phone number when you call; it is used only to handle the request (Art. 6(1)(b/f) GDPR).",
              "Email: Content and metadata are processed by our email provider; please avoid sending sensitive data via email.",
              "WhatsApp: Links to wa.me or our WhatsApp channel lead to a Meta service (WhatsApp Ireland/LLC, USA). Using it processes your phone number, IP, device and usage data under WhatsApp's policy. Legal basis: your voluntary use/consent.",
            ],
          },
          {
            heading: "Your rights",
            paragraphs: [
              "You have rights to access, rectification, erasure, restriction of processing, data portability, objection and complaint to a supervisory authority. Contact us via the details above.",
            ],
          },
        ],
      },
    },
  };
}
