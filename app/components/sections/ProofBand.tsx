// "use client";

// import CountUp from "../CountUp";
// import Reveal from "../Reveal";
// import { useLanguage } from "../../i18n/LanguageProvider";
// import type { Translation } from "../../i18n/config";

// type Stat = {
//   to: number;
//   prefix?: string;
//   suffix?: string;
//   label: Translation;
// };

// const STATS: Stat[] = [
//   {
//     to: 600,
//     suffix: "+",
//     label: {
//       en: "Successfully finished \nprojects",
//       nl: "Succesvol afgeronde \nprojecten",
//     },
//   },
//   {
//     to: 14,
//     suffix: "+",
//     label: {
//       en: "Parashift's years of \ngrowth",
//       nl: "Jaren groei van \nParashift",
//     },
//   },
//   {
//     to: 14,
//     suffix: "+",
//     label: {
//       en: "Industries we've \nserved",
//       nl: "Branches die we hebben \nbediend",
//     },
//   },
//   {
//     to: 60,
//     suffix: "%",
//     label: {
//       en: "Average conversion \nuplift",
//       nl: "Gemiddelde \nconversiestijging",
//     },
//   },
// ];

// function Testimonial() {
//   const { t } = useLanguage();
//   return (
//     <div className="flex flex-col first:pl-0 last:pr-0 px-10 gap-[16px] lg:border-r lg:border-black/10 lg:pr-[48px]">
//       <span className="font-sans text-[16px] leading-[24px] tracking-[2px] text-[var(--color-amber-500)]">
//         ★★★★★
//       </span>
//       <p className="font-bricolage font-bold text-[clamp(18px,2.5vw,22px)] leading-[1.3] tracking-[-0.3px] text-[#0e0b1a]">
//         &quot;
//         {t({
//           en: "Within a week I had a proper website and every enquiry comes in organised. No more missed messages.",
//           nl: "Binnen een week had ik een professionele website en elke aanvraag komt georganiseerd binnen. Geen gemiste berichten meer.",
//         })}
//         &quot;
//       </p>
//       <div className="flex items-center gap-[12px] pt-[8px]">
//         <span className="inline-flex items-center justify-center size-[40px] rounded-full bg-[var(--color-violet-42)] font-sans font-bold text-[12px] text-white">
//           JV
//         </span>
//         <div>
//           <p className="font-sans font-semibold text-[14px] text-[#0e0b1a]">
//             Jan van der Berg
//           </p>
//           <p className="font-sans text-[13px] text-[#6b7280]">
//             {t({ en: "Electrician, Amsterdam", nl: "Elektricien, Amsterdam" })}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function StatItem({ stat }: { stat: Stat }) {
//   const { t } = useLanguage();
//   return (
//     <div className="flex lg:w-[calc(25%-20px)] w-1/2 first:pl-0 last:pr-0 px-5 lg:px-10 lg:border-r lg:border-[#dddddd] last:border-r-0 py-10 flex-col items-center text-center lg:text-left gap-[4px]">
//       <CountUp
//         to={stat.to}
//         prefix={stat.prefix}
//         suffix={stat.suffix}
//         className="font-bricolage font-semibold text-[clamp(40px,5vw,40px)] leading-[1] tracking-[-1.5px] text-[var(--color-violet-42)]"
//       />
//       <span className="font-sans text-center text-[12px] sm:text-[13px] leading-[1.4] text-[#6b7280] font-medium">
//         {t(stat.label)}
//       </span>
//     </div>
//   );
// }

// export default function ProofBand() {
//   return (
//     <section>
//       <div className="md:max-w-[1400px] md:mx-auto fix">
//         <Reveal className="relative mx-auto box-border w-full max-w-[1080px] rounded-tl-[20px] rounded-tr-[20px] mt-10 border border-[#ebebeb] px-[24px] py-[36px] sm:px-[40px] sm:py-[42px] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
//           {/* <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[48px] items-center"> */}
//           <div className="grid grid-cols-1 items-center">
//             {/* <Testimonial /> */}
//             <div className="flex w-full flex-wrap justify-center">
//               {STATS.map((stat, idx) => (
//                 <StatItem key={idx} stat={stat} />
//               ))}
//             </div>
//           </div>
//         </Reveal>
//       </div>
//     </section>
//   );
// }
"use client";

import CountUp from "../CountUp";
import Reveal from "../Reveal";
import { useLanguage } from "../../i18n/LanguageProvider";
import type { Translation } from "../../i18n/config";

type Stat = {
  to: number;
  prefix?: string;
  suffix?: string;
  label: Translation;
};

const STATS: Stat[] = [
  {
    to: 600,
    suffix: "+",
    label: {
      en: "Successfully finished <br /> projects",
      nl: "Succesvol afgeronde <br /> projecten",
    },
  },
  {
    to: 14,
    suffix: "+",
    label: {
      en: "Parashift's years of <br /> growth",
      nl: "Jaren groei van <br /> Parashift",
    },
  },
  {
    to: 14,
    suffix: "+",
    label: {
      en: "Industries we've <br /> served",
      nl: "Branches die we hebben <br /> bediend",
    },
  },
  {
    to: 60,
    suffix: "%",
    label: {
      en: "Average conversion <br /> uplift",
      nl: "Gemiddelde <br /> conversiestijging",
    },
  },
];

function Testimonial() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col first:pl-0 last:pr-0 px-10 gap-[16px] lg:border-r lg:border-black/10 lg:pr-[48px]">
      <span className="font-sans text-[16px] leading-[24px] tracking-[2px] text-[var(--color-amber-500)]">
        ★★★★★
      </span>

      <p className="font-bricolage font-bold text-[clamp(18px,2.5vw,22px)] leading-[1.3] tracking-[-0.3px] text-[#0e0b1a]">
        &quot;
        {t({
          en: "Within a week I had a proper website and every enquiry comes in organised. No more missed messages.",
          nl: "Binnen een week had ik een professionele website en elke aanvraag komt georganiseerd binnen. Geen gemiste berichten meer.",
        })}
        &quot;
      </p>

      <div className="flex items-center gap-[12px] pt-[8px]">
        <span className="inline-flex items-center justify-center size-[40px] rounded-full bg-[var(--color-violet-42)] font-sans font-bold text-[12px] text-white">
          JV
        </span>

        <div>
          <p className="font-sans font-semibold text-[14px] text-[#0e0b1a]">
            Jan van der Berg
          </p>

          <p className="font-sans text-[13px] text-[#6b7280]">
            {t({
              en: "Electrician, Amsterdam",
              nl: "Elektricien, Amsterdam",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

function StatItem({ stat }: { stat: Stat }) {
  const { t } = useLanguage();

  return (
    <div className="flex lg:w-[calc(25%-20px)] w-1/2 lg:first:pl-0 lg:last:pr-0 px-2 lg:px-5 lg:border-r lg:border-[#dddddd] last:border-r-0 py-10 flex-col items-center text-center lg:text-left gap-[4px]">
      <CountUp
        to={stat.to}
        prefix={stat.prefix}
        suffix={stat.suffix}
        className="font-bricolage font-semibold text-[clamp(40px,5vw,40px)] leading-[1] tracking-[-1.5px] text-[var(--color-violet-42)]"
      />

      <span
        className="font-sans text-center text-[12px] sm:text-[13px] leading-[1.4] text-[#6b7280] font-medium"
        dangerouslySetInnerHTML={{
          __html: t(stat.label),
        }}
      />
    </div>
  );
}

export default function ProofBand() {
  return (
    <section>
      <div className="md:max-w-[1400px] md:mx-auto fix">
        <Reveal className="relative mx-auto box-border w-full max-w-[1080px] rounded-tl-[20px] rounded-tr-[20px] mt-10 border border-[#ebebeb] px-[16px] py-[36px] sm:px-[40px] sm:py-[42px] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 items-center">
            <div className="flex w-full flex-wrap justify-center">
              {STATS.map((stat, idx) => (
                <StatItem key={idx} stat={stat} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
