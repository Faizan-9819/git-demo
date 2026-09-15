import Image from "next/image";

type BlogImageBlockProps = {
  src: string;
  alt: string;
  caption?: string;
  /**
   * Marks this image as the blog's featured image — the same image that
   * appears on the /blog listing card. Set this on exactly one image block
   * per blog. Purely a content-authoring flag; it does not change how this
   * component renders, only which image blog.ts wires up as heroImage.
   */
  featuredImage?: boolean;
  /**
   * "section" (default): this image is its own top-level entry in a blog's
   * `sections` array, directly followed by the next section's heading
   * (mt-24). Uses a matching mt-24 so the gap above and below the image is
   * symmetric — SectionRenderer wraps every section in flow-root so this
   * margin never collapses with a neighbor.
   * "embedded": this image sits inside another section's own JSX, between
   * smaller-rhythm content (e.g. right after a paragraph, or as the first
   * element in a section before an mt-8/mt-11 heading) — uses the original
   * smaller top gap so it doesn't blow out that local spacing.
   */
  spacing?: "section" | "embedded";
};

export default function BlogImageBlock({
  src,
  alt,
  caption,
  spacing = "section",
}: BlogImageBlockProps) {
  return (
    <figure className={spacing === "embedded" ? "mt-4 sm:mt-6" : "mt-12"}>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[var(--color-blog-media)]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 800px, 100vw"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption
          className="mt-3 sm:mt-3.5 font-poppins text-xs sm:text-[13px] leading-5 text-[var(--color-dolphin)]"
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      )}
    </figure>
  );
}
