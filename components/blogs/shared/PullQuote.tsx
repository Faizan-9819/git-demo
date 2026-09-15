export default function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-12 max-w-3xl">
      <div className="mb-7 h-0.5 w-12 bg-[image:var(--grad-brand)]" />
      <p className="text-balance font-poppins text-[26px] font-semibold leading-[1.35] tracking-[-0.3px] text-[var(--color-haiti)] sm:text-[32px] sm:leading-[44px]">
        {children}
      </p>
    </div>
  );
}
