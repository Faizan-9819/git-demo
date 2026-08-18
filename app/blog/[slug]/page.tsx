import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogMeta from "../../components/blog/BlogMeta";
import RelatedPostsCarousel from "../../components/blog/RelatedPostsCarousel";
import SummarizeWithAI from "../../components/blog/SummarizeWithAI";
import TableOfContents from "../../components/blog/TableOfContents";
import ElementorButtonInterceptor from "../../components/blog/ElementorButtonInterceptor";
import JsonLd from "../../components/JsonLd";
import Button from "../../components/ui/Button";
import { buildBlogPostingJsonLd, formatBlogDate } from "../../lib/blog-posts";
import {
  getEnBlogPosts,
  getEnBlogPostBySlug,
  getEnRelatedBlogPosts,
} from "../../lib/blog-posts-en";
import {
  buildBlogFaqJsonLdFromHtml,
  buildBlogPostingMetadata,
  buildPageSchema,
} from "../../lib/seo";
import { localizedHref } from "../../i18n/locale-href";

import { extractHeadings } from "../../lib/extract-headings";

export const revalidate = 60;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getEnBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getEnBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return buildBlogPostingMetadata(post, "en");
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getEnBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getEnRelatedBlogPosts(post.slug);
  const { headings, contentWithIds } = extractHeadings(post.contentHtml);
  const faqSchema = buildBlogFaqJsonLdFromHtml(post.contentHtml);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f8f9fa] text-[var(--color-haiti)]">
      <ElementorButtonInterceptor />
      <JsonLd
        data={buildPageSchema(
          `/blog/${post.slug}`,
          post.title,
          post.description,
        )}
      />
      <JsonLd
        data={buildBlogPostingJsonLd(
          post,
          "https://www.getgrowthrocket.com",
          "en",
        )}
      />
      {faqSchema ? <JsonLd data={faqSchema} /> : null}
      <section className="relative overflow-hidden bg-[radial-gradient(at_center_center,_#922698_0%,_#5B219F_89%)] lg:pb-16 pb-10 lg:pt-24 pt-12">
        <div className="md:max-w-[1400px] md:mx-auto fix">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-poppins text-[28px] font-bold leading-[1.2] text-white sm:text-[40px]">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-white/90">
              <BlogMeta
                publishedAt={formatBlogDate(post.publishedAt)}
                readTime={post.readTime}
                author={post.authorName}
                variant="light"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="md:max-w-[1400px] md:mx-auto fix lg:-mt-8 -mt-4 lg:pb-16 pb-10">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
            <div className="relative aspect-[16/9]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="md:max-w-[1400px] md:mx-auto fix lg:pb-16 pb-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
          <TableOfContents headings={headings} />
          <article className="min-w-0">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />
          </article>
        </div>
      </section>

      {/* <section className="md:max-w-[1400px] md:mx-auto fix lg:pb-16 pb-10 lg:hidden">
          <div className="mx-auto max-w-4xl">
            <SummarizeWithAI />
          </div>
        </section> */}
      <section className="lg:pb-16 pb-10 lg:hidden">
        <div className="mx-auto max-w-4xl">
          <SummarizeWithAI />
        </div>
      </section>

      <section className="md:max-w-[1400px] md:mx-auto fix lg:pb-16 pb-10">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-poppins text-sm font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
              More articles
            </p>
            <h2 className="mt-3 font-poppins text-[28px] font-bold leading-[1.2] text-[var(--color-haiti)] sm:text-[36px]">
              Keep reading with more
              <br />
              <span className="text-grad-brand">Growth Rocket insights.</span>
            </h2>
          </div>
          <Button
            href={localizedHref("/blog", "en")}
            variant="primary"
            arrow="up-right"
            className="self-start sm:self-end"
          >
            View all posts
          </Button>
        </div>

        <RelatedPostsCarousel posts={relatedPosts} />
      </section>
    </main>
  );
}
