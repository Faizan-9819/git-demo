import Image from "next/image";
import Reveal from "../components/Reveal";
import SectionCard from "./SectionCard";
import { MANAGED_POINTS } from "./data";

export default function ManagedFold() {
  return (
    <SectionCard className="bg-white text-[#0a0516] py-[clamp(36px,4vw,46px)]">
      <div className="flex items-stretch gap-[clamp(34px,5vw,72px)] max-[900px]:flex-col">
        <Reveal className="w-[56%] max-w-[650px] max-[900px]:w-full max-[900px]:max-w-none">
          <h2 className="font-bricolage text-[clamp(39px,4.3vw,68px)] leading-[0.99] font-bold tracking-[-0.055em] max-[600px]:text-[38px]">
            We take care of the{" "}
            <span className="text-[#5b2dce]">technical side.</span>
          </h2>
          <p className="mt-[20px] text-[18px] leading-[1.65] text-[#625a70]">
            You focus on your business. We handle hosting, maintenance and
            technical upkeep, with support when you need help or a change.
          </p>

          <div className="mt-[18px] flex w-full flex-col">
            {MANAGED_POINTS.map((point, index) => (
              <article
                key={point.number}
                className={`flex items-center gap-[15px] py-[10px] ${
                  index === 0 ? "" : "border-t border-[#ded8e7]"
                }`}
              >
                <b className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#e4fa65] text-[13px] text-[#0a0516]">
                  {point.number}
                </b>
                <div className="w-full">
                  <h3 className="font-bricolage text-[18px] leading-[1.3] font-bold tracking-[-0.035em]">
                    {point.title}
                  </h3>
                  <p className="text-[14px] leading-[1.55] text-[#625a70]">
                    {point.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={0.08}
          className="w-[44%] min-w-0 self-stretch max-[900px]:h-[330px] max-[900px]:w-full max-[600px]:h-[280px]"
        >
          <figure className="relative h-full min-h-[320px] w-full overflow-hidden rounded-[13px] bg-[#eeeeee] max-[900px]:min-h-0">
            <Image
              src="/features/managed-owner.jpg"
              alt="A relaxed business owner using a phone"
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
              className="object-cover object-center"
            />
          </figure>
        </Reveal>
      </div>
    </SectionCard>
  );
}
