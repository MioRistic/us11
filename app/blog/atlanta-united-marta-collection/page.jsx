'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function AtlantaUnitedMartaCollection() {
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
    'Atlanta United x MARTA: When Football, Public Transit and Street Style Collide';

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
            Atlanta United x MARTA: When Football, Public Transit and Street Style Collide
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-10">May 10, 2026</time>
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
            src="https://www.mlsstore.com/content/ws/all/719d8023-83da-4065-81da-c3a83a94a370__480X639.jpg?w=480"
            alt="Atlanta United x MARTA Collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Atlanta United x MARTA
          </div>
        </figure>

        {/* STICKY BUY BANNER – always under hero image */}
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
          <a
            href="https://mlsstore.i8h2.net/NGbb47"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div>
              <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                Shop Atlanta United x MARTA at MLS Store
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

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 pt-6">

          <p>
            In a city built for cars and defined by urban sprawl, Atlanta United has done something quietly brilliant.
          </p>

          <p>
            They’ve turned the daily commute into fashion.
          </p>

          <p>
            The club just released a new collaborative collection with MARTA, Atlanta’s public transit system. What could have been a routine sponsorship activation has instead become one of the most culturally sharp and locally rooted merchandise drops in recent MLS history.
          </p>

          <p>
            A standout piece is the main jersey — a sharp black retro-inspired shirt with bold diagonal stripes in MARTA’s signature blue, orange, and yellow. With a prominent white “17” on the back and clean branding, it perfectly blends football heritage with everyday Atlanta life.
          </p>

          {/* MLS Store Banner */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
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
                  Shop Atlanta United kits at MLS Store
                </h3>
              </div>
            </div>
            <a
              href="https://mlsstore.i8h2.net/NGbb47"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            More Than Merch
          </h2>

          <p>
            This isn’t just another kit drop slapped with a sponsor logo. The Atlanta United x MARTA collection thoughtfully merges the club’s identity with the visual language of the city’s transit system — that unmistakable blue and green color palette, station signage aesthetics, and the lived-in, no-nonsense feel of Atlanta’s trains and buses.
          </p>

          <p>
            Think hoodies styled like vintage MARTA worker jackets, t-shirts featuring stylized train route maps interwoven with the club’s iconic “A”, and subtle design details that only true locals will fully appreciate.
          </p>

          <p>
            It’s merchandise made for the people who actually ride MARTA to Mercedes-Benz Stadium on matchdays.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Why This Works So Well
          </h2>

          <p>
            For Atlanta United, this partnership hits on multiple levels at once:
          </p>

          <ul className="list-disc ml-6 space-y-3">
            <li>
              <strong>Cultural Authenticity:</strong> It reinforces the club’s identity as a genuinely Atlanta institution, not just another MLS franchise parachuted into the city.
            </li>
            <li>
              <strong>Local Resonance:</strong> MARTA isn’t just transportation in Atlanta — it’s a symbol of the city’s daily realities, its grit, its frustrations, and its resilience. Turning that into wearable culture is a confident, grounded move.
            </li>
            <li>
              <strong>Smart Business:</strong> Limited, locally relevant drops like this tend to sell extremely well, particularly among younger fans and the city’s growing streetwear scene.
            </li>
            <li>
              <strong>Community Connection:</strong> It shows the club understands the lived experience of its supporters, not just the ones sitting in the premium seats.
            </li>
          </ul>

          {/* MLS Store Banner */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
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
                  Shop Atlanta United kits at MLS Store
                </h3>
              </div>
            </div>
            <a
              href="https://mlsstore.i8h2.net/NGbb47"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Bigger Picture
          </h2>

          <p>
            In an era where Major League Soccer clubs are scrambling to build deeper roots in their cities, collaborations like Atlanta United x MARTA feel like the way forward.
          </p>

          <p>
            Rather than chasing generic global appeal or another big-name sponsor, Atlanta is leaning into what makes the city unique — its transit system, its culture, its contradictions.
          </p>

          <p>
            This collection is more than clothing. It’s a statement that Atlanta United wants to be woven into the everyday fabric of the city — quite literally.
          </p>

          <p>
            For fans who ride the Gold Line to the stadium, wear the hoodie on their morning commute, or simply appreciate clever, context-aware design, this drop hits different.
          </p>

          <p>
            It’s rare to see a club and a city’s public infrastructure speak the same language so naturally.
          </p>

          <p className="font-semibold text-xl">
            And in Atlanta, that kind of connection matters.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: May 10, 2026</p>
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