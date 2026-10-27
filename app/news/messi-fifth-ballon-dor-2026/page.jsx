'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MessiFifthBallonDor() {
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
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const articleTitle =
    'Messi Finished Fifth in the Ballon d’Or. At 39. In MLS.';

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Messi Finished Fifth in the Ballon d’Or. At 39. In MLS.
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-600 mb-5">
            At 39 and playing in Major League Soccer, Lionel Messi still finished fifth in the 2026 Ballon d’Or rankings — ahead of Haaland, Dembélé and several other top European stars.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span aria-hidden="true">•</span>
            <time dateTime="2026-10-28">October 28, 2026</time>
          </div>
        </header>

        <div className="flex items-center gap-3 mb-8">
          <a
            href={facebookShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-200 hover:bg-gray-100 transition"
            aria-label="Share on Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href={twitterShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-200 hover:bg-gray-100 transition"
            aria-label="Share on X"
          >
            <FaTwitter />
          </a>
          <a
            href={whatsappShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-200 hover:bg-gray-100 transition"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <button
            onClick={handleCopyLink}
            className="p-3 rounded-full border border-gray-200 hover:bg-gray-100 transition"
            aria-label="Copy article link"
            type="button"
          >
            <FiCopy />
          </button>
          {copied && <span className="text-sm text-green-600">Link copied</span>}
        </div>

        <figure className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9] bg-gray-100">
          <Image
            src="https://assets.goal.com/images/v3/getty-2301135796/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2301135796.jpg?quality=60&auto=webp&format=pjpg&width=2160"
            alt="Lionel Messi Inter Miami"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-3 py-1.5 rounded font-medium">
            Copyright: Getty Images
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            That is the story.
          </p>

          <p>
            Harry Kane won the 2026 Ballon d’Or on Monday night in London. Kylian Mbappé finished second. Lamine Yamal was third. Rodri took fourth. Then came Lionel Messi.
          </p>

          <p>
            Fifth place.
          </p>

          <p>
            The ranking is not a consolation prize. It is a number that still places the 39-year-old Inter Miami forward ahead of Khvicha Kvaratskhelia, Ousmane Dembélé, Erling Haaland, Michael Olise and Fabián Ruiz. It is the highest any MLS-based player has ever finished in the award’s history. And it arrived after two consecutive years in which Messi was not even nominated.
          </p>

          <h2>What the season actually looked like</h2>

          <p>
            Messi’s club numbers with Inter Miami were high. He scored 45 goals and added 30 assists across 49 appearances in the period that counted. He helped Miami win the MLS Cup at the end of 2025. Those totals would stand out in any league. They are even more noticeable when the player producing them is 39 and operating outside Europe.
          </p>

          <p>
            The bigger part of the ranking, though, came from the World Cup. Messi scored eight goals and provided four assists in eight matches as Argentina reached the final. He finished the tournament with the Silver Ball and Silver Boot. Spain eventually beat Argentina after extra time, but the individual performances kept Messi in the conversation for the Ballon d’Or until the end.
          </p>

          <p>
            Kane’s numbers were higher. He scored 73 goals for club and country. Mbappé and Yamal were central to their teams’ success in Europe. Rodri was decisive for Spain. The voters still found room for Messi immediately behind them.
          </p>

          <h2>Why fifth place is unusual</h2>

          <p>
            Ballon d’Or voters have historically favored players who are competing at the highest level of European club football. Messi spent the relevant period in MLS. He is also older than any other player in the top ten. The combination has rarely produced a finish this high.
          </p>

          <p>
            His previous fifth-place ranking came in 2018, when Luka Modrić won the award. That was the last time Messi finished outside the top three in a year he was nominated, excluding the seasons he was not shortlisted. Returning to that same spot at 39, while based in the United States, is the part that stands out.
          </p>

          <p>
            Inter Miami remain the only MLS club with a player who has finished in the top five of the Ballon d’Or. The ranking does not change the competitive balance of the league. It does, however, show that individual performances in MLS can still register with the journalists who vote on the award when they are paired with a strong World Cup.
          </p>

          <h2>What it means for the rest of the season</h2>

          <p>
            Messi is still under contract with Inter Miami through 2028. He will continue to play in MLS next season. The Ballon d’Or result does not alter his role at the club, but it does confirm that the performances he has produced since arriving in Miami have not been ignored outside the league.
          </p>

          <p>
            Kane’s win ends a long wait for England. Yamal’s third-place finish continues the rise of a younger generation. Messi’s fifth place sits between those two stories. It is not the outcome most people expected when the shortlist was released. It is also not a surprise once the World Cup numbers and the Inter Miami production are taken together.
          </p>

          <p>
            The award has moved on from the period when Messi and Cristiano Ronaldo dominated the top of the rankings. Fifth place at 39, in MLS, is still an unusual way for that period to end.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/news/kily-gonzalez-benched-messi-spain-trip" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative bg-gray-100">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2301840320/crop/MM5DEOBUHA5DCNRQGI5G433XMU5DCNJUHE5DCMRR/GettyImages-2301840320.jpg?quality=60&auto=webp&format=pjpg&width=2160"
                    alt="Lionel Messi"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Kily Gonzalez Benched Messi After Spain Trip. Miami Lost 2-0.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 25, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/nashville-supporters-shield-2026" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative bg-gray-100">
                  <Image
                    src="https://assets.goal.com/images/v3/blt0733c3edcfb41a40/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-22T213603.222.png?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Nashville SC"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Nashville SC Won the 2026 Supporters’ Shield. They Did It the Old-Fashioned Way.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 25, 2026</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 28, 2026</p>
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