'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PepiOutDownsUsmnt() {
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
    "Pepi Lasted Nine Minutes. Downs Gets the Window.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Ricardo Pepi is out of the USMNT window. Damion Downs replaces him.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Pepi Lasted Nine Minutes. Downs Gets the Window.
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-09-22">September 22, 2026</time>
          </div>
        </header>

        {/* SHARE */}
        <div className="flex items-center gap-3 mb-8">
          <a
            href={facebookShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href={twitterShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on X"
          >
            <FaTwitter />
          </a>
          <a
            href={whatsappShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <button
            onClick={handleCopyLink}
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Copy link"
          >
            <FiCopy />
          </button>
          {copied && <span className="text-sm text-green-600">Copied</span>}
        </div>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2187949160/crop/MM5DINJRGI5DENJTHA5G433XMU5DIMJXHIZDOMI=/GettyImages-2187949160.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Ricardo Pepi in action for PSV Eindhoven"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: ANP/AFP via Getty Images | Creator: Maurice van Steen
          </div>
        </figure>

        {/* ARTICLE */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            Ricardo Pepi was the senior striker on Mauricio Pochettino’s first post-World Cup list. He lasted nine minutes against Twente on Sunday. PSV lost 3-2 in Enschede. The United States replaced him with Damion Downs.
          </p>

          <p>
            That is the transaction. The rest is what it does to a camp that had already cut Christian Pulisic and Folarin Balogun.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What we know about the injury
          </h2>

          <p>
            U.S. Soccer announced the withdrawal. The diagnosis in public is a muscle problem, not a scan. Do not invent a grade. Do not write him off for November. Write that he will miss Peru, Chile, Mexico and Canada, and that a 23-year-old who started the Eredivisie with three goals in eight appearances is now watching the first 2030 window from Eindhoven.
          </p>

          <p>
            Pepi played every game at the World Cup. He was the cleanest No. 9 on that roster. Removing him after Pulisic and Balogun were already left off means the three forwards who carried the summer are all somewhere else.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Who walks in
          </h2>

          <p>
            Downs is 22, German-born, dual national, on loan at St. Louis CITY from Southampton. Five substitute appearances in MLS. Zero starts. Thirty-five minutes. No goal in a St. Louis shirt. Six senior caps. Debut against Switzerland in June 2025. Winning penalty against Costa Rica in the 2025 Gold Cup quarterfinals. Last cameo of record: 11 minutes against Japan last September.
          </p>

          <p>
            He is not a form pick. He is a known body. Pochettino did not reach for Balogun, who finally got off the Monaco bench. He reached for a player who already knows the building and can walk into Energizer Park on Sept. 29 when Chile comes to St. Louis.
          </p>

          <p>
            The rest of the forward line is a tryout: Cavan Sullivan, Julian Hall, Justin Ellis, Cole Campbell. Downs is the only one in that group with a World Cup-adjacent résumé, and even that résumé is a shootout and a bench.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What the week became
          </h2>

          <p>
            Thursday’s list was supposed to be a look at 2030 with Pepi as the adult in the room. Tuesday’s list is Sullivan as the clip and Downs as the replacement nine. The friendlies do not get easier because the strikers got younger. Peru in Orlando on Saturday. Then Chile at Downs’ borrowed home. Then Mexico. Then Canada.
          </p>

          <p className="font-semibold text-lg mt-10">
            Pepi’s year at PSV was the argument for keeping a center forward who finishes. Nine minutes in Twente is the argument for having a second name on speed dial. Downs is that name. He has not earned a start in MLS. He has earned a phone call. Those are different things. This window will decide if Pochettino still knows the difference.
          </p>
        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/usmnt-roster-sullivan-pulisic" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/imago-sport-1079257579/crop/MM5DGMBQGA5DCNRYHA5G433XMU5DAORRGU4Q====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="USMNT roster"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Pochettino Called the Kids. He Left Pulisic Off.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 17, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/cavan-sullivan-usmnt-call" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2295138136/crop/MM5DGOJYGQ5DEMRUGE5G433XMU5DGNZRHIZDONI=/GettyImages-2295138136.jpg?quality=60&auto=webp&format=pjpg&width=1280"
                    alt="Cavan Sullivan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Cavan Sullivan Stays Hot With Two Goals as a USMNT Call Beckons
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 14, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/diego-luna-meniscus-rsl" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHzGZltSPgPaMIYQ7qfUqUFz96nBx9OaDsah1QDhislUHvTHDuK4XKeGP&s=10"
                    alt="Diego Luna"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Diego Luna Will Miss the Rest of the MLS Season With a Torn Meniscus
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 16, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/messi-campeones-cup-kily-debut" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2295673367/crop/MM5DGNRSGU5DEMBTHE5G433XMU5DAORQ/GettyImages-2295673367.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Lionel Messi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Messi Leads Inter Miami to Campeones Cup in Kily González’s First Match
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 17, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: September 22, 2026</p>
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