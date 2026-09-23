import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import { buildFaqJsonLdFromItems, buildPageSchema } from "../../lib/seo";
import HomeShell from "../../components/sections/home2/HomeShell";
import DesignHero from "../../components/sections/design/DesignHero";
import DesignCrumb from "../../components/sections/design/DesignCrumb";
import DesignPreview from "../../components/sections/design/DesignPreview";
import DesignBenefits from "../../components/sections/design/DesignBenefits";
import DesignPersonal from "../../components/sections/design/DesignPersonal";
import DesignSystem from "../../components/sections/design/DesignSystem";
import DesignPackage from "../../components/sections/design/DesignPackage";
import DesignLaunch from "../../components/sections/design/DesignLaunch";
import DesignFaq from "../../components/sections/design/DesignFaq";
import DesignRelated from "../../components/sections/design/DesignRelated";
import DesignClose from "../../components/sections/design/DesignClose";
import { getDesignCopy } from "../../components/sections/design/copy";
import { getTemplateBySlug, templates } from "../templates-data";

/* ------------------------------------------------------------------ */
/*  PREVIOUS DESIGN DETAIL PAGE — kept for reference, replaced by the  */
/*  port of dentalcare.html below.                                     */
/*                                                                     */
/*  It was a gradient hero, a live-preview frame, an "About this Kit"  */
/*  fold of placeholder lorem ipsum, a related-designs grid, the       */
/*  lorem-ipsum TEMPLATE_FAQS accordion and prev/next navigation. The  */
/*  components it used still exist in this folder — AboutReadMore,     */
/*  TemplateHeroCTAs, TemplateLivePreview, TemplateFaqAccordion,       */
/*  RelatedTemplateCard — as do TEMPLATE_ABOUT_EXTRA / TEMPLATE_FAQS / */
/*  TEMPLATE_FAQS_SUBHEADING in ../templates-data.                     */
/* ------------------------------------------------------------------ */
/*
import Link from "next/link";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import {
  TEMPLATE_ABOUT_EXTRA,
  TEMPLATE_FAQS,
  TEMPLATE_FAQS_SUBHEADING,
} from "../templates-data";
import TemplateFaqAccordion from "./TemplateFaqAccordion";
import TemplateLivePreview from "./TemplateLivePreview";
import AboutReadMore from "./AboutReadMore";
import TemplateHeroCTAs from "./TemplateHeroCTAs";
import TemplateCard, { ComingSoonCard } from "./RelatedTemplateCard";

export default async function TemplateDetailPage({ params }) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) notFound();

  const index = templates.findIndex((t) => t.slug === template.slug);
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  const MORE_DESIGNS_COUNT = 3;
  const sameCategoryTemplates = templates.filter(
    (t) =>
      t.slug !== template.slug &&
      t.category.toLowerCase() === template.category.toLowerCase(),
  );
  const hasMoreInCategory = sameCategoryTemplates.length > 0;
  const otherTemplates = sameCategoryTemplates.slice(0, MORE_DESIGNS_COUNT);
  const comingSoonCount = MORE_DESIGNS_COUNT - otherTemplates.length;
  const categoryLabel = capitalize(template.category);

  const OTHER_DESIGNS_COUNT = 3;
  const otherCategoryTemplates: typeof templates = [];
  const seenCategories = new Set([template.category.toLowerCase()]);
  if (!hasMoreInCategory) {
    for (const t of templates) {
      if (otherCategoryTemplates.length >= OTHER_DESIGNS_COUNT) break;
      const cat = t.category.toLowerCase();
      if (seenCategories.has(cat)) continue;
      seenCategories.add(cat);
      otherCategoryTemplates.push(t);
    }
  }

  const prevTemplate =
    templates[(index - 1 + templates.length) % templates.length];
  const nextTemplate = templates[(index + 1) % templates.length];

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f8f9fa] text-[var(--color-haiti)]">
      // 1. Hero
      <section
        className="relative overflow-hidden pb-[80px] pt-[160px]"
        style={{
          background:
            "linear-gradient(174deg, var(--color-violet-42) 0%, var(--color-violet-23) 100%)",
        }}
      >
        <div className="md:max-w-[1400px] md:mx-auto fix">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <p className="mb-3 font-poppins text-sm font-semibold uppercase tracking-[2px] text-white/70">
                Introducing
              </p>
              <h1 className="font-poppins text-[32px] font-bold leading-[1.15] text-white sm:text-[44px]">
                {template.title}
              </h1>
            </div>
            <div className="text-right">
              <p className="font-poppins text-[16px] text-right leading-[1.6] text-white/85 sm:text-[18px]">
                {template.tagline}
              </p>
              <TemplateHeroCTAs href={template.href} price={template.price} />
            </div>
          </div>
        </div>
      </section>

      // 2 & 3. Try it out + live demo preview
      <section className="relative z-10 xl:w-[1250px] 2xl:w-[1280px] md:mx-auto lg:-mt-8 -mt-4 lg:pb-16 pb-10">
        <TemplateLivePreview href={template.href} title={template.title} />
      </section>

      // 4. About this Kit -- lorem ipsum
      // 6. More Designs / Other Designs
      // 7. FAQ -- lorem ipsum
      // 8. Post navigation
    </main>
  );
}
*/

type TemplateDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: TemplateDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    return {};
  }

  const { nouns } = getDesignCopy(template);

  return {
    title: `${template.title} | ${template.subtitle} Website Design & Business Tools | Growth Rocket`,
    description: `Explore ${template.title}: a professional ${template.subtitle.toLowerCase()} website design with appointments, enquiries, Growth Rocket Hub and ongoing technical support. Built for ${nouns.sector}.`,
    alternates: {
      canonical: `https://www.getgrowthrocket.com/designs/${template.slug}`,
    },
  };
}

/**
 * /designs/[slug] — the port of dentalcare.html.
 *
 * dentalcare.html is one design's page; this is the route all of them share, so
 * the folds below are written against the copy model in
 * `components/sections/design/copy.ts` rather than against dental words. The
 * `dentalcare` slug renders the reference file's exact strings; every other
 * template gets the same folds in its own vocabulary. See that file for how the
 * two fit together.
 *
 * Every fold carries dentalcare.css's own values — surfaces, type scale,
 * spacing and breakpoints — rather than this site's fold vocabulary. That
 * stylesheet is written in three passes (a base cut, a "second cut" and a final
 * conversion-focused pass) which repeatedly restate the same rules, so each
 * component's header lists the values that actually win.
 *
 * Fold for fold against the source:
 *
 *   .dc-hero                 DesignHero
 *   nav.dc-crumb             DesignCrumb     (its own white bar between the
 *                                             hero and the preview, as
 *                                             `.dc-main>.dc-crumb` paints it)
 *   .dc-preview              DesignPreview   (a live iframe, not the source's
 *                                             hand-drawn mock — see there)
 *   .dc-benefits  .dc-open   DesignBenefits
 *   .dc-personal  .dc-panel  DesignPersonal
 *   .dc-system    .dc-panel  DesignSystem
 *   .dc-package   .dc-panel  DesignPackage   (+ DesignBillingCard)
 *   .dc-launch    .dc-open   DesignLaunch
 *   .dc-faq       .dc-panel  DesignFaq       (native <details>, as the source)
 *   .dc-related   .dc-open   DesignRelated   (real sibling templates, not the
 *                                             source's two concept previews)
 *   .dc-close     .dc-panel  DesignClose
 *
 * `.dc-panel` folds are 13px-radius cards; `.dc-open` folds set no radius and
 * no background, so they sit straight on the page's white.
 *
 * `HomeShell` stands in for `.dc-main{margin:0 8px}` plus `.dc-panel{
 * margin-bottom:14px}` — a near-full-bleed column with a uniform gap, which is
 * the same macro-layout and also what /home2, /pricing and /about use. Every
 * fold then takes its horizontal spacing from the shared `.fix` rail instead of
 * the source's `clamp(24px,5vw,80px)` inset and its 1350px centring rail above
 * 1550px. That is the one deliberate departure from dentalcare.css, and it is
 * what keeps all eleven folds on one set of margins and lines this page up with
 * the rest of the site.
 *
 * The source's `.footer-loop-strip` and `footer.legacy-footer` are not ported:
 * they are `FooterLoopStrip` and `Footer2`, which the root layout already
 * mounts through `SiteFooter`, so they arrive under `DesignClose` along with
 * the shared contact CTA.
 */
export default async function TemplateDetailPage({
  params,
}: TemplateDetailPageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  const copy = getDesignCopy(template);
  const { business, audienceOne } = copy.nouns;

  /* Related designs: siblings in the same category first. A template that is
     alone in its category (SunHarbor, SwiftLine, PrimeAbode…) would otherwise
     show an empty fold, so it falls back to one design from each of the next
     few categories instead. The previous page padded the row with "coming
     soon" placeholders; showing three real designs is better than showing one
     real one and two that do not exist. */
  const RELATED_COUNT = 3;
  const sameCategory = templates.filter(
    (t) =>
      t.slug !== template.slug &&
      t.category.toLowerCase() === template.category.toLowerCase(),
  );

  let related = sameCategory.slice(0, RELATED_COUNT);
  let relatedHeading: [string, string] = [
    "Another look for",
    `your ${business}.`,
  ];
  let relatedIntro = `More ${template.subtitle.toLowerCase()} designs in the same package. Every one of them is built, connected and maintained the same way.`;

  if (related.length === 0) {
    const seen = new Set([template.category.toLowerCase()]);
    const fallback: typeof templates = [];
    for (const t of templates) {
      if (fallback.length >= RELATED_COUNT) break;
      const cat = t.category.toLowerCase();
      if (seen.has(cat)) continue;
      seen.add(cat);
      fallback.push(t);
    }
    related = fallback;
    relatedHeading = ["Designs for", "other trades."];
    relatedIntro =
      "This is the only design in its category for now. Here is what the same package looks like for other kinds of business.";
  }

  const faqSchema = buildFaqJsonLdFromItems(copy.faqs);

  return (
    <main className="relative min-h-screen">
      <JsonLd
        data={buildPageSchema(
          `/designs/${template.slug}`,
          template.title,
          template.tagline,
        )}
      />
      {faqSchema && <JsonLd data={faqSchema} />}

      <HomeShell>
        <DesignHero
          title={template.title}
          label={copy.heroLabel}
          subline={copy.heroSubline}
          business={business}
        />

        <DesignCrumb title={template.title} />

        <DesignPreview href={template.href} title={template.title} />

        <DesignBenefits
          heading={copy.benefitsHeading}
          intro={copy.benefitsIntro}
          benefits={copy.benefits}
        />

        <DesignPersonal
          title={template.title}
          business={business}
          img={template.img}
          items={copy.personalList}
        />

        <DesignSystem business={business} audienceOne={audienceOne} />

        <DesignPackage title={template.title} />

        <DesignLaunch business={business} />

        <DesignFaq title={template.title} faqs={copy.faqs} />

        <DesignRelated
          heading={relatedHeading}
          intro={relatedIntro}
          templates={related}
        />

        <DesignClose title={template.title} business={business} />
      </HomeShell>
    </main>
  );
}
