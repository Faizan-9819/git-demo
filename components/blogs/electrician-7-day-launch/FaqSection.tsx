import BlogFAQ, { type BlogFaqItem } from "@/components/blogs/shared/BlogFAQ";

export default function FaqSection({ items }: { items: BlogFaqItem[] }) {
  return (
    <section id="faq" className="scroll-mt-24">
      <h2 className="mt-12 font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px]">
        Frequently asked questions
      </h2>
      <BlogFAQ items={items} />
    </section>
  );
}
