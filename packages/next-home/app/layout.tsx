import { Metadata } from "next";
import Script from "next/script";
import { NEXT_SOURCES } from "../rewrites";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js - Home Zone",
  description: "Next.js example for Multi Zones",
}

const importsForReact18 = `{
  "imports": {
    "react": "${NEXT_SOURCES.header}/vendor/react.production.min.js",
    "react-dom": "${NEXT_SOURCES.header}/vendor/react-dom.production.min.js",
    "partial-header": "${NEXT_SOURCES.header}/bundle.js"
  }
}`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script type="systemjs-importmap" strategy="beforeInteractive">
          {`${importsForReact18}`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
