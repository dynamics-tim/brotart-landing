export const SUPPORTED_LOCALES = ["de", "en", "sl"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "de";

export const LOCALE_LABELS: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  sl: "Slovenščina",
};

export const LANGUAGE_STORAGE_KEY = "brotart_locale";

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && SUPPORTED_LOCALES.includes(value as Locale);
}
