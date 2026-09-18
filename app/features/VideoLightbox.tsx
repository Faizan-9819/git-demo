"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

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

/* iOS-style zoom: the panel starts as the card's exact on-screen box, then
   settles into a centred 16/9 dialog. Scale and offset are derived from the
   card rect so the growth reads as the card itself expanding. */
function originTransform(origin: DOMRect) {
  const panelW = Math.min(window.innerWidth - 48, 1200);
  const panelH = panelW * (9 / 16);
  const panelLeft = (window.innerWidth - panelW) / 2;
  const panelTop = (window.innerHeight - panelH) / 2;

  return {
    scaleX: origin.width / panelW,
    scaleY: origin.height / panelH,
    x: origin.left - panelLeft,
    y: origin.top - panelTop,
  };
}

export default function VideoLightbox({ video, onClose }: Props) {
  const reduced = useReducedMotion();

  /* Escape to close, and hold the page still while the dialog is up. */
  useEffect(() => {
    if (!video) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0516]/80 px-[24px] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
        >
          <motion.div
            className="relative w-full max-w-[1200px] origin-top-left"
            initial={
              reduced
                ? { opacity: 0 }
                : { opacity: 0, ...originTransform(video.origin) }
            }
            animate={{ opacity: 1, scaleX: 1, scaleY: 1, x: 0, y: 0 }}
            exit={
              reduced
                ? { opacity: 0 }
                : { opacity: 0, ...originTransform(video.origin) }
            }
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-[13px] bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close video"
              className="absolute top-[40px] right-[40px] flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white text-[20px] leading-none text-[#0a0516] transition-transform duration-200 ease-out hover:scale-[1.08] max-[600px]:top-[20px] max-[600px]:right-[20px] max-[600px]:h-[38px] max-[600px]:w-[38px]"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
