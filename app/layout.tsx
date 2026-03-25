import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
