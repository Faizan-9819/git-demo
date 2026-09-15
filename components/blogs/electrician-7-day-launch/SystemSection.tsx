import BlogProse from "@/components/blogs/shared/BlogProse";
import SystemDiagram from "./SystemDiagram";

export default function SystemSection() {
  return (
    <>
      <BlogProse
        id="system"
        heading="Why a 7-day launch is a system, not a promise"
        paragraphs={[
          "If you've ever worked with a traditional web agency, you've probably experienced why projects take so long.",
          "Every website starts with a blank canvas. A new design has to be created. Content has to be written from scratch. Designers wait for copywriters. Developers wait for designers. Feedback creates more revisions, which create more waiting. Before long, a project that looked simple on paper has stretched into two or three months.",
          "That's not because agencies are doing anything wrong. It's simply how custom projects work.",
          "Growth Rocket approaches the problem differently. Instead of rebuilding the same foundations for every customer, we've created a proven system specifically for small service businesses like electricians. The structure has already been tested. The layouts are designed to convert visitors into enquiries. Mobile optimisation, contact forms, technical SEO, hosting, maintenance, and launch are already part of the platform.",
          "This is what lets our specialists work in parallel instead of waiting for one another.",
        ]}
      />
      <SystemDiagram />
      <div className="w-full">
        <p className="mt-11 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          While content is being written, the website framework is already being
          prepared. While images are being optimised, technical configurations
          are already underway. Instead of handing work from one department to
          another, multiple parts of the project move forward together.
        </p>
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          The result is a faster process without compromising quality. More
          importantly, it creates a simpler experience for you. You&apos;re not
          expected to coordinate designers, developers, writers, or technical
          specialists. You&apos;re simply providing the information about your
          business.
        </p>
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          That&apos;s why seven days isn&apos;t a marketing promise. It&apos;s
          the natural outcome of a system designed to remove unnecessary delays.
        </p>
      </div>
    </>
  );
}
