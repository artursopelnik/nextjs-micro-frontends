import { Metadata } from 'next';
import Script from "next/script";

export const metadata: Metadata = {
  title: "Next.js - Home Zone",
  description: "Next.js example for Multi Zones"
};

const NEXT_SOURCES = {
  header: '/header'
}

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
                "react": "https://unpkg.com/react@18.3.1/umd/react.production.min.js",
                "react-dom": "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js",
                "partial-header": "${NEXT_SOURCES.header}/dist/partial-header.min.js"
              }
          }`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
