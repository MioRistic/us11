'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSMatchday3Page() {
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

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS Matchday 3 2026: NYCFC Dominates, Messi Shines for Inter Miami')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Matchday 3 2026: NYCFC’s Bronx Demolition, Messi Magic in Baltimore, Toronto’s Late Winner
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By US11 Analysis</span>
            <span>•</span>
            <time dateTime="2026-03-09">March 9, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={20} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={20} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={20} />
            </a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition">
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2224902244/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRGY3A====/GettyImages-2224902244.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="NYCFC 5-0 Orlando City MLS 2026 highlights"
            width={1018}
            height={420}
            className="w-full h-[420px] object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            MLS Matchday 3 action featuring NYCFC, Inter Miami and Toronto FC
          </figcaption>
        </figure>

        {/* ARTICLE */}
        <section className="prose prose-lg max-w-none leading-relaxed">

          <p>
            Three weeks into the 2026 MLS regular season and Matchday 3 has already produced
            statement performances, revenge narratives, and early table-shakers. From a
            five-goal demolition at Yankee Stadium to Lionel Messi inspiring Inter Miami in a
            sold-out Baltimore, the weekend delivered drama across both conferences.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Eastern Conference Standouts</h2>

          <h3 className="text-2xl font-semibold mt-6 mb-2">New York City FC 5-0 Orlando City</h3>
          <p>
            NYCFC turned Orlando goalkeeper Maxime Crépeau’s 16th-minute red card into a
            complete rout. Agustín Ojeda opened the scoring before the hosts piled on four
            more in a dominant attacking performance. The result sends NYCFC to the top of
            the Eastern Conference with a huge goal difference early in the season.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">D.C. United 1-2 Inter Miami</h3>
          <p>
            Lionel Messi once again proved decisive, scoring in the 27th minute after Rodrigo
            De Paul’s opener. DC pulled one back late but Miami held firm. Played at a
            sold-out M&T Bank Stadium in Baltimore, the match showed how Messi’s presence
            continues to transform MLS events into global spectacles.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">FC Cincinnati 0-1 Toronto FC</h3>
          <p>
            Toronto secured their first win of the season thanks to an 86th-minute strike
            from Dániel Sallói assisted by Richie Laryea. New goalkeeper Luka Gavran kept a
            clean sheet, offering a positive sign after the club’s aggressive winter
            transfer spending.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">New York Red Bulls 0-3 CF Montréal</h3>
          <p>
            Former Red Bull Wiki Carmona delivered a statement performance with a brace,
            including a stunning long-range goal. Montréal’s convincing road victory may
            trigger tactical questions for the Red Bulls after their strong start.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Western Conference Highlights</h2>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Portland Timbers 1-4 Vancouver Whitecaps</h3>
          <p>
            Brian White scored twice as Vancouver dominated the Cascadia clash. With a
            perfect 3-0-0 record, the Whitecaps join the league’s early pace-setters.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">Colorado Rapids 4-1 LA Galaxy</h3>
          <p>
            Colorado delivered one of the weekend’s most surprising results with a four-goal
            performance against the Galaxy, exposing defensive issues for the LA side.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-2">LAFC 1-0 FC Dallas</h3>
          <p>
            David Martínez’s powerful strike in the 55th minute secured another win for
            LAFC, keeping their perfect start alive and placing them among the Western
            Conference leaders.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Major Themes from Matchday 3</h2>

          <ul className="list-disc ml-6">
            <li>
              <strong>Red cards shaping matches:</strong> Orlando and Austin both suffered
              heavily after early dismissals.
            </li>
            <li>
              <strong>New signings delivering:</strong> Sallói, Pep Biel and Timo Werner all
              contributed decisive moments.
            </li>
            <li>
              <strong>Star power still rules:</strong> Lionel Messi continues to influence
              results and attract massive crowds.
            </li>
          </ul>

          <p className="mt-6">
            Matchday 3 leaves several big questions for the coming weeks: can NYCFC maintain
            their explosive form, will Toronto build momentum after their first victory,
            and which Western Conference club will sustain their perfect start?
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: March 9, 2026</p>
            <p>Author: US11 Analysis</p>
          </div>

          <Link href="/news" className="text-sm text-gray-500 hover:text-gray-800">
            Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}
