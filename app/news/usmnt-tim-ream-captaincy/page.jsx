'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function UsmntTimReamCaptaincy() {
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
    "St. Louis Honors World Cup Captain Tim Ream While the USMNT Looks for the Next Armband";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('St. Louis honors Tim Ream as the USMNT looks for the next captain')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            St. Louis Honors World Cup Captain Tim Ream While the USMNT Looks for the Next Armband
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-09-29">September 29, 2026</time>
          </div>
        </header>

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

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2224128289/crop/MM5DENZUGE5DCNJUGI5G433XMU5DAORRGAZTI===/GettyImages-2224128289.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Tim Ream during his time as United States captain"
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
            Tim Ream gets the ceremony in St. Louis on Tuesday night, and the United States still have to decide who speaks when he is gone. U.S. Soccer will honor the Charlotte FC center back before the friendly against Chile at Energizer Park, in the city where he grew up, for a World Cup he captained on home soil and a career that began against South Africa in November 2010. He has 86 caps, one goal, four assists and 26 nights with the armband. He started every match in Qatar and four of five this summer, when Pochettino called him “my captain” without asking the locker room to vote. He is not on this roster.
          </p>

          <p>
            That is the tribute the federation can script: a walk onto the pitch, a Q&A with the Outlaws, a thank-you for the oldest American field player at a World Cup. It is not a retirement letter. Ream turns 39 in October. The program simply moved the list toward 2030 and left the World Cup captain at home with Turner, Scally, Weah and the rest of a spine that no longer sets the first impression.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The vacancy Tuesday cannot paper over
          </h2>

          <p>
            Pochettino said this week that a new captain may be named soon and talked up Tyler Adams as one of the names in the conversation, which is as close as the job has come to an heir. Adams wore the armband in 2022 after the players chose him under Gregg Berhalter, and he is in this camp. Christian Pulisic has worn it as often as anyone and still gets called Captain America in headlines, except he is in Milan. Chris Richards, Antonee Robinson and Sergiño Dest are the grown-ups in a back line that just handed first caps around like programs. Malik Tillman scored again on Saturday. None of them have been given the tape, and Pochettino has already made clear that this decision stays with the coach, the same way Ream’s did in May.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why the timing got louder
          </h2>

          <p>
            Saturday in Orlando made the vacancy harder to ignore. The United States beat Peru 4-1 with 11 debuts, Sullivan starting at 16, Ellis and Hall scoring before they had a second cap, Tillman from the spot and Berhalter from distance. The finishing belonged to kids and to the few veterans who still look like 2030. The building still needs a voice when the clip ends and Chile walk out in Ream’s hometown, with Mexico and Canada after that. A friendly armband is not a World Cup armband, but it is the first public choice of the cycle, the person who translates the touchline into the dressing room the way Ream did for two years.
          </p>

          <p className="font-semibold text-lg mt-10">
            Honor the captain who got them through July, then put a name on the sleeve before the questions outlast the tribute.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/usmnt-peru-kids-debut" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/imago-sport-1083844060/crop/MM5DGNJYGA5DEMBRGQ5G433XMU5DAORRHA3Q====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="USMNT vs Peru"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    USMNT&apos;s New Era Starts With a 4-1 Win Over Peru — and a Lot of Questions
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 28, 2026</p>
                </div>
              </div>
            </Link>

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

            <Link href="/news/pepi-out-downs-usmnt" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2187949160/crop/MM5DINJRGI5DENJTHA5G433XMU5DIMJXHIZDOMI=/GettyImages-2187949160.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Ricardo Pepi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Pepi Lasted Nine Minutes. Downs Gets the Window.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 22, 2026</p>
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

          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: September 29, 2026</p>
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
