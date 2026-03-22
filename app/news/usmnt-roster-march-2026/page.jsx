// app/blog/usmnt-roster-march-2026/page.jsx

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTRosterMarch2026() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    }
  };

  const shareText = encodeURIComponent("USMNT March 2026 Roster: Pochettino's Key Call-Ups for Belgium & Portugal Friendlies | US11");
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${shareText}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${shareText} ${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT March 2026 Roster: Pochettino's Key Call-Ups for Belgium & Portugal Friendlies
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-03-23">March 23, 2026</time>
          </div>

          {/* Social Icons + Copy Link */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-3">
              <a
                href={facebookShare}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href={twitterShare}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href={whatsappShare}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
              >
                <FaWhatsapp size={18} />
              </a>
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
                aria-label="Copy link to clipboard"
              >
                <FiCopy size={18} />
              </button>
            </div>
          </div>
        </header>

        {/* Feature Image */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10 cursor-pointer">
          <Link href="/blog/usmnt-roster-march-2026">
            <Image
              src="https://assets.goal.com/images/v3/getty-2237710051/crop/MM5DEMBRGQ5DCMJTGM5G433XMU5DKMBTHIZTE===/GettyImages-2237710051.jpg?auto=webp&format=pjpg&width=3840&quality=60"
              alt="USMNT players in training camp"
              width={1200}
              height={500}
              className="w-full h-[420px] object-cover object-center"
              priority
            />
          </Link>
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: | Credit: Getty Images | Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* Article Content */}
        <section className="prose prose-lg max-w-none space-y-8 mb-9 leading-relaxed">
          <p>
            Mauricio Pochettino has named a 27-player roster for the U.S. Men's National Team's March 2026 training camp in Atlanta. This marks the final international window before the 2026 FIFA World Cup, with high-profile friendlies against Belgium (March 28) and Portugal (March 31) at Mercedes-Benz Stadium.
          </p>

          <p>
            The squad features a strong mix of veterans and rising talents, with Christian Pulisic (82 caps, 32 goals) leading the way in experience. Gio Reyna returns after a strong showing, while nine MLS-based players earn call-ups. Notable absences include Tyler Adams, Sergiño Dest, and others due to injury.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Goalkeepers (4)</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Chris Brady (Chicago Fire; 0/0) – New call-up</li>
            <li>Roman Celentano (FC Cincinnati; 0/0) – New call-up</li>
            <li>Matt Freese (New York City FC; 13/0)</li>
            <li>Matt Turner (New England Revolution; 52/0)</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Defenders (9)</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Max Arfsten (Columbus Crew; 16/1)</li>
            <li>Alex Freeman (Villarreal/ESP; 13/2)</li>
            <li>Mark McKenzie (Toulouse/FRA; 25/0)</li>
            <li>Tim Ream (Charlotte FC; 79/1)</li>
            <li>Chris Richards (Crystal Palace/ENG; 35/3)</li>
            <li>Antonee Robinson (Fulham/ENG; 50/4)</li>
            <li>Miles Robinson (FC Cincinnati; 38/3)</li>
            <li>Joe Scally (Borussia Mönchengladbach/GER; 22/0)</li>
            <li>Auston Trusty (Celtic/SCO; 5/0)</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Midfielders (8)</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sebastian Berhalter (Vancouver Whitecaps/CAN; 9/1)</li>
            <li>Johnny Cardoso (Atletico Madrid/ESP; 22/0)</li>
            <li>Weston McKennie (Juventus/ITA; 62/11)</li>
            <li>Aidan Morris (Middlesbrough/ENG; 13/0)</li>
            <li>Gio Reyna (Borussia Mönchengladbach/GER; 34/9)</li>
            <li>Cristian Roldan (Seattle Sounders; 43/0)</li>
            <li>Tanner Tessmann (Olympique Lyon/FRA; 12/1)</li>
            <li>Malik Tillman (Bayer Leverkusen/GER; 26/3)</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Forwards (6)</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Brenden Aaronson (Leeds United/ENG; 56/9)</li>
            <li>Patrick Agyemang (Derby County/ENG; 12/5)</li>
            <li>Folarin Balogun (Monaco/FRA; 23/8)</li>
            <li>Ricardo Pepi (PSV Eindhoven/NED; 34/13)</li>
            <li>Christian Pulisic (AC Milan/ITA; 82/32)</li>
            <li>Tim Weah (Olympique Marseille/FRA; 47/7)</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Key Storylines</h2>
          <p>
            Reyna's return boosts creativity in midfield, while Pulisic and McKennie provide leadership. The inclusion of young talents like Brady, Celentano, and Agyemang signals Pochettino's eye on the future. With injuries sidelining key players, this camp will be crucial for final World Cup preparations.
          </p>

          <p>
            Players report to Atlanta on March 22. These matches against top-10 opponents offer the last major test before the World Cup roster is locked in.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3">Conclusion</h2>
          <p>
            This roster blends experience and youth, setting the stage for what could be a defining summer for US soccer. Stay tuned to US11 for updates on training camp, lineups, and match analysis.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: March 23, 2026</p>
            <p>Author: Mio Ristić</p>
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