"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getSiteContent, type SiteContent } from "./content";
import {
  DEFAULT_LOCALE,
  LANGUAGE_STORAGE_KEY,
  LOCALE_LABELS,
  SUPPORTED_LOCALES,
  isLocale,
  type Locale,
} from "./locales";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: SiteContent;
  locales: readonly Locale[];
  localeOptions: ReadonlyArray<{ value: Locale; label: string }>;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    // Lazy initialization: read from localStorage on mount
    if (typeof window === "undefined") return DEFAULT_LOCALE;
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return stored && isLocale(stored) ? stored : DEFAULT_LOCALE;
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
    }
  }, [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale) return;
      if (!SUPPORTED_LOCALES.includes(next)) return;
      setLocaleState(next);
    },
    [locale]
  );

  const content = useMemo(() => getSiteContent(locale), [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      content,
      locales: SUPPORTED_LOCALES,
      localeOptions: SUPPORTED_LOCALES.map((entry) => ({ value: entry, label: LOCALE_LABELS[entry] })),
    }),
    [content, locale, setLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
