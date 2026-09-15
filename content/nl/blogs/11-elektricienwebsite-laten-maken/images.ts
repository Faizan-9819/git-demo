import type { BlogImage } from "@/app/lib/blog-content-types";

const images: Record<string, BlogImage> = {
  launchCover: {
    src: "/blogimages/en/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days/spotlight img.png",
    alt: "Het beheerde systeem van Growth Rocket: intake, bouw en lancering binnen 7 dagen",
    featuredImage: true,
  },
  electricianPhoto: {
    src: "/blogimages/nl/11-elektricienwebsite-laten-maken/electricien-klantaanvraag.jpg",
    alt: "Elektricien bekijkt een klantaanvraag op zijn telefoon naast zijn bedrijfsbus",
  },
};

export default images;

export function getFeaturedImage(): BlogImage {
  const found = Object.values(images).find((image) => image.featuredImage);
  return found ?? Object.values(images)[0];
}
