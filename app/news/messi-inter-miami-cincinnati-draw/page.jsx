'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function InterMiamiCincinnatiMessiDraw() {
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
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const articleTitle =
    'Messi Didn’t Score or Assist. Inter Miami Still Escaped With a Late Draw Against Cincinnati.';

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
              MLS
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              Inter Miami
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              Lionel Messi
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Messi Didn’t Score or Assist. Inter Miami Still Escaped With a Late Draw Against Cincinnati.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            Luis Suárez gave Inter Miami the lead, Cincinnati turned the game around late, and Riquelme Fillipi rescued a point in the 90th minute. Messi played nearly the full match without a goal contribution.
          </p>

          {/* Share buttons - black & white */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FiCopy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy link'}
            </button>

            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FaFacebookF className="w-4 h-4" />
              Facebook
            </a>

            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FaTwitter className="w-4 h-4" />
              X
            </a>

            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </header>

        {/* Hero image */}
        <figure className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9] bg-gray-100">
          <Image
            src="https://assets.goal.com/images/v3/getty-2302465844/crop/MM5DGNRRGY5DEMBTGQ5G433XMU5DAORRHA4Q====/GettyImages-2302465844.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Lionel Messi Inter Miami vs FC Cincinnati"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-3 py-1.5 rounded font-medium">
            Getty Images
          </div>
        </figure>

        {/* Article content */}
        <div className="max-w-none text-lg leading-relaxed">
          <p className="mb-6">
            Inter Miami needed a 90th-minute equaliser from a substitute to leave Nu Stadium with a point against FC Cincinnati. The final score was 2-2.
          </p>

          <p className="mb-6">
            Luis Suárez opened the scoring in the 61st minute. Cincinnati responded with two quick goals — Kenji Mboma Dem in the 80th and Samuel Gidi in the 86th — before Riquelme Fillipi, who had only been on the pitch for a few minutes, finished from close range to rescue the draw.
          </p>

          <p className="mb-6">
            Lionel Messi played nearly the full match. He did not score and he did not assist. He was also shown a yellow card in the 44th minute. For a player who has carried Inter Miami’s attack for most of the season, it was a quiet night by his standards.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            The late swing
          </h2>

          <p className="mb-6">
            Miami controlled large stretches of the game after Suárez’s goal, but the final 10 minutes exposed the same issue that has appeared in other recent matches: once the opponent finds a way through, the response is not always immediate or clean.
          </p>

          <p className="mb-6">
            Fillipi’s equaliser was well taken, but it came after Cincinnati had already turned the game around. The point kept Miami in third place in the Eastern Conference, two points behind New England after the Revolution’s 3-2 win over the New York Red Bulls the same night. Nashville remain well clear at the top.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            What the night said about Messi and Miami
          </h2>

          <p className="mb-6">
            Messi finishing a match without a goal or assist is not new, but it is still relatively rare this season. He remains the league leader in goal contributions. On this particular night, however, Miami’s two goals came from Suárez and a late substitute. The attack did not run through him in the decisive moments.
          </p>

          <p className="mb-6">
            That does not mean he was invisible. Opponents continue to mark him tightly, and Cincinnati’s midfield and defence made it difficult for him to find space in dangerous areas. The broader question for Miami is how dependent the team remains on those moments when he does create or finish them. Against Cincinnati, the late equaliser arrived without him.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            The playoff picture
          </h2>

          <p className="mb-6">
            The draw was more useful for Cincinnati than for Miami. Cincinnati stayed in the race for a playoff place. Miami already have one, but the result cost them ground on New England in the race for second place in the East. With two regular-season games remaining, the difference between second and third still matters for home-field advantage in the first round.
          </p>

          <p className="mb-6">
            Miami face New England on Sunday. That match will likely decide which of the two teams finishes higher. Cincinnati, meanwhile, still need results of their own and help from elsewhere.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            A point that felt like less
          </h2>

          <p className="mb-6">
            Inter Miami left with a point they nearly lost. Messi left without a goal or an assist. Fillipi’s first MLS goal was the moment that prevented a defeat. In a season where Miami have looked capable of both dominant and uneven performances, Wednesday’s game sat somewhere in between.
          </p>

          <p className="mb-6">
            The result keeps them in a strong position heading into the final two matchdays. It does not, however, change the fact that on a night when they needed more control in the closing stages, the decisive contribution came from someone other than their captain.
          </p>
        </div>

        {/* Next to Read */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/news/orlando-chicago-griezmann-playoff-race" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative bg-gray-100">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2294480138/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORWGY======/GettyImages-2294480138.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Antoine Griezmann"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Orlando Blew a 2-0 Lead in Chicago. Griezmann Still Shined. Charlotte and Philly Clinched on the Same Night.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 29, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/nashville-supporters-shield-2026" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative bg-gray-100">
                  <Image
                    src="https://assets.goal.com/images/v3/blt0733c3edcfb41a40/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-22T213603.222.png?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Nashville SC"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Nashville SC Won the 2026 Supporters’ Shield. They Did It the Old-Fashioned Way.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 25, 2026</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 29, 2026</p>
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