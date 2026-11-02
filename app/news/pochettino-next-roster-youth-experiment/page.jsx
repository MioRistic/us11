'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PochettinoNextRoster() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
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
    'Pochettino’s Next Roster Will Tell Us Whether the Youth Experiment Was Real';

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
              USMNT
            </span>

            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              News
            </span>

            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              Concacaf Nations League
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5">
            Pochettino’s Next Roster Will Tell Us Whether the Youth Experiment Was Real
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            Mauricio Pochettino is about to name his first competitive USMNT
            squad since the World Cup, and the list for the Nations League
            quarterfinals against Haiti will answer a question the fall
            friendlies only raised: How much of the youth movement was genuine,
            and how much was simply convenient?
          </p>

          {/* Share buttons */}
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
        <figure className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-md mb-3 aspect-[16/9] bg-gray-100">

          <Image
            src="https://assets.goal.com/images/v3/getty-2284795056/crop/MM5DGNZUGQ5DEMJQGY5G433XMU5DAORRHE2Q====/GettyImages-2284795056.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Mauricio Pochettino, head coach of the United States men's national soccer team"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />


       

          <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-3 py-1.5 rounded font-medium">
            © Getty Images
          </div>

        </figure>

        {/* Article content */}
        <div className="max-w-none text-base md:text-lg leading-8">

          <p className="mb-6">
            The matches are set for November 14 in Miami and November 17 in
            Cincinnati. Both will be played on American soil after Concacaf
            moved Haiti&apos;s “home” leg because of the security situation in
            the country. That logistical advantage matters. What matters more
            is the roster Pochettino chooses to put on the field.
          </p>

          <p className="mb-6">
            The fall window was deliberately experimental. Pochettino called
            up a dozen uncapped players and gave significant minutes to
            teenagers. Julian Hall and Justin Ellis both started games and
            scored. Cavan Sullivan made his mark. The results were good — four
            wins, including victories over Mexico and Canada — but the context
            was clear: these were friendlies, and several senior players were
            either rested or unavailable.
          </p>

          <p className="mb-10">
            Nations League is different. It is competitive. A place in the
            March Final Four is on the line. Haiti are not an elite side, but
            they are organized and physical, and the United States has not
            always found them straightforward. The last three meetings between
            the teams were all decided by a single goal.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            The Senior Players Are Expected to Return
          </h2>

          <p className="mb-6">
            That is why most projections expect a noticeable shift in
            composition. Christian Pulisic is expected to return. So are
            Folarin Balogun, Tyler Adams, Chris Richards, Antonee Robinson,
            Malik Tillman, Gio Reyna, and Weston McKennie. These are the
            players who give Pochettino the best chance of controlling a
            two-legged series against a team that will try to make the game
            uncomfortable.
          </p>

          <p className="mb-10">
            The more interesting decisions sit at the margins.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            Which Young Players Have Done Enough?
          </h2>

          <p className="mb-6">
            Julian Hall looks the most likely of the fall breakouts to stay in
            the group. He scored in three of the four friendlies and offers a
            different profile at center forward than Balogun. Several
            projections have him traveling. Justin Ellis is less certain. He
            performed well, but the competition for attacking spots tightens
            once the senior players return.
          </p>

          <p className="mb-6">
            Cavan Sullivan&apos;s situation is more complicated. He impressed,
            but he is also eligible for the Olympic team that will be preparing
            for 2028. Pochettino and U-23 coach Steve Cherundolo are
            coordinating, and Sullivan could easily be steered toward the
            younger group instead.
          </p>

          <p className="mb-10">
            The same logic applies to several other teenagers who were in the
            last camp. The Nations League window is not the moment to continue
            treating the senior team as a development environment. Pochettino
            can still bring one or two of the young players who forced the
            issue. He is unlikely to bring half a dozen of them.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            Availability Will Also Shape the Roster
          </h2>

          <p className="mb-6">
            There is also the practical question of availability. MLS playoffs
            are underway or about to begin for several clubs. European players
            face their own schedules. Injuries will remove some names entirely.
            The final roster will reflect those constraints as much as pure
            preference.
          </p>

          <p className="mb-10">
            That means the final list will not necessarily be a perfect
            reflection of Pochettino&apos;s preferred team. Club commitments,
            fitness and injuries could all influence which players are
            available for the two matches against Haiti.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            The Roster Will Reveal Pochettino&apos;s Priorities
          </h2>

          <p className="mb-6">
            What the list ultimately shows is how Pochettino intends to manage
            the next cycle. If the roster is almost entirely familiar, with
            only a token young player or two included, the fall window will
            look more like an extended evaluation than a genuine reset.
          </p>

          <p className="mb-6">
            If Hall or another of the teenagers remains in a meaningful role,
            it suggests the manager is willing to accelerate certain players
            even when the games start to count.
          </p>

          <p className="mb-6">
            The roster is expected next week. Until then, the projections are
            useful only as a guide to the decisions Pochettino is weighing.
            Haiti is not the toughest opponent the United States will face in
            the coming years.
          </p>

          <p className="mb-10">
            How he chooses to confront them, however, will reveal more about
            his priorities than the friendlies did.
          </p>

        </div>

        {/* Next to Read */}
        <section className="mt-16">

          <h3 className="text-2xl font-bold mb-6">
            Next to Read
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <Link
              href="/news/nashville-supporters-shield-2026"
              className="group"
            >
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

                  <p className="text-sm text-gray-500 mt-2">
                    October 25, 2026
                  </p>
                </div>

              </div>
            </Link>

            <Link
              href="/news/messi-inter-miami-cincinnati-draw"
              className="group"
            >
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">

                <div className="aspect-[16/10] relative bg-gray-100">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2302465844/crop/MM5DGNRRGY5DEMBTGQ5G433XMU5DAORRHA4Q====/GettyImages-2302465844.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Lionel Messi and Inter Miami"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Messi Didn’t Score or Assist. Inter Miami Still Escaped With a Late Draw Against Cincinnati.
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    October 29, 2026
                  </p>
                </div>

              </div>
            </Link>

          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">

          <div className="space-y-1">
            <p>Published: November 2, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>

          <Link
            href="/news"
            className="mt-4 sm:mt-0 hover:text-black transition-colors"
          >
            ← Back to news
          </Link>

        </footer>

      </div>
    </article>
  );
}
