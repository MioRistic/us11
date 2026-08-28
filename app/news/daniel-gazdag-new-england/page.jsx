'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function DanielGazdagNewEngland() {
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
    "Columbus Bought Out Daniel Gazdag. New England Is Ready to Take the Version Philadelphia Used to Have.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Columbus buy out Gazdag as New England finalize signing ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Columbus Bought Out Daniel Gazdag. New England Is Ready to Take the Version Philadelphia Used to Have.
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-28">August 28, 2026</time>
          </div>

          <div className="flex gap-3 mt-6">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <FaTwitter />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <FaWhatsapp />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              aria-label="Copy link"
            >
              <FiCopy />
            </button>
          </div>
        </header>

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://i.ibb.co/67G3qLs1/Getty-Images-2156665659-2048x1365.webp"
            alt="Daniel Gazdag Columbus Crew New England Revolution"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images
Creator: Horvath Tamas
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            The Columbus Crew made it official on Friday. Daniel Gazdag is no longer their player.
          </p>

          <p>
            The club announced a mutual contract termination and a buyout of a deal that had been guaranteed through 2027, with an option for 2028. The Designated Player slot he occupied is open again. That part is settled.
          </p>

          <p>
            What comes next is not, at least not on club letterhead. Sources told The Athletic that the New England Revolution are finalizing a signing. Gazdag would not be a Designated Player in Foxborough. New England play Columbus on Sunday at ScottsMiracle-Gro Field. Nobody has said whether he could be available that quickly.
          </p>

          <p>
            That is the transaction. The story underneath it is simpler: Columbus paid real money for a proven MLS scorer, asked him to become a different kind of midfielder, and 16 months later decided the experiment was expensive enough.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            How He Got Here
          </h2>

          <p>
            Gazdag arrived in MLS in 2021 from Budapest Honvéd and became one of the most reliable attackers in the league with Philadelphia. In an attacking midfield role for a high-press, transition team, he left the Union as the club’s all-time leading scorer: 72 goals and 24 assists in 161 appearances across all competitions. He made the MLS Best XI in 2022. For three full seasons he was Philadelphia’s primary goal threat from midfield, not a luxury piece.
          </p>

          <p>
            On April 11, 2025, Columbus bought that production. The Crew sent the Union $4 million guaranteed and up to $500,000 more in a cash-for-player trade, one of the early examples of the league’s new out-of-pocket trade mechanism. A month later they extended him through 2027 with a 2028 option and parked him in a DP slot opened by Cucho Hernández’s sale to Real Betis. The idea was obvious. Replace a goalscorer with a goalscorer.
          </p>

          <p>
            It never looked like Philadelphia.
          </p>

          <p>
            Gazdag’s first Crew goal took 16 MLS games. He was asked to be more involved in buildup and circulation in a possession side that did not play the way Jim Curtin’s Union had. He finished 2025 on the bench in the last two regular-season matches and all three playoff games. Across two seasons in Columbus he scored seven goals and added five assists in 43 regular-season appearances. This year: three goals and one assist in 17 MLS matches, and he had not started the last three. That is not a collapse into irrelevance. It is a DP who stopped deciding games.
          </p>

          <p>
            When a club pays $4 million and then extends the contract, that is the bet. When the same club buys the contract out 16 months later, that is the admission.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why New England Makes More Sense Than Columbus Did
          </h2>

          <p>
            The Revolution are not signing the Columbus version. They are signing the theory of the Philadelphia version, at a discount, without using a DP slot.
          </p>

          <p>
            That last detail matters as much as the football. Jack Harrison is already a Designated Player in New England. Carles Gil has been the team’s creative center for years. Adding Gazdag as a third DP would have been roster malpractice. Taking him after a buyout, on a regular contract, is how a club adds a proven MLS finisher without breaking the structure around two existing stars.
          </p>

          <p>
            The tactical fit is the other half. Gazdag was at his best arriving late into the box, attacking space, and punishing teams that had already been stretched. That is closer to how New England have used Gil and, more recently, Harrison than it is to Columbus asking him to help build from deeper areas. If the Revs play him as a second attacking midfielder or a No. 10 who is allowed to hunt the penalty spot, they are putting him back in the job that made him expensive. If they ask him to be a connector in a slow possession game, they will get the Columbus tape again.
          </p>

          <p>
            He is 30. This is not a development signing. It is a reset. The upside is a player who has already proven he can score at this level in the right system. The risk is that two years of diminishing returns were not just a schematic mismatch. Sometimes the drop is real. New England are betting it was the system.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Columbus Actually Bought With the Buyout
          </h2>

          <p>
            The Crew did not cut Gazdag to save face. They cut him to open a DP slot before the window closes on September 2.
          </p>

          <p>
            Columbus are in advanced talks for Uruguayan attacking midfielder Santi Rodríguez from Botafogo. The deal is described as complicated and very advanced, not completed. Rodríguez would be the player meant to fill the hole Gazdag leaves — and, in theory, the hole Cucho left before that.
          </p>

          <p>
            That is the Crew’s summer in miniature. Other pieces moved. Veterans came in. A DP who was not producing came off the books. Now they are trying to spend the slot on someone they believe still has an upward curve. Whether Rodríguez arrives is a separate story. The Gazdag decision only makes sense if Columbus already has a plan for that roster spot. A buyout with no replacement is just an expensive confession.
          </p>

          <p>
            Sunday’s match against New England is an awkward coda. If the Revolution signing is completed in time, Gazdag could theoretically face the club that just paid to make him available. Even if he does not play, the optics are the same: Columbus will spend 90 minutes looking at a problem they decided they could not solve.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Honest Read
          </h2>

          <p>
            Gazdag was never a failed MLS player. He was a successful Union player who was asked to become a Crew player and never quite did. New England are not buying a mystery. They are buying a known quantity at a moment when his price, in roster terms, has collapsed.
          </p>

          <p>
            That is why the deal works for both sides if it closes. Columbus get a DP slot and a clean break from a contract that no longer matched production. New England get a 30-year-old who has already scored at a star level in this league, without burning a designated slot, and with two creators already on the roster who can put him in the positions Philadelphia used to find.
          </p>

          <p className="font-bold text-xl mt-8">
            The only thing left is the announcement in Foxborough. Until that lands, the accurate line is this: the Revolution are finalizing it. The Crew have already finished their half.
          </p>

        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/julian-hall-red-bulls-extension" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt97d0b22debfc9406/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-27T141608.615.png?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Julian Hall New York Red Bulls"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Red Bulls Lock Up Julian Hall — and Buy Time They Almost Ran Out Of
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 28, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/kily-gonzalez-inter-miami" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-1736243127/crop/MM5DGNZQGA5DEMBYGE5G433XMU5DAORUGI======/GettyImages-1736243127.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Kily González Inter Miami"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Inter Miami Appoint Kily González — What the Rosario Connection Actually Brings
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 28, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/owen-wolff-sporting-kc" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/rG89HZj4/01jfvndt3mzgqws5t022.webp"
                    alt="Owen Wolff Sporting Kansas City"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Sporting Kansas City Complete Signing of USYNT Midfielder Owen Wolff from Austin
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 26, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/dejan-joveljic-seattle" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt1f59038c75fb0191/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-11-30T215714.252.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Dejan Joveljić Seattle Sounders"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Seattle Sounders Acquire Dejan Joveljić in $6 Million Cash Trade
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 25, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 28, 2026</p>
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