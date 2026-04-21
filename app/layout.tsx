import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";   
import Script from "next/script";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

// Metadata
export const metadata: Metadata = {
  title: {
    default: "US11",
    template: "%s | US11",
  },
  description: "MLS News and Analysis by US11",
};

// Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-[150px]">
          {children}
        </main>

        <Footer />

        {/* ================= GOOGLE ANALYTICS 4 ================= */}
        <GoogleAnalytics gaId="G-ZCKQ7R7PSQ" />
      </body>
    </html>
  );
}