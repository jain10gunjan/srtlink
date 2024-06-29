import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import Footer from "@/components/Footer";
import ReactGA from "react-ga4";

ReactGA.initialize("G-T2WWFMF74D");

ReactGA.send({ hitType: "pageview"});

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
      <Script src="https://alwingulla.com/88/tag.min.js" data-zone="75757" async data-cfasync="false"/>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
