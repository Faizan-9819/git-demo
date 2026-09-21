"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { lenisStop, lenisStart } from "../components/LenisProvider";

export type LightboxState = {
  youtubeId: string;
  title: string;
  /* Viewport rect of the card that opened it — the popup grows out of this. */
  origin: DOMRect;
};

type Props = {
  video: LightboxState | null;
  onClose: () => void;
};

/* Room reserved above the panel for the close button, which sits outside the
   video. Must match the CSS below. */
const CLOSE_GUTTER = 72;
const SIDE_GUTTER = 48;
/* Matches the panel's mt-[34px], which centres button + video as one block. */
const PANEL_OFFSET = 34;

/* iOS-style zoom: the panel starts at the card's on-screen position and grows
   into the centred 16/9 dialog.

   A SINGLE uniform scale is used, never separate scaleX/scaleY: the card is
   16/12 and the panel 16/9, so per-axis scales would squash the video mid-
   flight. Scaling uniformly from the card's centre keeps the shape intact and
   only the size changes.

   The panel is clamped by height as well as width, so the close button stays
   on screen from 1920 down to mobile. */
function originTransform(origin: DOMRect) {
  const maxH = window.innerHeight - CLOSE_GUTTER * 2;
  const maxW = Math.min(window.innerWidth - SIDE_GUTTER, 1100);
  const panelW = Math.min(maxW, maxH * (16 / 9));
  const panelH = panelW * (9 / 16);

  const panelCenterX = window.innerWidth / 2;
  const panelCenterY = (window.innerHeight - panelH) / 2 + PANEL_OFFSET + panelH / 2;
  const originCenterX = origin.left + origin.width / 2;
  const originCenterY = origin.top + origin.height / 2;

  return {
    scale: origin.width / panelW,
    x: originCenterX - panelCenterX,
    y: originCenterY - panelCenterY,
  };
}

export default function VideoLightbox({ video, onClose }: Props) {
  const reduced = useReducedMotion();

  /* Escape to close, and hold the page still while the dialog is up. Lenis
     drives the scroll, so it has to be stopped too — the same pattern the
     booking and lead forms use. */
  useEffect(() => {
    if (!video) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    lenisStop();
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      lenisStart();
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video ? (
        <motion.div
          // Vertical padding reserves room for the close button, which sits
          // above the panel rather than over the video.
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-[#0a0516]/80 px-[24px] py-[72px] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
        >
          {/* Width is capped by the viewport HEIGHT too — (100vh - 144px) is the
              space left once the close button's gutters are reserved, and
              x16/9 converts that back to a width. Keeps the button on screen at
              every size. */}
          {/* mt nudges the panel down by half the button's overhang (56px + a
              12px gap) so the button and video read as one centred block
              rather than the video alone being centred. */}
          <motion.div
            className="relative mt-[34px] w-[min(100%,1100px,calc((100vh-144px)*16/9))] cursor-default origin-center"
            initial={
              reduced
                ? { opacity: 0 }
                : { opacity: 0, ...originTransform(video.origin) }
            }
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={
              reduced
                ? { opacity: 0 }
                : { opacity: 0, ...originTransform(video.origin) }
            }
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close sits outside the panel, clear of the video. It counter-
                scales nothing — it simply fades in once the zoom has settled,
                so it never inherits the panel's growing transform visually. */}
            <motion.button
              type="button"
              onClick={onClose}
              aria-label="Close video"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.32 }}
              className="absolute -top-[56px] right-0 flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-white text-[20px] leading-none text-[#0a0516] transition-transform duration-200 ease-out hover:scale-[1.08]"
            >
              ✕
            </motion.button>

            <div className="relative aspect-video w-full overflow-hidden rounded-[13px] bg-black">
              <iframe
                // Default controls are kept so viewers can scrub and pause.
                // youtube-nocookie still trims the share / watch-later overlay,
                // rel=0 keeps end cards to this channel and iv_load_policy=3
                // drops annotations.
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
