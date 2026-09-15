import PullQuote from "@/components/blogs/shared/PullQuote";

export default function ClosingSection() {
  return (
    <section id="closing" className="scroll-mt-24">
      <div className="max-w-[640px]">
        <h2 className="mt-28 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
          A better way to get your business online
        </h2>
        <p className="mt-7 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          Building a website shouldn&apos;t become another full-time project. For most electricians, the challenge
          isn&apos;t finding a web designer — it&apos;s finding the time to coordinate meetings, review endless
          revisions and manage a project while continuing to serve customers.
        </p>
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          The seven-day timeline isn&apos;t about working faster for the sake of speed. It&apos;s about removing the
          unnecessary delays of traditional website projects and replacing them with a proven system designed around
          how small service businesses actually work.
        </p>
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          From the moment you complete your onboarding, Growth Rocket takes ownership. We write the content, prepare
          your images, build the website, connect your enquiry system, test everything and launch it — while you
          stay focused on your business. And when your website goes live, that&apos;s not where the relationship
          ends.
        </p>
      </div>

      <PullQuote>
        You&apos;re not simply investing in a website. You&apos;re investing in a complete online system.
      </PullQuote>

      <div className="max-w-[640px]">
        <p className="font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          If you&apos;ve been putting off a new website because you thought it would take months of meetings and
          project management, it doesn&apos;t have to. With the right system, seven days is enough.
        </p>
      </div>
    </section>
  );
}
