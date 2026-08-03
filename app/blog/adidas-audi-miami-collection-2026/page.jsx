'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function AdidasAudiMiamiCollection() {
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
    '2000s Football Nostalgia Meets Formula 1 Glamour: Adidas and Audi Drop a Miami Collection That Actually Works';

  const products = [
    {
      title: 'Audi adidas 2026 Miami Grand Prix Inter Miami CF Replica Jersey - Black',
      price: '$109.99',
      imageUrl:
        'https://fanatics.frgimages.com/mens-adidas-black-audi-2026-miami-grand-prix-inter-miami-cf-replica-jersey_ss5_p-203560008+u-hfopnbuzt5wjyqh0gl55+v-lcoj4cu2zocv5larg7si.jpg?_hv=2&w=600',
      link: 'https://fanatics.93n6tx.net/2RWgRa',
    },
    {
      title: 'Audi adidas 2026 Miami Grand Prix Inter Miami CF Full-Zip Track Jacket - Black',
      price: '$119.99',
      imageUrl:
        'https://fanatics.frgimages.com/mens-adidas-black-audi-2026-miami-grand-prix-inter-miami-cf-full-zip-track-jacket_ss5_p-203560007+u-dfkpjmtv2ae7jcn4tkjw+v-5wuqb5t9jsk9uzlvd8qw.jpg?_hv=2&w=600',
      link: 'https://fanatics.93n6tx.net/YVyjVB',
    },
    {
      title: 'Audi adidas 2026 Miami Grand Prix Inter Miami CF Team Shorts - Black',
      price: '$74.99',
      imageUrl:
        'https://fanatics.frgimages.com/audi/mens-adidas-black-audi-2026-miami-grand-prix-inter-miami-cf-team-shorts_ss5_p-203560006+pv-1+u-4cfvtngmksl57xom17zp+v-zdtzxoluwujnl8nnk1lx.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/L0Z50o',
    },
    {
      title: 'Audi adidas 2026 Miami Grand Prix Authentic Shorts - Black',
      price: '$74.99',
      imageUrl:
        'https://fanatics.frgimages.com/audi/mens-adidas-black-audi-2026-miami-grand-prix-authentic-shorts_ss5_p-203161896+pv-1+u-oeymlodupe4jps9vfvry+v-uajfprd2izxkry6dbkhp.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/rE20Ey',
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
            2000s Football Nostalgia Meets Formula 1 Glamour: Adidas and Audi Drop a Miami Collection That Actually Works
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-02">May 2, 2026</time>
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
            src="https://www.audif1.com/cms/api/media/file/audif1_2026_miami_collection_messi_teaser_01-1012x1350.webp"
            alt="Adidas Audi Revolut F1 Miami Collection 2026"
            fill
            className="object-cover object-[50%_10%]"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Audi F1
          </div>
        </figure>

        {/* STICKY BUY BANNER – always under image */}
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
          <a
            href="https://fanatics.93n6tx.net/WOG9yZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div>
              <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                Shop Inter Miami kits at Fanatics
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

          <p>Some collaborations feel forced. This one feels inevitable.</p>
          <p>
            When Audi’s new Formula 1 project (powered by Revolut) collided with adidas and Inter Miami, the result was always going to be loud. But instead of another generic merch drop, they’ve created something that actually respects both worlds: the baggy, confident swagger of early 2000s football kits and the sleek, high-tech precision of modern F1.
          </p>
          <p>
            The limited adidas Audi Revolut F1® Team Miami Collection doesn’t just slap logos together. It merges two very different sports cultures through the one thing that connects them right now — the electric energy of Miami.
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
                  Shop Inter Miami kits at Fanatics
                </h3>
              </div>
            </div>
            <a
              href="https://fanatics.93n6tx.net/WOG9yZ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Vibe</h2>
          <p>
            Think classic football terrace wear reimagined for the paddock. Curved paneling, sunset oranges and pinks, iridescent flashes that catch the Miami light, and that unmistakable 2000s oversized fit. It’s the kind of kit you could’ve seen Ronaldinho or Beckham wearing on a pre-season tour, except now it’s sitting in an F1 garage next to carbon fiber and telemetry screens.
          </p>
          <p>
            The hero piece is undoubtedly the driver jersey — a football-style top that Nico Hülkenberg and Gabriel Bortoleto have been wearing in the promo shots. It feels substantial. Heavy fabric, proper weight, the kind of shirt that looks better after a few washes. Paired with matching shorts, it walks the line between replica football kit and teamwear perfectly.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Where Football and F1 Actually Meet</h2>
          <p>What makes this collection interesting is that it isn’t just aesthetic. It understands the crossover:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>The movement and flow of a football kit</li>
            <li>The precision and attitude of race weekend</li>
            <li>The non-stop, neon-soaked energy of Miami</li>
          </ul>
          <p>
            You see it in the details — the way the sponsor placements echo both football shirt branding and F1 car liveries. The way the iridescent detailing changes under different lighting, almost like how a race car looks under the Miami Grand Prix floodlights.
          </p>
          <p>
            Even Lionel Messi got involved in the campaign, wearing the driver jersey inside Inter Miami’s locker room. The image works better than it has any right to. One of the greatest footballers of all time standing in full kit next to F1 machinery. It’s the kind of moment that makes you realize we’re living in a genuinely wild era of sport.
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
                  Shop Inter Miami kits at Fanatics
                </h3>
              </div>
            </div>
            <a
              href="https://fanatics.93n6tx.net/WOG9yZ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Full Collection</h2>
          <p>Beyond the statement jersey and shorts, the drop includes:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Graphic tees with retro typography</li>
            <li>Caps and headwear that lean into the 2000s football casual look</li>
            <li>Footwear that bridges the gap between pitch and paddock</li>
          </ul>
          <p>
            It’s not a massive collection, but it feels considered. Everything has that Miami heat baked into it — sunset tones, vibrant accents, and a confidence that matches the city it’s celebrating.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Final Verdict</h2>
          <p>
            Most crossover collections are forgettable marketing exercises. This one has actual personality. It respects 2000s football culture without being a cheap throwback, and it brings F1 closer to football culture without looking like it’s trying too hard.
          </p>
          <p className="font-semibold">
            If you’re into the current wave of sportswear that blurs lines — football, F1, fashion, lifestyle — this is one of the better executions we’ve seen in a while.
          </p>

        </section>

        {/* SHOP - PRODUCTS */}
        <div className="mt-12 mb-8">
          <h2 className="text-3xl font-bold mb-6">Shop the Collection</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
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
        </div>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: May 2, 2026</p>
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