import Image from "next/image";
import BlogMeta from "./BlogMeta";
import { formatBlogDate, type BlogPost } from "../../lib/blog-posts";

export default function BlogPostHero({ post }: { post: BlogPost }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(at_center_center,_#922698_0%,_#5B219F_89%)] lg:pb-16 pb-10 lg:pt-24 pt-12">
        <div className="md:max-w-[1400px] md:mx-auto fix">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 font-poppins text-[28px] font-bold leading-[1.2] text-white sm:text-[40px]">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-white/90">
              <BlogMeta
                publishedAt={formatBlogDate(post.publishedAt)}
                readTime={post.readTime}
                variant="light"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="md:max-w-[1400px] md:mx-auto fix lg:-mt-8 -mt-4 lg:pb-16 pb-10">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
            <div className="relative aspect-video">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
