import { RevealGroup, RevealItem } from "./FeatureReveal";
import SectionCard from "./SectionCard";
import { WORKFLOW_STEPS } from "./data";

export default function WorkflowFold() {
  return (
    <SectionCard className="bg-[#5b2dce] text-white">
      <div className="flex items-center gap-[48px] max-[900px]:flex-col max-[900px]:items-stretch">
        <RevealGroup className="w-[42%] max-[900px]:w-full">
          <RevealItem>
            <h2 className="font-bricolage text-[clamp(39px,4.3vw,68px)] leading-[0.99] font-bold tracking-[-0.055em] max-[600px]:text-[38px]">
            One connected workflow for{" "}
            <span className="text-[#e4fa65]">your business.</span>
          </h2>
          </RevealItem>
          <RevealItem as="p" className="mt-[20px] text-[17px] leading-[1.65] text-white/[0.76]">
            Growth Rocket brings the different parts of your customer journey
            together. A visitor can discover your business, submit an enquiry or
            book an appointment, and their information becomes available in the
            Hub for the next step.
          </RevealItem>
        </RevealGroup>

        <RevealGroup delay={0.08} className="w-[58%] max-[900px]:mt-[8px] max-[900px]:w-full">
          {/* Desktop: horizontal rail with a connecting line behind the nodes. */}
          <ol className="relative flex w-full items-start pt-[28px] max-[600px]:hidden">
            <span
              aria-hidden
              className="absolute top-[8px] right-[10%] left-[10%] h-[2px] bg-white/[0.35]"
            />
            {WORKFLOW_STEPS.map((step) => (
              <li
                key={step}
                className="relative flex w-[20%] flex-col items-center px-[8px] text-center text-[15px] leading-[1.2] font-[750]"
              >
                <span
                  aria-hidden
                  className="absolute top-[-28px] h-[18px] w-[18px] rounded-full border-4 border-[#5b2dce] bg-[#e4fa65]"
                />
                {step}
              </li>
            ))}
          </ol>

          {/* Narrow: the same rail rotated to a vertical list. */}
          <ol className="relative hidden w-full flex-col max-[600px]:flex">
            <span
              aria-hidden
              className="absolute top-[22px] bottom-[22px] left-[10px] w-[2px] bg-white/[0.35]"
            />
            {WORKFLOW_STEPS.map((step) => (
              <li
                key={step}
                className="relative py-[11px] pl-[34px] text-left text-[15px] leading-[1.2] font-[750]"
              >
                <span
                  aria-hidden
                  className="absolute top-1/2 left-[2px] h-[18px] w-[18px] -translate-y-1/2 rounded-full border-4 border-[#5b2dce] bg-[#e4fa65]"
                />
                {step}
              </li>
            ))}
          </ol>
        </RevealGroup>
      </div>
    </SectionCard>
  );
}
