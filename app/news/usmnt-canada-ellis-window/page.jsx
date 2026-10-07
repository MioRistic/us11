'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function UsmntCanadaEllis() {
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
    "USMNT Beat Canada 1-0 as Justin Ellis Caps a 4-0 Window";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT beat Canada 1-0. Justin Ellis capped a 4-0 window.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT Beat Canada 1-0 as Justin Ellis Caps a 4-0 Window
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-07">October 7, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2298472055/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2298472055.jpg?quality=60&auto=webp&format=pjpg&width=1920"
            alt="Justin Ellis scores for the USMNT against Canada"
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
            Justin Ellis scored the first American goal of this window and the last one. The United States beat Canada 1-0 on Tuesday at Allianz Field in St. Paul, and the 19-year-old Orlando forward was the only name on the scoresheet. Peru, Chile and Mexico had already gone. Canada was the one that did not.
          </p>

          <p>
            The window is 4-0. Peru 4-1, Chile 4-2, Mexico 3-0, Canada 1-0. Twelve goals. Ellis had the first, four minutes into his debut on Sept. 26, and the twelfth, in the 29th minute in Minnesota. It is the first four-game winning run in a FIFA window in more than five years. Brian Schwake kept a clean sheet in his first start. That is the record. The match was smaller than the record.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            He scored it limping
          </h2>

          <p>
            Ellis almost did not get to it. Stephen Eustaquio caught him around the 21st minute. He needed treatment, he was limping, and replacements were already warming up. He stayed on. Alex Freeman and Malik Tillman worked a one-two down the right, Richie Laryea stepped up, and Freeman ran into the box. Ellis redirected it. One report calls Freeman&apos;s ball a cross. Another calls it a shot that was going wide until Ellis arrived. Either way it is his second senior goal, in his second start, and he was off at halftime for Julian Hall. Sergiño Dest and Sebastian Berhalter came on for Yunus Musah and Gio Reyna.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The night did not look like Mexico
          </h2>

          <p>
            ESPN had the United States with one shot on target and Canada with three, Canada with more corners, and the fouls at 22-21. Jesse Marsch&apos;s side spent long stretches of the first half on the front foot and still left with the first goal they had conceded in the window. Pochettino started Schwake, Freeman, Chris Richards, Auston Trusty, George Campbell, Musah, Raines, Tillman, Reyna, Mathis Albert and Ellis. Musah was on his 50th cap, wearing 10, back in the picture after missing the World Cup roster. The changes at the break said the lead was enough.
          </p>

          <p className="font-semibold text-lg mt-10">
            It was a different kind of win from the three before it. Peru and Chile were about debuts and space. Mexico was a record and a goalkeeper error. Canada was a limp, one finish, and a goalkeeper who did not have to be brilliant to be the story. The streak is real. The tape from St. Paul is the one that should keep the superlatives in the second paragraph. Four wins, one shot on goal, a teenager who scored twice in the window and left both games early. That is the post-World Cup month. The next one will not be a friendly.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/sullivan-mexico-record" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2298472764/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2298472764.jpg?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Cavan Sullivan against Mexico"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Cavan Sullivan Made History Against Mexico. The Next Goal Will Have to Be Harder.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 5, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/usmnt-mexico-glendale-preview" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2297307455/crop/MM5DINZZHA5DENRZHE5G433XMU5DAORQ/GettyImages-2297307455.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="USMNT vs Mexico"
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

            <Link href="/news/pulisic-milan-2031" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2296411105/crop/MM5DCNRZGI5DSNJSHJXG653FHI2DGNR2GEZDC===/GettyImages-2296411105.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Christian Pulisic"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Milan Want Christian Pulisic Through 2031. The Harder Part Is Getting There
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 2, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 7, 2026</p>
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