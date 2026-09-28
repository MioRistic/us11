'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function UsmntPeruKidsDebut() {
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
    "USMNT's New Era Starts With a 4-1 Win Over Peru — and a Lot of Questions";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT 4-1 Peru. Ellis and Hall score on debut. Sullivan starts at 16.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT&apos;s New Era Starts With a 4-1 Win Over Peru — and a Lot of Questions
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-09-28">September 28, 2026</time>
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
            src="https://assets.goal.com/images/v3/imago-sport-1083844060/crop/MM5DGNJYGA5DEMBRGQ5G433XMU5DAORRHA3Q====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="United States players celebrate during the 4-1 friendly win over Peru in Orlando"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Sports Press Photo
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            The first match after a World Cup is supposed to feel like a hangover. This one felt like a tryout that got out of hand.
          </p>

          <p>
            United States 4, Peru 1. Saturday night at Inter&Co Stadium in Orlando. Eleven debuts. Two teenagers on the scoresheet. Cavan Sullivan in the XI at 16, two days short of 17. Malik Tillman from the spot. Sebastian Berhalter from 25 yards. Justin Ellis after four minutes in his own building. Julian Hall 11 minutes after he stepped on.
          </p>

          <p>
            Mauricio Pochettino said he wanted a look at 2030. He got a result he can sell and a tape he has to watch twice.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What the night actually was
          </h2>

          <p>
            Ellis did the thing Sullivan was hired to do in the headlines. Gio Reyna swung a free kick. Ellis, 19, Orlando City, nodded it to the far post. 1-0. He called it one of the best moments of his life. That is allowed on debut. It is also the sentence that will follow him to Chile on Tuesday.
          </p>

          <p>
            Peru answered in the 15th. Yoshimar Yotún crossed. Gianluca Lapadula lost Peyton Miller and headed in. The visitors started eight players over 30. None of their XI was under 25. The United States starting lineup averaged 23 years and six months. It looked like a mismatch on paper. For 10 minutes it looked like a match.
          </p>

          <p>
            Then the kids came off the bench and the mismatch returned.
          </p>

          <p>
            Mathis Albert, 17, Dortmund, arrived and won a penalty. One desk said the foul started outside the box. The whistle did not. Tillman sent Pedro Gallese the wrong way, or at least past his fingertips. 2-1 in the 66th. Tillman has now scored in three straight U.S. games — two World Cup knockouts and this. Clint Dempsey last did that in the 2016 Copa América. Remember that sentence. Forget the opponent.
          </p>

          <p>
            Hall replaced Ellis in the 62nd. Berhalter picked him out at the far post in the 72nd. 3-1. Berhalter then hit one himself in the 90th. The night needed a veteran to look like he belonged in the next cycle. He did.
          </p>

          <p>
            Attendance: 24,228. Friendly. First step. Not a final.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Sullivan, without the clip
          </h2>

          <p>
            He started. He lasted about an hour. He did not score. He did not assist. He picked up a yellow crashing into Gallese in the 23rd. One sheet had him 25 of 28 on the pass, two chances created, seven touches in the box, 0-for-3 in ground duels.
          </p>

          <p>
            That is a debut, not a documentary.
          </p>

          <p>
            Pochettino talked afterward about personality and protection. About a kid absorbing pressure and needing the people around him to keep him evolving. The coach had spent the week before the roster talking about arrogance without naming a shirt. Sullivan had told a studio he thought he could have changed the Belgium game. Saturday was the first time the program made him prove it without a Union shirt on.
          </p>

          <p>
            He combined. He ran. Peru’s veterans did not panic when he got the ball. That is useful information. The Union tape still matters more than 62 minutes against a side that missed the World Cup. The start matters because Freddy Adu’s 2006 record is the only comparison anyone will print. Sullivan is among the youngest. He is not the youngest until someone runs the birthdays again and puts him on the field longer than an hour.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The list behind the list
          </h2>

          <p>
            Pulisic was in Milan. Balogun was in Monaco. Pepi was in Eindhoven with a muscle. Downs was the replacement nine and did not write the recap. The forward line that finished the night ran through Ellis, Hall, Tillman and a midfielder who hits from distance.
          </p>

          <p>
            Eleven first caps: Sullivan, Ellis, Hall, Miller, Zavier Gozo, Diego Kochen, Brooklyn Raines, Neil Pierre, Frankie Westfield, Albert, Adri Mehmeti. Eight of them teenagers. Most debuts in a U.S. match since a 1-0 loss to Slovenia in 2024. That game ended with nothing. This one ended 4-1. Do not confuse volume of caps with a settled team.
          </p>

          <p>
            Tyler Adams and Yunus Musah were the adults in midfield. Reyna took the free kick that started it. Matt Freese started in goal. Alex Freeman, George Campbell, Auston Trusty, Miller across the back. Campbell was playing his second cap. The spine was not a kids’ table. The goals were.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Tuesday is for
          </h2>

          <p>
            Chile in St. Louis. Energizer Park. Damion Downs’ borrowed MLS home. Mexico and Canada after that. The window is four games. One of them is in the books against a Peru side built to manage minutes, not to stress a new cycle.
          </p>

          <p>
            Pochettino can say the kids are ready. He can also say a penalty that may have been outside the area and a 30-year-old back line are not Spain 2030. Both things fit in the same postgame.
          </p>

          <p className="font-semibold text-lg mt-10">
            Ellis scored because Reyna delivered. Hall scored because Berhalter crossed. Tillman scored because a teenager went to ground. Sullivan started because the country needed to see him in the shirt. The useful hierarchy is that order, not the one that wrote itself on Thursday when the roster dropped. Belgium is still the last competitive night. Orlando is the first exhibition of whatever comes next. Sullivan’s name already traveled. Now it has a cap attached. That was the assignment. He completed it. The finishing was left to everybody else.
          </p>
        </section>

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

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: September 28, 2026</p>
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