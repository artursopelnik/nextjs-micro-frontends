import type { NextConfig } from "next";
import { REWRITES } from "./rewrites";

const { BLOG_URL, HEADER_URL } = process.env;

const nextConfig: NextConfig = {
  reactStrictMode: false,

  async rewrites() {
    return REWRITES;
  },
};

export default nextConfig;
