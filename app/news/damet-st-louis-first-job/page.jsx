'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function DametStLouis() {
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
    "Damet Is 36 and in His First Job. St. Louis Is One Game From a Trophy.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Damet is 36 and in his first job. St. Louis is one game from a trophy.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Damet Is 36 and in His First Job. St. Louis Is One Game From a Trophy.
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-20">October 20, 2026</time>
          </div>
        </header>

        <div className="flex items-center gap-3 mb-8">
          <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Share on Facebook">
            <FaFacebookF />
          </a>
          <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Share on X">
            <FaTwitter />
          </a>
          <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Share on WhatsApp">
            <FaWhatsapp />
          </a>
          <button onClick={handleCopyLink} className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Copy link">
            <FiCopy />
          </button>
          {copied && <span className="text-sm text-green-600">Copied</span>}
        </div>

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/blt577ca013fa3871fc/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-10T122830.270.png?quality=60&auto=webp&format=pjpg&width=1920"
            alt="Yoann Damet and St. Louis City"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Getty Images
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            Yoann Damet did not set out to become the centre of a story about circles. He is in one anyway.
          </p>

          <p>
            At 36, Damet is MLS’s youngest head coach, and St. Louis City SC is his first permanent job in charge of a first team. Corey Wray called him during the winter, shortly after taking over as the club’s chief soccer officer. The appointment came with a particular kind of risk: St. Louis had spent the previous two seasons trying to recover the form that carried it to the Western Conference title in its inaugural 2023 campaign.
          </p>

          <p>
            Damet knew the league. Six years earlier, aged 29, he had become the youngest person in MLS history to coach a game when he took charge of FC Cincinnati on an interim basis. He had worked alongside Wilfried Nancy and Greg Vanney, and had been coaching since he was 16. What he had not done was lead a club through an entire season as its permanent head coach.
          </p>

          <p>
            Now, with St. Louis one game from the first trophy in its history, that distinction has become part of the story.
          </p>

          <p>
            The club is on a 21-game unbeaten run across all competitions, an MLS record. Its league unbeaten streak stands at 19 games, level with FC Dallas’s mark from 2010. St. Louis have not lost since a 2-0 defeat away to Austin on May 3. They sit second in the Western Conference, one point behind Vancouver, and have already secured a place in the playoffs.
          </p>

          <p>
            Next week comes the U.S. Open Cup final against Columbus Crew. It will be St. Louis’s first appearance in a final, and a return to a city that carries its own significance for Damet. The Athletic’s Tom Bogert has described the moment as a full circle. Damet, meanwhile, has talked about humility and hunger.
          </p>

          <p>
            The language is familiar. The results are not.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            From a difficult start to a record run
          </h2>

          <p>
            The unbeaten streak has changed the way St. Louis’s season is understood, but it did not begin this way.
          </p>

          <p>
            The club collected only six points from its first 10 league games. A team that had struggled to find consistency was suddenly being asked to sustain a run that had become historic. The turnaround has been dramatic enough to make the early-season problems seem distant, though they remain part of what makes the current position remarkable.
          </p>

          <p>
            There are other reasons not to reduce the story to the coach alone.
          </p>

          <p>
            St. Louis spent $12 million to sign Rafael Navarro, the most expensive acquisition in the club’s history. The investment reflected the ambition to build a squad capable of competing at a higher level, rather than relying on the momentum of its inaugural season.
          </p>

          <p>
            Damet has had to turn that ambition into a functioning team. The unbeaten run is evidence of what has followed, but it is not proof that every question has been answered. Five league games remain, the Open Cup final is still to be played, and an MLS Cup in December is a possibility rather than an appointment on the calendar.
          </p>

          <p>
            For now, St. Louis have earned the right to consider all three competitions meaningful.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The coach is part of the story, not the whole story
          </h2>

          <p>
            Damet’s age and background make him an obvious focal point. A 36-year-old in his first permanent head-coaching role, leading a team through a record run and towards a major final, is a compelling narrative.
          </p>

          <p>
            But the achievement matters more than the biography.
          </p>

          <p>
            His experience under Nancy and Vanney gave him exposure to two established coaching environments. His years in the game, beginning when he was 16, mean this is not a story about someone discovering coaching for the first time. It is about someone finally getting the permanent opportunity to put that experience into practice.
          </p>

          <p>
            Wray’s decision to appoint him now looks increasingly significant. St. Louis needed a response to two difficult seasons, not simply a reminder of what it had achieved in 2023. Damet has delivered results that have put the club back among the West’s leading teams and given it a chance to win silverware.
          </p>

          <p>
            The final will provide a different kind of test. An unbeaten run can be built over months, through adjustments and recovery from one match to the next. A cup final compresses the season into a single evening. There is no next league game in which to make up for a mistake.
          </p>

          <p>
            That is what makes the opportunity so important.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            One game is not a trophy
          </h2>

          <p>
            St. Louis can leave Columbus with the U.S. Open Cup. It can still finish the league season strongly and pursue an MLS Cup in December. The possibility of a historic year is real.
          </p>

          <p>
            None of it has happened yet.
          </p>

          <p>
            That distinction is worth keeping, particularly when a record run and a first final make it tempting to treat the ending as inevitable. The unbeaten streak is already an achievement. The trophy would be another one, and a different one.
          </p>

          <p>
            Damet remains MLS’s youngest head coach. St. Louis remains one game away from its first piece of silverware.
          </p>

          <p>
            The circle has brought him back to Columbus, and the season has given the club a chance to turn a remarkable run into something lasting.
          </p>

          <p className="font-semibold text-lg mt-10">
            But the final is still to be played.
          </p>

          <p>
            For Damet, the first permanent job has already become an extraordinary story.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/ojeda-backheel-goal-of-the-year" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/hRTtz0wp/01ke6zvb0dqtawf59r90.webp"
                    alt="Martín Ojeda backheel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Ojeda’s Backheel Is a Goal of the Year Case. It Is Not the Award.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 18, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/albert-kovac-city-minutes" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/bltddddd4716914a103/Albert.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Mathis Albert"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Kovac Promised Albert Minutes. The City Interest Is Still a Report.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 13, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 20, 2026</p>
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