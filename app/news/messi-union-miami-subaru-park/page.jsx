'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MessiUnionMiamiDraw() {
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
    "Battle Lines Drawn Again: Messi’s Emotional Goal and Stoppage-Time Chaos as Union Refuse to Yield to Inter Miami";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Messi scores emotional goal, chaos erupts as Union battle Inter Miami to 2-2 draw ⚽️'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    articleTitle + ' ' + currentUrl
  )}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Battle Lines Drawn Again: Messi’s Emotional Goal and Stoppage-Time Chaos as Union Refuse to Yield to Inter Miami
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-20">August 20, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-3 mt-5">
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
              <FaWhatsapp size={18} />
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
            src="https://i.ibb.co/15qZsXB/images-6.jpg"
            alt="Lionel Messi Inter Miami vs Philadelphia Union Subaru Park"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: 2026 Getty Images | Credit: Getty Images | Creator: Isaiah Vazquez
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            <strong>CHESTER, Pa.</strong> — Every time Philadelphia Union face Inter Miami, the match carries a different weight. It is never just another game on the schedule. It becomes a battle.
          </p>

          <p>
            The Union do not fold. They do not accept the hierarchy. They treat Messi’s side like an equal opponent, and the result is almost always the same: tense, physical, and decided on fine margins. Wednesday night at a sold-out Subaru Park followed the familiar script.
          </p>

          <p>
            Lionel Messi scored his first goal since the death of his father. Cavan Sullivan produced another mature performance for a 16-year-old already carrying heavy expectations. Milan Iloski created the equalizer and nearly won the game. And then, deep in stoppage time, everything unraveled into a full-scale melee that left two players sent off and Messi under investigation.
          </p>

          <p>
            Philadelphia and Inter Miami played out a tense, entertaining 2-2 draw. The result felt secondary by the final whistle — but the intensity never did.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Messi’s Moment
          </h2>

          <p>
            Messi’s 26th-minute goal carried more weight than the scoreline suggested. It was his first since Jorge Messi’s passing on August 8. The Argentine took the ball in a one-versus-one situation against Kai Wagner, stutter-stepped past the defender, and finished low into the far corner. He pointed both hands toward the sky in celebration.
          </p>

          <p>
            It was classic Messi — calm, clinical, and timely. Inter Miami had already equalized through Dániel Pintér in the 21st minute after a sequence involving Messi and Luis Suárez. Suddenly the visitors led 2-1 and looked set to control the evening.
          </p>

          <p>
            Philadelphia, true to form, refused to accept it.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Sullivan and Iloski Force the Issue
          </h2>

          <p>
            Cavan Sullivan started alongside his older brother Quinn and quickly showed why the hype around him continues to grow. The teenager provided the assist for Indiana Vassilev’s opening goal in the 11th minute — his seventh assist of the season. He finished with four shots and eight touches inside the Miami penalty area, numbers that led the match.
          </p>

          <p>
            Sullivan’s connection with Milan Iloski was one of the cleaner attacking combinations on the night. Iloski, operating as a forward, was involved in nearly every dangerous Union moment after the break.
          </p>

          <p>
            In the 58th minute he delivered the free-kick that Neil Pierre met with a diving header at the near post to make it 2-2. Pierre’s third goal in five matches continued an impressive run for the young center back. Iloski then thought he had put the Union ahead three minutes later when he finished a rebound, only for VAR to rule Pierre offside in the buildup.
          </p>

          <p>
            The American forward still had one more clear opportunity. In the 71st minute Sullivan played him in; Dayne St. Clair made a sharp point-blank save and the rebound was blocked. Iloski’s final line read one assist, three shots, and a yellow card — solid rather than spectacular, but central to Philadelphia’s ability to force a share of the points against a side stacked with global talent.
          </p>

          {/* VIDEO + RESULT SECTION */}
          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Watch: Highlights & Final Score
          </h2>

          <p className="font-medium text-lg">
            Final Score: Philadelphia Union 2–2 Inter Miami
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>11′ — Indiana Vassilev (PHI) — assist Cavan Sullivan</li>
            <li>21′ — Dániel Pintér (MIA)</li>
            <li>26′ — Lionel Messi (MIA)</li>
            <li>58′ — Neil Pierre (PHI) — assist Milan Iloski</li>
          </ul>

          <div className="my-8 not-prose">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-md aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/CSLBdVTRTuU"
                title="Philadelphia Union vs Inter Miami Highlights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-2xl"
              ></iframe>
            </div>
          </div>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Stoppage-Time Chaos
          </h2>

          <p>
            The game’s real drama arrived after the 100th minute — and it felt inevitable given how these meetings usually unfold.
          </p>

          <p>
            Quinn Sullivan went down in the box following contact. Ian Fray stepped over the fallen Union midfielder. Quinn reacted, the two tangled, and the situation exploded. Cavan Sullivan sprinted across to defend his brother and became entangled with Inter Miami midfielder Yannick Bright. Pushing turned into open confrontation. Both players were shown straight red cards for violent conduct.
          </p>

          <p>
            Messi was also involved. Video captured the Inter Miami captain making contact with Quinn Sullivan’s head and neck area before standing face-to-face with him. The referee did not issue a card on the field. MLS’s Disciplinary Committee is now reviewing the incident. Under league guidelines covering contact to the head or neck that escalates a confrontation, a fine is the most likely outcome, though a suspension remains possible.
          </p>

          <p>
            Union interim coach Ryan Richter was blunt afterward, blaming Fray’s actions for sparking the chaos and indicating the club would appeal Cavan Sullivan’s red card.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What It Means
          </h2>

          <p>
            Inter Miami remain second in the Eastern Conference but continue to look short of their best form. Philadelphia, unbeaten in five under Richter, once again showed they will not simply surrender to star power.
          </p>

          <p className="font-semibold text-lg mt-10">
            This is the pattern. When these two teams meet, the Union treat it like a fight. They press, they compete, they refuse to accept the narrative that Miami should simply walk through them. The football was good. The ending was pure chaos. And once again, neither side gave an inch.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/montreal-columbus-sanchez-debut" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/imago-sport-1077615335/crop/MM5DEOJZGI5DCNRYGM5G433XMU5DAORRGIYA====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="CF Montréal vs Columbus"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    CF Montréal Edge Columbus 2-1 as Streit’s Strike Seals a Much-Needed Road Win
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 20, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/griezmann-lewandowski-orlando-chicago" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/1GVM9GVD/images-5.jpg"
                    alt="Griezmann vs Lewandowski"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Griezmann vs Lewandowski: Lightning Delay, Retro Kits and a 2-1 Fire Win
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 20, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/blog/mls-archive-collection-2026" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/rsyenouylj95wi8oeipx.jpg"
                    alt="MLS Archive Collection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    2026 MLS Archive Collection: Ranking the Retro Kits
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 17, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/chucky-lozano-la-galaxy" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2249117363/crop/MM5DGOJVHA5DEMRSGY5G433XMU5DAORSGA3A====/GettyImages-2249117363.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Chucky Lozano LA Galaxy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    LA Galaxy Finalizing Chucky Lozano Loan Deal
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 15, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 20, 2026</p>
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