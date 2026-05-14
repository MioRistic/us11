'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MexicoThirdKit() {
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
    "Mexico’s New Adidas Third Kit Is a Bold Tribute to Their World Cup Legacy";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
        
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <div className="-mx-4 md:-mx-6 lg:-mx-8 xl:-mx-0 bg-zinc-100 border-b border-zinc-200 py-2.5 text-center text-[10px] text-zinc-600">
  This page contains affiliate links. When you purchase through the links provided, 
  <span className="text-zinc-700 font-medium"> US11 may earn a commission</span> 
  at no extra cost to you.
</div>
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
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/1920x1440/723904.jpg"
            alt="Mexico 2026 Adidas Third Kit"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            ADIDAS
          </figcaption>
        </figure>
        
       {/* STICKY SECTION */}
<div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white">
  
  <div className="max-w-2xl mx-auto px-4">
    <a
      href="https://fanatics.93n6tx.net/jRmAJb"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        justify-between
        gap-4
        bg-white
        border
        border-zinc-200
        rounded-3xl
        px-6
        py-4
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-0.5
      "
    >
      <div className="flex items-center gap-4">
        <img
          src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg"
          alt="Fanatics"
          className="h-9"
        />

        <div>
          <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
            Shop Mexico 2026 jerseys at Fanatics
          </h3>

        
        </div>
      </div>

      
    </a>
  </div>
</div>

        

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

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

          {/* FANATICS SHOP BANNER */}
<div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-12 shadow-sm">
  <div className="flex-1">
    <div className="flex items-center gap-3 mb-3">
      <img 
        src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" 
        alt="Fanatics" 
        className="h-8" 
      />
    </div>
    <h3 className="text-2xl font-bold text-[#020617] mb-2">
      Shop Mexico kits at Fanatics
    </h3>
   
  </div>

  <a
    href="https://fanatics.93n6tx.net/jRmAJb" 
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap"
  >
    Buy now
  </a>
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
            <li>
              A retro-inspired adidas Originals trefoil logo on the chest
            </li>

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
          {/* MEXICO */}
                     
                    <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8">
                      <Image
                        src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/960x540/723922_v2.jpg"
                        alt="Mexico 2026 Home Jersey"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
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

          {/* FANATICS SHOP BANNER */}
<div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-12 shadow-sm">
  <div className="flex-1">
    <div className="flex items-center gap-3 mb-3">
      <img 
        src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" 
        alt="Fanatics" 
        className="h-8" 
      />
    </div>
    <h3 className="text-2xl font-bold text-[#020617] mb-2">
      Shop Mexico kits at Fanatics
    </h3>
   
  </div>

  <a
    href="https://fanatics.93n6tx.net/jRmAJb" 
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap"
  >
    Buy now
  </a>
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
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: May 11, 2026</span>

          <Link
            href="/blog"
            className="hover:text-gray-800"
          >
            Back to blog
          </Link>
        </footer>

      </div>
    </article>
  );
}