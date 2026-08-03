'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MexicoThirdKit() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
    setMounted(true);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle =
    "Mexico’s New Adidas Third Kit Is a Bold Tribute to Their World Cup Legacy";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">

      {/* FULL-BLEED AFFILIATE NOTICE – edge to edge, on top */}
      <div className="w-full bg-zinc-100 border-b border-zinc-200 py-2.5 text-center text-[10px] text-zinc-600">
        This page contains affiliate links. When you purchase through the links provided,{' '}
        <span className="text-zinc-700 font-medium">US11 may earn a commission</span> at no extra cost to you.
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Mexico’s New Adidas Third Kit Is a Bold Tribute to Their World Cup Legacy
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-11">May 11, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

     {/* FEATURE IMAGE */}
<figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
  <Image
    src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/1920x1440/723904.jpg"
    alt="Mexico 2026 Adidas Third Kit"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
    ADIDAS
  </div>
</figure>

{/* STICKY BUY BANNER – always sticky under image */}
<div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
  <a
    href="https://fanatics.93n6tx.net/jRmAJb"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
  >
    <div>
      <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
        Shop Mexico 2026 jerseys at Fanatics
      </h3>
    </div>
    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
      <img
        src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg"
        alt="Fanatics"
        className="w-full h-full object-contain"
      />
    </div>
  </a>
</div>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 pt-6">

          <p>
            As the only nation ever to host three FIFA World Cups, Mexico has never been shy about embracing its footballing heritage.
          </p>

          <p>
            On Monday, adidas and the Mexican Football Federation reminded the world exactly why.
          </p>

          <p>
            The new Mexico 2026 Third Kit is a striking all-black jersey that goes far beyond a simple color swap.
          </p>

          <p>
            It is a deliberate, confident statement — a celebration of national identity and a tribute to the country’s unique place in World Cup history.
          </p>

          {/* Fanatics Banner */}
          <div suppressHydrationWarning>
            {mounted && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
                <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
                    <img
                      src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg"
                      alt="Fanatics"
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                      Shop Mexico kits at Fanatics
                    </h3>
                  </div>
                </div>
                <a
                  href="https://fanatics.93n6tx.net/jRmAJb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
                >
                  Shop now
                </a>
              </div>
            )}
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Design That Tells a Story
          </h2>

          <p>
            Centered around the concept “The Mexican Wa(y)ve,” the jersey features a subtle, tonal ‘MX’ graphic pattern that covers the entire shirt.
          </p>

          <p>
            Up close, the repeating motif creates depth and movement. From a distance, it gives the kit a sleek, almost premium monochrome look with real personality.
          </p>

          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>A retro-inspired adidas Originals trefoil logo on the chest</li>
            <li>
              The phrase “Somos México” (“We are Mexico”) embroidered on the inner collar
            </li>
            <li>
              Tasteful green, white, and red accent details that quietly nod to the Mexican flag
            </li>
          </ul>

          <p>
            Adidas has described the jersey as “a manifestation of the Mexican spirit in each thread,” and for once, the marketing speak feels earned.
          </p>

          <p>
            This is a kit that feels culturally rooted rather than commercially generic.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            More Than Just Matchday Apparel
          </h2>

          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/960x540/723922_v2.jpg"
              alt="Mexico 2026 Third Jersey detail"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © ADIDAS
            </div>
          </figure>

          <p>
            In a particularly nice touch, adidas has partnered with Mexican artisan brand Someone Somewhere to create a limited “Artisan JSY” version.
          </p>

          <p>
            This special edition features hand-embroidered details made by women artisans from Puebla’s Sierra Norte region and comes with a sophisticated polo-style collar.
          </p>

          <p>
            It’s a meaningful collaboration that goes beyond football — supporting local craftsmanship while giving the kit an extra layer of cultural significance.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            When Will We See It?
          </h2>

          <p>
            Mexico is expected to debut the new third kit on May 22 in a friendly against Ghana.
          </p>

          <p>
            The jersey is already available for purchase through adidas, Fanatics, and select retailers.
          </p>

          <p>
            Given the combination of World Cup hosting hype and the exclusive artisan edition, demand is expected to be extremely high.
          </p>

          {/* Fanatics Banner */}
          <div suppressHydrationWarning>
            {mounted && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
                <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
                    <img
                      src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg"
                      alt="Fanatics"
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                      Shop Mexico kits at Fanatics
                    </h3>
                  </div>
                </div>
                <a
                  href="https://fanatics.93n6tx.net/jRmAJb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
                >
                  Shop now
                </a>
              </div>
            )}
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Final Verdict
          </h2>

          <p>
            This is one of the most successful third kits we’ve seen in the buildup to the 2026 tournament.
          </p>

          <p>
            It’s bold without being overdesigned, modern while respecting tradition, and deeply connected to Mexican identity.
          </p>

          <p className="font-semibold text-xl">
            For a host nation with such a rich and emotional footballing history, that feels exactly right. Mexico isn’t just preparing to host the World Cup — they’re dressing the part.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: May 11, 2026</span>
          <Link href="/blog" className="hover:text-gray-800">
            ← Back to blog
          </Link>
        </footer>

      </div>
    </article>
  );
}