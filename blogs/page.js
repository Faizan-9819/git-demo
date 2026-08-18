//
// import Link from "next/link";
// import BlogSpot from "./Components/BlogSpot";
// import SlideBlog from "./Components/SlideBlog";
// import TabBlogs from "./Components/TabBlogs";
// import CapEnq from "../capabilities/componentsf/CapEnq";
// const fetchBlogByPage = async (page = 1) => {
//   const resp = await fetch(
//     `https://www.kshinfra.com/wp-json/wp/v2/posts?per_page=31&page=${page}`,
//     { next: { revalidate: 60 } }
//   );

//   if (!resp.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const data = await resp.json();
//   const totalPages = parseInt(resp.headers.get("X-WP-TotalPages") || "1", 10);

//   return { data, totalPages };
// };
// export const metadata = {
//   title:
//     "KSH INFRA Blog | Expert Insights on Industrial & Logistics Park Trends, Warehouse Development in India",
//   description:
//     "Explore the KSH INFRA blog for the latest trends, insights, and updates on industrial parks, logistics park developments, and Warehouse solutions in India.",
// };
// // Server Component
// const BlogPage = async ({ searchParams }) => {
//   const currentPage = parseInt(searchParams.page || "1", 10);
//   const { data: blogs, totalPages } = await fetchBlogByPage(currentPage);
//   // Create an array of page numbers (can add logic to limit if needed)
//   const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
//   // console.log(blogs);
//   return (
//     <>
//       <BlogSpot />
//       <SlideBlog blogs={blogs.slice(0, 4)} />
//       <TabBlogs blogs={blogs} />
//       <CapEnq />
//     </>
//   );
// };

// export default BlogPage;
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
// import { useEffect, useState } from "react";
// import BlogSpot from "./Components/BlogSpot";
// import SlideBlog from "./Components/SlideBlog";
// import TabBlogs from "./Components/TabBlogs";
// import CapEnq from "../capabilities/componentsf/CapEnq";

// const fetchBlogByPage = async (page = 1) => {
//   try {
//     const resp = await fetch(
//       `https://www.kshinfra.com/wp-json/wp/v2/posts?per_page=31&page=${page}`
//     );

//     if (!resp.ok) {
//       throw new Error("Failed to fetch blogs");
//     }

//     const data = await resp.json();
//     const totalPages = parseInt(resp.headers.get("X-WP-TotalPages") || "1", 10);

//     return { data, totalPages };
//   } catch {
//     return { data: [], totalPages: 1 };
//   }
// };

// export default function BlogPage() {
//   const [blogs, setBlogs] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const loadBlogs = async () => {
//       const { data, totalPages } = await fetchBlogByPage(1);
//       setBlogs(data);
//       setTotalPages(totalPages);
//     };

//     loadBlogs();

//     const interval = setInterval(() => {
//       if (blogs.length === 0) loadBlogs();
//     }, 10000); // retry every 10 seconds if empty

//     return () => clearInterval(interval);
//   }, [blogs]);

//   return (
//     <>
//       <BlogSpot />
//       <SlideBlog blogs={blogs.slice(0, 4)} />
//       {blogs.length > 0 && <TabBlogs blogs={blogs} totalPages={totalPages} />}
//       <CapEnq />
//     </>
//   );
// }

// ????????????????????????????????????????????????????????????????????????????????//

// import Link from "next/link";
// import BlogSpot from "./Components/BlogSpot";
// import SlideBlog from "./Components/SlideBlog";
// import TabBlogs from "./Components/TabBlogs";
// import CapEnq from "../capabilities/componentsf/CapEnq";

// const fetchBlogByPage = async (page = 1) => {
//   try {
//     const resp = await fetch(
//       `https://www.kshinfra.com/wp-json/wp/v2/posts?per_page=31&page=${page}`,
//       { next: { revalidate: 60 } }
//     );

//     if (!resp.ok) return { data: [], totalPages: 0 };

//     const data = await resp.json();
//     const totalPages = parseInt(resp.headers.get("X-WP-TotalPages") || "1", 10);

//     return { data, totalPages };
//   } catch {
//     return { data: [], totalPages: 0 }; // fallback in case of network failure
//   }
// };

// export const metadata = {
//   title:
//     "KSH INFRA Blog | Expert Insights on Industrial & Logistics Park Trends, Warehouse Development in India",
//   description:
//     "Explore the KSH INFRA blog for the latest trends, insights, and updates on industrial parks, logistics park developments, and Warehouse solutions in India.",
// };

// // Server Component
// const BlogPage = async ({ searchParams }) => {
//   const currentPage = parseInt(searchParams.page || "1", 10);
//   const { data: blogs, totalPages } = await fetchBlogByPage(currentPage);

//   return (
//     <>
//       <BlogSpot />
//       <SlideBlog blogs={blogs.slice(0, 4)} />
//       <TabBlogs blogs={blogs} totalPages={totalPages} />
//       <CapEnq />
//     </>
//   );
// };

// export default BlogPage;
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
// import BlogSpot from "./Components/BlogSpot";
// import BlogsLoader from "./Components/BlogsLoader";
// import CapEnq from "../capabilities/componentsf/CapEnq";

// export const metadata = {
//   title:
//     "KSH INFRA Blog | Expert Insights on Industrial & Logistics Park Trends, Warehouse Development in India",
//   description:
//     "Explore the KSH INFRA blog for the latest trends, insights, and updates on industrial parks, logistics park developments, and Warehouse solutions in India.",
// };

// const BlogPage = ({ searchParams }) => {
//   const currentPage = parseInt(searchParams.page || "1", 10);

//   return (
//     <>
//       <BlogSpot />
//       {/* Client-side loader for blogs */}
//       <BlogsLoader currentPage={currentPage} />
//       <CapEnq />
//     </>
//   );
// };

// export default BlogPage;

// BlogPage.jsx
import BlogSpot from "./Components/BlogSpot";
import CapEnq from "../capabilities/componentsf/CapEnq";
import BlogsServer from "./Components/BlogsServer"; // server fetch component
import { Suspense } from "react";

export const metadata = {
  title: "KSH INFRA Blogs | Insights on Industrial Infrastructure & Logistics",
  description:
    "Explore KSH INFRA's latest blogs covering sustainable industrial parks, logistics solutions, and trends shaping India's warehousing and manufacturing sectors.",
};

export default function BlogPage({ searchParams }) {
  const currentPage = parseInt(searchParams.page || "1", 10);

  return (
    <>
      <BlogSpot />
      <Suspense
        fallback={
          <div className="text-center text-[24px] py-20 fsans-600 text-black">
            Loading Posts...
          </div>
        }
      >
        <BlogsServer currentPage={currentPage} />
      </Suspense>
      <CapEnq />
    </>
  );
}
