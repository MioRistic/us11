'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSCoachingChanges2026() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle =
    "Two MLS Clubs Hit the Reset Button: Columbus and Austin Clean House Amid Dismal Starts";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Two MLS Clubs Hit the Reset Button: Columbus and Austin Clean House Amid Dismal Starts
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-18">May 18, 2026</time>
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
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://i.ibb.co/Zzy56Nwr/Untitled-design-6.png"
            alt="MLS coaching changes 2026"
            width={1200}
            height={675}
            className="w-full h-[420px] object-cover"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Getty
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            It is not even June, and already two original MLS clubs have decided that patience is a luxury they can no longer afford.
          </p>

          <p className="font-semibold text-xl">
            Columbus Crew and Austin FC both hit the reset button after disappointing starts to the 2026 season.
          </p>

          <p>
            On Sunday, the Columbus Crew fired head coach Henrik Rydström after just 14 league games.
          </p>

          <p>
            A day later, Austin FC parted ways with both head coach Nico Estévez and sporting director Rodolfo Borrell.
          </p>

          <p>
            In both cases, the message from ownership was clear and uncompromising:
          </p>

          <p className="font-semibold">
            the current direction was not working, and mediocrity will not be tolerated.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Columbus: The Impossible Task After Nancy
          </h2>

          <p>
            When Wilfried Nancy departed for Celtic at the end of 2025, he left behind one of the most cohesive and tactically sophisticated teams in recent MLS history.
          </p>

          <p>
            Replacing that level of continuity was always going to be incredibly difficult.
          </p>

          <p>
            The Crew’s choice of Henrik Rydström — a progressive Swedish coach coming off strong work with Malmö — was viewed by many as a thoughtful, long-term appointment.
          </p>

          <p>
            Reality has been far less kind.
          </p>

          <p className="font-semibold">
            Columbus currently sit 13th in the Eastern Conference with a 3-4-7 record.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
            “You have to look at it from three sides. One is obviously results. We have three wins in 14 games. Two is the way we want to play. It’s been better now than earlier in the season, but it’s still not there. Lastly, culturally, it did not click. We believe a change was much needed.”
          </blockquote>

          <p>
            General manager Issa Tall did not shy away from the reasons behind the decision.
          </p>

          <p>
            First-team assistant Laurent Courtois — who previously led Columbus Crew 2 to an MLS NEXT Pro title and guided CF Montréal to the playoffs in 2024 — has been named interim head coach.
          </p>

          <p>
            His familiarity with the club and the league appears to be the main reason Columbus chose an internal solution rather than launching an immediate external search.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Austin: A Complete Leadership Overhaul
          </h2>

          <p>
            Austin FC’s reset was even more dramatic.
          </p>

          <p>
            In a single announcement on Monday, the club removed both its sporting director and head coach after a dismal start that has left them 13th in the Western Conference.
          </p>

          <p>
            A humiliating 5-0 home defeat to expansion side San Diego FC, followed by a 2-1 loss to bottom-dwelling Sporting Kansas City, proved to be the final straw.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700">
            “We know that our fans and our community deserve a winner, and our Ownership group will continue to make the necessary decisions in order to deliver consistently strong results across competitions.”
          </blockquote>

          <p>
            Owner Anthony Precourt made it clear that expectations inside the club remain extremely high.
          </p>

          <p>
            Rodolfo Borrell, the former Manchester City and Barcelona academy architect brought in to build a sustainable model, departs with mixed reviews.
          </p>

          <p>
            While he helped shape the club’s infrastructure, translating that pedigree into consistent on-field success proved elusive.
          </p>

          <p>
            Nico Estévez, hired ahead of the 2025 season, had guided Austin to the playoffs last year before this season’s sharp decline.
          </p>

          <p>
            Assistant Davy Arnaud will take charge on an interim basis through the World Cup break.
          </p>

          <p>
            The club has already retained Excel Sports Management to lead the search for a new sporting director.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Bigger Picture
          </h2>

          <p>
            These moves underscore a growing trend in MLS:
          </p>

          <p className="font-semibold">
            the tolerance for slow starts is shrinking rapidly, even for clubs that were competitive the previous season.
          </p>

          <p>
            Both Columbus and Austin have invested heavily in their squads and facilities.
          </p>

          <p>
            Both have ambitious ownership groups.
          </p>

          <p>
            And both have now decided that waiting until mid-season to act was no longer acceptable.
          </p>

          <p>
            The upcoming World Cup break will give both clubs breathing room to regroup, interview candidates, and attempt to reset the narrative.
          </p>

          <p>
            For Columbus, the hope is that an internal promotion provides much-needed continuity.
          </p>

          <p>
            For Austin, a full leadership overhaul signals a willingness to start with a cleaner slate.
          </p>

          <p className="font-semibold text-xl">
            Whether these changes spark immediate improvement or simply prolong the uncertainty is the story that will unfold over the coming months.
          </p>

          <p className="font-semibold text-xl">
            For now, two proud clubs have admitted the same uncomfortable truth: what they were doing wasn’t working — and they refuse to accept it any longer.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: May 18, 2026</span>

          <Link
            href="/news"
            className="hover:text-gray-800"
          >
            Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}