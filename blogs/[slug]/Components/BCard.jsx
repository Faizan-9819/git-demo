// import Link from "next/link";
//

// const BCard = ({ blog, activeTabId, image }) => {
//   // Category Labels
//   const categoryLabels = {
//     6: "Blogs",
//     18: "News",
//   };

//   let categoryToShow = "Uncategorized";

//   if (activeTabId === null) {
//     // "All" tab: Prioritize "News" over "Blogs" if both exist
//     if (blog.categories.includes(18)) {
//       categoryToShow = "News";
//     } else if (blog.categories.includes(6)) {
//       categoryToShow = "Blogs";
//     }
//   } else {
//     // Active category logic
//     if (blog.categories.includes(activeTabId)) {
//       categoryToShow = categoryLabels[activeTabId] || "Uncategorized";
//     } else {
//       // Fallback to the first matching category
//       const firstCategory = blog.categories.find((cat) => categoryLabels[cat]);
//       if (firstCategory) {
//         categoryToShow = categoryLabels[firstCategory];
//       }
//     }
//   }

//   return (
//     <Link
//       href={`/blogs/${blog.slug}`}
//       className="flex flex-col md:flex-row w-full pt-5"
//     >
//       {/* Blog Thumbnail */}
//       <div className="md:min-w-[292px] w-full h-[200px] lg:h-[300px] max-w-full">
//         <img
//           className="object-cover h-full w-full"
//           src={image || "/default-image.jpg"} // Use the passed image prop
//           alt={blog.title?.rendered || "Blog Thumbnail"}
//         />
//       </div>

//       {/* Blog Content */}
//       <div className="flex flex-col min-h-full justify-between border-[#DDDDDD] border-t border-b border-r w-full max-w-full pl-[30px] pr-[20px] py-[30px]">
//         <div className="flex flex-col gap-[16px]">
//           {/* Category Tag */}
//           <p
//             className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]"
//             dangerouslySetInnerHTML={{ __html: categoryToShow }}
//           />

//           {/* Blog Title */}
//           <h3
//             className="spotlightheaddd fsans-600 text-[20px] text-[#565656] line-clamp-2 md:line-clamp-3"
//             dangerouslySetInnerHTML={{
//               __html: blog.title?.rendered || "Untitled Blog",
//             }}
//           />
//         </div>

//         {/* Learn More Link */}
//         <Link
//           href={`/blogs/${blog.slug}`}
//           className="flex items-center gap-2 pt-5"
//         >
//           <div className="w-[30px] h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//             <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//           </div>
//           <p>Learn More</p>
//         </Link>
//       </div>
//     </Link>
//   );
// };

// export default BCard;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Link from "next/link";
//

// const BCard = ({ blog, activeTabId, image }) => {
//   const categoryLabels = {
//     6: "Blogs",
//     18: "News",
//   };

//   let categoryToShow = "Uncategorized";

//   if (activeTabId === null) {
//     if (blog.categories.includes(18)) {
//       categoryToShow = "News";
//     } else if (blog.categories.includes(6)) {
//       categoryToShow = "Blogs";
//     }
//   } else {
//     if (blog.categories.includes(activeTabId)) {
//       categoryToShow = categoryLabels[activeTabId] || "Uncategorized";
//     } else {
//       const firstCategory = blog.categories.find((cat) => categoryLabels[cat]);
//       if (firstCategory) {
//         categoryToShow = categoryLabels[firstCategory];
//       }
//     }
//   }

//   return (
//     <Link
//       href={`/blogs/${blog.slug}`}
//       className="flex group flex-col md:flex-row w-full pt-5"
//     >
//       {/* Blog Thumbnail */}
//       <div className="md:min-w-[292px] w-full h-[200px] lg:h-[300px] max-w-full overflow-hidden">
//         <img
//           className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
//           src={image || "/default-image.jpg"}
//           alt={blog.title?.rendered || "Blog Thumbnail"}
//         />
//       </div>

//       {/* Blog Content */}
//       <div className="flex flex-col min-h-full justify-between border-[#DDDDDD] border-t border-b border-r w-full max-w-full pl-[30px] pr-[20px] py-[30px]">
//         <div className="flex flex-col gap-[16px]">
//           {/* Category Tag */}
//           <p
//             className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]"
//             dangerouslySetInnerHTML={{ __html: categoryToShow }}
//           />

//           {/* Blog Title */}
//           <h3
//             className="spotlightheaddd fsans-600 text-[20px] text-[#565656] line-clamp-2 md:line-clamp-3"
//             dangerouslySetInnerHTML={{
//               __html: blog.title?.rendered || "Untitled Blog",
//             }}
//           />
//         </div>

//         {/* Learn More Link */}
//         <Link
//           href={`/blogs/${blog.slug}`}
//           className="flex items-center gap-2 pt-5"
//         >
//           <div className="w-[30px] h-[30px] group-hover:-rotate-45 transition-transform duration-500 bg-[#EEF0F3] rounded-full flex items-center justify-center">
//             <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//           </div>
//           <p>Learn More</p>
//         </Link>
//       </div>
//     </Link>
//   );
// };

// export default BCard;
// import Link from "next/link";

// const BCard = ({ blog, activeTabId, image }) => {
//   const categoryLabels = {
//     6: "Blogs",
//     18: "News",
//   };

//   // Safely extract category IDs and ensure they're numbers
//   const categoryIds = Array.isArray(blog.categories)
//     ? blog.categories.map((id) => Number(id))
//     : [];

//   // Determine correct category to display
//   let categoryToShow = "Uncategorized";

//   if (activeTabId === null) {
//     if (categoryIds.includes(18)) {
//       categoryToShow = "News";
//     } else if (categoryIds.includes(6)) {
//       categoryToShow = "Blogs";
//     }
//   } else {
//     if (categoryIds.includes(activeTabId)) {
//       categoryToShow = categoryLabels[activeTabId] || "Uncategorized";
//     } else {
//       const matched = categoryIds.find((id) => categoryLabels[id]);
//       if (matched) {
//         categoryToShow = categoryLabels[matched];
//       }
//     }
//   }

//   return (
//     <Link
//       href={`/blogs/${blog.slug}`}
//       className="flex group flex-col md:flex-row w-full pt-5"
//     >
//       {/* Blog Thumbnail */}
//       <div className="md:min-w-[292px] w-full h-[200px] lg:h-[300px] max-w-full overflow-hidden">
//         <img
//           className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
//           src={image || "/default-image.jpg"}
//           alt={blog.title?.rendered || "Blog Thumbnail"}
//         />
//       </div>

//       {/* Blog Content */}
//       <div className="flex flex-col min-h-full justify-between border-[#DDDDDD] lg:border-l-0 border-l border-t border-b border-r w-full max-w-full pl-[30px] pr-[20px] py-[30px]">
//         <div className="flex flex-col gap-[16px]">
//           {/* Category Tag */}
//           <p
//             className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]"
//             dangerouslySetInnerHTML={{ __html: categoryToShow }}
//           />

//           {/* Blog Title */}
//           <h3
//             className="spotlightheaddd fsans-600 text-[20px] text-[#565656] line-clamp-2 md:line-clamp-3"
//             dangerouslySetInnerHTML={{
//               __html: blog.title?.rendered || "Untitled Blog",
//             }}
//           />
//         </div>

//         {/* Learn More Link */}
//         <Link
//           href={`/blogs/${blog.slug}`}
//           className="flex items-center gap-2 pt-5"
//         >
//           <div className="w-[30px] h-[30px] group-hover:-rotate-45 transition-transform duration-500 bg-[#EEF0F3] rounded-full flex items-center justify-center">
//             <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//           </div>
//           <p>Learn More</p>
//         </Link>
//       </div>
//     </Link>
//   );
// };

// export default BCard;
//
//
//
//
//
//
//
//
//
//
// import Link from "next/link";

// const BCard = ({ blog, activeTabId, image }) => {
//   const categoryLabels = {
//     6: "Blogs",
//     7: "News",
//   };

//   // Safely extract category IDs and ensure they're numbers
//   const categoryIds = Array.isArray(blog.categories)
//     ? blog.categories.map((id) => Number(id))
//     : [];

//   // Determine correct category to display
//   let categoryToShow = "Uncategorized";

//   if (activeTabId === null) {
//     if (categoryIds.includes(7)) {
//       categoryToShow = "News";
//     } else if (categoryIds.includes(6)) {
//       categoryToShow = "Blogs";
//     }
//   } else {
//     if (categoryIds.includes(activeTabId)) {
//       categoryToShow = categoryLabels[activeTabId] || "Uncategorized";
//     } else {
//       const matched = categoryIds.find((id) => categoryLabels[id]);
//       if (matched) {
//         categoryToShow = categoryLabels[matched];
//       }
//     }
//   }

//   // Format date like "5 Aug 2025"
//   const formattedDate = blog.date
//     ? new Date(blog.date).toLocaleDateString("en-GB", {
//         day: "numeric",
//         month: "short",
//         year: "numeric",
//       })
//     : "";

//   return (
//     <Link
//       href={`/blogs/${blog.slug}`}
//       className="flex group flex-col md:flex-row w-full pt-5"
//     >
//       {/* Blog Thumbnail */}
//       <div className="md:min-w-[292px] w-full h-[200px] lg:h-[300px] max-w-full overflow-hidden">
//         <img
//           className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
//           src={image || "/default-image.jpg"}
//           alt={blog.title?.rendered || "Blog Thumbnail"}
//         />
//       </div>

//       {/* Blog Content */}
//       <div className="flex flex-col min-h-full justify-between border-[#DDDDDD] lg:border-l-0 border-l border-t border-b border-r w-full max-w-full pl-[30px] pr-[20px] py-[30px]">
//         <div className="flex flex-col gap-[16px]">
//           {/* Category Tag */}
//           <p
//             className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]"
//             dangerouslySetInnerHTML={{ __html: categoryToShow }}
//           />

//           {/* Blog Title */}
//           <h3
//             className="spotlightheaddd fsans-600 text-[20px] text-[#565656] line-clamp-2 md:line-clamp-3"
//             dangerouslySetInnerHTML={{
//               __html: blog.title?.rendered || "Untitled Blog",
//             }}
//           />

//           {/* Blog Date */}
//           {formattedDate && (
//             <p className="fsans-600 text-[16px] text-[#565656]">
//               {formattedDate}
//             </p>
//           )}
//         </div>

//         {/* Learn More Link */}
//         <Link
//           href={`/blogs/${blog.slug}`}
//           className="flex items-center gap-2 pt-5"
//         >
//           <div className="w-[30px] h-[30px] group-hover:-rotate-45 transition-transform duration-500 bg-[#EEF0F3] rounded-full flex items-center justify-center">
//             <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//           </div>
//           <p>Learn More</p>
//         </Link>
//       </div>
//     </Link>
//   );
// };

// export default BCard;
import Link from "next/link";

const BCard = ({ blog, activeTabId, image, categoryPath }) => {
  const categoryLabels = {
    6: "Blogs",
    7: "News",
    17: "Blogs",
    18: "News",
  };

  // Safely extract category IDs and ensure they're numbers
  const categoryIds = Array.isArray(blog.categories)
    ? blog.categories.map((id) => Number(id))
    : [];

  // Determine correct category to display
  let categoryToShow = "Uncategorized";

  if (activeTabId === null) {
    if (categoryIds.includes(7) || categoryIds.includes(18)) {
      categoryToShow = "News";
    } else if (categoryIds.includes(6) || categoryIds.includes(17)) {
      categoryToShow = "Blogs";
    }
  } else {
    if (categoryIds.includes(activeTabId)) {
      categoryToShow = categoryLabels[activeTabId] || "Uncategorized";
    } else {
      const matched = categoryIds.find((id) => categoryLabels[id]);
      if (matched) {
        categoryToShow = categoryLabels[matched];
      }
    }
  }

  // Format date like "5 Aug 2025"
  const formattedDate = blog.date
    ? new Date(blog.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  // ✅ Build dynamic href using categoryPath
  const blogHref = `/${categoryPath}/${blog.slug}`;

  return (
    <Link
      href={blogHref}
      className="flex group flex-col md:flex-row w-full pt-5"
    >
      {/* Blog Thumbnail */}
      <div className="md:min-w-[292px] w-full h-[200px] lg:h-[300px] max-w-full overflow-hidden">
        <img
          className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
          src={image || "/default-image.jpg"}
          alt={blog.title?.rendered || "Blog Thumbnail"}
        />
      </div>

      {/* Blog Content */}
      <div className="flex flex-col min-h-full justify-between border-[#DDDDDD] lg:border-l-0 border-l border-t border-b border-r w-full max-w-full pl-[30px] pr-[20px] py-[30px]">
        <div className="flex flex-col gap-[16px]">
          {/* Category Tag */}
          <p
            className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]"
            dangerouslySetInnerHTML={{ __html: categoryToShow }}
          />

          {/* Blog Title */}
          <h3
            className="spotlightheaddd fsans-600 text-[20px] text-[#565656] line-clamp-2 md:line-clamp-3"
            dangerouslySetInnerHTML={{
              __html: blog.title?.rendered || "Untitled Blog",
            }}
          />

          {/* Blog Date */}
          {formattedDate && (
            <p className="fsans-600 text-[16px] text-[#565656]">
              {formattedDate}
            </p>
          )}
        </div>

        {/* Learn More Link */}
        <Link href={blogHref} className="flex items-center gap-2 pt-5">
          <div className="w-[30px] h-[30px] group-hover:-rotate-45 transition-transform duration-500 bg-[#EEF0F3] rounded-full flex items-center justify-center">
            <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
          </div>
          <p>Learn More</p>
        </Link>
      </div>
    </Link>
  );
};

export default BCard;
