'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSWorldCupRecordPage() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = async () => {
    if (!navigator?.clipboard || !currentUrl) return;
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      alert('✅ Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Failed to copy link');
    }
  };

  const articleTitle = "MLS Sets New Record with 44 Players on 2026 World Cup Rosters";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS sets a new World Cup record with 44 players across 17 nations ⚽🌍')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Sets New Record with 44 Players on 2026 World Cup Rosters
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-02">June 2, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80">
              <FaFacebookF size={20} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80">
              <FaTwitter size={20} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80">
              <FaWhatsapp size={20} />
            </a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300">
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/bltad06137e831f623c/Lionel%20Messi%20Argentina.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="MLS World Cup players record"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            Major League Soccer has set a new benchmark.
          </p>

          <p>
            A record <strong>44 players</strong> currently on MLS rosters will represent their countries at the 2026 FIFA World Cup, the league announced Tuesday. The milestone underscores the continued rise in talent development and the growing international reputation of North American soccer as the United States, Canada, and Mexico prepare to co-host the tournament.
          </p>

          <p>
            Those 44 players come from <strong>21 different MLS clubs</strong> and represent <strong>17 different nations</strong>, highlighting just how global Major League Soccer has become.
          </p>

          {/* PODNASLOVI SU SADA H1 */}
          <h1 className="text-3xl font-bold mt-10 mb-4">LAFC Leads the Way</h1>
          <p>
            Los Angeles Football Club leads the league with a high of four call-ups:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Mathieu Choinière (Canada)</li>
            <li>Stephen Eustáquio (Canada)</li>
            <li>Son Heung-min (South Korea)</li>
            <li>Jacob Shaffelburg (Canada)</li>
          </ul>

          <h1 className="text-3xl font-bold mt-10 mb-4">Full Club-by-Club Breakdown</h1>

          <p><strong>LAFC (4)</strong><br />
            Mathieu Choinière (Canada), Stephen Eustáquio (Canada), Son Heung-min (South Korea), Jacob Shaffelburg (Canada)</p>

          <p><strong>Charlotte FC (1)</strong><br />
            Tim Ream (USA)</p>

          <p><strong>Chicago Fire FC (3)</strong><br />
            Chris Brady (USA), Mbekezeli Mbokazi (South Africa), Joel Waterman (Canada)</p>

          <p><strong>FC Cincinnati (1)</strong><br />
            Miles Robinson (USA)</p>

          <p><strong>Columbus Crew (2)</strong><br />
            Max Arfsten (USA), Steven Moreira (Cape Verde)</p>

          <p><strong>FC Dallas (3)</strong><br />
            Louicius Deedson (Haiti), Herman Johansson (Sweden), Petar Musa (Croatia)</p>

          <p><strong>Inter Miami CF (3)</strong><br />
            Rodrigo De Paul (Argentina), Lionel Messi (Argentina), Dayne St. Clair (Canada)</p>

          <p><strong>Minnesota United FC (3)</strong><br />
            Michael Boxall (New Zealand), Carlos Harvey (Panama), James Rodríguez (Colombia)</p>

          <p><strong>Nashville SC (1)</strong><br />
            Ahmed Qasem (Iraq)</p>

          <p><strong>New England Revolution (1)</strong><br />
            Matt Turner (USA)</p>

          <p><strong>New York City FC (3)</strong><br />
            Matt Freese (USA), Aiden O’Neill (Australia), Kai Trewin (Australia)</p>

          <p><strong>Orlando City (3)</strong><br />
            Maxime Crépeau (Canada), Braian Ojeda (Paraguay), Marco Pašalić (Croatia)</p>

          <p><strong>Philadelphia Union (2)</strong><br />
            Danley Jean Jacques (Haiti), Olwethu Makhanya (South Africa)</p>

          <p><strong>Vancouver Whitecaps FC (3)</strong><br />
            Sebastian Berhalter (USA), Andrés Cubas (Paraguay), Rayan Elloumi (Tunisia)</p>

          <p><em>And 11 other clubs with one or two representatives each.</em></p>

          <h1 className="text-3xl font-bold mt-10 mb-4">What This Record Means</h1>
          <p>
            This is the highest number of MLS-based players ever selected for a single World Cup, surpassing the previous record set in 2022. The figure reflects both the improving quality of play in the league and the growing willingness of national teams to trust players who are receiving regular, high-level minutes in MLS.
          </p>

          <p>
            Notable storylines include Lionel Messi and Rodrigo De Paul leading Inter Miami’s Argentine contingent, Son Heung-min giving LAFC genuine star power on the world stage, a strong Canadian presence (eight players total) as Canada co-hosts the tournament, and James Rodríguez still being counted as an MLS player despite his inconsistent form for Minnesota United.
          </p>

          <p>
            The 2026 World Cup runs from June 11 to July 19 across stadiums in the United States, Canada, and Mexico. With so many MLS players involved, the domestic league will be closely watching how their stars perform on the biggest stage — especially with the summer transfer window opening shortly after the group stage.
          </p>

          <p>
            For MLS, this record is more than just a number. It is tangible proof that the league is both producing and attracting players capable of competing at the highest international level.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: June 2, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>

          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">
            Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}