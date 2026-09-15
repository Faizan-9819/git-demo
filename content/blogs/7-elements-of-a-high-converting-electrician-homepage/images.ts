import type { BlogImage } from "@/app/lib/blog-content-types";

/**
 * Every image, h2, para block in this blog lives here. Pick which image
 * should represent the blog on /blog and /nl/blog by setting
 * featuredImage: true on it — blog.ts reads that flag to set heroImage.
 */
const images = {
  electricianPhoto: {
    src: "blogimages/en/7-elements-of-a-high-converting-electrician-homepage/blog_5-1.webp",
    alt: "Electrician finishing work and checking a customer enquiry",
    caption:
      "Recommended: a real, documentary-style photo — not staged corporate stock.",
    featuredImage: true,
  } satisfies BlogImage,
};

export default images;

export function getFeaturedImage(): BlogImage {
  const found = Object.values(images).find((image) => image.featuredImage);
  return found ?? Object.values(images)[0];
}
