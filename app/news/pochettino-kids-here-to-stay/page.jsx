'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PochettinoKidsHereToStay() {
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
    "Which of Pochettino’s New USMNT Kids Are Actually Here to Stay?";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Which of Pochettino’s new USMNT kids are actually here to stay?')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Which of Pochettino’s New USMNT Kids Are Actually Here to Stay?
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-09">October 9, 2026</time>
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
            src="https://assets.goal.com/images/v3/imago-sport-1083944903/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/imago-image.jpeg?quality=60&auto=webp&format=pjpg&width=1920"
            alt="Mauricio Pochettino with the USMNT"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: ZUMA Press Wire
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            Mauricio Pochettino used four friendlies to ask the question. The scores answered a narrower one.
          </p>

          <p>
            The United States went 4-0 in the window: Peru 4-1, Chile 4-2, Mexico 3-0, Canada 1-0. Twelve goals. Half of them came from three players who did not have a cap in August. That is the evidence. A debut is not a place in the next squad.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Hall is the cleanest case
          </h2>

          <p>
            Julian Hall is 18, he plays for the New York Red Bulls, and he scored against Peru on debut, against Chile in his first start, and against Mexico. Three in three. After Chile he was the youngest American to score in each of his first two caps, ahead of Ricardo Pepi. The audition was helped by the room. Pepi was hurt. Folarin Balogun was not called. Hall still did it against three different opponents, which none of the other newcomers managed.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Ellis finished the window he opened
          </h2>

          <p>
            Justin Ellis is 19, he plays for Orlando City, and he scored four minutes into his debut, then again in the 29th minute against Canada while he was limping from a Stephen Eustaquio challenge. First goal of the window, last goal of the window. He was off at halftime both times. The finish works. The 90 minutes are still missing.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Sullivan is the name
          </h2>

          <p>
            Cavan Sullivan is not yet the player who stays. He debuted against Peru at 16 years and 363 days, started against Mexico, and became the youngest scorer in U.S. men’s history at 17 years and five days. The chip was his. The loose ball was Raúl Rangel’s. Manchester City are due to take him in January 2028, the first window after he turns 18. After Peru, Pochettino said he needs time, the same sentence he used for Mathis Albert, Zavier Gozo, Adri Mehmeti, Brooklyn Raines, Neil Pierre, Frankie Westfield, Hall and Ellis. The record does not shorten that sentence.
          </p>

          <p>
            Albert sits between them. He is 17, he is at Borussia Dortmund, he won the penalty against Peru, and he scored against Chile to hold the youngest-scorer mark for four days. He started against Canada. He does not have Hall’s rhythm. He has a club that is not in MLS.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            November is the filter
          </h2>

          <p>
            The rest debuted and did not leave the same mark. Before the window, Gozo looked the most ready to stick immediately. Mehmeti, Raines, Pierre, Westfield and Peyton Miller got minutes. Brian Schwake kept a clean sheet in his first start against Canada, in a match the United States finished with one shot on target. Useful. Not a selection.
          </p>

          <p className="font-semibold text-lg mt-10">
            The Nations League brings Christian Pulisic, Balogun and Weston McKennie back into the mix. Whoever from this group is still in the squad when those three return is the one who is here. Until then, Hall and Ellis are the only newcomers who answered the question with a goal more than once. Sullivan answered it with a camera.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/usmnt-canada-ellis-window" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2298472055/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2298472055.jpg?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Justin Ellis against Canada"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    USMNT Beat Canada 1-0 as Justin Ellis Caps a 4-0 Window
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 7, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/sullivan-mexico-record" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2298472764/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2298472764.jpg?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Cavan Sullivan against Mexico"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Cavan Sullivan Made History Against Mexico. The Next Goal Will Have to Be Harder.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 5, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/usmnt-mexico-glendale-preview" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2297307455/crop/MM5DINZZHA5DENRZHE5G433XMU5DAORQ/GettyImages-2297307455.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="USMNT vs Mexico"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    USMNT vs Mexico: The Friendly That Will Not Feel Like One
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 2, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/cavan-sullivan-usmnt-call" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2295138136/crop/MM5DGOJYGQ5DEMRUGE5G433XMU5DGNZRHIZDONI=/GettyImages-2295138136.jpg?quality=60&auto=webp&format=pjpg&width=1280"
                    alt="Cavan Sullivan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Cavan Sullivan Stays Hot With Two Goals as a USMNT Call Beckons
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 14, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 9, 2026</p>
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