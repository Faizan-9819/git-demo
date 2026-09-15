import type { BlogImage } from "@/app/lib/blog-content-types";

/**
 * Every image, h2, para block in this blog lives here. Pick which image
 * should represent the blog on /blog and /nl/blog by setting
 * featuredImage: true on it — blog.ts reads that flag to set heroImage.
 */
const images = {
  mobileSearchCover: {
    src: "/blogimages/en/6-mobile-website-for-electricians/mobile_website_for_electricians_why_it_matters_more_than_you_think_and_how_to_fix_yours_ (3).webp",
    alt: "Mobile search results for an electrician, with a prominent call-now button",
    featuredImage: true,
  } satisfies BlogImage,
};

export default images;

export function getFeaturedImage(): BlogImage {
  const found = Object.values(images).find((image) => image.featuredImage);
  return found ?? Object.values(images)[0];
}
