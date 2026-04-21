import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
export const metadata = {
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

        {/* === COOKIEBOT === */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="ea781e5b-1248-4e99-baa7-283e8debb2c5"
          strategy="beforeInteractive"
          type="text/javascript"
        />

        {/* === GOOGLE ANALYTICS 4 (GA4) - COOKIEBOT CONTROLLED === */}

        {/* GA script loader */}
        <Script
          id="ga4-src"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZCKQ7R7PSQ"
          strategy="beforeInteractive"
          type="text/plain"
          data-cookieconsent="statistics"
        />

        {/* GA config */}
        <Script
          id="ga4-config"
          strategy="beforeInteractive"
          type="text/plain"
          data-cookieconsent="statistics"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('js', new Date());

            gtag('config', 'G-ZCKQ7R7PSQ', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}