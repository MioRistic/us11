'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function GriezmannLewandowskiOrlando() {
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
    "When Giants Met in the Storm: Griezmann vs Lewandowski as Chicago Edge Orlando 2-1";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Griezmann vs Lewandowski in Archive kits: Chicago beat Orlando 2-1 after lightning delay ⚡️'
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
            When Giants Met in the Storm: Griezmann vs Lewandowski as Chicago Edge Orlando 2-1
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-20">August 20, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
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
              className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
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
            >
              <FiCopy size={16} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://i.ibb.co/xq4Z04Yy/images-5-1.jpg"
            alt="Robert Lewandowski Chicago Fire vs Orlando City"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: 2026 Getty Images | Credit: GETTY | Creator: Rich Storry
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            ORLANDO — For the first time in Major League Soccer history, two true European greats stood on opposite sides of the same pitch.
          </p>

          <p>
            Antoine Griezmann in Orlando’s Archive kit. Robert Lewandowski in Chicago’s.  
            One a 2018 World Cup winner with France. The other one of the greatest pure goalscorers of his generation.
          </p>

          <p>
            On a stormy Wednesday night at Inter&amp;Co Stadium, the long-awaited duel finally happened — and both sides showed up in retro colors. Nature made sure no one would forget it.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Retro Night: Archive Kits on Both Sides
          </h2>

          <p>
            This was more than a star-power midweek match. It was also a full Archive Collection night.
          </p>

          <p>
            Orlando City wore the “Orlando Original” third kit from the adidas x MLS 2026 Archive Collection — a design that stacks the city’s soccer history into one shirt. The Lions wordmark nods to the 1980s Orlando Lions. The graphic language borrows from the adidas Questra, the official ball of the 1994 World Cup, when Orlando hosted matches at the Citrus Bowl. The red accents echo the club’s first USL title in 2011.
          </p>

          <p>
            Chicago Fire answered in their own Archive Kit: a reimagining of the club’s fan-favorite 2000 away jersey. White base. Bold “CHICAGO” across the chest. Navy band and red sleeve accents linking the past to today’s Forever Red identity — a subtle nod to the city’s “White City” nickname from the 1893 World’s Fair.
          </p>

          <p>
            Two Designated Player superstars. Two throwback kits. One electric Florida night.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Early Fire, Then the Sky Opened
          </h2>

          <p>
            Chicago needed only four minutes to take the lead.  
            Lewandowski rose and headed the ball across the box. Orlando failed to clear. Puso Dithejane smashed it past Maxime Crépeau. 0-1. David Poreba, making his MLS debut, provided the assist.
          </p>

          <p>
            The visitors looked sharp. The home side struggled to settle. Then, late in the first half, the referee stopped the game.
          </p>

          <p>
            Lightning.
          </p>

          <p>
            The sky over Orlando lit up. Players headed to the locker rooms. Fans were directed into the concourses. The weather delay lasted close to two hours. Kickoff had been at 7:30 p.m. The restart came after 10:00 p.m. local time.
          </p>

          <p>
            When the teams returned, the first half was finished quickly. Halftime was reduced to a short water break. The second half began under the lights, with the storm gone but the tension still hanging in the air.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Griezmann Answers, Lewandowski Decides
          </h2>

          <p>
            Orlando needed a response. They got it in the 52nd minute.  
            Griezmann delivered a perfect corner. David Brekalo rose highest and headed home. 1-1.
          </p>

          <p>
            For a stretch, the Lions looked capable of taking something from the game. They finished with the bulk of the shots. But Chicago’s defense held firm. Goalkeeper Chris Brady made the necessary saves.
          </p>

          <p>
            Then came the decisive moment. Robin Jansson brought Lewandowski down from behind inside the box. The referee pointed to the spot.
          </p>

          <p>
            Lewandowski, calm as ever, stepped up and converted in the 69th minute. 1-2.
          </p>

          <p>
            It was the kind of goal that has defined his career — clinical, cold, inevitable. His third league goal of the season, and another game-winner for the Fire.
          </p>

          {/* VIDEO + RESULT SECTION */}
          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Watch: Highlights &amp; Final Score
          </h2>

          <p>
            <strong>Final score:</strong> Orlando City 1–2 Chicago Fire  
            <br />
            <strong>Goals:</strong> Dithejane 4’, Brekalo 52’ (Griezmann), Lewandowski 69’ (pen)
          </p>

          <div className="my-8 not-prose">
            <iframe
              width="100%"
              height="420"
              src="https://www.youtube.com/embed/6iNtAhfdsrU"
              title="Orlando City vs Chicago Fire highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Two Stars, One Night, Different Stories
          </h2>

          <p>
            Griezmann, still early in his Orlando City chapter, showed the vision and set-piece quality that made him a star in Europe. His assist for the equalizer was the clearest reminder of why the Lions brought him to Florida.
          </p>

          <p>
            Lewandowski delivered exactly what Chicago signed him for: presence in the box, a penalty under pressure, and three more points on the road. The Fire extended a winning run that has become one of the longest club streaks in decades.
          </p>

          <p>
            The result left Chicago climbing the Eastern Conference table at 11-6-2 (35 points). Orlando remained at 6-11-3 (21 points), still searching for consistency.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Night That Felt Bigger Than the Scoreline
          </h2>

          <p>
            Matches between Designated Players of this caliber are still rare in MLS. Nights when two players with Champions League, World Cup, and elite European pedigrees go head-to-head — while both clubs wear Archive Collection retro kits — are rarer still.
          </p>

          <p>
            Add a nearly two-hour lightning delay, a late-night restart, and a penalty that decided everything, and you have one of the more memorable midweek games of the 2026 season.
          </p>

          <p>
            When the final whistle blew, Lewandowski had the winner. Griezmann had the assist. Both wore the past on their chests. And the sky above Orlando had finally gone quiet.
          </p>

          <p className="font-bold text-xl mt-10">
            For one night, MLS felt a little closer to the stage these two players once dominated — and a little more connected to the history these Archive kits were built to honor.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/blog/mls-archive-collection-2026" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/rsyenouylj95wi8oeipx.jpg"
                    alt="2026 MLS Archive Collection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    2026 MLS Archive Collection: Ranking the Retro Kits — From Grimace Purple to Mountain Power
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 17, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/breel-embolo-atlanta-united" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwzV8zjhlrGysUyoFj63vuCBg-DpmwygmARa2ASDwTA&s=10"
                    alt="Breel Embolo Atlanta United"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Atlanta United Finalizing $18m Deal for Switzerland Forward Breel Embolo
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 14, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/kevin-kelsy-rangers-bid" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/QvHNgtP7/images-3.jpg"
                    alt="Kevin Kelsy Rangers bid"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Rangers Submit ~$10m Bid for Portland Timbers Striker Kevin Kelsy
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 13, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/alexis-sanchez-cf-montreal" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUx2mcZSv0C23oFnU7J4uT_jCAJ5y9KGMFw0_vn3vHQ&s=10"
                    alt="Alexis Sánchez CF Montréal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    CF Montréal Sign Chilean Great Alexis Sánchez as Designated Player
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 11, 2026</p>
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