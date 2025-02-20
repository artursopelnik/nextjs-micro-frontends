import { Metadata } from "next";
import Script from "next/script";
import { NEXT_SOURCES } from "../rewrites";

export const metadata: Metadata = {
  title: "Next.js - Home Zone",
  description: "Next.js example for Multi Zones",
};
/*
const importsForReact19 = `{
  "imports": {
    "react": "https://unpkg.com/umd-react@19.0.0-1/dist/react.production.min.js",
    "react-dom/client": "https://unpkg.com/umd-react@19.0.0-1/dist/react-dom.production.min.js",
    "partial-header": "${NEXT_SOURCES.header}/bundle.js"
  }
}` */


const importsForReact18 = `{
  "imports": {
    "react": "https://unpkg.com/react@18.3.1/umd/react.production.min.js",
    "react-dom": "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js",
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
