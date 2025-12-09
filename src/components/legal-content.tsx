"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/i18n-provider";

type LegalVariant = "impressum" | "privacy";

export default function LegalContent({ variant }: { variant: LegalVariant }) {
  const { content } = useI18n();
  const legal = content.legal[variant];

  return (
    <main id="main" className="mx-auto max-w-4xl px-6 py-16 text-stone-800">
      <Link href="/" className="text-sm text-brotart-600 underline">
        {content.legal.backLabel}
      </Link>
      <h1 className="mt-6 text-3xl font-semibold text-stone-900">{legal.title}</h1>

      {legal.sections.map((section) => (
        <section key={section.heading} className="mt-8 space-y-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-stone-900">{section.heading}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p key={`${section.heading}-${index}`} className="text-stone-700">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </main>
  );
}
