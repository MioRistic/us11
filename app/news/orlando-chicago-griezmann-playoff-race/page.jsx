'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function OrlandoChicagoGriezmannPlayoffs() {
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
    'Orlando Blew a 2-0 Lead in Chicago. Griezmann Still Shined. Charlotte and Philly Clinched on the Same Night.';

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
              Orlando City
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              Playoffs
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Orlando Blew a 2-0 Lead in Chicago. Griezmann Still Shined. Charlotte and Philly Clinched on the Same Night.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            Antoine Griezmann scored and assisted in Orlando’s 2-2 draw at Chicago. Robert Lewandowski hit the post. Charlotte and Philadelphia locked up playoff spots.
          </p>

          {/* Share buttons - black & white */}
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
        <figure className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9] bg-gray-100">
          <Image
            src="https://assets.goal.com/images/v3/getty-2294480138/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORWGY======/GettyImages-2294480138.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Antoine Griezmann Orlando City vs Chicago Fire"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-3 py-1.5 rounded font-medium">
            Getty Images
          </div>
        </figure>

        {/* Article content */}
        <div className="max-w-none text-lg leading-relaxed">
          <p className="mb-6">
            Antoine Griezmann scored and assisted in Orlando City’s trip to Chicago. Robert Lewandowski hit the post and left with nothing. The final score was 2-2.
          </p>

          <p className="mb-6">
            On the same night, Charlotte FC and the Philadelphia Union locked up playoff spots. The Eastern Conference race got clearer and more chaotic at the same time.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            The Chicago game was exactly what it looked like
          </h2>

          <p className="mb-6">
            Orlando led 2-0 at halftime at Soldier Field. Griezmann set up Iván Angulo in the sixth minute, then scored himself in the 35th with a curling finish from outside the box. It was his 12th consecutive MLS match with a goal contribution, tying the club record.
          </p>

          <p className="mb-6">
            Lewandowski had the best chance for Chicago in the first half — a scissors kick that rattled the post. He did not score. Chicago came back through Jonathan Bamba and Maren Haile-Selassie after the break. The Fire are already in the playoffs. Orlando left with a point and still needs results.
          </p>

          <p className="mb-6">
            The individual duel went to Griezmann. The result did not. Orlando has been one of the better stories of the second half of the season largely because of him. This was a reminder that individual form does not always protect a team from defensive lapses on the road.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            Charlotte and Philadelphia got what they needed
          </h2>

          <p className="mb-6">
            Charlotte beat CF Montréal 4-0 at home. Liel Abada scored a hat-trick. The Crown are now fifth in the East with 50 points and have qualified for the playoffs for the fourth time in five seasons. They still have two games left to try and improve their seeding.
          </p>

          <p className="mb-6">
            Philadelphia drew 0-0 in Nashville against the Supporters’ Shield winners. The Union clinched on the other result of the night: New England’s 3-2 win over the New York Red Bulls. Former Union midfielder Dániel Gazdag scored the winner for the Revolution. Philadelphia are sixth with 47 points after climbing from the bottom of the conference earlier in the year under interim coach Ryan Richter.
          </p>

          <p className="mb-6">
            Both clubs now shift their focus to seeding. With two matchdays remaining, the difference between finishing fourth and sixth still matters for home-field advantage in the first round.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            Where the East stands
          </h2>

          <p className="mb-6">
            Nashville remains clear at the top. New England, Inter Miami and Chicago are already through. Charlotte and Philadelphia joined them on Wednesday. That leaves three direct spots and the wild-card places still open.
          </p>

          <p className="mb-6">
            Orlando, Cincinnati and Columbus are the most obvious teams still fighting. Orlando’s draw in Chicago kept them in the race but did not end it. A win would have put them in a much stronger position. Instead, they remain dependent on results elsewhere as well as their own.
          </p>

          <p className="mb-6">
            The gap between the teams that have already clinched and the ones still chasing is not large in points. It is large in margin for error. Nashville and Chicago have almost none. The teams below them still do.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            What matters from here
          </h2>

          <p className="mb-6">
            Chicago already secured its place before this game. Orlando did not. That context made the 2-2 feel more significant for one side than the other. Griezmann’s production continues to carry Orlando, but the team has now dropped points from a winning position in a game they needed to control.
          </p>

          <p className="mb-6">
            Charlotte and Philadelphia no longer have to worry about simply qualifying. Their next two games are about where they finish, not whether they finish inside the top nine. For Orlando and the other teams on the edge, every remaining result still carries elimination risk.
          </p>

          <p className="mb-6">
            The individual numbers from Chicago will get attention. Griezmann was the better player on the night. Lewandowski was not. The standings, though, moved more because of what happened in Charlotte and Nashville than because of what happened at Soldier Field.
          </p>

          <p className="mb-6">
            Two more matchdays remain. The teams that have already clinched will try to climb. The teams that have not will try to avoid falling out. The gap between those two groups got smaller on Wednesday, even if the number of teams still fighting got smaller as well.
          </p>
        </div>

        {/* Next to Read */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/news/cvetkovic-whitecaps-first-goal" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative bg-gray-100">
                  <Image
                    src="https://xdn.tf.rs/2026/10/29/profimedia-1147414591-930594-830x553.webp"
                    alt="Aleksa Cvetković"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Aleksa Cvetković Scored His First MLS Goal. Vancouver Looked Like a Team That Has One.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 29, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/nashville-supporters-shield-2026" className="group">
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
                  <p className="text-sm text-gray-500 mt-2">October 25, 2026</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 29, 2026</p>
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