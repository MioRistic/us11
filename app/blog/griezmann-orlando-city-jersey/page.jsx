'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function GriezmannOrlandoJerseyBlog() {
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
    "How Griezmann’s No. 7 Jersey Became Orlando City’s Fastest-Selling Kit in Club History";

  const products = [
    {
      title:
        'Antoine Griezmann Orlando City SC adidas 2025 Perfect Storm On-Field Authentic Jersey - Purple',
      price: '$194.99',
      imageUrl:
        'https://fanatics.frgimages.com/orlando-city-sc/mens-adidas-antoine-griezmann-purple-orlando-city-sc-2025-perfect-storm-on-field-authentic-jersey_ss5_p-204033026+pv-1+u-hexo5oxtaqxkxng71go3+v-4wipfo65ii5bhl5wjrot.png?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/L0DV40',
    },
    {
      title:
        'Antoine Griezmann Orlando City SC adidas 2026 Sunken Treasure Kit Replica Jersey - Yellow',
      price: '$134.99',
      imageUrl:
        'https://fanatics.frgimages.com/orlando-city-sc/mens-adidas-antoine-griezmann-yellow-orlando-city-sc-2026-sunken-treasure-kit-replica-jersey_ss5_p-204033023+pv-1+u-n9kp1xxxujkydfq3meoa+v-w4cfrmomzn7dim5t6r02.png?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/enR9gQ',
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
            How Griezmann’s No. 7 Jersey Became Orlando City’s Fastest-Selling Kit in Club History
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-11">April 11, 2026</time>
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
            src="https://i.ibb.co/nNsnK2BN/salario-antoine-griezmann-orlando-city-mls-principal.jpg"
            alt="Antoine Griezmann Orlando City No.7 Jersey"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Orlando City SC
          </div>
        </figure>

        {/* STICKY BUY BANNER – always under image */}
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
          <a
            href="https://fanatics.93n6tx.net/qWgJZN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div>
              <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                Shop Griezmann Orlando City jerseys at Fanatics
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
            When Orlando City SC announced the signing of Antoine Griezmann on March 24, 2026, many viewed it as another big-name MLS arrival — a 35-year-old World Cup winner coming to Florida for one last big payday.
          </p>

          <p>What happened next proved it was much more than that.</p>

          <p>
            Within days, Griezmann jerseys — complete with his name and the iconic <strong>No. 7</strong> — were already on sale across the MLS Store, Fanatics, Dick’s Sporting Goods, World Soccer Shop, and inside The Den at Inter&Co Stadium.
          </p>

          <p>
            The club didn’t wait for Griezmann to step on the pitch in July. They didn’t even wait for him to finish the season at Atlético Madrid.
          </p>

          <p>And the jerseys started flying off the shelves.</p>

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
                  Shop Griezmann Orlando City kits at Fanatics
                </h3>
              </div>
            </div>
            <a
              href="https://fanatics.93n6tx.net/qWgJZN"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Why Griezmann? And Why So Fast?
          </h2>
          <p>
            Antoine Griezmann is not just another aging star. He is a proven winner: 2018 FIFA World Cup champion with France, a two-time La Liga title challenger with Atlético Madrid, and one of the most technically gifted and charismatic forwards of his generation.
          </p>
          <p>
            At 35, he chose Orlando City as his next chapter — signing a two-year Designated Player contract through the 2027-28 season, with an option for 2028-29. He will wear the No. 7, the same number he made famous in Madrid and with Les Bleus.
          </p>
          <p>Orlando understood the moment perfectly.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            What Makes a Jersey Sell?
          </h2>
          <p>
            In today’s football world, a jersey is more than clothing — it’s a statement, a memory, and an emotional connection.
          </p>
          <p>Buying a Griezmann Orlando City jersey means owning:</p>
          <ul>
            <li>A piece of 2018 World Cup history</li>
            <li>
              Memories of his iconic “chicken dance” celebrations and clinical finishes under Diego Simeone
            </li>
            <li>
              A symbol that Orlando City is no longer “just another MLS club” — it’s a club capable of attracting genuine global talent
            </li>
          </ul>
          <p>
            The <strong>Sunken Treasure Kit</strong> in particular has proven extremely popular. Its bold gold design pairs beautifully with Griezmann’s black lettering and the No. 7.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Shop Griezmann Orlando City Jerseys
          </h2>
          <p className="text-lg">
            Grab your favorites below. Support US11 with these affiliate links (we may earn a small commission at no extra cost to you).
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

        {/* BIG CTA */}
        <div className="text-center my-12">
          <a
            href="https://fanatics.93n6tx.net/qWgJZN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-10 py-4 rounded-full text-lg transition"
          >
            Shop All Griezmann Orlando City Jerseys →
          </a>
        </div>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: April 11, 2026</p>
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