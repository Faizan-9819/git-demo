"use client";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../../lib/blog-posts";
import { formatBlogDate } from "../../lib/blog-posts";
import ArrowIcon from "../ui/ArrowIcon";
import { useLanguage } from "../../i18n/LanguageProvider";
import { localizedHref } from "../../i18n/locale-href";

type BlogCardProps = {
  post: BlogPost;
};

/**
 * The card the "more articles" carousel runs on a post page.
 *
 * It sits on the deep fold there, so it is /home2's dark card verbatim — the
 * one `BlogTeaser` uses on the homepage: #151021 on a 12%-white hairline, 13px
 * radius throughout, and a hover that flips the whole card to lime (#e4fa65)
 * behind a matching glow. Fill, glow and both text colours ride the same 300ms
 * ease-out so the card changes as one piece.
 *
 * `arrow-cta-host` hands that hover down to the "Read more" arrow, which would
 * otherwise only answer a pointer landing on the link itself.
 */
export default function BlogCard({ post }: BlogCardProps) {
  const { locale } = useLanguage();
  return (
    <Link
      href={localizedHref(`/blog/${post.slug}`, locale)}
      className="arrow-cta-host group flex h-full flex-col gap-[16px] overflow-hidden rounded-[13px] border border-white/[0.12] bg-[#151021] px-[20px] pt-[20px] pb-[24px] transition-[background-color,box-shadow] duration-300 ease-out hover:bg-[#e4fa65] hover:shadow-[0_0_0_1px_rgba(228,250,101,0.34),0_0_18px_rgba(228,250,101,0.24),0_0_42px_rgba(228,250,101,0.18)]"
    >
      <div className="relative aspect-[1.28/1] overflow-hidden rounded-[13px] bg-[#0a0516]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-[10px] px-[6px]">
        <span className="flex items-center gap-[8px] font-sans text-[12px] font-medium text-[#c9c2d4] transition-colors duration-300 ease-out group-hover:text-[#4b5220]">
          <span>{formatBlogDate(post.publishedAt)}</span>
          <i className="h-[3px] w-[3px] rounded-full bg-current opacity-60" />
          <span>{post.readTime}</span>
        </span>

        <h3 className="m-0 line-clamp-3 font-bricolage text-[20px] font-semibold leading-[1.25] tracking-[-0.02em] text-white transition-colors duration-300 ease-out group-hover:text-[#151021]">
          {post.title}
        </h3>

        <p className="m-0 line-clamp-2 font-sans text-[14px] leading-[1.6] text-[#c9c2d4] transition-colors duration-300 ease-out group-hover:text-[#4b5220]">
          {post.excerpt}
        </p>

        <span className="arrow-cta mt-auto inline-flex items-center gap-[8px] self-start pt-[6px] font-sans text-[14px] font-semibold text-[#e4fa65] transition-colors duration-300 ease-out group-hover:text-[#5b2dce]">
          Read more
          <ArrowIcon direction="right" size={14} />
        </span>
      </div>
    </Link>
  );
}
