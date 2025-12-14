"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/i18n/i18n-provider";
import type { Locale } from "@/i18n/locales";

type LanguageSwitcherProps = {
  variant?: "desktop" | "mobile";
};

const FLAG_ICON: Record<Locale, string> = {
  de: "🇩🇪",
  en: "🇬🇧",
  sl: "🇸🇮",
};

const SHORT_LABEL: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  sl: "SL",
};

export default function LanguageSwitcher({ variant = "desktop" }: LanguageSwitcherProps) {
  const { locale, setLocale, localeOptions, content } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownWidth, setDropdownWidth] = useState<number | null>(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const handleSelect = (value: Locale) => {
    setLocale(value);
    close();
  };

  const labelId = useMemo(() => `language-switcher-${variant}`, [variant]);
  const current = localeOptions.find((opt) => opt.value === locale) ?? localeOptions[0];
  const currentLabel = SHORT_LABEL[current.value as Locale] ?? current.label;

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      setDropdownWidth(buttonRef.current.getBoundingClientRect().width);
    }
  }, [isOpen, locale]);

  const wrapperClasses =
    "relative inline-flex items-center rounded-full border border-stone-200 bg-white/90 px-2.5 py-1 text-sm font-semibold text-stone-900 shadow focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brotart-500 hover:shadow-md transition-shadow";

  return (
    <div className={`${variant === "mobile" ? "flex-shrink-0" : ""} relative z-40`}>
      <button
        id={labelId}
        type="button"
        onClick={toggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        ref={buttonRef}
        className={`${wrapperClasses} w-auto shrink-0 justify-between`}
        aria-label={content.languageLabel}
      >
        <span className="flex items-center gap-1.5">
          <span
            className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-100 text-base leading-none"
            aria-hidden="true"
          >
            {FLAG_ICON[current.value as Locale]}
          </span>
        </span>
        <span aria-hidden="true" className="text-xs text-stone-500">
          {isOpen ? "▴" : "▾"}
        </span>
      </button>

      {isOpen && (
        <div
          ref={listRef}
          role="listbox"
          aria-labelledby={labelId}
          className={`absolute ${variant === "mobile" ? "bottom-full mb-2" : "top-full mt-1"} right-0 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-lg shadow-stone-200/70 z-50`}
          style={{ width: dropdownWidth ? `${dropdownWidth}px` : undefined }}
        >
          {localeOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === locale}
              onClick={() => handleSelect(option.value as Locale)}
              className={`flex w-full items-center gap-2 px-3 py-2 text-sm transition hover:bg-stone-50 ${
                option.value === locale ? "bg-brotart-50 text-brotart-700 font-semibold" : "text-stone-700"
              }`}
            >
              <span aria-hidden="true" className="text-lg leading-none">
                {FLAG_ICON[option.value as Locale]}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
