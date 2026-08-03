'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function LeedsLiverpoolChicago() {
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
    "Six Goals, One City: Chicago Gets a Premier League Spectacle as Leeds Stun Liverpool";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Leeds stun Liverpool 4-2 in Chicago as Soldier Field enjoys a six-goal thriller ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Six Goals, One City: Chicago Gets a Premier League Spectacle as Leeds Stun Liverpool
          </h1>
          <p className="text-gray-500 text-sm">
            August 3, 2026 · By Mio Ristić
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
            src="https://assets.goal.com/images/v3/getty-2288808801/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2288808801.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Leeds United vs Liverpool at Soldier Field Chicago"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            CHICAGO — Soldier Field has hosted Super Bowls, World Cup matches, and decades of NFL drama. On Sunday night it delivered something different: a full-blooded, six-goal Premier League pre-season thriller that belonged to the crowd as much as the players.
          </p>

          <p>
            Leeds United came from 2-0 down to beat Liverpool 4-2 in front of 49,128 fans. By the final whistle the old stadium was loud, restless, and thoroughly entertained. For a city that rarely sees two Premier League clubs go at each other like this, the night felt like a genuine event.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Game of Two Halves, One Audience
          </h2>

          <p>
            Liverpool looked sharp early. Luke Chambers finished from close range after seven minutes following a corner. Florian Wirtz made it 2-0 before half-time with a composed finish after good work from Jeremie Frimpong and Trey Nyoni. At that point it felt like another controlled evening for Andoni Iraola’s side on their U.S. tour.
          </p>

          <p>
            Then Leeds flipped the script.
          </p>

          <p>
            Brenden Aaronson, introduced at the break, pulled one back on the hour. Dominic Calvert-Lewin equalized from an Ethan Ampadu long throw in the 71st minute. Sean Longstaff put the Whites ahead two minutes later. Calvert-Lewin headed a fourth in the 84th minute, again from a long throw. Four goals in 25 minutes. All from substitutes.
          </p>

          <p>
            The Chicago crowd responded the way crowds do when a game suddenly opens up. Every Leeds attack drew noise. Every set-piece became an event. Soldier Field, so often a stage for American football, sounded briefly like a proper football ground.
          </p>

          <div className="my-10">
  <iframe
    width="100%"
    height="420"
    src="https://www.youtube.com/embed/qAf4v3ACO-g"
    title="Leeds United vs Liverpool - Soldier Field Chicago"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="rounded-2xl"
  ></iframe>
</div>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why Chicago Mattered
          </h2>

          <p>
            This was more than a friendly on a tour schedule. Both clubs used the United States as a pre-season platform. Leeds had already faced Wrexham and Sunderland. Liverpool had beaten Sunderland and Wrexham. The final stop in Chicago brought them together under the lights with a big, mixed crowd and a genuine sense of occasion.
          </p>

          <p>
            For American fans — and for the large contingent of Leeds and Liverpool supporters who made the trip — it was a rare chance to watch two Premier League squads trade blows in a neutral venue with no points on the line and plenty of space to attack. The second half rewarded them.
          </p>

          <p>
            The presence of Michael Phelps, the most decorated Olympian in history and a minority investor in Leeds through the 49ers Enterprises ownership group, added another layer. Phelps and his family were among those watching the comeback unfold. For the Whites’ American ownership group, ending the tour with a statement win in a major U.S. city carried its own quiet satisfaction.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Details That Mattered
          </h2>

          <p>
            Daniel Farke’s half-time changes proved decisive. Aaronson, Calvert-Lewin and Longstaff all scored after coming off the bench. Ampadu’s long throws became a weapon Liverpool could not handle. Leeds’ intensity after the break — pressing higher, winning the ball in advanced areas, and attacking quickly — looked far closer to the side that earned promotion than the cautious first-half version.
          </p>

          <p>
            Iraola, still early in his Liverpool tenure after replacing Arne Slot, was left with questions about second-half structure and set-piece vulnerability. His side had controlled the first 45 minutes. They lost control of the next 45 completely.
          </p>

          <p>
            Attendance was announced at 49,128. The atmosphere grew with the goals. By the time Calvert-Lewin’s second header hit the net, the night had become exactly what a pre-season showcase in a big American city should be: open, chaotic, and fun.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Picture
          </h2>

          <p>
            Pre-season results are temporary. The memory of a packed Soldier Field watching six goals and a full comeback is more lasting for the people who were there.
          </p>

          <p>
            Leeds return home with a win over one of English football’s biggest clubs and clear evidence that their attacking options can change a game. Liverpool return with work to do and a reminder that even friendly matches can expose soft spots.
          </p>

          <p>
            For Chicago, it was simpler. Two Premier League teams, a famous old stadium, and a second half that refused to settle. The crowd got what it came for.
          </p>

          <p className="font-bold text-xl mt-8">
            A goal-fest under the lights. And a night that felt bigger than pre-season.
          </p>

        </section>

        {/* READ NEXT */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/gio-reyna-strasbourg" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Gio Reyna Agrees Move to Strasbourg as Career Reset Continues in France
                </h3>
              </div>
            </Link>

            <Link href="/news/lucas-herrington-hull-city" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Hull City Reach Agreement for Lucas Herrington in Deal Worth Up to $23 Million
                </h3>
              </div>
            </Link>

            <Link href="/news/arfsten-middlesbrough" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Max Arfsten Seals Transfer to Middlesbrough, Joins USMNT Duo
                </h3>
              </div>
            </Link>

            <Link href="/news/mls-matchday-roundup-lewandowski-messi" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  MLS Matchday Roundup: Lewandowski Announces Himself at Home, Messi’s Return Ends in Frustration
                </h3>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 3, 2026</p>
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