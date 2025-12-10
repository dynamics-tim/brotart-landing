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

export function createSlovenianContent(): DeepPartial<SiteContent> {
  const navLinks: NavLink[] = [
    { label: "Start", href: "#start" },
    { label: "Ponudba", href: "#angebot" },
    { label: "Jedilnik", href: "#speisekarte" },
    { label: "Odpiralni cas", href: "#oeffnungszeiten" },
    { label: "Mnenja", href: "#bewertungen" },
    { label: "O nas", href: "#über-uns" },
    { label: "Kontakt", href: "#kontakt" },
  ];

    const heroBadges: HeroBadge[] = [
    { label: "Novo 2024", detail: "Družinsko vodeno" },
    { label: "Odprto vsak dan", detail: "05:00 - 22:00" },
    { label: "Sveže iz peči", detail: "Börek · Pizza · Kruh" },
  ];

  const specialties: Specialty[] = [
    {
      name: "Börek s pekača",
      description: "Domače vlečeno testo, vsako jutro sveže valjano in bogato nadevano.",
      details: "Govedina, špinača-feta ali sir – hrustljavo pečeno v Riedlingenu.",
      icon: "🥧",
    },
    {
      name: "Mantije & pide",
      description: "Ročno valjani čolnički z balkanskimi nadevi.",
      details: "Za deljenje – z ajvarjem, jogurtom ali svežimi zelišči.",
      icon: "🥟",
    },
    {
      name: "Balkanska pizza",
      description: "Tanek hrustljav rob, visoka temperatura, rahel dimljen okus z žara.",
      details: 'Hišna pizza "Balkan" s sudžukom, papriko in zeliščnim oljem.',
      icon: "🍕",
    },
  ];
const values: ValueCard[] = [
    {
      title: "Družinsko podjetje iz Riedlingena",
      description: "Družina Imeri – prizemljenost in balkanska gostoljubnost.",
    },
    {
      title: "Rokodelsko & transparentno",
      description: "Od gnetenja testa do koncnega izdelka – vse pripravimo sveže na mestu.",
    },
    {
      title: "Sveže ves dan",
      description: "Za zgodnje, za kosilo in za pozne jedce – sedem dni v tednu.",
    },
  ];

  const openingHours: OpeningHour[] = [
    { days: "Ponedeljek", hours: "05:00 - 22:00", schemaDays: ["Monday"], opens: "05:00", closes: "22:00" },
    { days: "Torek", hours: "05:00 - 22:00", schemaDays: ["Tuesday"], opens: "05:00", closes: "22:00" },
    { days: "Sreda", hours: "05:00 - 22:00", schemaDays: ["Wednesday"], opens: "05:00", closes: "22:00" },
    { days: "Cetrtek", hours: "05:00 - 22:00", schemaDays: ["Thursday"], opens: "05:00", closes: "22:00" },
    { days: "Petek", hours: "05:00 - 22:00", schemaDays: ["Friday"], opens: "05:00", closes: "22:00" },
    { days: "Sobota", hours: "05:00 - 22:00", schemaDays: ["Saturday"], opens: "05:00", closes: "22:00" },
    { days: "Nedelja", hours: "07:00 - 22:00", schemaDays: ["Sunday"], opens: "07:00", closes: "22:00" },
  ];

  const menuCategories: MenuCategory[] = [
    {
      id: "grill",
      title: "Žar jedi",
      description: "Balkanski žar z govedino in perutnino – sveže peceno, s solato in kruhom.",
      header: "Žar v Riedlingenu – cevapcici, sudžuk, pleskavica",
      subtitle:
        "Balkanski žar z govedino in perutnino: cevapcici, sudžuk, pleskavica in vec. Sveže peceno, s solato in kruhom – za s sabo ali na mestu.",
      items: [
        {
          name: "Cevapcici (govedina)",
          description: "S solato in kruhom – 10 kosov.",
          price: "10,00 €",
          note: "Polovicna porcija 5,00 € – 5 kosov.",
          allergens: [],
          section: "Mesne jedi",
        },
        {
          name: "Hamburger (govedina)",
          description: "S solato",
          price: "5,00 €",
          allergens: [],
          section: "Burgerji",
        },
        {
          name: "Cheeseburger (govedina)",
          description: "S solato",
          price: "6,00 €",
          allergens: [],
          section: "Burgerji",
        },
        {
          name: "Pišcancja prsa",
          description: "S solato in kruhom",
          price: "11,00 €",
          allergens: [],
          section: "Mesne jedi",
        },
        {
          name: "Sucuk (govedina)",
          description: "S solato in kruhom",
          price: "11,00 €",
          allergens: ["A", "B", "C", "D"],
          section: "Mesne jedi",
        },
        {
          name: "Pleskavica",
          description: "S solato in kruhom",
          price: "10,00 €",
          allergens: [],
          section: "Mesne jedi",
        },
        {
          name: "Pleskavica s sirom",
          description: "S solato in kruhom",
          price: "12,00 €",
          allergens: [],
          section: "Mesne jedi",
        },
        {
          name: "T-bone (govedina)",
          description: "S solato in kruhom",
          price: "17,00 €",
          allergens: ["A", "B", "C", "D"],
          section: "Mesne jedi",
        },
        {
          name: "Mešana solata",
          description: "Sveže pripravljena",
          price: "4,00 €",
          allergens: ["D"],
          section: "Priloge",
        },
        {
          name: "Dodatni kruh",
          description: "Topel kruh iz peci",
          price: "1,20 €",
          allergens: ["A", "D"],
          section: "Priloge",
        },
      ],
      visible: true,
      allergensVisible: true,
    },
    {
      id: "ofen",
      title: "Pecene specialitete",
      description: "Börek, mantije in pizza sveže iz peci.",
      header: "Pecene specialitete – Börek, mantije & pizza",
      subtitle:
        "Sveže pecene balkanske klasike: börek z razlicnimi nadevi, rocno valjane mantije in pizza z rahelim dimljenim okusom – vsak dan sveže peceno.",
      items: [
        {
          name: "Börek s sirom",
          description: "Hrustljavo vleceno testo, sirni nadev.",
          price: "4,00 €",
          section: "Börek",
        },
        {
          name: "Börek s špinaco in sirom",
          description: "Nadev špinaca-feta v domacem vlecenem testu.",
          price: "4,00 €",
          section: "Börek",
        },
        {
          name: "Börek z mesom",
          description: "Socen goveji nadev.",
          price: "4,00 €",
          section: "Börek",
        },
        {
          name: "Mantije z mesom (1 kos)",
          description: "Rocno zvit svaljek, odlicen prigrizek.",
          price: "1,00 €",
          section: "Mantije",
        },
        {
          name: "Mantije z mesom (7 kosov)",
          description: "Škatla za deljenje z jogurtom ali ajvarjem.",
          price: "5,00 €",
          section: "Mantije",
        },
        {
          name: "Pišcancji wrap",
          description: "Z žar pišcancem in solato.",
          price: "6,00 €",
          section: "Wrapi",
        },
        {
          name: "Pizza tuna (kos)",
          description: "Kos s tuno in cebulo.",
          price: "3,50 €",
          section: "Pizza",
        },
        {
          name: "Pizza tuna (cela)",
          description: "Cela tepsija tune.",
          price: "12,00 €",
          section: "Pizza",
        },
        {
          name: "Pizza Margherita (kos)",
          description: "Paradižnik, mocarela, bazilika.",
          price: "3,50 €",
          section: "Pizza",
        },
        {
          name: "Pizza Margherita (cela)",
          description: "Klasicna sirna pizza.",
          price: "12,00 €",
          section: "Pizza",
        },
        {
          name: "Pizza salama (kos)",
          description: "Kos z govejo salamo.",
          price: "3,50 €",
          section: "Pizza",
        },
        {
          name: "Pizza salama (cela)",
          description: "Cela tepsija z govejo salamo.",
          price: "12,00 €",
          section: "Pizza",
        },
      ],
      visible: true,
      allergensVisible: false,
    },
    {
      id: "backwaren",
      title: "Pekarna & zajtrk",
      description: "Sezamovi pletenici, rogljicki, obloženi sendvici in sladko pecivo.",
      header: "Pekarna & zajtrk od 05:00",
      subtitle:
        "Sveže sezamove kite, rogljicki, obloženi sendvici in sladko pecivo – odlicno za zacetek dneva.",
      items: [
        { name: "Sezamov pletenec", description: "Sveže pecen sezamov kruh.", price: "2,50 €", section: "Pekovsko" },
        { name: "Obložen sendvic", description: "Dnevna izbira iz vitrine.", price: "4,00 €", section: "Zajtrk" },
        { name: "Makov zavitek", description: "Klasicen makov nadev.", price: "2,50 €", section: "Zavitek" },
        { name: "Orehov zavitek", description: "Orehov nadev v listnatem testu.", price: "2,50 €", section: "Zavitek" },
        { name: "Jabolcni zavitek", description: "Socen jabolcni nadev s cimetom.", price: "2,50 €", section: "Zavitek" },
        { name: "Cešnjev zavitek", description: "Sadni cešnjev nadev.", price: "2,50 €", section: "Zavitek" },
        { name: "Polž s kremnim sirom", description: "Mehko pecivo s kremnim sirom.", price: "1,50 €", section: "Pekovsko" },
        { name: "Pizza polž", description: "Slano pecivo s paradižnikom in sirom.", price: "2,50 €", section: "Pekovsko" },
        { name: "Marmeladni rogljicek", description: "Listnati rogljicek z marmelado.", price: "2,00 €", section: "Pekovsko" },
        { name: "Cokoladni rogljicek", description: "Polnjen s cokolado.", price: "2,00 €", section: "Pekovsko" },
        { name: "Masleni rogljicek", description: "Klasicen masleni rogljicek.", price: "1,80 €", section: "Pekovsko" },
        { name: "Sirov rogljicek", description: "Slan sirni nadev.", price: "1,70 €", section: "Pekovsko" },
        { name: "Slivova pita", description: "Kos slivove pite.", price: "3,50 €", section: "Kolaci" },
        { name: "Jabolcna pita", description: "Kos jabolcne pite.", price: "3,50 €", section: "Kolaci" },
        { name: "Trilece", description: "Balkanska mlecna sladica.", price: "3,50 €", section: "Sladice" },
        { name: "Kremna rezina", description: "Vaniljeva kremsnita.", price: "3,50 €", section: "Sladice" },
        { name: "Pistacija baklava", description: "Plasti vlecenega testa s pistacijo.", price: "3,00 €", section: "Sladice" },
        { name: "Baklava", description: "Klasicna orehova baklava.", price: "3,00 €", section: "Sladice" },
        { name: "Tulumba", description: "Ocvrti balkanski prigrizek v sirupu.", price: "3,00 €", section: "Sladice" },
      ],
      visible: true,
      allergensVisible: false,
    },
  ];

  return {
    locale: "sl",
    languageName: "Slovenšcina",
    languageLabel: "Jezik",
    skipToContentLabel: "Preskoci na vsebino",
    nav: {
      links: navLinks,
      openLabel: "Odpri meni",
      closeLabel: "Zapri meni",
      logoAriaLabel: "Pomik na zacetek",
      desktopTagline: "Mantije · Börek · Pizza",
      callLabel: "Poklici",
      mainNavLabel: "Glavna navigacija",
      mobileNavLabel: "Mobilna navigacija",
      jumpToLabel: "Skoci na",
      legalLinks: {
        impressum: "Imprint",
        privacy: "Zasebnost",
      },
    },
    hero: {
      content: {
        eyebrow: "Balkanska pekarna-pizza-žar v Riedlingenu",
        title: {
          leading: "Börek, mantije & pizza",
          highlight: "sveže peceno",
          trailing: "na Neue Unlinger Str. 19/1.",
        },
        description:
          "Sveže balkanske specialitete od 05:00: börek, mantije, pizza, zajtrk in prigrizki za s sabo.",
        secondary: "Takeaway v Riedlingenu – narocilo na 07371 1296664 ali pridite osebno.",
        image: HERO_CONTENT.image,
        supportingNote: "Družinsko · Ugoden zajtrk · Prijazna postrežba",
      },
      badges: heroBadges,
      ctas: {
        callNow: "Poklici",
        viewMenu: "Prikaži jedilnik",
      },
      status: {
        openPrefix: "Odprto do",
        closedPrefix: "Odpremo ob",
        openUntil: "22:00",
        opensAtWeekday: "05:00",
        opensAtSunday: "07:00",
      },
      galleryLabels: {
        aria: "Galerija hero",
        fallback: "Galerija sledi kmalu",
        previous: "Prejšnja slika",
        next: "Naslednja slika",
        dot: "Prikaži sliko",
      },
      whatsappLabel: "Novice in ponudbe prek WhatsApp",
    },
    specialties: {
      eyebrow: "Balkanske klasike",
      title: "Börek, mantije, pizza & zajtrk v Riedlingenu",
      description:
        "Vsaka specialiteta nastane v majhnih serijah, pociva z družinsko mešanico zacimb in se sveže spece tik pred postrežbo – hrustljavo, socno in popolno za s sabo.",
      items: specialties,
    },
    menu: {
      eyebrow: "Jedilnik",
      defaultSectionName: "Drugo",
      takeawayLabel: "Pripravljeno za s sabo",
      orderNowLabel: "Naroci zdaj",
      orderPhone: "+4973714095580",
      allergensTitle: "Dodatki",
      allergensLegend: {
        A: "Gluten",
        B: "Glutamat",
        C: "Poper",
        D: "Sol",
        E: "Mleko & laktoza",
        F: "Soja, krompirjev škrob",
        H: "Cesen",
      },
      footerNote: "Vse cene v EUR z DDV – cene in razpoložljivost se lahko spremenijo – stanje: december 2025",
      categories: menuCategories,
    },
    hours: {
      eyebrow: "Odpiralni cas",
      heading: "05:00 - 22:00, vsak dan.",
      description:
        "Zajtrk za zgodnje, kosilo z žarom & pizzo, vecerni prigrizki za pozne in nocne izmene – vedno sveže, vedno prijazno, brez prednarocila.",
      tipLabel: "Nasvet",
      tipText: "Dnevne ponudbe od 10:00 – za zagotovljeno porcijo poklicite 07371 1296664.",
      openingHours,
      mapsEmbed: GOOGLE_MAPS_EMBED,
      mapConsent: {
        title: "Naložiti Google Maps?",
        description:
          'Google Maps se naloži šele po vašem soglasju. S klikom na "Naloži karto (Google)" se strinjate, da Google Ireland/Google LLC (ZDA) prejme vaš IP in podatke o uporabi; možni so piškotki.',
        cta: "Naloži karto (Google)",
        note: "Opomba: preklicete tako, da stran osvežite brez aktivacije karte.",
        iframeTitle: "Google Maps – lokacija Balkan pekarna-pizza-žar",
      },
      location: {
        eyebrow: "Lokacija",
        street: "Neue Unlinger Str. 19/1",
        city: "88499 Riedlingen",
        transport: 'Parkirišca pred lokalom · Avtobusna linija 7606 "Neue Unlinger Straße"',
        cta: "Nacrt poti",
      },
    },
    reviews: {
      eyebrow: "Mnenja",
      heading: "Kaj pravijo gostje",
      description:
        "Glasovi iz Riedlingena, Neufre in okolice: resnicne izkušnje o böreku, zajtrku, pizzi in take-away pri Balkan pekarna-pizza-žar-(Brotart).",
      buttonLabel: "Vsa mnenja na Googlu",
      summary: {
        ...GOOGLE_REVIEW_SUMMARY,
        highlights: [
          "Odlicno razmerje cena/ponudba za zajtrk & börek",
          "Hiter take-away v Riedlingenu",
          "Prijazna postrežba od 05:00 do 22:00",
        ],
      },
      reviews: GOOGLE_REVIEWS,
      labels: {
        average: "Povprecje",
        outOf: "/ 5",
        publicVoices: "javna mnenja",
        asOf: "Stanje",
        source: "Vir",
        starSuffix: "od 5 zvezdic",
      },
    },
    about: {
      eyebrow: "Naša zgodba",
      heading: "Družinsko vodeno s pogledom naprej.",
      description:
        "Balkan pekarna-pizza-žar-(Brotart) združuje obrtno peko kruha z avtenticnimi balkanskimi recepti. Vse gnetemo, polnimo in pecemo sami – z lokalno moko, družinskimi zacimbami in pecjo, ki deluje skoraj ves cas.",
      differentiators: [
        {
          title: "Sveža vitrina cez dan",
          description: "Kruh, börek in sezamove kite pecemo veckrat dnevno – nic ne stoji dolgo.",
        },
        {
          title: "Kosilo = žar",
          description: "Cevapcici, wrapi, solate in pizza hitro cez pult za s sabo.",
        },
        {
          title: "Sprošceni veceri",
          description: "Topla kuhinja do 22:00, prigrizki in sladice – popolno po službi ali za pozne izmene.",
        },
      ],
      values,
      whyTitle: "Zakaj Balkan pekarna-pizza-žar?",
    },
    contact: {
      eyebrow: "Kontakt & narocila",
      heading: "Veselimo se vašega obiska ali narocila.",
      description:
        "Poklicite, pošljite WhatsApp ali pridite spontano – vedno imamo kaj sveže iz peci in zapakiramo za s sabo.",
      highlights: [
        {
          label: "Telefon",
          value: CONTACT_INFO.displayPhone,
          description: "Poklicite in narocite",
          href: `tel:${CONTACT_INFO.phone}`,
          icon: "🥟",
          cta: "Poklici",
        },
        {
          label: "Naslov",
          value: CONTACT_INFO.street,
          description: `${CONTACT_INFO.zip} ${CONTACT_INFO.city}`,
          href: CONTACT_INFO.mapsLink,
          icon: "🍕",
          cta: "Nacrt poti",
          external: true,
        },
      ],
      socialHeading: "Socialno & mediji",
      socialLinks: [{ label: "Google Maps", href: CONTACT_INFO.mapsLink, handle: "Mnenja" }],
    },
    footer: {
      tagline: "Balkanska dušna hrana v Riedlingenu",
      noTracking: "Brez piškotkov ali sledenja. Google Maps se naloži šele po vašem kliku.",
      backToTop: "Na vrh",
      rights: "Vse pravice pridržane.",
    },
    legal: {
      backLabel: "Nazaj na zacetek",
      impressum: {
        metadata: {
          title: "Imprint",
          description: "Pravne informacije Balkan pekarna-pizza-žar-(Brotart) v Riedlingenu.",
        },
        title: "Imprint",
        sections: [
          {
            heading: "Ponudnik",
            paragraphs: [CONTACT_INFO.company, CONTACT_INFO.street, `${CONTACT_INFO.zip} ${CONTACT_INFO.city}`],
          },
          {
            heading: "Kontakt",
            paragraphs: [`Telefon: ${CONTACT_INFO.displayPhone}`, `E-mail: ${CONTACT_INFO.email}`],
          },
          {
            heading: "Pooblašceni zastopniki",
            paragraphs: ["Družina Imeri", CONTACT_INFO.street, `${CONTACT_INFO.zip} ${CONTACT_INFO.city}`],
          },
          {
            heading: "Odgovorni po nemški medijski zakonodaji",
            paragraphs: ["Družina Imeri, naslov kot zgoraj."],
          },
          {
            heading: "ID za DDV",
            paragraphs: [CONTACT_INFO.taxId],
          },
          {
            heading: "Reševanje sporov",
            paragraphs: [
              "Evropska komisija ponuja platformo za spletno reševanje sporov (OS): https://ec.europa.eu/consumers/odr/. Nismo dolžni niti pripravljeni sodelovati v postopkih pred potrošniško arbitražo.",
            ],
          },
        ],
      },
      privacy: {
        metadata: {
          title: "Politika zasebnosti",
          description: "Informacije o zasebnosti za Balkan pekarna-pizza-žar-(Brotart) v Riedlingenu.",
        },
        title: "Politika zasebnosti",
        sections: [
          {
            heading: "Uvod",
            paragraphs: [
              "Veseli smo vašega zanimanja za Balkan pekarna-pizza-žar-(Brotart). Varstvo vaših osebnih podatkov nam je pomembno. Spodaj vas obvešcamo o obdelavi vaših podatkov ob obisku našega spletnega mesta.",
            ],
          },
          {
            heading: "Upravljavec",
            paragraphs: [
              `${CONTACT_INFO.company}, ${CONTACT_INFO.street}, ${CONTACT_INFO.zip} ${CONTACT_INFO.city}`,
              `Telefon: ${CONTACT_INFO.displayPhone}`,
              `E-mail: ${CONTACT_INFO.email}`,
            ],
          },
          {
            heading: "Gostovanje & dostava (GitHub Pages/CDN)",
            paragraphs: [
              "Spletna stran je staticna in se dostavlja prek GitHub Pages (GitHub Inc., ZDA). Strežniški logi (IP, datum/cas, datoteka, referer, uporabniški agent) se obdelujejo za tehnicno dostavo; vkljuceni so lahko CDN-ji kot Fastly. Pravna podlaga: 6(1)(f) GDPR (legitimni interes za varno in hitro dostavo).",
              "Prenos v tretje države: GitHub/Fastly imata sedež v ZDA; prenos temelji na standardnih pogodbenih klavzulah; ostaja minimalno tveganje dostopa ZDA.",
              "Hramba logov: obicajno 7–30 dni (odvisno od ponudnika), dlje le za dokazne namene.",
            ],
          },
          {
            heading: "Piškotki & sledenje",
            paragraphs: [
              "Ne uporabljamo piškotkov ali orodij za sledenje. Profiliranja ni. Povezava z Googlom nastane le, ce aktivno naložite karto (glejte spodaj).",
            ],
          },
          {
            heading: "Pisave",
            paragraphs: [
              "Vse pisave (Inter, Playfair Display, Orbitron) so gostovane lokalno prek next/font/google. Med obiskom ni zahtevkov na Googlove strežnike.",
            ],
          },
          {
            heading: "Zunanje storitve – Google Maps (opcijsko)",
            paragraphs: [
              'Ce kliknete "Naloži karto (Google)", se naloži Google Maps (Google Ireland/Google LLC, ZDA). Obdelujejo se lahko IP, podatki o napravi, uporabi in po potrebi lokaciji (ce je dovoljena); možni so piškotki. Pravna podlaga: vaša privolitev, Art. 6(1)(a) GDPR. Brez klika ni povezave z Googlom. Preklic: osvežite stran brez aktivacije karte.',
            ],
          },
          {
            heading: "Komunikacija",
            paragraphs: [
              "Telefon: Ko poklicete, vidimo vašo številko; uporabljamo jo le za obravnavo zahteve (Art. 6(1)(b/f) GDPR).",
              "E-mail: Vsebino in metapodatke obdeluje naš ponudnik e-pošte; prosimo, ne pošiljajte obcutljivih podatkov po e-pošti.",
              "WhatsApp: Povezave na wa.me oziroma naš kanal vodijo do storitve Meta (WhatsApp Ireland/LLC, ZDA). Uporaba obdeluje vašo telefonsko številko, IP, podatke o napravi in uporabi v skladu s politiko WhatsApp. Pravna podlaga: vaša prostovoljna uporaba/soglasje.",
            ],
          },
          {
            heading: "Vaše pravice",
            paragraphs: [
              "Imate pravice do dostopa, popravka, izbrisa, omejitve obdelave, prenosljivosti podatkov, ugovora ter pritožbe pri nadzornem organu. Kontaktirajte nas na zgornje podatke.",
            ],
          },
        ],
      },
    },
  };
}
