// "use client";

// import { useEffect, useState } from "react";
// import SlideBlog from "./SlideBlog";
// import TabBlogs from "./TabBlogs";
// import { motion } from "framer-motion";

// const fetchBlogByPage = async (page = 1) => {
//   try {
//     const resp = await fetch(
//       `https://www.kshinfra.com/wp-json/wp/v2/posts?per_page=31&page=${page}`
//     );

//     if (!resp.ok) return { data: [], totalPages: 0 };

//     const data = await resp.json();
//     const totalPages = parseInt(resp.headers.get("X-WP-TotalPages") || "1", 10);

//     return { data, totalPages };
//   } catch {
//     return { data: [], totalPages: 0 };
//   }
// };

// export default function BlogsLoader({ currentPage }) {
//   const [blogs, setBlogs] = useState([]);
//   const [totalPages, setTotalPages] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     fetchBlogByPage(currentPage).then(({ data, totalPages }) => {
//       setBlogs(data);
//       setTotalPages(totalPages);
//       setLoading(false);
//     });
//   }, [currentPage]);

//   if (loading) {
//     return (
//       <p className="text-black fsans-600 md:text-[32px] text-[24px] py-20 col-span-2 text-center">
//         Loading Posts...
//       </p>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//     >
//       <SlideBlog blogs={blogs.slice(0, 4)} />
//       <TabBlogs blogs={blogs} totalPages={totalPages} />
//     </motion.div>
//   );
// }
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

// import { useEffect, useState } from "react";
// import SlideBlog from "./SlideBlog";
// import TabBlogs from "./TabBlogs";
// import { motion } from "framer-motion";
// import { useBlogContext } from "../../context/BlogContext";

// const fetchBlogByPage = async (page = 1) => {
//   try {
//     const resp = await fetch(
//       `https://www.kshinfra.com/wp-json/wp/v2/posts?per_page=31&page=${page}`
//     );
//     if (!resp.ok) return { data: [], totalPages: 0 };
//     const data = await resp.json();
//     const totalPages = parseInt(resp.headers.get("X-WP-TotalPages") || "1", 10);
//     return { data, totalPages };
//   } catch {
//     return { data: [], totalPages: 0 };
//   }
// };

// export default function BlogsLoader({ currentPage }) {
//   const { blogs, setBlogs, totalPages, setTotalPages } = useBlogContext();
//   const [loading, setLoading] = useState(blogs.length === 0);

//   useEffect(() => {
//     if (blogs.length > 0) return; // Don't refetch if already loaded
//     setLoading(true);
//     fetchBlogByPage(currentPage).then(({ data, totalPages }) => {
//       setBlogs(data);
//       setTotalPages(totalPages);
//       setLoading(false);
//     });
//   }, [currentPage, blogs.length, setBlogs, setTotalPages]);

//   if (loading) {
//     return (
//       <p className="text-black fsans-600 md:text-[32px] text-[24px] py-20 col-span-2 text-center">
//         Loading Posts...
//       </p>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
//     >
//       <SlideBlog blogs={blogs.slice(0, 4)} />
//       <TabBlogs blogs={blogs} totalPages={totalPages} />
//     </motion.div>
//   );
// }

"use client";
import { useEffect } from "react";
import SlideBlog from "./SlideBlog";
import TabBlogs from "./TabBlogs";
import { motion } from "framer-motion";
import { useBlogContext } from "../../context/BlogContext";
import TabBlogsF from "./TabBlogsF";

export default function BlogsLoader({ currentPage, initialBlogs = [] }) {
  const { blogs, setBlogs } = useBlogContext();

  useEffect(() => {
    if (initialBlogs.length) setBlogs(initialBlogs);
  }, [initialBlogs, setBlogs]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <SlideBlog blogs={blogs.slice(0, 4)} />
      <TabBlogsF blogs={blogs} />
    </motion.div>
  );
}
