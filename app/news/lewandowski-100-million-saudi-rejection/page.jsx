'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function LewandowskiSaudiRejection() {
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

  const articleTitle = "Lewandowski’s €100 Million Rejection: Ambition Over Oil Money";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Lewandowski rejected €100m-per-season Saudi offer to stay at Barcelona ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Lewandowski’s €100 Million Rejection: Ambition Over Oil Money
          </h1>
          <p className="text-gray-500 text-sm">
            Published: July 29, 2026 · Author: Mio Ristić
          </p>
        </header>

        {/* SHARE BUTTONS */}
        <div className="flex items-center gap-3 mb-8">
          <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition">
            <FaFacebookF size={16} />
          </a>
          <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition">
            <FaTwitter size={16} />
          </a>
          <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition">
            <FaWhatsapp size={16} />
          </a>
          <button onClick={handleCopyLink} className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition">
            <FiCopy size={16} />
          </button>
        </div>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2285479115/crop/MM5DINJQGA5DENJTGE5G433XMU5DAORSGM2A====/GettyImages-2285479115.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Robert Lewandowski Barcelona"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Robert Lewandowski has never been particularly sentimental about money. That much became clear again this week when his longtime agent, Pini Zahavi, publicly detailed just how much the Polish striker walked away from to stay at Barcelona.
          </p>

          <p>
            According to Zahavi, Lewandowski turned down a concrete offer from Saudi Arabia worth more than €100 million per season. The figure is almost difficult to process in European football terms. It is the kind of number that usually ends conversations, not starts them. Yet Lewandowski said no.
          </p>

          <p>
            The first major revelation came in August 2025. Speaking to the Polish outlet <em>Fakt</em>, Zahavi confirmed that the previous summer (2024) a Saudi club had tabled an offer exceeding €100 million annually. Lewandowski rejected it without much apparent hesitation.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg my-8">
            “He preferred to fight for La Liga and the Champions League. And he almost achieved both goals.”
          </blockquote>

          <p>
            He was right about the domestic side of that equation. In the 2024-25 season, Barcelona completed a treble of La Liga, the Copa del Rey and the Spanish Super Cup. Lewandowski contributed heavily, finishing as the club’s top scorer across all competitions. The Champions League campaign ended in the semi-finals — close, but not close enough for a player of his standards.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why He Stayed
          </h2>

          {/* MIDDLE IMAGE */}
          <figure className="relative w-full rounded-3xl overflow-hidden shadow-md my-10 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/bltb23dc0c8a7151e02/crop/MM5DINBZGY5DENJSHE5G433XMU5DAORQ/GettyImages-2285519435.jpg?auto=webp&format=pjpg&width=3840&quality=60"
              alt="Robert Lewandowski"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Credit: Getty Images
            </div>
          </figure>

          <p>
            Zahavi has been consistent on the motivations. It was never purely about silverware. Barcelona had become a comfortable environment for Lewandowski and his family. The quality of life in the city mattered. The football, even in a squad that was still rebuilding under Hansi Flick, still offered the possibility of competing at the highest level.
          </p>

          <p>
            Saudi clubs, by contrast, were already overflowing with high-profile foreign signings. Roster limits made minutes less guaranteed than the headline salaries suggested. Lewandowski, Zahavi has repeatedly stressed, simply did not want to play there at that stage of his career.
          </p>

          <p>
            A second, even more striking detail emerged in July 2026, after Lewandowski had already left Barcelona for Chicago Fire. Zahavi revealed that in January 2026 another Saudi offer — this time a two-year package worth €100 million per season — sat on the table. Again, Lewandowski declined.
          </p>

          <p>
            At that point he still believed there was a path to remaining a central figure at Camp Nou. Club president Joan Laporta was supportive. The sporting director and head coach, however, could not guarantee him a starting role. For a player who has built his career on being indispensable, that uncertainty proved decisive.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Money That Disappeared
          </h2>

          <p>
            By the time Lewandowski’s Barcelona contract expired, the Saudi landscape had shifted. Spending had tightened. The same level of offer was no longer available. Zahavi has been open about this reality, noting conversations with clubs including Al-Ittihad and contacts in Qatar that made clear the market had cooled.
          </p>

          <p>
            Interestingly, Zahavi also disclosed that Lewandowski’s personal preference, had the finances aligned, leaned toward Saudi Arabia over the United States — primarily for lifestyle reasons. The time difference with Poland and the shorter travel distance mattered. The Chicago Fire project ultimately won out once the Middle Eastern option evaporated and European interest (Porto, Milan, Juventus) failed to develop into concrete deals.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What It Says About Lewandowski
          </h2>

          <p>
            At 37, most forwards in his position would have taken the money. Many already have. Lewandowski’s decision to prioritise competitive football and personal comfort over an unprecedented salary reinforces a pattern that has defined the latter stage of his career.
          </p>

          <p>
            He left Bayern Munich for Barcelona when many believed he should have stayed in a dominant system. He stayed in Spain when the easier, richer path was available. And when the sporting guarantees at Barcelona disappeared, he chose a new challenge in MLS rather than forcing a move purely for financial maximisation.
          </p>

          <p>
            The €100 million figure will continue to circulate as a symbol of what modern football can offer — and what some players are still willing to decline. For Lewandowski, the calculation was never only about the number on the contract. It was about where he felt he could still be the player he has always been.
          </p>

          <p className="font-bold text-xl mt-10">
            In an era when the gravity of money often feels irresistible, that choice remains notable.
          </p>

        </section>

        {/* READ NEXT */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link href="/news/mls-vs-liga-mx-all-star-2026" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  MLS vs. Liga MX: The Rivalry That Never Sleeps Arrives in Charlotte
                </h3>
              </div>
            </Link>

            <Link href="/news/sebastian-berhalter-middlesbrough" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Sebastian Berhalter Leaves Vancouver for Middlesbrough
                </h3>
              </div>
            </Link>

            <Link href="/news/lewandowski-chicago-fire" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Robert Lewandowski Joins Chicago Fire
                </h3>
              </div>
            </Link>

            <Link href="/news/iraola-liverpool-nycfc" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Andoni Iraola’s Path to Liverpool via New York City
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 29, 2026</p>
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