"use client";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../../lib/blog-posts";
import { formatBlogDate } from "../../lib/blog-posts";
import BlogMeta from "./BlogMeta";
import ArrowIcon from "../ui/ArrowIcon";
import { useLanguage } from "../../i18n/LanguageProvider";
import { localizedHref } from "../../i18n/locale-href";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  const { locale } = useLanguage();
  return (
    <Link
      href={localizedHref(`/blog/${post.slug}`, locale)}
      className="group block overflow-hidden rounded-[28px] border border-[var(--color-violet-92)] transition-transform duration-300 hover:border-[var(--color-violet-76)]"
    >
      <div className="relative aspect-[1.28/1] overflow-hidden bg-[var(--color-haiti)]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-haiti)]/55 via-transparent to-transparent" />
      </div>

      <div className="p-5 lg:p-6">
        <BlogMeta
          publishedAt={formatBlogDate(post.publishedAt)}
          readTime={post.readTime}
        />

        <h3 className="mt-5 max-w-[24ch] font-poppins text-[1.1rem] font-semibold leading-[1.35] tracking-[-0.03em] text-[var(--color-haiti)] sm:text-[1.2rem] lg:text-[1.32rem] line-clamp-3">
          {post.title}
        </h3>

        <p className="mt-3 line-clamp-2 font-poppins text-[14px] leading-[1.55] text-[var(--color-dolphin)]">
          {post.excerpt}
        </p>

        <span className="card-cta mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--color-violet-42)]">
          Read More
          <ArrowIcon direction="up-right" />
        </span>
      </div>
    </Link>
  );
}
