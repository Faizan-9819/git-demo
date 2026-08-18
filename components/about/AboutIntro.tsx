"use client";

import Reveal from "@/app/components/Reveal";
import { comparison } from "./data";

export default function AboutIntro() {
  return (
    <section className="relative bg-white py-[60px] lg:py-[100px]">
      <div className="md:max-w-[1400px] md:mx-auto fix grid gap-[36px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-[72px]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <span className="font-poppins text-[14px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              Why Growth Rocket exists
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-[16px] max-w-[560px] font-poppins text-[clamp(32px,4vw,44px)] font-bold leading-[1.12] tracking-[-1px] text-[var(--color-haiti)]">
              Small businesses are excellent at what they do. They just need{" "}
              <span className="text-grad-brand">
                better systems around them.
              </span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="flex flex-col gap-[16px]">
            <p className="font-poppins text-[16px] leading-[1.75] text-[var(--color-dolphin)]">
              Over the years, working closely with companies on websites,
              digital systems and online growth,{" "}
              <strong className="font-semibold text-[var(--color-haiti)]">
                we noticed something consistently.
              </strong>
            </p>
            <p className="font-poppins text-[16px] leading-[1.75] text-[var(--color-dolphin)]">
              Many small businesses were excellent at their craft, - but often
              lacked simple, reliable digital systems around them. The tools
              available were either too expensive, too technical, too fragmented
              or simply not designed around how small businesses actually
              operate.
            </p>
            <p className="font-poppins text-[16px] leading-[1.75] text-[var(--color-dolphin)]">
              Most owners don&apos;t want to spend their time managing websites,
              coordinating freelancers, learning complicated systems, or chasing
              technical updates. They want something{" "}
              <strong className="font-semibold text-[var(--color-haiti)]">
                reliable. Practical.
              </strong>
              Something that quietly works in the background while they focus on
              their actual work.
            </p>
            <p className="font-poppins text-[16px] leading-[1.75] text-[var(--color-dolphin)]">
              That is the direction Growth Rocket is being built around.
            </p>

            <div className="mt-[14px] grid gap-[14px] sm:grid-cols-2">
              {comparison.map((card, index) => (
                <article
                  key={card.title}
                  className={`rounded-[16px] border p-[20px] transition-transform duration-300 hover:-translate-y-[2px] ${
                    card.tone === "bright"
                      ? "border-[var(--color-violet-92)] bg-[var(--color-violet-98)]"
                      : "border-[var(--color-slate-200)] bg-white"
                  }`}
                >
                  <span className="font-poppins text-[11px] font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
                    {card.eyebrow}
                  </span>
                  <h3 className="mt-[10px] font-poppins text-[18px] font-semibold leading-[1.25] text-[var(--color-haiti)]">
                    {card.title}
                  </h3>
                  <ul className="mt-[14px] flex flex-col gap-[10px]">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-[8px] font-poppins text-[14px] leading-[1.5] text-[var(--color-dolphin)]"
                      >
                        <span
                          className={`mt-[5px] inline-flex size-[20px] shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                            index === 0
                              ? "bg-[var(--color-red-200)] text-[var(--color-red-600)]"
                              : "bg-[var(--color-violet-42)] text-white"
                          }`}
                        >
                          {index === 0 ? (
                            "✕"
                          ) : (
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
