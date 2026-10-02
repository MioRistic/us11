'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MessiEldenseOwner() {
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
    "Messi Is Back in Spanish Football. Not in a Shirt.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Messi is back in Spanish football. Not in a shirt.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Messi Is Back in Spanish Football. Not in a Shirt.
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-02">October 2, 2026</time>
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
            src="https://assets.goal.com/images/v3/blt65bbc97697961dfd/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-09-04T132526.445.png?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Lionel Messi"
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
            Lionel Messi is back in Spanish football. Not as a player. As an owner.
          </p>

          <p>
            CD Eldense announced on October 1 that Messi had acquired the club, making it the second Spanish side to come under his ownership after Cornellà in April. The Alicante club, founded in 1921, described the move as a long-term project focused on sporting and institutional growth. The shares were acquired from Grupo TH.
          </p>

          <p>
            But there is still a line between an announcement and a completed transaction. In September, Eldense had only reached a preliminary agreement. Thursday&apos;s statement moved the process forward, but the acquisition remains subject to a licence from Spain&apos;s Higher Sports Council (CSD). That qualification appears in the reporting from the BBC and Sport, as well as in Eldense&apos;s own announcement. Until the CSD gives its approval, &quot;completed&quot; is the club&apos;s description of the deal, not the regulator&apos;s.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            This is not a Barcelona return
          </h2>

          <p>
            The temptation is obvious. Messi is back in Spanish football. But this is not a Barcelona comeback, and it is not the beginning of another playing contract in La Liga.
          </p>

          <p>
            Eldense are a Segunda División club. After seven matches, they sit 19th with one victory and five points. Their stadium holds fewer than 6,000 spectators. Messi, meanwhile, is 39 and remains an Inter Miami forward. His MLS contract runs through the end of 2028. He has followed Eldense on Instagram. He has not said he intends to play for them.
          </p>

          <p>
            That distinction is important because the name creates a story that the transaction itself does not. Messi is buying into Spanish football. He is not returning to Spanish football as a footballer.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The player is somewhere else
          </h2>

          <p>
            For the moment, Messi&apos;s most immediate connection to football in the week of the Eldense announcement is not Alicante. It is Argentina. Messi arrived in Rosario on October 2 for a farewell that Lionel Scaloni pushed for after Messi retired from the national team in August, a month after Argentina&apos;s World Cup final defeat to Spain.
          </p>

          <p>
            Argentina play Burkina Faso on Saturday. Messi will not play in that match. His final appearance for the national team will instead come on October 6, when Argentina face Benin at the Monumental. Rodrigo De Paul and Giovani Lo Celso are expected to be part of the occasion. There will be a special shirt, and members of the 2022 World Cup-winning squad have been invited.
          </p>

          <p>
            It is the final chapter of Messi&apos;s playing career with the Albiceleste. At almost exactly the same time, another chapter is beginning. Not as Argentina&apos;s No. 10. As a club owner.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Two Messi stories, two different timelines
          </h2>

          <p>
            It would be easy to put the two developments into the same headline and treat them as one story. They are not. The Argentina farewell is about the player Messi has been for almost two decades. The Eldense acquisition is about the role he may have for decades more.
          </p>

          <p>
            One ends on Tuesday in Buenos Aires. The other begins in Alicante, if Madrid&apos;s sports council gives it the final approval it still requires. That is the useful distinction. Messi&apos;s return to Spanish football does not involve a shirt, a number or a place in Eldense&apos;s starting XI. For now, it involves shares, a club and a project.
          </p>

          <p className="font-semibold text-lg mt-10">
            The footballer is saying goodbye. The owner is just getting started.
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

            <Link href="/news/messi-campeones-cup-kily-debut" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2295673367/crop/MM5DGNRSGU5DEMBTHE5G433XMU5DAORQ/GettyImages-2295673367.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Lionel Messi Inter Miami"
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

            <Link href="/news/muller-whitecaps-extension" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2296789253/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORRGE2Q====/GettyImages-2296789253.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Thomas Müller"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Müller Stays in Vancouver, but Only Through the Sprint
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 1, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 2, 2026</p>
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