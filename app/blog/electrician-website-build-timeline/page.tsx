import type { Metadata } from "next";
import BlogPostView from "../../components/blog/BlogPostView";
import { buildStaticBlogMetadata } from "../../lib/blog-metadata";

const PAIRING_SLUG = "electrician-website-build-timeline";

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return buildStaticBlogMetadata(PAIRING_SLUG, "en");
}

export default function Page() {
  return <BlogPostView pairingSlug={PAIRING_SLUG} locale="en" />;
}
