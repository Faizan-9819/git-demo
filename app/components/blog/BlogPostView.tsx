/**
 * A single blog post — repainted in the /home2 design language.
 *
 * The page used to be three bare `.fix` sections stacked on white with
 * hairlines between them. It is now the same bento macro-layout /home2,
 * /pricing and /blog use: `HomeShell` supplies the white page, the 14px
 * gutter, the 12px gap between folds and the top padding that clears the fixed
 * Navbar, and each fold is a 13px-radius card with the rail inside it.
 *
 * Three folds, alternating the way /home2's do:
 *
 *   1. the hero, on the violet wash (#f5f3ff) — light, because every post
 *      ships its own hero component and those are drawn for a light surface;
 *   2. the article itself on white, table of contents beside it;
 *   3. "more articles" on the deep fold (#0a0516) with lime accents — the same
 *      surface `BlogTeaser` gives the blog on the homepage, so the two read as
 *      one thing.
 *
 * The contact fold and the footer are not mounted here: `SiteFooter` already
 * appends `Footer2` (which brings `ContactCta` with it) on every route but the
 * legal pages, so this page closes the way /pricing does.
 *
 * `blog-theme` on `<main>` is what repoints the palette the per-post
 * components were written against — the old violet ramp, Poppins, the
 * two-stop brand gradient — at the home2 values. See globals.css; it is the
 * reason the ~140 files under components/blogs/ did not have to be rewritten
 * one by one.
 */

import { notFound } from "next/navigation";
import HomeShell from "../sections/home2/HomeShell";
import RelatedPostsCarousel from "./RelatedPostsCarousel";
import SummarizeWithAI from "./SummarizeWithAI";
import JsonLd from "../JsonLd";
import ArrowIcon from "../ui/ArrowIcon";
import Link from "next/link";
import BlogToc from "../../../components/blogs/shared/BlogToc";
import SectionRenderer from "../../../components/blogs/shared/SectionRenderer";
import {
  buildBlogPostingJsonLd,
  getRelatedBlogPosts,
  toBlogPost,
} from "../../lib/blog-posts";
import { getBlogEntryBySlug, urlSlugFor } from "../../lib/blog-content";
import { buildFaqJsonLdFromItems, buildPageSchema } from "../../lib/seo";

const COPY = {
  en: {
    moreArticles: "More articles",
    keepReading: "Keep reading with more",
    insights: "Growth Rocket insights.",
    viewAll: "View all posts",
    viewAllHref: "/blog",
  },
  nl: {
    moreArticles: "Meer artikelen",
    keepReading: "Blijf lezen met meer",
    insights: "Growth Rocket inzichten.",
    viewAll: "Alle artikelen bekijken",
    viewAllHref: "/nl/blog",
  },
};

export default async function BlogPostView({
  pairingSlug,
  locale,
}: {
  pairingSlug: string;
  locale: "en" | "nl";
}) {
  const entry = await getBlogEntryBySlug(pairingSlug, locale);
  if (!entry) notFound();

  const { blog } = entry;
  const post = toBlogPost(entry);
  const relatedPosts = await getRelatedBlogPosts(blog.slug, locale);
  const faqSchema = blog.faq ? buildFaqJsonLdFromItems(blog.faq) : null;
  const HeroComponent = blog.hero.component;
  const copy = COPY[locale];
  const pathPrefix = locale === "nl" ? "/nl/blog" : "/blog";

  return (
    <main className="blog-theme relative min-h-screen overflow-x-clip text-[#0a0516]">
      <JsonLd
        data={buildPageSchema(
          `${pathPrefix}/${urlSlugFor(entry)}`,
          blog.title,
          entry.seo.description,
        )}
      />
      <JsonLd
        data={buildBlogPostingJsonLd(
          post,
          "https://www.getgrowthrocket.com",
          locale,
        )}
      />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}

      <HomeShell>
        {/* 1 — Hero fold. */}
        <section className="overflow-hidden rounded-[13px] bg-[#f5f3ff] py-[48px] md:py-[64px]">
          <div className="fix">
            <HeroComponent {...blog.hero.props} />
          </div>
        </section>

        {/* 2 — The article. `afterHero` is the post's own lead-in block (a
            summary card, a comparison table) and belongs to the body rather
            than the hero, so it opens this fold instead of closing the last
            one. */}
        <section className="rounded-[13px] bg-white py-[48px] md:py-[64px]">
          <div className="fix">
            {blog.afterHero && (
              <div className="mb-[40px] border-b border-[#ded8e7] pb-[40px] md:mb-[56px] md:pb-[56px]">
                {(() => {
                  const AfterHeroComponent = blog.afterHero.component;
                  return <AfterHeroComponent {...blog.afterHero.props} />;
                })()}
              </div>
            )}

            <div className="flex gap-14">
              <BlogToc entries={blog.toc ?? []} />
              <article className="min-w-0 flex-1">
                <SectionRenderer sections={blog.sections} />
              </article>
            </div>
          </div>
        </section>

        <section className="hidden">
          <div className="mx-auto max-w-4xl">
            <SummarizeWithAI />
          </div>
        </section>

        {/* 3 — More articles, on the deep fold. Mirrors `BlogTeaser` on /home2:
            same surface, same lime "read more" affordance on the cards. */}
        <section className="overflow-hidden rounded-[13px] bg-[#0a0516] py-[56px] text-white md:py-[80px]">
          <div className="fix">
            <div className="mb-[36px] flex flex-col gap-[22px] sm:flex-row sm:items-end sm:justify-between sm:gap-[30px]">
              <div>
                <p className="m-0 flex items-center gap-[10px] font-sans text-[11px] font-semibold tracking-[0.12em] text-[#e4fa65] uppercase">
                  <i className="h-[7px] w-[7px] rounded-full bg-[#e4fa65]" />
                  {copy.moreArticles}
                </p>
                <h2 className="m-0 mt-[16px] font-bricolage text-[clamp(30px,3.4vw,48px)] font-semibold leading-[1.1] tracking-[-0.04em] text-white">
                  {copy.keepReading}
                  <br />
                  <span className="text-[#e4fa65]">{copy.insights}</span>
                </h2>
              </div>

              <Link
                href={copy.viewAllHref}
                className="arrow-cta inline-flex min-h-[45px] w-max items-center gap-[8px] self-start rounded-full bg-[#5b2dce] px-[22px] py-[10px] font-sans text-[14px] font-semibold text-white hover:bg-[#e4fa65] hover:text-[#0a0516] sm:self-end"
              >
                {copy.viewAll}
                <ArrowIcon direction="up-right" />
              </Link>
            </div>

            <RelatedPostsCarousel posts={relatedPosts} />
          </div>
        </section>
      </HomeShell>
    </main>
  );
}
