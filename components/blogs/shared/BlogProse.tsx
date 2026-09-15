type BlogProseProps = {
  id?: string;
  heading?: string;
  paragraphs: string[];
  maxWidth?: string;
};

export default function BlogProse({
  id,
  heading,
  paragraphs,
  maxWidth = "max-w-[720px]",
}: BlogProseProps) {
  return (
    <section id={id} className="scroll-mt-24">
      {heading && (
        <h2
          className={`mt-12 text-balance font-poppins text-[26px] font-bold leading-[1.25] tracking-[-0.15px] text-[var(--color-violet-42)] sm:text-[30px] ${maxWidth}`}
          dangerouslySetInnerHTML={{ __html: heading }}
        />
      )}
      <div className={maxWidth}>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={
              i === 0 && heading
                ? "mt-7 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]"
                : "mt-6 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]"
            }
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
      </div>
    </section>
  );
}
