'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSMatchday14Recap() {
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
    "MLS Matchday 14: Chaos Before the Curtain Falls";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Matchday 14: Chaos Before the Curtain Falls
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
            src="https://assets.goal.com/images/v3/blt98069fadcc2b1e00/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-05-17T192244.735.png?auto=webp&format=pjpg&width=1920&quality=60"
            alt="MLS Matchday 14 recap"
            width={1200}
            height={675}
            className="w-full h-[420px] object-cover"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            The final full weekend of Major League Soccer action before the long 2026 World Cup pause was supposed to be a calm send-off.
          </p>

          

          <p className="font-semibold text-xl">
            Instead, it delivered one of the wildest rounds of the young season.
          </p>

          <div className="my-10">
  <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/Hft2ovtfsco"
      title="Matchday 14 Preview"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>

          <p>
            From coast-to-coast chaos and record-breaking individual performances to a stunning coaching change in Columbus, Matchday 14 had everything — including plenty of drama for those brave enough to stay up for the West Coast games.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Sammy Sarver Becomes FC Dallas Folklore
          </h2>

          <p>
            In San Jose, the Earthquakes’ impressive Cinderella run came to a jarring halt.
          </p>

          <p>
            FC Dallas twice came from behind to steal a chaotic 3-2 victory at PayPal Park, handing San Jose their second straight loss.
          </p>

          <p>
            The undisputed hero of the night was substitute Sam Sarver.
          </p>

          <p>
            His late winner was excellent, but the unhinged, full-throttle celebration in front of the San Jose supporters’ section instantly became derby legend.
          </p>

          <p>
            From suburban Cleveland through the Columbus Crew academy and North Texas SC, Sarver has taken the long road.
          </p>

          <p className="font-semibold">
            On Saturday night, he announced himself as a genuine difference-maker for a rising Dallas side.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            FC Cincinnati’s 98th-Minute Madness
          </h2>

          <p>
            Down in San Diego, the game had all the makings of a track meet.
          </p>

          <p>
            Marcus Ingvartsen appeared to have won it for the hosts with a rocket in the 96th minute.
          </p>

          <p>
            Most teams would have happily taken the point.
          </p>

          <p className="font-semibold">
            Not Cincinnati.
          </p>

          <p>
            In the 98th minute, Tom Barlow completed his brace on a perfect layoff from Ayoub Jabbari to salvage a wild 3-3 draw.
          </p>

          <p>
            It was pure #MLSAfterDark chaos — and yet another reminder that this FC Cincinnati team simply refuses to lose.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Messi Finally Conquers Nu Stadium
          </h2>

          <p>
            On Sunday Night Soccer, Lionel Messi and Inter Miami finally broke their curse at their glittering new home.
          </p>

          <p>
            The Herons dispatched a tired Portland Timbers side 2-0, with Messi scoring the opener and assisting Germán Berterame for the second.
          </p>

          <p>
            Messi now has an absurd 11 goal contributions (5 goals, 6 assists) in his last four matches.
          </p>

          <p>
            Inter Miami sit second in the East, breathing down Nashville’s neck.
          </p>

          <p>
            There was, however, a notable subplot: La Familia, the club’s main supporters’ group, made their feelings known late in the match, chanting for the players to show more respect and acknowledgment to the fans.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Columbus Parts Ways With Henrik Rydström
          </h2>

          <p>
            In one of the more decisive moves of the young season, the Columbus Crew relieved head coach Henrik Rydström of his duties following a 1-1 draw at bottom-dwelling Philadelphia Union.
          </p>

          <p>
            It was just the 16th game of his tenure.
          </p>

          <p>
            General manager Issa Tall cited a clear cultural disconnect and results that fell well short of expectations for a club with three MLS Cup titles.
          </p>

          <p>
            Assistant Laurent Courtois will take over on an interim basis.
          </p>

          <p className="font-semibold">
            It is the fourth coaching change in MLS this season.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Sporting Kansas City Shows Signs of Life
          </h2>

          <p>
            Yes, you read that correctly.
          </p>

          <p>
            The team that looked destined to break multiple records for futility has suddenly won two straight matches — including impressive victories over the Galaxy and Austin FC.
          </p>

          <p>
            Saturday’s 2-1 comeback win in Austin was especially sweet: SKC’s first positive result at Q2 Stadium in club history.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Around the League
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>
              <strong>Nashville SC 3-2 LAFC</strong> — Hany Mukhtar delivered a hat-trick masterclass as Nashville moved into first place in the Supporters’ Shield race.
            </li>

            <li>
              <strong>LA Galaxy 2-0 Seattle Sounders</strong> — Gabriel Pec ran riot again, scoring and assisting in a statement road victory.
            </li>

            <li>
              <strong>New England Revolution 2-1 Minnesota United</strong>
            </li>

            <li>
              <strong>Real Salt Lake 2-1 Colorado Rapids</strong> — Teenage phenom Zavier Gozo continued his remarkable rise with another standout performance.
            </li>

            <li>
              Whispers about a surprise USMNT World Cup call-up are growing louder.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Other Results
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>CF Montréal 0-2 Chicago Fire</li>
            <li>Charlotte FC 3-1 Toronto FC</li>
            <li>D.C. United 1-1 St. Louis CITY SC</li>
            <li>Orlando City 1-1 Atlanta United</li>
            <li>Houston Dynamo 1-0 Vancouver Whitecaps</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            The Bigger Picture
          </h2>

          <p>
            With the World Cup break now just days away, the table is beginning to take real shape.
          </p>

          <p>
            Nashville look the strongest team in the East, while the West remains extremely tight.
          </p>

          <p>
            For teams like Inter Miami, the Red Bulls, and Nashville, these final matches were about building momentum.
          </p>

          <p>
            For others, it was a last desperate scramble for playoff positioning.
          </p>

          <p className="font-semibold text-xl">
            After a weekend this chaotic and entertaining, MLS heads into the summer pause in excellent health.
          </p>

          <p className="font-semibold text-xl">
            The only question left is: who will be ready when the league returns?
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