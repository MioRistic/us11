'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSMatchday22Roundup() {
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
    'Nashville Finds Another Gear, Vancouver Responds, and the Race Takes Shape';

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Nashville hits another gear, Vancouver bounces back — Matchday 22 roundup ⚽️'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    articleTitle + ' ' + currentUrl
  )}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Nashville Finds Another Gear, Vancouver Responds, and the Race Takes Shape
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-24">August 24, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-3">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition"
            >
              <FaWhatsapp size={16} />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
              aria-label="Copy link"
            >
              <FiCopy size={16} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/blt47978711340c869e/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-15T230033.321.png?auto=webp&format=pjpg&width=2048&quality=60"
            alt="MLS Matchday 22 — Nashville and Vancouver"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images / MLS
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            There are weeks when the table barely moves and weeks when it suddenly looks different. Matchday 22 belonged to the second category.
          </p>

          <p>
            At GEODIS Park on Saturday night, Nashville SC produced the kind of result that turns a strong season into something approaching legend. Trailing 2-1 deep into stoppage time against Columbus, the Boys in Gold scored twice in the final minutes — Reed Baker-Whiting in the 93rd and Andy Nájar in the 95th — to win 3-2. The victory pushed them to 49 points through 21 matches, the best start to a season in MLS history, and stretched their lead atop the Supporters’ Shield standings to nine points.
          </p>

          <p>
            Hany Mukhtar had given them the lead in the 27th minute. Columbus responded after the break through Mohamed Farsi and André Gomes. For a moment it looked as if Nashville’s home invincibility might finally crack. Instead, the late surge arrived, and the stadium that has become one of the league’s most difficult venues once again delivered.
          </p>

          <p>
            Since the World Cup break, Nashville’s record stands at 5-1-1. They remain unbeaten at home in league play. What stands out is not just the points total, but the manner of the wins. This group is finding different ways to get results — controlled performances one week, chaotic, character-driven ones the next. That combination is usually a hallmark of teams that stay near the top deep into the season.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Vancouver’s Response
          </h2>

          <p>
            Three thousand miles away, Vancouver Whitecaps answered a midweek setback with a statement of their own. After losing 1-0 at home to Houston and briefly surrendering first place in the Western Conference, the ’Caps dismantled FC Dallas 5-0 at BC Place. Brian White, returning from a hamstring injury, scored twice in the first half. Emmanuel Sabbi, Édier Ocampo and Bruno Caicedo completed the scoring.
          </p>

          <p>
            The result returned Vancouver to the top of the West with 40 points, two clear of Houston. It was the kind of response coaches demand after a disappointing result: clinical, dominant, and free of lingering frustration. White’s brace, his first goals since the World Cup break, gave the attack a focal point it had lacked in recent weeks.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Rest of the Picture
          </h2>

          <p>
            Elsewhere, the weekend offered reminders that the rest of the league is still competing for position even if the top of the table feels increasingly settled. Toronto FC stunned Inter Miami 2-1, handing the Herons another difficult result in a stretch that has been less convincing than their early-season form. St. Louis CITY SC beat Houston 2-1, helping Vancouver reclaim the West. Charlotte, Orlando, Minnesota and San Diego all collected wins of varying degrees of comfort.
          </p>

          <p>
            The broader picture is becoming clearer. Nashville is operating on a different level right now. Their combination of home form, attacking variety and late-game resilience has created a buffer that will be difficult to close. Vancouver, meanwhile, has shown it can absorb a setback and immediately reassert itself. Those two sides sit as the clearest Shield and conference favorites after 22 matchdays.
          </p>

          <p>
            There are still 13 games left for most teams. Form can shift, injuries can intervene, and the playoff picture remains fluid further down the table. But the teams at the top are starting to separate themselves not only by points, but by the quality of their responses when tested.
          </p>

          <p className="font-bold text-xl mt-10">
            Nashville found another gear when they needed it most. Vancouver bounced back emphatically. The rest of the league now has to decide how it plans to respond.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/joveljic-seattle-sounders" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1PSDRhOJodgMInN48AeYYVQicUXW4AArLkGkx_3fdDM6QePtOQbHzDyc&s=10"
                    alt="Dejan Joveljić Seattle Sounders"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Seattle Sounders Move for Dejan Joveljić from Sporting KC
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 24, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/brenden-aaronson-leeds-deal" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2237710051/crop/MM5DEMBRGQ5DCMJTGM5G433XMU5DKMBTHIZTE===/GettyImages-2237710051.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Brenden Aaronson Leeds United"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Brenden Aaronson Signs New Deal with Leeds United
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 20, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/messi-sullivan-subaru-park" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/15qZsXB/images-6.jpg"
                    alt="Messi Union vs Inter Miami"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Messi and Iloski Shine as Union and Inter Miami Share Spoils
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 19, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/cf-montreal-sanchez-debut" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/imago-sport-1077615335/crop/MM5DEOJZGI5DCNRYGM5G433XMU5DAORRGIYA====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="CF Montréal Alexis Sánchez"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    CF Montréal Edge Columbus as Alexis Sánchez Makes Debut
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 18, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 24, 2026</p>
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