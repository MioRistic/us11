
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function NYCFCFiresPascalJansen2026() {
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
    "NYCFC Fired Pascal Jansen the Morning After the Season Ended. The Timing Says Everything.";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
              MLS
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              NYCFC
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              Coaching
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            NYCFC Fired Pascal Jansen the Morning After the Season Ended. The Timing Says Everything.
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-11-09">November 9, 2026</time>
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
              aria-label="Copy article link"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* HERO IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://i.ibb.co/m5FqrF2W/01jx98d9kfv5dsvj3xey.webp"
            alt="New York City FC head coach Pascal Jansen"
            fill
            className="object-cover"
            priority
            unoptimized
          />

          <div className="absolute bottom-3 right-3 bg-black/75 text-white text-[10px] sm:text-xs px-3 py-2 rounded font-medium text-right leading-relaxed">
            <div>Copyright: 2025 Ira L. Black - Corbis</div>
            <div>Credit: Getty Images</div>
            <div>Creator: Ira L. Black - Corbis</div>
          </div>
        </figure>

        {/* ARTICLE BODY */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            New York City FC did not wait. One day after the 2026 regular season ended with a 1-0 win over D.C. United, the club announced it was parting ways with head coach Pascal Jansen. The decision came after a year that finished with an 11th-place standing in the Eastern Conference and no playoff berth — only the third time in club history NYCFC has missed the postseason.
          </p>

          <p>
            Jansen arrived in January 2025 on a four-year deal. In his first season he guided the team to fifth in the East and a run to the Eastern Conference Final, where they lost 5-1 to Inter Miami. This year the results collapsed. NYCFC finished with 42 points from a 10-12-12 record, four points short of the final wild-card spot. They ended 23rd in the Supporters’ Shield table. The late-season numbers were particularly damaging: the team managed only nine points from their final eight matches and were eliminated after a stoppage-time equalizer against CF Montréal on October 31.
          </p>

          <p>
            Sporting director Todd Dunivant’s statement was clear. “This decision follows a thorough review of the season and reflects our ambition as an organization. The search for our next Head Coach begins immediately as we prepare for the 2027 Sprint Season and build toward the opening of Etihad Park.” CEO Brad Sims thanked Jansen for his dedication and acknowledged the disappointment of missing the playoffs, while reiterating the club’s commitment to competing at the highest level as it prepares to move into its new stadium.
          </p>

          <p>
            Jansen himself pointed to availability as the central difference between the two seasons. After the Montréal draw that mathematically ended their playoff hopes, he said the squad’s availability rate dropped from roughly 92 percent in 2025 to the 70-75 percent range this year. Long-term injuries to key players limited what he could do with a roster that had shown it could compete at a high level the previous campaign. Across 83 matches in all competitions he finished with a 34-17-32 record (approximately 1.43 points per game). In MLS regular-season play the numbers were 27-17-22 over 66 games.
          </p>

          <p>
            The context matters. Jansen’s previous managerial stops included more than three years at AZ Alkmaar, where he posted strong results before being dismissed in January 2024, and a short stint at Ferencváros in 2024. He is 53, English-born and Dutch by upbringing, and had never managed in MLS before NYCFC. The club’s decision to move on after one strong season and one poor one is consistent with the pressure that comes with a new stadium opening in July 2027. Etihad Park in Willets Point, Queens, is scheduled to host its first match on July 17, 2027, at the start of the 2027-28 season following MLS’s calendar shift. Dunivant, who is making his first head-coaching hire since taking over soccer operations, now has roughly eight months to identify the person who will lead the team into that new home.
          </p>

          <p>
            The late collapse is what ultimately cost Jansen. NYCFC were in fifth place after 19 matches. From that point the results deteriorated, with frequent late goals conceded and an inability to turn draws into wins. The home record finished 5-6-6. Even with the injuries Jansen cited, the club concluded that the trajectory no longer matched the ambition tied to the stadium project and the post-World Cup window. Missing the playoffs for only the third time since the club’s expansion in 2015 was not treated as acceptable.
          </p>

          <p>
            Whether the injuries fully explain the drop-off is a fair question. Jansen refused to make excuses publicly, but the availability numbers he cited are significant. At the same time, the club’s willingness to move on after two seasons — while still under contract through 2028 — shows how quickly the standard has shifted. The Eastern Conference Final run in 2025 bought him credit. The 11th-place finish and the manner of the late-season results spent it.
          </p>

          <p>
            Todd Dunivant now has a clear window to reshape the football operation before the move into Etihad Park. The next coach will inherit a roster that reached a conference final two years earlier and a stadium that is expected to change the club’s day-to-day reality. The decision to part with Jansen was made quickly. The more difficult work of finding the right replacement, and of determining how much of the 2026 regression was structural versus situational, is only beginning.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: November 9, 2026</p>
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
