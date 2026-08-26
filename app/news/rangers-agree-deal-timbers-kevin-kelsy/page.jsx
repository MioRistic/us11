'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function RangersAgreeDealTimbersKevinKelsy() {
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
    "Rangers Agree $13 Million Deal for Portland Timbers Striker Kevin Kelsy";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Rangers agree $13m deal for Portland Timbers striker Kevin Kelsy ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Rangers Agree $13 Million Deal for Portland Timbers Striker Kevin Kelsy
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-26">August 26, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-3">
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
            >
              <FiCopy size={16} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://i.ibb.co/QvHNgtP7/images-3.jpg"
            alt="Kevin Kelsy Portland Timbers Rangers transfer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            gettyimages.com · Copyright: 2025 Alika Jenner, Credit: Getty Images
          </div>
        </figure>

        {/* ARTICLE BODY */}
        <section className="space-y-6 text-lg leading-relaxed">

          <p>
            PORTLAND — Rangers have agreed a deal with the Portland Timbers to sign forward Kevin Kelsy, a move that would make the 22-year-old Venezuela international the most expensive outgoing transfer in Timbers history and Rangers’ second-costliest signing since 2000.
          </p>

          <p>
            Sources with knowledge of the negotiations said Rangers will pay $13 million (£9.5m) plus add-ons. Portland will also retain a sell-on percentage. Personal terms are understood to be settled. Kelsy will travel to Glasgow to complete final paperwork and undergo a medical once his visa is issued. Until those steps are done, the transfer is agreed — not completed.
          </p>

          <p>
            The fee eclipses Portland’s previous record sale — Evander’s $12 million move to FC Cincinnati — and more than doubles the just-under-$6 million the Timbers paid Shakhtar Donetsk for Kelsy in January 2025. For Rangers, only Tore André Flo’s £12 million arrival from Chelsea in 2000 sits above him on the club’s all-time spend list.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why Rangers Moved Now
          </h2>

          <p>
            Derek McInnes has been hunting a physical No. 9 since Youssef Chermiti suffered an ACL injury against Hibernian and was ruled out for a significant period. Rangers still have Lawrence Shankland, Bojan Miovski and Ryan Naderi. What they did not have was a young, 6-foot-4 target who can occupy the box, win first contact and finish the kind of crosses Scottish and European nights produce.
          </p>

          <p>
            That is Kelsy’s game. He is a penalty-box striker first: hold-up play, aerial duels, second balls and finishes from crosses. When Portland’s attackers — David da Costa and Kristoffer Velde among them — put the ball into the area, Kelsy was the reference point.
          </p>

          <p>
            He has scored 16 goals in 43 MLS appearances for the Timbers and is the club’s leading scorer this season. He has six senior caps for Venezuela. At Shakhtar he scored in the Champions League. A 2024 loan at FC Cincinnati produced six goals in 23 MLS matches before Portland bought him as a U22 Initiative player.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Portland Did Not Want to Sell
          </h2>

          <p>
            The Timbers were not shopping Kelsy. New head coach Martí Cifuentes, in particular, wanted him for the stretch run. Early Rangers approaches — reported in mid-August around $10 million — were knocked back. Kelsy was not pushing to leave. The bids kept rising. Once Rangers reached $13 million plus add-ons and a sell-on, Portland had little commercial room left.
          </p>

          <p>
            The club is covered, at least on paper. Vincent Janssen arrived earlier this summer. Gage Guerra is trusted for minutes up top. Portland sit ninth in the Western Conference and still plan to use the last week of the window. Selling a 22-year-old leading scorer in August is never the football decision. It became the business decision.
          </p>

          <p>
            Zoom out and the sale fits a pattern. Portland have generated roughly $35 million in recent outbound deals: Kelsy ($13m), Evander ($12m), Santiago Moreno ($7m) and David Ayala ($2m). Turning a sub-$6 million buy into a $13 million-plus exit in 19 months is one of the cleanest recent examples of how MLS can develop and flip a U22 striker with size and an international résumé.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Still Has to Happen
          </h2>

          <p>
            Visa. Medical. Final paperwork in Glasgow. Those are the remaining gates. Rangers are also closing on Girona winger Kim Min-su in an £8.5 million deal after a proposed move for PSV’s Couhaib Driouech collapsed on medical grounds. If both land, Kelsy becomes part of a late-window reset under McInnes.
          </p>

          <p>
            The honest scouting note travels with him. Kelsy can be streaky. He leans on the players around him to create the service. Ibrox will ask a different question than Providence Park — tempo, physicality, European away nights. The size and the finishing instincts are real. The adaptation is the bet Rangers are paying $13 million plus add-ons to make.
          </p>

          <p className="font-semibold text-lg mt-10">
            Until the visa clears, he is still a Timber. The agreement, though, is in place.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/dejan-joveljic-seattle-arrival" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt1f59038c75fb0191/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-11-30T215714.252.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Dejan Joveljić Seattle Sounders"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Seattle Sounders Acquire Dejan Joveljić in $6 Million Cash Trade — Proven Goalscorer Arrives as Designated Player
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 25, 2026</p>
                </div>
              </div>
            </Link>

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
            <p>Published: August 26, 2026</p>
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