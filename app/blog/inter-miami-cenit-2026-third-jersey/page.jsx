'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function InterMiamiCenitJersey() {
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
    "Inter Miami Cénit 2026 Third Jersey: Full Guide, Prices & Where to Buy";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">

      {/* FULL-BLEED AFFILIATE NOTICE – edge to edge */}
      <div className="w-full bg-zinc-100 border-b border-zinc-200 py-2.5 text-center text-[10px] text-zinc-600">
        This page contains affiliate links. When you purchase through the links provided,{' '}
        <span className="text-zinc-700 font-medium">US11 may earn a commission</span> at no extra cost to you.
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Inter Miami Cénit 2026 Third Jersey: Full Guide, Prices & Where to Buy
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-30">July 30, 2026</time>
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
            src="https://www.mlsstore.com/content/ws/all/a92d7370-fdf2-438d-b9b8-2e35981037df__2055X750.jpg"
            alt="Inter Miami CF 2026 Cénit Third Jersey"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            MLS Store
          </div>
        </figure>

        {/* STICKY DUAL BUY BANNERS */}
        <div suppressHydrationWarning>
          {mounted && (
            <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Banner 1 – Fanatics */}
                <a
                  href="https://fanatics.93n6tx.net/PzkXyR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                      Shop at Fanatics
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

                {/* Banner 2 – MLS Store */}
                <a
                  href="https://mlsstore.i8h2.net/QYeoy6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div>
                    <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                      Shop at MLS Store
                    </h3>
                  </div>
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
                      alt="MLS Store"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </a>

              </div>
            </div>
          )}
        </div>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 pt-6">

          <p>
            Inter Miami have dropped one of the cleanest kits of the 2026 season — the new white <strong>Cénit</strong> third jersey. Released the same day as the official launch, the shirt is already live on the MLS Store and Fanatics, with both plain and star versions (Messi, Casemiro) available.
          </p>

          <p>
            Here’s everything you need to know before you buy.
          </p>

          <h3 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Design: Clean, modern, Miami
          </h3>
          <p>
            The Cénit third kit is built around a pure white base. Subtle tonal patterns and soft blue accents give it depth without looking busy. The Inter Miami crest sits cleanly on the chest, the adidas Trefoil returns for the third kit, and the overall look feels premium and street-ready.
          </p>
          <p>
            It works equally well on the pitch and off it — the kind of white jersey that looks sharp with jeans or shorts.
          </p>

          {/* Fanatics Banner */}
          <div suppressHydrationWarning>
            {mounted && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10 max-w-4xl mx-auto">
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
                      Inter Miami CF adidas 2026 Third Replica Jersey – White
                    </h3>
                  </div>
                </div>
                <a
                  href="https://fanatics.93n6tx.net/PzkXyR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
                >
                  Shop now
                </a>
              </div>
            )}
          </div>

          {/* MLS Store Banner */}
          <div suppressHydrationWarning>
            {mounted && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10 max-w-4xl mx-auto">
                <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
                      alt="MLS Store"
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                      Inter Miami CF adidas 2026 Third Replica Jersey – White
                    </h3>
                  </div>
                </div>
                <a
                  href="https://mlsstore.i8h2.net/QYeoy6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
                >
                  Shop now
                </a>
              </div>
            )}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            Official prices (MLS Store / Fanatics)
          </h3>
          <ul>
            <li><strong>Men’s Third Replica (plain)</strong> — $100.00</li>
            <li><strong>Lionel Messi Third Replica</strong> — $130.00</li>
            <li><strong>Lionel Messi On-Field Authentic</strong> — $205.00</li>
            <li><strong>Third Replica Custom</strong> — $135.00</li>
            <li><strong>Carlos Casemiro Third Replica</strong> — $135.00</li>
            <li><strong>Youth Third Replica</strong> — $79.99</li>
          </ul>
          <p>
            Messi versions include <strong>Free Jersey Assurance</strong>.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            Replica vs Authentic Jersey
          </h3>
          <p>
            The Inter Miami 2026 Third Jersey is available in two versions:
          </p>
          <ul>
            <li>
              <strong>Replica Jersey</strong> – designed for everyday comfort while maintaining the official club look.
            </li>
            <li>
              <strong>Authentic Match Jersey</strong> – the same version worn by players on the field, featuring premium lightweight materials and advanced moisture management technology.
            </li>
          </ul>
          <p>
            Both versions are available with official Messi and Casemiro printing.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            What’s selling fastest
          </h3>
          <p>
            Right now the clear hierarchy is:
          </p>
          <ol>
            <li><strong>Messi Replica ($130)</strong> — highest demand</li>
            <li><strong>Plain Replica ($100)</strong> — best value and strong volume</li>
            <li><strong>Messi Authentic ($205)</strong> — collectors</li>
            <li><strong>Casemiro / Custom ($135)</strong></li>
            <li><strong>Youth ($79.99)</strong></li>
          </ol>
          <p>
            White third kits from big clubs move quickly once the first stock wave sells out. If you want a specific size or Messi print, it’s better not to wait.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            Where to Buy the Inter Miami Cénit Third Jersey
          </h3>
          <p>
            Fans looking to purchase the official Inter Miami 2026 Third Jersey can find it through:
          </p>

          {/* Fanatics Banner */}
          <div suppressHydrationWarning>
            {mounted && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10 max-w-4xl mx-auto">
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
                      Lionel Messi Inter Miami 2026 Third Replica – White
                    </h3>
                  </div>
                </div>
                <a
                  href="https://fanatics.93n6tx.net/PzkXyR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
                >
                  Shop now
                </a>
              </div>
            )}
          </div>

          {/* MLS Store Banner */}
          <div suppressHydrationWarning>
            {mounted && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10 max-w-4xl mx-auto">
                <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-gray-50">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png"
                      alt="MLS Store"
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                      Lionel Messi Inter Miami 2026 Third Replica – White
                    </h3>
                  </div>
                </div>
                <a
                  href="https://mlsstore.i8h2.net/QYeoy6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
                >
                  Shop now
                </a>
              </div>
            )}
          </div>

          <p>
            Authentic and Replica editions are available in multiple sizes, with customization options for player names and numbers.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            Why This Jersey Is One of MLS’s Biggest Releases
          </h3>
          <p>
            The Inter Miami Cénit 2026 Third Jersey is expected to become one of the most sought-after MLS shirts of the season. Combining a clean modern design, premium quality, and the Messi version available from day one, it represents an exciting new chapter for the club.
          </p>

          <p className="font-bold text-xl mt-8">
            Whether you want the plain $100 Replica for everyday wear or the Messi $130 print, this is the Inter Miami kit to get in 2026.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: July 30, 2026</span>
          <Link href="/blog" className="hover:text-gray-800">
            ← Back to blog
          </Link>
        </footer>

      </div>
    </article>
  );
}