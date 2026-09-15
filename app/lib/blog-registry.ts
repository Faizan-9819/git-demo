import type { BlogContent, BlogSeo, BlogRelated } from "./blog-content-types";

export type BlogEntry = {
  blog: BlogContent;
  seo: BlogSeo;
  related: BlogRelated;
};

/**
 * One entry per blog folder under content/blogs/<slug>. Add a new blog by
 * duplicating a content folder, adding one import line here, and creating a
 * static app/blog/<slug>/page.tsx (+ app/nl/blog/<url-slug>/page.tsx) that
 * renders <BlogPostView pairingSlug="<slug>" locale="en|nl" /> — see
 * app/blog/electrician-7-day-launch/page.tsx for the minimal template.
 */
export const BLOG_MODULES: Array<() => Promise<BlogEntry>> = [
  async () => ({
    blog: (await import("@/content/blogs/staarkiller-pillar-article/blog"))
      .default,
    seo: (await import("@/content/blogs/staarkiller-pillar-article/seo"))
      .default,
    related: (
      await import("@/content/blogs/staarkiller-pillar-article/related")
    ).default,
  }),
  async () => ({
    blog: (await import("@/content/blogs/electrician-7-day-launch/blog"))
      .default,
    seo: (await import("@/content/blogs/electrician-7-day-launch/seo")).default,
    related: (await import("@/content/blogs/electrician-7-day-launch/related"))
      .default,
  }),
  async () => ({
    blog: (
      await import("@/content/blogs/electrician-website-cost-netherlands/blog")
    ).default,
    seo: (
      await import("@/content/blogs/electrician-website-cost-netherlands/seo")
    ).default,
    related: (
      await import("@/content/blogs/electrician-website-cost-netherlands/related")
    ).default,
  }),
  async () => ({
    blog: (await import("@/content/blogs/electrician-website-checklist/blog"))
      .default,
    seo: (await import("@/content/blogs/electrician-website-checklist/seo"))
      .default,
    related: (
      await import("@/content/blogs/electrician-website-checklist/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/blogs/electrician-website-build-timeline/blog")
    ).default,
    seo: (
      await import("@/content/blogs/electrician-website-build-timeline/seo")
    ).default,
    related: (
      await import("@/content/blogs/electrician-website-build-timeline/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/blogs/7-elements-of-a-high-converting-electrician-homepage/blog")
    ).default,
    seo: (
      await import("@/content/blogs/7-elements-of-a-high-converting-electrician-homepage/seo")
    ).default,
    related: (
      await import("@/content/blogs/7-elements-of-a-high-converting-electrician-homepage/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/blogs/6-mobile-website-for-electricians/blog")
    ).default,
    seo: (await import("@/content/blogs/6-mobile-website-for-electricians/seo"))
      .default,
    related: (
      await import("@/content/blogs/6-mobile-website-for-electricians/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/blogs/mobile-website-for-electricians-a-practical-guide-to-getting-it-right/blog")
    ).default,
    seo: (
      await import("@/content/blogs/mobile-website-for-electricians-a-practical-guide-to-getting-it-right/seo")
    ).default,
    related: (
      await import("@/content/blogs/mobile-website-for-electricians-a-practical-guide-to-getting-it-right/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/blogs/8-electrician-website-examples-that-actually-win-customers/blog")
    ).default,
    seo: (
      await import("@/content/blogs/8-electrician-website-examples-that-actually-win-customers/seo")
    ).default,
    related: (
      await import("@/content/blogs/8-electrician-website-examples-that-actually-win-customers/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/blogs/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison/blog")
    ).default,
    seo: (
      await import("@/content/blogs/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison/seo")
    ).default,
    related: (
      await import("@/content/blogs/wordpress-vs-waas-website-for-electrician-businesses-an-honest-comparison/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/blogs/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you/blog")
    ).default,
    seo: (
      await import("@/content/blogs/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you/seo")
    ).default,
    related: (
      await import("@/content/blogs/3-diy-vs-done-for-you-website-for-an-electrician-which-one-fits-you/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/blogs/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days/blog")
    ).default,
    seo: (
      await import("@/content/blogs/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days/seo")
    ).default,
    related: (
      await import("@/content/blogs/11-how-growth-rocket-gets-your-electrician-website-live-in-7-days/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/blogs/10-how-to-write-an-about-us-page-for-an-electrician/blog")
    ).default,
    seo: (
      await import("@/content/blogs/10-how-to-write-an-about-us-page-for-an-electrician/seo")
    ).default,
    related: (
      await import("@/content/blogs/10-how-to-write-an-about-us-page-for-an-electrician/related")
    ).default,
  }),
];

/**
 * Dutch overrides — only listed here once content/nl/blogs/<slug>/blog.ts
 * exists. Any English blog without an entry here (and without its own
 * app/nl/blog/<slug>/page.tsx) has no Dutch static route generated for it —
 * add both the NL content entry and the NL static page together.
 *
 * IMPORTANT: if the NL entry's URL slug differs from its EN slug (it usually
 * does — Dutch blog URLs are typically a distinct translated phrase), you
 * MUST also add a row to app/i18n/blog-locale-slugs.ts. That file is what the
 * navbar language toggle reads to build the correct /nl link; without a row
 * there, the toggle falls back to the English slug under /nl/blog/ and 404s.
 */
export const NL_BLOG_MODULES: Array<() => Promise<BlogEntry>> = [
  async () => ({
    blog: (
      await import("@/content/nl/blogs/kosten-website-voor-elektricien-in-nederland/blog")
    ).default,
    seo: (
      await import("@/content/nl/blogs/kosten-website-voor-elektricien-in-nederland/seo")
    ).default,
    related: (
      await import("@/content/nl/blogs/kosten-website-voor-elektricien-in-nederland/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/nl/blogs/website-checklist-elektriciens/blog")
    ).default,
    seo: (await import("@/content/nl/blogs/website-checklist-elektriciens/seo"))
      .default,
    related: (
      await import("@/content/nl/blogs/website-checklist-elektriciens/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/nl/blogs/hoe-lang-duurt-een-elektricien-website/blog")
    ).default,
    seo: (
      await import("@/content/nl/blogs/hoe-lang-duurt-een-elektricien-website/seo")
    ).default,
    related: (
      await import("@/content/nl/blogs/hoe-lang-duurt-een-elektricien-website/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/nl/blogs/de-7-elementen-van-een-elektricien-homepage-die-aanvragen-oplevert/blog")
    ).default,
    seo: (
      await import("@/content/nl/blogs/de-7-elementen-van-een-elektricien-homepage-die-aanvragen-oplevert/seo")
    ).default,
    related: (
      await import("@/content/nl/blogs/de-7-elementen-van-een-elektricien-homepage-die-aanvragen-oplevert/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/nl/blogs/mobiele-website-voor-elektriciens/blog")
    ).default,
    seo: (
      await import("@/content/nl/blogs/mobiele-website-voor-elektriciens/seo")
    ).default,
    related: (
      await import("@/content/nl/blogs/mobiele-website-voor-elektriciens/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/nl/blogs/mobielvriendelijke-elektricien-website-de-praktische-gids-om-het-goed-te-doen/blog")
    ).default,
    seo: (
      await import("@/content/nl/blogs/mobielvriendelijke-elektricien-website-de-praktische-gids-om-het-goed-te-doen/seo")
    ).default,
    related: (
      await import("@/content/nl/blogs/mobielvriendelijke-elektricien-website-de-praktische-gids-om-het-goed-te-doen/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/nl/blogs/8-voorbeelden-van-elektricienwebsites-die-klanten-opleveren/blog")
    ).default,
    seo: (
      await import("@/content/nl/blogs/8-voorbeelden-van-elektricienwebsites-die-klanten-opleveren/seo")
    ).default,
    related: (
      await import("@/content/nl/blogs/8-voorbeelden-van-elektricienwebsites-die-klanten-opleveren/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/nl/blogs/wordpress-of-een-website-abonnement-de-eerlijke-vergelijking-voor-elektriciens/blog")
    ).default,
    seo: (
      await import("@/content/nl/blogs/wordpress-of-een-website-abonnement-de-eerlijke-vergelijking-voor-elektriciens/seo")
    ).default,
    related: (
      await import("@/content/nl/blogs/wordpress-of-een-website-abonnement-de-eerlijke-vergelijking-voor-elektriciens/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/nl/blogs/3-website-zelf-maken-of-laten-maken-de-eerlijke-vergelijking-voor-elektriciens/blog")
    ).default,
    seo: (
      await import("@/content/nl/blogs/3-website-zelf-maken-of-laten-maken-de-eerlijke-vergelijking-voor-elektriciens/seo")
    ).default,
    related: (
      await import("@/content/nl/blogs/3-website-zelf-maken-of-laten-maken-de-eerlijke-vergelijking-voor-elektriciens/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/nl/blogs/10-zo-schrijf-je-een-over-ons-pagina-voor-een-elektricien/blog")
    ).default,
    seo: (
      await import("@/content/nl/blogs/10-zo-schrijf-je-een-over-ons-pagina-voor-een-elektricien/seo")
    ).default,
    related: (
      await import("@/content/nl/blogs/10-zo-schrijf-je-een-over-ons-pagina-voor-een-elektricien/related")
    ).default,
  }),
  async () => ({
    blog: (
      await import("@/content/nl/blogs/11-elektricienwebsite-laten-maken/blog")
    ).default,
    seo: (
      await import("@/content/nl/blogs/11-elektricienwebsite-laten-maken/seo")
    ).default,
    related: (
      await import("@/content/nl/blogs/11-elektricienwebsite-laten-maken/related")
    ).default,
  }),
];
