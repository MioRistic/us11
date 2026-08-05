'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTFallFriendlies() {
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

  const articleTitle =
    "USMNT Opens New Cycle Against Familiar Rivals and Fresh Challenges";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT announces first four friendlies after World Cup — Peru, Chile, Mexico & Canada 🇺🇸')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            USMNT Opens New Cycle Against Familiar Rivals and Fresh Challenges
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-05">August 5, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-3">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition"
            >
              <FaWhatsapp size={16} />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
              <FiCopy size={16} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/blt40b9a6a88c288b52/crop/MM5DEMZTGA5DCMZRGE5G433XMU5DAORSGMZQ====/GettyImages-2268813440.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="USMNT fall friendlies 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: Kevin C. Cox | Credit: Getty Images | Copyright: 2026 Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            The next chapter begins at home.
          </p>

          <p>
            Just one day after Mauricio Pochettino agreed to remain in charge through the 2030 World Cup, U.S. Soccer unveiled the first four matches of the new cycle. The United States will play a condensed four-game window between late September and early October, facing Peru, Chile, Mexico and Canada — all on home soil, all in cities that did not host World Cup matches this summer.
          </p>

          <p>
            The schedule is deliberate. After a tournament that ended in the Round of 16 with a heavy defeat to Belgium, the federation and coaching staff have chosen a mix of South American competition and the two co-hosts who shared the stage with them in 2026.
          </p>

          {/* MODERN SCHEDULE TABLE */}
          <div className="not-prose my-10 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <div className="bg-[#020617] px-6 py-4">
              <h3 className="text-lg font-bold text-white tracking-wide">
                USMNT Fall 2026 Friendly Schedule
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">Date</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">Opponent</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">Venue</th>
                    <th className="px-6 py-4 text-sm font-semibold text-gray-700">City</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-[#020617]">Sept 26, 2026</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2">
                        <span className="font-semibold">Peru</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">Inter.co Stadium</td>
                    <td className="px-6 py-4 text-gray-600">Orlando, FL</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-[#020617]">Sept 29, 2026</td>
                    <td className="px-6 py-4">
                      <span className="font-semibold">Chile</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">Energizer Park</td>
                    <td className="px-6 py-4 text-gray-600">St. Louis, MO</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition bg-blue-50/50">
                    <td className="px-6 py-4 font-medium text-[#020617]">Oct 3, 2026</td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-blue-700">Mexico</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">State Farm Stadium</td>
                    <td className="px-6 py-4 text-gray-600">Glendale, AZ</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition bg-red-50/40">
                    <td className="px-6 py-4 font-medium text-[#020617]">Oct 6, 2026</td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-red-700">Canada</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">Allianz Field</td>
                    <td className="px-6 py-4 text-gray-600">St. Paul, MN</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-6 py-3 text-xs text-gray-500 border-t border-gray-200">
              All matches broadcast on TNT, HBO Max, Telemundo, Universo &amp; Peacock
            </div>
          </div>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why These Opponents Matter
          </h2>

          <p>
            Peru and Chile offer technical, disciplined South American opposition. Both missed the World Cup and will arrive motivated to prove a point. For Pochettino, these games provide a different stylistic test than the physical, transitional matches the USMNT often faces in Concacaf.
          </p>

          <p>
            Then come the familiar faces. Mexico and Canada were co-hosts of the 2026 tournament and, like the United States, reached the Round of 16. The October 3 meeting in Arizona will be the first time the two rivals face each other since the Gold Cup final the previous summer. Three days later in Minnesota, the USMNT will meet Canada again, this time without the weight of a World Cup group stage or knockout round hanging over either side.
          </p>

          <p>
            Playing both rivals so soon after the tournament carries symbolism. The three North American teams spent years preparing together for a shared World Cup. Now they begin the long road to 2030 by measuring themselves against one another once more.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A New Cycle, Same Core Questions
          </h2>

          <p>
            These friendlies will be the first competitive action since Pochettino signed his new deal. The Argentine coach has spoken about building continuity and maintaining the connection the team felt with home crowds during the summer. In a statement accompanying the announcement, he emphasized the value of playing in front of American fans again and facing “the best opponents possible.”
          </p>

          <p>
            The window also arrives at a moment of transition. Several key players who featured heavily in the World Cup will be entering important club seasons, while younger options who gained limited minutes will look to force their way into the conversation. Four matches in 11 days give Pochettino a concentrated opportunity to assess depth, fitness and tactical ideas without the pressure of tournament elimination.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Looking Ahead
          </h2>

          <p>
            The choice of venues is notable. Orlando, St. Louis, the Phoenix area and St. Paul were left off the World Cup map. Hosting the first post-tournament matches there spreads the national team’s presence and rewards markets that supported the program throughout the cycle.
          </p>

          <p>
            For a team that topped its World Cup group and recorded the highest points total in USMNT history at a World Cup, the challenge now is different. The minimum expectation has risen. These four games will not define the next four years, but they will set the early tone of Pochettino’s second cycle.
          </p>

          <p className="font-bold text-xl mt-10">
            The rivals are familiar. The calendar is compressed. The next era of American men’s soccer begins on September 26 in Orlando.
          </p>

        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/news/chucky-lozano-galaxy-loan"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  1
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  LA Galaxy Close In on Chucky Lozano Loan
                </h3>
              </div>
            </Link>

            <Link
              href="/news/zavier-gozo-crystal-palace"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  2
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Zavier Gozo Nears $15M Move to Crystal Palace
                </h3>
              </div>
            </Link>

            <Link
              href="/news/pochettino-usmnt-extension-2030"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  3
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Mauricio Pochettino Returns as USMNT Coach Through 2030
                </h3>
              </div>
            </Link>

            <Link
              href="/news/gio-reyna-strasbourg"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  4
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Gio Reyna Agrees Move to Strasbourg
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 5, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/news" className="mt-4 sm:mt-0 hover:text-black transition-colors">
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}