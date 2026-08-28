'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function JulianHallRedBullsExtension() {
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
    "Red Bulls Lock Up Julian Hall — and Buy Time They Almost Ran Out Of";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Julian Hall signs four-year Red Bulls extension through 2029-30 ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Red Bulls Lock Up Julian Hall — and Buy Time They Almost Ran Out Of
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
            src="https://assets.goal.com/images/v3/blt97d0b22debfc9406/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-27T141608.615.png?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Julian Hall New York Red Bulls contract extension"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: 2026 Getty Images | Credit: Getty Images | Creator: Getty Images Sport
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            The New York Red Bulls did not just extend a contract. They closed a window that was about to open at the worst possible moment.
          </p>

          <p>
            On Thursday, the club announced that homegrown striker Julian Hall has signed a new four-year deal through the 2029–30 MLS season. He will occupy a U-22 Initiative roster spot. At 18 years and 156 days old, Hall is the youngest American ever to sign that kind of contract — and the first Red Bull academy product to do so.
          </p>

          <p>
            Financial terms were not disclosed. The meaning of the deal is clearer than the salary.
          </p>

          <p>
            Hall’s previous homegrown contract, signed on September 7, 2023, ran through 2026 with an option for 2027. It was due to expire next winter. If the Red Bulls had let that clock run out, one of the most valuable young attackers in the league could have left for nothing. The new agreement stops that. It also puts New York in a stronger position when European clubs eventually come with a real bid, not just scouting reports.
          </p>

          <p>
            That is the real story. This is not a declaration that Hall will still be in Harrison in 2030. It is a club protecting an asset it developed — and giving itself leverage it was about to lose.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Player They Are Tying Down
          </h2>

          <p>
            Hall is 18, born in Manhattan on March 24, 2008, and already carrying the kind of résumé that used to take American forwards half a decade to assemble.
          </p>

          <p>
            He made his MLS debut on September 30, 2023, at 15 — the second-youngest player in league history behind Freddy Adu. This season he has been a first-team regular under Michael Bradley, not a cameo. In league play he has started every appearance and leads the club in goals. Across all competitions he is in double figures. On May 13, he scored all three goals in a 3–2 win over Columbus and became the youngest player in MLS history to record a hat trick, at 18 years and 50 days. Last month he made the MLS All-Star team.
          </p>

          <p>
            The numbers bounce slightly depending on whether you count only MLS or every competition. The shape of the season does not. Hall is no longer a prospect who flashes. He is the Red Bulls’ most important attacker.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg my-8">
            “I’m really happy to sign a new contract with Red Bull New York. This club has been a huge part of my development, and I’m grateful for everyone who has believed in me and helped me get to this point. I feel like I’m continuing to grow as a player, and I’m excited to keep working, keep improving and help this team achieve our goals.”
          </blockquote>

          <p>
            Head of sport Julian de Guzman struck the same tone, which is the correct one for a club that has watched academy players leave too early and too cheaply before.
          </p>

          <blockquote className="border-l-4 border-gray-300 pl-6 italic text-lg my-8">
            “Julian has become an important part of our first team, and we believe he will continue to play a significant role for us. He has earned the trust of his teammates and coaching staff through his performances, his mentality, and the way he continues to grow.”
          </blockquote>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What the U-22 Slot Actually Does
          </h2>

          <p>
            Moving Hall onto a U-22 Initiative contract is not a vanity designation. It is roster architecture.
          </p>

          <p>
            U-22 deals are built for exactly this profile: a young player whose market value is rising faster than his cap number. The mechanism lets the Red Bulls keep a homegrown starter in the first team without burning a Designated Player slot or treating him like a finished veteran. It also signals that New York is no longer improvising around Hall. He is a core piece of the 2026 project.
          </p>

          <p>
            There is a second layer. A four-year term through 2029–30 does not mean Hall is blocked from leaving. It means any club that wants him has to pay New York, not wait him out. For a player already linked, at least in reporting, with Atlético Madrid and RB Leipzig, that distinction matters. Those names should be treated as interest, not imminent transfers. But the interest itself is why this contract exists.
          </p>

          <p>
            Hall has not pretended otherwise. In an interview with ESPN he said Europe has always been the dream — then immediately narrowed the lens: the job now is to help the Red Bulls and keep progressing. That is the right public line. It is also consistent with how most serious American talents talk at 18. The move usually comes after the next big season, not instead of it.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Analysis New York Is Making
          </h2>

          <p>
            The Red Bulls are making three calculations at once.
          </p>

          <p>
            First, they believe Hall is already good enough to build around for a playoff push. After missing the postseason last year, that is not a small claim. An 18-year-old leading the line every week is a stylistic choice as much as a developmental one. Bradley is not easing him in. The club is asking him to decide games.
          </p>

          <p>
            Second, they believe his value is still climbing. A hat trick record, an All-Star appearance, and a full season of starts will do that. Extending now, before the winter window and before another six months of film, is cheaper than extending after a 20-goal campaign — or after a European club has already made the first offer.
          </p>

          <p>
            Third, they are buying time to control the exit. The old deal was running toward a cliff. The new one turns a potential free departure into a sale, or at least into a negotiation on New York’s clock. For a club inside the Red Bull network, that also keeps the Leipzig conversation from becoming a family discount. If Leipzig is serious, they can still get him. They just cannot get him for free.
          </p>

          <p>
            That last point is the most important. American clubs have spent years developing players and then watching the contract expire at the exact moment the market arrives. This is the opposite move: keep the player, raise the price, and decide later whether the next step is 2027, 2028, or later.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What It Does Not Settle
          </h2>

          <p>
            It does not settle Hall’s USMNT timeline. Senior minutes are still earned above youth tournaments, and an MLS All-Star season is a start, not a cap. It does not settle whether he is a long-term No. 9 or a wide forward who can play through the middle. And it does not settle whether New York can actually win enough around him to make staying feel like progress rather than delay.
          </p>

          <p>
            Those questions belong to the rest of the season.
          </p>

          <p>
            For now, the Red Bulls have done the unspectacular, necessary thing. They identified the most valuable player they have produced in years, refused to let the contract become a countdown, and put him on the roster mechanism designed for young talent with a European future.
          </p>

          <p className="font-bold text-xl mt-8">
            Hall remains a Red Bull. Europe remains the horizon. The difference, as of Thursday, is that New York will have a say in how that story ends.
          </p>

        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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

            <Link href="/news/kevin-kelsy-rangers" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/QvHNgtP7/images-3.jpg"
                    alt="Kevin Kelsy Rangers"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Rangers Agree Deal with Portland Timbers for Kevin Kelsy
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 25, 2026</p>
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