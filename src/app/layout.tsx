import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });
interface ExtendedMetadata extends Metadata {
  name: string;
  content:string;
}
export const metadata: ExtendedMetadata = {
  title: "SrtLink",
  description: "A Casual but Trustable Short Link on the Internet.",
  name:"monetag",
  content:"56933abcf7d0bdacbd68d2e0399eb34f"
};

 



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <meta name="monetag" content="56933abcf7d0bdacbd68d2e0399eb34f" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
