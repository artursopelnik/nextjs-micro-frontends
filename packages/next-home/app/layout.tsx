import { Metadata } from "next";
import Script from "next/script";
import { SOURCES } from "../rewrites";

export const metadata: Metadata = {
  title: "Next.js - Home Zone",
  description: "Next.js example for Multi Zones",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script type="systemjs-importmap">
          {`{
              "imports": {
                "react": "https://unpkg.com/umd-react@19.0.0-1/dist/react.production.min.js",
                "react-dom/client": "https://unpkg.com/umd-react/dist/react-dom.production.min.js",
                "partial-header": "${SOURCES.header}/partial-header.js"
              }
          }`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
