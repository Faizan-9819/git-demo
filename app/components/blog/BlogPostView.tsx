// import { notFound } from "next/navigation";
// import RelatedPostsCarousel from "./RelatedPostsCarousel";
// import SummarizeWithAI from "./SummarizeWithAI";
// import JsonLd from "../JsonLd";
// import Button from "../ui/Button";
// import BlogToc from "../../../components/blogs/shared/BlogToc";
// import SectionRenderer from "../../../components/blogs/shared/SectionRenderer";
// import {
//   buildBlogPostingJsonLd,
//   getRelatedBlogPosts,
//   toBlogPost,
// } from "../../lib/blog-posts";
// import { getBlogEntryBySlug, urlSlugFor } from "../../lib/blog-content";
// import { buildFaqJsonLdFromItems, buildPageSchema } from "../../lib/seo";

// const COPY = {
//   en: {
//     moreArticles: "More articles",
//     keepReading: "Keep reading with more",
//     insights: "Growth Rocket insights.",
//     viewAll: "View all posts",
//     viewAllHref: "/blog",
//   },
//   nl: {
//     moreArticles: "Meer artikelen",
//     keepReading: "Blijf lezen met meer",
//     insights: "Growth Rocket inzichten.",
//     viewAll: "Alle artikelen bekijken",
//     viewAllHref: "/nl/blog",
//   },
// };

// export default async function BlogPostView({
//   pairingSlug,
//   locale,
// }: {
//   pairingSlug: string;
//   locale: "en" | "nl";
// }) {
//   const entry = await getBlogEntryBySlug(pairingSlug, locale);
//   if (!entry) notFound();

//   const { blog } = entry;
//   const post = toBlogPost(entry);
//   const relatedPosts = await getRelatedBlogPosts(blog.slug, locale);
//   const faqSchema = blog.faq ? buildFaqJsonLdFromItems(blog.faq) : null;
//   const HeroComponent = blog.hero.component;
//   const copy = COPY[locale];
//   const pathPrefix = locale === "nl" ? "/nl/blog" : "/blog";

//   return (
//     <main className="min-h-screen overflow-x-clip bg-white text-[var(--color-haiti)]">
//       <JsonLd
//         data={buildPageSchema(
//           `${pathPrefix}/${urlSlugFor(entry)}`,
//           blog.title,
//           entry.seo.description,
//         )}
//       />
//       <JsonLd
//         data={buildBlogPostingJsonLd(
//           post,
//           "https://www.getgrowthrocket.com",
//           locale,
//         )}
//       />
//       {faqSchema ? <JsonLd data={faqSchema} /> : null}

//       <section className="fix pt-12 lg:pt-20">
//         <HeroComponent {...blog.hero.props} />
//       </section>

//       {/* {blog.afterHero && (
//         <section className="fix mt-7 border-t border-[var(--color-violet-92)] pt-5.5 lg:mt-8">
//           {(() => {
//             const AfterHeroComponent = blog.afterHero.component;
//             return <AfterHeroComponent {...blog.afterHero.props} />;
//           })()}
//         </section>
//       )} */}
//       {blog.afterHero && (
//         <section
//           className={`fix lg:mt-8 ${pairingSlug === "staarkiller-pillar-article" ? "mt-[30px] pt-[30px] lg:mt-8" : "mt-7 pt-5.5"}`}
//         >
//           {(() => {
//             const AfterHeroComponent = blog.afterHero.component;
//             return <AfterHeroComponent {...blog.afterHero.props} />;
//           })()}
//         </section>
//       )}
//       <section
//         className={
//           "fix pb-16 " +
//           (blog.afterHero
//             ? "mt-7 pt-5.5 lg:mt-8"
//             : // : "mt-16 border-t border-[var(--color-violet-92)] pt-16 lg:mt-20 lg:pt-20")
//               "mt-16 pt-16 lg:mt-20 lg:pt-20")
//         }
//       >
//         <div className="flex gap-14">
//           <BlogToc entries={blog.toc ?? []} />
//           <article className="min-w-0 flex-1">
//             <SectionRenderer sections={blog.sections} />
//           </article>
//         </div>
//       </section>

//       <section className="pb-16 hidden">
//         <div className="mx-auto max-w-4xl">
//           <SummarizeWithAI />
//         </div>
//       </section>

//       <section className="fix pb-16">
//         <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
//           <div>
//             <p className="font-poppins text-sm font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
//               {copy.moreArticles}
//             </p>
//             <h2 className="mt-3 font-poppins text-[28px] font-bold leading-[1.2] text-[var(--color-haiti)] sm:text-[36px]">
//               {copy.keepReading}
//               <br />
//               <span className="text-grad-brand">{copy.insights}</span>
//             </h2>
//           </div>
//           <Button
//             href={copy.viewAllHref}
//             variant="primary"
//             arrow="up-right"
//             className="self-start sm:self-end"
//           >
//             {copy.viewAll}
//           </Button>
//         </div>

//         <RelatedPostsCarousel posts={relatedPosts} />
//       </section>
//     </main>
//   );
// }
import { notFound } from "next/navigation";
import RelatedPostsCarousel from "./RelatedPostsCarousel";
import SummarizeWithAI from "./SummarizeWithAI";
import JsonLd from "../JsonLd";
import Button from "../ui/Button";
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
    <main className="min-h-screen overflow-x-clip bg-white text-[var(--color-haiti)]">
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

      <section className="fix pt-12 lg:pt-40">
        <HeroComponent {...blog.hero.props} />
      </section>

      {/* {blog.afterHero && (
        <section className="fix mt-7 border-t border-[var(--color-violet-92)] pt-5.5 lg:mt-8">
          {(() => {
            const AfterHeroComponent = blog.afterHero.component;
            return <AfterHeroComponent {...blog.afterHero.props} />;
          })()}
        </section>
      )} */}
      {blog.afterHero && (
        <section
          className={`fix lg:mt-8 ${pairingSlug === "staarkiller-pillar-article" ? "mt-[30px] pt-[30px] lg:mt-8" : "mt-7 pt-5.5"}`}
        >
          {(() => {
            const AfterHeroComponent = blog.afterHero.component;
            return <AfterHeroComponent {...blog.afterHero.props} />;
          })()}
        </section>
      )}
      <section
        className={
          "fix pb-16 " +
          (blog.afterHero
            ? "mt-7 pt-5.5 lg:mt-8"
            : // : "mt-16 border-t border-[var(--color-violet-92)] pt-16 lg:mt-20 lg:pt-20")
              "lg:mt-16 mt-6 pt-6 lg:pt-16 lg:mt-20 lg:pt-20")
        }
      >
        <div className="flex gap-14">
          <BlogToc entries={blog.toc ?? []} />
          <article className="min-w-0 flex-1">
            <SectionRenderer sections={blog.sections} />
          </article>
        </div>
      </section>

      <section className="pb-16 hidden">
        <div className="mx-auto max-w-4xl">
          <SummarizeWithAI />
        </div>
      </section>

      <section className="fix pb-16">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-poppins text-sm font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
              {copy.moreArticles}
            </p>
            <h2 className="mt-3 font-poppins text-[28px] font-bold leading-[1.2] text-[var(--color-haiti)] sm:text-[36px]">
              {copy.keepReading}
              <br />
              <span className="text-grad-brand">{copy.insights}</span>
            </h2>
          </div>
          <Button
            href={copy.viewAllHref}
            variant="primary"
            arrow="up-right"
            className="self-start sm:self-end"
          >
            {copy.viewAll}
          </Button>
        </div>

        <RelatedPostsCarousel posts={relatedPosts} />
      </section>
    </main>
  );
}
