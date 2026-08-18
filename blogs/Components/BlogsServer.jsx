// BlogsServer.jsx (server component)
import BlogsLoader from "./BlogsLoader";

export default async function BlogsServer({ currentPage }) {
  const res = await fetch(
    `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?per_page=31&page=${currentPage}&_embed`,
    { next: { revalidate: 900 } },
  );
  const blogs = res.ok ? await res.json() : [];
  return <BlogsLoader currentPage={currentPage} initialBlogs={blogs} />;
}
