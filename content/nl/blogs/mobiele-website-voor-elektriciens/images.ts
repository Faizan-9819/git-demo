import type { BlogImage } from "@/app/lib/blog-content-types";

const images = {
  mobileSearchCover: {
    src: "/blogimages/en/6-mobile-website-for-electricians/mobile_website_for_electricians_why_it_matters_more_than_you_think_and_how_to_fix_yours_ (3).webp",
    alt: "Mobiele zoekresultaten voor een elektricien, met een opvallende belknop",
    featuredImage: true,
  } satisfies BlogImage,
};

export default images;

export function getFeaturedImage(): BlogImage {
  const found = Object.values(images).find((image) => image.featuredImage);
  return found ?? Object.values(images)[0];
}
