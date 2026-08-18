import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import ContactPageContent from "../components/contact/ContactPageContent";
import { buildPageSchema, SITE_URL } from "../lib/seo";

const title = "Contact Growth Rocket | Get in Touch";
const description =
  "Contact Growth Rocket for professional websites, booking systems, the Growth Rocket Hub, partnerships, and business support.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/contact`,
    languages: {
      en: `${SITE_URL}/contact`,
      nl: `${SITE_URL}/nl/contact`,
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildPageSchema("/contact", title, description)} />
      <ContactPageContent locale="en" />
    </>
  );
}
