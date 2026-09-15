import BlogProse from "@/components/blogs/shared/BlogProse";
import SevenDayTimeline from "./SevenDayTimeline";

export default function TimelineSection() {
  return (
    <section id="timeline" className="scroll-mt-24">
      <BlogProse
        heading="The 7-day timeline, day by day"
        paragraphs={[
          "Each day has a clear objective. Because every part of the process is already connected, our team works on multiple tasks simultaneously instead of waiting for one stage to finish before starting the next. Your role stays simple: you provide the information upfront, review the website when it's ready, and approve the final version before launch. Growth Rocket takes care of everything in between.",
        ]}
      />
      <SevenDayTimeline />
    </section>
  );
}
