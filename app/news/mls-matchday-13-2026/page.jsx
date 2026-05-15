'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSMatchday13Recap() {
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
    "Matchday 13 Recap: 58 Goals, Messi Magic and a Record Night as the World Cup Break Looms";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Matchday 13 Recap: 58 Goals, Messi Magic and a Record Night as the World Cup Break Looms
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-14">May 14, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2276119551/crop/MM5DCNZXGY5DSOJZHJXG653FHIYTGNZWHIZDQMQ=/GettyImages-2276119551.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="MLS Matchday 13 recap"
            width={1200}
            height={675}
            className="w-full h-[420px] object-cover"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Jeff Dean
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            It was one of those nights that reminded everyone why Major League Soccer can be wildly entertaining.
          </p>

          <p className="font-semibold text-xl">
            Matchday 13 produced a staggering 58 goals across 14 matches — the highest single-matchday total in league history.
          </p>

          {/* VIDEO */}
<div className="my-10">
  <h2 className="text-3xl font-bold mb-4">
    Matchday 13 Highlights
  </h2>

  <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-lg">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/G4IXaYB1_-E"
      title="MLS Matchday 13 Highlights"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-full h-full"
    ></iframe>
  </div>
</div>

          <p>
            What was supposed to be a relatively quiet midweek round turned into an absolute goal-scoring frenzy as teams geared up for the final stretch before the long summer pause for the 2026 World Cup.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Game of the Night: FC Cincinnati 3-5 Inter Miami
          </h2>

          <p>
            In a chaotic, end-to-end thriller at TQL Stadium, Inter Miami delivered a reminder of their championship pedigree.
          </p>

          <p>
            Lionel Messi was once again the central figure, scoring twice and providing an assist in a 5-3 road victory over FC Cincinnati.
          </p>

          <p>
            The result pushed Miami into second place in the Eastern Conference with 25 points and underscored their status as the league’s most potent attacking force.
          </p>

          <p className="font-semibold">
            With 31 goals scored this season, the Herons are hitting their stride at the perfect moment heading into the World Cup break.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Julian Hall’s Continued Rise
          </h2>

          <p>
            Eighteen-year-old Red Bull New York striker Julian Hall produced the individual performance of the round, scoring a hat-trick in a 3-2 victory over Columbus Crew.
          </p>

          <p>
            The homegrown talent now has nine goals this season and continues to look like one of the brightest young prospects in the league.
          </p>

          <p>
            His display not only helped the Red Bulls claw back into the Eastern Conference playoff conversation but also added extra spice to Saturday’s Hudson River Derby against NYCFC.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Other Standout Results
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>
              <strong>San Diego FC 5-0 Austin FC</strong> — The expansion side delivered a dominant home performance, handing Austin one of their heaviest defeats of the season.
            </li>

            <li>
              <strong>Nashville SC 3-0 New England Revolution</strong> — The Eastern Conference leaders continued their strong form on the road, with Cristian Espinoza looking like an inspired acquisition.
            </li>

            <li>
              <strong>Chicago Fire 3-1 D.C. United</strong> — A much-needed victory on the road for Chicago, who showed resilience in a comeback win.
            </li>

            <li>
              <strong>CF Montréal 2-2 Portland Timbers</strong> — Cole Bassett’s late equalizer earned Portland a valuable point away from home.
            </li>

            <li>
              <strong>Real Salt Lake 3-0 Houston Dynamo</strong> — RSL responded strongly after a recent dip with a convincing home victory.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Around the League
          </h2>

          <p>
            The goal glut was not limited to a handful of matches.
          </p>

          <p>
            Charlotte FC suffered a narrow 0-1 home defeat to NYCFC, while in the Western Conference, Seattle Sounders, San Jose Earthquakes, and Vancouver Whitecaps continued to set the pace at the top of the standings.
          </p>

          <p>
            The sheer volume of goals and the number of high-quality individual performances suggest that MLS is entering the final stretch before the World Cup break in excellent attacking form — open, entertaining, and full of drama.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            What It Means Heading Into Matchday 14
          </h2>

          <p>
            With only one more full weekend remaining before the long summer pause, the playoff picture is beginning to take clearer shape.
          </p>

          <p>
            Nashville currently look the strongest side in the East, while the Western Conference remains extremely tight at the top.
          </p>

          <p>
            For contenders like Inter Miami, the Red Bulls, and Nashville, these final two matchdays represent the last chance to build meaningful momentum and confidence.
          </p>

          <p>
            For others, it is a final opportunity to secure a playoff spot or at least enter the break with some positive answers.
          </p>

          <p className="font-semibold text-xl">
            After a matchday this wild, Matchday 14 has a very high bar to clear.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex justify-between text-sm text-gray-600">
          <span>Published: May 14, 2026</span>

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