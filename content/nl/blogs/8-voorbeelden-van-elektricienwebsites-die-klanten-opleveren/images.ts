import type { BlogImage } from "@/app/lib/blog-content-types";

const images = {
  examplesCover: {
    src: "/blogimages/en/8-electrician-website-examples-that-actually-win-customers/8_electrician_website_examples_that_actually_win_customers_and_what_they_get_right_ (1).webp",
    alt: "Collage van elektricienwebsites op desktop en mobiel",
    featuredImage: true,
  } satisfies BlogImage,
};

export default images;

export function getFeaturedImage(): BlogImage {
  const found = Object.values(images).find((image) => image.featuredImage);
  return found ?? Object.values(images)[0];
}
