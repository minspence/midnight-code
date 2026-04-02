import type { Metadata } from "next";

import "./globals.css";
import SiteLayout from "./components/SiteLayout";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  metadataBase: new URL("https://midnight-code.tech"),
  title: {
    default: "Midnight Code | Web Development in Winston-Salem, NC",
    template: "%s | Midnight Code",
  },
  description:
    "Midnight Code builds responsive websites and web apps using Next.js, Sanity, and Supabase. Based in Winston-Salem, NC — let's build your next project.",
  openGraph: {
    siteName: "Midnight Code",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteLayout>
          {children}
        </SiteLayout>
        <SanityLive />
      </body>
    </html>
  );
}
