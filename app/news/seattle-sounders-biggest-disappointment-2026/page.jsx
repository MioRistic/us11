
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function SeattleBiggestDisappointment2026() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const title =
    'Is Seattle the Biggest Disappointment of the 2026 MLS Season?';

  const shareText = title;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              MLS
            </span>

            <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Seattle Sounders
            </span>

            <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Season Analysis
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-11-21">November 21, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={20} />
            </a>

            <button
              onClick={handleCopyLink}
              aria-label="Copy article link"
              className="p-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition"
            >
              <FiCopy size={20} />
            </button>

            {copied && (
              <span className="text-sm text-gray-500">
                Link copied!
              </span>
            )}
          </div>
        </header>

        {/* HERO IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/bltbe57792fa91330a8/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-29T225717.954.png?quality=60&auto=webp&format=pjpg&width=1920"
            alt="Seattle Sounders and the 2026 MLS season"
            fill
            className="object-cover"
            priority
            unoptimized
          />

          <figcaption className="absolute bottom-3 right-3 bg-black/75 text-white text-[10px] sm:text-xs px-3 py-2 rounded font-medium text-right leading-relaxed">
            Credit: Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE BODY */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            For most of the past decade, a Seattle Sounders season ending
            in the Wild Card round would have been considered a failure.
            In 2026, it felt less like a shock than the conclusion to a
            decline that had been unfolding for months.
          </p>

          <p>
            Seattle finished eighth in the Western Conference with 46
            points, a 12-12-10 record and a negative goal difference.
            They needed a win over LAFC on Decision Day just to secure
            a home playoff game, then saw their season end against Real
            Salt Lake — a 1-1 draw followed by a 4-2 defeat on penalties.
          </p>

          <p>
            The result was disappointing. The manner of the season was
            more concerning.
          </p>

          <p>
            Seattle opened 2026 with the kind of form that suggested
            another serious campaign was possible. At 7-1-3, the
            Sounders looked organized, confident and capable of
            competing near the top of the West. Their early momentum
            made the eventual finish difficult to explain as a simple
            regression to the mean.
          </p>

          <p>
            Then the season changed.
          </p>

          <p>
            A prolonged winless stretch dragged Seattle away from the
            Western Conference&apos;s leading group. The team struggled
            to maintain consistency, failed to establish control over
            its matches and increasingly looked like a side trying to
            survive rather than dictate. By the time the playoffs
            arrived, the Sounders had become a team whose reputation
            was considerably stronger than its performances.
          </p>

          <p>
            That is what makes 2026 such a disappointment. Seattle did
            not merely finish below its ambitions. It spent much of the
            season looking unlike the club supporters have come to expect.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            A signing that raised the stakes
          </h2>

          <p>
            The arrival of Dejan Joveljić from Sporting Kansas City
            was supposed to give Seattle a clearer attacking identity.
          </p>

          <p>
            The Serbian striker had already demonstrated that he could
            score in MLS. His move represented a significant investment
            in a player who could provide a reliable focal point, improve
            the team&apos;s finishing and help turn promising performances
            into victories.
          </p>

          <p>
            Joveljić delivered individual production, but the larger
            problem remained unresolved.
          </p>

          <p>
            Seattle needed more than a goalscorer. It needed a
            functioning attacking structure around him — a team capable
            of creating chances consistently, supporting runs into the
            box and controlling the moments after possession was lost.
          </p>

          <p>
            Instead, Joveljić often looked like one of the few players
            capable of making a difference in the final third. His
            arrival improved the roster, but it did not repair the
            team&apos;s underlying problems.
          </p>

          <p>
            That distinction matters. A successful transfer is not
            simply one in which a player scores goals. It is one that
            changes the level of the team. Seattle invested in a proven
            striker and still finished with a negative goal difference,
            eighth in the conference and facing elimination in a single
            game.
          </p>

          <p>
            The signing was not necessarily a failure. The season
            around it was.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            The problem was bigger than the attack
          </h2>

          <p>
            Seattle&apos;s difficulties were not confined to finishing.
          </p>

          <p>
            The Sounders struggled to sustain performances over the
            course of a match and rarely looked like a team capable of
            imposing its preferred rhythm for long periods. Their
            early-season confidence gave way to a side that could
            produce moments of quality but struggled to build them
            into a consistent performance.
          </p>

          <p>
            The roster still contained experienced players and
            established MLS talent. Brian Schmetzer remained in charge,
            and the club had enough quality to reach the postseason.
            But the gap between individual ability and collective
            performance became increasingly difficult to ignore.
          </p>

          <p>
            That is the more troubling question for Seattle: why did
            a team with this much experience spend so much of the
            season looking disconnected?
          </p>

          <p>
            The answer cannot be reduced to one injury, one transfer
            or one tactical decision. The season suggested a
            combination of problems — inconsistent availability,
            limited depth in key areas and an inability to find a
            reliable approach once the opening momentum disappeared.
          </p>

          <p>
            The Sounders were not without talent. They were without
            a consistent version of themselves.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            The Wild Card was a fitting ending
          </h2>

          <p>
            Seattle&apos;s playoff defeat to Real Salt Lake was not
            simply bad luck.
          </p>

          <p>
            The Sounders had opportunities to take control. Albert
            Rusnák opened the scoring in the 36th minute, giving
            Seattle the advantage before halftime. But the Sounders
            could not turn that lead into security.
          </p>

          <p>
            Real Salt Lake equalized through Morgan Guilavogui in the
            63rd minute. The match remained level through the end of
            regulation, sending the teams directly to a penalty
            shootout.
          </p>

          <p>
            Rafael Cabral saved penalties from Joveljić and Rusnák,
            while RSL converted all four of its attempts. Seattle&apos;s
            season ended with the same underlying frustration that had
            defined much of its regular season: chances created,
            opportunities missed and no convincing answer when the
            match became difficult.
          </p>

          <p>
            The Wild Card defeat was a consequence of the season,
            not an isolated event.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            Is Seattle the biggest disappointment in MLS?
          </h2>

          <p>
            In absolute terms, the answer is probably no.
          </p>

          <p>
            Other clubs finished lower, missed the playoffs and
            endured more damaging campaigns. Sporting Kansas City,
            DC United and Atlanta United had their own reasons to
            be dissatisfied. Seattle at least reached the postseason
            and had a recognizable attacking threat in Joveljić.
          </p>

          <p>
            But disappointment is not measured only by where a team
            finishes. It is measured by the distance between
            expectation and reality.
          </p>

          <p>
            Few clubs entered 2026 with a clearer recent identity
            as perennial contenders. Seattle had made the playoffs
            in 17 of its 18 MLS seasons since joining the league
            in 2009 and won MLS Cup twice, in 2016 and 2019. Its
            history has created a standard that eighth place cannot
            satisfy.
          </p>

          <p>
            The Sounders have experienced setbacks before. They
            missed the playoffs in 2022, a season that followed
            their historic Concacaf Champions Cup triumph. But
            that campaign felt like an exception. In 2026, the
            decline was more gradual and more difficult to dismiss.
          </p>

          <p>
            The season began with genuine promise, then became
            a long struggle to recover it. A late victory over
            LAFC secured a playoff place, but it could not erase
            the months that came before.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            What comes next?
          </h2>

          <p>
            The Sounders still have reasons to believe they can
            recover. The roster has talent, Schmetzer remains
            in place and the organization has a track record
            of competing at a high level.
          </p>

          <p>
            But the next step cannot simply be another summer
            signing or another attempt to finish the season
            strongly. Seattle needs to understand why its early
            form disappeared and why its investment in the attack
            did not translate into a more complete team.
          </p>

          <p>
            The question is not whether the Sounders can return
            to the playoffs. Their history suggests they can.
          </p>

          <p>
            The question is whether they can return to being a
            team that expects to compete for something meaningful
            once it gets there.
          </p>

          <p>
            For a club that has spent much of its MLS existence
            measuring success in trophies and deep playoff runs,
            eighth place and a Wild Card exit represent a
            significant underachievement.
          </p>

          <p>
            Whether it was the biggest disappointment of the
            league&apos;s 2026 season remains debatable.
          </p>

          <p>
            For Seattle, the more uncomfortable conclusion is
            that the season was not disappointing because it
            ended in penalties. It was disappointing because,
            by November, the Sounders had given themselves
            so little reason to expect anything else.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: November 21, 2026</p>
            <p>Written by Mio Ristić</p>
          </div>

          <Link
            href="/news"
            className="mt-4 sm:mt-0 hover:text-black transition-colors"
          >
            ← Back to News
          </Link>
        </footer>

      </div>
    </article>
  );
}
