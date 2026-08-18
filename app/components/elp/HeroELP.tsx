"use client";

import Image from "next/image";
import Button from "../ui/Button";

function Check({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-[6px]">
      <span className="font-jakarta font-bold text-[16px] leading-[18px] text-[var(--color-green-600)]">
        ✓
      </span>
      <span className="font-jakarta text-[14px] leading-[18px] text-[var(--color-dolphin)]">
        {text}
      </span>
    </li>
  );
}

export default function HeroELP({
  onStartClick,
  onBookClick,
}: {
  onStartClick?: () => void;
  onBookClick?: () => void;
}) {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #ffffff 0%, var(--color-violet-98) 100%)",
      }}
    >
      <div className="md:max-w-[1400px] md:mx-auto fix border-x-2 border-[rgba(148,163,184,.2)] relative pt-[60px] lg:pt-[76px]">
        <div className="grid items-center gap-[28px] lg:grid-cols-[1fr_1.08fr]">
          <div className="flex flex-col">
            <span className="btn-chip p-2 inline-flex w-fit items-center gap-2 bg-white border-2 border-gray-100 rounded-[40px]">
              <span className="chip-badge px-5 pt-1.5 pb-1 inline-flex items-center justify-center rounded-[10px]">
                ELECTRICIANS
              </span>
              Built for local service teams
            </span>

            <h1 className="mt-[18px] font-poppins text-[24px] font-bold leading-[1.02] tracking-[-0.8px] text-[var(--color-haiti)] sm:text-[clamp(32px,7vw,56px)] sm:leading-[1.08] sm:tracking-[-2px]">
              <span className="block">Not just a website.</span>
              <span className="block">
                A{" "}
                <span className="text-grad-brand">
                  complete electrician system
                </span>
              </span>
            </h1>

            <p className="mt-[18px] max-w-[620px] font-poppins text-[16px] leading-[1.4] tracking-[0.16px] text-[var(--color-dolphin)]">
              Get a high-converting electrician website, quote requests, and
              appointment booking in one managed setup.
            </p>

            <div className="mt-[18px] flex w-full max-w-[340px] flex-col gap-[12px] sm:max-w-none sm:flex-row sm:flex-wrap">
              <Button
                onClick={onStartClick}
                arrow="up-right"
                className="w-full sm:w-auto"
              >
                Request a quote
              </Button>
              <Button
                onClick={onBookClick}
                variant="secondary"
                arrow="right"
                className="w-full sm:w-auto"
              >
                Book an Appointment
              </Button>
            </div>

            <ul className="mt-[18px] flex flex-wrap items-center gap-x-[20px] gap-y-[10px]">
              <Check text="Live in 7 days" />
              <Check text="One fixed yearly price" />
              <Check text="No technical setup" />
            </ul>
          </div>

          <div className="relative pb-[10px] lg:pb-[30px]">
            <div
              className="relative overflow-hidden rounded-[24px] p-[14px] sm:p-[18px]"
              style={{ background: "var(--grad-hero-frame)" }}
            >
              <Image
                src="/elp/bigweb.png"
                alt="Electrician website preview"
                width={538}
                height={588}
                className="h-auto w-full rounded-[16px]"
                priority
              />
            </div>
            <div className="absolute -bottom-[18px] -left-[16px] w-[42%] min-w-[170px] rounded-[18px] bg-white p-[8px] shadow-[0_16px_36px_-16px_rgba(46,16,101,0.4)]">
              <Image
                src="/elp/smallweb.png"
                alt="Growth Rocket Hub preview"
                width={380}
                height={290}
                className="h-auto w-full rounded-[12px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
