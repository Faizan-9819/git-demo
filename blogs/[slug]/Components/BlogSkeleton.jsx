// app/blogs/[slug]/Components/BlogSkeleton.jsx

export default function BlogSkeleton() {
  return (
    <div id="bloginside">
      <div className="bg-[#092241] animate-pulse">
        <div className="fix12 pb-20 pt-32">
          <div className="pb-16">
            <div className="bg-[#1f3b5c] h-4 w-24 mb-4 rounded" />
            <div className="bg-[#1f3b5c] h-8 w-48 mb-4 rounded" />
            <div className="bg-[#1f3b5c] h-10 w-3/4 rounded" />
          </div>
          <div className="imgCon h-[45vh] w-full bg-[#1f3b5c] rounded" />
        </div>
      </div>
      <div className="fix12 py-20">
        <div className="middleBlogContent flex md:flex-row flex-col-reverse lg:gap-20 gap-9">
          <div className="colIcon h-fit sticky top-20">
            <div className="flex md:flex-col flex-row max-w-full md:w-10 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-9 h-9 bg-gray-300 rounded-full" />
              ))}
            </div>
          </div>
          <div className="colContnt space-y-4 flex-1">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="bg-gray-300 h-4 rounded w-full"
                style={{ width: `${90 - i * 5}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
