'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function ChuckyLozanoGalaxyLoan() {
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
    "LA Galaxy Finalizing Deal for Chucky Lozano on Loan from San Diego FC";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'LA Galaxy finalizing Chucky Lozano loan deal from San Diego FC ⚽️'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    articleTitle + ' ' + currentUrl
  )}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            LA Galaxy Finalizing Deal for Chucky Lozano on Loan from San Diego FC
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-06">August 6, 2026</time>
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
              className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
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
            src="https://assets.goal.com/images/v3/getty-2249117363/crop/MM5DGOJVHA5DEMRSGY5G433XMU5DAORSGA3A====/GettyImages-2249117363.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Hirving Chucky Lozano LA Galaxy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: 2026 Getty Images | Credit: Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            The LA Galaxy are closing in on a deal to bring Hirving “Chucky” Lozano to Carson on loan from San Diego FC, multiple sources briefed on the situation tell US11.
          </p>

          <p>
            The 31-year-old Mexican winger is expected to join as a Designated Player. San Diego, which gave Lozano permission to negotiate with the Galaxy, will still cover a portion of his salary. ESPN Mexico first reported the talks.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            An Uncomfortable Saga
          </h2>

          <p>
            If completed, the move would end one of the more uncomfortable sagas in recent MLS history. Lozano has not played a single minute for San Diego in 2026.
          </p>

          <p>
            After a strong debut season in which he recorded nine goals and 10 assists in 27 regular-season matches, the relationship between the player and the club deteriorated. By the start of this year, San Diego made clear he was no longer part of their plans. Lozano has trained alone for months.
          </p>

          <p>
            His guaranteed compensation of $9.33 million this season ranks as the fourth-highest in MLS, behind only Lionel Messi, Son Heung-min and Rodrigo De Paul. That figure made his isolation particularly costly for San Diego.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Calculated Move for the Galaxy
          </h2>

          <p>
            For the Galaxy, the deal represents a calculated, relatively low-risk opportunity. The club has reshaped its attack this year, selling Gabriel Pec to Cruzeiro for a club-record fee and adding Japanese forward Kyōgo Furuhashi.
          </p>

          <p>
            Adding a proven MLS producer with international experience offers another option in the final third as they push for a playoff spot.
          </p>

          <p>
            Lozano arrives motivated, according to sources close to the situation. After nearly a year away from competitive matches, the chance to restart his career in Los Angeles — and reset the narrative around his time in Southern California — appears to have aligned interests on all sides.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What’s Next
          </h2>

          <p>
            The secondary transfer window remains open until early September. While the agreement is not yet finalized, sources indicate the Galaxy and San Diego are working through the remaining details.
          </p>

          <p className="font-bold text-xl mt-10">
            A move that once seemed unlikely is now close to becoming reality.
          </p>

        </section>

        {/* READ NEXT */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/news/gonzalo-tapia-columbus-crew"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  1
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Gonzalo Tapia Joins Columbus Crew on Loan from São Paulo
                </h3>
              </div>
            </Link>

            <Link
              href="/news/larry-berg-mls-commissioner"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  2
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  With New Commissioner in Place, MLS Has One Opportunity It Cannot Afford to Miss
                </h3>
              </div>
            </Link>

            <Link
              href="/news/messi-leagues-cup-record"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  3
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Record-Setting Lionel Messi Leads Inter Miami Opening Leagues Cup Win
                </h3>
              </div>
            </Link>

            <Link
              href="/news/zavier-gozo-crystal-palace"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  4
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Zavier Gozo Nears $15 Million Move to Crystal Palace
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 6, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link
            href="/news"
            className="mt-4 sm:mt-0 hover:text-black transition-colors"
          >
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}