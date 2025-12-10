"use client";

import ScrollReveal from "@/components/scroll-reveal";
import { useI18n } from "@/i18n/i18n-provider";

export default function ContactSection() {
  const { content } = useI18n();
  const { contact } = content;

  return (
    <section id="kontakt" className="section-anchor mt-8 w-full px-6">
      <div className="relative mx-auto w-full max-w-6xl py-12">
        <div aria-hidden="true" className="absolute inset-0 -z-10 mx-auto max-w-5xl rounded-[3rem] bg-white/50 blur-3xl" />
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-10">
            <div className="rounded-[2.5rem] border border-white/70 bg-white/95 p-8 shadow-2xl shadow-brotart-100">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brotart-500">{contact.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">{contact.heading}</h2>
              <p className="mt-4 text-lg text-stone-600">{contact.description}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {contact.highlights.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-stone-100 bg-stone-50/70 p-5 transition hover:-translate-y-0.5 hover:border-brotart-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brotart-500"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-stone-400">{item.label}</p>
                        <p className="text-lg font-semibold text-stone-900">{item.value}</p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-stone-500">{item.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brotart-600">
                      {item.cta} <span aria-hidden="true">-&gt;</span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400">{contact.socialHeading}</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {contact.socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-brotart-200 hover:text-brotart-600"
                    >
                      <span className="font-semibold">{social.label}</span>{" "}
                      <span className="text-stone-400">{social.handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
