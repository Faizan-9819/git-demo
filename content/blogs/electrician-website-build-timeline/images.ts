import type { BlogImage } from "@/app/lib/blog-content-types";

/**
 * Every image used in this blog lives here. Pick which image should
 * represent the blog on /blog and /nl/blog by setting featuredImage: true
 * on it — blog.ts reads that flag to set heroImage. The NL edition of this
 * blog reuses this same EN image (no separate NL asset).
 */
const images = {
  timelinePhoto: {
    src: "/blogimages/en/How-long-does-it-take-to-build-an-electrician-website/blog_4.webp",
    alt: "Timeline of building an electrician website across the DIY, freelancer, and managed routes",
    featuredImage: true,
  } satisfies BlogImage,
};

export default images;

export function getFeaturedImage(): BlogImage {
  const found = Object.values(images).find((image) => image.featuredImage);
  return found ?? Object.values(images)[0];
}
