import Link from "next/link";

/**
 * Breadcrumb — `nav.dc-crumb` from dentalcare.html, which sits between the
 * hero and the preview as a direct child of `.dc-main`, not inside either fold.
 *
 *   .dc-main>.dc-crumb   margin:0; padding:12px clamp(24px,5vw,80px) 20px
 *                        color:#696370; font-size:12px; background:white
 *                        display:flex; gap:14px; align-items:center
 *   @700px               padding:6px 22px 18px
 *   a:hover              color:var(--dc-purple) #5b2dce
 *   [aria-current=page]  color:var(--dc-black)  #0a0516
 *
 * It is a white bar with no radius of its own — the only fold on the page that
 * is neither `.dc-panel` nor `.dc-open`.
 *
 * As everywhere else on this page, the horizontal inset is the shared `.fix`
 * rail rather than the source's `clamp(24px,5vw,80px)`.
 */
export default function DesignCrumb({ title }: { title: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white pt-[6px] pb-[18px] min-[701px]:pt-[12px] min-[701px]:pb-[20px]"
    >
      <div className="fix flex items-center gap-[14px] font-sans text-[12px] text-[#696370]">
        <Link href="/designs" className="transition-colors hover:text-[#5b2dce]">
          All designs
        </Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="text-[#0a0516]">
          {title}
        </span>
      </div>
    </nav>
  );
}
