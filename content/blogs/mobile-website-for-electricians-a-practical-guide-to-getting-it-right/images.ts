import type { BlogImage } from "@/app/lib/blog-content-types";

const images = {
  practicalGuideCover: {
    src: "/blogimages/en/mobile-website-for-electricians-a-practical-guide-to-getting-it-right/mobile_website_for_electricians_a_practical_guide_to_getting_it_right (1).webp",
    alt: "Mobile website for electricians shown on a smartphone, illustrating a click-to-call button and service list",
    featuredImage: true,
  } satisfies BlogImage,
};

export default images;

export function getFeaturedImage(): BlogImage {
  const found = Object.values(images).find((image) => image.featuredImage);
  return found ?? Object.values(images)[0];
}
