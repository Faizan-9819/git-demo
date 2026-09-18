import Reveal from "../components/Reveal";
import SectionCard from "./SectionCard";
import FeatureButton from "./FeatureButton";

export default function FeaturesCta() {
  return (
    <SectionCard
      id="closing-cta"
      className="bg-[#e4fa65] mb-[14px] text-[#0a0516]"
    >
      <div className="flex items-center justify-between gap-[40px] max-[900px]:flex-col max-[900px]:items-start">
        <Reveal className="w-[58%] max-[900px]:w-full">
          <h2 className="w-full max-w-[800px] font-bricolage text-[clamp(39px,4.3vw,68px)] leading-[0.99] font-bold tracking-[-0.055em] max-[600px]:text-[38px]">
            Bring your website and customer management{" "}
            <span className="text-[#5b2dce]">together.</span>
          </h2>
          <p className="mt-[18px] w-full max-w-[760px] text-[18px] leading-[1.65]">
            Give your customers a professional online presence while keeping the
            tools your business needs organised behind the scenes. One connected
            setup from{" "}
            <strong className="font-extrabold text-[#5b2dce]">
              €69 a month.
            </strong>
          </p>
        </Reveal>

        <Reveal
          delay={0.08}
          className="flex w-[330px] shrink-0 flex-col items-start gap-[13px] max-[900px]:w-full max-[900px]:max-w-[330px]"
        >
          {/* Price unit: "From" sits on its own row above the amount. */}
          <div className="flex w-full flex-col items-start">
            <span className="font-sans text-[10px] leading-none font-extrabold tracking-[0.12em] uppercase">
              From
            </span>
            <div className="mt-[4px] flex items-end gap-[7px]">
              <strong className="font-sans text-[clamp(54px,5vw,72px)] leading-[0.78] font-extrabold tracking-[-0.07em] text-[#5b2dce]">
                €69
              </strong>
              <small className="pb-[4px] font-sans text-[14px] leading-none font-bold whitespace-nowrap">
                / month
              </small>
            </div>
            <FeatureButton
              href="/pricing"
              arrow="up-right"
              className="mt-[14px] w-[90%] justify-between bg-[#fff] text-[#0a0516] hover:bg-white hover:text-[#0a0516]"
            >
              View full pricing
            </FeatureButton>
          </div>

          <FeatureButton
            href="mailto:sales@getgrowthrocket.com"
            arrow="right"
            className="w-[90%] justify-between bg-[#0a0516] text-[#e4fa65] hover:bg-[#5b2dce] hover:text-white"
          >
            Contact our sales team
          </FeatureButton>
        </Reveal>
      </div>
    </SectionCard>
  );
}
