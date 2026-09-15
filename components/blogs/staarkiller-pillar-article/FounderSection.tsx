"use client";

import Button from "@/app/components/ui/Button";

export default function FounderSection() {
  const openLeadForm = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  };

  return (
    <section id="founder" className="scroll-mt-24 pt-14">
      <div className="">
        <h2 className="text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
          The moment you become a founder
        </h2>

        <div className="mt-7">
          <p className="font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
            Let's zoom back out, because this article started with you — and it
            ends with you.
          </p>
          <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
            Graduation isn't the finish line. It's the moment your education
            stops being theoretical and starts becoming practical. All those
            years of frameworks and cases weren't preparation for an exam; they
            were preparation for <em>this</em> — the first real decision, the
            first real offer, the first real customer.
          </p>
          <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
            And somewhere along that road — between your final assignment and
            your first invoice — something changes that no diploma can certify.
            You stop being a student with an idea.
          </p>
        </div>

        <p className="mt-7 font-poppins text-[19px] font-semibold leading-[1.4] text-[var(--color-haiti)]">
          You become a founder.
        </p>

        <div className="mt-5">
          <p className="font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
            Nobody hands you that title. There's no ceremony for it. It happens
            quietly, the day you decide your idea deserves to exist in the real
            world — and you act on it.
          </p>
          <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
            Thousands of graduates across the Netherlands cross that line every
            year. Not the loudest ones, not necessarily the ones with the
            highest grades — the ones who launched before they felt completely
            ready, learned from real customers, and kept going.
          </p>
        </div>

        <div className="mt-8 space-y-3 rounded-xl border-l-[3px] border-[var(--color-violet-42)] bg-[var(--color-violet-98)] px-6 py-5">
          <p className="font-poppins text-[16.5px] font-medium leading-[26px] text-[var(--color-haiti)]">
            Your first business doesn't need to be perfect.
          </p>
          <p className="font-poppins text-[16.5px] font-medium leading-[26px] text-[var(--color-haiti)]">
            It needs to exist.
          </p>
          <p className="font-poppins text-[16.5px] font-medium leading-[26px] text-[var(--color-haiti)]">
            It needs to serve real customers.
          </p>
          <p className="font-poppins text-[16.5px] font-medium leading-[26px] text-[var(--color-haiti)]">
            It needs to start.
          </p>
          <p className="font-poppins text-[16.5px] font-medium leading-[26px] text-[var(--color-haiti)]">
            Everything else can evolve.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 rounded-[20px] border border-[var(--color-violet-92)] bg-[var(--color-blog-panel-light)] p-6 sm:p-9 lg:p-12">
        <p className="font-poppins text-lg leading-7 text-[var(--color-dolphin)]">
          Growth Rocket exists to make that first step simpler — the complete
          online business system that gives your idea a professional, organised
          home from day one.
        </p>
        <p className="mt-5 font-poppins text-[19px] font-semibold leading-[1.4] text-[var(--color-haiti)]">
          Ben jij startklaar?
        </p>

        <div className="mt-10">
          <Button
            onClick={openLeadForm}
            variant="primary"
            arrow="up-right"
            size="lg"
            className="blog-cta-button"
          >
            Ontdek Growth Rocket
          </Button>
        </div>

        <p className="mt-6 font-poppins text-[13px] text-[var(--color-dolphin)]">
          StartKlaar is een initiatief van Growth Rocket · Eén partner · Geen
          gedoe
        </p>
      </div>
    </section>
  );
}
