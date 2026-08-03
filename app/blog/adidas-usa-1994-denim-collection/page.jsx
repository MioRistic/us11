'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USA1994DenimCollectionBlog() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle =
    'Adidas USA 1994 Denim Graphic Collection: Iconic USMNT Throwback Jersey & Gear for World Cup 2026';

  const products = [
    {
      title: 'adidas USA 1994 Denim Graphic Fashion Jersey - Blue',
      price: '$89.99',
      imageUrl:
        'https://fanatics.frgimages.com/usa-soccer/mens-adidas-blue-usa-1994-denim-graphic-fashion-jersey_ss5_p-203129860+pv-1+u-0rqaiuefrdexz2opesdp+v-o83yze9tdyacuelka5l5.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/9VLE4Y',
    },
    {
      title: 'adidas Unisex USA 1994 Denim Graphic Adjustable Hat - Blue',
      price: '$39.99',
      imageUrl:
        'https://fanatics.frgimages.com/usa-soccer/unisex-adidas-blue-usa-1994-denim-graphic-adjustable-hat_ss5_p-203129152+u-ufbkjduhsucpukw0cesc+v-eqmpbab0xuzn4twyojyx.jpg?_hv=2&w=600',
      link: 'https://fanatics.93n6tx.net/9VLE44',
    },
    {
      title: 'adidas USA 1994 Denim Graphic Full-Zip Track Jacket - Blue',
      price: '$119.99',
      imageUrl:
        'https://fanatics.frgimages.com/usa-soccer/mens-adidas-blue-usa-1994-denim-graphic-full-zip-track-jacket_ss5_p-203129859+pv-1+u-rw23rgbp8na8855pobnj+v-smgnnf10isvaqecfx273.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/5k5n2o',
    },
    {
      title: 'adidas USA 1994 Denim Graphic Shorts - White (Most Popular)',
      price: '$59.99',
      imageUrl:
        'https://fanatics.frgimages.com/usa-soccer/mens-adidas-white-usa-1994-denim-graphic-shorts_ss5_p-203129861+pv-4+u-y6odtdjcqz7mbdppfn38+v-kp2n7yddbhfs8lvfjruz.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/gROGyg',
    },
    {
      title: 'adidas Youth USA 1994 Denim Graphic Fashion Jersey - Blue',
      price: '$69.99',
      imageUrl:
        'https://fanatics.frgimages.com/usa-soccer/youth-adidas-blue-usa-1994-denim-graphic-fashion-jersey_ss5_p-203132704+pv-1+u-rl1sbzpxqeqvfwdt6pi5+v-xgmw4arjmafopvf3i1ig.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/bkOVRg',
    },
  ];

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
            Adidas USA 1994 Denim Graphic Collection: Iconic USMNT Throwback Jersey &amp; Gear for World Cup 2026
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-03-16">March 16, 2026</time>
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
            src="https://assets.goal.com/images/v3/bltf53f7a9a05821020/crop/MM5DIMBYGU5DEMRZHA5G433XMU5DAORYHE2Q====/U.S%20Denim%20Kit%20Collection%2024.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Adidas USA 1994 Denim Graphic Jersey blue stars retro USMNT 2026 collection"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: adidas
          </div>
        </figure>

        {/* STICKY BUY BANNER – always under image */}
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
          <a
            href="https://fanatics.93n6tx.net/vDPVe3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div>
              <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                Shop USA 1994 Denim Collection at Fanatics
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
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6 pt-6">

          <p>
            Just in time for the countdown to the 2026 FIFA World Cup on home soil, adidas has dropped a fire throwback: the <strong>USA 1994 Denim Graphic Collection</strong>. This isn’t just any retro kit—it’s a bold revival of the legendary (and polarizing) away jersey worn by the USMNT during the 1994 World Cup, the last time the tournament was hosted in the United States.
          </p>

          <p>
            Featuring that signature washed-denim look with scattered white stars, red accents, and a fearless ’90s vibe, the collection channels pure American soccer nostalgia. Former USMNT legends Alexi Lalas and Cobi Jones star in the campaign—Lalas even unboxed the jersey himself, declaring “DENIM IS UPON US! 1994 LIVES AGAIN!” Perfect for fans reliving the ’94 magic or gearing up for WC 2026.
          </p>

          {/* Fanatics Banner */}
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
                  Shop USA 1994 Denim Collection at Fanatics
                </h3>
              </div>
            </div>
            <a
              href="https://fanatics.93n6tx.net/vDPVe3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Iconic 1994 Denim Jersey – Now Modern &amp; Comfy
          </h2>
          <p>
            The star of the show is the <strong>adidas USA 1994 Denim Graphic Fashion Jersey</strong> in blue. Lightweight recycled polyester gives it modern breathability while keeping the classic V-neck, relaxed fit, and bold star graphics. No official USSF badge (adidas isn’t current supplier), but that’s what makes it a pure lifestyle piece—streetwear meets soccer heritage.
          </p>

          <p>
            Pair it with the matching track jacket, star-motif shorts, adjustable hat, or youth sizes for the whole family. This drop is already flying off shelves ahead of summer 2026—don’t sleep on it!
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Shop the Full Adidas USA 1994 Denim Graphic Collection
          </h2>
          <p className="text-lg">
            Grab your favorites below—prices are current as of March 2026. Support US11 with these affiliate links (we may earn a small commission at no extra cost to you).
          </p>

        </section>

        {/* PRODUCTS GRID */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-12 mt-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="relative h-64 bg-gray-50">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-5">
                <h4 className="font-semibold text-lg text-[#020617] leading-snug">
                  {product.title}
                </h4>
                <p className="text-xl font-bold text-[#020617] mt-2">{product.price}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded-full transition w-full text-center"
                >
                  Shop now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FINAL CTA */}
        <div className="text-center my-12">
          <a
            href="https://fanatics.93n6tx.net/vDPVe3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-10 py-4 rounded-full text-lg transition"
          >
            Shop Full 1994 Denim Collection on Fanatics →
          </a>
        </div>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: March 16, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/blog" className="hover:text-gray-800">
            ← Back to blog
          </Link>
        </footer>

      </div>
    </article>
  );
}