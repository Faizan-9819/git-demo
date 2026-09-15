import type { BlogSection } from "@/app/lib/blog-content-types";

export default function SectionRenderer({ sections }: { sections: BlogSection[] }) {
  return (
    <>
      {sections.map(({ component: Component, props }, i) => (
        // flow-root isolates each section's own margins so they can't collapse
        // through into the next section's top margin (e.g. an image block's
        // bottom spacing colliding with the following heading's mt-24).
        <div key={i} className="flow-root">
          <Component {...props} />
        </div>
      ))}
    </>
  );
}
