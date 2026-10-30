import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-[150px]">
          {children}
        </main>

        <Footer />

        {/* ================= GOOGLE ANALYTICS 4 ================= */}
        <GoogleAnalytics gaId="G-RDSMMG4JG9" />
      </body>
    </html>
  );
}