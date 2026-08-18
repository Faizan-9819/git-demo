"use client";

import RelatedPostsCarousel from "../blog/RelatedPostsCarousel";
import Reveal from "../Reveal";
import { useLanguage } from "../../i18n/LanguageProvider";
import type { BlogPost } from "../../lib/blog-posts";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

type Props = {
  posts: BlogPost[];
};

export default function EBlogSec({ posts }: Props) {
  const { t } = useLanguage();
  const router = useRouter();

  if (!posts.length) return null;

  return (
    <section className="relative bg-[#F5F3FF] py-[60px] lg:py-[100px]">
      <div className="md:max-w-[1400px] md:mx-auto fix">
        <div className="mb-[34px] flex flex-col gap-[16px] lg:mb-[48px]">
          <Reveal>
            <span className="font-poppins text-[13px] font-semibold uppercase leading-[19.5px] tracking-[2px] text-[var(--color-violet-42)]">
              {t({ en: "Latest from the blog", nl: "Laatste van de blog" })}
            </span>
          </Reveal>

          <Reveal
            delay={0.05}
            className="flex sm:justify-between sm:items-end flex-col sm:flex-row gap-[10px]"
          >
            <h2 className="font-poppins text-[clamp(32px,5vw,44px)] font-bold leading-[1.2] tracking-[-1px] text-[var(--color-haiti)]">
              {t({ en: "Ideas for growing", nl: "Ideeen om te groeien" })}
              <br />
              <span className="text-grad-brand">
                {t({
                  en: "your electrical business.",
                  nl: "met je elektrabedrijf.",
                })}
              </span>
            </h2>

            <Button onClick={() => router.push("/blog")} arrow="up-right">
              {t({
                en: "View all articles",
                nl: "Start nu — zo eenvoudig is het",
              })}
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <RelatedPostsCarousel posts={posts} />
        </Reveal>
      </div>
    </section>
  );
}
