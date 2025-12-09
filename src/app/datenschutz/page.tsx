import LegalContent from "@/components/legal-content";
import { getSiteContent } from "@/i18n/content";
import { DEFAULT_LOCALE } from "@/i18n/locales";

const { legal } = getSiteContent(DEFAULT_LOCALE);

export const metadata = {
  title: legal.privacy.metadata.title,
  description: legal.privacy.metadata.description,
};

export default function DatenschutzPage() {
  return <LegalContent variant="privacy" />;
}
