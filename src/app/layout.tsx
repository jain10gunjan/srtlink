import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from 'next/head';
import Script from "next/script";
 
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SrtLink",
  description: "A Casual but Trustable Short Link on the Internet.",
  other: { monetag: "56933abcf7d0bdacbd68d2e0399eb34f" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <Script type="text/javascript" src="/static/script.js"/>
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
