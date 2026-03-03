'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSMatchday2Article() {
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
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentUrl
  )}&text=${encodeURIComponent("MLS Matchday 2 Recap")}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Matchday 2: Messi's Magic Sparks Miami Comeback, Western Teams Dominate Early
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-03-02">March 2, 2026</time>
          </div>

          {/* Social */}
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
            src="https://assets.goal.com/images/v3/getty-2264292238/crop/MM5DGNBSGA5DCOJSGQ5G433XMU5DAORSHA======/GettyImages-2264292238.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="MLS Matchday 2 recap"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Dustin Markland 
| 
Credit: Getty Images
Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">

          <p>
            Two weeks into the 2026 MLS regular season, and the league is already delivering drama,
            individual brilliance, and early signs of separation. Matchday 2 featured a goal-filled
            weekend with over 40 strikes across 15 matches, several braces from star names, and one
            unforgettable Florida Derby that reminded everyone why Lionel Messi remains the most
            compelling storyline in American soccer.
          </p>

          <p>
            The headline act came on Sunday night at Inter&Co Stadium, where Inter Miami overturned
            a 2-0 halftime deficit to claim their first-ever victory in Orlando, winning 4-2 in a
            thrilling Florida Derby. Messi opened his 2026 account in style with a brace —
            including a trademark free-kick curler — while young playmaker Telasco Segovia
            contributed 1 goal and 2 assists.
          </p>

          <p>
            Head coach Javier Mascherano's halftime adjustments unlocked the Herons' attack,
            turning a potential crisis into a statement win. For Orlando, goals from Marco
            Pašalić and Martín Ojeda weren't enough against a Miami side that now looks poised
            to challenge at the top of the East.
          </p>

          <p>
            Elsewhere, expansion side San Diego FC continued their dream start, posting a 2-0 home
            win over St. Louis CITY SC. Anders Dreyer added a goal and an assist, becoming the
            second-fastest player in league history to reach 20 goals and 20 assists.
          </p>

          <p>
            Vancouver Whitecaps kept rolling with a convincing 3-0 derby win over Toronto FC,
            powered by a brace from Thomas Müller, underlining Vancouver's early defensive
            solidity and attacking flair.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Other Notable Results</h2>

          <ul>
            <li>LA Galaxy 3-0 Charlotte FC — João Klauss scored twice in a three-minute blitz.</li>
            <li>Sporting Kansas City 2-2 Columbus Crew — Dejan Joveljić netted twice.</li>
            <li>LAFC 2-0 Houston Dynamo — Mark Delgado and Stephen Eustáquio on target.</li>
            <li>New York Red Bulls 1-0 New England Revolution — Julian Hall the match-winner.</li>
            <li>Minnesota United 1-0 FC Cincinnati — Kelvin Yeboah with the decisive header.</li>
          </ul>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Full Matchday 2 Results</h2>

          <p className="whitespace-pre-line">
{`Chicago Fire FC 3-0 CF Montréal
New York Red Bulls 1-0 New England Revolution
Minnesota United FC 1-0 FC Cincinnati
Colorado Rapids 2-0 Portland Timbers
Vancouver Whitecaps FC 3-0 Toronto FC
LA Galaxy 3-0 Charlotte FC
Sporting Kansas City 2-2 Columbus Crew
San Jose Earthquakes 2-0 Atlanta United
Houston Dynamo 0-2 LAFC
Real Salt Lake 2-1 Seattle Sounders FC
FC Dallas 0-0 Nashville SC
Austin FC 1-0 D.C. United
Philadelphia Union 1-2 New York City FC
Orlando City SC 2-4 Inter Miami CF
San Diego FC 2-0 St. Louis CITY SC`}
          </p>

          <p>
            Early power rankings trends show Western Conference teams leading the way, while in
            the East, Miami's resurgence and NYCFC's gritty road win suggest a tight race ahead.
            With only two weeks gone, patterns are emerging — and the 2026 MLS season is just
            getting started.
          </p>

        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: March 2, 2026</p>
            <p>Author: US11</p>
          </div>
          <div className="flex gap-2">
            <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">
              Back to news
            </Link>
          </div>
        </footer>

      </div>
    </article>
  );
}