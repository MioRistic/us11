'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MorattiMessiInterOffer() {
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
    "Moratti Says He Offered Messi €500m. Messi Never Opened the Letter.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Moratti says he offered Messi €500m in 2012. Messi never opened the letter.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Moratti Says He Offered Messi €500m. Messi Never Opened the Letter.
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-09-16">September 16, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2294966080/crop/MM5DIOBWGM5DENZTGU5G433XMU5DAORTG4ZA====/GettyImages-2294966080.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Lionel Messi during his Barcelona years"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Getty Images
          </div>
        </figure>

        {/* ARTICLE */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            Massimo Moratti is telling a story about a letter Lionel Messi never opened.
          </p>

          <p>
            That is the news. Not a transfer. Not a rejected contract. A former Inter president, 14 years later, saying that in 2012 he sent his vice-president to Barcelona with an offer he now prices at €500 million, and that Messi declined to find out what was inside.
          </p>

          <p>
            “I did something crazy,” Moratti said, via the Catalan paper Sport. In 2012 the number was crazy. He sent the letter anyway. Messi, in this telling, did not read it. He rejected the idea without the details. When they spoke later, Messi thanked him for the interest and said he wanted to retire at Barcelona.
          </p>

          <p>
            Believe the impulse. Inter under Moratti spent like a club that thought money could rearrange history. Doubt the invoice. There is no Inter filing, no Barcelona minute, no Messi confirmation this week. There is a man who sold the club in 2013 reconstructing a near-miss that makes both of them look like the version of themselves the public already likes: Moratti as the romantic billionaire, Messi as the boy who would not leave home.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The bid that actually has a paper trail
          </h2>

          <p>
            The documented Inter run at Messi is older and smaller.
          </p>

          <p>
            In 2006 Joan Laporta said Moratti came to him with €250 million. Laporta said no. Jorge Messi asked what Laporta would do as a father. Laporta said they would build a team around the kid. Gazzetta has retold that meeting for 20 years. In 2009 Laporta said publicly that Moratti should forget it. Messi’s release clause at the time was €250 million.
          </p>

          <p>
            Those stories have two sides. This new one has one.
          </p>

          <p>
            If Moratti doubled the fantasy six years later, it fits the era more than the ledgers. In 2012 Messi was already the best player alive. Barcelona were not selling him for a number that existed on a napkin. The vice-president can fly to Catalonia. The letter can sit on a table. The market still does not move.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What “retire at Barcelona” turned into
          </h2>

          <p>
            Messi meant it, until the club could not pay him.
          </p>

          <p>
            He left in 2021 on a free, to Paris, because Barcelona’s books had collapsed under the weight of the same loyalty the letter was supposed to honor. He is in Miami now, contracted through 2028, retired from Argentina, still playing. The sentence Moratti remembers is a 2012 sentence. It is not a career plan.
          </p>

          <p>
            That does not make the quote useless. It makes it dated. Players tell presidents what they believe in the middle of a dynasty. Dynasties end in accounting.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            How to hold the story
          </h2>

          <p>
            Do not say Messi turned down half a billion. Say Moratti says he offered €500 million and Messi would not look. Do not convert it to dollars for the headline. Do not staple it to the 2006 Laporta story as if they were one bid.
          </p>

          <p className="font-semibold text-lg mt-10">
            The useful piece is smaller. For a decade the richest version of Italian ownership thought Messi was gettable if the number got stupid enough. Messi treated the approach as a category error. He left Barcelona later for a reason that had nothing to do with Inter. Moratti got a better anecdote than a player. The letter, if it existed, is still unopened in the story. That is the only part that sounds like Messi.
          </p>
        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/diego-luna-meniscus-rsl" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHzGZltSPgPaMIYQ7qfUqUFz96nBx9OaDsah1QDhislUHvTHDuK4XKeGP&s=10"
                    alt="Diego Luna Real Salt Lake"
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

            <Link href="/news/nashville-sc-clinch-playoffs" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt47978711340c869e/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-15T230033.321.png?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Nashville SC"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    How Nashville SC Can Clinch an MLS Playoff Spot
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 12, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/noah-allen-chicago-fire" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2231738550/crop/MM5DGNZVG45DEMJRGM5G433XMU5DAORRHE3A====/GettyImages-2231738550.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Noah Allen Chicago Fire"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Chicago Fire Sign Noah Allen on Loan From Inter Miami
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 4, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: September 16, 2026</p>
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