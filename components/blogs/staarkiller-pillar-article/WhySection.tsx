function InvisibleIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      stroke="#1F2937"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="flex-none"
    >
      <path d="M7,20 C12,13 28,13 33,20 C28,27 12,27 7,20 Z"></path>
      <circle cx="20" cy="20" r="3.2"></circle>
      <line x1="9" y1="31" x2="31" y2="9"></line>
    </svg>
  );
}

function HobbyIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      stroke="#1F2937"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="flex-none"
    >
      <path d="M30,10 H10 V30 H17"></path>
      <path d="M23,30 H30 V19" strokeDasharray="3 3.5"></path>
    </svg>
  );
}

function DrownedIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      stroke="#1F2937"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="flex-none"
    >
      <path d="M9,23 C9,14 21,13 20,21 C19,29 31,30 31,21 C31,13 19,12 17,20 C15,27 25,28 26,21"></path>
    </svg>
  );
}

function MissedIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      stroke="#1F2937"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="flex-none"
    >
      <g transform="rotate(-8 22 20)">
        <rect x="15" y="14" width="19" height="13" rx="1"></rect>
        <path d="M15,15 L24.5,22 L34,15"></path>
      </g>
      <line x1="4" y1="16" x2="10" y2="16"></line>
      <line x1="3" y1="21" x2="10" y2="21"></line>
      <line x1="4" y1="26" x2="10" y2="26"></line>
    </svg>
  );
}

export default function WhySection() {
  const reasons = [
    {
      icon: InvisibleIcon,
      text: "<strong>They stayed invisible too long.</strong> Weeks perfecting the plan, the name, the logo — while nobody could find or contact them. A business that can't be discovered doesn't exist yet, no matter how good the thinking behind it is.",
    },
    {
      icon: HobbyIcon,
      text: '<strong>They looked like a hobby.</strong> A half-finished page, an Instagram bio, a phone number in a story highlight. Potential customers run a quick credibility check before reaching out — and if the first impression whispers "side project," the enquiry never gets sent.',
    },
    {
      icon: DrownedIcon,
      text: "<strong>They drowned in setup.</strong> The silent killer. Energy that should have gone into finding customers went into comparing website builders, connecting booking tools, troubleshooting plugins — six to nine separate subscriptions before earning a single euro. Momentum is a founder's most precious resource, and setup complexity eats it for breakfast.",
    },
    {
      icon: MissedIcon,
      text: "<strong>They missed their first chances.</strong> The precious early enquiries arrived scattered across email, DMs and voicemail while the founder was busy elsewhere. Early customers don't send reminders. They just move on.",
    },
  ];

  return (
    <section id="why" className="scroll-mt-24 pt-14">
      <h2 className="text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Why many first businesses never get off the ground
      </h2>

      <p className="mt-7  font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
        It's rarely the idea.
      </p>
      <p className="mt-5  font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
        The numbers make the stakes clear.
      </p>

      <div className="mt-8  rounded-xl border border-[var(--color-violet-92)] bg-[var(--color-violet-98)] px-6 py-8">
        <div className="font-poppins text-[52px] font-bold leading-none tracking-[-1px] text-[var(--color-violet-42)] sm:text-[64px]">
          1 in 3
        </div>
        <p className="mt-4 font-poppins text-[17px] leading-[1.6] text-[var(--color-dolphin)]">
          More than one in three new businesses founded in the Netherlands in
          2015 didn't make it to their fifth year.
        </p>
        <p className="mt-3 font-poppins text-[13px] text-[var(--color-dolphin)]">
          Source:{" "}
          <a
            href="https://www.cbs.nl/item?sc_itemid=becb5b56-96bc-4130-b1a9-1724443eff09&sc_lang=nl-nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-violet-42)] underline hover:text-[var(--color-violet-58)]"
          >
            CBS
          </a>
        </p>
      </div>

      <p className="mt-7  font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
        And when you look at why, the same patterns repeat — almost none of them
        about the quality of the concept:
      </p>

      <div className="mt-8 flex  flex-col gap-6">
        {reasons.map((reason, idx) => (
          <div key={idx} className="flex items-start gap-5">
            <reason.icon />
            <p
              className="flex-1 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]"
              dangerouslySetInnerHTML={{ __html: reason.text }}
            />
          </div>
        ))}
      </div>

      <p className="mt-7  font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
        Notice what all four patterns share:
      </p>

      <div className="mt-6  rounded-xl border-l-[3px] border-[var(--color-violet-42)] bg-[var(--color-violet-98)] px-6 py-5">
        <p className="font-poppins text-[17px] font-medium leading-7 text-[var(--color-haiti)]">
          Businesses don't fail because they started small. They fail because
          they never really started.
        </p>
      </div>

      <div className="mt-7 ">
        <p className="font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          There was always one more thing to fix before going live — and "before
          going live" quietly became the permanent address.
        </p>
        <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          Which leads to the one idea in this article we'd ask you to remember
          above everything else.
        </p>
      </div>
    </section>
  );
}
