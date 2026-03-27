import type { Metadata } from "next";

import "./globals.css";
import SiteLayout from "./components/SiteLayout";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Midnight Code",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteLayout>
          {children}
        </SiteLayout>
        <SanityLive />
      </body>
    </html>
  );
}
