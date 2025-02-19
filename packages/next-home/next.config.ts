import type { NextConfig } from "next";
import { REWRITES } from "./rewrites";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return REWRITES;
  },
}

export default nextConfig
