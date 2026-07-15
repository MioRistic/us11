'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function LewandowskiChicagoKit() {
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

  const articleTitle = "Chicago Fire Unveil Lewandowski Home Kit for Historic 2026 Season";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* AFFILIATE NOTICE */}
        <div className="-mx-4 md:-mx-6 lg:-mx-8 xl:-mx-0 bg-zinc-100 border-b border-zinc-200 py-2.5 text-center text-[10px] text-zinc-600">
          This page contains affiliate links. When you purchase through the links provided, 
          <span className="text-zinc-700 font-medium"> US11 may earn a commission</span> at no extra cost to you.
        </div>

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Chicago Fire Unveil Robert Lewandowski 2026 Home Kit – Where to Buy
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-13">July 13, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2260392490/crop/MM5DIOBWGQ5DENZTGY5G433XMU5DAORQ/GettyImages-2260392490.jpg"
            alt="Robert Lewandowski Chicago Fire 2026 Home Kit"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images | Copyright: 2026
          </div>
        </figure>

      {/* STICKY DUAL BUY TICKETS BANNERS */}
      <div suppressHydrationWarning>{mounted && (
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Banner 1 */}
              <a
                href="https://fanatics.93n6tx.net/jR5M70" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <div>
                  <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                    Shop at Fanatics
                  </h3>
                </div>
                <div className="w-14 h-14 bg-white-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img src="https://www.fanatics.com/content/ws/all/b88152dc-ebb5-4bbb-a3fe-fe3b2f15de08.svg" alt="TicketNetwork" className="w-full h-full object-contain" />
                </div>
              </a>

              {/* Banner 2 */}
              <a
                href="https://mlsstore.i8h2.net/6kxBZq" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <div>
                  <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                    Shop at MLS Store
                  </h3>
                </div>
                <div className="w-14 h-14 bg-white-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png" alt="TicketNetwork" className="w-full h-full object-contain" />
                </div>
              </a>

            </div>
          </div>
        </div>
      )}</div>

       {/* ARTICLE CONTENT */}
<section className="prose prose-lg max-w-none leading-relaxed space-y-8">

  <p>
    Robert Lewandowski&apos;s arrival at Chicago Fire has sparked huge excitement across Major League Soccer, and fans can now complete the moment with the official Chicago Fire 2026 Home Jersey featuring the legendary striker&apos;s iconic No. 9.
  </p>

  <h3 className="text-3xl font-black mt-12 mb-5 text-[#020617]">The 2026 Chicago Fire Home Jersey Design</h3>
  <p>
    The new home kit combines Chicago Fire&apos;s traditional colors with a bold modern look. A sleek black base is complemented by striking red accents, while subtle white details complete one of the club&apos;s most stylish jerseys in recent years. The official club crest sits proudly on the chest, making this jersey a must-have for both Chicago Fire supporters and Lewandowski fans worldwide.
  </p>

  <h3 className="text-xl font-semibold text-gray-900 leading-tight">Robert Lewandowski Begins a New MLS Chapter</h3>
  <p>
    After establishing himself as one of football&apos;s greatest goalscorers with clubs in Germany and Spain, Robert Lewandowski now brings his experience and world-class finishing ability to Major League Soccer.
  </p>
  {/* Lewandowski Banner - Fanatics */}
  <div suppressHydrationWarning>{mounted && (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10 max-w-4xl mx-auto">
  
  {/* Logo + Text */}
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
        Chicago Fire Robert Lewandowski adidas 2026 Home Jersey
      </h3>
    </div>
  </div>

  {/* Button */}
  <a
    href="https://fanatics.93n6tx.net/jR5M70"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
  >
    Shop now
  </a>
  </div>
)}</div>

{/* Lewandowski Banner - MLS Store */}
<div suppressHydrationWarning>{mounted && (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10 max-w-4xl mx-auto">
  
  {/* Logo + Text */}
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
        Chicago Fire Robert Lewandowski adidas 2026 Home Jersey
      </h3>
    </div>
  </div>

  {/* Button */}
  <a
    href="https://mlsstore.i8h2.net/6kxBZq"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
  >
    Shop now
  </a>
  </div>
)}</div>

  <p>
    His arrival immediately places Chicago Fire among the most talked-about clubs in MLS, attracting supporters from around the world who have followed his remarkable career for years.
  </p>
  <p>
    For many fans, owning the official Lewandowski Chicago Fire jersey is the perfect way to celebrate this exciting new chapter.
  </p>
  

  <h3 className="text-xl font-semibold text-gray-900 leading-tight">Replica vs Authentic Jersey</h3>
  <p>
    The Chicago Fire 2026 Home Jersey is available in two versions:
  </p>
  <ul>
    <li><strong>Replica Jersey</strong> – designed for everyday comfort while maintaining the official club look.</li>
    <li><strong>Authentic Match Jersey</strong> – the same version worn by players on the field, featuring premium lightweight materials and advanced moisture management technology.</li>
  </ul>
  <p>
    Both versions are available with official Lewandowski 9 printing.
  </p>

  <h3 className="text-xl font-semibold text-gray-900 leading-tight">Where to Buy the Robert Lewandowski Chicago Fire Jersey</h3>
  <p>
    Fans looking to purchase the official Robert Lewandowski Chicago Fire 2026 Home Jersey can find it through:
  </p>

 {/* Lewandowski Banner - Fanatics */}
<div suppressHydrationWarning>{mounted && (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10 max-w-4xl mx-auto">
  
  {/* Logo + Text */}
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
        Chicago Fire Robert Lewandowski adidas 2026 Home Jersey
      </h3>
    </div>
  </div>

  {/* Button */}
  <a
    href="https://fanatics.93n6tx.net/jR5M70"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
  >
    Shop now
  </a>
  </div>
)}</div>

{/* Lewandowski Banner - MLS Store */}
<div suppressHydrationWarning>{mounted && (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10 max-w-4xl mx-auto">
  
  {/* Logo + Text */}
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
        Chicago Fire Robert Lewandowski adidas 2026 Home Jersey
      </h3>
    </div>
  </div>

  {/* Button */}
  <a
    href="https://mlsstore.i8h2.net/6kxBZq"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
  >
    Shop now
  </a>
  </div>
)}</div>

  

 

  <p>
    Authentic and Replica editions are available in multiple sizes, with customization options for player names and numbers.
  </p>

  <h3 className="text-xl font-semibold text-gray-900 leading-tight">Why This Jersey Is One of MLS&apos;s Biggest Releases</h3>
  <p>
    The Robert Lewandowski Chicago Fire 2026 Home Jersey is expected to become one of the most sought-after MLS shirts of the season. Combining a modern design, premium quality, and the legacy of one of football&apos;s greatest strikers, it represents an exciting new era for both the player and the club.
  </p>

  <p className="font-bold text-xl mt-8">
    Whether you&apos;re a lifelong Chicago Fire supporter, a collector of football shirts, or a fan who has followed Lewandowski throughout his career, this jersey is a standout addition to any collection.
  </p>

</section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: July 13, 2026</span>
          <Link href="/blog" className="hover:text-gray-800">← Back to blog</Link>
        </footer>

      </div>
    </article>
  );
}