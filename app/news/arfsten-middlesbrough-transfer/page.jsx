'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function ArfstenMiddlesbroughTransfer() {
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
    "Max Arfsten Closing In on Middlesbrough Move — Set to Join USMNT Duo Morris and Berhalter";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Max Arfsten finalizing $7.5M move to Middlesbrough 🇺🇸')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Max Arfsten Closing In on Middlesbrough Move — Set to Join USMNT Duo Morris and Berhalter
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-31">July 31, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2222812419/crop/MM5DINBRG45DENBYGU5G433XMU5DAORSGMYA====/GettyImages-2222812419.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Max Arfsten Columbus Crew USMNT"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: Stephen Maturen | Credit: Getty Images | Copyright: 2025 Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Max Arfsten is on the verge of a significant step in his career.
          </p>

          <p>
            According to multiple sources, the Columbus Crew and U.S. men’s national team wingback is finalizing a transfer to English Championship side Middlesbrough in a deal worth up to $7.5 million including add-ons. The Crew will retain a sell-on clause.
          </p>

          <p>
            Arfsten is expected to travel to England in the coming days to complete the formalities.
          </p>

          <p>
            If completed, the move will reunite him with two familiar faces and create one of the more notable American clusters in the Championship.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Familiar Landing Spot
          </h2>

          <p>
            Middlesbrough have quietly built a strong connection to American talent.
          </p>

          <p>
            Arfsten will become the third current USMNT player at the club, joining:
          </p>

          <ul>
            <li>
              <strong>Aidan Morris</strong> — his former Columbus Crew teammate, who moved to Boro in 2024
            </li>
            <li>
              <strong>Sebastian Berhalter</strong> — who completed his own transfer from the Vancouver Whitecaps earlier this week
            </li>
          </ul>

          <p>
            All three have ties to the Crew organization. Morris and Arfsten were teammates in Columbus, while Berhalter came through the Crew academy before moving on.
          </p>

          <p>
            The club also has additional MLS connections in the squad, including former Charlotte FC center back Adilson Malanda.
          </p>

          <p>
            For Arfsten, the destination makes sense on multiple levels: a competitive Championship side with promotion ambitions, regular minutes as a realistic target, and a ready-made support system of players who know both the league and the American pathway.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why This Move Matters
          </h2>

          <p>
            At 25, Arfsten has developed into one of the more productive wingbacks in MLS.
          </p>

          <p>
            This season he has contributed <strong>five goals and six assists in 18 appearances</strong> across all competitions for the Crew, despite a slow start to the year and a mid-season coaching change. He was also selected for the MLS All-Star Game for a second consecutive year.
          </p>

          <p>
            His résumé in Columbus already includes an MLS Cup title (2023) and a Leagues Cup triumph (2024).
          </p>

          <p>
            Internationally, he has earned 21 caps for the USMNT and was part of Mauricio Pochettino’s 2026 World Cup squad. He made a brief appearance off the bench in the Round of 16 defeat to Belgium.
          </p>

          <p>
            The jump to Europe has been a clear next step for some time. Middlesbrough showed interest in previous windows, and French side Toulouse also inquired in 2025. This summer, the persistent pursuit finally appears close to paying off.
          </p>

          <p>
            If all add-ons are triggered, the deal would rank as the third-largest outbound transfer in Crew history — behind only Cucho Hernández’s move to Real Betis and Diego Rossi’s departure to Monterrey.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What It Means Going Forward
          </h2>

          <p>
            For Middlesbrough, the signing fits a clear recruitment pattern: athletic, high-upside players from MLS who can contribute immediately in a promotion push.
          </p>

          <p>
            For the Crew, it represents another successful development story and a solid financial return, with the added benefit of a sell-on percentage if Arfsten moves again later in his career.
          </p>

          <p>
            For Arfsten himself, the opportunity is straightforward. Regular football in a demanding league, alongside national team teammates, offers a platform to push for a larger role with the USMNT in the next cycle.
          </p>

          <p>
            The deal is not yet officially confirmed by either club. Medicals and final paperwork remain. But the framework is in place, and all signs point to the transfer being completed in the coming days.
          </p>

          <p className="font-bold text-xl mt-8">
            American talent continues to find pathways into the Championship. In Arfsten’s case, the landing spot already feels familiar.
          </p>

        </section>

     {/* READ NEXT */}
<section className="mt-16">
  <h2 className="text-2xl font-bold mb-6">Next For You</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <Link href="/news/sebastian-berhalter-middlesbrough" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
      <div className="flex items-center gap-8">
        <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
        <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
          Vancouver Whitecaps Transfer USMNT’s Sebastian Berhalter to Middlesbrough
        </h3>
      </div>
    </Link>

    <Link href="/news/mls-all-star-game-2026" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
      <div className="flex items-center gap-8">
        <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
        <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
          MLS All-Star Game 2026: Missing Messi But Riding Post-World Cup Momentum
        </h3>
      </div>
    </Link>

    <Link href="/news/olwethu-makhanya-rangers" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
      <div className="flex items-center gap-8">
        <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
        <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
          Rangers Close In on Deal for Philadelphia Union Defender Olwethu Makhanya
        </h3>
      </div>
    </Link>

    <Link href="/news/andoni-iraola-nycfc-liverpool" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
      <div className="flex items-center gap-8">
        <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
        <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
          Andoni Iraola’s Journey from NYCFC to Liverpool Manager
        </h3>
      </div>
    </Link>

  </div>
</section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 31, 2026</p>
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