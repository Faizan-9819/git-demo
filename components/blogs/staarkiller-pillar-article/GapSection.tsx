export default function GapSection() {
  return (
    <section id="gap" className="scroll-mt-24 pt-14">
      <h2 className="text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        The gap your degree never mentioned
      </h2>

      <div className="mt-7 ">
        <p className="font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          Here's what nobody tells you about that moment.
        </p>
        <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          Everything you learned prepared you to <em>understand</em> a business.
          Almost none of it prepared you to <em>launch</em> one.
        </p>
        <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          Your degree taught you how to analyse a market. It didn't teach you
          how a real customer — a person with a problem and a budget — actually
          finds you on a Tuesday afternoon.
        </p>
        <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          It taught you how to build a value proposition. It didn't teach you
          how to make a stranger trust you enough to send that first enquiry.
        </p>
        <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          It taught you customer journey mapping. It didn't teach you what
          happens when a real enquiry arrives while you're at your side job —
          and by the time you see it, the customer has already found someone
          else.
        </p>
        <p className="mt-5 font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
          This is the gap. Not a knowledge gap — you have plenty of knowledge.
          An{" "}
          <strong className="font-semibold text-[var(--color-haiti)]">
            implementation gap
          </strong>
          : the distance between everything you've learned and a business that
          actually exists in the world.
        </p>
      </div>

      <figure className="mt-8 w-full max-w-[560px]">
        <svg
          viewBox="0 0 560 214"
          width="100%"
          fill="none"
          stroke="#1F2937"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M18,122 C70,116 150,118 200,116 L228,121 L228,160"></path>
          <path d="M542,122 C490,116 410,118 360,116 L332,121 L332,160"></path>
          <path d="M228,121 Q280,92 332,121" strokeDasharray="3.5 6.5"></path>
          <text
            x="124"
            y="200"
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            letterSpacing="1.6"
            fill="#6B7280"
          >
            BEGRIJPEN
          </text>
          <text
            x="436"
            y="200"
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            letterSpacing="1.6"
            fill="#6B7280"
          >
            LANCEREN
          </text>
          <text
            x="280"
            y="200"
            textAnchor="middle"
            fontSize="12.5"
            fontStyle="italic"
            fontWeight="500"
            fill="#6F4CF5"
          >
            de implementatiekloof
          </text>
        </svg>
      </figure>

      <p className="mt-8 max-w-[720px] font-poppins text-[16.5px] leading-[26px] text-[var(--color-dolphin)]">
        The good news? The gap can be crossed — and far more quickly than most
        graduates think.
      </p>
    </section>
  );
}
