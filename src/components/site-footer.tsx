import Link from "next/link";
import type { ContactInfo } from "@/content/site";

type SiteFooterProps = {
  contactInfo: ContactInfo;
};

export default function SiteFooter({ contactInfo }: SiteFooterProps) {
  return (
    <footer className="relative z-10 bg-[#1f140d] text-[#f9f1e7]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#cba07f]">BrotArt</p>
          <p className="mt-2 text-2xl font-semibold">Ofenfrisch seit 2024</p>
          <p className="mt-2 text-sm text-[#d6c3b3]">
            {contactInfo.street} · {contactInfo.zip} {contactInfo.city} ·{" "}
            <a href={`tel:${contactInfo.phone}`} className="underline decoration-[#cba07f]">
              {contactInfo.displayPhone}
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-[#d6c3b3]">
          <Link href="/impressum" className="transition hover:text-white">
            Impressum
          </Link>
          <Link href="/datenschutz" className="transition hover:text-white">
            Datenschutz
          </Link>
          <a href="#start" className="transition hover:text-white">
            Nach oben
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[#cba07f]">
        © {new Date().getFullYear()} BrotArt. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
