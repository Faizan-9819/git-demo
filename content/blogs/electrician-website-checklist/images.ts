import type { BlogImage } from "@/app/lib/blog-content-types";

const images = {
  pagesIntro: {
    src: "/blogimages/en/electrician-website-checklist/blog_2.webp",
    alt: "Checklist of essential pages for an electrician website",
    featuredImage: true,
  } satisfies BlogImage,
};

export default images;

export function getFeaturedImage(): BlogImage {
  const found = Object.values(images).find((image) => image.featuredImage);
  return found ?? Object.values(images)[0];
}
