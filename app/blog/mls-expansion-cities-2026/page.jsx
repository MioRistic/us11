'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSExpansionCities2026Article() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    "MLS Cities That Almost Made It: Sacramento, Detroit, Las Vegas, Phoenix & More"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Cities That Almost Made It: The Expansion Dreams That Died – Sacramento, Detroit, Las Vegas, Phoenix & More
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-03-10">March 10, 2026</time>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-3">
              <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={18} /></a>
              <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={18} /></a>
              <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={18} /></a>
              <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={18} /></button>
            </div>
          </div>
        </header>

        {/* Feature Image */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://www.sacrepublicfc.com/wp-content/uploads/sites/33/2024/03/03232024_INDvSAC_t6105.jpg"
            alt="Sacramento Republic FC MLS expansion failure"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: 
| 
Credit: Trevor Ruszkowski
Copyright: ©2024 Trevor Ruszkowski all rights reserved.
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">

          <p>
            Major League Soccer sits at 30 teams in 2026, fresh off San Diego FC's debut and with the league riding high ahead of the FIFA World Cup co-hosting duties. Commissioner Don Garber has repeatedly signaled a slowdown in rapid expansion — no new teams imminent, focus on stability, stadiums, and the international calendar shift post-2026.
          </p>

          <p>
            But the map still has glaring gaps: massive metro areas without an MLS club, cities that once held conditional awards, billionaire-backed bids, or serious negotiations, only to see dreams collapse. These are the "what if" markets — the ones that got closest but never crossed the finish line. From record expansion fees to stadium politics and shifting priorities, here's why these cities remain on the outside looking in.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sacramento Republic FC: The Most Painful Near-Miss</h2>
          <p>
            No story stings quite like Sacramento's. In 2019, MLS awarded the Republic FC the 29th spot, set for a 2022 debut. A gleaming downtown Railyards stadium plan (20,000+ seats, $300M+ project) was locked in, backed by investor Ron Burkle. The club even played teaser games and built hype in one of California's fastest-growing metros (TV market rank ~20th).
          </p>
          <p>
            Then came the pivot: Burkle backed out in 2021 amid economic uncertainty and pandemic fallout. MLS placed the bid on indefinite hold, later scrapping it entirely. Garber has since called Sacramento "a great market" that could return someday, but with fees now north of $500M (San Diego's price tag), and no clear new ownership/stadium path, it's stalled. Sacramento remains the poster child for "so close, yet so far" — a USL powerhouse that tasted MLS glory only to have it yanked away.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Detroit: The Sleeping Giant That Keeps Waking Up Late</h2>
          <p>
            Detroit's metro area (over 4 million) is one of the largest without top-flight soccer. The city was a finalist in the 2017-2019 expansion round, with Rossetti renderings of a soccer-specific stadium near the old jail site. But ownership issues, site complications, and leapfrogging by quicker-moving bids (Cincinnati, Nashville) derailed it.
          </p>
          <p>
            Garber has kept Detroit on the "interesting" list in recent years, praising the market's passion (evident in USL's Detroit City FC success). Yet no concrete progress — no lead investor stepping up with the massive fee and stadium commitment required. In a league prioritizing ready-to-go projects, Detroit's potential remains untapped.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Las Vegas: Sin City's Endless Tease</h2>
          <p>
            Vegas has flirted with MLS for over a decade. It surged as a dark horse in the late 2010s, pushing for the 30th spot before Charlotte jumped the queue. Mayor Carolyn Goodman has publicly lobbied, and the city's entertainment draw (plus growing sports scene with NFL's Raiders and potential A's move) makes it appealing.
          </p>
          <p>
            But stadium hurdles persist: no clear soccer-specific plan off the Strip, competition from other leagues, and MLS's caution about saturated markets. Garber has called it a strong candidate repeatedly, yet as of 2026, it's still "active discussions" without momentum. Vegas could be next if a billionaire group aligns — or it could stay the eternal almost.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Phoenix: The Desert Market That Won't Bloom</h2>
          <p>
            Phoenix (metro ~5 million, TV rank high) has been a perennial contender since the early expansion waves. It's hosted USL efforts and seen multiple bids, with recent talk of a stadium push tied to former Arizona Coyotes officials.
          </p>
          <p>
            Challenges: ownership consistency, stadium financing battles (Arizona's legislature has complicated pro sports venues), and competition from nearby markets. Garber lists Phoenix alongside Las Vegas and Detroit as markets the league likes, but no breakthrough. The Valley of the Sun's heat, sprawl, and lack of a unified push keep it on the fringes.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Other Notable "Almosts" and Historical Near-Misses</h2>
          <p>
            Tampa Bay: Original 1996 MLS club (Mutiny) folded in 2001; relaunch bids have surfaced, but Orlando's proximity and past failures stall it.
          </p>
          <p>
            Indianapolis: City-led bid in 2024, meetings with Garber, but stadium funding snags and rejection of USL's Eleven Park plans killed momentum.
          </p>
          <p>
            Cleveland / Buffalo / Milwaukee / Others: Early 1990s bids for original MLS, or mid-2010s interest, but never advanced far due to smaller markets or stadium issues.
          </p>
          <p>
            Defunct clubs like Chivas USA (folded 2014) and Miami Fusion / Tampa Bay Mutiny (2001-02 contractions) remind us MLS has shrunk before — but today's focus is growth, not contraction.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Next? Expansion Beyond 30?</h2>
          <p>
            Garber's 2025-2026 comments emphasize caution: post-World Cup priorities include calendar alignment (fall-to-spring from 2027), deeper talent pools, and existing club stability.
          </p>
          <p>
            He’s open to "a couple more teams" long-term, but 32 feels like the ceiling for now — and only with perfect proposals.
          </p>
          <p>The league wants markets with:</p>
          <ul className="list-disc ml-6">
            <li>Billionaire ownership ready to pay $500M+ fees</li>
            <li>Shovel-ready stadium plans (or public-private deals)</li>
            <li>Strong corporate/TV support</li>
            <li>No direct cannibalization of existing teams</li>
          </ul>
          <p>
            Detroit, Las Vegas, Phoenix, Sacramento, and perhaps Indianapolis or Tampa could resurface if the stars align. Until then, these cities represent MLS's unfinished business — passionate fanbases waiting for their shot at the big time.
          </p>

        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: March 10, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="flex gap-2">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">
              Back to blog
            </Link>
          </div>
        </footer>

      </div>
    </article>
  );
}