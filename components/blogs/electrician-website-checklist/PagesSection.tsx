import BlogImageBlock from "@/components/blogs/shared/BlogImageBlock";
import PageChecklistCard, {
  type PageChecklistCardProps,
} from "./PageChecklistCard";

export type PagesSectionProps = {
  heading: string;
  lead: string;
  pages: PageChecklistCardProps[];
  transitionText: string;
  transitionAfterIndex: number;
  outro: string;
  image: { src: string; alt: string };
};

export default function PagesSection({
  heading,
  lead,
  pages,
  transitionText,
  transitionAfterIndex,
  outro,
  image,
}: PagesSectionProps) {
  return (
    <section id="pages" className="scroll-mt-24">
      <BlogImageBlock src={image.src} alt={image.alt} spacing="embedded" />

      <h2
        className="mt-8 w-full font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:mt-11 sm:text-[30px]"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <p
        className="mt-7 w-full font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]"
        dangerouslySetInnerHTML={{ __html: lead }}
      />

      <div className="mt-9 flex flex-col gap-5">
        {pages.map((page, i) => (
          <div key={page.num} className="contents">
            <PageChecklistCard {...page} />
            {i === transitionAfterIndex && (
              <div className="border-y border-[var(--color-violet-92)] py-8">
                <p
                  className="text-center font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]"
                  dangerouslySetInnerHTML={{ __html: transitionText }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <p
        className="mt-11 w-full font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]"
        dangerouslySetInnerHTML={{ __html: outro }}
      />
    </section>
  );
}
