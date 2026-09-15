import type { BlogImage } from "@/app/lib/blog-content-types";

const images: Record<string, BlogImage> = {
  launchCover: {
    src: "/blogimages/en/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days/spotlight img.png",
    alt: "The Growth Rocket managed system: intake, build, and launch in 7 days",
    featuredImage: true,
  },
  electricianPhoto: {
    src: "/figma/hero-dashboard.png",
    alt: "Electrician finishing work and checking a customer enquiry",
  },
};

export default images;

export function getFeaturedImage(): BlogImage {
  const found = Object.values(images).find((image) => image.featuredImage);
  return found ?? Object.values(images)[0];
}
