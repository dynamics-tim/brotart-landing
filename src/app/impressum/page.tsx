import LegalContent from "@/components/legal-content";
import { getSiteContent } from "@/i18n/content";
import { DEFAULT_LOCALE } from "@/i18n/locales";

const { legal } = getSiteContent(DEFAULT_LOCALE);

export const metadata = {
  title: legal.impressum.metadata.title,
  description: legal.impressum.metadata.description,
};

export default function ImpressumPage() {
  return <LegalContent variant="impressum" />;
}
