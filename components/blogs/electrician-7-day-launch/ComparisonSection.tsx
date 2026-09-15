import BlogProse from "@/components/blogs/shared/BlogProse";
import PullQuote from "@/components/blogs/shared/PullQuote";
import ComparisonTable from "./ComparisonTable";

export default function ComparisonSection() {
  return (
    <section id="comparison" className="scroll-mt-24">
      <BlogProse
        heading="Why traditional agencies need 6–12 weeks"
        paragraphs={[
          "The difference between a traditional agency and Growth Rocket isn't simply speed. It's the way the work is organised. A traditional website project is usually treated as a bespoke creative project — every stage depends on the previous one being completed before the next can begin. Design can't move until discovery is done. Development waits for design. Testing waits for development. Every revision creates another round of emails, meetings and delays.",
        ]}
      />

      <ComparisonTable />

      <PullQuote>The biggest difference isn&apos;t speed. It&apos;s who carries the workload.</PullQuote>

      <div className="max-w-[720px]">
        <p className="font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          With a traditional agency, you&apos;re often managing the project alongside your business. With Growth
          Rocket, you complete one onboarding and our team takes responsibility for moving everything forward.
        </p>
      </div>
    </section>
  );
}
