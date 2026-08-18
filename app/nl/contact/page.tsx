import type { Metadata } from "next";
import JsonLd from "../../components/JsonLd";
import { buildPageSchema, SITE_URL } from "../../lib/seo";
import ContactPageContent from "@/app/components/contact/ContactPageContent";

const title = "Contact opnemen met Growth Rocket";
const description =
  "Neem contact op met Growth Rocket voor professionele websites, boekingssystemen, de Growth Rocket Hub, samenwerkingen en zakelijke ondersteuning.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/nl/contact`,
    languages: {
      en: `${SITE_URL}/contact`,
      nl: `${SITE_URL}/nl/contact`,
    },
  },
};

export default function NlContactPage() {
  return (
    <>
      <JsonLd data={buildPageSchema("/nl/contact", title, description)} />
      <ContactPageContent locale="nl" />
    </>
  );
}
