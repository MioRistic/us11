'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSJerseysArticle() {
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
    'MLS Jerseys 2026: Identity, Style, and the Kits Fans Actually Want to Wear';

  const JerseyCard = ({ imgSrc, alt, link, club, description }) => (
    <div className="my-10">
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md bg-gray-100">
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-[#020617] mt-5 leading-tight">
        {club}
      </h3>
      <p className="mt-3 text-gray-700 leading-relaxed">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded-full transition"
      >
        Shop now
      </a>
    </div>
  );

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
            MLS Jerseys 2026: Identity, Style, and the Kits Fans Actually Want to Wear
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-02-11">February 11, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={18} />
            </a>
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
            >
              <FiCopy size={18} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/em5hapeppp5zqyphlmlt.jpg"
            alt="MLS 2026 jerseys"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            MLSsoccer | Copyright 2026
          </div>
        </figure>

        {/* STICKY BUY BANNER – always under image */}
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
          <a
            href="https://mlsstore.i8h2.net/jRXyYZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div>
              <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                Shop MLS 2026 kits at MLS Store
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
        <section className="prose prose-lg max-w-none space-y-8 leading-relaxed pt-6">

          <p>
            MLS jerseys have long moved beyond the pitch. In 2026, they’re fashion statements, identity markers, and cultural artifacts. Some clubs have fully embraced that reality. Some still play it safe. And some have gone so far out that you’ll either love them… or hate them.
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
                  Shop MLS 2026 kits at MLS Store
                </h3>
              </div>
            </div>
            <a
              href="https://mlsstore.i8h2.net/jRXyYZ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Shop now
            </a>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Most Popular with Kids</h2>
          <JerseyCard
            imgSrc="https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls/scxrzlhuundw4wxxqryw.jpg"
            alt="Inter Miami Presagio Kit"
            link="https://mlsstore.i8h2.net/jRXyYZ"
            club="Inter Miami Presagio Kit"
            description="Nothing new here. Just like last season, Inter Miami remains the undisputed favorite among younger fans. The reason is simple: Lionel Messi. It doesn’t matter what the design looks like, what colors are used, or how the cut fits. As long as Messi is in that jersey, it’s the ultimate pick for kids. This is more of a phenomenon than a design choice."
          />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Weirdest Design</h2>
          <JerseyCard
            imgSrc="https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls/cwex2n9phdzxqkqxya4d.jpg"
            alt="Houston Dynamo FC’s Mission Control Jersey"
            link="https://mlsstore.i8h2.net/L0am70"
            club="Houston Dynamo FC’s Mission Control Jersey"
            description="This is one of those jerseys you have to look at three times before you even figure out what you’re seeing. It’s not a single color, but it’s not traditionally patterned either. Dark blue, pink, and orange clash in ways that have no obvious connection or link to the club’s DNA. And then there are the Adidas stripes, which look like they were pulled from another dimension entirely. Few clubs have the guts to release something this bold. Is it good or bad? Depends on who you ask. But it’s definitely unforgettable."
          />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Biggest Disappointment</h2>
          <JerseyCard
            imgSrc="https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls/luyn5i8f7lfvq8t089sa.jpg"
            alt="Sporting Kansas City’s 18th & Vine Kit"
            link="https://mlsstore.i8h2.net/JkbV7v"
            club="Sporting Kansas City’s 18th & Vine Kit"
            description="A dark blue base with light blue and purple checkerboard lines feels like someone randomly picked colors in Photoshop without a clear idea. Visually, it’s asymmetrical and lacks identity. The bigger problem? Sporting KC fans have a deep attachment to the retro jerseys from when the club was called the Wizards—jerseys that would sell themselves. It’s a shame the club didn’t leverage that history for their primary kit."
          />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Retro Approach</h2>
          <JerseyCard
            imgSrc="https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls/ujrvhrsvxevjb0hn8jx7.jpg"
            alt="New England Revolution Retro Kit"
            link="https://mlsstore.i8h2.net/2Rk5ZA"
            club="New England Revolution’s Independence Day Kit"
            description="New England has been doing one thing exceptionally well for years: modernizing their own history. Every season brings a fresh variation on the 1997 kits. This year, it’s a dark blue jersey with red-and-white accents. No flashy experiments—just pure club tradition. This jersey doesn’t chase trends; it honors heritage. And it succeeds beautifully. A must-have for every die-hard Revolution fan."
          />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Best as a Fashion Statement</h2>
          <JerseyCard
            imgSrc="https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls/rr1ozagj4j7exttommpa.jpg"
            alt="Red Bull New York’s Rooted Kit"
            link="https://mlsstore.i8h2.net/KBKXQe"
            club="Red Bull New York’s Rooted Kit"
            description="RBNY has been making serious efforts in recent years to distinguish themselves aesthetically from their “older siblings”—Red Bull Leipzig and Red Bull Salzburg. Instead of the classic white home kit, they’ve pushed a black-and-red combination. A black jersey with red lightning bolts looks powerful. On the field, it intimidates opponents. Off the field, it slides seamlessly into New York street fashion. This isn’t just a sports jersey—it’s a piece of clothing."
          />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Classic Kit</h2>
          <JerseyCard
            imgSrc="https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls/xrskhihh16b0evsniy5w.jpg"
            alt="Seattle Sounders FC Evergreen State Kit"
            link="https://mlsstore.i8h2.net/envEmQ"
            club="Seattle Sounders FC"
            description="Nicknamed the “Rave Green,” Seattle Sounders have long worn kits featuring their signature, robust green with blue accents—arguably the most unique and nostalgic colorway in all of MLS. The new Evergreen State Kit continues that tradition. This isn’t a jersey trying to be flashy or futuristic. Instead, it leans into simplicity and elegance: a predominantly green base with blue-and-white accents that evoke Washington’s forests and waterways. And that’s the magic here: while some clubs chase attention with wild patterns or effects, Seattle sticks to continuity and recognizability. The kit feels classic, yet vibrant enough to stand out on the pitch or in the stands. If you appreciate tradition and a jersey that won’t feel dated after one season, this is exactly that."
          />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mio’s Pick</h2>
          <JerseyCard
            imgSrc="https://images.mlssoccer.com/image/private/t_keep-aspect-ratio-e-desktop_2x/f_auto/mls/d4wsa5ubgotzjgdogbj6.jpg"
            alt="Charlotte FC’s Carolina Kit: Crowns Up"
            link="https://mlsstore.i8h2.net/rE4D7D"
            club="Charlotte FC’s Carolina Kit: Crowns Up"
            description="This is my winner. Light blue with white sleeves and stripes. Minimalism at its finest. Unlike previous seasons, Charlotte has finally produced a jersey with visual balance—the blue dominates equally front and back. It’s a huge step forward. If you appreciate simplicity and clean colors without visual theatrics, this is the jersey you buy without thinking. Honestly? No analysis required. It’s love at first sight."
          />

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: February 11, 2026</p>
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