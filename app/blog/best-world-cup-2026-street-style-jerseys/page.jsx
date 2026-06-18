'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function BestWorldCup2026Jerseys() {
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

  const articleTitle = "Best World Cup 2026 Jerseys for Street Style: The Kits Worth Buying";

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
            Best World Cup 2026 Jerseys for Street Style: The Kits Worth Buying
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-16">June 16, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-4">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={20} />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={20} />
            </a>
            <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={20} />
            </a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition">
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
<figure className="relative w-full rounded-2xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
  <Image
    src="https://assets.goal.com/images/v3/blteb5ae4bd28752ec3/adidas%20FIFA%20World%20Cup%202026%20kit%20-%20Germany.png?auto=webp&format=pjpg&width=1920&quality=60"
    alt="Best World Cup 2026 Jerseys for Street Style"
    fill
    className="object-cover"
    priority
  />
  
  {/* COPYRIGHT NA SLICI */}
  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
    ADIDAS
  </div>
</figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p className="text-xl">
            Not every World Cup 2026 jersey is designed for everyday life.
          </p>

          <p>
            Some shirts look incredible under stadium lights but feel impossible to style outside football. Others become more than just match-day gear — they become streetwear pieces that work with jeans, sneakers, jackets, and everyday outfits.
          </p>

          <p>
            The best football jerseys are not only about national pride. They represent identity, design, culture, and style.
          </p>

          <p>
            For the 2026 FIFA World Cup, several teams have released kits that successfully combine football heritage with modern fashion. Here is our ranking of the top 10 World Cup 2026 kits for street style.
          </p>

                           {/* 10. ENGLAND */}
          <h3 className="text-2xl font-bold mt-10 mb-4">10. England Home Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://i.ibb.co/bjmVsGBY/image.jpg" 
              alt="England 2026 Home Jersey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © Nike
            </div>
          </figure>
          <p><strong>Best for:</strong> Retro nostalgia with modern feel</p>
          <p>
            England have delivered a beautiful nostalgic kit that references multiple classic designs — most notably the Euro 2000 and Euro 88 shirts. The clean white base with tasteful red and navy accents feels both fresh and familiar at the same time.
          </p>
          <p><strong>Why buy it?</strong> Perfect balance between heritage and wearability. It looks great on the street, carries serious Three Lions pride, and will age very well. A strong choice for any England fan who appreciates classic English kits.</p>

          {/* FANATICS BANNER */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-8 shadow-sm">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" alt="Fanatics" className="h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#020617] mb-2">Shop England kits at Fanatics</h3>
            </div>
            <a href="https://fanatics.93n6tx.net/zzP1q0" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap">
              Buy now
            </a>
          </div>

          {/* 9. COLOMBIA */}
          <h3 className="text-2xl font-bold mt-12 mb-4">9. Colombia Home Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://i.ibb.co/dsnhhVbC/Colombia-26-Home-Authentic-Jersey-Yellow-JL6971-HM55.avif"
              alt="Colombia 2026 Home Jersey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © Adidas
            </div>
          </figure>
          <p><strong>Best for:</strong> Bold colors and personality</p>
          <p>
            One of the most vibrant and energetic kits at the entire World Cup. The intense yellow combined with deep blue and red details delivers a true Latin American character. The subtle butterfly pattern in the background is a beautiful touch.
          </p>
          <p><strong>Why buy it?</strong> Extremely eye-catching on the street. If you love bold colors and kits with strong personality, Colombia is an excellent choice.</p>

          {/* FANATICS BANNER */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-8 shadow-sm">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" alt="Fanatics" className="h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#020617] mb-2">Shop Colombia kits at Fanatics</h3>
            </div>
            <a href="https://fanatics.93n6tx.net/4ay6K0" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap">
              Buy now
            </a>
          </div>

          {/* 8. USMNT */}
          <h3 className="text-2xl font-bold mt-12 mb-4">8. USMNT Home Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://i.ibb.co/8g1mqD74/AURORA-IB5339-133-PHSYM001-2000.webp"
              alt="USMNT 2026 Home Jersey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © Nike
            </div>
          </figure>
          <p><strong>Best for:</strong> Supporting the host nation</p>
          <p>
            Solid, even if not perfect. Nike wanted to pay tribute to the iconic 1994 jersey by using wavy horizontal stripes instead of vertical ones. While the wavy effect isn&apos;t to everyone&apos;s taste, the red-white combination and large crest still carry real weight.
          </p>
          <p><strong>Why buy it?</strong> A good pick for fans who want to support the host nation at their own World Cup.</p>

          {/* FANATICS BANNER */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-8 shadow-sm">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" alt="Fanatics" className="h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#020617] mb-2">Shop USMNT kits at Fanatics</h3>
            </div>
            <a href="https://fanatics.93n6tx.net/MKARXJ" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap">
              Buy now
            </a>
          </div>

          {/* 7. BRAZIL AWAY */}
          <h3 className="text-2xl font-bold mt-12 mb-4">7. Brazil Away Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/blt98879cebe3f83100/Brazil%202026%20World%20Cup%20away%20kit.png?auto=webp&format=pjpg&width=1920&quality=60"
              alt="Brazil 2026 Away Jersey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © Nike
            </div>
          </figure>
          <p><strong>Best for:</strong> Premium streetwear style</p>
          <p>
            For me personally, this blue away jersey is better than the classic yellow one this cycle. The dark blue base with a black mottled pattern feels modern and aggressive, while the Jordan logo adds exclusivity.
          </p>
          <p><strong>Why buy it?</strong> Less obvious than the yellow kit, so it feels more special. Premium streetwear vibe.</p>

          {/* FANATICS BANNER */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-8 shadow-sm">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" alt="Fanatics" className="h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#020617] mb-2">Shop Brazil kits at Fanatics</h3>
            </div>
            <a href="https://fanatics.93n6tx.net/3kybLn" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap">
              Buy now
            </a>
          </div>

          {/* 6. JAPAN */}
          <h3 className="text-2xl font-bold mt-12 mb-4">6. Japan Home Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://i.ibb.co/PZbVdMjj/Japan-26-Home-Jersey-Blue-KD3345-41-detail.avif"
              alt="Japan 2026 Home Jersey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © Adidas
            </div>
          </figure>
          <p><strong>Best for:</strong> Clean design lovers</p>
          <p>
            One of the cleanest and most elegant kits at the tournament. The blue color with a subtle graphic pattern feels modern while staying true to Japan&apos;s signature minimalism.
          </p>
          <p><strong>Why buy it?</strong> Extremely easy to wear in everyday life. Universal blue and clean design make it elegant and unobtrusive.</p>

          {/* FANATICS BANNER */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-8 shadow-sm">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" alt="Fanatics" className="h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#020617] mb-2">Shop Japan kits at Fanatics</h3>
            </div>
            <a href="https://fanatics.93n6tx.net/GbOr22" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap">
              Buy now
            </a>
          </div>

          {/* 5. ARGENTINA */}
          <h3 className="text-2xl font-bold mt-12 mb-4">5. Argentina Home Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://i.ibb.co/j78h72M/4659-argentina-2026-adidas-home-kit-b.jpg"
              alt="Argentina 2026 Home Jersey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © Adidas
            </div>
          </figure>
          <p><strong>Best for:</strong> History and football heritage</p>
          <p>
            This jersey carries extra weight as Argentina are the reigning world champions. Golden details, three stars, and classic blue and white stripes give it real emotional value — especially with Messi 10 on the back.
          </p>
          <p><strong>Why buy it?</strong> This isn&apos;t just a jersey — it tells a story. Premium look on the street.</p>

          {/* FANATICS BANNER */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-8 shadow-sm">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" alt="Fanatics" className="h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#020617] mb-2">Shop Argentina kits at Fanatics</h3>
            </div>
            <a href="https://fanatics.93n6tx.net/NGRAm1" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap">
              Buy now
            </a>
          </div>

          {/* 4. SPAIN */}
          <h3 className="text-2xl font-bold mt-12 mb-4">4. Spain Home Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/bltcacd39021d4d959b/Spain%202026%20World%20Cup%20home%20kit%20-%20Merino.png?auto=webp&format=pjpg&width=3840&quality=60"
              alt="Spain 2026 Home Jersey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © Adidas
            </div>
          </figure>
          <p><strong>Best for:</strong> Modern classic style</p>
          <p>
            Spain made a bold but smart move. They combined classic red with dark blue on the sleeves and added red-yellow stripes. The color-block effect works excellently.
          </p>
          <p><strong>Why buy it?</strong> Very wearable and stylish. A jersey you&apos;ll still wear years after the tournament.</p>

          {/* FANATICS BANNER */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-8 shadow-sm">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" alt="Fanatics" className="h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#020617] mb-2">Shop Spain kits at Fanatics</h3>
            </div>
            <a href="https://fanatics.93n6tx.net/yZjGBG" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap">
              Buy now
            </a>
          </div>

          {/* 3. MEXICO */}
          <h3 className="text-2xl font-bold mt-12 mb-4">3. Mexico Home Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://i.ibb.co/FpVP8WD/Mexico-26-Home-Authentic-Jersey-Green-JL8540-HM53-1.avif"
              alt="Mexico 2026 Home Jersey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © Adidas
            </div>
          </figure>
          <p><strong>Best for:</strong> Cultural identity</p>
          <p>
            Deep green with subtle Aztec patterns in the background — a perfect capture of Mexican spirit and a nice nostalgic nod to the late 90s.
          </p>
          <p><strong>Why buy it?</strong> Green jerseys are usually hard to style, but this one is neutral enough to wear easily with jeans or black pants.</p>

          {/* FANATICS BANNER */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-8 shadow-sm">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" alt="Fanatics" className="h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#020617] mb-2">Shop Mexico kits at Fanatics</h3>
            </div>
            <a href="https://fanatics.93n6tx.net/rajWrG" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap">
              Buy now
            </a>
          </div>

          {/* 2. NEW ZEALAND */}
          <h3 className="text-2xl font-bold mt-12 mb-4">2. New Zealand Home Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://i.ibb.co/Mb5VFgt/New-Zealand-Home-Men-s-Soccer-Jersey.avif"
              alt="New Zealand 2026 Home Jersey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © Adidas
            </div>
          </figure>
          <p><strong>Best for:</strong> Minimal luxury</p>
          <p>
            The black New Zealand jersey is one of the most elegant at the tournament. The subtle tonal Silver Fern pattern adds depth and a premium feel without being loud.
          </p>
          <p><strong>Why buy it?</strong> Incredibly practical and versatile. The black color and minimalism make it easy to combine with almost anything.</p>

          {/* FANATICS BANNER */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-8 shadow-sm">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" alt="Fanatics" className="h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#020617] mb-2">Shop New Zealand kits at Fanatics</h3>
            </div>
            <a href="https://fanatics.93n6tx.net/vDQemL" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap">
              Buy now
            </a>
          </div>

          {/* 1. GERMANY */}
          <h3 className="text-2xl font-bold mt-12 mb-4">1. Germany Home Jersey</h3>
          <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://i.ibb.co/GQdQS3nG/f3cdb35ae55aa27445f4b0a753b27c5e.webp"
              alt="Germany 2026 Home Jersey"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              © Adidas
            </div>
          </figure>
          <p><strong>Best for:</strong> Everyday street style</p>
          <p>
            My absolute favorite kit of the entire World Cup. Adidas created a modern but faithful version of the legendary 1990 jersey. Clean white base with subtle German flag details.
          </p>
          <p><strong>Why buy it?</strong> The best all-rounder. Looks fantastic on the street and works with almost anything. If you can buy only one jersey from this World Cup — this is the one.</p>

          {/* FANATICS BANNER */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-8 shadow-sm">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <img src="https://www.fanatics.com/content/assets/__0-1381085203729.737.svg" alt="Fanatics" className="h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#020617] mb-2">Shop Germany kits at Fanatics</h3>
            </div>
            <a href="https://fanatics.93n6tx.net/qWmrGN" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap">
              Buy now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">Final Ranking</h2>

          <table className="w-full border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left">Rank</th>
                <th className="p-3 text-left">Team</th>
                <th className="p-3 text-left">Style Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3">1</td><td className="p-3">Germany Home</td><td className="p-3">⭐⭐⭐⭐⭐</td></tr>
              <tr><td className="p-3">2</td><td className="p-3">New Zealand Home</td><td className="p-3">⭐⭐⭐⭐⭐</td></tr>
              <tr><td className="p-3">3</td><td className="p-3">Mexico Home</td><td className="p-3">⭐⭐⭐⭐⭐</td></tr>
              <tr><td className="p-3">4</td><td className="p-3">Spain Home</td><td className="p-3">⭐⭐⭐⭐½</td></tr>
              <tr><td className="p-3">5</td><td className="p-3">Argentina Home</td><td className="p-3">⭐⭐⭐⭐½</td></tr>
              <tr><td className="p-3">6</td><td className="p-3">Japan Home</td><td className="p-3">⭐⭐⭐⭐½</td></tr>
              <tr><td className="p-3">7</td><td className="p-3">Brazil Away</td><td className="p-3">⭐⭐⭐⭐</td></tr>
              <tr><td className="p-3">8</td><td className="p-3">USMNT Home</td><td className="p-3">⭐⭐⭐⭐</td></tr>
              <tr><td className="p-3">9</td><td className="p-3">Colombia Home</td><td className="p-3">⭐⭐⭐⭐</td></tr>
              <tr><td className="p-3">10</td><td className="p-3">England Home</td><td className="p-3">⭐⭐⭐⭐</td></tr>
            </tbody>
          </table>

          <h2 className="text-3xl font-bold mt-10 mb-4">Which one should you buy?</h2>
          <p><strong>Most versatile:</strong> Germany, New Zealand, Japan</p>
          <p><strong>Strongest identity:</strong> Argentina, Brazil, Mexico</p>
          <p><strong>Host nation pride:</strong> USMNT</p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: June 16, 2026</span>
          <Link href="/blog" className="hover:text-gray-800">← Back to blog</Link>
        </footer>

      </div>
    </article>
  );
}