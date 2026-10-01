'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MullerWhitecapsExtension() {
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
    "Müller Stays in Vancouver, but Only Through the Sprint";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Thomas Müller extends with Vancouver through the 2027 MLS Sprint Season')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Müller Stays in Vancouver, but Only Through the Sprint
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-01">October 1, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2296789253/crop/MM5DGNRQGA5DEMBSGU5G433XMU5DAORRGE2Q====/GettyImages-2296789253.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Thomas Müller in action for Vancouver Whitecaps"
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
            Thomas Müller is staying in Vancouver. Not for the new calendar. For the bridge.
          </p>

          <p>
            Whitecaps announced the Designated Player extension on Sept. 29. It runs through the 2027 MLS Sprint Season, the shortened stretch from February to May before the league flips to a summer-to-spring calendar. Müller’s old deal ended with 2026. On his own channel he put the new date at June 30, 2027. That is about six months, not a year. Axel Schuster has already said the next piece, 2027-28, is possible if Müller still looks like a starter and not a name filling a DP slot.
          </p>

          <p>
            That is the whole negotiation. Schuster said the talks were not complicated. The term was. Müller is 37. He does not need another season to prove the Bayern career. He needs to know he is not the guy people watch and say should have stopped. He told the club the body still feels good and the week still feels like fun. Schuster’s version is colder: Müller is going contract to contract, and next June is far enough that he wants the paper now.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The tape is why Vancouver said yes
          </h2>

          <p>
            Since he arrived in August 2025: 45 appearances, 19 goals, 12 assists, 31 goal contributions. A 19-4-6 record in his 29 MLS starts, playoffs included. Western Conference title. Canadian Championship. An MLS Cup final, lost 3-1 to Inter Miami. This season he has started 23 of 32 games across everything, with 10 goals and eight assists, and he leads the team in chances created in league play. All-Star. Five Team of the Matchday nods. The club sits near the top of the West. None of that is a farewell tour.
          </p>

          <p>
            Do not write “through 2027” without the word sprint. Some desks already did. The sprint is the product MLS is selling while it changes calendars. Müller is the product Vancouver is selling while it tries to turn one final into a second. He does not take a roster charge. He takes a DP charge. That only works if the 10-and-8 keeps looking like this in October, not like a 37-year-old managing minutes in April.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            June is the next conversation
          </h2>

          <p>
            Schuster’s line that the club has reached new heights since Müller arrived is true and also the risk. The heights were a final they did not win. The extension does not close that. It keeps the guy who helped them get there through one more spring, and leaves June 2027 as the next conversation instead of December.
          </p>

          <p className="font-semibold text-lg mt-10">
            Müller came from 17 years at Bayern, 13 league titles, a World Cup. He could have stopped in Munich. He did not. Vancouver’s bet is that he will not stop in May either, as long as the runs still start with him. The contract says they get until June to find out.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/usmnt-tim-ream-captaincy" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt068fb33c5ea803c3/GOAL_-_Blank_WEB_-_Facebook.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Tim Ream"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    St. Louis Honors World Cup Captain Tim Ream While the USMNT Looks for the Next Armband
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 29, 2026</p>
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

          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 1, 2026</p>
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
