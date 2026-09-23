"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import ArrowIcon from "../../ui/ArrowIcon";
import { RevealGroup, RevealItem } from "../../../features/FeatureReveal";
import { FEATURE_FOLDS, WEBSITE_FOLD } from "../../../features/data";

/**
 * "A great website. A connected system." — `section.dc-system.dc-panel` from
 * dentalcare.html, carrying dentalcare.css's own values (final pass).
 *
 *   .dc-system            background:var(--dc-purple) #5b2dce; color:white
 *   .dc-system h2 span    color:var(--dc-green) #e4fa65
 *   .dc-section-top>p     color:#e5ddf7
 *   .dc-workflow          grid-template-columns:1fr 25px 1fr 25px 1fr
 *                         gap:22px; padding:30px 0 34px
 *                         border-top/bottom:1px solid #ffffff40
 *   @700px                1fr; gap:20px; and
 *                         >div+span+div{border-top:1px solid #fff3;
 *                                       padding-top:20px}
 *   .dc-workflow div>span font-size:11px; color:#24103f; font-weight:700
 *   .dc-workflow h3       font-size:22px; margin:14px 0 10px
 *                         color:var(--dc-green)
 *   .dc-workflow p        font-size:14px; color:#e5ddf7
 *   .dc-flow-arrow        align-self:center; font-size:25px
 *                         color:var(--dc-green)   (hidden under 700px)
 *   .dc-walkthrough       padding-top:38px
 *   .dc-walkthrough-heading   margin-bottom:24px
 *     h3                  font-size:29px; margin-bottom:10px  (26px <700px)
 *     p                   font-size:14px; color:#e5ddf7
 *   .dc-player-grid       --player-height:419px
 *                         grid-template-columns:360px minmax(0,1fr)
 *                         gap:28px; align-items:start
 *   701–1100px            290px minmax(0,1fr)
 *   @700px                1fr; gap:18px
 *   .dc-video-tabs        display:grid; gap:7px; height:var(--player-height)
 *                         grid-template-rows:repeat(6,minmax(0,1fr))
 *   @700px                height:auto; rows:repeat(3,minmax(60px,auto))
 *                         columns:1fr 1fr
 *   .dc-video-tabs button gap:13px; border:1px solid transparent
 *                         background:#ffffff0c; border-radius:10px
 *                         padding:10px 13px; font-size:13px; font-weight:400
 *                         line-height:1.4; height:100%
 *     [aria-selected=true]    background:var(--dc-green); color:#0a0516
 *     :hover:not(selected)    background:#ffffff20
 *     img                 53x31; border-radius:4px; flex:0 0 53px
 *                         (40px 701–1100, hidden under 700px)
 *     >span:last-child    margin-left:auto  (hidden under 700px)
 *   #dc-video-panel       background:var(--dc-black); border-radius:13px
 *                         height:var(--player-height)
 *                         grid-template-rows:minmax(0,1fr) auto
 *   @700px                height:auto; display:block
 *   #dc-video-screen      height:100%; overflow:hidden  (16/9 under 700px)
 *   .dc-video-poster img  object-fit:contain
 *   .dc-video-poster .dc-play   56x56 centred; background:var(--dc-green)
 *                         border-radius:50%; color:var(--dc-black)
 *                         font-size:15px; box-shadow:0 5px 30px #0004
 *   .dc-video-meta        flex; justify-content:space-between; gap:18px
 *                         padding:17px 20px  (15px, align-start under 700px)
 *     h4                  font-size:16px; font-weight:500  (14px <700px)
 *     p                   font-size:12px; color:#c7c1d1    (11px <700px)
 *     a                   font-size:11px; color:var(--dc-green); nowrap
 *
 * The six walkthroughs are derived from `app/features/data.ts` rather than
 * re-listed: dentalcare.html hard-codes each `data-video` id in its markup and
 * every one of them is already in that file — the same playlist /features
 * plays — so there is no second list to keep in step, and the thumbnails come
 * from the same place.
 *
 * Playback follows the source's own facade: the panel shows a still until it
 * is clicked, and only then is the iframe mounted, `autoplay=1` so the click
 * that swapped it also starts it. Switching tabs resets to the still.
 *
 * As everywhere else on this page, the horizontal inset is the shared `.fix`
 * rail rather than `.dc-panel`'s `clamp(24px,5vw,80px)`.
 */

/* dentalcare.html's own tab labels, in playlist order. `data.ts` holds each
   video's title and caption, but those are written for /features' full-width
   folds ("Website features"); these are the source's shorter ones. */
const TAB_LABELS: Record<string, { tab: string; title: string; note: string }> =
  {
    website: {
      tab: "See what’s inside your website",
      title: "Website overview",
      note: "Your website, built around your business.",
    },
    appointments: {
      tab: "Book and manage appointments online",
      title: "Appointments",
      note: "Make booking easier and manage your schedule.",
    },
    enquiries: {
      tab: "Capture and manage enquiries",
      title: "Enquiries",
      note: "Organise new enquiries and keep track of replies.",
    },
    quotes: {
      tab: "Create quotes and invoices",
      title: "Quotes & invoices",
      note: "Prepare and manage customer documents in one place.",
    },
    contacts: {
      tab: "Keep a customer Contact Book",
      title: "Contact Book",
      note: "Keep customer information together and easy to find.",
    },
    support: {
      tab: "Get help and ongoing support",
      title: "Help & support",
      note: "Find guidance and raise support requests when needed.",
    },
  };

const VIDEOS = [WEBSITE_FOLD, ...FEATURE_FOLDS].map((fold) => ({
  id: fold.id,
  youtubeId: fold.youtubeId.en,
  thumb: fold.videoThumb,
  ...TAB_LABELS[fold.id],
}));

export default function DesignSystem({
  business,
  audienceOne,
}: {
  business: string;
  audienceOne: string;
}) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const video = VIDEOS[active];

  const steps = [
    {
      n: "01",
      title: `A ${audienceOne} gets in touch`,
      body: "Through your website’s enquiry or appointment options.",
    },
    {
      n: "02",
      title: "You manage it in the Hub",
      body: "Keep enquiries, appointments and contact details organised.",
    },
    {
      n: "03",
      title: "You keep things moving",
      body: "Follow up with the information you need in one place.",
    },
  ];

  return (
    <section
      aria-labelledby="design-system-heading"
      className="rounded-[13px] bg-[#5b2dce] py-[34px] text-white min-[701px]:py-[64px]"
    >
      <div className="fix">
        {/* .dc-section-top */}
        <RevealGroup className="mb-[28px] grid grid-cols-1 items-end gap-[28px] min-[701px]:mb-[38px] min-[701px]:grid-cols-[1.2fr_1fr] min-[701px]:gap-[35px] min-[1001px]:gap-[70px]">
          <RevealItem>
            <h2
              id="design-system-heading"
              className="m-0 font-bricolage text-[34px] leading-[1.08] font-semibold tracking-[-0.045em] text-white min-[701px]:text-[clamp(32px,3.8vw,52px)]"
            >
              A great website.
              <br />
              <span className="text-[#e4fa65]">A connected system.</span>
            </h2>
          </RevealItem>

          <RevealItem
            as="p"
            className="m-0 max-w-[450px] font-sans text-[16px] leading-[1.65] text-[#e5ddf7]"
          >
            A professional website for your {business}, a complete business
            system in Growth Rocket Hub, and ongoing technical maintenance and
            upkeep. All working together.
          </RevealItem>
        </RevealGroup>

        {/* .dc-workflow */}
        <RevealGroup
          amount={0.15}
          className="grid grid-cols-1 gap-[20px] border-y border-white/25 pt-[30px] pb-[34px] min-[701px]:grid-cols-[1fr_25px_1fr_25px_1fr] min-[701px]:gap-[22px]"
        >
          {/* The arrows are grid siblings of the RevealItems, not wrapped by
              them: a wrapper would need `display:contents` to stay out of the
              grid, and that stops the reveal's transform applying. */}
          {steps.map((step, i) => (
            <Fragment key={step.n}>
              <RevealItem
                className={
                  "min-w-0 " +
                  (i > 0
                    ? "border-t border-white/20 pt-[20px] min-[701px]:border-t-0 min-[701px]:pt-0"
                    : "")
                }
              >
                <span className="font-sans text-[11px] leading-none font-bold text-[#24103f]">
                  {step.n}
                </span>
                <h3 className="mt-[14px] mb-[10px] font-bricolage text-[22px] leading-[1.16] font-semibold text-[#e4fa65]">
                  {step.title}
                </h3>
                <p className="m-0 font-sans text-[14px] leading-[1.65] text-[#e5ddf7]">
                  {step.body}
                </p>
              </RevealItem>

              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden self-center text-[25px] leading-none text-[#e4fa65] min-[701px]:block"
                >
                  →
                </span>
              )}
            </Fragment>
          ))}
        </RevealGroup>

        {/* .dc-walkthrough */}
        <div className="pt-[38px]">
          <RevealGroup className="mb-[24px]">
            <RevealItem>
              <h3 className="mt-0 mb-[10px] font-bricolage text-[26px] leading-[1.16] font-semibold tracking-[-0.03em] min-[701px]:text-[29px]">
                Explore your website and Growth Rocket Hub.
              </h3>
            </RevealItem>
            <RevealItem
              as="p"
              className="m-0 font-sans text-[14px] leading-[1.65] text-[#e5ddf7]"
            >
              Six short walkthroughs. Choose what you’d like to see.
            </RevealItem>
          </RevealGroup>

          {/* .dc-player-grid */}
          <div className="grid grid-cols-1 items-start gap-[18px] min-[701px]:grid-cols-[290px_minmax(0,1fr)] min-[701px]:gap-[28px] min-[1101px]:grid-cols-[360px_minmax(0,1fr)]">
            {/* .dc-video-tabs */}
            <div
              role="tablist"
              aria-label="Feature videos"
              aria-orientation="vertical"
              className="grid grid-cols-2 grid-rows-[repeat(3,minmax(60px,auto))] gap-[7px] min-[701px]:h-[419px] min-[701px]:grid-cols-1 min-[701px]:grid-rows-[repeat(6,minmax(0,1fr))]"
            >
              {VIDEOS.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`design-video-tab-${item.id}`}
                  aria-controls="design-video-panel"
                  aria-selected={active === i}
                  tabIndex={active === i ? 0 : -1}
                  onClick={() => {
                    setActive(i);
                    setPlaying(false);
                  }}
                  className={
                    "arrow-swap flex h-full min-h-[60px] cursor-pointer items-center justify-center gap-[7px] rounded-[10px] border border-transparent p-[10px] text-left font-sans text-[12px] leading-[1.4] font-normal transition-colors min-[701px]:min-h-0 min-[701px]:justify-start min-[701px]:gap-[13px] min-[701px]:px-[13px] min-[1101px]:text-[13px] " +
                    (active === i
                      ? "bg-[#e4fa65] text-[#0a0516]"
                      : "bg-white/[0.05] text-white hover:bg-white/[0.13]")
                  }
                >
                  <span className="relative hidden h-[26px] w-[40px] flex-[0_0_40px] overflow-hidden rounded-[4px] min-[701px]:block min-[1101px]:h-[31px] min-[1101px]:w-[53px] min-[1101px]:flex-[0_0_53px]">
                    <Image
                      src={item.thumb}
                      alt=""
                      fill
                      sizes="53px"
                      className="object-cover"
                    />
                  </span>

                  <span className="min-w-0">{item.tab}</span>

                  <span
                    aria-hidden="true"
                    className="hidden shrink-0 min-[701px]:ml-auto min-[701px]:flex"
                  >
                    <ArrowIcon direction="up-right" size={12} />
                  </span>
                </button>
              ))}
            </div>

            {/* #dc-video-panel */}
            <div
              id="design-video-panel"
              role="tabpanel"
              aria-labelledby={`design-video-tab-${video.id}`}
              className="block min-w-0 overflow-hidden rounded-[13px] bg-[#0a0516] min-[701px]:grid min-[701px]:h-[419px] min-[701px]:grid-rows-[minmax(0,1fr)_auto]"
            >
              {/* #dc-video-screen */}
              <div className="relative aspect-video min-h-0 overflow-hidden min-[701px]:aspect-auto min-[701px]:h-full">
                {playing ? (
                  <iframe
                    key={video.youtubeId}
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="block h-full w-full border-0"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    aria-label={`Play ${video.title} video`}
                    className="relative block h-full w-full cursor-pointer border-0 bg-[#0a0516] p-0"
                  >
                    <Image
                      src={video.thumb}
                      alt=""
                      fill
                      sizes="(max-width: 700px) 100vw, 60vw"
                      className="object-contain"
                    />
                    <span className="absolute top-[calc(50%-28px)] left-[calc(50%-28px)] grid h-[56px] w-[56px] place-items-center rounded-full bg-[#e4fa65] text-[15px] text-[#0a0516] shadow-[0_5px_30px_#0004]">
                      ▶
                    </span>
                  </button>
                )}
              </div>

              {/* .dc-video-meta */}
              <div className="flex items-start justify-between gap-[18px] p-[15px] min-[701px]:items-center min-[701px]:px-[20px] min-[701px]:py-[17px]">
                <div className="min-w-0">
                  <h4 className="mt-0 mb-[5px] font-sans text-[14px] leading-[1.3] font-medium text-white min-[701px]:text-[16px]">
                    {video.title}
                  </h4>
                  <p className="m-0 font-sans text-[11px] leading-[1.5] text-[#c7c1d1] min-[701px]:text-[12px]">
                    {video.note}
                  </p>
                </div>

                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener"
                  aria-label={`Watch ${video.title} on YouTube`}
                  className="arrow-cta inline-flex shrink-0 items-center gap-[5px] font-sans text-[11px] whitespace-nowrap text-[#e4fa65] hover:underline"
                >
                  YouTube
                  <ArrowIcon direction="up-right" size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
