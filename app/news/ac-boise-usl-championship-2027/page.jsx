'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function AcBoiseUslChampionship2027() {
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
    "AC Boise Jumps to USL Championship in 2027 After One League One Season";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('AC Boise is moving up to the USL Championship in 2027 ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            AC Boise Jumps to USL Championship in 2027 After One League One Season
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-09-09">September 9, 2026</time>
          </div>
        </header>

        {/* SHARE */}
        <div className="flex items-center gap-3 mb-8">
          <a
            href={facebookShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href={twitterShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on X"
          >
            <FaTwitter />
          </a>
          <a
            href={whatsappShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <button
            onClick={handleCopyLink}
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Copy link"
          >
            <FiCopy />
          </button>
          {copied && <span className="text-sm text-green-600">Copied</span>}
        </div>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://cdn1.sportngin.com/attachments/photo/6128-211830812/Crest-Reveal-Video-Thumbnail_large.png"
            alt="Athletic Club Boise crest as the club prepares for the USL Championship in 2027"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Image Credit: Athletic Club Boise | Source: ACBoise.com
          </div>
        </figure>

        {/* ARTICLE */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            Athletic Club Boise is going to the USL Championship in 2027. One season in League One. Sold-out house. East stand going in. That is the announcement.
          </p>

          <p>
            The rest is the part leagues usually skip.
          </p>

          <p>
            This is not promotion. Not yet. USL does not have that mechanism in 2026. What happened Wednesday is an invitation dressed up as upward mobility: Boise built a crowd that made League One look small, Paul McDonough’s office noticed, and the Championship needed another real market more than it needed another press release.
          </p>

          <p>
            Co-founder and CEO Brad Stith will tell you Championship soccer was always the plan. He will also tell you he did not think it arrived after 20-odd League One matches. Both things can be true.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The attendance is the whole argument
          </h2>

          <p>
            More than 6,000 season tickets before a ball was kicked. Every home date gone. 7,247 on June 20. If you have covered this sport in this country, you know how rare that sentence is outside MLS and a handful of Championship holdovers.
          </p>

          <p>
            Boise did it on a converted racetrack at Expo Idaho with a first-year roster and a Basque-green identity that should have taken three seasons to land. It landed in one. So the league did what American leagues do when the demand graph gets ahead of the org chart. It moved the club.
          </p>

          <p>
            The on-field piece is fine, not romantic. Fifth in League One, 41 points when the news dropped, 12-7-5 if you prefer the clean line. Playoff team, not a runaway. The more useful tape is the USL Cup. Boise already beat Championship sides, Sacramento Republic included. That does not mean they are ready for a full Championship calendar. It means the jump is not a total fiction.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Three thousand seats and a different league
          </h2>

          <p>
            The venue is the old Les Bois Park site in Garden City. Capacity sits in the low 7,000s now. Before 2027 the club is adding 3,000 seats on the east side, a practice pitch, and a training building for the men’s team and the planned women’s side.
          </p>

          <p>
            You do not spend that money to stay in League One and hope the vibe holds. The east stand gets them closer to what a Championship club is supposed to look like on a Saturday, and closer to the 11,000 number that has been sitting in the county paperwork since the lease was signed.
          </p>

          <p>
            Whether those seats fill in April 2027 is the actual story. Year-one sellouts are a market test. Year-two sellouts are a club.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Hold the pyramid still
          </h2>

          <p>
            In 2027, the Championship is still Division II. Louisville. Sacramento. Phoenix Rising. CBS and ESPN slots. That is a real step up in travel, wages, and midweek pain.
          </p>

          <p>
            In 2028, USL wants a new Division I league and promotion-relegation across three tiers. If that lands on schedule, Boise’s “move up” becomes a holding pattern. Championship soccer may no longer be the floor below MLS. It may be the middle of a new sandwich. The club will then have to climb on results instead of a conference call.
          </p>

          <p>
            That is the part worth writing down. American soccer loves the language of promotion. It is allergic to the risk. Boise got the language first.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What this is not
          </h2>

          <p>
            The women’s team is not coming with this wave. The USL Super League side was already pushed to spring 2028 after the calendar flipped and the construction timeline refused to care about launch graphics. Second locker room. Grass field. Idaho winter. Stith has said the commitment is unchanged. The date moved. Do not write 2027 as a dual-team arrival.
          </p>

          <p>
            And this was never a sleepy expansion. Ownership is Stith, Steve Patterson, David Wali, and Bill Taylor. Soccer-specific venue on county land. Record deposits. A supporter section with a name. The club punched above League One commercially from the day tickets went on sale. The sporting product is now being asked to catch up to the business.
          </p>

          <p>
            What to watch from here is boring and decisive. Roster spend. Staff depth. How many of these League One pieces survive a Championship preseason. Whether the east stand is actually open in week one or “phased.” Whether Boise still sells out when the opponent is a 10th-place Championship side on a Wednesday in April, not a novelty in a new building.
          </p>

          <p className="font-semibold text-lg mt-10">
            The announcement is easy. The league needed a win that looks like a pathway. Boise needed a league that matches the crowd it already has. Both sides got what they wanted on Wednesday. The bill comes in 2027.
          </p>
        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/noah-allen-chicago-fire" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2231738550/crop/MM5DGNZVG45DEMJRGM5G433XMU5DAORRHE3A====/GettyImages-2231738550.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Noah Allen Chicago Fire"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Chicago Fire Sign Noah Allen on Loan From Inter Miami
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 4, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/messi-retires-argentina-inter-miami" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt17f9a8f2fd6b8229/GOAL_-_Blank_WEB_-_Facebook_-_2023-08-31T080917.696.jpg?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Lionel Messi Inter Miami"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Lionel Messi Retires From Argentina — Inter Miami Is Where We Watch Him Now
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 3, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/kily-gonzalez-inter-miami" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-1736243127/crop/MM5DGNZQGA5DEMBYGE5G433XMU5DAORUGI======/GettyImages-1736243127.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Kily González Inter Miami"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Inter Miami Appoint Kily González as New Head Coach
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 27, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/julian-hall-red-bulls-extension" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt97d0b22debfc9406/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-27T141608.615.png?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Julian Hall New York Red Bulls"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    New York Red Bulls Sign Julian Hall to Four-Year Extension
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 27, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: September 9, 2026</p>
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