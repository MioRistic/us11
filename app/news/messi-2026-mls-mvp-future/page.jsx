'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MessiMVP2026() {
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
    'Messi Is Going to Win MVP Again. The Real Question Is What Happens When He Stops.';

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
              News
            </span>

            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              Inter Miami
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5">
            Messi Is Going to Win MVP Again. The Real Question Is What Happens When He Stops.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            Lionel Messi is set to win his third consecutive MLS MVP award.
            With another dominant season behind him and his Inter Miami
            contract running through 2028, the bigger question is what the
            league&apos;s individual awards will look like once he is gone.
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
            src="https://assets.goal.com/images/v3/getty-2302624989/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2302624989.jpg?quality=60&auto=webp&format=pjpg&width=1920"
            alt="Lionel Messi playing for Inter Miami"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />

          <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-3 py-1.5 rounded font-medium">
            © AFP
          </div>

        </figure>

        {/* Article content */}
        <div className="max-w-none text-base md:text-lg leading-8">

          <p className="mb-6">
            Lionel Messi is going to win the 2026 MLS MVP award. Barring an
            injury that keeps him out of the final weeks of the season, the
            result is effectively decided. He has produced at a level no
            other player in the league has approached, and Inter Miami&apos;s
            results have continued to reflect his presence.
          </p>

          <p className="mb-6">
            That is no longer a prediction. It is the consensus view across
            the league.
          </p>

          <p className="mb-6">
            Messi has finished the regular season with numbers that have once
            again separated him from the field. He is well clear in goals and
            goal contributions, and the gap between him and the next-best
            player is larger than it was in 2024 or 2025.
          </p>

          <p className="mb-6">
            Several European arrivals — including Antoine Griezmann in
            Orlando and Robert Lewandowski in Chicago — had strong individual
            seasons. None of them came close to matching Messi&apos;s output
            or his impact on results. The voting, which is conducted by
            media members, has already begun to reflect that reality.
            Multiple outlets that have surveyed writers in recent weeks have
            found Messi receiving a clear majority of first-place votes.
          </p>

          <p className="mb-10">
            This is the third consecutive season in which the same conclusion
            has been reached before the final whistle of the regular season.
            In 2024 he won it comfortably. In 2025 the race was even less
            competitive. In 2026 the pattern has repeated. The presence of
            other high-profile signings has not changed the outcome. It has
            only made the margin more noticeable.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            The MVP Race Is No Longer the Main Story
          </h2>

          <p className="mb-6">
            The more interesting discussion is no longer whether Messi will
            win the award this year. It is what the award will mean once he
            is no longer eligible for it.
          </p>

          <p className="mb-6">
            Messi&apos;s contract with Inter Miami runs through the end of
            2028. He has given no public indication that he intends to leave
            earlier, and the club has not suggested it is preparing for life
            without him.
          </p>

          <p className="mb-6">
            That leaves at least two more full seasons in which the same
            dynamic is likely to hold. As long as he is playing regularly and
            remaining healthy, no other player in MLS is currently equipped
            to produce 30-plus goals and double-digit assists in a single
            campaign.
          </p>

          <p className="mb-10">
            That is not a slight on the rest of the league. It is a
            reflection of the fact that Messi is still operating at a
            standard that exists almost nowhere else in world football, let
            alone in North America.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            More Star Signings Have Not Changed the Picture
          </h2>

          <p className="mb-6">
            The league has spent the past three years adding recognizable
            names in an attempt to create more competitive balance and more
            compelling individual storylines.
          </p>

          <p className="mb-6">
            Some of those signings have succeeded on their own terms.
            Griezmann has been a consistent creator in Orlando. Lewandowski
            has scored at a high rate in Chicago.
          </p>

          <p className="mb-6">
            Neither has altered the MVP picture. The award remains Messi&apos;s
            until he decides he no longer wants it, or until his body no
            longer allows him to compete for it.
          </p>

          <p className="mb-10">
            The arrival of established European stars has made MLS more
            recognizable internationally, but it has not created a genuine
            individual rivalry at the top of the league. Messi remains the
            player everyone else is measured against.
          </p>

          {/* Section 3 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            What Happens to MLS MVP After Messi?
          </h2>

          <p className="mb-6">
            That creates an unusual situation for a league that has
            historically used the MVP award as a marker of broader progress.
            For the next two seasons, the trophy is likely to function more
            as a record of Messi&apos;s continued presence than as a meaningful
            comparison between the best players in the league.
          </p>

          <p className="mb-6">
            Once he is gone, the award will return to being a genuine contest.
            Until then, the race will continue to be decided before it begins.
          </p>

          <p className="mb-10">
            The league will eventually have to build its individual storylines
            around a different group of players. That transition will be an
            important test of how much MLS has developed beyond the
            extraordinary attention generated by one player.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-12 mb-5">
            The Real Question Is How Long This Can Continue
          </h2>

          <p className="mb-6">
            Messi will win the 2026 MVP. The more useful question is how many
            more times the same sentence can be written before the context
            finally changes.
          </p>

          <p className="mb-10">
            For now, MLS is still living in the Messi era. The real test for
            the league will come when the award is no longer almost
            automatically associated with his name.
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
                    alt="Lionel Messi playing for Inter Miami"
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
