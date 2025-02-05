const { BLOG_URL, HEADER_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  async rewrites() {
    return [
      {
        source: "/header",
        destination: `${HEADER_URL}/header`,
      },
      {
        source: "/header/:path+",
        destination: `${HEADER_URL}/header/:path+`,
      },
      {
        source: "/blog",
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: "/blog/:path+",
        destination: `${BLOG_URL}/blog/:path+`,
      },
      {
        source: "/blog-static/_next/:path+",
        destination: `${BLOG_URL}/blog-static/_next/:path+`,
      }
    ];
  },
};

module.exports = nextConfig;
