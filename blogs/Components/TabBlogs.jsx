// "use client";
// import { useState } from "react";
// import BlogCard from "./BlogCard";

// const TabBlogs = ({ blogs }) => {
//   const tabs = [
//     { title: "All", id: null },
//     { title: "News", id: 18 }, // Ensure 18 is correct for News
//     { title: "Blogs", id: 17 },
//     { title: "Press Release", id: 8 },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeTabId = tabs[activeIndex].id; // Get the active tab's ID

//   // Correct filtering logic
//   const blogsToDisplay =
//     activeTabId === null
//       ? blogs // Show all blogs
//       : blogs.filter((blog) =>
//           blog.categories.some((cat) => cat === activeTabId)
//         );

//   return (
//     <>
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">Other Blogs</h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={index}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === index
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => setActiveIndex(index)}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="fix12 py-[70px] grid grid-cols-2 gap-y-[65px]">
//         {blogsToDisplay.length > 0 ? (
//           blogsToDisplay.map((blog) => (
//             <BlogCard key={blog.id} blog={blog} activeTabId={activeTabId} />
//           ))
//         ) : (
//           <p className="text-white text-center col-span-2">
//             No blogs available.
//           </p>
//         )}
//       </div>
//     </>
//   );
// };

// export default TabBlogs;

/////////////// %%%%%%%%%%%%%%%%%%%%
/////////////// %%%%%%%%%%%%%%%%%%%%
/////////////// %%%%%%%%%%%%%%%%%%%%
/////////////// %%%%%%%%%%%%%%%%%%%%
/////////////// %%%%%%%%%%%%%%%%%%%%
/////////////// %%%%%%%%%%%%%%%%%%%%
/////////////// %%%%%%%%%%%%%%%%%%%%

// "use client";
// import { useState } from "react";
// import BlogCard from "./BlogCard";

// const TabBlogs = ({ blogs, bimg }) => {
//   const tabs = [
//     { title: "All", id: null },
//     { title: "News", id: 18 }, // Replace with actual ID from WordPress
//     { title: "Blogs", id: 17 }, // Replace with actual ID from WordPress
//     { title: "Press Release", id: 8 }, // Replace with actual ID from WordPress
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 6;

//   // Filter blogs based on active category
//   const blogsToDisplay =
//     activeIndex === 0
//       ? blogs
//       : blogs.filter((blog) => blog.categories.includes(tabs[activeIndex].id));

//   // Pagination Logic
//   const totalPages = Math.ceil(blogsToDisplay.length / postsPerPage);
//   const startIndex = (currentPage - 1) * postsPerPage;
//   const currentBlogs = blogsToDisplay.slice(
//     startIndex,
//     startIndex + postsPerPage
//   );

//   return (
//     <>
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">Other Blogs</h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={index}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === index
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => {
//                     setActiveIndex(index);
//                     setCurrentPage(1); // Reset to first page when switching tabs
//                   }}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Blog Grid */}
//       <div className="fix12 py-[70px] grid grid-cols-2 gap-y-[65px]">
//         {currentBlogs.length > 0 ? (
//           currentBlogs.map((blog) => (
//             <BlogCard
//               key={blog.id}
//               blog={blog}
//               activeTabId={tabs[activeIndex].id}
//             />
//           ))
//         ) : (
//           <p className="text-white text-center col-span-2">
//             No blogs available.
//           </p>
//         )}
//       </div>

//       {/* Pagination Controls */}
//       {totalPages > 1 && (
//         <div className="flex justify-center gap-2">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               className={`px-4 py-2 border rounded ${
//                 currentPage === index + 1
//                   ? "bg-[#F7E327] text-black"
//                   : "bg-gray-200"
//               }`}
//               onClick={() => setCurrentPage(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default TabBlogs;
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
// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{ SECOND BELOW }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
//
//
//
//
//
//
//
//
//
// "use client";
// import { useState } from "react";
// import BlogCard from "./BlogCard";
// import { motion, AnimatePresence } from "framer-motion";

// const TabBlogs = ({ blogs }) => {
//   // console.log(blogs, "----------");

//   const tabs = [
//     { title: "All", id: null },
//     { title: "News", id: 18 }, // Replace with actual category ID from WordPress
//     { title: "Blogs", id: 17 }, // Replace with actual category ID from WordPress
//     //{ title: "Press Release", id: 8 }, // Replace with actual category ID from WordPress
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 6;

//   // Filter blogs based on active category
//   const blogsToDisplay =
//     activeIndex === 0
//       ? blogs
//       : blogs.filter((blog) => blog.categories.includes(tabs[activeIndex].id));

//   // Pagination Logic
//   const totalPages = Math.ceil(blogsToDisplay.length / postsPerPage);
//   const startIndex = (currentPage - 1) * postsPerPage;
//   const currentBlogs = blogsToDisplay.slice(
//     startIndex,
//     startIndex + postsPerPage
//   );

//   return (
//     <>
//       {/* Tabs Section */}
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">
//             Other Blogs
//           </h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={index}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === index
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => {
//                     setActiveIndex(index);
//                     setCurrentPage(1); // Reset to first page when switching tabs
//                   }}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Blog Grid */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentBlogs.map((id) => id.id)}
//           className="fix12 py-[70px] grid grid-cols-1 lg:grid-cols-2 gap-y-[65px]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//           exit={{
//             opacity: 0,
//             transition: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
//           }}
//         >
//           {currentBlogs.length > 0 ? (
//             currentBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
//           ) : (
//             <p className="text-white text-center col-span-2">
//               No blogs available.
//             </p>
//           )}
//         </motion.div>
//       </AnimatePresence>
//       {/* Pagination Controls */}
//       <div className="pb-[70px]">
//         {totalPages > 1 && (
//           <div className="flex justify-center gap-2">
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index}
//                 className={`px-4 py-2 border rounded ${
//                   currentPage === index + 1
//                     ? "bg-[#F7E327] text-black"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => setCurrentPage(index + 1)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default TabBlogs;
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
// {{{{{{{{{{{{{{{{{{{{{{{{{ SECOND BELOW }}}}}}}}}}}}}}}}}}}}}}}}}
//
//
//
//
//
//
// "use client";
// import { useState } from "react";
// import BlogCard from "./BlogCard";
// import { motion, AnimatePresence } from "framer-motion";

// const TabBlogs = ({ blogs }) => {
//   const tabs = [
//     { title: "All", id: null },
//     { title: "Blogs", id: 17 },
//     { title: "News", id: 18 },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 6;

//   const activeTabId = tabs[activeIndex].id;

//   const blogsToDisplay =
//     activeTabId === null
//       ? blogs
//       : blogs.filter((blog) => blog.categories.includes(activeTabId));

//   const totalPages = Math.ceil(blogsToDisplay.length / postsPerPage);
//   const startIndex = (currentPage - 1) * postsPerPage;
//   const currentBlogs = blogsToDisplay.slice(
//     startIndex,
//     startIndex + postsPerPage
//   );

//   return (
//     <>
//       {/* Tabs */}
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">
//             Other Blogs
//           </h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={index}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === index
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => {
//                     setActiveIndex(index);
//                     setCurrentPage(1);
//                   }}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Blog Grid */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentBlogs.map((id) => id.id).join(",")}
//           className="fix12 py-[70px] grid grid-cols-1 lg:grid-cols-2 gap-y-[65px]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//           exit={{
//             opacity: 0,
//             transition: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
//           }}
//         >
//           {currentBlogs.length > 0 ? (
//             currentBlogs.map((blog) => (
//               <BlogCard key={blog.id} blog={blog} activeTabId={activeTabId} />
//             ))
//           ) : (
//             <p className="text-white text-center col-span-2">
//               No blogs available.
//             </p>
//           )}
//         </motion.div>
//       </AnimatePresence>

//       {/* Pagination */}
//       <div className="pb-[70px]">
//         {totalPages > 1 && (
//           <div className="flex justify-center gap-2">
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index}
//                 className={`px-4 py-2 border rounded ${
//                   currentPage === index + 1
//                     ? "bg-[#F7E327] text-black"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => setCurrentPage(index + 1)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default TabBlogs;
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
// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{ Latest Below }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
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
//
// "use client";
// import { useState } from "react";
// import BlogCard from "./BlogCard";
// import { motion, AnimatePresence } from "framer-motion";

// const PRESS_RELEASES = [
//   {
//     id: 6,
//     title: "KSH INFRA forays into South India",
//     content:
//       "KSH INFRA forays into South India, plans to invest ₹450 Cr. on Hosur logistics park",
//     image: "/press/press1.png",
//     href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-forays-into-south-india-plans-to-invest-rs-450-Cr.-on-hosur-logistics-park/articleshow/112503331.cms?from=mdr",
//     newTab: true,
//   },
//   {
//     id: 7,
//     title: "KSH INFRA to invest ₹450 Cr",
//     content:
//       "KSH INFRA to invest ₹450 Cr. to develop industrial & logistics park in Hosur",
//     image: "/press/press3.png",
//     href: "https://realty.economictimes.indiatimes.com/news/allied-industries/ksh-infra-to-invest-rs-450-crore-to-develop-industrial-logistics-park-in-hosur/112523130",
//     newTab: true,
//   },
//   {
//     id: 8,
//     title: "KSH INFRA To Invest Nearly $54 Mn",
//     content: "KSH INFRA To Invest Nearly $54 Mn In South India Logistics Park",
//     image: "/press/press2.png",
//     href: "https://www.vccircle.com/kshinfra-to-invest-nearly-54-mn-in-south-india-logistics-park",
//     newTab: true,
//   },
// ];

// const PressCard = ({ item }) => (
//   <a
//     href={item.href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex group flex-col md:flex-row"
//   >
//     {/* Thumbnail */}
//     <div className="lg:w-[292px] w-full h-[300px] max-w-full overflow-hidden">
//       <img
//         src={item.image}
//         alt={item.title}
//         className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
//       />
//     </div>

//     {/* Content */}
//     <div className="flex flex-col min-h-[250px] justify-between border-[#DDDDDD] border-t lg:border-l-0 border-l border-b border-r w-full lg:w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
//       <div className="flex flex-col gap-[16px]">
//         {/* Title */}
//         <h3 className="spotlightheaddd line-clamp-3 fsans-600 text-[20px] text-[#565656]">
//           {item.title}
//         </h3>
//         {/* Content */}
//         <p className="text-[#565656]">{item.content}</p>
//       </div>

//       {/* Learn More icon + text */}
//       <div className="flex items-center gap-2">
//         <div className="w-[30px] group-hover:-rotate-45 transition-transform duration-500 h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//           <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//         </div>
//         <p>Learn More</p>
//       </div>
//     </div>
//   </a>
// );

// const TabBlogs = ({ blogs }) => {
//   const tabs = [
//     { title: "All", id: null },
//     { title: "Blogs", id: 17 },
//     { title: "News", id: 18 },
//     { title: "Press Release", id: "press" },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 6;

//   const activeTabId = tabs[activeIndex].id;
//   const isPress = activeTabId === "press";

//   const itemsToDisplay = isPress
//     ? PRESS_RELEASES
//     : activeTabId === null
//     ? blogs
//     : blogs.filter((b) => b.categories.includes(activeTabId));

//   const totalPages = Math.ceil(itemsToDisplay.length / postsPerPage);
//   const startIndex = (currentPage - 1) * postsPerPage;
//   const currentItems = itemsToDisplay.slice(
//     startIndex,
//     startIndex + postsPerPage
//   );

//   return (
//     <>
//       {/* Tabs */}
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">
//             Other Blogs
//           </h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, i) => (
//                 <button
//                   key={i}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === i
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => {
//                     setActiveIndex(i);
//                     setCurrentPage(1);
//                   }}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Grid */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentItems.map((it) => it.id).join(",")}
//           className="fix12 py-[70px] grid grid-cols-1 lg:grid-cols-2 gap-y-[65px]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//           exit={{
//             opacity: 0,
//             transition: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
//           }}
//         >
//           {currentItems.length > 0 ? (
//             currentItems.map((item) =>
//               isPress ? (
//                 <PressCard key={item.id} item={item} />
//               ) : (
//                 <BlogCard key={item.id} blog={item} activeTabId={activeTabId} />
//               )
//             )
//           ) : (
//             <p className="text-white text-center col-span-2">
//               No content available.
//             </p>
//           )}
//         </motion.div>
//       </AnimatePresence>

//       {/* Pagination */}
//       <div className="pb-[70px]">
//         {totalPages > 1 && (
//           <div className="flex justify-center gap-2">
//             {Array.from({ length: totalPages }).map((_, idx) => (
//               <button
//                 key={idx}
//                 className={`px-4 py-2 border rounded ${
//                   currentPage === idx + 1
//                     ? "bg-[#F7E327] text-black"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => setCurrentPage(idx + 1)}
//               >
//                 {idx + 1}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default TabBlogs;
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

// "use client";
// import { useState } from "react";
// import BlogCard from "./BlogCard";
// import { motion, AnimatePresence } from "framer-motion";

// const PRESS_RELEASES = [
//   {
//     id: 6,
//     title: "KSH INFRA forays into South India",
//     content:
//       "KSH INFRA forays into South India, plans to invest ₹450 Cr. on Hosur logistics park",
//     image: "/press/press1.png",
//     href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-forays-into-south-india-plans-to-invest-rs-450-Cr.-on-hosur-logistics-park/articleshow/112503331.cms?from=mdr",
//     newTab: true,
//   },
//   {
//     id: 7,
//     title: "KSH INFRA to invest ₹450 Cr",
//     content:
//       "KSH INFRA to invest ₹450 Cr. to develop industrial & logistics park in Hosur",
//     image: "/press/press3.png",
//     href: "https://realty.economictimes.indiatimes.com/news/allied-industries/ksh-infra-to-invest-rs-450-crore-to-develop-industrial-logistics-park-in-hosur/112523130",
//     newTab: true,
//   },
//   {
//     id: 8,
//     title: "KSH INFRA To Invest Nearly $54 Mn",
//     content: "KSH INFRA To Invest Nearly $54 Mn In South India Logistics Park",
//     image: "/press/press2.png",
//     href: "https://www.vccircle.com/kshinfra-to-invest-nearly-54-mn-in-south-india-logistics-park",
//     newTab: true,
//   },
// ];

// const PressCard = ({ item }) => (
//   <a
//     href={item.href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex group flex-col md:flex-row"
//   >
//     <div className="lg:w-[292px] w-full h-[300px] max-w-full overflow-hidden">
//       <img
//         src={item.image}
//         alt={item.title}
//         className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
//       />
//     </div>

//     <div className="flex flex-col min-h-[250px] justify-between border-[#DDDDDD] border-t lg:border-l-0 border-l border-b border-r w-full lg:w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
//       <div className="flex flex-col gap-[16px]">
//         <h3 className="spotlightheaddd line-clamp-3 fsans-600 text-[20px] text-[#565656]">
//           {item.title}
//         </h3>
//         <p className="text-[#565656]">{item.content}</p>
//       </div>
//       <div className="flex items-center gap-2">
//         <div className="w-[30px] group-hover:-rotate-45 transition-transform duration-500 h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//           <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//         </div>
//         <p>Learn More</p>
//       </div>
//     </div>
//   </a>
// );

// const TabBlogs = ({ blogs }) => {
//   const tabs = [
//     { title: "All", id: null },
//     { title: "Blogs", id: 17 },
//     { title: "News", id: 18 },
//     { title: "Press Release", id: "press" },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 6;

//   const activeTabId = tabs[activeIndex].id;
//   const isPress = activeTabId === "press";

//   // Filter logic
//   const filteredBlogs =
//     activeTabId === null
//       ? blogs
//           .map((blog) => {
//             const isNews = blog.categories.includes(18);
//             const isBlog = blog.categories.includes(17);
//             return isNews
//               ? { ...blog, _priority: 18 }
//               : isBlog
//               ? { ...blog, _priority: 17 }
//               : null;
//           })
//           .filter(Boolean)
//       : blogs.filter((b) => b.categories.includes(activeTabId));

//   const itemsToDisplay = isPress ? PRESS_RELEASES : filteredBlogs;

//   const totalPages = Math.ceil(itemsToDisplay.length / postsPerPage);
//   const startIndex = (currentPage - 1) * postsPerPage;
//   const currentItems = itemsToDisplay.slice(
//     startIndex,
//     startIndex + postsPerPage
//   );

//   return (
//     <>
//       {/* Tabs */}
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">
//             Other Blogs
//           </h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, i) => (
//                 <button
//                   key={i}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === i
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => {
//                     setActiveIndex(i);
//                     setCurrentPage(1);
//                   }}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content Grid */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentItems.map((it) => it.id).join(",")}
//           className="fix12 py-[70px] grid grid-cols-1 lg:grid-cols-2 gap-y-[65px]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//           exit={{
//             opacity: 0,
//             transition: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
//           }}
//         >
//           {currentItems.length > 0 ? (
//             currentItems.map((item) =>
//               isPress ? (
//                 <PressCard key={item.id} item={item} />
//               ) : (
//                 <BlogCard
//                   key={item.id}
//                   blog={item}
//                   activeTabId={activeTabId ?? item._priority}
//                 />
//               )
//             )
//           ) : (
//             <p className="text-white text-center col-span-2">
//               No content available.
//             </p>
//           )}
//         </motion.div>
//       </AnimatePresence>

//       {/* Pagination */}
//       <div className="pb-[70px]">
//         {totalPages > 1 && (
//           <div className="flex justify-center gap-2">
//             {Array.from({ length: totalPages }).map((_, idx) => (
//               <button
//                 key={idx}
//                 className={`px-4 py-2 border rounded ${
//                   currentPage === idx + 1
//                     ? "bg-[#F7E327] text-black"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => setCurrentPage(idx + 1)}
//               >
//                 {idx + 1}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default TabBlogs;
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

// "use client";
// import { useState, useEffect } from "react";
// import BlogCard from "./BlogCard";
// import { motion, AnimatePresence } from "framer-motion";

// const PRESS_RELEASES = [
//   {
//     id: 6,
//     title: "KSH INFRA forays into South India",
//     content:
//       "KSH INFRA forays into South India, plans to invest ₹450 Cr. on Hosur logistics park",
//     image: "/press/press1.png",
//     href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-forays-into-south-india-plans-to-invest-rs-450-Cr.-on-hosur-logistics-park/articleshow/112503331.cms?from=mdr",
//     newTab: true,
//   },
//   {
//     id: 7,
//     title: "KSH INFRA to invest ₹450 Cr",
//     content:
//       "KSH INFRA to invest ₹450 Cr. to develop industrial & logistics park in Hosur",
//     image: "/press/press3.png",
//     href: "https://realty.economictimes.indiatimes.com/news/allied-industries/ksh-infra-to-invest-rs-450-crore-to-develop-industrial-logistics-park-in-hosur/112523130",
//     newTab: true,
//   },
//   {
//     id: 8,
//     title: "KSH INFRA To Invest Nearly $54 Mn",
//     content: "KSH INFRA To Invest Nearly $54 Mn In South India Logistics Park",
//     image: "/press/press2.png",
//     href: "https://www.vccircle.com/kshinfra-to-invest-nearly-54-mn-in-south-india-logistics-park",
//     newTab: true,
//   },
// ];

// const PressCard = ({ item }) => (
//   <a
//     href={item.href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex group flex-col md:flex-row"
//   >
//     <div className="lg:w-[292px] w-full h-[300px] max-w-full overflow-hidden">
//       <img
//         src={item.image}
//         alt={item.title}
//         className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
//       />
//     </div>

//     <div className="flex flex-col min-h-[250px] justify-between border-[#DDDDDD] border-t lg:border-l-0 border-l border-b border-r w-full lg:w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
//       <div className="flex flex-col gap-[16px]">
//         <h3 className="spotlightheaddd line-clamp-3 fsans-600 text-[20px] text-[#565656]">
//           {item.title}
//         </h3>
//         <p className="text-[#565656]">{item.content}</p>
//       </div>
//       <div className="flex items-center gap-2">
//         <div className="w-[30px] group-hover:-rotate-45 transition-transform duration-500 h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//           <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//         </div>
//         <p>Learn More</p>
//       </div>
//     </div>
//   </a>
// );

// const TabBlogs = ({ blogs }) => {
//   const tabs = [
//     { title: "All", id: null },
//     { title: "Blogs", id: 17 },
//     { title: "News", id: 18 },
//     { title: "Press Release", id: "press" },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [newsBlogs, setNewsBlogs] = useState([]);
//   const [loadingNews, setLoadingNews] = useState(false);

//   const postsPerPage = 6;
//   const activeTabId = tabs[activeIndex].id;
//   const isPress = activeTabId === "press";
//   const isNews = activeTabId === 18;

//   // Fetch news blogs when News tab is selected
//   useEffect(() => {
//     if (isNews && newsBlogs.length === 0) {
//       setLoadingNews(true);
//       fetch(
//         `https://www.kshinfra.com/wp-json/wp/v2/posts?categories=18&per_page=100&_embed`
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           setNewsBlogs(data);
//           setLoadingNews(false);
//         })
//         .catch(() => setLoadingNews(false));
//     }
//   }, [isNews]);

//   // Filter logic for All / Blogs
//   const filteredBlogs =
//     activeTabId === null
//       ? blogs
//           .map((blog) => {
//             const isNews = blog.categories.includes(18);
//             const isBlog = blog.categories.includes(17);
//             return isNews
//               ? { ...blog, _priority: 18 }
//               : isBlog
//               ? { ...blog, _priority: 17 }
//               : null;
//           })
//           .filter(Boolean)
//       : activeTabId === 17
//       ? blogs.filter((b) => b.categories.includes(17))
//       : [];

//   const itemsToDisplay = isPress
//     ? PRESS_RELEASES
//     : isNews
//     ? newsBlogs
//     : filteredBlogs;

//   const totalPages = Math.ceil(itemsToDisplay.length / postsPerPage);
//   const startIndex = (currentPage - 1) * postsPerPage;
//   const currentItems = itemsToDisplay.slice(
//     startIndex,
//     startIndex + postsPerPage
//   );

//   return (
//     <>
//       {/* Tabs */}
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">
//             Other Blogs
//           </h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, i) => (
//                 <button
//                   key={i}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === i
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => {
//                     setActiveIndex(i);
//                     setCurrentPage(1);
//                   }}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Content */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentItems.map((it) => it.id).join(",")}
//           className="fix12 py-[70px] grid grid-cols-1 lg:grid-cols-2 gap-y-[65px]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//         >
//           {loadingNews ? (
//             <p className="text-black fsans-600 md:text-[32px] text-[24px] col-span-2 text-center">
//               Loading News...
//             </p>
//           ) : currentItems.length > 0 ? (
//             currentItems.map((item) =>
//               isPress ? (
//                 <PressCard key={item.id} item={item} />
//               ) : (
//                 <BlogCard
//                   key={item.id}
//                   blog={item}
//                   activeTabId={activeTabId ?? item._priority}
//                 />
//               )
//             )
//           ) : (
//             <p className="text-white text-center col-span-2">
//               No content available.
//             </p>
//           )}
//         </motion.div>
//       </AnimatePresence>
//       {/* Pagination */}
//       {/* <div className="pb-[70px]">
//         {totalPages > 1 && (
//           <div className="flex justify-center gap-2">
//             {Array.from({ length: totalPages }).map((_, idx) => (
//               <button
//                 key={idx}
//                 className={`px-4 py-2 border rounded ${
//                   currentPage === idx + 1
//                     ? "bg-[#F7E327] text-black"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => setCurrentPage(idx + 1)}
//               >
//                 {idx + 1}
//               </button>
//             ))}
//           </div>
//         )}
//       </div> */}
//       {/* Pagination */}
//       {totalPages > 1 && currentItems.length > 0 && (
//         <div className="pb-[70px]">
//           <div className="flex justify-center gap-2">
//             {Array.from({ length: totalPages }).map((_, idx) => (
//               <button
//                 key={idx}
//                 className={`px-4 py-2 border rounded ${
//                   currentPage === idx + 1
//                     ? "bg-[#F7E327] text-black"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => setCurrentPage(idx + 1)}
//               >
//                 {idx + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default TabBlogs;
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
//
//
//
//
//
//
//
//
//
// "use client";
// import { useState, useEffect } from "react";
// import BlogCard from "./BlogCard";
// import { motion, AnimatePresence } from "framer-motion";

// const PRESS_RELEASES = [
//   {
//     id: 6,
//     title: "KSH INFRA forays into South India",
//     content:
//       "KSH INFRA forays into South India, plans to invest ₹450 Cr. on Hosur logistics park",
//     image: "/press/press1.png",
//     href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-forays-into-south-india-plans-to-invest-rs-450-Cr.-on-hosur-logistics-park/articleshow/112503331.cms?from=mdr",
//     newTab: true,
//   },
//   {
//     id: 7,
//     title: "KSH INFRA to invest ₹450 Cr",
//     content:
//       "KSH INFRA to invest ₹450 Cr. to develop industrial & logistics park in Hosur",
//     image: "/press/press3.png",
//     href: "https://realty.economictimes.indiatimes.com/news/allied-industries/ksh-infra-to-invest-rs-450-crore-to-develop-industrial-logistics-park-in-hosur/112523130",
//     newTab: true,
//   },
//   {
//     id: 8,
//     title: "KSH INFRA To Invest Nearly $54 Mn",
//     content: "KSH INFRA To Invest Nearly $54 Mn In South India Logistics Park",
//     image: "/press/press2.png",
//     href: "https://www.vccircle.com/kshinfra-to-invest-nearly-54-mn-in-south-india-logistics-park",
//     newTab: true,
//   },
// ];

// const PressCard = ({ item }) => (
//   <a
//     href={item.href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex group flex-col md:flex-row"
//   >
//     <div className="lg:w-[292px] w-full h-[300px] max-w-full overflow-hidden">
//       <img
//         src={item.image}
//         alt={item.title}
//         className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
//       />
//     </div>

//     <div className="flex flex-col min-h-[250px] justify-between border-[#DDDDDD] border-t lg:border-l-0 border-l border-b border-r w-full lg:w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
//       <div className="flex flex-col gap-[16px]">
//         <h3 className="spotlightheaddd line-clamp-3 fsans-600 text-[20px] text-[#565656]">
//           {item.title}
//         </h3>
//         <p className="text-[#565656]">{item.content}</p>
//       </div>
//       <div className="flex items-center gap-2">
//         <div className="w-[30px] group-hover:-rotate-45 transition-transform duration-500 h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//           <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//         </div>
//         <p>Learn More</p>
//       </div>
//     </div>
//   </a>
// );

// const TabBlogs = ({ blogs }) => {
//   const tabs = [
//     { title: "All", id: null },
//     { title: "Blogs", id: 17 },
//     { title: "News", id: 18 },
//     { title: "Press Release", id: "press" },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [newsBlogs, setNewsBlogs] = useState([]);
//   const [loadingNews, setLoadingNews] = useState(false);

//   const postsPerPage = 6;
//   const activeTabId = tabs[activeIndex].id;
//   const isPress = activeTabId === "press";
//   const isNews = activeTabId === 18;

//   useEffect(() => {
//     let intervalId;

//     const fetchNews = async () => {
//       try {
//         const res = await fetch(
//           `https://www.kshinfra.com/wp-json/wp/v2/posts?categories=18&per_page=100&_embed`
//         );
//         if (!res.ok) throw new Error("Failed to fetch");
//         const data = await res.json();
//         setNewsBlogs(data);
//         setLoadingNews(false);
//         clearInterval(intervalId);
//       } catch (err) {
//         console.warn("News fetch failed, will retry..");
//         setLoadingNews(false);
//       }
//     };

//     if (isNews && newsBlogs.length === 0) {
//       setLoadingNews(true);
//       fetchNews();
//       intervalId = setInterval(fetchNews, 10000); // Retry every 10s
//     }

//     return () => clearInterval(intervalId);
//   }, [isNews, newsBlogs.length]);

//   const filteredBlogs =
//     activeTabId === null
//       ? blogs
//           .map((blog) => {
//             const isNews = blog.categories.includes(18);
//             const isBlog = blog.categories.includes(17);
//             return isNews
//               ? { ...blog, _priority: 18 }
//               : isBlog
//               ? { ...blog, _priority: 17 }
//               : null;
//           })
//           .filter(Boolean)
//       : activeTabId === 17
//       ? blogs.filter((b) => b.categories.includes(17))
//       : [];

//   const itemsToDisplay = isPress
//     ? PRESS_RELEASES
//     : isNews
//     ? newsBlogs
//     : filteredBlogs;

//   const totalPages = Math.ceil(itemsToDisplay.length / postsPerPage);
//   const startIndex = (currentPage - 1) * postsPerPage;
//   const currentItems = itemsToDisplay.slice(
//     startIndex,
//     startIndex + postsPerPage
//   );

//   return (
//     <>
//       {/* Tabs */}
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">
//             Other Blogs
//           </h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, i) => (
//                 <button
//                   key={i}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === i
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => {
//                     setActiveIndex(i);
//                     setCurrentPage(1);
//                   }}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentItems.map((it) => it.id).join(",")}
//           className="fix12 py-[70px] grid grid-cols-1 lg:grid-cols-2 gap-y-[65px]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//         >
//           {loadingNews ? (
//             <p className="text-black fsans-600 md:text-[32px] text-[24px] col-span-2 text-center">
//               Loading News...
//             </p>
//           ) : currentItems.length > 0 ? (
//             currentItems.map((item) =>
//               isPress ? (
//                 <PressCard key={item.id} item={item} />
//               ) : (
//                 <BlogCard
//                   key={item.id}
//                   blog={item}
//                   activeTabId={activeTabId ?? item._priority}
//                 />
//               )
//             )
//           ) : (
//             <p className="text-white text-center col-span-2">
//               No content available.
//             </p>
//           )}
//         </motion.div>
//       </AnimatePresence>

//       {/* Pagination */}
//       {totalPages > 1 && currentItems.length > 0 && (
//         <div className="pb-[70px]">
//           <div className="flex justify-center gap-2">
//             {Array.from({ length: totalPages }).map((_, idx) => (
//               <button
//                 key={idx}
//                 className={`px-4 py-2 border rounded ${
//                   currentPage === idx + 1
//                     ? "bg-[#F7E327] text-black"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => setCurrentPage(idx + 1)}
//               >
//                 {idx + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default TabBlogs;
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
// "use client";
// import { useState, useEffect } from "react";
// import BlogCard from "./BlogCard";
// import { motion, AnimatePresence } from "framer-motion";

// const PRESS_RELEASES = [
//   {
//     id: 6,
//     title: "KSH INFRA forays into South India",
//     content:
//       "KSH INFRA forays into South India, plans to invest ₹450 Cr. on Hosur logistics park",
//     image: "/press/press1.png",
//     href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-forays-into-south-india-plans-to-invest-rs-450-Cr.-on-hosur-logistics-park/articleshow/112503331.cms?from=mdr",
//     newTab: true,
//   },
//   {
//     id: 7,
//     title: "KSH INFRA to invest ₹450 Cr",
//     content:
//       "KSH INFRA to invest ₹450 Cr. to develop industrial & logistics park in Hosur",
//     image: "/press/press3.png",
//     href: "https://realty.economictimes.indiatimes.com/news/allied-industries/ksh-infra-to-invest-rs-450-crore-to-develop-industrial-logistics-park-in-hosur/112523130",
//     newTab: true,
//   },
//   {
//     id: 8,
//     title: "KSH INFRA To Invest Nearly $54 Mn",
//     content: "KSH INFRA To Invest Nearly $54 Mn In South India Logistics Park",
//     image: "/press/press2.png",
//     href: "https://www.vccircle.com/kshinfra-to-invest-nearly-54-mn-in-south-india-logistics-park",
//     newTab: true,
//   },
// ];

// const PressCard = ({ item }) => (
//   <a
//     href={item.href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex group flex-col md:flex-row"
//   >
//     <div className="lg:w-[292px] w-full h-[300px] max-w-full overflow-hidden">
//       <img
//         src={item.image}
//         alt={item.title}
//         className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
//       />
//     </div>

//     <div className="flex flex-col min-h-[250px] justify-between border-[#DDDDDD] border-t lg:border-l-0 border-l border-b border-r w-full lg:w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
//       <div className="flex flex-col gap-[16px]">
//         <h3 className="spotlightheaddd line-clamp-3 fsans-600 text-[20px] text-[#565656]">
//           {item.title}
//         </h3>
//         <p className="text-[#565656]">{item.content}</p>
//       </div>
//       <div className="flex items-center gap-2">
//         <div className="w-[30px] group-hover:-rotate-45 transition-transform duration-500 h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//           <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//         </div>
//         <p>Learn More</p>
//       </div>
//     </div>
//   </a>
// );

// const TabBlogs = ({ blogs }) => {
//   const tabs = [
//     { title: "All", id: null },
//     { title: "Blogs", id: 17 },
//     { title: "News", id: 18 },
//     { title: "Press Release", id: "press" },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [newsBlogs, setNewsBlogs] = useState([]);
//   const [loadingNews, setLoadingNews] = useState(false);
//   const [loadingBlogs, setLoadingBlogs] = useState(false);

//   const postsPerPage = 6;
//   const activeTabId = tabs[activeIndex].id;
//   const isPress = activeTabId === "press";
//   const isNews = activeTabId === 18;
//   const isBlogsTab = activeTabId === 17 || activeTabId === null;

//   useEffect(() => {
//     let intervalId;

//     const fetchNews = async () => {
//       try {
//         const res = await fetch(
//           `https://www.kshinfra.com/wp-json/wp/v2/posts?categories=18&per_page=100&_embed`
//         );
//         if (!res.ok) throw new Error("Failed to fetch");
//         const data = await res.json();
//         setNewsBlogs(data);
//         setLoadingNews(false);
//         clearInterval(intervalId);
//       } catch (err) {
//         console.warn("News fetch failed, will retry..");
//         setLoadingNews(false);
//       }
//     };

//     if (isNews && newsBlogs.length === 0) {
//       setLoadingNews(true);
//       fetchNews();
//       intervalId = setInterval(fetchNews, 10000); // Retry every 10s
//     }

//     return () => clearInterval(intervalId);
//   }, [isNews, newsBlogs.length]);

//   const filteredBlogs =
//     activeTabId === null
//       ? blogs
//           .map((blog) => {
//             const isNews = blog.categories.includes(18);
//             const isBlog = blog.categories.includes(17);
//             return isNews
//               ? { ...blog, _priority: 18 }
//               : isBlog
//               ? { ...blog, _priority: 17 }
//               : null;
//           })
//           .filter(Boolean)
//       : activeTabId === 17
//       ? blogs.filter((b) => b.categories.includes(17))
//       : [];

//   const itemsToDisplay = isPress
//     ? PRESS_RELEASES
//     : isNews
//     ? newsBlogs
//     : filteredBlogs;

//   const totalPages = Math.ceil(itemsToDisplay.length / postsPerPage);
//   const startIndex = (currentPage - 1) * postsPerPage;
//   const currentItems = itemsToDisplay.slice(
//     startIndex,
//     startIndex + postsPerPage
//   );

//   const showLoading =
//     (isNews && loadingNews) || (isBlogsTab && blogs.length === 0);

//   return (
//     <>
//       {/* Tabs */}
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">
//             Other Blogs
//           </h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, i) => (
//                 <button
//                   key={i}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === i
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => {
//                     setActiveIndex(i);
//                     setCurrentPage(1);
//                   }}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentItems.map((it) => it.id).join(",")}
//           className="fix12 py-[70px] grid grid-cols-1 lg:grid-cols-2 gap-y-[65px]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//         >
//           {showLoading ? (
//             <p className="text-black fsans-600 md:text-[32px] text-[24px] col-span-2 text-center">
//               {isNews ? "Loading News.." : "Loading.."}
//             </p>
//           ) : currentItems.length > 0 ? (
//             currentItems.map((item) =>
//               isPress ? (
//                 <PressCard key={item.id} item={item} />
//               ) : (
//                 <BlogCard
//                   key={item.id}
//                   blog={item}
//                   activeTabId={activeTabId ?? item._priority}
//                 />
//               )
//             )
//           ) : (
//             <p className="text-white text-center col-span-2">
//               No content available.
//             </p>
//           )}
//         </motion.div>
//       </AnimatePresence>

//       {/* Pagination */}
//       {totalPages > 1 && currentItems.length > 0 && (
//         <div className="pb-[70px]">
//           <div className="flex justify-center gap-2">
//             {Array.from({ length: totalPages }).map((_, idx) => (
//               <button
//                 key={idx}
//                 className={`px-4 py-2 border rounded ${
//                   currentPage === idx + 1
//                     ? "bg-[#F7E327] text-black"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => setCurrentPage(idx + 1)}
//               >
//                 {idx + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default TabBlogs;
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
// "use client";
// import { useState, useEffect } from "react";
// import BlogCard from "./BlogCard";
// import { motion, AnimatePresence } from "framer-motion";

// const PRESS_RELEASES = [
//   {
//     id: 6,
//     title: "KSH INFRA forays into South India",
//     content:
//       "KSH INFRA forays into South India, plans to invest ₹450 Cr. on Hosur logistics park",
//     image: "/press/press1.png",
//     href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-forays-into-south-india-plans-to-invest-rs-450-Cr.-on-hosur-logistics-park/articleshow/112503331.cms?from=mdr",
//     newTab: true,
//   },
//   {
//     id: 7,
//     title: "KSH INFRA to invest ₹450 Cr",
//     content:
//       "KSH INFRA to invest ₹450 Cr. to develop industrial & logistics park in Hosur",
//     image: "/press/press3.png",
//     href: "https://realty.economictimes.indiatimes.com/news/allied-industries/ksh-infra-to-invest-rs-450-crore-to-develop-industrial-logistics-park-in-hosur/112523130",
//     newTab: true,
//   },
//   {
//     id: 8,
//     title: "KSH INFRA To Invest Nearly $54 Mn",
//     content: "KSH INFRA To Invest Nearly $54 Mn In South India Logistics Park",
//     image: "/press/press2.png",
//     href: "https://www.vccircle.com/kshinfra-to-invest-nearly-54-mn-in-south-india-logistics-park",
//     newTab: true,
//   },
// ];

// const PressCard = ({ item }) => (
//   <a
//     href={item.href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex group flex-col md:flex-row"
//   >
//     <div className="lg:w-[292px] w-full h-[300px] max-w-full overflow-hidden">
//       <img
//         src={item.image}
//         alt={item.title}
//         className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
//       />
//     </div>

//     <div className="flex flex-col min-h-[250px] justify-between border-[#DDDDDD] border-t lg:border-l-0 border-l border-b border-r w-full lg:w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
//       <div className="flex flex-col gap-[16px]">
//         <h3 className="spotlightheaddd line-clamp-3 fsans-600 text-[20px] text-[#565656]">
//           {item.title}
//         </h3>
//         <p className="text-[#565656]">{item.content}</p>
//       </div>
//       <div className="flex items-center gap-2">
//         <div className="w-[30px] group-hover:-rotate-45 transition-transform duration-500 h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//           <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//         </div>
//         <p>Learn More</p>
//       </div>
//     </div>
//   </a>
// );

// const TabBlogs = ({ blogs, loadingOverride = false }) => {
//   const tabs = [
//     { title: "All", id: null },
//     { title: "Blogs", id: 17 },
//     { title: "News", id: 18 },
//     { title: "Press Release", id: "press" },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [newsBlogs, setNewsBlogs] = useState([]);
//   const [loadingNews, setLoadingNews] = useState(false);

//   const postsPerPage = 6;
//   const activeTabId = tabs[activeIndex].id;
//   const isPress = activeTabId === "press";
//   const isNews = activeTabId === 18;
//   const isBlogsTab = activeTabId === 17 || activeTabId === null;

//   useEffect(() => {
//     let intervalId;

//     const fetchNews = async () => {
//       try {
//         const res = await fetch(
//           `https://www.kshinfra.com/wp-json/wp/v2/posts?categories=18&per_page=100&_embed`
//         );
//         if (!res.ok) throw new Error("Failed to fetch");
//         const data = await res.json();
//         setNewsBlogs(data);
//         setLoadingNews(false);
//         clearInterval(intervalId);
//       } catch (err) {
//         console.warn("News fetch failed, will retry..");
//         setLoadingNews(false);
//       }
//     };

//     if (isNews && newsBlogs.length === 0) {
//       setLoadingNews(true);
//       fetchNews();
//       intervalId = setInterval(fetchNews, 10000);
//     }

//     return () => clearInterval(intervalId);
//   }, [isNews, newsBlogs.length]);

//   const filteredBlogs =
//     activeTabId === null
//       ? blogs
//           .map((blog) => {
//             const isNews = blog.categories.includes(18);
//             const isBlog = blog.categories.includes(17);
//             return isNews
//               ? { ...blog, _priority: 18 }
//               : isBlog
//               ? { ...blog, _priority: 17 }
//               : null;
//           })
//           .filter(Boolean)
//       : activeTabId === 17
//       ? blogs.filter((b) => b.categories.includes(17))
//       : [];

//   const itemsToDisplay = isPress
//     ? PRESS_RELEASES
//     : isNews
//     ? newsBlogs
//     : filteredBlogs;

//   const totalPages = Math.ceil(itemsToDisplay.length / postsPerPage);
//   const startIndex = (currentPage - 1) * postsPerPage;
//   const currentItems = itemsToDisplay.slice(
//     startIndex,
//     startIndex + postsPerPage
//   );

//   const showLoading =
//     loadingOverride ||
//     (isNews && loadingNews) ||
//     (isBlogsTab && blogs.length === 0);

//   return (
//     <>
//       {/* Tabs */}
//       <div className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">
//             Other Blogs
//           </h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, i) => (
//                 <button
//                   key={i}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === i
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => {
//                     setActiveIndex(i);
//                     setCurrentPage(1);
//                   }}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={
//             activeIndex +
//             "-" +
//             currentItems.map((it) => it.id).join(",") +
//             "-" +
//             showLoading
//           }
//           className="fix12 py-[70px] grid grid-cols-1 lg:grid-cols-2 gap-y-[65px]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//         >
//           {showLoading ? (
//             <p className="text-black fsans-600 md:text-[32px] text-[24px] col-span-2 text-center">
//               {isNews ? "Loading News.." : "Loading.."}
//             </p>
//           ) : currentItems.length > 0 ? (
//             currentItems.map((item) =>
//               isPress ? (
//                 <PressCard key={item.id} item={item} />
//               ) : (
//                 <BlogCard
//                   key={item.id}
//                   blog={item}
//                   activeTabId={activeTabId ?? item._priority}
//                 />
//               )
//             )
//           ) : (
//             <p className="text-white text-center col-span-2">
//               No content available.
//             </p>
//           )}
//         </motion.div>
//       </AnimatePresence>

//       {/* Pagination */}
//       {!showLoading && totalPages > 1 && currentItems.length > 0 && (
//         <div className="pb-[70px]">
//           <div className="flex justify-center gap-2">
//             {Array.from({ length: totalPages }).map((_, idx) => (
//               <button
//                 key={idx}
//                 className={`px-4 py-2 border rounded ${
//                   currentPage === idx + 1
//                     ? "bg-[#F7E327] text-black"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => setCurrentPage(idx + 1)}
//               >
//                 {idx + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default TabBlogs;
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
"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // ✅ import this
import ContentCard from "./ContentCard";
import { motion, AnimatePresence } from "framer-motion";
import { useTab } from "../../context/TabContext"; // <-- Add this line

const PRESS_RELEASES = [
  {
    id: 1,
    title: "KSH INFRA to Invest ₹550 Cr. in Tamil Nadu Park",
    content: "KSH INFRA to Invest ₹550 Cr. in Tamil Nadu Park",
    image: "/press/press6.webp",
    href: "https://www.constructionworld.in/urban-infrastructure/warehouse-and-logistics/ksh-infra-to-invest-rs-5.5-billion-in-tamil-nadu-park/76359",
    newTab: true,
    date: "17 Jul 2025",
  },
  {
    id: 2,
    title:
      "KSH INFRA to invest ₹550 Cr. in second industrial park in Tamil Nadu",
    content:
      "KSH INFRA to invest ₹550 Cr. in second industrial park in Tamil Nadu",
    image: "/press/press4.png",
    href: "https://manufacturing.economictimes.indiatimes.com/news/industry/ksh-infra-to-invest-550-crore-in-second-industrial-park-in-tamil-nadu/122437140",
    newTab: true,
    date: "14 Jul 2025",
  },
  {
    id: 3,
    title:
      "KSH INFRA to invest ₹550 Cr. in second industrial & logistics park in Sriperumbudur",
    content:
      "KSH INFRA to invest ₹550 Cr. in second industrial & logistics park in Sriperumbudur",
    image: "/press/press5.webp",
    href: "https://www.thehindubusinessline.com/companies/ksh-infra-to-invest-550-cr-in-second-industrial-logistics-park-in-sriperumbudur/article69807276.ece",
    newTab: true,
    date: "13 Jul 2025",
  },
  {
    id: 4,
    title:
      "KSH INFRA ₹1000 Cr. Expansion in Tamil Nadu Industrial & Logistics Space",
    content:
      "KSH INFRA ₹1000 Cr. Expansion in Tamil Nadu Industrial & Logistics Space",
    image: "/press/press7.webp",
    href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-to-invest-over-rs-550-crore-in-60-acre-logistics-park-in-tamil-nadu/articleshow/122392746.cms?from=mdr",
    newTab: true,
    date: "11 Jul 2025",
  },
  {
    id: 5,
    title: "KSH INFRA to invest ₹450 Cr",
    image: "/press/press3.png",
    href: "https://realty.economictimes.indiatimes.com/news/allied-industries/ksh-infra-to-invest-rs-450-crore-to-develop-industrial-logistics-park-in-hosur/112523130",
    newTab: true,
    date: "14 Aug 2024",
  },
  {
    id: 6,
    title: "KSH INFRA To Invest Nearly $54 Mn",
    image: "/press/press2.png",
    href: "https://www.vccircle.com/kshinfra-to-invest-nearly-54-mn-in-south-india-logistics-park",
    newTab: true,
    date: "14 Aug 2024",
  },
  {
    id: 7,
    title: "KSH INFRA forays into South India",
    image: "/press/press1.png",
    href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-forays-into-south-india-plans-to-invest-rs-450-Cr.-on-hosur-logistics-park/articleshow/112503331.cms?from=mdr",
    newTab: true,
    date: "13 Aug 2024",
  },
];
const TabBlogs = ({ blogs, loadingOverride = false }) => {
  const { tab } = useTab(); // <-- context here
  const searchParams = useSearchParams(); // ✅
  const tabs = [
    { title: "All", id: null },
    { title: "Blogs", id: 17 },
    { title: "News", id: 18 },
    { title: "Press Release", id: "press" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsBlogs, setNewsBlogs] = useState([]);
  const [loadingNews, setLoadingNews] = useState(false);

  const postsPerPage = 6;
  const activeTabId = tabs[activeIndex].id;
  const isPress = activeTabId === "press";
  const isNews = activeTabId === 18;
  const isBlogsTab = activeTabId === 17 || activeTabId === null;

  useEffect(() => {
    const urlTab = searchParams.get("tab");

    if (tab === "news" || urlTab === "news") {
      setActiveIndex(2);
      setLoadingNews(true); // ✅ Trigger loading early
    } else if (tab === "press" || urlTab === "press") {
      setActiveIndex(3);
    } else if (tab === "blogs" || urlTab === "blogs") {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }

    setCurrentPage(1); // ✅ Reset pagination
  }, [tab, searchParams]);

  useEffect(() => {
    let intervalId;

    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?categories=18&per_page=100&_embed`,
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setNewsBlogs(data);
        setLoadingNews(false);
        clearInterval(intervalId);
      } catch (err) {
        console.warn("News fetch failed, will retry..");
        setLoadingNews(false);
      }
    };

    if (isNews) {
      setLoadingNews(true); // ✅ Always set loading
      fetchNews();
      intervalId = setInterval(fetchNews, 10000);
    }

    return () => clearInterval(intervalId);
  }, [isNews]);

  const filteredBlogs =
    activeTabId === null
      ? blogs
          .map((blog) => {
            const isNews = blog.categories.includes(18);
            const isBlog = blog.categories.includes(17);
            return isNews
              ? { ...blog, _priority: 18 }
              : isBlog
                ? { ...blog, _priority: 17 }
                : null;
          })
          .filter(Boolean)
      : activeTabId === 17
        ? blogs.filter((b) => b.categories.includes(17))
        : [];

  const itemsToDisplay = isPress
    ? PRESS_RELEASES
    : isNews
      ? newsBlogs
      : filteredBlogs;

  const totalPages = Math.ceil(itemsToDisplay.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentItems = itemsToDisplay.slice(
    startIndex,
    startIndex + postsPerPage,
  );

  const showLoading =
    loadingOverride ||
    (isNews && loadingNews) ||
    (isBlogsTab && blogs.length === 0);

  return (
    <>
      {/* Tabs */}
      <div id="tabsection" className="w-full bg-[#092241]">
        <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
          <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">
            Other Blogs
          </h2>
          <div>
            <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
                    activeIndex === i
                      ? "text-[#F7E327] border-b-2 border-[#F7E327]"
                      : "text-white hover:text-gray-300"
                  }`}
                  onClick={() => {
                    setActiveIndex(i);
                    setCurrentPage(1);
                  }}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={
            activeIndex +
            "-" +
            currentItems.map((it) => it.id).join(",") +
            "-" +
            showLoading
          }
          className="fix12 py-[70px] grid grid-cols-1 lg:grid-cols-2 md:gap-y-[65px] gap-y-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
        >
          {showLoading ? (
            <p className="text-black fsans-600 md:text-[32px] text-[24px] col-span-2 text-center w-full">
              {isNews ? "Loading News..." : "Loading..."}
            </p>
          ) : currentItems.length > 0 ? (
            currentItems.map((item) =>
              isPress ? (
                <ContentCard key={item.id} item={item} type="press" />
              ) : (
                <ContentCard
                  key={item.id}
                  item={item}
                  activeTabId={activeTabId ?? item._priority}
                />
              ),
            )
          ) : (
            <p className="text-white text-center col-span-2">
              No content available.
            </p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      {!showLoading && totalPages > 1 && currentItems.length > 0 && (
        <div className="pb-[70px]">
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 border rounded ${
                  currentPage === idx + 1
                    ? "bg-[#F7E327] text-black"
                    : "bg-gray-200"
                }`}
                onClick={() => setCurrentPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TabBlogs;

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
//
// "use client";
// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation"; // ✅ import this
// import BlogCard from "./BlogCard";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNews } from "../../context/NewsContext";
// import { useTab } from "../../context/TabContext"; // <-- Add this line

// const PRESS_RELEASES = [
//   {
//     id: 6,
//     title: "KSH INFRA forays into South India",
//     content:
//       "KSH INFRA forays into South India, plans to invest ₹450 Cr. on Hosur logistics park",
//     image: "/press/press1.png",
//     href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-forays-into-south-india-plans-to-invest-rs-450-Cr.-on-hosur-logistics-park/articleshow/112503331.cms?from=mdr",
//     newTab: true,
//   },
//   {
//     id: 7,
//     title: "KSH INFRA to invest ₹450 Cr",
//     content:
//       "KSH INFRA to invest ₹450 Cr. to develop industrial & logistics park in Hosur",
//     image: "/press/press3.png",
//     href: "https://realty.economictimes.indiatimes.com/news/allied-industries/ksh-infra-to-invest-rs-450-crore-to-develop-industrial-logistics-park-in-hosur/112523130",
//     newTab: true,
//   },
//   {
//     id: 8,
//     title: "KSH INFRA To Invest Nearly $54 Mn",
//     content: "KSH INFRA To Invest Nearly $54 Mn In South India Logistics Park",
//     image: "/press/press2.png",
//     href: "https://www.vccircle.com/kshinfra-to-invest-nearly-54-mn-in-south-india-logistics-park",
//     newTab: true,
//   },
// ];
// const PressCard = ({ item }) => (
//   <a
//     href={item.href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex group flex-col md:flex-row"
//   >
//     <div className="lg:w-[292px] w-full h-[300px] max-w-full overflow-hidden">
//       <img
//         src={item.image}
//         alt={item.title}
//         className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
//       />
//     </div>
//     <div className="flex flex-col min-h-[250px] justify-between border-[#DDDDDD] border-t lg:border-l-0 border-l border-b border-r w-full lg:w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
//       <div className="flex flex-col gap-[16px]">
//         <h3 className="spotlightheaddd line-clamp-3 fsans-600 text-[20px] text-[#565656]">
//           {item.title}
//         </h3>
//         <p className="text-[#565656]">{item.content}</p>
//       </div>
//       <div className="flex items-center gap-2">
//         <div className="w-[30px] group-hover:-rotate-45 transition-transform duration-500 h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
//           <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
//         </div>
//         <p>Learn More</p>
//       </div>
//     </div>
//   </a>
// );

// const TabBlogs = ({ blogs, loadingOverride = false }) => {
//   const { tab } = useTab(); // <-- context here
//   const searchParams = useSearchParams(); // ✅
//   const tabs = [
//     { title: "All", id: null },
//     { title: "Blogs", id: 17 },
//     { title: "News", id: 18 },
//     { title: "Press Release", id: "press" },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const { loadingNews, setLoadingNews, newsBlogs, setNewsBlogs } = useNews();

//   const postsPerPage = 6;
//   const activeTabId = tabs[activeIndex].id;
//   const isPress = activeTabId === "press";
//   const isNews = activeTabId === 18;
//   const isBlogsTab = activeTabId === 17 || activeTabId === null;

//   useEffect(() => {
//     const urlTab = searchParams.get("tab");

//     if (tab === "news" || urlTab === "news") {
//       setActiveIndex(2);
//       setLoadingNews(true); // ✅ Trigger loading early
//     } else if (tab === "press" || urlTab === "press") {
//       setActiveIndex(3);
//     } else if (tab === "blogs" || urlTab === "blogs") {
//       setActiveIndex(1);
//     } else {
//       setActiveIndex(0);
//     }

//     setCurrentPage(1); // ✅ Reset pagination
//   }, [tab, searchParams]);

//   useEffect(() => {
//     let intervalId;

//     const fetchNews = async () => {
//       try {
//         const res = await fetch(
//           `https://www.kshinfra.com/wp-json/wp/v2/posts?categories=18&per_page=100&_embed`
//         );
//         if (!res.ok) throw new Error("Failed to fetch");
//         const data = await res.json();
//         setNewsBlogs(data);
//         setLoadingNews(false);
//         clearInterval(intervalId);
//       } catch (err) {
//         console.warn("News fetch failed, will retry..");
//         setLoadingNews(false);
//       }
//     };

//     if (isNews) {
//       setLoadingNews(true); // ✅ Always set loading
//       fetchNews();
//       intervalId = setInterval(fetchNews, 10000);
//     }

//     return () => clearInterval(intervalId);
//   }, [isNews]);

//   const filteredBlogs =
//     activeTabId === null
//       ? blogs
//           .map((blog) => {
//             const isNews = blog.categories.includes(18);
//             const isBlog = blog.categories.includes(17);
//             return isNews
//               ? { ...blog, _priority: 18 }
//               : isBlog
//               ? { ...blog, _priority: 17 }
//               : null;
//           })
//           .filter(Boolean)
//       : activeTabId === 17
//       ? blogs.filter((b) => b.categories.includes(17))
//       : [];

//   const itemsToDisplay = isPress
//     ? PRESS_RELEASES
//     : isNews
//     ? newsBlogs
//     : filteredBlogs;

//   const totalPages = Math.ceil(itemsToDisplay.length / postsPerPage);
//   const startIndex = (currentPage - 1) * postsPerPage;
//   const currentItems = itemsToDisplay.slice(
//     startIndex,
//     startIndex + postsPerPage
//   );

//   const showLoading =
//     loadingOverride ||
//     (isNews && loadingNews) ||
//     (isBlogsTab && blogs.length === 0);

//   return (
//     <>
//       {/* Tabs */}
//       <div id="tabsection" className="w-full bg-[#092241]">
//         <div className="fix12 pt-[50px] flex flex-col gap-[60px] pb-[30px]">
//           <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">
//             Other Blogs
//           </h2>
//           <div>
//             <div className="fix12 flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
//               {tabs.map((tab, i) => (
//                 <button
//                   key={i}
//                   className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
//                     activeIndex === i
//                       ? "text-[#F7E327] border-b-2 border-[#F7E327]"
//                       : "text-white hover:text-gray-300"
//                   }`}
//                   onClick={() => {
//                     setActiveIndex(i);
//                     setCurrentPage(1);
//                   }}
//                 >
//                   {tab.title}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={
//             activeIndex +
//             "-" +
//             currentItems.map((it) => it.id).join(",") +
//             "-" +
//             showLoading
//           }
//           className="fix12 py-[70px] grid grid-cols-1 lg:grid-cols-2 gap-y-[65px]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//         >
//           {showLoading ? (
//             <p className="text-black fsans-600 md:text-[32px] text-[24px] col-span-2 text-center">
//               {isNews ? "Loading News.." : "Loading.."}
//             </p>
//           ) : currentItems.length > 0 ? (
//             currentItems.map((item) =>
//               isPress ? (
//                 <PressCard key={item.id} item={item} />
//               ) : (
//                 <BlogCard
//                   key={item.id}
//                   blog={item}
//                   activeTabId={activeTabId ?? item._priority}
//                 />
//               )
//             )
//           ) : (
//             <p className="text-white text-center col-span-2">
//               No content available.
//             </p>
//           )}
//         </motion.div>
//       </AnimatePresence>

//       {/* Pagination */}
//       {!showLoading && totalPages > 1 && currentItems.length > 0 && (
//         <div className="pb-[70px]">
//           <div className="flex justify-center gap-2">
//             {Array.from({ length: totalPages }).map((_, idx) => (
//               <button
//                 key={idx}
//                 className={`px-4 py-2 border rounded ${
//                   currentPage === idx + 1
//                     ? "bg-[#F7E327] text-black"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => setCurrentPage(idx + 1)}
//               >
//                 {idx + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default TabBlogs;
