// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { Suspense } from "react";
// import RelatedBlogs from "./Components/RelatedBlogs";
// import Link from "next/link";

// async function fetchBlogData(slug) {
//   const res = await fetch(
//     `https://www.kshinfra.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
//     { next: { revalidate: 60 } } // Cache for 60 seconds
//   );
//   if (!res.ok) return null;
//   const data = await res.json();
//   if (data.length === 0) return null;

//   const blog = data[0];

//   // Use embedded featured media if available.
//   let featuredImage =
//     blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

//   // Fallback: fetch the media separately if needed.
//   if (!featuredImage && blog.featured_media) {
//     try {
//       const mediaRes = await fetch(
//         `https://www.kshinfra.com/wp-json/wp/v2/media/${blog.featured_media}`,
//         { next: { revalidate: 60 } }
//       );
//       if (mediaRes.ok) {
//         const mediaData = await mediaRes.json();
//         featuredImage = mediaData.source_url || null;
//       }
//     } catch (error) {
//       console.error("Media fetch error:", error);
//     }
//   }
//   return { ...blog, featuredImage: featuredImage || "/default-image.jpg" };
// }

// export default async function BlogPage({ params }) {
//   // Fetch blog data first so we can conditionally show the page.
//   const blog = await fetchBlogData(params.slug);
//   if (!blog) return notFound();

//   const categoryLabels = {
//     17: "Blogs",
//     18: "News",
//   };
//   const categoryToShow =
//     blog.categories.map((cat) => categoryLabels[cat]).find(Boolean) ||
//     "Uncategorized";

//   // Construct blog URL for sharing.
//   const baseUrl =
//     process.env.NEXT_PUBLIC_SITE_URL || "https://www.kshinfra.com";
//   const finalUrl = `https://kshweb.vercel.app/blogs/${params.slug}`;

//   // Construct message for WhatsApp sharing.
//   const whatsappMessage = `${blog.title.rendered} - ${finalUrl}`;

//   return (
//     <div id="bloginside">
//       {/* Blog Header */}
//       <div className="bg-[#092241]">
//         <div className="fix12 pb-20 pt-32">
//           <div className="pb-16">
//             <p className="text-[#D7D7D7A3] text-base fsans-400 pb-7">
//               <Link
//                 className="hover:text-white transition-colors duration-300"
//                 href="/"
//               >
//                 Home
//               </Link>
//               &nbsp;&gt; Blog
//             </p>
//             <div className="space-y-7">
//               <p
//                 className="w-fit py-1 px-3 fsans-600 text-base bg-[#F7E327]"
//                 dangerouslySetInnerHTML={{ __html: categoryToShow }}
//               />
//               <h1
//                 className="fpt-700 md:text-[44px] sm:text-[32px] text-[24px] leading-[105%] text-white"
//                 dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
//               />
//             </div>
//           </div>
//           {/* Blog Featured Image */}
//           {/* <div className="imgCon">
//             <Image
//               src={blog.featuredImage}
//               alt={blog.title.rendered}
//               width={1200}
//               height={600}
//               className="w-full h-auto object-cover"
//               priority
//             />
//           </div> */}
//           <div className="imgCon h-[45vh] w-full relative">
//             <Image
//               src={blog.featuredImage}
//               alt={blog.title.rendered}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       {/* Blog Content */}
//       <div className="fix12">
//         <div className="middleBlogContent flex md:flex-row flex-col-reverse lg:gap-20 gap-9 py-10 md:py-20 relative">
//           {/* Social Icons */}
//           <div className="colIcon h-fit sticky top-20">
//             <div className="flex md:flex-col flex-row max-w-full md:w-10 gap-8">
//               <a
//                 href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//                   finalUrl
//                 )}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   className="w-9 h-9"
//                   src="/binside/BinFB.svg"
//                   alt="Share on Facebook"
//                   width={36}
//                   height={36}
//                 />
//               </a>
//               <a
//                 href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//                   finalUrl
//                 )}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   className="w-9 h-9"
//                   src="/binside/BinIN.svg"
//                   alt="Share on LinkedIn"
//                   width={36}
//                   height={36}
//                 />
//               </a>
//               <a
//                 href={`https://wa.me/?text=${encodeURIComponent(
//                   whatsappMessage
//                 )}`}
//               >
//                 <img
//                   className="w-9 h-9"
//                   src="/binside/wsp.svg"
//                   alt="Share on WhatsApp"
//                   width={36}
//                   height={36}
//                 />
//               </a>
//             </div>
//           </div>
//           {/* Main Blog Content */}
//           <div id="bloginwy" className="colContnt">
//             <div
//               className="fsans-400 text-base leading-7 space-y-[18px] text-[#434343]"
//               dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Related Blogs Section loaded via Suspense so it doesn’t block initial render */}
//       <Suspense
//         fallback={
//           <div className="text-black fsans-600 md:text-[32px] text-[24px] col-span-2 text-center pb-10">
//             Loading related posts...
//           </div>
//         }
//       >
//         <RelatedBlogs currentBlogId={blog.id} slug={params.slug} />
//       </Suspense>
//     </div>
//   );
// }

// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { Suspense } from "react";
// import RelatedBlogs from "./Components/RelatedBlogs";
// import Link from "next/link";

// async function fetchBlogData(slug) {
//   const res = await fetch(
//     `https://www.kshinfra.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
//     { next: { revalidate: 60 } }
//   );
//   if (!res.ok) return null;
//   const data = await res.json();
//   if (data.length === 0) return null;

//   const blog = data[0];
//   let featuredImage =
//     blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

//   if (!featuredImage && blog.featured_media) {
//     try {
//       const mediaRes = await fetch(
//         `https://www.kshinfra.com/wp-json/wp/v2/media/${blog.featured_media}`,
//         { next: { revalidate: 60 } }
//       );
//       if (mediaRes.ok) {
//         const mediaData = await mediaRes.json();
//         featuredImage = mediaData.source_url || null;
//       }
//     } catch (error) {
//       console.error("Media fetch error:", error);
//     }
//   }

//   return { ...blog, featuredImage: featuredImage || "/default-image.jpg" };
// }

// function BlogSkeleton() {
//   return (
//     <div id="bloginside">
//       <div className="bg-[#092241] animate-pulse">
//         <div className="fix12 pb-20 pt-32">
//           <div className="pb-16">
//             <div className="bg-[#1f3b5c] h-4 w-24 mb-4 rounded" />
//             <div className="bg-[#1f3b5c] h-8 w-48 mb-4 rounded" />
//             <div className="bg-[#1f3b5c] h-10 w-3/4 rounded" />
//           </div>
//           <div className="imgCon h-[45vh] w-full bg-[#1f3b5c] rounded" />
//         </div>
//       </div>
//       <div className="fix12 py-20">
//         <div className="middleBlogContent flex md:flex-row flex-col-reverse lg:gap-20 gap-9">
//           <div className="colIcon h-fit sticky top-20">
//             <div className="flex md:flex-col flex-row max-w-full md:w-10 gap-8">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="w-9 h-9 bg-gray-300 rounded-full" />
//               ))}
//             </div>
//           </div>
//           <div className="colContnt space-y-4 flex-1">
//             {Array.from({ length: 10 }).map((_, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-300 h-4 rounded w-full"
//                 style={{ width: `${90 - i * 5}%` }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default async function BlogPage({ params }) {
//   const blog = await fetchBlogData(params.slug);
//   if (!blog) return notFound();

//   const categoryLabels = {
//     17: "Blogs",
//     18: "News",
//   };
//   const categoryToShow =
//     blog.categories.map((cat) => categoryLabels[cat]).find(Boolean) ||
//     "Uncategorized";

//   const finalUrl = `https://kshweb.vercel.app/blogs/${params.slug}`;
//   const whatsappMessage = `${blog.title.rendered} - ${finalUrl}`;

//   return (
//     <Suspense fallback={<BlogSkeleton />}>
//       <div id="bloginside">
//         <div className="bg-[#092241]">
//           <div className="fix12 pb-20 pt-32">
//             <div className="pb-16">
//               <p className="text-[#D7D7D7A3] text-base fsans-400 pb-7">
//                 <Link
//                   className="hover:text-white transition-colors duration-300"
//                   href="/"
//                 >
//                   Home
//                 </Link>
//                 &nbsp;&gt; Blog
//               </p>
//               <div className="space-y-7">
//                 <p
//                   className="w-fit py-1 px-3 fsans-600 text-base bg-[#F7E327]"
//                   dangerouslySetInnerHTML={{ __html: categoryToShow }}
//                 />
//                 <h1
//                   className="fpt-700 md:text-[44px] sm:text-[32px] text-[24px] leading-[105%] text-white"
//                   dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
//                 />
//               </div>
//             </div>
//             {/* <div className="imgCon h-[45vh] w-full relative">
//               <Image
//                 src={blog.featuredImage}
//                 alt={blog.title.rendered}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div> */}
//             <div className="imgCon h-[45vh] w-full relative overflow-hidden">
//               <img
//                 src={blog.featuredImage}
//                 alt={blog.title.rendered}
//                 className="object-cover w-full h-full absolute top-0 left-0"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="fix12">
//           <div className="middleBlogContent flex md:flex-row flex-col-reverse lg:gap-20 gap-9 py-10 md:py-20 relative">
//             <div className="colIcon h-fit sticky top-20">
//               <div className="flex md:flex-col flex-row max-w-full md:w-10 gap-8">
//                 <a
//                   href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//                     finalUrl
//                   )}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     className="w-9 h-9"
//                     src="/binside/BinFB.svg"
//                     alt="Share on Facebook"
//                     width={36}
//                     height={36}
//                   />
//                 </a>
//                 <a
//                   href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//                     finalUrl
//                   )}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     className="w-9 h-9"
//                     src="/binside/BinIN.svg"
//                     alt="Share on LinkedIn"
//                     width={36}
//                     height={36}
//                   />
//                 </a>
//                 <a
//                   href={`https://wa.me/?text=${encodeURIComponent(
//                     whatsappMessage
//                   )}`}
//                 >
//                   <img
//                     className="w-9 h-9"
//                     src="/binside/wsp.svg"
//                     alt="Share on WhatsApp"
//                     width={36}
//                     height={36}
//                   />
//                 </a>
//               </div>
//             </div>
//             <div id="bloginwy" className="colContnt">
//               <div
//                 className="fsans-400 text-base leading-7 space-y-[18px] text-[#434343]"
//                 dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
//               />
//             </div>
//           </div>
//         </div>

//         <Suspense
//           fallback={
//             <div className="text-black fsans-600 md:text-[32px] text-[24px] col-span-2 text-center pb-10">
//               Loading related posts...
//             </div>
//           }
//         >
//           <RelatedBlogs currentBlogId={blog.id} slug={params.slug} />
//         </Suspense>
//       </div>
//     </Suspense>
//   );
// }

// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { Suspense } from "react";
// import RelatedBlogs from "./Components/RelatedBlogs";
// import Link from "next/link";
// import { CalendarDays } from "lucide-react";

// async function fetchBlogData(slug) {
//   const res = await fetch(
//     `https://www.kshinfra.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
//     { next: { revalidate: 60 } }
//   );
//   if (!res.ok) return null;
//   const data = await res.json();
//   if (data.length === 0) return null;

//   const blog = data[0];
//   let featuredImage =
//     blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

//   if (!featuredImage && blog.featured_media) {
//     try {
//       const mediaRes = await fetch(
//         `https://www.kshinfra.com/wp-json/wp/v2/media/${blog.featured_media}`,
//         { next: { revalidate: 60 } }
//       );
//       if (mediaRes.ok) {
//         const mediaData = await mediaRes.json();
//         featuredImage = mediaData.source_url || null;
//       }
//     } catch (error) {
//       console.error("Media fetch error:", error);
//     }
//   }

//   return { ...blog, featuredImage: featuredImage || "/default-image.jpg" };
// }

// function BlogSkeleton() {
//   return (
//     <div id="bloginside">
//       <div className="bg-[#092241] animate-pulse">
//         <div className="fix12 pb-20 pt-32">
//           <div className="pb-16">
//             <div className="bg-[#1f3b5c] h-4 w-24 mb-4 rounded" />
//             <div className="bg-[#1f3b5c] h-8 w-48 mb-4 rounded" />
//             <div className="bg-[#1f3b5c] h-10 w-3/4 rounded" />
//           </div>
//           <div className="imgCon h-[45vh] w-full bg-[#1f3b5c] rounded" />
//         </div>
//       </div>
//       <div className="fix12 py-20">
//         <div className="middleBlogContent flex md:flex-row flex-col-reverse lg:gap-20 gap-9">
//           <div className="colIcon h-fit sticky top-20">
//             <div className="flex md:flex-col flex-row max-w-full md:w-10 gap-8">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="w-9 h-9 bg-gray-300 rounded-full" />
//               ))}
//             </div>
//           </div>
//           <div className="colContnt space-y-4 flex-1">
//             {Array.from({ length: 10 }).map((_, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-300 h-4 rounded w-full"
//                 style={{ width: `${90 - i * 5}%` }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default async function BlogPage({ params }) {
//   const blog = await fetchBlogData(params.slug);
//   if (!blog) return notFound();

//   const categoryLabels = {
//     17: "Blogs",
//     18: "News",
//   };
//   const categoryToShow =
//     blog.categories.map((cat) => categoryLabels[cat]).find(Boolean) ||
//     "Uncategorized";

//   const formattedDate = new Date(blog.date).toLocaleDateString("en-IN", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });

//   const authorName = blog._embedded?.author?.[0]?.name || "Unknown Author";

//   const finalUrl = `https://kshweb.vercel.app/blogs/${params.slug}`;
//   const whatsappMessage = `${blog.title.rendered} - ${finalUrl}`;

//   return (
//     <Suspense fallback={<BlogSkeleton />}>
//       <div id="bloginside">
//         <div className="bg-[#092241]">
//           <div className="fix12 pb-20 pt-32">
//             <div className="mb-[28px]">
//               <p className="text-[#D7D7D7A3] text-base fsans-400 pb-7">
//                 <Link
//                   className="hover:text-white transition-colors duration-300"
//                   href="/"
//                 >
//                   Home
//                 </Link>
//                 &nbsp;&gt; Blog
//               </p>

//               <div className="space-y-7">
//                 <p
//                   className="w-fit py-1 px-3 fsans-600 text-base bg-[#F7E327]"
//                   dangerouslySetInnerHTML={{ __html: categoryToShow }}
//                 />
//                 <h1
//                   className="fpt-700 md:text-[44px] sm:text-[32px] text-[24px] leading-[105%] text-white"
//                   dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
//                 />
//               </div>
//             </div>

//             {/* Date */}
//             <div className="flex pb-16 items-center gap-4 text-[18px] text-white fsans-400">
//               <p className="flex gap-2 items-center">
//                 <CalendarDays />
//                 {formattedDate}
//               </p>
//               {/* <span className="text-white">|</span>
//               <p>{authorName}</p> */}
//             </div>

//             {/* Spotlight Image */}
//             <div className="imgCon min-h-[80vh] w-full relative overflow-hidden">
//               <img
//                 src={blog.featuredImage}
//                 alt={blog.title.rendered}
//                 className="object-cover w-full h-full absolute top-0 left-0"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="fix12">
//           <div className="middleBlogContent flex md:flex-row flex-col-reverse lg:gap-20 gap-9 py-10 md:py-20 relative">
//             <div className="colIcon h-fit sticky top-20">
//               <div className="flex md:flex-col flex-row max-w-full md:w-10 gap-8">
//                 <a
//                   href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//                     finalUrl
//                   )}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     className="w-9 h-9"
//                     src="/binside/BinFB.svg"
//                     alt="Share on Facebook"
//                     width={36}
//                     height={36}
//                   />
//                 </a>
//                 <a
//                   href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//                     finalUrl
//                   )}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     className="w-9 h-9"
//                     src="/binside/BinIN.svg"
//                     alt="Share on LinkedIn"
//                     width={36}
//                     height={36}
//                   />
//                 </a>
//                 <a
//                   href={`https://wa.me/?text=${encodeURIComponent(
//                     whatsappMessage
//                   )}`}
//                 >
//                   <img
//                     className="w-9 h-9"
//                     src="/binside/wsp.svg"
//                     alt="Share on WhatsApp"
//                     width={36}
//                     height={36}
//                   />
//                 </a>
//               </div>
//             </div>
//             <div id="bloginwy" className="colContnt">
//               <div
//                 className="fsans-400 text-base leading-7 space-y-[18px] text-[#434343]"
//                 dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
//               />
//             </div>
//           </div>
//         </div>

//         <Suspense
//           fallback={
//             <div className="text-black fsans-600 md:text-[32px] text-[24px] col-span-2 text-center pb-10">
//               Loading related posts...
//             </div>
//           }
//         >
//           <RelatedBlogs currentBlogId={blog.id} slug={params.slug} />
//         </Suspense>
//       </div>
//     </Suspense>
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
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { Suspense } from "react";
// import RelatedBlogs from "./Components/RelatedBlogs";
// import Link from "next/link";
// import { CalendarDays } from "lucide-react";

// // ✅ FIXED: generateMetadata instead of metadata
// export async function generateMetadata({ params }) {
//   const res = await fetch(
//     `https://www.kshinfra.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
//   );
//   if (!res.ok) return {};
//   const data = await res.json();
//   const blog = data[0];
//   if (!blog) return {};

//   const meta = blog.yoast_head_json || {};
//   return {
//     title: meta.title || blog.title.rendered,
//     description: meta.description || "",
//   };
// }

// async function fetchBlogData(slug) {
//   const res = await fetch(
//     `https://www.kshinfra.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
//     { next: { revalidate: 60 } }
//   );
//   if (!res.ok) return null;
//   const data = await res.json();
//   if (data.length === 0) return null;

//   const blog = data[0];
//   let featuredImage =
//     blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

//   if (!featuredImage && blog.featured_media) {
//     try {
//       const mediaRes = await fetch(
//         `https://www.kshinfra.com/wp-json/wp/v2/media/${blog.featured_media}`,
//         { next: { revalidate: 60 } }
//       );
//       if (mediaRes.ok) {
//         const mediaData = await mediaRes.json();
//         featuredImage = mediaData.source_url || null;
//       }
//     } catch (error) {
//       console.error("Media fetch error:", error);
//     }
//   }

//   return { ...blog, featuredImage: featuredImage || "/default-image.jpg" };
// }

// function BlogSkeleton() {
//   return (
//     <div id="bloginside">
//       <div className="bg-[#092241] animate-pulse">
//         <div className="fix12 pb-20 pt-32">
//           <div className="pb-16">
//             <div className="bg-[#1f3b5c] h-4 w-24 mb-4 rounded" />
//             <div className="bg-[#1f3b5c] h-8 w-48 mb-4 rounded" />
//             <div className="bg-[#1f3b5c] h-10 w-3/4 rounded" />
//           </div>
//           <div className="imgCon h-[45vh] w-full bg-[#1f3b5c] rounded" />
//         </div>
//       </div>
//       <div className="fix12 py-20">
//         <div className="middleBlogContent flex md:flex-row flex-col-reverse lg:gap-20 gap-9">
//           <div className="colIcon h-fit sticky top-20">
//             <div className="flex md:flex-col flex-row max-w-full md:w-10 gap-8">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="w-9 h-9 bg-gray-300 rounded-full" />
//               ))}
//             </div>
//           </div>
//           <div className="colContnt space-y-4 flex-1">
//             {Array.from({ length: 10 }).map((_, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-300 h-4 rounded w-full"
//                 style={{ width: `${90 - i * 5}%` }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default async function BlogPage({ params }) {
//   const blog = await fetchBlogData(params.slug);
//   if (!blog) return notFound();

//   const categoryLabels = {
//     17: "Blogs",
//     18: "News",
//   };
//   const categoryToShow =
//     blog.categories.map((cat) => categoryLabels[cat]).find(Boolean) ||
//     "Uncategorized";

//   const formattedDate = new Date(blog.date).toLocaleDateString("en-IN", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });

//   const authorName = blog._embedded?.author?.[0]?.name || "Unknown Author";

//   const finalUrl = `https://kshweb.vercel.app/blogs/${params.slug}`;
//   const whatsappMessage = `${blog.title.rendered} - ${finalUrl}`;

//   return (
//     <Suspense fallback={<BlogSkeleton />}>
//       <div id="bloginside">
//         <div className="bg-[#092241]">
//           <div className="fix12 pb-20 pt-32">
//             <div className="mb-[28px]">
//               <p className="text-[#D7D7D7A3] text-base fsans-400 pb-7">
//                 <Link
//                   className="hover:text-white transition-colors duration-300"
//                   href="/"
//                 >
//                   Home
//                 </Link>
//                 &nbsp;&gt; Blog
//               </p>

//               <div className="space-y-7">
//                 <p
//                   className="w-fit py-1 px-3 fsans-600 text-base bg-[#F7E327]"
//                   dangerouslySetInnerHTML={{ __html: categoryToShow }}
//                 />
//                 <h1
//                   className="fpt-700 md:text-[44px] sm:text-[32px] text-[24px] leading-[105%] text-white"
//                   dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
//                 />
//               </div>
//             </div>

//             <div className="flex pb-16 items-center gap-4 text-[18px] text-white fsans-400">
//               <p className="flex gap-2 items-center">
//                 <CalendarDays />
//                 {formattedDate}
//               </p>
//             </div>

//             <div className="imgCon min-h-[40vh] lg:min-h-[80vh] w-full relative overflow-hidden">
//               <img
//                 src={blog.featuredImage}
//                 alt={blog.title.rendered}
//                 className="object-cover w-full h-full absolute top-0 left-0"
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="fix12">
//           <div className="middleBlogContent flex md:flex-row flex-col-reverse lg:gap-20 gap-9 py-10 md:py-20 relative">
//             <div className="colIcon h-fit sticky top-20">
//               <div className="flex md:flex-col flex-row max-w-full md:w-10 gap-8">
//                 <a
//                   href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//                     finalUrl
//                   )}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     className="w-9 h-9"
//                     src="/binside/BinFB.svg"
//                     alt="Share on Facebook"
//                     width={36}
//                     height={36}
//                   />
//                 </a>
//                 <a
//                   href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//                     finalUrl
//                   )}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     className="w-9 h-9"
//                     src="/binside/BinIN.svg"
//                     alt="Share on LinkedIn"
//                     width={36}
//                     height={36}
//                   />
//                 </a>
//                 <a
//                   href={`https://wa.me/?text=${encodeURIComponent(
//                     whatsappMessage
//                   )}`}
//                 >
//                   <img
//                     className="w-9 h-9"
//                     src="/binside/wsp.svg"
//                     alt="Share on WhatsApp"
//                     width={36}
//                     height={36}
//                   />
//                 </a>
//               </div>
//             </div>
//             <div id="bloginwy" className="colContnt">
//               <div
//                 className="fsans-400 text-base leading-7 space-y-[18px] text-[#434343]"
//                 dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
//               />
//             </div>
//           </div>
//         </div>

//         <Suspense
//           fallback={
//             <div className="text-black fsans-600 md:text-[32px] text-[24px] col-span-2 text-center pb-10">
//               Loading related posts...
//             </div>
//           }
//         >
//           <RelatedBlogs currentBlogId={blog.id} slug={params.slug} />
//         </Suspense>
//       </div>
//     </Suspense>
//   );
// }
// app/blogs/[slug]/page.jsx
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
// import { Suspense } from "react";
// import BlogSkeleton from "./Components/BlogSkeleton";
// import BlogContent from "./Components/BlogContent";

// // ✅ Page wrapper with streaming Suspense
// export default function BlogPage({ params }) {
//   return (
//     <Suspense fallback={<BlogSkeleton />}>
//       <BlogContent slug={params.slug} />
//     </Suspense>
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
//
//
//
//
//
// import { Suspense } from "react";
// import BlogSkeleton from "./Components/BlogSkeleton";
// import BlogContent from "./Components/BlogContent";

// // Reusable fetcher (same logic you already use in BlogContent)
// async function fetchBlogData(slug) {
//   const res = await fetch(
//     `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
//     { next: { revalidate: 60 } }
//   );

//   if (!res.ok) return null;
//   const data = await res.json();
//   if (data.length === 0) return null;

//   const blog = data[0];
//   let featuredImage =
//     blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

//   if (!featuredImage && blog.featured_media) {
//     try {
//       const mediaRes = await fetch(
//         `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/media/${blog.featured_media}`,
//         { next: { revalidate: 60 } }
//       );
//       if (mediaRes.ok) {
//         const mediaData = await mediaRes.json();
//         featuredImage = mediaData.source_url || null;
//       }
//     } catch (error) {
//       console.error("Media fetch error:", error);
//     }
//   }

//   return { ...blog, featuredImage: featuredImage || "/default-image.jpg" };
// }

// // ✅ Dynamic Metadata
// export async function generateMetadata({ params }) {
//   const blog = await fetchBlogData(params.slug);
//   if (!blog) {
//     return {
//       title: "Blog Not Found - KSH Infra",
//       description: "The requested blog could not be found.",
//     };
//   }

//   const title = blog.yoast_head_json?.title || blog.title.rendered;
//   const description =
//     blog.yoast_head_json?.description ||
//     blog.excerpt?.rendered.replace(/<[^>]+>/g, "") ||
//     "Read the latest insights from KSH Infra.";

//   const image = blog.featuredImage;

//   const url = `https://kshweb.vercel.app/blogs/${params.slug}`;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       url,
//       type: "article",
//       images: [
//         {
//           url: image,
//           width: 1200,
//           height: 630,
//           alt: blog.title.rendered,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [image],
//     },
//   };
// }

// // ✅ Page wrapper with streaming Suspense
// export default function BlogPage({ params }) {
//   return (
//     <Suspense fallback={<BlogSkeleton />}>
//       <BlogContent slug={params.slug} />
//     </Suspense>
//   );
// }
// app/[category]/[slug]/page.jsx
// app/[category]/[slug]/page.jsx
import { Suspense } from "react";
import { notFound } from "next/navigation";
import BlogSkeleton from "./Components/BlogSkeleton";
import BlogContent from "./Components/BlogContent";

// Reusable fetcher
async function fetchBlogData(slug) {
  const res = await fetch(
    `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return null;
  const data = await res.json();
  if (data.length === 0) return null;

  const blog = data[0];
  let featuredImage =
    blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  if (!featuredImage && blog.featured_media) {
    try {
      const mediaRes = await fetch(
        `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/media/${blog.featured_media}`,
        { next: { revalidate: 60 } }
      );
      if (mediaRes.ok) {
        const mediaData = await mediaRes.json();
        featuredImage = mediaData.source_url || null;
      }
    } catch (error) {
      console.error("Media fetch error:", error);
    }
  }

  return { ...blog, featuredImage: featuredImage || "/default-image.jpg" };
}

// ✅ Dynamic Metadata
export async function generateMetadata({ params }) {
  const blog = await fetchBlogData(params.slug);
  if (!blog) {
    return {
      title: "Blog Not Found - KSH Infra",
      description: "The requested blog could not be found.",
    };
  }

  const title = blog.yoast_head_json?.title || blog.title.rendered;
  const description =
    blog.yoast_head_json?.description ||
    blog.excerpt?.rendered.replace(/<[^>]+>/g, "") ||
    "Read the latest insights from KSH Infra.";

  const image = blog.featuredImage;
  const url = `https://kshweb.vercel.app/blogs/${params.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: blog.title.rendered,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// ✅ Page wrapper with category validation + Suspense
export default async function BlogPage({ params }) {
  const { slug } = params;
  const blog = await fetchBlogData(slug);

  if (!blog) return notFound();

  // category validation
  const categories = blog.categories || [];
  const isNews = categories.includes(7) || categories.includes(18);
  const isBlog = categories.includes(6) || categories.includes(17);

  if (isNews || !isBlog) {
    return notFound();
  }

  return (
    <Suspense fallback={<BlogSkeleton />}>
      <BlogContent slug={slug} />
    </Suspense>
  );
}
