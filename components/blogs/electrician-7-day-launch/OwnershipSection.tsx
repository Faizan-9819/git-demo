import BlogProse from "@/components/blogs/shared/BlogProse";
import PullQuote from "@/components/blogs/shared/PullQuote";
import OwnershipFlow from "./OwnershipFlow";

export default function OwnershipSection() {
  return (
    <section id="ownership" className="scroll-mt-24">
      <BlogProse
        heading="Once your intake is complete, Growth Rocket takes over"
        paragraphs={["This is where our process differs most from a traditional website project."]}
      />
      <div className="max-w-[720px]">
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          With many agencies, the work doesn&apos;t really begin after the first meeting — it begins <em>for you</em>.
          You&apos;re asked to coordinate feedback, chase content, review multiple design concepts, answer new
          questions every week, and keep the project moving while juggling your day-to-day business.
        </p>
      </div>

      <PullQuote>You stop managing the website project. Growth Rocket starts managing it.</PullQuote>

      <OwnershipFlow />

      <div className="max-w-[720px]">
        <p className="mt-11 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          Once you&apos;ve completed your onboarding, our team takes ownership of the project. We write your
          content, prepare and optimise your photos, build every page, connect your contact forms, configure your
          technical settings, test everything across desktop and mobile, and prepare your website for launch.
        </p>
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          Rather than involving you in every small decision, we focus on delivering meaningful progress behind the
          scenes. We&apos;ll come back to you when there&apos;s something important to review — not every time
          another task is completed.
        </p>
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          That means you don&apos;t have to manage another project. Less waiting. Less back and forth. Less project
          management for you — and more time spent doing the work that actually grows your business.
        </p>
      </div>
    </section>
  );
}
