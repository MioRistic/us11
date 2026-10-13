'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function DoucoureCharlotte() {
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
    "Charlotte Signed Doucouré Before the Freeze. The Debut Can Wait.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Charlotte signed Doucouré before the freeze. The debut can wait.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Charlotte Signed Doucouré Before the Freeze. The Debut Can Wait.
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-13">October 13, 2026</time>
          </div>
        </header>

        <div className="flex items-center gap-3 mb-8">
          <a
            href={facebookShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href={twitterShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on X"
          >
            <FaTwitter />
          </a>
          <a
            href={whatsappShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <button
            onClick={handleCopyLink}
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Copy link"
          >
            <FiCopy />
          </button>
          {copied && <span className="text-sm text-green-600">Copied</span>}
        </div>

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2197194714/crop/MM5DCOBQHA5DCMBRG45G433XMU5DCMBZG45DGMZV/GettyImages-2197194714.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Abdoulaye Doucouré"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Getty Images
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            Abdoulaye Doucouré is a Charlotte FC player until the end of 2026. He is not available for Wednesday.
          </p>

          <p>
            The club announced the signing on Oct. 9, before the MLS roster freeze deadline. Free agent, international slot, contract through the remainder of the season. He is 33. His last club was NEOM in the Saudi Pro League for the 2025-26 season. Before that he spent five years at Everton until his contract expired in the summer of 2025, and four years at Watford before that, with a loan at Granada in between. Rennes was the first senior club. He has 278 Premier League appearances for Watford and Everton. He has two caps for Mali, the last of them in 2022.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The freeze was the deadline
          </h2>

          <p>
            Charlotte did not stop at him. The same day the club promoted Hugo Mbongue and Nathan Richmond from Crown Legacy through the 2027 sprint season, with options for the two seasons after that. Archie Goodwin and Aron John were moved to the season-ending injury list so the roster would fit. General manager Zoran Krneta called the three additions a way to add balance and competition, and said Doucouré arrives with the ability to connect play from midfield into the final third. Charlotte already has Tim Ream, Ashley Westwood, Allan Saint-Maximin and Harry Toffolo. The Premier League names are not new. The timing is.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The visa is the wait
          </h2>

          <p>
            The timing is the point. The freeze is a deadline, not a starting whistle. RotoWire reported on Oct. 12 that manager Dean Smith does not expect Doucouré to play in the near term while he sorts his visa and recovers match fitness. Columbus on Wednesday is too soon. Philadelphia on Oct. 17 or Portland on Oct. 24 are the more realistic first windows. After the Crew, Charlotte have five regular-season matches left. They are fifth in the East.
          </p>

          <p className="font-semibold text-lg mt-10">
            A short contract signed against a deadline is a useful piece of business. It is not the same as a player who can help this week. Doucouré has the numbers from England: 38 goals and 26 assists in 307 appearances for Everton and Watford across all competitions, and the game-winning goal on the final day in 2023 that kept Everton up. He does not have a work permit yet, and he has not played competitive minutes since Saudi Arabia. The freeze got him on the roster. The visa and the fitness decide whether he is on the field before the season ends.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/fc-27-american-men-ratings" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2267704044/crop/MM5DENRQHA5DCNBWG45G433XMU5DEORRGQ3Q====/GettyImages-2267704044.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Christian Pulisic"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    The 10 Highest-Rated American Men in FC 27. None of Them Play in MLS.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 9, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/pochettino-kids-here-to-stay" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/imago-sport-1083944903/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/imago-image.jpeg?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Mauricio Pochettino"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Which of Pochettino’s New USMNT Kids Are Actually Here to Stay?
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 9, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 13, 2026</p>
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