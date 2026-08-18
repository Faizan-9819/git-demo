import { getCategoryStyle } from "../../lib/blog-categories";

export default function CategoryBadge({ category }: { category: string }) {
  const { color, bg } = getCategoryStyle(category);
  return (
    <div
      className="rounded-[6px] px-[21px] py-[6px] text-[10.5px] font-bold tracking-[1.26px] uppercase inline-flex items-center gap-[11px] self-start"
      style={{ backgroundColor: bg, color }}
    >
      <div
        className="w-[5px] h-[5px] rounded-[2.5px] opacity-65"
        style={{ backgroundColor: color }}
      />
      {category}
    </div>
  );
}
