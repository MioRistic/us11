'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function AlbertKovacCity() {
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
    "Kovac Promised Albert Minutes. The City Interest Is Still a Report.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Kovac promised Albert minutes. The City interest is still a report.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Kovac Promised Albert Minutes. The City Interest Is Still a Report.
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-13">October 13, 2026</time>
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
            src="https://assets.goal.com/images/v3/bltddddd4716914a103/Albert.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Mathis Albert"
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
            Niko Kovac has said the words. Manchester City have not.
          </p>

          <p>
            The Borussia Dortmund coach told the Bundesliga’s website, before Friday’s 2-2 draw with Werder Bremen, that there are no restrictions on what Mathis Albert can do. He called the 17-year-old talented, noted the signs in training, and said that sooner or later, probably sooner, Albert will get a lot more minutes than he was getting half a year ago. That is a public commitment. Albert did not play against Bremen. He has one senior appearance this season, the full 90 minutes in a 5-0 DFB-Pokal win over HEBC Hamburg. He has not played a Bundesliga minute since his debut in April, when he became the youngest American to appear in the league, 15 days before his 17th birthday, ahead of Gio Reyna.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The City line is thinner
          </h2>

          <p>
            Goal reported on Oct. 10, citing its sources, that Manchester City made a summer approach for Albert and that Dortmund rejected it, including loan offers. Bild had earlier written that clubs were prepared to go as high as €15 million. The size of City’s actual offer has not been confirmed. Neither club has spoken. Goal also reported that City are keeping contact with a view to next summer. That is a story about interest. It is not a bid that has been acknowledged.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The window is on the record
          </h2>

          <p>
            Albert’s international window is the part that is on the record. He played in all four of the United States’ matches, scored against Chile at 17 years and 131 days, and held the youngest-scorer mark for four days before Cavan Sullivan took it against Mexico. He won a penalty against Peru. He started against Canada. Pochettino used him. That is why the minutes at Dortmund matter more than the report from England.
          </p>

          <p className="font-semibold text-lg mt-10">
            City already have a USMNT teenager on the way. Sullivan is due in January 2028, the first window after he turns 18. Albert is not that deal. He is a 17-year-old who left the LA Galaxy academy for Dortmund in 2024, who has a coach saying the door is open, and who has a club that has so far refused to open it for anyone else. Kovac’s sentence is the one that can be checked on Sunday. The City approach cannot.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/pochettino-kids-here-to-stay" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/imago-sport-1083944903/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/imago-image.jpeg?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Mauricio Pochettino"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Which of Pochettino’s New USMNT Kids Are Actually Here to Stay?
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 9, 2026</p>
                </div>
              </div>
            </Link>

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

          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 13, 2026</p>
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