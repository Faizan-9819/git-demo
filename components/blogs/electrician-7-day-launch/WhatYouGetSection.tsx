import BlogProse from "@/components/blogs/shared/BlogProse";
import WhatYouGetCards from "./WhatYouGetCards";
import EcosystemDiagram from "./EcosystemDiagram";

export default function WhatYouGetSection() {
  return (
    <section id="whatyouget" className="scroll-mt-24">
      <BlogProse
        heading="What you're actually getting in 7 days"
        paragraphs={[
          "A seven-day launch isn't about delivering the fastest possible website. It's about giving your business everything it needs to establish a professional online presence without months of project management. By launch day, you're receiving much more than a collection of web pages.",
        ]}
      />

      <WhatYouGetCards />
      <EcosystemDiagram />

      <div className="max-w-[720px]">
        <p className="mt-10 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          That&apos;s what makes the seven-day system different. It&apos;s not simply about building websites
          faster. It&apos;s about giving electricians a complete online system that&apos;s ready to support their
          business from the very first day.
        </p>
      </div>
    </section>
  );
}
