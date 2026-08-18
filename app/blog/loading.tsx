export default function BlogLandingLoading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Hero */}
      <div
        className="relative pt-[40px] lg:pt-[77px] pb-[32px] lg:pb-[45px] px-4 sm:px-6 plcont prcont"
        style={{
          background:
            "linear-gradient(90deg, rgb(242, 238, 252) 0%, rgb(242, 238, 252) 100%)",
          borderBottom: "1px solid #ece8f5",
        }}
      >
        <div className="md:max-w-[1400px] md:mx-auto fix">
          <div className="h-[13px] w-[160px] rounded bg-[#e3dff0] mb-[15.3px]" />
          <div className="h-[40px] lg:h-[56px] w-[70%] max-w-[520px] rounded bg-[#e3dff0] mb-[15.3px]" />
          <div className="h-[16px] w-full max-w-[620px] rounded bg-[#e3dff0] mb-2" />
          <div className="h-[16px] w-[80%] max-w-[500px] rounded bg-[#e3dff0]" />
        </div>
      </div>

      {/* Filter bar */}
      <div
        className="py-[18px] lg:py-5 flex items-center justify-center px-4 sm:px-6 plcont prcont"
        style={{
          background: "linear-gradient(90deg, rgb(91, 33, 159) 0%, rgb(146, 38, 152) 100%)",
          borderBottom: "1px solid #ece8f5",
        }}
      >
        <div className="w-full md:max-w-[1400px] md:mx-auto fix flex flex-wrap items-center justify-between gap-3 lg:gap-4">
          <div className="flex flex-wrap items-center gap-[8px] lg:gap-[10px]">
            <div className="h-[38px] w-[110px] rounded-[999px] bg-white/20" />
            <div className="h-[34px] w-[120px] rounded-[999px] bg-white/20" />
            <div className="h-[34px] w-[140px] rounded-[999px] bg-white/20" />
            <div className="h-[34px] w-[100px] rounded-[999px] bg-white/20" />
          </div>
          <div className="h-[42px] w-full lg:w-[260px] rounded-[999px] bg-white/20" />
        </div>
      </div>

      {/* Featured post */}
      <div className="plcont perspective-origin-center mt-[32px] lg:mt-[55px] mb-[28px] lg:mb-[40px]">
        <div className="md:max-w-[1400px] md:mx-auto fix">
          <div className="bg-white w-full lg:p-10 p-3.5 rounded-[18px] lg:rounded-[22px] border border-[#ece8f5] grid lg:grid-cols-[1.05fr_1fr] gap-[20px] 2xl:gap-[48px]">
            <div className="rounded-[14px] lg:rounded-[16px] min-h-[220px] lg:min-h-[422px] bg-[#ece8f5]" />
            <div className="flex flex-col justify-center py-[12px] lg:py-[24px] pr-[6px] lg:pr-[24px]">
              <div className="flex items-center gap-[10px] mb-[14px]">
                <div className="h-[26px] w-[130px] rounded-[6px] bg-[#ece8f5]" />
                <div className="h-[12px] w-[80px] rounded bg-[#ece8f5]" />
              </div>
              <div className="h-[26px] w-[90%] rounded bg-[#ece8f5] mb-3" />
              <div className="h-[26px] w-[75%] rounded bg-[#ece8f5] mb-[14px]" />
              <div className="h-[14px] w-full rounded bg-[#ece8f5] mb-2" />
              <div className="h-[14px] w-full rounded bg-[#ece8f5] mb-2" />
              <div className="h-[14px] w-[60%] rounded bg-[#ece8f5] mb-[20px]" />
              <div className="flex items-center gap-[14px] mb-[18px]">
                <div className="w-[40px] h-[40px] rounded-full bg-[#ece8f5]" />
                <div>
                  <div className="h-[13px] w-[110px] rounded bg-[#ece8f5] mb-1" />
                  <div className="h-[13px] w-[80px] rounded bg-[#ece8f5]" />
                </div>
              </div>
              <div className="h-[44px] w-[160px] rounded-full bg-[#ece8f5]" />
            </div>
          </div>
        </div>
      </div>

      {/* Latest posts grid */}
      <div className="plcont perspective-origin-center mb-[48px] lg:mb-[80px] mt-[28px] lg:mt-[40px]">
        <div className="md:max-w-[1400px] md:mx-auto fix">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-[10px] lg:mb-[28px]">
            <div>
              <div className="h-[11px] w-[100px] rounded bg-[#ece8f5] mb-[6.75px]" />
              <div className="h-[30px] w-[160px] rounded bg-[#ece8f5]" />
            </div>
            <div className="h-[13px] w-[180px] rounded bg-[#ece8f5]" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[18px] lg:gap-[24px]">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-[18px] border border-[#ece8f5] overflow-hidden flex flex-col h-full"
              >
                <div className="h-[180px] lg:h-[241px] bg-[#ece8f5] border-b border-[#ece8f5]" />
                <div className="p-[22px] flex flex-col flex-1">
                  <div className="h-[22px] w-[110px] rounded-[6px] bg-[#ece8f5] mb-[10px]" />
                  <div className="h-[18px] w-full rounded bg-[#ece8f5] mb-2" />
                  <div className="h-[18px] w-[80%] rounded bg-[#ece8f5] mb-[10px]" />
                  <div className="h-[14px] w-full rounded bg-[#ece8f5] mb-2" />
                  <div className="h-[14px] w-[60%] rounded bg-[#ece8f5] mb-auto" />
                  <div className="flex items-center justify-between pt-[14px] mt-[14px] border-t border-[#ece8f5]">
                    <div className="h-[12px] w-[90px] rounded bg-[#ece8f5]" />
                    <div className="h-[12px] w-[50px] rounded bg-[#ece8f5]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
