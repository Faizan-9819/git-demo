"use client";

import { useState } from "react";
import ArrowIcon from "../../ui/ArrowIcon";

/**
 * Live preview — `section.dc-preview.dc-panel` from dentalcare.html together
 * with the `[data-device]` handler, carrying dentalcare.css's own values.
 *
 *   .dc-preview              background:#eeeeef
 *                            padding:20px clamp(24px,5vw,80px) 28px
 *   @700px                   padding:16px 12px 24px
 *   .dc-preview-toolbar      flex; justify-content:space-between
 *                            align-items:center; gap:20px
 *                            padding-bottom:18px
 *   @700px                   flex-wrap:wrap; gap:14px
 *   .dc-device-controls      flex; gap:4px; background:#dedee1
 *                            padding:4px; border-radius:50px
 *   @700px                   width:100%; justify-content:center
 *   .dc-device-controls button   gap:7px; padding:9px 13px; border:0
 *                            border-radius:40px; background:transparent
 *                            color:#615b69; font-size:12px
 *   @700px                   flex:1; justify-content:center; padding:9px
 *   button[aria-pressed=true]    background:white; color:var(--dc-black)
 *                            box-shadow:0 2px 5px #0001
 *   .dc-device-controls svg  17x17; stroke-width:1.5
 *   .dc-preview-actions      flex; gap:23px; align-items:center
 *   @700px                   width:100%; justify-content:space-between
 *                            gap:12px
 *   .dc-preview-actions .dc-link   font-size:12px  (11px under 700px)
 *   .dc-preview-actions .dc-btn    min-height:42px; padding:10px 18px
 *                            font-size:12px; gap:22px
 *   @700px                   padding:10px 13px; font-size:11px; gap:10px
 *   .dc-preview-stage        min-height:515px; flex; justify-content:center
 *                            align-items:flex-start   (0 under 700px)
 *   .dc-browser              border-radius:13px; overflow:hidden
 *                            background:#f9f6ef
 *                            border:1px solid #d5d3d9
 *                            box-shadow:0 5px 16px #15102208
 *   [data-view=tablet]       width:768px
 *   [data-view=mobile]       width:390px
 *   .dc-preview-stage .dc-browser-bar  height:24px; padding:0 12px; gap:12px
 *                            font-size:9px; justify-content:flex-start
 *                            background:#3b3a40; color:#eeedf0
 *                            border-bottom:0
 *   .dc-dots                 font-size:7px; letter-spacing:2px; color:#aca9b2
 *   .dc-browser iframe       width:100%; height:650px; border:0
 *                            background:white   (580px under 700px)
 *   .dc-caption              font-size:12px; line-height:1.6; color:#6b6771
 *                            margin:20px 0 0; text-align:center (left <700px)
 *   .dc-btn                  see DesignClose — same button primitive
 *
 * One departure from the source markup: dentalcare.html fills `.dc-browser`
 * with a hand-drawn mock of the design (`#dc-preview-content`, a fake nav and
 * hero) because a standalone file has nothing to embed. dentalcare.css styles
 * `.dc-browser iframe` for exactly this case, this route knows each template's
 * deployed URL, and the mock's markup is dental-specific so it could not serve
 * the other fifteen designs. So the frame holds a live iframe.
 *
 * As everywhere else on this page, the horizontal inset is the shared `.fix`
 * rail rather than the source's `clamp(24px,5vw,80px)`.
 */

const DEVICES = [
  {
    id: "desktop",
    label: "Desktop",
    width: "100%",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8m-4-4v4" />
      </>
    ),
  },
  {
    id: "tablet",
    label: "Tablet",
    width: "768px",
    icon: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
  {
    id: "mobile",
    label: "Mobile",
    width: "390px",
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
] as const;

type DeviceId = (typeof DEVICES)[number]["id"];

export default function DesignPreview({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  const [device, setDevice] = useState<DeviceId>("desktop");
  const activeWidth = DEVICES.find((d) => d.id === device)?.width ?? "100%";

  return (
    <section
      id="preview"
      aria-label={`${title} preview`}
      className="rounded-[13px] bg-[#eeeeef] pt-[16px] pb-[24px] min-[701px]:pt-[20px] min-[701px]:pb-[28px]"
    >
      <div className="fix">
        {/* .dc-preview-toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-[14px] pb-[18px] min-[701px]:flex-nowrap min-[701px]:gap-[20px]">
          {/* .dc-device-controls */}
          <div
            role="group"
            aria-label="Website preview size"
            className="flex w-full justify-center gap-[4px] rounded-[50px] bg-[#dedee1] p-[4px] min-[701px]:w-auto min-[701px]:justify-start"
          >
            {DEVICES.map(({ id, label, icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setDevice(id)}
                aria-pressed={device === id}
                className={
                  "flex flex-1 cursor-pointer items-center justify-center gap-[7px] rounded-[40px] p-[9px] font-sans text-[12px] transition-colors min-[701px]:flex-none min-[701px]:justify-start min-[701px]:px-[13px] min-[701px]:py-[9px] " +
                  (device === id
                    ? "bg-white text-[#0a0516] shadow-[0_2px_5px_#0001]"
                    : "bg-transparent text-[#615b69]")
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="h-[17px] w-[17px]"
                >
                  {icon}
                </svg>
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* .dc-preview-actions */}
          <div className="flex w-full items-center justify-between gap-[12px] min-[701px]:w-auto min-[701px]:justify-start min-[701px]:gap-[23px]">
            <a
              href={href}
              target="_blank"
              rel="noopener"
              className="arrow-cta inline-flex items-center gap-[6px] font-sans text-[11px] font-medium text-[#0a0516] underline decoration-[#aaa6b1] underline-offset-[6px] hover:decoration-current min-[701px]:text-[12px]"
            >
              Preview in browser
              <ArrowIcon direction="up-right" size={13} />
            </a>

            {/* home2's CTA behaviour: `arrow-cta` for the hover scale and
                ArrowIcon's swap, plus the purple→lime colour change its
                primary buttons make. The source's `translateY(-2px)` lift and
                drop shadow go with it. */}
            <a
              href="#package"
              className="arrow-cta inline-flex min-h-[42px] items-center justify-between gap-2 rounded-[100px] bg-[#5b2dce] px-[13px] py-[10px] font-sans text-[11px] leading-[1.4] font-semibold text-white hover:bg-[#e4fa65] hover:text-[#0a0516] min-[701px]:gap-2 min-[701px]:px-[18px] min-[701px]:text-[12px]"
            >
              Start with this design
              <ArrowIcon direction="up-right" size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* .dc-preview-stage — sits outside the .fix rail so it takes the same
          width TemplateLivePreview gets on /designs/[slug] (full width, then
          1250px at xl and 1280px at 2xl). */}
      <div className="mx-auto w-full xl:w-[1250px] 2xl:w-[1280px]">
        <div className="flex items-start justify-center min-[701px]:min-h-[515px]">
          {/* Browser frame — same chrome as TemplateLivePreview on /designs */}
          <div
            className="mx-auto w-full overflow-hidden rounded-lg border border-[var(--color-slate-200)] bg-[#212122] p-[10px] shadow-sm transition-[max-width] duration-300 ease-in-out"
            style={{ maxWidth: activeWidth }}
          >
            <div className="flex shrink-0 items-center gap-[6px] rounded-t-lg bg-[#444444] px-[10px] py-[6px]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#ff5f57]" />
              <span className="h-[7px] w-[7px] rounded-full bg-[#febc2e]" />
              <span className="h-[7px] w-[7px] rounded-full bg-[#28c840]" />
            </div>

            <iframe
              src={href}
              title={`${title} live preview`}
              loading="lazy"
              className="block h-[84vh] w-full rounded-b-lg border-0 bg-white"
            />
          </div>
        </div>
      </div>

      <div className="fix">
        {/* .dc-caption */}
        <p className="mt-[20px] mb-0 text-left font-sans text-[12px] leading-[1.6] text-[#6b6771] min-[701px]:text-center">
          Live preview of the design. Open it in a browser to explore every
          section. Example branding and content are replaced with your own
          details.
        </p>
      </div>
    </section>
  );
}
