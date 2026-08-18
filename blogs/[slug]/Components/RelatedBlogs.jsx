// import BCSlider from "./BCslider";

// // Fetch all blogs concurrently.
// async function fetchAllBlogs() {
//   const res = await fetch(
//     `https://www.kshinfra.com/wp-json/wp/v2/posts?_embed&per_page=100`,
//     { next: { revalidate: 60 } }
//   );
//   if (!res.ok) return [];
//   return res.json();
// }

// export default async function RelatedBlogs({ currentBlogId, slug }) {
//   // Fetch related posts
//   const allBlogs = await fetchAllBlogs();

//   const relatedBlogs = allBlogs
//     .filter((b) => b.id !== currentBlogId)
//     .map((b) => ({
//       ...b,
//       featuredImage:
//         b._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//         "/default-image.jpg",
//     }));

//   return <BCSlider relatedBlogs={relatedBlogs} />;
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
// import BCSlider from "./BCslider";

// async function fetchAllBlogs() {
//   const res = await fetch(
//     `https://www.kshinfra.com/wp-json/wp/v2/posts?_embed&per_page=100`,
//     { next: { revalidate: 60 } }
//   );
//   if (!res.ok) return [];
//   return res.json();
// }

// export default async function RelatedBlogs({ currentBlogId, slug }) {
//   const allBlogs = await fetchAllBlogs();

//   // Determine the current blog object to extract category
//   const currentBlog = allBlogs.find((b) => b.id === currentBlogId);
//   if (!currentBlog) return null;

//   const currentCategories = currentBlog.categories;

//   // Filter to same category and exclude current blog
//   const relatedBlogs = allBlogs
//     .filter(
//       (b) =>
//         b.id !== currentBlogId &&
//         b.categories.some((cat) => currentCategories.includes(cat))
//     )
//     .slice(0, 8) // only 8 blogs max
//     .map((b) => ({
//       ...b,
//       featuredImage:
//         b._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//         "/default-image.jpg",
//     }));

//   if (!relatedBlogs.length) return null;

//   return <BCSlider relatedBlogs={relatedBlogs} />;
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
// import BCSlider from "./BCslider";

// async function fetchAllBlogs() {
//   try {
//     const res = await fetch(
//       `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&per_page=100`,
//       { next: { revalidate: 60 } }
//     );
//     if (!res.ok) return [];
//     return await res.json();
//   } catch (err) {
//     console.error("Blog fetch failed", err);
//     return [];
//   }
// }

// export default async function RelatedBlogs({ currentBlogId }) {
//   const allBlogs = await fetchAllBlogs();
//   if (!allBlogs.length) return null;

//   const currentBlog = allBlogs.find((b) => b.id === currentBlogId);
//   if (!currentBlog) return null;

//   const currentCats = currentBlog.categories;
//   const isNews = currentCats.includes(7);
//   const isBlog = currentCats.includes(6);

//   let related = [];

//   if (isNews) {
//     // Only other News posts
//     related = allBlogs.filter(
//       (b) => b.id !== currentBlogId && b.categories.includes(7)
//     );
//   } else if (isBlog) {
//     // Blogs only (must not be News)
//     related = allBlogs.filter(
//       (b) =>
//         b.id !== currentBlogId &&
//         b.categories.includes(6) &&
//         !b.categories.includes(7)
//     );
//   } else {
//     // If neither News nor Blogs — fallback to any posts (excluding current)
//     related = allBlogs.filter((b) => b.id !== currentBlogId);
//   }

//   const relatedBlogs = related.slice(0, 8).map((b) => ({
//     ...b,
//     featuredImage:
//       b._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//       "/default-image.jpg",
//   }));

//   if (!relatedBlogs.length) return null;

//   return <BCSlider relatedBlogs={relatedBlogs} />;
// }
// BACKUP - Previous working version commented out
// import BCSlider from "./BCslider";

// async function fetchAllBlogs() {
//   try {
//     const res = await fetch(
//       `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&per_page=100`,
//       { next: { revalidate: 60 } }
//     );
//     if (!res.ok) return [];
//     return await res.json();
//   } catch (err) {
//     console.error("Blog fetch failed", err);
//     return [];
//   }
// }

// export default async function RelatedBlogs({ currentBlogId }) {
//   const allBlogs = await fetchAllBlogs();
//   if (!allBlogs.length) return null;

//   const currentBlog = allBlogs.find((b) => b.id === currentBlogId);
//   if (!currentBlog) return null;

//   const currentCats = currentBlog.categories;
//   const isNews = currentCats.includes(7);
//   const isBlog = currentCats.includes(6);

//   let related = [];

//   if (isNews) {
//     // Only other News posts
//     related = allBlogs.filter(
//       (b) => b.id !== currentBlogId && b.categories.includes(7)
//     );
//   } else if (isBlog) {
//     // Only other Blog posts (must not also be News)
//     related = allBlogs.filter(
//       (b) =>
//         b.id !== currentBlogId &&
//         b.categories.includes(6) &&
//         !b.categories.includes(7)
//     );
//   } else {
//     // Fallback: any other posts
//     related = allBlogs.filter((b) => b.id !== currentBlogId);
//   }

//   const relatedBlogs = related.slice(0, 8).map((b) => ({
//     ...b,
//     featuredImage:
//       b._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//       "/default-image.jpg",
//     categoryPath: b.categories.includes(7) ? "news" : "blogs",
//   }));

//   if (!relatedBlogs.length) return null;

//   return <BCSlider relatedBlogs={relatedBlogs} />;
// }

// FIXED VERSION - Better error handling and cache busting for production
import BCSlider from "./BCslider";

async function fetchAllBlogs() {
  try {
    const res = await fetch(
      `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?_embed&per_page=20`,
      { 
        next: { revalidate: 86400 }, // caching for 1 day
      }
    );
    
    if (!res.ok) {
      console.error(`Fetch failed with status: ${res.status}`);
      return [];
    }
    
    const data = await res.json();
    console.log(`Fetched ${data.length} blogs for related posts`);
    return data;
  } catch (err) {
    console.error("Blog fetch failed:", err);
    return [];
  }
}

export default async function RelatedBlogs({ currentBlogId, forceCategory }) {
  console.log(`Finding related blogs for ID: ${currentBlogId}`);
  
  const allBlogs = await fetchAllBlogs();
  if (!allBlogs.length) {
    console.log("No blogs found for related posts");
    return null;
  }

  const currentBlog = allBlogs.find((b) => b.id === currentBlogId);
  if (!currentBlog) {
    console.log(`Current blog with ID ${currentBlogId} not found`);
  }

  const currentCats = currentBlog?.categories || [];
  const isNews = currentCats.includes(7) || currentCats.includes(18);
  const isBlog = currentCats.includes(6) || currentCats.includes(17);
  const target = forceCategory || (isNews ? "news" : isBlog ? "blogs" : "any");
  
  console.log(`Current blog categories:`, currentCats, `isNews: ${isNews}, isBlog: ${isBlog}`);

  let related = [];

  if (target === "news") {
    related = allBlogs.filter((b) => {
      const cats = b.categories || [];
      return b.id !== currentBlogId && (cats.includes(7) || cats.includes(18));
    });
  } else if (target === "blogs") {
    related = allBlogs.filter((b) => {
      const cats = b.categories || [];
      const isBlogPost = cats.includes(6) || cats.includes(17);
      const isNewsPost = cats.includes(7) || cats.includes(18);
      return b.id !== currentBlogId && isBlogPost && !isNewsPost;
    });
  } else {
    // Fallback: get any other posts
    related = allBlogs.filter((b) => b.id !== currentBlogId);
  }

  // If no related posts in same category, get any other posts
  if (!related.length) {
    console.log("No related posts in same category, getting any other posts");
    related = allBlogs.filter((b) => b.id !== currentBlogId).slice(0, 8);
  }

  const relatedBlogs = related.slice(0, 8).map((b) => ({
    ...b,
    featuredImage:
      b._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      "/default-image.jpg",
    categoryPath:
      (b.categories || []).includes(7) || (b.categories || []).includes(18)
        ? "news"
        : "blogs",
  }));

  console.log(`Found ${relatedBlogs.length} related blogs`);

  if (!relatedBlogs.length) return null;

  return <BCSlider relatedBlogs={relatedBlogs} />;
}
