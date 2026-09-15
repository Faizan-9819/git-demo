import type { BlogImage } from "@/app/lib/blog-content-types";

const images: Record<string, BlogImage> = {
  aboutCover: {
    src: "/blogimages/en/10-how-to-write-an-about-us-page-for-an-electrician/spotlight img 2 blog.png",
    alt: "How to write an About Us page for an electrician that builds trust",
    featuredImage: true,
  },
};

export default images;

export function getFeaturedImage(): BlogImage {
  const found = Object.values(images).find((image) => image.featuredImage);
  return found ?? Object.values(images)[0];
}
