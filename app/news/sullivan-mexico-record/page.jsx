'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function SullivanMexicoRecord() {
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
    "Cavan Sullivan Made History Against Mexico. The Next Goal Will Have to Be Harder.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Cavan Sullivan made history against Mexico. The next goal will have to be harder.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Cavan Sullivan Made History Against Mexico. The Next Goal Will Have to Be Harder.
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-05">October 5, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2298472764/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2298472764.jpg?quality=60&auto=webp&format=pjpg&width=1920"
            alt="Cavan Sullivan celebrates his first USMNT goal against Mexico"
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
            Cavan Sullivan called it the greatest day of his life. The tape supports the feeling. It does not support the idea that he invented the chance.
          </p>

          <p>
            The United States beat Mexico 3-0 on Saturday at State Farm Stadium in Glendale. Julian Hall scored in the 28th minute. Sullivan scored in the 63rd. Malik Tillman finished it in the 85th. Mateo Chávez was sent off around the 68th, a foul on Yunus Musah and then both hands into Sebastian Berhalter, and Mexico played the last 20 minutes with 10. It was the 80th meeting. The first since Mexico won the 2025 Gold Cup final 2-1. The crowd was not American. The scoreboard was.
          </p>

          <p>
            Sullivan is 17 years and five days old. That is now the youngest goal in U.S. men’s history. The record he broke was four days old. Mathis Albert had taken it from Christian Pulisic on Tuesday against Chile, at 17 years and 131 days. Sullivan also became the youngest American to start against Mexico, on his third cap. He debuted against Peru at 16 years and 363 days and played fewer than 10 minutes against Chile. U.S. Soccer posted the short version of what he said afterward: “Greatest day of my life.” To reporters he was slightly longer. “It’s the best feeling I’ve ever experienced. A huge win, a huge day for me, for my family. What an honor.”
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The goal needs the goalkeeper in the sentence
          </h2>

          <p>
            Raúl Rangel had already handed the United States the first. Gio Reyna’s cross in the 28th skipped off his foot and sat for Hall, who is 18 and now has a goal in each of his first three caps. In the 63rd Rangel tried to play out and the pass never left the neighborhood. Sullivan stepped onto it with his left foot, turned, and chipped him from about 35 yards. The ball went under the bar. He ran into the corner flag. Frankie Westfield and Neil Pierre, his Union teammates, were on the sideline. He put his head into the captain’s shoulder.
          </p>

          <p>
            The chip was his. The loose ball was Rangel’s. Both things can be true, and a match report that drops the second one is selling a different sport.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The 3-0 does not describe the first half-hour
          </h2>

          <p>
            Mexico were the better side for a long stretch before that. Pochettino said afterward that they forced the U.S. to play backward. Diego Kochen had to parry a Roberto Alvarado volley in the 58th that would have made it 1-1. The 3-0 describes what happened after a goalkeeper had a bad night, a teenager punished it, and a red card took the rest of the air out of the game. Eleven goals in three matches this window, against Peru, Chile and now Mexico, is a real number. It is also a number built on debuts, rest, and an opponent missing Raúl Jiménez, Edson Álvarez and César Montes.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            That is the useful part for the cycle
          </h2>

          <p>
            Pochettino has spent this camp handing out first caps and asking the room to grow up in public. Sullivan’s answer on Saturday was a start against Mexico and a record that Albert held for less than a week. Hall’s answer was three goals in three games. Neither of those is a World Cup selection. Sullivan is due at Manchester City in January 2028, the first window he can move after he turns 18. Between now and then he has to do this against keepers who do not pass it to him. Pochettino’s line after the match was the adult one: the program has to protect them, and the responsibility is that they grow in the right direction.
          </p>

          <p className="font-semibold text-lg mt-10">
            Landon Donovan scored against Mexico on his debut at 18, the first of six. The comparison will get written anyway. It can wait. Donovan’s six came over a career. Sullivan has one, off a giveaway, in a friendly, in a stadium that did not come to see him. He was right about the day. The record is real. The next one has to be harder.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/usmnt-mexico-glendale-preview" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2297307455/crop/MM5DINZZHA5DENRZHE5G433XMU5DAORQ/GettyImages-2297307455.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="USMNT vs Mexico preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    USMNT vs Mexico: The Friendly That Will Not Feel Like One
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 2, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/messi-eldense-owner" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt65bbc97697961dfd/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-09-04T132526.445.png?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Lionel Messi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Messi Is Back in Spanish Football. Not in a Shirt.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 2, 2026</p>
                </div>
              </div>
            </Link>

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
            <p>Published: October 5, 2026</p>
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
