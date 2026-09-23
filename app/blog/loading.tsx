/**
 * Loading skeleton for /blog — the same three folds `BlogLandingClient` paints,
 * in the same order and at the same heights, so nothing jumps when the real
 * page swaps in: deep masthead, lime featured card, white article grid inside
 * HomeShell's bento gutter.
 */
export default function BlogLandingLoading() {
  return (
    <div className="blog-theme animate-pulse bg-white px-3.5 pt-22 pb-3.5">
      <div className="mx-auto flex max-w-473 flex-col gap-3">
        {/* Masthead */}
        <div className="rounded-[13px] bg-[#0a0516] py-[48px] md:py-[64px]">
          <div className="fix">
            <div className="h-[13px] w-[160px] rounded-full bg-white/15" />
            <div className="mt-[18px] h-[48px] w-[70%] max-w-[520px] rounded bg-white/15 lg:h-[64px]" />
            <div className="mt-[18px] h-[16px] w-full max-w-[620px] rounded bg-white/10" />
            <div className="mt-2 h-[16px] w-[80%] max-w-[500px] rounded bg-white/10" />
          </div>
        </div>

        {/* Featured */}
        <div className="rounded-[13px] bg-[#e4fa65] py-[40px] md:py-[52px]">
          <div className="fix">
            <div className="grid gap-[24px] lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-[48px]">
              <div className="min-h-[220px] rounded-[13px] bg-[#0a0516]/10 lg:min-h-[400px]" />
              <div>
                <div className="h-[26px] w-[150px] rounded-full bg-[#0a0516]/10" />
                <div className="mt-[16px] h-[34px] w-[90%] rounded bg-[#0a0516]/10" />
                <div className="mt-3 h-[34px] w-[70%] rounded bg-[#0a0516]/10" />
                <div className="mt-[14px] h-[14px] w-full rounded bg-[#0a0516]/8" />
                <div className="mt-2 h-[14px] w-[60%] rounded bg-[#0a0516]/8" />
                <div className="mt-[22px] flex items-center gap-[12px] border-t border-[#b8ce50] pt-[20px]">
                  <div className="h-[40px] w-[40px] rounded-full bg-[#0a0516]/10" />
                  <div>
                    <div className="h-[13px] w-[110px] rounded bg-[#0a0516]/10" />
                    <div className="mt-1.5 h-[13px] w-[150px] rounded bg-[#0a0516]/8" />
                  </div>
                </div>
                <div className="mt-[24px] h-[45px] w-[180px] rounded-full bg-[#0a0516]/10" />
              </div>
            </div>
          </div>
        </div>

        {/* Article grid */}
        <div className="rounded-[13px] bg-white py-[48px] md:py-[64px]">
          <div className="fix">
            <div className="flex flex-wrap items-end justify-between gap-[14px]">
              <div>
                <div className="h-[13px] w-[110px] rounded-full bg-[#ece7f6]" />
                <div className="mt-[14px] h-[40px] w-[200px] rounded bg-[#ece7f6]" />
              </div>
              <div className="h-[13px] w-[180px] rounded bg-[#ece7f6]" />
            </div>

            <div className="mt-[26px] flex flex-wrap items-center justify-between gap-[12px] border-y border-[#ded8e7] py-[18px]">
              <div className="flex flex-wrap items-center gap-[10px]">
                <div className="h-[40px] w-full rounded-full bg-[#ece7f6] lg:w-[220px]" />
                <div className="hidden h-[37px] w-[140px] rounded-full bg-[#f5f3ff] lg:block" />
                <div className="hidden h-[37px] w-[120px] rounded-full bg-[#f5f3ff] lg:block" />
                <div className="hidden h-[37px] w-[160px] rounded-full bg-[#f5f3ff] lg:block" />
              </div>
              <div className="h-[38px] w-full rounded-full bg-[#f5f3ff] lg:w-[260px]" />
            </div>

            <div className="mt-[28px] grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col overflow-hidden rounded-[13px] border border-[#ded8e7] bg-[#f5f3ff]"
                >
                  <div className="h-[180px] bg-[#ece7f6] lg:h-[218px]" />
                  <div className="flex flex-1 flex-col gap-[12px] p-[22px]">
                    <div className="h-[24px] w-[130px] rounded-full bg-[#ece7f6]" />
                    <div className="h-[20px] w-full rounded bg-[#ece7f6]" />
                    <div className="h-[20px] w-[75%] rounded bg-[#ece7f6]" />
                    <div className="h-[14px] w-full rounded bg-[#ece7f6]" />
                    <div className="mt-auto flex items-center justify-between border-t border-[#ded8e7] pt-[14px]">
                      <div className="h-[12px] w-[120px] rounded bg-[#ece7f6]" />
                      <div className="h-[12px] w-[50px] rounded bg-[#ece7f6]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
