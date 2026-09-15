export default function BlogPostLoading() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-[var(--color-haiti)] animate-pulse">
      <section className="fix pt-12 lg:pt-20">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-5 h-[24px] w-[220px] rounded-full bg-[#ece8f5]" />
            <div className="mb-4 h-[40px] w-full rounded bg-[#ece8f5]" />
            <div className="mb-4 h-[40px] w-[85%] rounded bg-[#ece8f5]" />
            <div className="mb-8 h-[24px] w-[70%] rounded bg-[#ece8f5]" />
            <div className="flex gap-4">
              <div className="h-[48px] w-[220px] rounded-[10px] bg-[#ece8f5]" />
              <div className="h-[48px] w-[180px] rounded bg-[#ece8f5]" />
            </div>
          </div>
          <div className="h-[340px] rounded-2xl bg-[#ece8f5]" />
        </div>
      </section>

      <section className="fix mt-16 border-t border-[#ece8f5] pt-16 pb-16 lg:mt-20 lg:pt-20">
        <div className="flex gap-14 lg:items-start">
          <aside className="hidden w-[196px] flex-none lg:block">
            <div className="space-y-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-[12px] w-full rounded bg-[#ece8f5]" />
              ))}
            </div>
          </aside>
          <article className="min-w-0 flex-1 space-y-4">
            <div className="h-[16px] w-full rounded bg-[#ece8f5]" />
            <div className="h-[16px] w-full rounded bg-[#ece8f5]" />
            <div className="h-[16px] w-[90%] rounded bg-[#ece8f5]" />
            <div className="h-[24px] w-[50%] rounded bg-[#ece8f5] mt-8" />
            <div className="h-[16px] w-full rounded bg-[#ece8f5]" />
            <div className="h-[16px] w-full rounded bg-[#ece8f5]" />
            <div className="h-[16px] w-[80%] rounded bg-[#ece8f5]" />
            <div className="h-[280px] w-full rounded-2xl bg-[#ece8f5] mt-6" />
            <div className="h-[16px] w-full rounded bg-[#ece8f5] mt-6" />
            <div className="h-[16px] w-full rounded bg-[#ece8f5]" />
            <div className="h-[16px] w-[70%] rounded bg-[#ece8f5]" />
          </article>
        </div>
      </section>

      <section className="fix pb-16">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="h-[13px] w-[110px] rounded bg-[#ece8f5] mb-3" />
            <div className="h-[28px] sm:h-[36px] w-[280px] rounded bg-[#ece8f5]" />
          </div>
          <div className="h-[44px] w-[150px] rounded-full bg-[#ece8f5]" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[18px] lg:gap-[24px]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-[18px] border border-[#ece8f5] overflow-hidden"
            >
              <div className="h-[180px] bg-[#ece8f5]" />
              <div className="p-[22px] space-y-2">
                <div className="h-[18px] w-full rounded bg-[#ece8f5]" />
                <div className="h-[18px] w-[70%] rounded bg-[#ece8f5]" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
