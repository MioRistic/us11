'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNT2026KitsBlog() {
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
    'U.S. Soccer and Nike Unveil 2026 Kits: Patriotic Boldness for the Home World Cup';

  const products = [
    {
      title: 'USMNT Nike 2026 Home Stadium Replica Jersey - White',
      price: '$100.00',
      imageUrl:
        'https://fanatics.frgimages.com/usmnt/mens-nike-white-usmnt-2026-home-stadium-replica-jersey_ss5_p-203965490+u-it1nev0d5ux18upodbtk+v-50sz1hlmvcpkiijaf9eh.png?_hv=2&w=600',
      link: 'https://fanatics.93n6tx.net/L0KRaj',
    },
    {
      title: 'USMNT Nike 2026 Away Stadium Replica Jersey - Blue',
      price: '$100.00',
      imageUrl:
        'https://fanatics.frgimages.com/usmnt/mens-nike-blue-usmnt-2026-away-stadium-replica-jersey_ss5_p-203514504+pv-1+u-3lnsvwvcz0geopmzy99o+v-txw6kv4siuq2umlcfulb.png?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/jReJWe',
    },
    {
      title: 'USMNT Nike 2026 Away Match Authentic Jersey - Blue',
      price: '$180.00',
      imageUrl:
        'https://fanatics.frgimages.com/usmnt/mens-nike-blue-usmnt-2026-away-match-authentic-jersey_ss5_p-203514503+u-oxgtp6ywc4k8pq5jcy5i+v-9qf46gpzhaqaiwcktyoz.png?_hv=2&w=600',
      link: 'https://fanatics.93n6tx.net/gROabr',
    },
    {
      title: 'USMNT Nike 2026 Home Match Authentic Jersey - White',
      price: '$180.00',
      imageUrl:
        'https://fanatics.frgimages.com/usmnt/mens-nike-white-usmnt-2026-home-match-authentic-jersey_ss5_p-203965489+pv-1+u-aliioamyxlhg5iej9hzk+v-kggopjettshp6mprc50s.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/R0G2y9',
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
            U.S. Soccer and Nike Unveil 2026 Kits: Patriotic Boldness for the Home World Cup
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
            src="https://assets.goal.com/images/v3/blt532e5fdd75fc8dc0/crop/MM5DIMBZGM5DEMZQGI5G433XMU5DAORYHA======/USSF_MNT_Kit_Launch_Vogue_mntjerseyshoot_11-09-25-124.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="USMNT Nike 2026 Home and Away kits official launch shoot"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            © Nike
          </div>
        </figure>

        {/* STICKY BUY BANNER – always under image */}
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
          <a
            href="https://fanatics.93n6tx.net/MKARXJ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div>
              <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                Shop USMNT 2026 kits at Fanatics
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
            On March 16, 2026, U.S. Soccer and Nike officially unveiled the national team’s new kits for the 2026 FIFA Men’s World Cup, co-hosted on American soil. Dubbed the “Stripes Kit” (home) and “Stars Kit” (away), the designs represent a bold, unified visual identity across all 27 U.S. Soccer national teams—from the USMNT and USWNT to youth and para squads—for the first time ever.
          </p>

          <p>
            Coming off widespread player and fan backlash to the plain 2022 kits, this cycle involved direct input from stars like Tyler Adams and Christian Pulisic. The result? A patriotic, motion-inspired home jersey with wavy red-and-white stripes, and a sleek navy away featuring subtle metallic star jacquard. These kits debut in friendlies against Belgium and Portugal in Atlanta later this month, building momentum for the biggest World Cup in history.
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
                  Shop USMNT 2026 kits at Fanatics
                </h3>
              </div>
            </div>
            <a
              href="https://fanatics.93n6tx.net/MKARXJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Stripes Home Kit: Flag in Motion
          </h2>
          <p>
            The home jersey features horizontal red and white waves across an off-white base—evoking the American flag rippling in the wind. Navy collar, cuffs, and shoulders frame the look, while “THE BEST OF U.S.” is scripted inside the neckline. Nike’s Dri-FIT ADV tech ensures breathability and performance. It’s dynamic, high-visibility, and a clear step up from 2022’s minimalism.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Stars Away Kit: Subtle Power
          </h2>
          <p>
            The away kit opts for a deep navy base with all-over sublimated stars that shimmer under lights. Red piping adds edge, while the silver crest and Swoosh keep it clean. It’s understated yet premium—echoing the spirit of past bold aways without overdoing it.
          </p>

          <p>
            Both use recycled polyester, unified crest, and are available in replica ($100 stadium versions) and authentic match ($180) formats. Player versions (e.g., Pulisic #10) add a premium upcharge.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Shop the USMNT Nike 2026 Kits Now
          </h2>
          <p className="text-lg">
            Gear up for the home World Cup—prices current as of March 2026. Support US11 with these affiliate links (we may earn a small commission at no extra cost to you).
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
                <h4 className="font-semibold text-lg text-[#020617] leading-snug mb-2">
                  {product.title}
                </h4>
                <p className="text-xl font-bold text-[#020617] mb-4">{product.price}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded-full transition w-full text-center"
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
            href="https://fanatics.93n6tx.net/MKARXJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-10 py-4 rounded-full text-lg transition"
          >
            Shop Full USMNT 2026 Nike Kits on Fanatics →
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