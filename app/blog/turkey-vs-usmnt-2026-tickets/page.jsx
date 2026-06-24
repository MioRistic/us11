'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function TurkeyVsUSMNTTickets() {
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

  const articleTitle = "Türkiye vs USMNT 2026 Tickets: The Last Chance to See the Stars and Stripes in the Group Stage";

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
            Türkiye vs USMNT 2026 Tickets: The Last Chance to See the Stars and Stripes in the Group Stage
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-24">June 24, 2026</time>
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

        {/* === MATCH HEAD TO HEAD === */}
        <div className="bg-[#1f1f1f] text-white rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* TÜRKIYE */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 flex items-center justify-center mb-3">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/500px-Flag_of_Turkey.svg.png"
                  alt="Türkiye Logo"
                  width={80}
                  height={80}
                />
              </div>
              <span className="text-2xl font-bold tracking-wide">TÜRKIYE</span>
            </div>

            {/* SREDINA - INFO */}
            <div className="flex flex-col items-center text-center px-6">
              <span className="text-sm text-gray-400 tracking-[2px] mb-1">WORLD CUP 2026</span>
              <span className="text-3xl font-bold mb-1">25 JUN 2026</span>
              <span className="text-4xl font-bold text-white mb-2">7:00 PM PT</span>
              <span className="text-sm text-gray-400">SoFi Stadium, Inglewood</span>
            </div>

            {/* USMNT */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 flex items-center justify-center mb-3">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/United_States_Soccer_Federation_logo.svg/330px-United_States_Soccer_Federation_logo.svg.png"
                  alt="USMNT Logo"
                  width={80}
                  height={80}
                />
              </div>
              <span className="text-2xl font-bold tracking-wide">USMNT</span>
            </div>

          </div>
        </div>

        {/* STICKY BUY TICKETS BANNER */}
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white">
          <div className="max-w-2xl mx-auto px-4">
            <a
              href="https://ticketnetwork.lusg.net/GbR7W9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <div>
                <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                  Buy Türkiye vs USMNT 2026 Tickets
                </h3>
                <p className="text-sm text-zinc-500">Official resale marketplace</p>
              </div>
              <span className="bg-black text-white text-sm font-semibold px-6 py-2.5 rounded-full whitespace-nowrap">
                Buy Tickets
              </span>
            </a>
          </div>
        </div>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 mt-8">

          <p className="text-xl">
            Turkey has already been eliminated from the 2026 FIFA World Cup, while the United States has secured its place in the knockout stage. On paper, this final Group D match may not decide qualification — but that doesn’t make it meaningless.
          </p>

          <p>
            In fact, this could be one of the most enjoyable and atmospheric matches for fans inside the stadium.
          </p>

          <h2>One Last Chance to See the USMNT in the Group Stage</h2>
          <p>
            For American supporters, this is the final opportunity to watch the United States Men’s National Team during the group stage of a home World Cup.
          </p>
          <p>
            After this match, everything changes. The knockout rounds bring higher pressure and higher stakes. Against Turkey, there is still room to enjoy the moment — the atmosphere, the energy, and the experience of watching the USMNT on home soil.
          </p>

          <h2>A More Open and Entertaining Match?</h2>
          <p>
            With qualification already secured, the United States is expected to play with more freedom. This often leads to more attacking football and a better spectacle for the fans in attendance.
          </p>
          <p>
            For supporters, this match isn’t only about the result. It’s about being part of the crowd, feeling the atmosphere, and experiencing the USMNT during what is likely their most relaxed group stage game of the tournament.
          </p>

          <h2>Why Fans Are Buying Tickets for Türkiye vs USMNT</h2>
          <p>
            Many American fans are already planning to attend this match in Los Angeles because it represents something special — the chance to say they were there when the United States hosted the World Cup and played its final group stage game.
          </p>

          <h2>Match Details</h2>
          <table className="w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left">Match</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Kickoff</th>
                <th className="p-3 text-left">Stadium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 font-medium">Türkiye vs USMNT</td>
                <td className="p-3">June 25, 2026</td>
                <td className="p-3">7:00 PM PT</td>
                <td className="p-3">SoFi Stadium, Inglewood</td>
              </tr>
            </tbody>
          </table>

          {/* AFFILIATE BANNER */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-8 shadow-sm">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Need tickets for Türkiye vs USMNT?</h3>
              <p className="text-gray-600">Check current prices and availability on trusted platforms.</p>
            </div>
            <a
              href="https://ticketnetwork.lusg.net/GbR7W9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-zinc-800 text-white font-semibold px-8 py-4 rounded-full transition whitespace-nowrap"
            >
              Check Tickets
            </a>
          </div>

          <h2>Frequently Asked Questions</h2>
          <ul className="space-y-4">
            <li><strong>When is Türkiye vs USMNT?</strong> June 25, 2026 at 7:00 PM PT</li>
            <li><strong>Where is the match?</strong> SoFi Stadium, Inglewood, California</li>
            <li><strong>Why is this match worth attending?</strong> It’s the USMNT’s final group stage game at a home World Cup</li>
            <li><strong>Where to buy tickets safely?</strong> Official FIFA Resale Marketplace or trusted platforms</li>
          </ul>

          {/* FANATICS / TICKET BANNER */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-12 shadow-sm">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src="https://ticketnetwork.s3.us-east-1.amazonaws.com/images/ticketnetwork-retail-logo-horizontal-white.svg" 
                  alt="TicketNetwork" 
                  className="h-8" 
                />
              </div>
              <h3 className="text-2xl font-bold text-[#020617] mb-2">
                Shop tickets at TicketNetwork
              </h3>
            </div>

            <a
              href="https://ticketnetwork.lusg.net/GbR7W9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition text-lg whitespace-nowrap"
            >
              Buy now
            </a>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: June 24, 2026</span>
          <Link href="/blog" className="hover:text-gray-800">← Back to blog</Link>
        </footer>

      </div>
    </article>
  );
}