import { Rewrite } from "next/dist/lib/load-custom-routes";

const { BLOG_URL, HEADER_URL } = process.env;

export const SOURCES = {
  header: "/header",
};
export const REWRITES = <Rewrite[]>[
  {
    source: SOURCES.header,
    destination: `${HEADER_URL}/header`,
  },
  {
    source: `${SOURCES.header}/:path+`,
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
  },
];
