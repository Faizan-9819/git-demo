"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ArrowIcon from "../../ui/ArrowIcon";

/**
 * FAQ — ported from `section.faq-section` in grsolidvariant.html.
 *
 * The source markup is `<details>`/`<summary>`, which the browser toggles on
 * every click. This one has to stay open once opened and only close when
 * another question takes its place, and that is not something `<details>` can
 * express — so it is a controlled accordion of buttons instead, with
 * `aria-expanded`/`aria-controls` carrying the semantics `<details>` gave for
 * free. The click handler sets the index rather than toggling it, so clicking
 * the open question is a no-op; the first question starts open.
 *
 * The stylesheet is desktop-first with max-width overrides at 1050px and
 * 760px; those are inverted here into min-width steps, so the base values are
 * the smallest ones. The heading and the `.text-link` size come from later
 * blocks that win over the media queries, and `--fold-radius` is pinned to
 * 13px by the same global block every other fold uses.
 *
 * Horizontal spacing comes from the shared `.fix` container (the source's
 * `.wrap` is 1280px; this matches the rest of home2 at 1180px), which also
 * owns the two-column grid — the section itself only carries the surface and
 * its vertical rhythm (`--section-space`: 56px, 80px from 761px).
 */

type Faq = {
  q: string;
  a: ReactNode;
};

const FAQS: Faq[] = [
  {
    q: "Is this a website builder I have to use myself?",
    a: "No. We design and build your website for you, then keep it up to date. You focus on your business.",
  },
  {
    q: "What exactly is Growth Rocket Hub?",
    a: "It’s the place where you manage the work behind your website: enquiries, appointments, customer records, quotes and invoices. Your website and these everyday tools come together in one system.",
  },
  {
    q: "Is it only for new businesses?",
    a: "No. Growth Rocket is for new business owners and existing small businesses that want a professional online presence and a simpler way to manage customers and admin.",
  },
  {
    q: "Can I keep my existing website content and domain?",
    a: "Yes. We can review your current website and bring its content into your new one. You can use your existing domain. We’ll discuss the transfer steps with you before getting started.",
  },
  {
    q: "Can customers book appointments on my website?",
    a: "Yes. Customers can send an enquiry or book an appointment directly. Their details arrive in your Growth Rocket Hub.",
  },
  {
    q: "Can I manage customers, quotes and invoices?",
    a: "Yes. Keep your customer records, contacts and leads organised in one place. Create quotes and send invoices from those same customer details.",
  },
  {
    q: "What’s included in the monthly price?",
    a: "Growth Rocket starts from €69 per month and brings your website and business tools together. Hosting, SSL, maintenance, updates and technical support are included. Contact us to confirm the package and terms for your business.",
  },
  {
    q: "How quickly can my website go live?",
    a: "We’ll agree your launch timeline once we’ve reviewed your requirements and content. The process covers discovery, setup, your review and launch.",
  },
  {
    q: "What happens when I need support?",
    a: (
      <>
        Our team can help with questions about your website and Growth Rocket
        Hub. Email{" "}
        <a
          href="mailto:support@getgrowthrocket.com"
          className="underline [overflow-wrap:anywhere]"
        >
          support@getgrowthrocket.com
        </a>{" "}
        to get in touch.
      </>
    ),
  },
];

function FaqItem({
  faq,
  index,
  isOpen,
  onOpen,
}: {
  faq: Faq;
  index: number;
  isOpen: boolean;
  onOpen: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-[#ded8e7]">
      {/* The row's vertical padding lives on the button, not on the wrapper,
          so the whole band between two rules is a hit target — with it on the
          wrapper the 18px above and below the question swallowed the click.
          The bottom half shrinks to 12px while the panel is open so the gap to
          the answer keeps the spacing the source markup had. */}
      <button
        id={buttonId}
        type="button"
        onClick={onOpen}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className={`flex w-full cursor-pointer items-center justify-between gap-[20px] text-left font-sans text-[15px] font-medium text-[#0a0516] transition-[padding] duration-300 ${
          index === 0 ? "pt-0" : "pt-[18px]"
        } ${isOpen ? "pb-[12px]" : "pb-[18px]"}`}
      >
        {faq.q}
        <span
          aria-hidden
          className="text-[25px] font-normal leading-none text-[#5b2dce] transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>

      {/* `initial={false}` keeps the question that starts open from animating
          itself in on first paint. */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="m-0 max-w-[95%] pb-[18px] font-sans text-[14px] leading-[1.8] text-[#625a70] max-[370px]:text-[16px]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="rounded-[13px] bg-white py-[56px] text-[#0a0516] min-[761px]:py-[80px]"
    >
      {/* items-start is what lets the left column stick: a grid item stretches
          to the full row height by default, leaving sticky nothing to travel
          in. It only matters from 761px, where the two columns exist. */}
      <div className="fix grid grid-cols-1 items-start gap-[35px] min-[761px]:grid-cols-[0.85fr_1.15fr] min-[761px]:gap-[50px] min-[1051px]:gap-[90px]">
        {/* top-[120px] clears the fixed navbar (76px) with breathing room. */}
        <div className="self-start min-[761px]:sticky min-[761px]:top-[120px]">
          <p className="m-0 mb-[20px] flex items-center gap-[10px] font-sans text-[11px] font-semibold leading-[1.5] tracking-[0.07em]">
            07 / GOOD QUESTIONS
          </p>

          <h2
            id="faq-heading"
            className="m-0 font-bricolage text-[clamp(40px,4vw,58px)] font-semibold leading-[1.1] tracking-[-0.04em]"
          >
            A little clarity.
            <br />
            Before you start.
          </h2>

          <p className="mb-[12px] mt-[18px] font-sans text-[15px] text-[#625a70] min-[761px]:mt-[23px] min-[761px]:max-w-[300px] min-[761px]:text-[16px]">
            Still wondering how it fits your business? Let’s talk it through.
          </p>

          <a
            href="#contact"
            className="arrow-cta mt-[12px] inline-flex items-center gap-[16px] border-b border-current py-[10px] font-sans text-[14px] font-semibold text-[#5b2dce]"
          >
            Ask us anything <ArrowIcon direction="up-right" />
          </a>
        </div>

        <div>
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              index={i}
              isOpen={open === i}
              onOpen={() => setOpen(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
