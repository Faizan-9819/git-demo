import type { NextConfig } from "next";

// Cloudways WordPress uses a self-signed cert — disable TLS verification for server fetches
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // This is especially useful for production builds.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.getgrowthrocket.com",
      },
      {
        protocol: "https",
        hostname: "wordpress-919508-5996429.cloudwaysapps.com",
      },
      {
        protocol: "http",
        hostname: "wordpress-919508-5996429.cloudwaysapps.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blogs/:slug*",
        destination: "/blog/:slug*",
        permanent: true,
      },
      {
        source: "/cookie-policy-eu",
        destination: "/cookie-policy",
        permanent: true,
      },
      {
        source: "/cookie-policy-eu/",
        destination: "/cookie-policy",
        permanent: true,
      },
      {
        source: "/fr/cookie-policy-eu",
        destination: "/cookie-policy",
        permanent: true,
      },
      {
        source: "/fr/cookie-policy-eu/",
        destination: "/cookie-policy",
        permanent: true,
      },
      {
        source: "/nl/blog/electrician-website-for-more-calls",
        destination: "/blog/electrician-website-for-more-calls",
        permanent: true,
      },
      {
        source: "/nl/blog/electrician-website-for-more-calls/",
        destination: "/blog/electrician-website-for-more-calls/",
        permanent: true,
      },
      {
        source: "/ggr-electrician",
        destination: "/website-for-electricians",
        permanent: true,
      },
      {
        source: "/ggr-electrician/",
        destination: "/website-for-electricians",
        permanent: true,
      },
      {
        source: "/nl/about",
        destination: "/nl/over-ons",
        permanent: true,
      },
      {
        source: "/nl/about/",
        destination: "/nl/over-ons",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
