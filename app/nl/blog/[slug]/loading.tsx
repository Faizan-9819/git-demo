export default function BlogPostLoading() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f8f9fa] text-[var(--color-haiti)] animate-pulse">
      <section className="relative overflow-hidden bg-[radial-gradient(at_center_center,_#922698_0%,_#5B219F_89%)] lg:pb-16 pb-10 lg:pt-24 pt-12">
        <div className="md:max-w-[1400px] md:mx-auto fix">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-4 h-[28px] sm:h-[40px] w-[85%] max-w-2xl rounded bg-white/20" />
            <div className="mx-auto mb-4 h-[28px] sm:h-[40px] w-[60%] max-w-lg rounded bg-white/20" />
            <div className="flex items-center justify-center gap-4">
              <div className="h-[14px] w-[90px] rounded bg-white/20" />
              <div className="h-[14px] w-[70px] rounded bg-white/20" />
              <div className="h-[14px] w-[80px] rounded bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      <section className="md:max-w-[1400px] md:mx-auto fix lg:-mt-8 -mt-4 lg:pb-16 pb-10">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl bg-[#ece8f5] shadow-2xl">
            <div className="relative aspect-[16/9]" />
          </div>
        </div>
      </section>

      <section className="md:max-w-[1400px] md:mx-auto fix lg:pb-16 pb-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
          <aside className="hidden lg:flex flex-col gap-5">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="h-[13px] w-[130px] rounded bg-[#ece8f5] mb-4" />
              <div className="space-y-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-[12px] w-full rounded bg-[#ece8f5]" />
                ))}
              </div>
            </div>
          </aside>
          <article className="min-w-0 space-y-4">
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

      <section className="md:max-w-[1400px] md:mx-auto fix lg:pb-16 pb-10">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="h-[13px] w-[110px] rounded bg-[#ece8f5] mb-3" />
            <div className="h-[28px] sm:h-[36px] w-[280px] rounded bg-[#ece8f5]" />
          </div>
          <div className="h-[44px] w-[150px] rounded-full bg-[#ece8f5]" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[18px] lg:gap-[24px]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-[18px] border border-[#ece8f5] overflow-hidden">
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
