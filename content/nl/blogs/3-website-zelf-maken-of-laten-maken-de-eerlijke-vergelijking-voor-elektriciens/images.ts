import type { BlogImage } from "@/app/lib/blog-content-types";

const images = {
  zelfMakenCover: {
    src: "/blogimages/en/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you/blog_3 (1).webp",
    alt: "Drie routes naar een elektricienwebsite: zelf bouwen, een freelancer inhuren, of een volledig ontzorgde dienst",
    featuredImage: true,
  } satisfies BlogImage,
};

export default images;

export function getFeaturedImage(): BlogImage {
  const found = Object.values(images).find((image) => image.featuredImage);
  return found ?? Object.values(images)[0];
}
