import BlogProse from "@/components/blogs/shared/BlogProse";
import FitGrid from "./FitGrid";

export default function FitSection() {
  return (
    <section id="fit" className="scroll-mt-24">
      <BlogProse
        heading="What this system is (and isn't) built for"
        paragraphs={[
          "A 7-day website launch isn't the right solution for every business — and that's intentional. Growth Rocket is designed for service businesses that want a professional online presence without spending months managing a website project. We believe in being transparent about where it fits, and where it doesn't.",
        ]}
      />

      <FitGrid />

      <div className="w-full">
        <p className="mt-8 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          Those projects deserve a different process and a different timeline.
          By narrowing our focus, we&apos;ve been able to simplify the process,
          improve the experience and consistently deliver websites that are
          ready to perform from day one.
        </p>
      </div>
    </section>
  );
}
