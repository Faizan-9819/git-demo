import BlogProse from "@/components/blogs/shared/BlogProse";
import IntakeChecklist from "./IntakeChecklist";

export default function IntakeSection() {
  return (
    <>
      <BlogProse
        id="intake"
        heading="What Growth Rocket needs before Day 1"
        paragraphs={[
          "The entire process starts with one simple onboarding. To keep your website on track for launch within seven days, we'll ask you for a few practical details before work begins:",
        ]}
      />
      <IntakeChecklist />
    </>
  );
}
