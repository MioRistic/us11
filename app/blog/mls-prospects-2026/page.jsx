'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSProspects2026Article() {
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
    "Top 10 MLS Prospects to Watch in 2026"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Top 10 MLS Prospects to Watch in the 2026 Season – Future Stars Ready to Break Out!
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-02-24">February 24, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2202625521/crop/MM5DGOBXGQ5DEMJXHE5G433XMU5DQNBSHIYA====/GettyImages-2202625521.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Top MLS 2026 Prospects"
            width={1200}
            height={500}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Adam Hunger 
| 
Credit: Getty Images
Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
            The 2026 MLS season is in full swing, and with the FIFA World Cup on home soil looming, homegrown prospects are under the microscope like never before. These players are earning serious minutes, delivering key moments, and drawing eyes from top European clubs.
          </p>

          <p>
            This ranked list highlights the top 10 MLS prospects to follow this year – based on current form, tactical fit, and long-term ceiling. Expect goals, assists, defensive masterclasses, and potential big-money moves.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Top 10 MLS Prospects for the 2026 Season</h2>

          <ul className="list-disc pl-5 space-y-3">
            <li><strong>Zavier Gozo</strong> (Forward/Winger, Real Salt Lake) – Born: March 22, 2007
Explosive pace and clinical finishing make him a nightmare for defenders – already a starter with real goal contributions, he's primed for MLS Young Player of the Year contention and early senior USMNT looks.

</li>
            <li><strong>Peyton Miller</strong> (Left Wing-back/Defender, New England Revolution) – Born: November 8, 2007
Elite two-way fullback who dominates both boxes – his attacking overlaps and defensive recoveries could earn him a European switch before the transfer window closes.

</li>
            <li><strong>Luca Bombino</strong> (Fullback, San Diego FC) – Born: July 10, 2006
Dynamic left-back with outstanding 1v1 skills and crossing accuracy – San Diego's expansion status gives him endless minutes to showcase and attract overseas scouts.

</li>
            <li><strong>Manu Duah</strong> (Midfielder/Winger, San Diego FC) – Born: June 5, 2005
Towering (6'4") athlete with elite dribbling and physicality – his versatility across midfield and defense makes him a nightmare matchup and a prime target for European bids.

</li>
            <li><strong>Brooklyn Raines</strong> (Midfielder, New England Revolution) – Born: March 11, 2005
Box-to-box engine with sharp passing and tireless work rate – under coach Mitrović, expect him to dictate tempo and rack up key contributions in transition.

</li>
            <li><strong>Julian Hall</strong> (Forward, New York Red Bulls) – Born: March 24, 2008
Academy gem with electric speed and lethal finishing instincts – his movement off the ball could turn him into RBNY's next breakout goal threat this season.

</li>
            <li><strong>Christopher Cupps</strong> (Defender, Chicago Fire) – Born: May 26, 2008
Composed center-back with excellent ball-playing ability and leadership – he's the blueprint for modern USMNT defensive prospects if his progression continues.

</li>
            <li><strong>Rayan Elloumi</strong> (Forward, Vancouver Whitecaps) – Born: September 17, 2007
Tall, aerially dominant striker with sharp instincts in the box – secure him consistent starts and watch him challenge for double-digit goals in Vancouver's attack.

</li>
            <li><strong>Frankie Westfield</strong> (Fullback, Philadelphia Union) – Born: December 9, 2005
Intelligent, technical right-back who excels in possession and quick transitions – Philly's system suits him perfectly for a breakout campaign and national team attention.

</li>
            <li><strong>Taha Habroune</strong> (Midfielder, Columbus Crew) – Born: February 5, 2006
Creative central midfielder with vision, passing range, and composure under pressure – in Crew's fluid system, he could surge up the list with game-changing assists.

</li>
          </ul>

          <p>
            Honorable Mentions: Oscar Verhoeven (San Diego FC), Justin Haak (LA Galaxy), Ronald Donkor (New York Red Bulls) – strong early form could propel any of them higher by summer.
          </p>

          <p>
            These prospects are the heartbeat of MLS's future – many will become household names, earn big transfers, or feature in the 2026 World Cup spotlight. Follow their journeys on US11FC.com with weekly stats breakdowns, highlights, and transfer updates.
          </p>

          {/* Buy Jersey Section */}
          <div className="my-12 p-6 bg-gray-100 rounded-2xl text-center shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Buy Your Favorite Player's Jersey</h2>
            <p className="mb-4">
              You can purchase the jersey of your favorite MLS prospect directly from the official store. Show your support and sport the colors of your team!
            </p>
            <Link
              href="https://mlsstore.i8h2.net/dyo3k7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Shop Now
            </Link>
          </div>

        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: February 24, 2026</p>
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