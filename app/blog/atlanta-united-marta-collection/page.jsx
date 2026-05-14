'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AtlantaUnitedMartaCollection = () => {
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
            Atlanta United x MARTA: When Football, Public Transit and Street Style Collide
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-10">May 10, 2026</time>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://www.mlsstore.com/content/ws/all/719d8023-83da-4065-81da-c3a83a94a370__480X639.jpg?w=480"
            alt="Atlanta United x MARTA Collection"
            width={1200}
            height={700}
            className="w-full h-[420px] object-cover"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Atlanta United x MARTA
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

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

          {/* FANATICS SHOP BANNER */}
<div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-12 shadow-sm">
  <div className="flex-1">
    <div className="flex items-center gap-3 mb-3">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png" 
        alt="Fanatics" 
        className="h-8" 
      />
    </div>
    <h3 className="text-2xl font-bold text-[#020617] mb-2">
      Shop Atlanta United kits at MLS Store
    </h3>
   
  </div>

  <a
    href="https://mlsstore.i8h2.net/NGbb47" 
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap"
  >
    Buy now
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

          {/* FANATICS SHOP BANNER */}
<div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-12 shadow-sm">
  <div className="flex-1">
    <div className="flex items-center gap-3 mb-3">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Major_League_Soccer_logo.svg/500px-Major_League_Soccer_logo.svg.png" 
        alt="Fanatics" 
        className="h-8" 
      />
    </div>
    <h3 className="text-2xl font-bold text-[#020617] mb-2">
      Shop Atlanta United kits at MLS Store
    </h3>
   
  </div>

  <a
    href="https://mlsstore.i8h2.net/NGbb47" 
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap"
  >
    Buy now
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
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: May 10, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>

          <Link
            href="/blog"
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            Back to blog
          </Link>
        </footer>

      </div>
    </article>
  );
};

export default AtlantaUnitedMartaCollection;