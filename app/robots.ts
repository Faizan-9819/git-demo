import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      `${SITE_URL}/ensitemap.xml`,
      `${SITE_URL}/nlsitemap.xml`,
    ],
    host: SITE_URL,
  };
}
