import type { BlogImage } from "@/app/lib/blog-content-types";

/**
 * Only an English image was supplied for this blog. Per instruction, reuse
 * it for both EN and NL versions until a Dutch-specific image is provided.
 */
const images = {
  optionsIntro: {
    src: "/blogimages/en/electrician-website-cost-netherlands/blog_1.webp",
    alt: "Comparing electrician website options in the Netherlands",
    featuredImage: true,
  } satisfies BlogImage,
};

export default images;

export function getFeaturedImage(): BlogImage {
  const found = Object.values(images).find((image) => image.featuredImage);
  return found ?? Object.values(images)[0];
}
