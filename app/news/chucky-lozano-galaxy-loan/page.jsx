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
    "LA Galaxy Close In on Chucky Lozano Loan — A California Lifeline for Both Sides";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('LA Galaxy in advanced talks for Chucky Lozano loan from San Diego 🇲🇽⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            LA Galaxy Close In on Chucky Lozano Loan — A California Lifeline for Both Sides
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-04">August 4, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2236485203/crop/MM5DGNBQGU5DCOJRGU5G433XMU5DAORSGEZA====/GettyImages-2236485203.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Hirving Chucky Lozano LA Galaxy loan talks"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: Kevin C. Cox | Credit: Getty Images | Copyright: 2025 Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            One year ago, Hirving “Chucky” Lozano was the face of a brand-new franchise.
          </p>

          <p>
            San Diego FC made him their first major signing, the star they built their expansion identity around. He delivered — nine goals and 10 assists in the regular season, more production in the playoffs — and for a moment it looked like the Mexican winger had found a long-term home on the West Coast.
          </p>

          <p>
            Twelve months later, he is training alone.
          </p>

          <p>
            The LA Galaxy are now in advanced talks to take Lozano on loan, according to multiple sources briefed on the situation. The deal is not yet completed, but momentum is building. San Diego has given the Galaxy permission to negotiate directly with the player. If it goes through, Lozano is expected to be registered as a Designated Player in Carson, while San Diego would remain on the hook for a portion of his substantial salary.
          </p>

          <p>
            At $9.33 million in guaranteed compensation this season, Lozano ranks as the fourth-highest-paid player in Major League Soccer — behind only Lionel Messi, Son Heung-min and Rodrigo De Paul. That number has become a problem for a San Diego side that no longer sees him as part of its plans.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Fresh Start Across the Freeway
          </h2>

          <p>
            For Lozano, the move represents something simple and urgent: a chance to play again.
          </p>

          <p>
            The 31-year-old has not appeared in an official match since late November 2025. After internal disagreements and disciplinary issues at the end of last season, the club made clear he was no longer in their picture. He has spent the entire 2026 campaign training in isolation while San Diego pushed forward without him.
          </p>

          <p>
            A return to competitive football with the Galaxy would give him minutes, visibility, and a platform in a market with a large Mexican-American fan base. Los Angeles has long been a second home for Mexican stars. For a player still only 31 and with a track record of producing in this league, the opportunity is obvious.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why the Galaxy Are Interested
          </h2>

          <p>
            The Galaxy’s attack has been rebuilt this summer. They sold Gabriel Pec to Cruzeiro for a club-record fee and brought in Japanese forward Kyōgo Furuhashi. What they still lacked was a proven, experienced wide attacker who could create and finish at a high level.
          </p>

          <p>
            Lozano fits that profile. His 2025 numbers were strong, and his ability to beat defenders one-on-one remains a rare commodity in MLS. Taking him on loan, with San Diego still paying part of the wage, softens the financial risk while adding immediate quality.
          </p>

          <p>
            It is a pragmatic move from a Galaxy side that needs results in the second half of the season.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Picture
          </h2>

          <p>
            This is not a glamorous transfer. It is a practical one.
          </p>

          <p>
            San Diego gets salary relief and removes a complicated situation from their roster. Lozano gets a path back onto the field. The Galaxy get a talented, motivated player who has something to prove.
          </p>

          <p>
            Whether the deal is finalized in the coming days will depend on the final details of the salary split and medical clearance. But the direction of travel is clear.
          </p>

          <p>
            One year after arriving as the face of a new franchise, Chucky Lozano is looking for a second chance just up the coast. And the LA Galaxy, in need of another attacking option, appear ready to give it to him.
          </p>

          <p className="font-bold text-xl mt-10">
            Sometimes the most logical moves in soccer are the ones born out of mutual necessity.
          </p>

        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/news/zavier-gozo-crystal-palace"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  1
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
                  2
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
                  3
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Gio Reyna Agrees Move to Strasbourg
                </h3>
              </div>
            </Link>

            <Link
              href="/news/lucas-herrington-hull-city"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">
                  4
                </span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Hull City Agree Deal for Lucas Herrington
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 4, 2026</p>
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