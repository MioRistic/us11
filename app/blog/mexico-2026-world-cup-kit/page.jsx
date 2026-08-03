'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function Mexico2026JerseyBlog() {
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

  const articleTitle = 'Mexico FIFA World Cup 2026 Kit: The Green Jersey';

  const products = [
    {
      title:
        'Mexico National Team adidas FIFA x World Cup 2026 Home Replica Jersey - Green',
      price: '$99.99',
      imageUrl:
        'https://fanatics.frgimages.com/mexico-national-team/mens-adidas-green-mexico-national-team-fifa-x-world-cup-2026-home-replica-jersey_ss5_p-203487748+pv-1+u-ogat4stn1auancckep4s+v-r0igowe7azklzj3u6o8m.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/rajWxG',
    },
    {
      title:
        'Mexico National Team adidas FIFA x World Cup 2026 Home On Field Authentic Jersey - Green',
      price: '$149.99',
      imageUrl:
        'https://fanatics.frgimages.com/mexico-national-team/mens-adidas-green-mexico-national-team-fifa-x-world-cup-2026-home-on-field-authentic-jersey_ss5_p-203487747+pv-1+u-mhfw5mvehmmcokonjwdi+v-ylutj6o4vjgrzi44l1ut.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/Z60EDR',
    },
    {
      title:
        "Mexico National Team adidas Women's FIFA x World Cup 2026 Home Replica Jersey - Green",
      price: '$99.99',
      imageUrl:
        'https://fanatics.frgimages.com/mexico-national-team/womens-adidas-green-mexico-national-team-fifa-x-world-cup-2026-home-replica-jersey_ss5_p-203487750+pv-1+u-lntcqwkur4iuammi9nhz+v-dtojrdyoyvh8hebrpyvo.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/K0kEAa',
    },
    {
      title:
        'Mexico National Team adidas FIFA x World Cup 2026 Home Replica Long Sleeve Jersey - Green',
      price: '$109.99',
      imageUrl:
        'https://fanatics.frgimages.com/mexico-national-team/mens-adidas-green-mexico-national-team-fifa-x-world-cup-2026-home-replica-long-sleeve-jersey_ss5_p-203487749+pv-1+u-dbmpbaoefnzrf9f3oltf+v-uq4b7gizzj67emwivttv.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/xLAoaO',
    },
    {
      title:
        'Mexico National Team adidas Toddler FIFA x World Cup Home 2026 Replica Mini Kit - Green',
      price: '$69.99',
      imageUrl:
        'https://fanatics.frgimages.com/mexico-national-team/toddler-adidas-green-mexico-national-team-fifa-x-world-cup-home-2026-replica-mini-kit_ss5_p-203127079+pv-1+u-kv7f71cl64exnirw3lgt+v-w7gaz6227obk9ssej8wc.jpg?_hv=2&w=1018',
      link: 'https://fanatics.93n6tx.net/JK5Z6N',
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
            Mexico FIFA World Cup 2026 Kit: The Green Jersey
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-01-25">January 25, 2026</time>
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
            src="https://fanatics.frgimages.com/mexico-national-team/mens-adidas-green-mexico-national-team-fifa-x-world-cup-2026-home-replica-jersey_ss5_p-203487748+pv-8+u-ogat4stn1auancckep4s+v-yedw66wzn5jjpmljufio.jpg?_hv=2&w=1018"
            alt="Mexico 2026 World Cup Home Kit"
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
            href="https://fanatics.93n6tx.net/rajWrG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div>
              <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                Shop Mexico 2026 kits at Fanatics
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
            When Mexico steps onto the field for the <strong>2026 FIFA World Cup</strong>, they won’t just wear their iconic green jersey — they will wear history. Every generation of <strong>El Tri</strong> has left its mark: from Aztec warriors and legends like Hugo Sánchez and Rafael Márquez, to new talents now stepping onto the global stage. The 2026 Mexico home jersey continues this narrative, blending tradition with modern design, making the team’s national identity visible in every detail.
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
                  Shop Mexico 2026 kits at Fanatics
                </h3>
              </div>
            </div>
            <a
              href="https://fanatics.93n6tx.net/rajWrG"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Green Jersey: More Than Just a Uniform
          </h2>
          <p>
            The 2026 home kit is visually striking and symbolically rich. The classic <strong>“verde mexicano”</strong> is paired with subtle red and white accents, but the real story lies in the intricate <strong>Aztec-inspired patterns</strong> that cover the torso. These details are more than decoration — they evoke Mexico’s rich cultural and footballing history, reminding players and fans alike that every touch of the ball carries the weight of generations that shaped Mexican football.
          </p>
          <p>
            At the back of the neck, the jersey features the phrase <strong>“SOMOS MÉXICO”</strong> (“We Are Mexico”). This small but powerful detail serves as a voice for the community — from the stands to the locker room — symbolizing unity between players and supporters. Made from lightweight, breathable fabric with mesh panels for optimal ventilation, the modern cut of the jersey follows the player’s movements without restricting agility or speed.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Details That Tell a Story
          </h2>
          <p>
            The 2026 design balances aesthetics and functionality. The complexity of the Aztec lines, integrated into the jersey’s material structure, creates a visual narrative both on the field and across media channels. Compared to previous editions, the new kit is subtler in its detailing but instantly recognizable — historic symbols have been reinterpreted in a modern context, bridging past and present.
          </p>
          <p>
            With every sprint, pass, and strike, Mexico’s players tell a story about their nation: pride, tradition, and ambition. The 2026 jersey demonstrates how football apparel can serve both as a <strong>cultural expression</strong> and a <strong>performance tool</strong>, visually and functionally empowering players while connecting the team to generations of fans.
          </p>

          <p className="text-lg">
            You can{' '}
            <a
              href="https://fanatics.93n6tx.net/rajWrG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              shop the Mexico World Cup 2026 Home Kit at Fanatics
            </a>{' '}
            and get ready to cheer <strong>El Tri</strong> in style.
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
            <p>Published: January 25, 2026</p>
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