'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSMatchdayRoundup() {
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
    "MLS Matchday Roundup: Lewandowski Announces Himself at Home, Messi’s Return Ends in Frustration";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Lewandowski brace, Messi return, Cascadia drama — full MLS matchday roundup ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            MLS Matchday Roundup: Lewandowski Announces Himself at Home, Messi’s Return Ends in Frustration
          </h1>
          <p className="text-gray-500 text-sm">
            August 2, 2026 · By Mio Ristić
          </p>
        </header>

        {/* SHARE BUTTONS */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href={facebookShare}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href={twitterShare}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:opacity-90 transition"
          >
            <FaTwitter size={16} />
          </a>
          <a
            href={whatsappShare}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90 transition"
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

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/blt7d93faee2a6dac45/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-01T224940.165.png?auto=webp&format=pjpg&width=2048&quality=60"
            alt="MLS Matchday Roundup August 2026"
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
            The first full slate of MLS action after the World Cup break delivered exactly what the league needed: star power, late drama, and a reminder that form is still being rewritten in real time.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Chicago Fire 2–1 Charlotte FC
          </h2>
          <p className="font-semibold text-lg">
            Lewandowski’s home debut ends with a brace
          </p>
          <p>
            Soldier Field finally got its moment.
          </p>
          <p>
            Robert Lewandowski, who had arrived from Barcelona on a free transfer and made a quiet first appearance off the bench last week, started his first home game in Chicago colors and left with both goals in a 2-1 win over Charlotte.
          </p>
          <p>
            Pep Biel put the visitors ahead in the 18th minute. Two minutes later Lewandowski equalized from outside the box, assisted by Philip Zinckernagel. In the 68th minute he finished coolly into the bottom corner to complete the brace and secure three points.
          </p>
          <p>
            It was the kind of night the Fire had been selling since the signing was announced. Not flashy dominance — just a clinical striker doing what he has done for more than a decade. Chicago move to 29 points and look far more dangerous with a proven No. 9 leading the line.
          </p>

          {/* YOUTUBE VIDEO */}
          <div className="my-10">
            <iframe
              width="100%"
              height="420"
              src="https://www.youtube.com/embed/_f8B5PuSjRU"
              title="MLS Matchday Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Inter Miami 2–2 Columbus Crew
          </h2>
          <p className="font-semibold text-lg">
            Messi returns, Miami’s winning streak ends
          </p>

          {/* MIAMI IMAGE */}
          <figure className="relative w-full rounded-3xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/getty-2288654393/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2288654393.jpg?auto=webp&format=pjpg&width=2048&quality=60"
              alt="Lionel Messi Inter Miami return vs Columbus Crew"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Credit: Getty Images
            </div>
          </figure>

          <p>
            Lionel Messi stepped back onto an MLS pitch for the first time since Argentina’s World Cup final run. He entered in the 53rd minute. The result, however, belonged to someone else.
          </p>
          <p>
            Luis Suárez opened the scoring with a long-range chip in the 16th minute — his 10th league goal of the season and seventh in his last four games. An own goal from Casemiro leveled it, before academy product Noah Allen restored Miami’s lead deep in first-half stoppage time.
          </p>
          <p>
            Then, in the 84th minute, Brais Méndez — making his MLS debut after joining Columbus — curled a free-kick off the post and in. Miami’s six-game winning streak was over. Their seven-game unbeaten run remains intact, but the night felt incomplete.
          </p>
          <p>
            Messi had chances late. None went in. The story of the evening was less about the Argentine’s return and more about a Crew side that refused to leave empty-handed.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Vancouver Whitecaps 1–1 LAFC
          </h2>
          <p className="font-semibold text-lg">
            Son strikes, Müller answers from the spot
          </p>

          {/* VANCOUVER / LAFC IMAGE */}
          <figure className="relative w-full rounded-3xl overflow-hidden shadow-md my-8 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/blt196b3dcc0969bc2b/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-01T231515.302.png?auto=webp&format=pjpg&width=2048&quality=60"
              alt="Vancouver Whitecaps vs LAFC"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Credit: Getty Images
            </div>
          </figure>

          <p>
            At BC Place, in front of 40,086 fans, two of the Western Conference’s best sides shared the points in a match Vancouver largely controlled but could not close out.
          </p>
          <p>
            Son Heung-min gave LAFC the lead against the run of play in the 37th minute, finishing a Denis Bouanga pass for his fourth goal in four games since the World Cup break. The Whitecaps kept pushing — 20 shots to five — and were rewarded in the 76th minute when Thomas Müller converted a penalty after being fouled by Yevhen Cheberko.
          </p>
          <p>
            Both teams sit on 34 points. Vancouver hold the edge on goal difference and have two games in hand. The top of the West remains as tight as it has been all season.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Portland Timbers 2–1 Seattle Sounders
          </h2>
          <p className="font-semibold text-lg">
            Bye’s late strike extends Seattle’s misery
          </p>
          <p>
            Cascadia delivered the kind of ending the rivalry demands.
          </p>
          <p>
            Kalani Kossa-Rienzi, who entered early after Paul Arriola’s injury, put Seattle ahead in the 27th minute. Kevin Kelsy equalized before halftime with his ninth goal of the season. Then, in the 82nd minute, Brandon Bye struck from distance off a David Da Costa pass to give Portland the win.
          </p>
          <p>
            The result leaves Seattle on a club-record six-game losing streak. Portland are unbeaten in four and continue to climb under interim leadership. At Providence Park, the Timbers remain a difficult out for their northern rivals.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Elsewhere on the Matchday
          </h2>
          <p>
            Philadelphia Union edged Atlanta United 3-2. New York Red Bulls beat Orlando City by the same scoreline. FC Cincinnati put four past San Jose. Colorado beat Austin 1-0. Houston won 2-0 at Sporting Kansas City. Multiple draws rounded out the card: Montréal 2-2 New England, D.C. United 2-2 Nashville, Minnesota 1-1 San Diego, St. Louis 1-1 Real Salt Lake, and LA Galaxy 0-0 FC Dallas. NYCFC and Toronto had played out a 1-1 draw a day earlier.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Picture
          </h2>
          <p>
            Three storylines stood above the rest.
          </p>
          <p>
            Lewandowski needed one night in front of his new home crowd to look like the player Chicago paid for. Messi’s return generated the expected noise, but Miami dropped points against a motivated Columbus side. And at the top of the West, Vancouver and LAFC remain locked together while Portland continue to find ways to win ugly.
          </p>
          <p className="font-bold text-xl mt-8">
            MLS is back in full swing. The stars are available again. The table is still very much in motion.
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

            <Link href="/news/arfsten-middlesbrough" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Max Arfsten Seals Transfer to Middlesbrough, Joins USMNT Duo
                </h3>
              </div>
            </Link>

            <Link href="/news/mls-all-star-game-2026" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  MLS All-Star Game 2026: Missing Messi But Riding Post-World Cup Momentum
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
            <p>Published: August 2, 2026</p>
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