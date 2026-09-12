'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function NashvilleScClinchPlayoffs() {
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
    "How Nashville SC Can Clinch an MLS Playoff Spot";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('How Nashville SC can clinch an MLS playoff spot ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            How Nashville SC Can Clinch an MLS Playoff Spot
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-09-12">September 12, 2026</time>
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
            src="https://assets.goal.com/images/v3/blt47978711340c869e/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-15T230033.321.png?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Nashville SC players celebrate during the 2026 MLS season as the club closes in on a playoff berth"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Getty Images
          </div>
        </figure>

        {/* ARTICLE */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            Nashville can see the playoffs from here. They cannot touch them yet.
          </p>

          <p>
            That is the whole story entering Saturday night at Nu Stadium. First place. 53 points. A nine-point cushion on Lionel Messi’s Inter Miami. A defense that has spent the year making the East look smaller than it is. And still, after 24 games, the math has not quite signed the paper.
          </p>

          <p>
            They had a chance to force it in Toronto on Wednesday. They lost 2-1. Daniel Sallói and Emilio Aristizábal ended a run that had started to feel automatic. B.J. Callaghan said the performance was not “our way.” He was right. The table still says they are the best team in the conference. The table also says D.C. United, Toronto and the New York Red Bulls are not dead if Nashville decides to stop collecting points.
          </p>

          <p>
            This is not 2025. The Red Bulls are not the team hunting them from just outside the line. The line is ninth in a 15-team East. Nine go. Seven get a best-of-three. Eight and nine play a Wild Card. Nashville is trying to lock the first part so they can keep playing for the second.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The number that actually matters
          </h2>

          <p>
            Nashville have 10 games left in a 34-game season. Worst case is 53 points and a prayer that nobody below them runs the table.
          </p>

          <p>
            Atlanta cannot get there. Montréal cannot get there. Columbus can only tie 53, and even that requires a 10-0 finish and a goal-difference miracle against a side sitting on plus-29.
          </p>

          <p>
            The real list is short. D.C. United have 28 points and 11 games left — a theoretical maximum of 61. Toronto have 29 points and 10 games left, max 59. The Red Bulls have 27 and 10 left, max 57. D.C. is the problem because of the extra match.
          </p>

          <p>
            Until Nashville get to 62 — or those three start dropping points — the berth is probable, not official.
          </p>

          <p>
            A win in Miami gets them to 56. Then they need six more points without help, or less with it. A draw leaves them on 54 and still doing homework. A loss leaves the chalkboard exactly where it was this morning.
          </p>

          <p>
            That is how you clinch. Not with a graphic. With 62, or with someone else blinking.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Saturday is and is not
          </h2>

          <p>
            Inter Miami are second on 44. Messi still leads the league in goals. Nashville already beat them 4-1 at GEODIS Park in August, Hany Mukhtar and Sam Surridge turning a 1-1 game into a statement in 15 minutes. Repeat that and the Supporters’ Shield race stays a Nashville story. Lose it and the lead is six with a month and a half to play.
          </p>

          <p>
            Do not confuse the two races.
          </p>

          <p>
            The playoff spot is a floor. The Shield, the one-seed, home games in a best-of-three — that is the actual season they have been building since March. If the bracket started today they would get the Wild Card winner and everyone else would have to come get them. Chicago and Charlotte are still close enough to make the four-five matchup look like a playoff before the playoff. None of that is clinched either.
          </p>

          <p>
            Callaghan’s team does not need a seminar on how to win MLS games. They need to look like the side that went 16-2-5 before Toronto, not the side that spent Wednesday hunting a version of itself that did not show up.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The stretch after Miami
          </h2>

          <p>
            Chicago at home. Toronto at home. Austin on the road. Sporting Kansas City. Then a closing run through the East that ends on Decision Day at Cincinnati.
          </p>

          <p>
            Two wins in that group, especially if D.C. or Toronto stumble, and the sentence changes from “can clinch” to “clinched.” After that the only conversation left is seed, home dates, and whether 53 was the start of a Shield number or just a very good first-place team that got bored in September.
          </p>

          <p className="font-semibold text-lg mt-10">
            Nashville have spent all year being the adult in the Eastern Conference. Saturday is the first night the rest of the league can make them prove it with the lights on and Messi in the building. Win, and the math finally starts working for them instead of around them. Anything less, and we will be back here next week with the same paragraph and a smaller lead.
          </p>
        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/ac-boise-usl-championship-2027" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://cdn1.sportngin.com/attachments/photo/6128-211830812/Crest-Reveal-Video-Thumbnail_large.png"
                    alt="Athletic Club Boise"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    AC Boise Jumps to USL Championship in 2027 After One League One Season
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 9, 2026</p>
                </div>
              </div>
            </Link>

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

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: September 12, 2026</p>
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