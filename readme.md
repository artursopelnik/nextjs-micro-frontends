# Next.js Micro Frontends with Multi-Zone and SystemJS

This repository demonstrates how to serve multiple [Next.js](https://nextjs.org/) applications from a single domain using [Multi Zones](https://nextjs.org/docs/advanced-features/multi-zones).  
Additionally, it showcases how to render multiple micro-frontends on a single page using [SystemJS](https://github.com/systemjs/systemjs).

## Results

It works! However, SystemJS only supports the UMD module format, which requires a UMD build.

- Up to **React 18**, this posed no issues.
- As of **React 19**, the React team has officially stopped providing a UMD build. There is still a community-provided UMD build, which works but is no longer officially supported. ([More details](https://github.com/facebook/react/issues/31867))

Using ESM and native import maps **without SystemJS** does not work, likely due to Next.js’s internal handling of modules.

---
