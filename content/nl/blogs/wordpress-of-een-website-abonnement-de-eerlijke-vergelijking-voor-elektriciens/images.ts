import type { BlogImage } from "@/app/lib/blog-content-types";

const images = {
  wpVsWaasCover: {
    src: "/blogimages/en/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison/wordpress_vs_waas_website_for_electrician_businesses_an_honest_comparison (1).webp",
    alt: "WordPress naast een volledig ontzorgd website-abonnement voor elektriciens",
    featuredImage: true,
  } satisfies BlogImage,
};

export default images;

export function getFeaturedImage(): BlogImage {
  const found = Object.values(images).find((image) => image.featuredImage);
  return found ?? Object.values(images)[0];
}
