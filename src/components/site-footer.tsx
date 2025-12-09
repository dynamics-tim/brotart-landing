"use client";

import Link from "next/link";
import type { ContactInfo } from "@/content/site";

type SiteFooterProps = {
  contactInfo: ContactInfo;
};

export default function SiteFooter({ contactInfo }: SiteFooterProps) {
  const handleScrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.querySelector("#start")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative z-10 bg-[#1f140d] text-[#f9f1e7]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#cba07f]">{contactInfo.brandShort}</p>
          <p className="mt-2 text-2xl font-semibold">Balkan-Soulfood in Riedlingen</p>
          <p className="mt-2 text-sm text-[#d6c3b3]">
            {contactInfo.street} · {contactInfo.zip} {contactInfo.city} ·{" "}
            <a href={`tel:${contactInfo.phone}`} className="underline decoration-[#cba07f]">
              {contactInfo.displayPhone}
            </a>
          </p>
          <p className="mt-2 text-xs text-[#bfa894]">
            Keine Cookies oder Tracking. Google Maps wird erst nach Ihrem Klick geladen.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-[#d6c3b3]">
          <Link href="/impressum" className="transition hover:text-white">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition hover:text-white">
            Datenschutz
          </Link>
          <a href="#start" onClick={handleScrollToTop} className="transition hover:text-white">
            Nach oben
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[#cba07f]">
        © {new Date().getFullYear()} {contactInfo.company}. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
