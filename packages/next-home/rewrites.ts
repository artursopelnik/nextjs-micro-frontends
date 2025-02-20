import { Rewrite } from "next/dist/lib/load-custom-routes";

const { BLOG_URL, HEADER_URL, PROJECTS_URL } = process.env;

export const NEXT_SOURCES = {
  header: "/header",
  projectsLegacy: "/projects-legacy"
};
export const REWRITES = <Rewrite[]>[
  {
    source: NEXT_SOURCES.header,
    destination: `${HEADER_URL}/header`,
  },
  {
    source: `${NEXT_SOURCES.header}/:path+`,
    destination: `${HEADER_URL}/header/:path+`,
  },
  {
    source: NEXT_SOURCES.projectsLegacy,
    destination: `${PROJECTS_URL}/projects-legacy`,
  },
  {
    source: `${NEXT_SOURCES.projectsLegacy}/:path+`,
    destination: `${PROJECTS_URL}/projects-legacy/:path+`,
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
