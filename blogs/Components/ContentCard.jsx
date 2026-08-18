import Image from "next/image";
import Link from "next/link";

const ContentCard = ({ item, activeTabId = null, type = "post" }) => {
  const isPress = type === "press";

  const categoryLabels = {
    6: "Blogs",
    7: "News",
    17: "Blogs",
    18: "News",
  };

  const categoryIds = Array.isArray(item?.categories)
    ? item.categories.map((id) => Number(id))
    : [];

  let categoryToShow = "Uncategorized";
  if (isPress) {
    categoryToShow = item?.category || "Press";
  } else if (activeTabId === null) {
    if (categoryIds.includes(7)) categoryToShow = "News";
    else if (categoryIds.includes(6)) categoryToShow = "Blogs";
  } else if (categoryIds.includes(Number(activeTabId))) {
    categoryToShow = categoryLabels[Number(activeTabId)] || "Uncategorized";
  } else {
    const matched = categoryIds.find((id) => categoryLabels[id]);
    if (matched) categoryToShow = categoryLabels[matched];
  }

  let href = item?.href || "#";
  if (!isPress) {
    let currentPath = "blogs";
    if (categoryIds.includes(7) || categoryIds.includes(18))
      currentPath = "news";
    else if (categoryIds.includes(6) || categoryIds.includes(17))
      currentPath = "blogs";
    href = `/${currentPath}/${item.slug}`;
  }

  const formattedDate = item?.date
    ? new Date(item.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  const imageSrc = isPress
    ? item?.image || "/default-image.jpg"
    : item?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      "/default-image.jpg";

  const titleText = item?.title?.rendered || item?.title || "";

  const content = (
    <>
      <div className="2xl:w-[292px] lg:w-[50%] h-[208.4px] max-w-full overflow-hidden relative">
        <Image
          fill={true}
          className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
          src={imageSrc}
          alt={titleText || "Content Thumbnail"}
        />
      </div>

      <div className="flex flex-col min-h-[208.4px] 2xl:gap-0 gap-2 justify-between border-[#DDDDDD] border-t lg:border-l-0 border-l border-b border-r lg:w-[50%] 2xl:w-[310px] max-w-full 2xl:pl-[30px] pl-[20px] pr-[20px] py-3">
        <div className="flex flex-col gap-2 2xl:gap-2 mb-1">
          <p className="max-w-fit fsans-600 text-[14px] 2xl:text-[16px] leading-[111%] bg-[#F7E327] py-1 2xl:py-[8px] px-2 2xl:px-[12px]">
            {categoryToShow}
          </p>

          {isPress ? (
            <h3 className="spotlightheaddd line-clamp-2 fsans-600 text-[18px] text-[#565656]">
              {titleText}
            </h3>
          ) : (
            <h3
              className="spotlightheaddd line-clamp-2 fsans-600 text-[18px] 2xl:text-[20px] text-[#565656]"
              dangerouslySetInnerHTML={{ __html: titleText }}
            />
          )}

          {formattedDate && (
            <p className="fsans-600 text-[16px] text-[#565656]">
              {formattedDate}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2 lg:pt-0 pt-5">
          <div className="w-[30px] group-hover:-rotate-45 transition-transform duration-500 h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
            <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
          </div>
          <p>Learn More</p>
        </div>
      </div>
    </>
  );

  if (isPress) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex group flex-col w-full lg:w-[calc(50%-32.5px)] md:flex-row"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="flex group flex-col w-full lg:w-[calc(50%-32.5px)] md:flex-row"
    >
      {content}
    </Link>
  );
};

export default ContentCard;
