// import Link from "next/link";
//

// const BlogCard = ({ blog }) => {
//   return (
//     <div className="flex">
//       <div className="w-[292px] h-[268px] max-w-full">
//         <img
//           className="object-cover h-full w-full"
//           src={blog.better_featured_image?.source_url || "/default-image.jpg"}
//           alt={blog.title.rendered}
//         />
//       </div>
//       <div className="flex flex-col min-h-full justify-between border-[#DDDDDD] border-t border-b border-r w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
//         <div className="flex flex-col gap-[16px]">
//           <p className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]">
//             {blog.categories[0] || "Uncategorized"}
//           </p>
//           <h3 className="spotlightheaddd fsans-600 text-[20px] text-[#565656]">
//             {blog.title.rendered}
//           </h3>
//         </div>
//         <Link href={`/blogs/${blog.slug}`} className="flex items-center gap-2">
//           <div className="w-[30px] h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//             <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//           </div>
//           <p>Learn More</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

/////////////////////////// 99999999999999999999999999 %%%%%%%%%%%%%%%%%%%%%%%%%%% /////////////////////
/////////////////////////// 99999999999999999999999999 %%%%%%%%%%%%%%%%%%%%%%%%%%% /////////////////////
/////////////////////////// 99999999999999999999999999 %%%%%%%%%%%%%%%%%%%%%%%%%%% /////////////////////
/////////////////////////// 99999999999999999999999999 %%%%%%%%%%%%%%%%%%%%%%%%%%% /////////////////////
/////////////////////////// 99999999999999999999999999 %%%%%%%%%%%%%%%%%%%%%%%%%%% /////////////////////
/////////////////////////// 99999999999999999999999999 %%%%%%%%%%%%%%%%%%%%%%%%%%% /////////////////////
/////////////////////////// 99999999999999999999999999 %%%%%%%%%%%%%%%%%%%%%%%%%%% /////////////////////

// import Link from "next/link";
//

// const BlogCard = ({ blog, activeTabId }) => {
//   // Define category labels
//   const categoryLabels = {
//     17: "Blog",
//     18: "News",
//   };

//   // Find which category to display based on the active tab
//   let categoryToShow = "Uncategorized";
//   if (activeTabId) {
//     // If the blog contains the active tab's category, prioritize showing it
//     if (blog.categories.includes(activeTabId)) {
//       categoryToShow = categoryLabels[activeTabId] || "Uncategorized";
//     } else {
//       // Otherwise, just show the first available category
//       const firstCategory = blog.categories.find((cat) => categoryLabels[cat]);
//       if (firstCategory) {
//         categoryToShow = categoryLabels[firstCategory];
//       }
//     }
//   }

//   return (
//     <div className="flex">
//       <div className="w-[292px] h-[268px] max-w-full">
//         <img
//           className="object-cover h-full w-full"
//           src={blog.better_featured_image?.source_url || "/default-image.jpg"}
//           alt={blog.title?.rendered}
//         />
//       </div>
//       <div className="flex flex-col min-h-full justify-between border-[#DDDDDD] border-t border-b border-r w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
//         <div className="flex flex-col gap-[16px]">
//           <p className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]">
//             {categoryToShow}
//           </p>
//           <h3 className="spotlightheaddd fsans-600 text-[20px] text-[#565656]">
//             {blog.title?.rendered}
//           </h3>
//         </div>
//         <Link href={`/blogs/${blog.slug}`} className="flex items-center gap-2">
//           <div className="w-[30px] h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//             <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//           </div>
//           <p>Learn More</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
////////////////////////////////////// 99999999999 %%%%%%%%%%%%%%%%%%% ?////////////////////////
// import Link from "next/link";
//

// const BlogCard = ({ blog, activeTabId }) => {
//   console.log(blog, "-------BlogCard---------");

//   // Category Labels
//   const categoryLabels = {
//     17: "Blogs",
//     18: "News",
//   };

//   let categoryToShow = "Uncategorized";

//   if (activeTabId === null) {
//     // "All" tab: Prioritize "News" over "Blogs" if both exist
//     if (blog.categories.includes(18)) {
//       categoryToShow = "News";
//     } else if (blog.categories.includes(17)) {
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
//       className="flex group flex-col md:flex-row"
//     >
//       {/* Blog Thumbnail */}
//       <div className="lg:w-[292px] w-full h-[300px] max-w-full overflow-hidden">
//         <img
//           className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
//           src={
//             blog.yoast_head_json?.schema?.["@graph"]?.[0]?.thumbnailUrl ||
//             "/default-image.jpg"
//           }
//           // src={blog.thumbnail || "/default-image.jpg"}
//           // alt={blog.title?.rendered || "Blog Thumbnail"}
//         />
//       </div>

//       {/* Blog Content */}
//       <div className="flex flex-col min-h-[250px] justify-between border-[#DDDDDD] border-t lg:border-l-0 border-l border-b border-r w-full lg:w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
//         <div className="flex flex-col gap-[16px]">
//           {/* Category Tag */}
//           <p className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]">
//             {categoryToShow}
//           </p>

//           {/* Blog Title */}
//           {/* <h3 className="spotlightheaddd fsans-600 text-[20px] text-[#565656]">
//             {blog.title?.rendered}
//           </h3> */}

//           <h3
//             className="spotlightheaddd line-clamp-3 fsans-600 text-[20px] text-[#565656]"
//             dangerouslySetInnerHTML={{ __html: blog.title?.rendered }}
//           ></h3>
//         </div>

//         {/* Learn More Link */}
//         <Link href={`/blogs/${blog.slug}`} className="flex items-center gap-2">
//           <div className="w-[30px] group-hover:-rotate-45 transition-transform duration-500 h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//             <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//           </div>
//           <p>Learn More</p>
//         </Link>
//       </div>
//     </Link>
//   );
// };

// export default BlogCard;
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

// const BlogCard = ({ blog, activeTabId }) => {
//   let categoryToShow = "Uncategorized";

//   if (activeTabId === null) {
//     // All tab — prioritize News > Blogs
//     if (blog.categories.includes(18)) {
//       categoryToShow = "News";
//     } else if (blog.categories.includes(17)) {
//       categoryToShow = "Blogs";
//     }
//   } else if (activeTabId === 18 && blog.categories.includes(18)) {
//     categoryToShow = "News";
//   } else if (activeTabId === 17 && blog.categories.includes(17)) {
//     categoryToShow = "Blogs";
//   }

//   return (
//     <Link
//       href={`/blogs/${blog.slug}`}
//       className="flex group flex-col md:flex-row"
//     >
//       {/* Blog Thumbnail */}
//       <div className="lg:w-[292px] w-full h-[300px] max-w-full overflow-hidden">
//         <img
//           className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
//           src={
//             blog.yoast_head_json?.schema?.["@graph"]?.[0]?.thumbnailUrl ||
//             "/default-image.jpg"
//           }
//         />
//       </div>

//       {/* Blog Content */}
//       <div className="flex flex-col min-h-[250px] justify-between border-[#DDDDDD] border-t lg:border-l-0 border-l border-b border-r w-full lg:w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
//         <div className="flex flex-col gap-[16px]">
//           {/* Category Tag */}
//           <p className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]">
//             {categoryToShow}
//           </p>

//           {/* Blog Title */}
//           <h3
//             className="spotlightheaddd line-clamp-3 fsans-600 text-[20px] text-[#565656]"
//             dangerouslySetInnerHTML={{ __html: blog.title?.rendered }}
//           ></h3>
//         </div>

//         {/* Learn More Link */}
//         <Link href={`/blogs/${blog.slug}`} className="flex items-center gap-2">
//           <div className="w-[30px] group-hover:-rotate-45 transition-transform duration-500 h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//             <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//           </div>
//           <p>Learn More</p>
//         </Link>
//       </div>
//     </Link>
//   );
// };

// export default BlogCard;
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

// const BlogCard = ({ blog, activeTabId }) => {
//   let categoryToShow = "Uncategorized";

//   if (activeTabId === null) {
//     // All tab — prioritize News > Blogs
//     if (blog.categories.includes(7)) {
//       categoryToShow = "News";
//     } else if (blog.categories.includes(6)) {
//       categoryToShow = "Blogs";
//     }
//   } else if (activeTabId === 7 && blog.categories.includes(7)) {
//     categoryToShow = "News";
//   } else if (activeTabId === 6 && blog.categories.includes(6)) {
//     categoryToShow = "Blogs";
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
//       className="flex group flex-col md:flex-row"
//     >
//       {/* Blog Thumbnail */}
//       <div className="lg:w-[292px] w-full h-[300px] max-w-full overflow-hidden">
//         <img
//           className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
//           src={
//             blog.yoast_head_json?.schema?.["@graph"]?.[0]?.thumbnailUrl ||
//             "/default-image.jpg"
//           }
//           alt={blog.title?.rendered || "Blog Thumbnail"}
//         />
//       </div>

//       {/* Blog Content */}
//       <div className="flex flex-col min-h-[250px] justify-between border-[#DDDDDD] border-t lg:border-l-0 border-l border-b border-r w-full lg:w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
//         <div className="flex flex-col gap-[16px]">
//           {/* Category Tag */}
//           <p className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]">
//             {categoryToShow}
//           </p>

//           {/* Blog Title */}
//           <h3
//             className="spotlightheaddd line-clamp-3 fsans-600 text-[20px] text-[#565656]"
//             dangerouslySetInnerHTML={{ __html: blog.title?.rendered }}
//           ></h3>

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
//           className="flex items-center gap-2 lg:pt-0 pt-5"
//         >
//           <div className="w-[30px] group-hover:-rotate-45 transition-transform duration-500 h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//             <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//           </div>
//           <p>Learn More</p>
//         </Link>
//       </div>
//     </Link>
//   );
// };

// export default BlogCard;
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

// const BlogCard = ({ blog, activeTabId }) => {
//   // console.log(blog);

//   let categoryToShow = "Uncategorized";

//   if (activeTabId === null) {
//     if (blog.categories.includes(7)) {
//       categoryToShow = "News";
//     } else if (blog.categories.includes(6)) {
//       categoryToShow = "Blogs";
//     }
//   } else if (activeTabId === 7 && blog.categories.includes(7)) {
//     categoryToShow = "News";
//   } else if (activeTabId === 6 && blog.categories.includes(6)) {
//     categoryToShow = "Blogs";
//   }
//   const formattedDate = blog.date
//     ? new Date(blog.date).toLocaleDateString("en-GB", {
//         day: "numeric",
//         month: "short",
//         year: "numeric",
//       })
//     : "";

//   // ✅ Safe access to featured image
//   const featuredImage =
//     blog?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//     "/default-image.jpg";

//   // Debug log
//   console.log("Blog:", blog.title?.rendered);
//   console.log("Featured Image URL:", featuredImage);

//   return (
//     <Link
//       href={`/blogs/${blog.slug}`}
//       className="flex group flex-col md:flex-row"
//     >
//       {/* Blog Thumbnail */}
//       <div className="lg:w-[292px] w-full h-[300px] max-w-full overflow-hidden">
//         <img
//           className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
//           src={featuredImage}
//           alt={blog.title?.rendered || "Blog Thumbnail"}
//         />
//       </div>

//       {/* Blog Content */}
//       <div className="flex flex-col min-h-[250px] justify-between border-[#DDDDDD] border-t lg:border-l-0 border-l border-b border-r w-full lg:w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
//         <div className="flex flex-col gap-[16px]">
//           <p className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]">
//             {categoryToShow}
//           </p>

//           <h3
//             className="spotlightheaddd line-clamp-3 fsans-600 text-[20px] text-[#565656]"
//             dangerouslySetInnerHTML={{ __html: blog.title?.rendered }}
//           ></h3>

//           {formattedDate && (
//             <p className="fsans-600 text-[16px] text-[#565656]">
//               {formattedDate}
//             </p>
//           )}
//         </div>

//         <Link
//           href={`/blogs/${blog.slug}`}
//           className="flex items-center gap-2 lg:pt-0 pt-5"
//         >
//           <div className="w-[30px] group-hover:-rotate-45 transition-transform duration-500 h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//             <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//           </div>
//           <p>Learn More</p>
//         </Link>
//       </div>
//     </Link>
//   );
// };

// export default BlogCard;
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog, activeTabId }) => {
  const categoryLabels = {
    6: "Blogs",
    7: "News",
  };

  // Ensure category IDs are numbers
  const categoryIds = Array.isArray(blog.categories)
    ? blog.categories.map((id) => Number(id))
    : [];

  // Determine category label
  let categoryToShow = "Uncategorized";
  if (activeTabId === null) {
    if (categoryIds.includes(7)) categoryToShow = "News";
    else if (categoryIds.includes(6)) categoryToShow = "Blogs";
  } else {
    if (categoryIds.includes(activeTabId))
      categoryToShow = categoryLabels[activeTabId] || "Uncategorized";
    else {
      const matched = categoryIds.find((id) => categoryLabels[id]);
      if (matched) categoryToShow = categoryLabels[matched];
    }
  }

  // Determine dynamic path
  let currentPath = "blogs"; // fallback
  if (categoryIds.includes(7)) currentPath = "news";
  else if (categoryIds.includes(6)) currentPath = "blogs";

  const blogHref = `/${currentPath}/${blog.slug}`;

  // Format date
  const formattedDate = blog.date
    ? new Date(blog.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  // Featured image
  const featuredImage =
    blog?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/default-image.jpg";

  return (
    // <Link href={blogHref} className="flex group flex-col md:flex-row">
    <Link
      href={blogHref}
      className="flex group flex-col w-full lg:w-[calc(50%-32.5px)] md:flex-row"
    >
      {/* Blog Thumbnail */}
      <div className="2xl:w-[292px] w-[50%] h-[208.4px] max-w-full overflow-hidden relative">
        <Image
          fill={true}
          className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
          src={featuredImage}
          alt={blog.title?.rendered || "Blog Thumbnail"}
        />
      </div>

      {/* Blog Content */}
      <div className="flex flex-col min-h-[208.4px] 2xl:gap-0 gap-2 2xl:min-h-[250px] justify-between border-[#DDDDDD] border-t lg:border-l-0 border-l border-b border-r w-[50%] 2xl:w-[310px] max-w-full 2xl:pl-[30px] pl-[20px] pr-[20px] py-3 2xl:py-[30px]">
        <div className="flex flex-col gap-2 2xl:gap-2 mb-1">
          <p className="max-w-fit fsans-600 text-[14px] 2xl:text-[16px] leading-[111%] bg-[#F7E327] py-1 2xl:py-[8px] px-2 2xl:px-[12px]">
            {categoryToShow}
          </p>

          <h3
            className="spotlightheaddd line-clamp-2 fsans-600 text-[18px] 2xl:text-[20px] text-[#565656]"
            dangerouslySetInnerHTML={{ __html: blog.title?.rendered }}
          />

          {formattedDate && (
            <p className="fsans-600 text-[16px] text-[#565656]">
              {formattedDate}
            </p>
          )}
        </div>

        <Link href={blogHref} className="flex items-center gap-2 lg:pt-0 pt-5">
          <div className="w-[30px] group-hover:-rotate-45 transition-transform duration-500 h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
            <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
          </div>
          <p>Learn More</p>
        </Link>
      </div>
    </Link>
  );
};

export default BlogCard;
