'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function ZavierGozoCrystalPalace() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
    setMounted(true);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle =
    "Crystal Palace Finalizing Club-Record Deal for Real Salt Lake Teenager Zavier Gozo";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Crystal Palace Finalizing Club-Record Deal for Real Salt Lake Teenager Zavier Gozo
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-10">August 10, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`}
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMos2R5U1n5qF6NuXxo-ndVhZ3Z6ycwyk4jb6L_cvxg&s=10"
            alt="Zavier Gozo Real Salt Lake"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: 2026 Getty Images, Credit: Getty Images, Creator: Alex Goodlett
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Crystal Palace are in the final stages of signing American teenager Zavier Gozo from Real Salt Lake in a deal that will set a new club record for the MLS side.
          </p>

          <p>
            Sources confirmed that the 19-year-old is in London on Monday to undergo his medical and complete the paperwork. The two clubs have agreed a fee in the region of <strong>$15 million (£11 million)</strong>, allowing Gozo to travel to England and join up with his new teammates for preseason this week.
          </p>

          <p>
            The move represents a significant step up for one of MLS’s brightest young talents. Born in West Valley City, Utah, Gozo came through the Real Salt Lake academy and made his first-team debut at 16. This season he has exploded, scoring six goals and adding five assists in just 16 appearances while operating primarily as a wing-back after beginning his career as a pure winger.
          </p>

          <p>
            His combination of elite athleticism, progressive dribbling and increasing end product has drawn interest from multiple European clubs. Aston Villa and Atlético Madrid showed strong interest earlier in the year, but Crystal Palace moved decisively and emerged as the clear favourite.
          </p>

          <p>
            For Real Salt Lake the sale is bittersweet. The club had hoped to keep Gozo for the remainder of the 2026 season, but the player made clear his desire to make the jump to Europe this summer. With bids intensifying, RSL accepted what sources describe as a club-record fee.
          </p>

          <p>
            At Selhurst Park, Gozo will reunite with a familiar face in USMNT centre-back Chris Richards and work under new head coach Pierre Sage. Palace view the versatile attacker as a long-term investment who can provide depth and competition on the right side while developing in a competitive Premier League and European environment.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">What to Expect at Crystal Palace and the USMNT Question</h3>

          <p>
            The immediate question for most observers is straightforward: how much football will Zavier Gozo actually play at Crystal Palace?
          </p>

          <p>
            The honest answer is that he will almost certainly begin as a squad player rather than an automatic starter. Crystal Palace already have established options on the right side, and new head coach Pierre Sage will prioritise continuity while the team adjusts to life after Oliver Glasner. Gozo arrives as a long-term project more than a ready-made starter.
          </p>

          <p>
            That does not mean he will be invisible. At 19, with elite athleticism and a demonstrated ability to produce in the final third, he offers something different from the more experienced options currently in the squad. Palace’s system under Sage is expected to retain a heavy reliance on wing-backs and wide attackers, which plays directly to Gozo’s strengths. Minutes will likely come in cup competitions, Europa League fixtures, and as a high-impact substitute in the Premier League. A strong preseason and early appearances could accelerate that timeline.
          </p>

          <p>
            The more interesting long-term question is the United States national team.
          </p>

          <p>
            Gozo is not yet a senior international, and he remains some distance from being a regular in Mauricio Pochettino’s plans. Missing out on the 2026 World Cup squad was a clear signal that the coaching staff still want to see more consistency at the highest level. Moving to the Premier League helps that case, but it does not guarantee an immediate call-up.
          </p>

          <p>
            A realistic pathway looks like this: if Gozo settles quickly, earns regular minutes (even if not always from the start), and continues producing goal contributions, he should force his way into senior camps by late 2026 or early 2027. The USMNT’s right side is competitive but not completely locked down, especially with several older options and questions around long-term depth. A breakout six-to-nine months in England would put him firmly in the conversation.
          </p>

          <p>
            For now, it is still early. Gozo needs time to adapt to the physicality, intensity and tactical demands of the Premier League. Expecting him to walk into either the Crystal Palace starting XI or the USMNT starting lineup in the short term would be unrealistic. What is realistic is that both clubs and country will be watching closely. If the talent translates, the opportunities will follow.
          </p>

          <p>
            Gozo, who holds dual American and Ivorian heritage, remains uncapped at senior level for the United States but is widely expected to receive his first call-up in the coming months after narrowly missing out on the 2026 World Cup squad.
          </p>

          <p className="font-bold text-xl mt-8">
            If the medical is completed without issue, Crystal Palace will have secured one of the more intriguing young American prospects currently available — and Real Salt Lake will have turned a homegrown academy product into a record sale.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16 pt-10 border-t border-zinc-200">
          <h3 className="text-2xl font-bold mb-6">Next to read</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/sergi-roberto-la-galaxy" className="group block">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2208662373/crop/MM5DINJSHA5DENJUG45G433XMU5DAORQ/GettyImages-2208662373.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Sergi Roberto"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    LA Galaxy Sign Former Barcelona Captain Sergi Roberto
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 9, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/la-galaxy-chucky-lozano-loan" className="group block">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2249117363/crop/MM5DGOJVHA5DEMRSGY5G433XMU5DAORSGA3A====/GettyImages-2249117363.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Chucky Lozano"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    LA Galaxy Finalizing Deal for Chucky Lozano on Loan from San Diego FC
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 6, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/larry-berg-mls-commissioner" className="group block">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/bltc33c70b1ae46424b/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/Garber_Berg_Rosenthal%20at%20Press%20Conference.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Larry Berg"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Larry Berg and the One Opportunity MLS Cannot Afford to Miss
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 6, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/messi-leagues-cup-record" className="group block">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2289259073/crop/MM5DGMJYGQ5DCNZZGE5G433XMU5DGOJRHI2DK===/GettyImages-2289259073.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Messi Leagues Cup"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Messi Sets Leagues Cup Scoring Record as Inter Miami Open Tournament with 4-2 Win
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 6, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: August 10, 2026</span>
          <Link href="/news" className="hover:text-gray-800">
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}