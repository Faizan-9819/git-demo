import type { BlogImage } from "@/app/lib/blog-content-types";

const images: Record<string, BlogImage> = {
  aboutCover: {
    src: "/blogimages/en/10-how-to-write-an-about-us-page-for-an-electrician/spotlight img 2 blog.png",
    alt: "Zo schrijf je een over-ons-pagina voor een elektricien die vertrouwen wekt",
    featuredImage: true,
  },
};

export default images;

export function getFeaturedImage(): BlogImage {
  const found = Object.values(images).find((image) => image.featuredImage);
  return found ?? Object.values(images)[0];
}
