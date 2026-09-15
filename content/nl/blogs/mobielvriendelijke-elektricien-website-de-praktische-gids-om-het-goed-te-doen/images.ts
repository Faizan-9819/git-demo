import type { BlogImage } from "@/app/lib/blog-content-types";

const images = {
  practicalGuideCover: {
    src: "/blogimages/en/mobile-website-for-electricians-a-practical-guide-to-getting-it-right/mobile_website_for_electricians_a_practical_guide_to_getting_it_right (1).webp",
    alt: "Mobielvriendelijke website voor elektriciens op een smartphone, met een belknop en dienstenoverzicht",
    featuredImage: true,
  } satisfies BlogImage,
};

export default images;

export function getFeaturedImage(): BlogImage {
  const found = Object.values(images).find((image) => image.featuredImage);
  return found ?? Object.values(images)[0];
}
