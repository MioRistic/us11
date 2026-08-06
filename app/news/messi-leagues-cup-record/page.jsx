'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MessiLeaguesCupRecord() {
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
    "Messi Sets Leagues Cup Scoring Record as Inter Miami Open Tournament with 4-2 Win";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Messi becomes Leagues Cup all-time top scorer in Inter Miami’s 4-2 win 🐐')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Messi Sets Leagues Cup Scoring Record as Inter Miami Open Tournament with 4-2 Win
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
            src="https://assets.goal.com/images/v3/getty-2289259073/crop/MM5DGMJYGQ5DCNZZGE5G433XMU5DGOJRHI2DK===/GettyImages-2289259073.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Lionel Messi Inter Miami Leagues Cup 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Lionel Messi needed only 44 minutes to remind everyone why he still defines this competition.
          </p>

          <p>
            In Inter Miami’s Leagues Cup opener on Wednesday night at Nu Stadium, the Argentine scored twice and added an assist in a 4-2 victory over Atlético San Luis. The performance made him the all-time leading goalscorer in Leagues Cup history with 14 goals in 12 appearances, moving clear of LAFC’s Denis Bouanga.
          </p>

          <p>
            These were also Messi’s first goals since the World Cup final.
          </p>

          <p>
            San Luis struck first in the fourth minute through David Rodríguez. Messi equalized seven minutes later with a first-time volley from Noah Allen’s cross. Telasco Segovia made it 2-1 midway through the half, again from an Allen assist, before Messi added his second in the 44th minute. Just before the break, Messi delivered a corner that Micael headed home for 4-1. Rafa Llorente pulled one back for the visitors early in the second half, but Miami held firm.
          </p>

          <p>
            Allen finished with three assists. For Messi, it was another chapter in a competition he has dominated since arriving in MLS. He now has more goals than games played in the Leagues Cup.
          </p>

          {/* YOUTUBE VIDEO */}
          <div className="my-10">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-md" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/LfksKqEfYug"
                title="Lionel Messi Leagues Cup goals"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Elsewhere in the Opening Round
          </h2>

          <p>
            Several other MLS sides made strong starts:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Charlotte FC</strong> dismantled Pumas 3-0</li>
            <li><strong>FC Cincinnati</strong> and <strong>Columbus Crew</strong> both won 3-1 (against Pachuca and Atlas)</li>
            <li><strong>FC Dallas</strong> beat Querétaro 2-0</li>
            <li><strong>Orlando City</strong>, with Antoine Griezmann on the scoresheet, came from behind to defeat Monterrey 2-1</li>
          </ul>

          <p>
            There were tougher nights too. Seattle Sounders were beaten 3-0 away at Toluca. Nashville lost 1-0 at home to León. Minnesota United and Vancouver Whitecaps both fell to Liga MX opposition, while Real Salt Lake and LAFC needed penalty shootouts after 1-1 draws (LAFC advanced against Chivas; Real Salt Lake were eliminated by Tigres).
          </p>

          <p>
            The early picture shows a mixed but competitive opening for MLS clubs. Inter Miami, however, looked the most complete on the night — and Messi once again set the standard.
          </p>

          <p className="font-bold text-xl mt-10">
            The Herons will look to build on the result when the group stage continues. For everyone else, the message was clear: the tournament has begun, and the best player in its history is already back on the scoresheet.
          </p>

        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/news/usmnt-fall-friendlies-2026"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  USMNT Opens New Cycle Against Familiar Rivals
                </h3>
              </div>
            </Link>

            <Link
              href="/news/chucky-lozano-galaxy-loan"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
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
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Zavier Gozo Nears $15M Move to Crystal Palace
                </h3>
              </div>
            </Link>

            <Link
              href="/news/pochettino-stays-2030"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Mauricio Pochettino Returns as USMNT Coach Through 2030
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
          <Link href="/news" className="mt-4 sm:mt-0 hover:text-black transition-colors">
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}