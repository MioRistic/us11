'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTvsBosniaTickets() {
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

  const articleTitle = "USA vs Bosnia and Herzegovina Tickets: How to Buy Round of 32 World Cup Tickets + Match Preview";

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
            USA vs Bosnia and Herzegovina Tickets: How to Buy Round of 32 World Cup Tickets + Match Preview
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-29">June 29, 2026</time>
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

        {/* MATCH HEAD TO HEAD */}
        <div className="bg-[#1f1f1f] text-white rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* USA */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 flex items-center justify-center mb-3">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/United_States_Soccer_Federation_logo.svg/330px-United_States_Soccer_Federation_logo.svg.png"
                  alt="USMNT Logo"
                  width={80}
                  height={80}
                />
              </div>
              <span className="text-2xl font-bold tracking-wide">USA</span>
            </div>

            {/* Info */}
            <div className="flex flex-col items-center text-center px-6">
              <span className="text-sm text-gray-400 tracking-[2px] mb-1">WORLD CUP 2026</span>
              <span className="text-3xl font-bold mb-1">2 JUL 2026</span>
              <span className="text-4xl font-bold text-white mb-2">03:00 AM PT</span>
              <span className="text-sm text-gray-400">San Francisco Bay Area Stadium</span>
            </div>

            {/* Bosnia */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 flex items-center justify-center mb-3">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/sr/thumb/9/9d/%D0%A4%D1%83%D0%B4%D0%B1%D0%B0%D0%BB%D1%81%D0%BA%D0%B8_%D1%81%D0%B0%D0%B2%D0%B5%D0%B7_%D0%91%D0%BE%D1%81%D0%BD%D0%B5_%D0%B8_%D0%A5%D0%B5%D1%80%D1%86%D0%B5%D0%B3%D0%BE%D0%B2%D0%B8%D0%BD%D0%B5.svg/330px-%D0%A4%D1%83%D0%B4%D0%B1%D0%B0%D0%BB%D1%81%D0%BA%D0%B8_%D1%81%D0%B0%D0%B2%D0%B5%D0%B7_%D0%91%D0%BE%D1%81%D0%BD%D0%B5_%D0%B8_%D0%A5%D0%B5%D1%80%D1%86%D0%B5%D0%B3%D0%BE%D0%B2%D0%B8%D0%BD%D0%B5.svg.png"
                  alt="Bosnia Logo"
                  width={80}
                  height={80}
                />
              </div>
              <span className="text-2xl font-bold tracking-wide">BOSNIA</span>
            </div>

          </div>
        </div>

        {/* STICKY BUY TICKETS BANNER */}
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white">
          <div className="max-w-2xl mx-auto px-4">
            <a
              href="https://ticketnetwork.lusg.net/L0gnoY" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <div>
                <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                  Buy USA vs Bosnia and Herzegovina Tickets
                </h3>
                <p className="text-sm text-zinc-500">Round of 32 – San Francisco Bay Area Stadium</p>
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
            The United States Men’s National Team is through to the knockout stage — and now the real test begins.
          </p>

          <p>
            As winners of Group D, Mauricio Pochettino’s side will face Bosnia and Herzegovina on <strong>Wednesday, July 2, 2026</strong> at the <strong>San Francisco Bay Area Stadium</strong> in Santa Clara, California.
          </p>

          <h2>How to Buy USA vs Bosnia and Herzegovina Tickets</h2>
          <p>
            Primary FIFA ticket sales are almost sold out. The best remaining options are through trusted resale platforms.
          </p>

        {/* ticketnetwor Banner */}
<div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex items-center justify-between my-10 max-w-4xl mx-auto">
  
  {/* Logo + Text */}
  <div className="flex items-center gap-5">
    <div className="w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
      <img src="https://ticketnetwork.s3.us-east-1.amazonaws.com/images/ticketnetwork-retail-logo-horizontal-white.svg" alt="TicketNetwork" className="w-full h-full object-contain" />
    </div>
    
    <div>
      <h3 className="text-xl font-semibold text-gray-900 leading-tight">
        USA vs Bosnia and Herzegovina<br />
        World Cup Tickets
      </h3>
    </div>
  </div>

  {/* Button */}
  <a
    href="https://ticketnetwork.lusg.net/L0gnoY"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap"
  >
    Book tickets
  </a>

</div>
           

          <h2>Match Details</h2>
          <ul>
            <li><strong>Date:</strong> July 2, 2026</li>
            <li><strong>Time:</strong> 3:00 AM PT</li>
            <li><strong>Venue:</strong> San Francisco Bay Area Stadium (Levi’s Stadium)</li>
            <li><strong>Stage:</strong> FIFA World Cup 2026 – Round of 32</li>
          </ul>

          <h2>Why This Match Matters</h2>
          <p>
            The USMNT has already achieved the group stage goal. Now they have a real opportunity to reach the quarterfinals on home soil. Bosnia and Herzegovina are a tough, experienced side, but the United States enter this match as clear favorites with home advantage and momentum.
          </p>

          <h2>Current Ticket Price Ranges (as of June 29)</h2>
          <ul>
            <li>Lower level / good seats: $650 – $1,800</li>
            <li>Upper level: $380 – $750</li>
            <li>Premium / field level: $2,200+</li>
          </ul>

          <p className="font-semibold">
            Prices are rising quickly. Don’t wait — secure your spot at this historic home World Cup knockout match.
          </p>
{/* ticketnetwor Banner */}
<div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex items-center justify-between my-10 max-w-4xl mx-auto">
  
  {/* Logo + Text */}
  <div className="flex items-center gap-5">
    <div className="w-14 h-14 bg-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
      <img src="https://ticketnetwork.s3.us-east-1.amazonaws.com/images/ticketnetwork-retail-logo-horizontal-white.svg" alt="TicketNetwork" className="w-full h-full object-contain" />
    </div>
    
    <div>
      <h3 className="text-xl font-semibold text-gray-900 leading-tight">
        USA vs Bosnia and Herzegovina<br />
        World Cup Tickets
      </h3>
    </div>
  </div>

  {/* Button */}
  <a
    href="https://ticketnetwork.lusg.net/L0gnoY"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap"
  >
    Book tickets
  </a>

</div>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: June 29, 2026</span>
          <Link href="/news" className="hover:text-gray-800">← Back to news</Link>
        </footer>

      </div>
    </article>
  );
}