// import { Suspense } from "react";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import RelatedBlogs from "./RelatedBlogs";
// import { CalendarDays } from "lucide-react";

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

// export default async function BlogContent({ slug }) {
//   const blog = await fetchBlogData(slug);
//   if (!blog) return notFound();

//   const categoryLabels = {
//     6: "Blogs",
//     7: "News",
//   };

//   // Robust category prioritization
//   let categoryToShow = "Uncategorized";
//   const categories = blog.categories;

//   if (categories.includes(7)) {
//     categoryToShow = categoryLabels[7]; // Prioritize News
//   } else if (categories.length === 1 && categories[0] === 6) {
//     categoryToShow = categoryLabels[6]; // Show Blogs only if it's the only category
//   }

//   const formattedDate = new Date(blog.date).toLocaleDateString("en-IN", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });

//   const finalUrl = `https://kshweb.vercel.app/blogs/${slug}`;
//   const whatsappMessage = `${blog.title.rendered} - ${finalUrl}`;

//   return (
//     <div id="bloginside">
//       <div className="bg-[#fff]">
//         <div className="fix12 pb-10 md:pb-20 pt-32">
//           <div className="mb-[28px]">
//             <p className="text-[#00000040] text-base fsans-400 pb-7">
//               <Link
//                 className="hover:text-black transition-colors duration-300"
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
//                 className="fpt-500 md:text-[44px] sm:text-[32px] text-[24px] leading-[105%] text-black"
//                 dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
//               />
//             </div>
//           </div>

//           <div className="flex pb-16 items-center gap-4 text-[7px] text-black fsans-400">
//             <p className="flex gap-2 items-center">
//               <CalendarDays />
//               {formattedDate}
//             </p>
//           </div>

//           <div className="imgCon min-h-[40vh] lg:min-h-[80vh] w-full relative overflow-hidden">
//             <img
//               src={blog.featuredImage}
//               alt={blog.title.rendered}
//               className="object-cover w-full h-full absolute top-0 left-0"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="fix12">
//         <div className="middleBlogContent flex md:flex-row flex-col-reverse lg:gap-20 gap-9 relative">
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

//           {/* Blog Content */}
//           <div id="bloginwy" className="colContnt">
//             <div
//               className="fsans-400 text-base leading-7 space-y-[7px] text-[#434343]"
//               dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Related blogs streamed separately */}
//       <Suspense
//         fallback={
//           <div className="text-black fsans-600 md:text-[32px] text-[24px] col-span-2 text-center pb-10">
//             Loading related posts...
//           </div>
//         }
//       >
//         <RelatedBlogs currentBlogId={blog.id} slug={slug} />
//       </Suspense>
//     </div>
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
//
// import { Suspense } from "react";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import RelatedBlogs from "./RelatedBlogs";
// import { CalendarDays } from "lucide-react";
// import Image from "next/image";

// async function fetchBlogData(slug) {
//   const res = await fetch(
//     `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
//     { next: { revalidate: 60 } },
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
//         { next: { revalidate: 60 } },
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

// export default async function BlogContent({ slug, category }) {
//   const blog = await fetchBlogData(slug);
//   if (!blog) return notFound();

//   const categoryLabels = {
//     6: "Blogs",
//     7: "News",
//   };

//   // Robust category prioritization
//   let categoryToShow = "Uncategorized";
//   const categories = blog.categories;

//   if (categories.includes(7)) {
//     categoryToShow = categoryLabels[7]; // Prioritize News
//   } else if (categories.length === 1 && categories[0] === 6) {
//     categoryToShow = categoryLabels[6]; // Show Blogs only if it's the only category
//   }

//   const formattedDate = new Date(blog.date).toLocaleDateString("en-IN", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });

//   // ✅ Use actual category param in URL
//   const finalUrl = `https://kshweb.vercel.app/${category}/${slug}`;
//   const whatsappMessage = `${blog.title.rendered} - ${finalUrl}`;

//   return (
//     <div id="bloginside">
//       <div className="bg-[#fff]">
//         <div className="fix12 pb-10 md:pb-20 pt-32">
//           <div className="mb-[28px]">
//             <p className="text-[#00000040] text-base fsans-400 pb-7">
//               <Link
//                 className="hover:text-black transition-colors duration-300"
//                 href="/"
//               >
//                 Home
//               </Link>
//               &nbsp;&gt; {categoryToShow}
//             </p>

//             <div className="space-y-7">
//               <p
//                 className="w-fit py-1 px-3 fsans-600 text-base bg-[#F7E327]"
//                 dangerouslySetInnerHTML={{ __html: categoryToShow }}
//               />
//               <h1
//                 className="fpt-500 md:text-[44px] sm:text-[32px] text-[24px] leading-[105%] text-black"
//                 dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
//               />
//             </div>
//           </div>

//           <div className="flex pb-16 items-center gap-4 text-[7px] text-black fsans-400">
//             <p className="flex gap-2 items-center">
//               <CalendarDays />
//               {formattedDate}
//             </p>
//           </div>

//           <div className="imgCon h-auto aspect-[12.13/7.13] w-full relative overflow-hidden">
//             <Image
//               fill
//               src={blog.featuredImage}
//               alt={blog.title.rendered}
//               className="object-cover w-full h-full absolute top-0 left-0"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="fix12">
//         <div className="middleBlogContent flex md:flex-row flex-col-reverse lg:gap-20 gap-9 relative">
//           {/* Social Icons */}
//           <div className="colIcon h-fit sticky top-20">
//             <div className="flex md:flex-col flex-row max-w-full md:w-10 gap-8">
//               <a
//                 href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//                   finalUrl,
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
//                   finalUrl,
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
//                   whatsappMessage,
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

//           {/* Blog Content */}
//           <div id="bloginwy" className="colContnt">
//             <div
//               className="fsans-400 text-base leading-7 space-y-[7px] text-[#434343]"
//               dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Related blogs streamed separately */}
//       <Suspense
//         fallback={
//           <div className="text-black fsans-600 md:text-[32px] text-[24px] col-span-2 text-center py-10">
//             Loading related posts...
//           </div>
//         }
//       >
//         <RelatedBlogs currentBlogId={blog.id} slug={slug} />
//       </Suspense>
//     </div>
//   );
// }
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import RelatedBlogs from "./RelatedBlogs";
import { CalendarDays } from "lucide-react";
import Image from "next/image";

function cleanHTML(html) {
  if (!html) return "";

  let cleaned = html;

  // Remove &nbsp; (including multiple)
  cleaned = cleaned.replace(/(&nbsp;|\u00A0)+/g, " ");

  // Remove empty tags like <b></b>, <p></p>, <span></span> etc
  cleaned = cleaned.replace(/<(\w+)([^>]*)>\s*<\/\1>/g, "");

  // Remove tags that contain only spaces
  cleaned = cleaned.replace(/<(\w+)([^>]*)>\s+<\/\1>/g, "");

  // Remove <p> that only had &nbsp; originally
  cleaned = cleaned.replace(/<p>\s*<\/p>/g, "");

  return cleaned;
}

async function fetchBlogData(slug) {
  const res = await fetch(
    `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 60 } },
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
        { next: { revalidate: 60 } },
      );
      if (mediaRes.ok) {
        const mediaData = await mediaRes.json();
        featuredImage = mediaData.source_url || null;
      }
    } catch (error) {
      console.error("Media fetch error:", error);
    }
  }

  return {
    ...blog,
    featuredImage: featuredImage || "/default-image.jpg",
    content: {
      ...blog.content,
      rendered: cleanHTML(blog.content.rendered),
    },
  };
}

export default async function BlogContent({ slug }) {
  const blog = await fetchBlogData(slug);
  if (!blog) return notFound();

  const categoryLabels = {
    6: "Blogs",
    7: "News",
    17: "Blogs",
    18: "News",
  };

  let categoryToShow = "Uncategorized";
  const categories = blog.categories;

  if (categories.includes(7) || categories.includes(18)) {
    categoryToShow = categoryLabels[7];
  } else if (
    categories.length === 1 &&
    (categories[0] === 6 || categories[0] === 17)
  ) {
    categoryToShow = categoryLabels[6];
  }

  const formattedDate = new Date(blog.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const finalUrl = `https://kshweb.vercel.app/blogs/${slug}`;
  const whatsappMessage = `${blog.title.rendered} - ${finalUrl}`;

  return (
    <div id="bloginside">
      <div className="bg-[#fff]">
        <div className="fix12 pb-10 md:pb-20 pt-32">
          <div className="mb-4 lg:mb-[28px]">
            <p className="text-[#00000040] text-base fsans-400 pb-7">
              <Link
                className="hover:text-black transition-colors duration-300"
                href="/"
              >
                Home
              </Link>
              &nbsp;&gt; {categoryToShow}
            </p>

            <div className="space-y-7">
              <p
                className="w-fit py-1 px-3 fsans-600 text-base bg-[#F7E327]"
                dangerouslySetInnerHTML={{ __html: categoryToShow }}
              />
              <h1
                className="fpt-500 md:text-[44px] sm:text-[32px] text-[24px] leading-[105%] text-black"
                dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
              />
            </div>
          </div>

          <div className="flex pb-6 lg:pb-16 items-center gap-4 text-[7px] text-black fsans-400">
            <p className="flex gap-2 items-center">
              <CalendarDays />
              {formattedDate}
            </p>
          </div>

          <div className="imgCon h-auto aspect-[12.13/7.13] w-full relative overflow-hidden">
            <Image
              fill
              src={blog.featuredImage}
              alt={blog.title.rendered}
              className="object-cover w-full h-full absolute top-0 left-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="fix12">
        <div className="middleBlogContent flex md:flex-row flex-col-reverse lg:gap-20 gap-6 relative">
          <div className="colIcon h-fit sticky top-20">
            <div className="flex md:flex-col flex-row max-w-full md:w-10 gap-8">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(finalUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-9 h-9"
                  src="/binside/BinFB.svg"
                  alt="Share on Facebook"
                  width={36}
                  height={36}
                />
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(finalUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-9 h-9"
                  src="/binside/BinIN.svg"
                  alt="Share on LinkedIn"
                  width={36}
                  height={36}
                />
              </a>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`}
              >
                <img
                  className="w-9 h-9"
                  src="/binside/wsp.svg"
                  alt="Share on WhatsApp"
                  width={36}
                  height={36}
                />
              </a>
            </div>
          </div>

          <div id="bloginwy" className="colContnt">
            <div
              className="fsans-400 text-base leading-7 space-y-[7px] text-[#434343] !-mt-9"
              dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
            />
          </div>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="text-black fsans-600 md:text-[32px] text-[24px] col-span-2 text-center py-10">
            Loading related posts...
          </div>
        }
      >
        <RelatedBlogs currentBlogId={blog.id} slug={slug} />
      </Suspense>
    </div>
  );
}
