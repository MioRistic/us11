'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function Argentina2026JerseyBlog() {
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

  const articleTitle = 'Argentina FIFA World Cup 2026 Kits: Home and Away';

  const products = [
    {
      title:
        'Lionel Messi Argentina National Team adidas FIFA x World Cup 2026 Home Replica Jersey - White',
      price: '$129.99',
      imageUrl:
        'https://fanatics.frgimages.com/argentina-national-team/mens-argentina-national-team-lionel-messi-adidas-white-fifa-x-world-cup-2026-home-replica-jersey_ss5_p-203130486+pv-1+u-zxkxbhk1zvj49qk9dqrq+v-fseuhfzd3mduw0oxzo1v.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/bO4My6',
    },
    {
      title:
        'Lionel Messi Argentina National Team adidas FIFA x World Cup 2026 Home On Field Authentic Jersey - White',
      price: '$89.99',
      imageUrl:
        'https://fanatics.frgimages.com/argentina-national-team/mens-argentina-national-team-lionel-messi-adidas-white-fifa-x-world-cup-2026-home-on-field-authentic-jersey_ss5_p-203130492+pv-3+u-4t5gbwgzj2qugoxbeefs+v-baj6vv12izzd2xt8rbi2.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/yqJXBy',
    },
    {
      title:
        'Lionel Messi Argentina National Team adidas Youth FIFA x World Cup 2026 Home Replica Jersey - White',
      price: '$109.99',
      imageUrl:
        'https://fanatics.frgimages.com/argentina-national-team/youth-adidas-lionel-messi-white-argentina-national-team-fifa-x-world-cup-2026-home-replica-jersey_ss5_p-203130485+pv-1+u-ly6apmcuzdawsbxuvwv1+v-46d1zbnvf9w9cpdptzvp.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/qz5aBO',
    },
    {
      title:
        'Argentina National Team adidas FIFA x World Cup 2026 Home Replica Long Sleeve Jersey - White',
      price: '$109.99',
      imageUrl:
        'https://fanatics.frgimages.com/argentina-national-team/mens-adidas-white-argentina-national-team-fifa-x-world-cup-2026-home-replica-long-sleeve-jersey_ss5_p-203487738+pv-1+u-xf7hqoiao7qqxo2qv3es+v-jwld24attowqvqiztfeu.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/qz5aBq',
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
            Argentina FIFA World Cup 2026 Kits: Home and Away
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-01-18">January 18, 2026</time>
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
            src="https://assets.goal.com/images/v3/blt55da43e8f76b4cfc/Argentina%20FIFA%20World%20Cup%2026%20Kit.png?auto=webp&format=pjpg&width=1920&quality=60"
            alt="Argentina 2026 World Cup Kit"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: adidas | Copyright: 2025
          </div>
        </figure>

        {/* STICKY BUY BANNER – always under image */}
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
          <a
            href="https://fanatics.93n6tx.net/JKeMWe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div>
              <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                Shop Argentina 2026 kits at Fanatics
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
            Argentina’s 2026 World Cup home jersey isn’t just a uniform — it’s a piece of history, carrying the weight of past triumphs and memories of legendary moments. For many fans, this edition will be especially poignant as it marks Lionel Messi’s final World Cup in the Albiceleste shirt. Having lifted the trophy in 2022, Messi now defends Argentina’s title with the world watching.
          </p>

          <p>
            The home kit stays true to Argentina’s iconic identity, but with a modern twist. The classic white and sky-blue stripes are reimagined with a subtle three-tone gradient, paying homage to the country’s three World Cup triumphs in 1978, 1986, and 2022. A small “1896” detail at the back of the neck nods to the founding year of the Argentine Football Association, while navy accents on the shoulders and cuffs add a refined, contemporary edge. Wearing the sky-blue and white stripes, every touch of the ball Messi makes echoes the legacy of Kempes, Maradona, and the heroes of 2022. The result is a jersey that feels timeless yet fresh—a perfect visual link between the legends of the past and the heroes of today.
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
                  Shop Argentina 2026 kits at Fanatics
                </h3>
              </div>
            </div>
            <a
              href="https://fanatics.93n6tx.net/JKeMWe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Black Away Kit: Bold and Modern
          </h2>
          <p>
            Argentina’s away kit is rumored to return with a striking black base, featuring white logos and sky-blue accents. While official images have not yet been released, leaks suggest a swirling, art-inspired graphic across the front, giving the kit a bold, modern personality and a strong contrast to the heritage-driven home jersey. The black away kit has long been popular among fans for its sleek aesthetic and expressive style, and 2026 appears set to continue that tradition.
          </p>
          <p>
            Alongside the home and away kits, a goalkeeper jersey and lifestyle editions are also expected, rounding out the collection and celebrating Argentina’s dominance both on and off the pitch. Once the official designs are unveiled, we will publish a dedicated blog diving deeper into every detail, giving fans a closer look at the 2026 World Cup kits in all their glory.
          </p>
          <p className="text-lg">
            You can{' '}
            <a
              href="https://fanatics.93n6tx.net/JKeMWe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              shop the Argentina World Cup Kit 2026 at Fanatics
            </a>{' '}
            and get ready to cheer the Albiceleste in style.
          </p>

        </section>

        {/* PRODUCTS GRID */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mb-12 mt-10">
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

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: January 18, 2026</p>
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