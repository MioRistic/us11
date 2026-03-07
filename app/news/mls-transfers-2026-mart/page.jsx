'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSTransfers2026() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS Transfers 2026: Toronto FC’s Record-Breaking Josh Sargent Gamble')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Transfers 2026: Toronto FC’s Record-Breaking Josh Sargent Gamble, Data-Driven Signings, and Final Moves Before the Window Closes
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By US11 Analysis</span>
            <span>•</span>
            <time dateTime="2026-03-07">March 7, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2175991224/crop/MM5DINBUGI5DENBZHE5G433XMU5DAORSGMYQ====/GettyImages-2175991224.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Josh Sargent signing for Toronto FC"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Stephen Pond 
| 
Credit: Getty Images
Copyright: 2024 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed">
          <p>The MLS primary transfer window for 2026 closes on March 26, but with the season already underway since late February, clubs have been fine-tuning rosters mid-campaign. The past week delivered several notable additions, headlined by Toronto FC’s blockbuster — and controversial — investment in U.S. international striker Josh Sargent.</p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">Toronto FC: Josh Sargent as the Franchise-Changing Bet</h2>
          <p>Toronto FC finalized the transfer of American forward Josh Sargent from EFL Championship side Norwich City in late February, with the fee reportedly around $22 million (potentially rising to $27 million with performance add-ons). This marks one of the largest fees ever paid by an MLS club for a player from the English second tier — and a potential record for an American international.</p>
          <p>The club leaned heavily on an advanced data model originally developed for the Toronto Raptors (part of the MLSE multi-sport empire) to identify Sargent as the perfect fit: a physical, goal-scoring No. 9 with proven adaptability to North American soccer. The analytics-driven process took three months, sparking fan and media criticism about priorities.</p>
          <p>Sargent, 26, has already been introduced amid fanfare and is under contract through 2030-31 as a Designated Player. Expectations are sky-high: Toronto seeks a return to Eastern Conference contention after recent underwhelming seasons.</p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">Other Moves in the Window</h2>
          <p>Toronto also added Chilean center-back Benjamín Kuscevic on loan from Fortaleza in Brazil. New York Red Bulls signed 17-year-old left-back Matthew Dos Santos to a first-team homegrown contract. FC Cincinnati bolstered goalkeeping with Fabian Mrozek on loan from Liverpool U21, while Atlanta United secured midfielder Matías Galarza on loan from River Plate.</p>

          <h2 className="text-3xl font-bold text-[#020617] mt-10 mb-4 tracking-tight">What’s Next Before the MLS Transfer Deadline?</h2>
          <p>With three weeks left in the primary window, most blockbuster moves are done. Remaining activity will likely focus on tactical depth, homegrown signings, or free agents. Toronto could still add one or two pieces, while Red Bulls and Cincinnati appear content with youth-focused reinforcements. The biggest storyline remains Toronto FC: Can their record investment in Josh Sargent spark a revival, or highlight questions about MLSE’s multi-sport management approach?</p>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: March 7, 2026</p>
            <p>Author: US11 Analysis</p>
          </div>
          <div className="flex gap-2">
            <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">Back to news</Link>
          </div>
        </footer>

      </div>
    </article>
  );
}
