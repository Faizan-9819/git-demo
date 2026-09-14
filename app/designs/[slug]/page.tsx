import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import JsonLd from "../../components/JsonLd";
import { buildPageSchema } from "../../lib/seo";
import {
  TEMPLATE_ABOUT_EXTRA,
  TEMPLATE_FAQS,
  TEMPLATE_FAQS_SUBHEADING,
  getTemplateBySlug,
  templates,
} from "../templates-data";
import TemplateFaqAccordion from "./TemplateFaqAccordion";
import TemplateLivePreview from "./TemplateLivePreview";
import AboutReadMore from "./AboutReadMore";
import TemplateHeroCTAs from "./TemplateHeroCTAs";
import TemplateCard, { ComingSoonCard } from "../TemplateCard";

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

  return {
    title: `${template.title} — Website Template | Growth Rocket`,
    description: template.tagline,
    alternates: {
      canonical: `https://www.getgrowthrocket.com/designs/${template.slug}`,
    },
  };
}

export default async function TemplateDetailPage({
  params,
}: TemplateDetailPageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

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

  // When this template is the only one in its category, fall back to
  // showing one design from each of a few other categories instead.
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
      <JsonLd
        data={buildPageSchema(
          `/designs/${template.slug}`,
          template.title,
          template.tagline,
        )}
      />

      {/* 1. Hero */}
      {/* <section className="relative overflow-hidden bg-[radial-gradient(at_center_center,_#922698_0%,_#5B219F_89%)] lg:pb-16 pb-10 lg:pt-24 pt-12"> */}
      <section
        className="relative overflow-hidden py-[80px] pt-[79px]"
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

      {/* 2 & 3. Try it out + live demo preview */}
      <section className="relative z-10 xl:w-[1250px] 2xl:w-[1280px] md:mx-auto lg:-mt-8 -mt-4 lg:pb-16 pb-10">
        <TemplateLivePreview href={template.href} title={template.title} />
      </section>

      {/* 4. About this Kit */}
      <section className="md:max-w-[1400px] md:mx-auto fix lg:pb-16 pb-10">
        <div className="mx-auto ">
          <h2 className="mb-4 font-poppins text-[28px] font-bold leading-[1.2] text-[var(--color-haiti)] sm:text-[32px]">
            About this Kit
          </h2>
          <p className="font-poppins text-[16px] leading-[1.8] text-[var(--color-dolphin)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="mt-4">
            <AboutReadMore paragraphs={TEMPLATE_ABOUT_EXTRA} />
          </div>
        </div>

        <div className="mx-auto mt-10  border-t border-[var(--color-slate-200)] pt-10">
          <h3 className="mb-8 font-poppins text-[22px] font-bold leading-[1.2] text-[var(--color-haiti)] sm:text-[26px]">
            Features Overview
          </h3>
          <div className="grid gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
            {template.features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-[10px] rounded-[14px] border border-[var(--color-slate-200)] bg-white p-[18px]"
              >
                <span className="flex size-[32px] shrink-0 items-center justify-center rounded-full bg-[var(--color-violet-98)] text-[var(--color-violet-42)]">
                  <Check size={15} strokeWidth={3} aria-hidden />
                </span>
                <h4 className="font-poppins text-[15px] font-bold text-[var(--color-haiti)]">
                  {feature.title}
                </h4>
                <p className="font-poppins text-[14px] leading-[1.5] text-[var(--color-dolphin)]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. More Designs / Other Designs */}
      <section className="md:max-w-[1400px] md:mx-auto fix lg:pb-16 pb-10">
        {hasMoreInCategory ? (
          <>
            <h2 className="mb-8 font-poppins text-[22px] font-bold leading-[1.2] text-[var(--color-haiti)] sm:text-[26px]">
              More {categoryLabel} Designs
            </h2>
            <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[24px]">
              {otherTemplates.map((t, i) => (
                <TemplateCard key={t.slug} template={t} index={i} />
              ))}
              {Array.from({ length: comingSoonCount }).map((_, i) => (
                <ComingSoonCard key={`coming-soon-${i}`} />
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="mb-8 font-poppins text-[22px] font-bold leading-[1.2] text-[var(--color-haiti)] sm:text-[26px]">
              Other Designs
            </h2>
            <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[24px]">
              {otherCategoryTemplates.map((t, i) => (
                <TemplateCard key={t.slug} template={t} index={i} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* 7. FAQ */}
      <section className=" fix lg:pb-16 pb-10">
        <div className="">
          <h2 className="font-poppins text-[28px] font-bold leading-[1.2] text-[var(--color-haiti)] sm:text-[32px]">
            Frequently asked <span className="text-grad-brand">questions</span>
          </h2>
          <p className="mb-8 mt-2 font-poppins text-sm font-semibold uppercase tracking-[2px] text-[var(--color-violet-42)]">
            {TEMPLATE_FAQS_SUBHEADING}
          </p>
          <TemplateFaqAccordion items={TEMPLATE_FAQS} />
        </div>
      </section>

      {/* 8. Post navigation */}
      <section className="md:max-w-[1400px] md:mx-auto fix pb-16">
        <div className="flex flex-col gap-4 border-t border-[var(--color-slate-200)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={`/designs/${prevTemplate.slug}`}
            className="group flex items-center gap-[10px] font-poppins text-[14px] font-medium text-[var(--color-dolphin)] hover:text-[var(--color-violet-42)]"
          >
            <ArrowLeft size={16} strokeWidth={2.25} aria-hidden />
            <span>
              Previous design
              <span className="block text-[15px] font-bold text-[var(--color-haiti)] group-hover:text-[var(--color-violet-42)]">
                {prevTemplate.title}
              </span>
            </span>
          </Link>
          <Link
            href={`/designs/${nextTemplate.slug}`}
            className="group flex items-center gap-[10px] text-right font-poppins text-[14px] font-medium text-[var(--color-dolphin)] hover:text-[var(--color-violet-42)] sm:flex-row-reverse"
          >
            <ArrowRight size={16} strokeWidth={2.25} aria-hidden />
            <span>
              Next design
              <span className="block text-[15px] font-bold text-[var(--color-haiti)] group-hover:text-[var(--color-violet-42)]">
                {nextTemplate.title}
              </span>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
