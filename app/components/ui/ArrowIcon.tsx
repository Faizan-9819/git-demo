import type { CSSProperties } from "react";

export type ArrowDirection =
  | "up-right"
  | "right"
  | "down-right"
  | "down"
  | "down-left"
  | "left"
  | "up-left"
  | "up";

const ROTATION: Record<ArrowDirection, number> = {
  "up-right": 0,
  right: 45,
  "down-right": 90,
  down: 135,
  "down-left": 180,
  left: 225,
  "up-left": 270,
  up: 315,
};

function ArrowSvg() {
  // viewBox padded so the path stays within the inscribed circle —
  // no clipping when the icon is rotated for non-default directions.
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="-3 -3 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M1 13L13 1M13 1H5M13 1V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function dArrowIcon({
  direction = "up-right",
  size,
  className,
}: {
  direction?: ArrowDirection;
  /** Overrides the size `.btn--sm/md/lg` would set — for arrows used outside a
   *  <Button>, where there is no size class to inherit from. */
  size?: number;
  className?: string;
}) {
  const rot = ROTATION[direction];
  return (
    <span
      className={className ? `btn-arrow ${className}` : "btn-arrow"}
      data-direction={direction}
      style={
        size ? ({ "--arrow-size": `${size}px` } as CSSProperties) : undefined
      }
    >
      <span className="btn-arrow__slot btn-arrow__slot--first">
        <span
          className="btn-arrow__rotation"
          style={{ transform: `rotate(${rot}deg)` }}
        >
          <ArrowSvg />
        </span>
      </span>
      <span className="btn-arrow__slot btn-arrow__slot--second">
        <span
          className="btn-arrow__rotation"
          style={{ transform: `rotate(${rot}deg)` }}
        >
          <ArrowSvg />
        </span>
      </span>
    </span>
  );
}
