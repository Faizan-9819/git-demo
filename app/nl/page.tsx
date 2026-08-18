import type { Metadata } from "next";
import NlHomeClient from "./NlHomeClient";

export const metadata: Metadata = {
  title: "Beheerde Websites voor Kleine Bedrijven | Growth Rocket",
  description:
    "Een professionele website voor uw bedrijf — gebouwd, gehost en beheerd voor u. Vaste jaarprijs, live in 7 dagen. Bekijk hoe het werkt.",
  alternates: {
    canonical: "https://www.getgrowthrocket.com/nl/",
    languages: {
      en: "https://www.getgrowthrocket.com/",
      nl: "https://www.getgrowthrocket.com/nl/",
    },
  },
};

export default function NlHomePage() {
  return <NlHomeClient />;
}
