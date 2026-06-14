'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTvsAustraliaTickets() {
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

  const articleTitle = "USMNT vs Australia 2026 Tickets: How to Buy Tickets + Match Preview at Lumen Field Seattle";

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
            USMNT vs Australia 2026 Tickets: How to Buy Tickets + Match Preview at Lumen Field Seattle
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-14">June 14, 2026</time>
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

        

        {/* === MATCH HEAD TO HEAD (kao na slici) === */}
        <div className="bg-[#1f1f1f] text-white rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Sweden / USA */}
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

            {/* Sredina - Info */}
            <div className="flex flex-col items-center text-center px-6">
              <span className="text-sm text-gray-400 tracking-[2px] mb-1">WORLD CUP 2026</span>
              <span className="text-3xl font-bold mb-1">19 JUN 2026</span>
              <span className="text-4xl font-bold text-white mb-2">12:00 PM PT</span>
              <span className="text-sm text-gray-400">Lumen Field, Seattle</span>
            </div>

            {/* Australia */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 flex items-center justify-center mb-3">
                 <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Australia_national_football_team_badge.svg/500px-Australia_national_football_team_badge.svg.png"
                  alt="Australia Logo"
                  width={80}
                  height={80}
                />
              </div>
              <span className="text-2xl font-bold tracking-wide">AUSTRALIA</span>
            </div>

          </div>
        </div>

        {/* STICKY BUY TICKETS BANNER */}
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white">
          <div className="max-w-2xl mx-auto px-4">
            <a
              href="https://ticketnetwork.lusg.net/X4G9Ay" // ← ovde stavi svoj affiliate link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <div>
                <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                  Buy USMNT vs Australia 2026 Tickets
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
            The <strong>USMNT vs Australia World Cup 2026 match in Seattle</strong> is shaping up to be one of the most anticipated group-stage games of the tournament.
          </p>

          <p>
            Scheduled for <strong>June 19, 2026, at Lumen Field</strong>, this matchup could have major implications for <strong>Group D standings</strong>, knockout-stage positioning, and the United States men’s national team’s path through the first-ever expanded World Cup on home soil.
          </p>

          <p>
            For fans looking to attend the match live, demand for <strong>USMNT vs Australia tickets 2026</strong> is expected to be extremely high. Below is everything you need to know — including where to buy tickets, expected ticket prices, stadium information, and a full tactical preview of the game.
          </p>

          <h2>Why USMNT vs Australia Is One of the Biggest World Cup 2026 Group Matches</h2>
          <p>
            The group stage picture changed dramatically after Australia’s impressive result against Turkey. With both the United States and Australia competing for the top positions in Group D, their meeting in Seattle could become the decisive game that determines who finishes first.
          </p>

          <h2>USMNT vs Australia World Cup 2026 Match Details</h2>
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
                <td className="p-3 font-medium">USA vs Australia</td>
                <td className="p-3">June 19, 2026</td>
                <td className="p-3">12:00 PM PT</td>
                <td className="p-3">Lumen Field, Seattle</td>
              </tr>
            </tbody>
          </table>

          <h2>How to Buy USMNT vs Australia Tickets 2026</h2>
          <p>
            Because this is a <strong>USA World Cup home match</strong>, tickets are expected to be among the most sought-after of the entire tournament.
          </p>


          {/* AFFILIATE BANNER */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-8 shadow-sm">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Need tickets for USMNT vs Australia?</h3>
              <p className="text-gray-600">Check current prices and availability on trusted platforms.</p>
            </div>
            <a
              href="" // ← ovde stavi affiliate link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-zinc-800 text-white font-semibold px-8 py-4 rounded-full transition whitespace-nowrap"
            >
              Check Tickets
            </a>
          </div>

           

          <h2>USMNT vs Australia Match Preview</h2>
          <p>
            This game could become a fascinating tactical battle. The United States is expected to control more possession, while Australia will focus on defensive structure and quick transitions.
          </p>

          <h3>Players to Watch</h3>
          <ul>
            <li><strong>Christian Pulisic</strong> – The leader of the American attack</li>
            <li><strong>Folarin Balogun</strong> – Pace and finishing threat</li>
            <li><strong>Nestory Irankunda</strong> – Australia’s young star</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <ul className="space-y-4">
            <li><strong>When is USMNT vs Australia?</strong> June 19, 2026 at 12:00 PM PT</li>
            <li><strong>Where is the match?</strong> Lumen Field, Seattle</li>
            <li><strong>How much are tickets?</strong> Starting from around $150</li>
            <li><strong>Where to buy tickets safely?</strong> Official FIFA Resale Marketplace or trusted platforms like StubHub</li>
          </ul>

{/* FANATICS SHOP BANNER */}
<div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 my-12 shadow-sm">
  <div className="flex-1">
    <div className="flex items-center gap-3 mb-3">
      <img 
        src="https://ticketnetwork.s3.us-east-1.amazonaws.com/images/ticketnetwork-retail-logo-horizontal-white.svg" 
        alt="Fanatics" 
        className="h-8" 
      />
    </div>
    <h3 className="text-2xl font-bold text-[#020617] mb-2">
      Shop tickets at TicketNetwork
    </h3>
   
  </div>

  <a
    href="https://ticketnetwork.lusg.net/X4G9Ay" 
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
          <span>Published: June 14, 2026</span>
          <Link href="/news" className="hover:text-gray-800">← Back to blog</Link>
        </footer>
https://ticketnetwork.lusg.net/X4G9Ay
      </div>
    </article>
  );
}