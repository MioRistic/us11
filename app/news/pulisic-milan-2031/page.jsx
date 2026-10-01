'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PulisicMilan2031() {
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
    "Milan Want Christian Pulisic Through 2031. The Harder Part Is Getting There";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Milan want Christian Pulisic through 2031. The signature is not there yet.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Milan Want Christian Pulisic Through 2031. The Harder Part Is Getting There
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
            src="https://assets.goal.com/images/v3/getty-2296411105/crop/MM5DCNRZGI5DSNJSHJXG653FHI2DGNR2GEZDC===/GettyImages-2296411105.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Christian Pulisic in action for AC Milan"
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
            Milan want him through 2031. Pulisic says he wants to stay. Nobody has signed.
          </p>

          <p>
            AC Milan want Christian Pulisic to stay beyond the end of his current contract and, ideally, well beyond it. The club&apos;s ambition is a new agreement that would keep the American at San Siro through June 2031. The signature is not there yet.
          </p>

          <p>
            Pulisic&apos;s current contract runs until June 30, 2027, with Milan holding an option to extend it for another season. Italian reporting this week has made clear that the club would prefer something more permanent. La Gazzetta dello Sport reports that Gerry Cardinale wants Pulisic tied down until at least 2031, while Corriere dello Sport has reported a target of reaching an agreement before the end of December. The figures being discussed are around €5 million net per season, plus bonuses.
          </p>

          <p>
            That does not mean a deal is close. It means Milan have made their preference clear. And Pulisic, for his part, has made his.
          </p>

          <p>
            “I am very happy to be at Milan,” Pulisic said Thursday. “I want to continue here.”
          </p>

          <p>
            He also said the club and his representatives are talking. He stopped short of suggesting that an agreement was imminent. That distinction matters.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The timing has changed
          </h2>

          <p>
            There was a point last year when this looked simpler. Milan and Pulisic&apos;s camp came close to an agreement in 2025, according to Italian reports, with a salary in the region of €5 million net per season. The talks subsequently stalled.
          </p>

          <p>
            Now the circumstances are different. Pulisic is closer to the final year of his existing contract. Milan have a unilateral option for 2028, but exercising it would only postpone the bigger question: what happens after that? Gazzetta reported this week that the club does not necessarily see the option as the preferred solution, particularly if the two sides can agree on a longer commitment.
          </p>

          <p>
            Pulisic&apos;s leverage may have changed, too. If the original €5 million figure was close to what Milan were prepared to pay in 2025, the player&apos;s camp could now seek more as his contract moves closer to its expiry. Gazzetta has reported that possibility without publishing a new figure. So there is a familiar football negotiation taking shape: the club wants certainty, while the player&apos;s side has a reason to wait.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The football has given Milan another reason to move
          </h2>

          <p>
            Pulisic&apos;s case is easier to understand when viewed through the last few weeks rather than the last few months. He missed the start of the season after suffering a microfracture to his right fibula during the United States&apos; World Cup knockout-round defeat to Belgium. He returned against Lazio on September 12, providing an assist in Milan&apos;s comeback from 2-0 down to draw 2-2.
          </p>

          <p>
            A week later came the moment Milan wanted. Pulisic scored against Lecce — his first official goal for the club in 2026 — and looked much closer to the player Milan had relied upon during his previous seasons at San Siro. The goal itself was less important than what it represented. It did not restore 2024. It restored a negotiating position.
          </p>

          <p>
            Milan had spent much of the first part of 2026 waiting for Pulisic to get healthy and regain his rhythm. Now he is back in the team&apos;s attacking picture at a time when the club is deciding which players should form the core of its next cycle. Pulisic is clearly part of that conversation. Gazzetta has also reported longer-term plans involving Strahinja Pavlović and Adrien Rabiot. That is context. This story is still the American.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The United States makes the situation more interesting
          </h2>

          <p>
            For the USMNT, Pulisic&apos;s absence from the October international window is unusual. He is normally one of the first names on the team sheet. This time, after his recovery from the World Cup injury, Pulisic and the United States agreed that he would remain in Milan to continue his work at Milanello rather than join Mauricio Pochettino&apos;s squad.
          </p>

          <p>
            The decision has created an interesting contrast. In the United States, Pulisic was absent as Pochettino began looking at the next generation following the World Cup. In Milan, the club is discussing how long it wants the player still treated as the face of the program to remain at the centre of its own project. Those two timelines do not necessarily conflict. They do create an unusual week for a footballer who has spent a decade being the first American name on a European teamsheet.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What happens next
          </h2>

          <p>
            The simplest outcome would be a renewal. The more complicated part is the timing. Milan can exercise the 2028 option if necessary. Pulisic can continue playing under his existing agreement. Neither side is facing an immediate deadline. That gives both parties room to negotiate. It also means that reports of a 2031 contract should not be mistaken for a completed agreement.
          </p>

          <p>
            As of October 1, there is a clear intention from Milan to keep Pulisic long term. There are ongoing discussions. There is a reported financial framework. And there is a player publicly saying that he is happy in Milan and wants to stay. There is not yet a signature.
          </p>

          <p className="font-semibold text-lg mt-10">
            The intention is clear. The contract is not.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
