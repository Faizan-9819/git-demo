type Props = {
  title: string;
  caption: string;
  bgClass: string;
};

/* 16/9 tile with the source's two radial washes and a lime play control. */
export default function VideoPreview({ title, caption, bgClass }: Props) {
  return (
    <div
      className={`relative isolate flex aspect-video w-full flex-col justify-end overflow-hidden rounded-[13px] p-[24px] text-white max-[600px]:p-[22px] ${bgClass}`}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_15%,rgba(228,250,101,0.48),transparent_25%),radial-gradient(circle_at_15%_100%,rgba(10,5,22,0.75),transparent_46%)]" />
      <button
        type="button"
        aria-label={`Play ${title.toLowerCase()} video`}
        className="absolute top-[24px] right-[24px] flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#e4fa65] text-[21px] text-[#0a0516] transition-[transform,box-shadow] duration-200 ease-out hover:scale-[1.08] hover:shadow-[0_0_0_9px_rgba(228,250,101,0.18)] max-[600px]:top-[22px] max-[600px]:right-[22px] max-[600px]:h-[54px] max-[600px]:w-[54px]"
      >
        ▶
      </button>
      <span className="font-bricolage text-[clamp(24px,2.5vw,37px)] leading-none font-bold tracking-[-0.04em]">
        {title}
      </span>
      <small className="mt-[9px] text-[15px] opacity-[0.78]">{caption}</small>
    </div>
  );
}
