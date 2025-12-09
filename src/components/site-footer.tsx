"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/i18n-provider";

export default function SiteFooter() {
  const { content } = useI18n();
  const { contactInfo, footer } = content;
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.querySelector("#start")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative z-0 bg-[#1f140d] text-[#f9f1e7]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#cba07f]">{contactInfo.brandShort}</p>
          <p className="mt-2 text-2xl font-semibold">{footer.tagline}</p>
          <p className="mt-2 text-sm text-[#d6c3b3]">
            {contactInfo.street} - {contactInfo.zip} {contactInfo.city} -{" "}
            <a href={`tel:${contactInfo.phone}`} className="underline decoration-[#cba07f]">
              {contactInfo.displayPhone}
            </a>
          </p>
          <p className="mt-2 text-xs text-[#bfa894]">{footer.noTracking}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-[#d6c3b3]">
          <Link href="/impressum" className="transition hover:text-white">
            {content.nav.legalLinks.impressum}
          </Link>
          <Link href="/datenschutz" className="transition hover:text-white">
            {content.nav.legalLinks.privacy}
          </Link>
          <a href="#start" onClick={handleScrollToTop} className="transition hover:text-white">
            {footer.backToTop}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[#cba07f]">
        (c) {currentYear} {contactInfo.company}. {footer.rights}
      </div>
    </footer>
  );
}
