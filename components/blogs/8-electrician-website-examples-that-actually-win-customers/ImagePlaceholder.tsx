import Image from "next/image";

export default function ImagePlaceholder({
  src,
  caption,
  aspect = "16/8",
}: {
  src: string;
  caption: string;
  aspect?: string;
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F5F3FF]"
      style={{ aspectRatio: aspect }}
    >
      <div className="absolute inset-0 flex flex-col">
        {/* Browser header */}
        <div className="flex h-9 flex-none items-center gap-1.5 border-b border-[#E2E8F0] bg-white/70 px-4">
          <span className="size-2 rounded-full bg-[#E2E5EC]" />
          <span className="size-2 rounded-full bg-[#E2E5EC]" />
          <span className="size-2 rounded-full bg-[#E2E5EC]" />
        </div>

        {/* Image */}
        <div className="relative min-h-0 flex-1">
          <Image
            src={src}
            alt={caption}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 878px"
          />
        </div>
      </div>
    </div>
  );
}
