'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function GonzaloTapiaColumbus() {
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
    "Columbus Crew Add Chilean Forward Gonzalo Tapia on Loan from São Paulo";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Columbus Crew sign Chilean forward Gonzalo Tapia on loan from São Paulo ⚫️🟡')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Columbus Crew Add Chilean Forward Gonzalo Tapia on Loan from São Paulo
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
            src="https://i.ibb.co/KzsYw3SH/Getty-Images-2279876069.webp"
            alt="Gonzalo Tapia Columbus Crew"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: 2026 DeFodi Images, Credit: DeFodi Images via Getty
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            The Columbus Crew have moved to strengthen their attack with the addition of Chilean forward Gonzalo Tapia, acquiring the 24-year-old on loan from Brazilian side São Paulo through the 2027 MLS Sprint Season, with an option to make the transfer permanent.
          </p>

          <p>
            The deal, announced on August 5, gives Columbus a versatile, energetic forward who arrives with senior international experience and a need for consistent minutes. Tapia will occupy an international roster spot pending the completion of his International Transfer Certificate and P-1 visa.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Player Looking for Rhythm
          </h2>

          <p>
            Tapia’s path to Columbus has been eventful. A product of Universidad Católica’s academy in Chile, he established himself as a regular in the Primera División before making the jump to River Plate in Argentina in 2025. His time in Buenos Aires was brief and limited. A subsequent loan to São Paulo turned into a permanent move, but opportunities remained scarce.
          </p>

          <p>
            In 48 appearances for the Brazilian club, Tapia scored eight goals. Under head coach Dorival Júnior, he struggled to break into a crowded attacking group that included Jonathan Calleri, Luciano, André Silva and others. Despite showing willingness to play across the front line, regular starts proved elusive.
          </p>

          <p>
            That lack of rhythm made a move attractive. According to Brazilian reports, Columbus was the only club to submit a formal offer, and Tapia prioritized the opportunity to play in MLS. Negotiations briefly stalled over personal terms before both sides found common ground. The loan includes a reported purchase option of around $1.5 million.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What He Brings
          </h2>

          <p>
            At 5-foot-10, Tapia is not a traditional target forward. He is more of a mobile attacker who can operate on either wing or as a second striker. Crew general manager Issa Tall described him as “a talented and hard-working player who brings quality and competition to our attack,” adding that the club believes he has the attributes to make an immediate impact.
          </p>

          <p>
            Tapia also arrives with international pedigree. He has represented Chile at multiple youth levels, including the 2019 FIFA U-17 World Cup, and has earned senior caps since 2024, scoring three goals in roughly a dozen appearances.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Timing and Context
          </h2>

          <p>
            The move comes as Columbus continues to shape its roster for the remainder of the 2026 season and the upcoming Sprint Season that will bridge the league’s transition to a fall-to-spring calendar in 2027. With striker Wessam Abou Ali dealing with injury, the Crew still retain a temporary Designated Player slot, but Tapia will not occupy a DP position.
          </p>

          <p>
            For São Paulo, the loan eases pressure on the wage bill and creates more space for younger attackers. For Tapia, it offers a clearer path to regular football at a club that has consistently valued technical, high-work-rate forwards.
          </p>

          <p>
            Whether the move becomes permanent will depend on how quickly he adapts and how much he contributes over the next several months. For now, Columbus has added a hungry, internationally capped attacker who arrives motivated to prove himself in a new league.
          </p>

          <p className="font-bold text-xl mt-10">
            The Black & Gold’s latest addition is ready to get to work.
          </p>

        </section>

        {/* NEXT FOR YOU */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/news/larry-berg-mls-commissioner"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Larry Berg and the One Opportunity MLS Cannot Afford to Miss
                </h3>
              </div>
            </Link>

            <Link
              href="/news/messi-leagues-cup-record"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Messi Sets Leagues Cup Scoring Record
                </h3>
              </div>
            </Link>

            <Link
              href="/news/usmnt-fall-friendlies-2026"
              className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md"
            >
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
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
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  LA Galaxy Close In on Chucky Lozano Loan
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