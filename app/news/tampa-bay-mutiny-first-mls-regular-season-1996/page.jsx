
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function TampaBayMutiny1996() {
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
    "Have You Heard of This MLS Club? They Finished First in the League 30 Years Ago, but No Longer Exist.";

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
              Tampa Bay Mutiny
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              History
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Have You Heard of This MLS Club? They Finished First in the League 30 Years Ago, but No Longer Exist.
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
            src="https://assets.goal.com/images/v3/getty-279134/crop/MM5DGMBXGI5DEMBZGY5G433XMU5DAORQ/GettyImages-279134.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Tampa Bay Mutiny during the early years of Major League Soccer"
            fill
            className="object-cover"
            priority
            unoptimized
          />

          <div className="absolute bottom-3 right-3 bg-black/75 text-white text-[10px] sm:text-xs px-3 py-2 rounded font-medium text-right leading-relaxed">
            <div>Copyright: Getty Images</div>
            <div>Credit: Getty Images</div>
          </div>
        </figure>

        {/* ARTICLE BODY */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Imagine finishing first in the very first season of Major League Soccer, building a team around some of the most recognisable players in the sport, and then disappearing from the league just five years later. That is the story of Tampa Bay Mutiny, one of MLS's original clubs and the team that topped the regular-season standings in 1996.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            The Unusual Rules of MLS's First Season
          </h2>

          <p>
            When MLS kicked off in April 1996, the league had ten founding teams and a very different identity from the competition fans know today. The clubs were divided into Eastern and Western conferences, and each team played 32 regular-season matches. The rules were also unusual. Draws did not exist: matches level after regulation went to a penalty shootout, with the winning team receiving one point rather than the three awarded for a regulation victory.
          </p>

          <p>
            The first season was built around experimentation. Instead of the familiar penalty kick, MLS introduced a one-on-one shootout in which an attacker started 35 yards from goal and had five seconds to beat the goalkeeper. A countdown clock replaced the traditional timing system, and the league used a best-of-three format in the conference playoffs. It was a very different version of American professional football, but it gave the new competition a distinctive identity.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            Valderrama, Lassiter and a Team Built to Win
          </h2>

          <p>
            Tampa Bay Mutiny quickly became one of the league's strongest teams. Their squad included Colombian playmaker Carlos Valderrama, one of the most technically gifted footballers to arrive in MLS during its early years. His vision and passing made him central to the team's attacking play, while striker Roy Lassiter provided the goals. Steve Ralston, Giuseppe Galderisi and other experienced players also helped establish Tampa Bay as a serious contender.
          </p>

          <p>
            Valderrama's influence was immediate. He finished the inaugural season with four goals and 17 assists, earning the league's first Most Valuable Player award. Lassiter was even more prolific in front of goal, scoring 27 times in the regular season and setting a record that became one of the defining statistical achievements of MLS's early history.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            Tampa Bay Mutiny: The First Regular-Season Leaders
          </h2>

          <p>
            Tampa Bay finished the 1996 regular season with 58 points, a record of 20 wins and 12 losses, and a goal difference of plus 15 after scoring 66 goals and conceding 51. No other team finished above them. The LA Galaxy led the Western Conference, but their 49 points were not enough to match Tampa Bay's overall total. The Mutiny had established themselves as the best team across the league's first regular season.
          </p>

          {/* SECOND IMAGE */}
          <figure className="relative w-full rounded-3xl overflow-hidden shadow-md my-10 aspect-[16/9]">
            <Image
              src="https://assets.goal.com/images/v3/bltc46a0f62646f9748/crop/MM5DENBVHA5DCMZYGI5G433XMU5DIOJ2GI4Q====/GettyImages-292823.jpg?auto=webp&format=pjpg&width=3840&quality=60"
              alt="Tampa Bay Mutiny during the early years of Major League Soccer"
              fill
              className="object-cover"
              unoptimized
            />

            <div className="absolute bottom-3 right-3 bg-black/75 text-white text-[10px] sm:text-xs px-3 py-2 rounded font-medium text-right leading-relaxed">
              <div>Copyright: Getty Images</div>
              <div>Credit: Getty Images</div>
            </div>

            <figcaption className="text-sm text-gray-500 mt-2">
              Photo: Getty Images
            </figcaption>
          </figure>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            D.C. United Ended Their Championship Dream
          </h2>

          <p>
            However, finishing first in the regular season did not guarantee a championship. Tampa Bay's campaign ended in the Eastern Conference Final, where they were eliminated by D.C. United. The Washington side went on to win the inaugural MLS Cup, beating the LA Galaxy 3-2 after extra time. For the Mutiny, the disappointment was that their excellent regular-season performance had not translated into a place in the first championship final.
          </p>

          <p>
            There is also an important historical distinction when looking back at that first season. The Supporters' Shield, the trophy now awarded to the MLS team with the best regular-season record, did not exist in 1996. It was established later, with the first official award presented in 1998. Tampa Bay are therefore remembered as the team that finished first in the inaugural regular-season standings, rather than as an official Supporters' Shield winner.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            Why Did Tampa Bay Mutiny Disappear?
          </h2>

          <p>
            The Mutiny remained in MLS for six seasons, from 1996 through 2001. Despite their strong start and the presence of high-profile players, the club struggled to build a sustainable business and attract enough support. Attendance, financial difficulties and the challenges of operating in the Tampa Bay market all became part of the wider problem facing the franchise.
          </p>

          <p>
            After the 2001 season, MLS contracted by two teams. Tampa Bay Mutiny and Miami Fusion were both dissolved, reducing the league from 12 clubs to ten. The decision marked the end of one of the original MLS franchises and removed the team that had finished first in the league's inaugural regular season.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">
            A Short-Lived Club With a Lasting Place in MLS History
          </h2>

          <p>
            The story of Tampa Bay Mutiny is a reminder of how uncertain the early years of MLS really were. The league was still experimenting with its rules, trying to establish a football culture and searching for a sustainable business model. Even a team with a regular-season record like Tampa Bay's was not guaranteed a long-term future.
          </p>

          <p>
            Thirty years later, MLS is a much larger and more established competition, with new stadiums, international stars and a growing national profile. Yet the Mutiny remain an important part of its history. They had Carlos Valderrama, Roy Lassiter, the first regular-season lead and a place among the league's original clubs. Their existence was brief, but their place in the story of Major League Soccer is not easily forgotten.
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
