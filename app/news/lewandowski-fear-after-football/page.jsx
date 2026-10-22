'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function LewandowskiFearAfterFootball() {
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
    "Lewandowski Has Fear of Life After Football. He Also Thinks Olise Should Be in the Ballon d’Or Conversation.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Lewandowski has fear of life after football. He also thinks Olise should be in the Ballon d’Or conversation.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Lewandowski Has Fear of Life After Football. He Also Thinks Olise Should Be in the Ballon d’Or Conversation.
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-22">October 22, 2026</time>
          </div>
        </header>

        <div className="flex items-center gap-3 mb-8">
          <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Share on Facebook">
            <FaFacebookF />
          </a>
          <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Share on X">
            <FaTwitter />
          </a>
          <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Share on WhatsApp">
            <FaWhatsapp />
          </a>
          <button onClick={handleCopyLink} className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Copy link">
            <FiCopy />
          </button>
          {copied && <span className="text-sm text-green-600">Copied</span>}
        </div>

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKikJ--39TDT1sM0AWUeA0grnRGIrjoWTuDl-wuz5MXkbmHJ1dxSRnamxI&s=10"
            alt="Robert Lewandowski in Chicago"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: AFP via Getty Images / Kamil Krzaczynski
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            Robert Lewandowski is 38 and playing in MLS. He still scores. He still starts. And he still has questions he cannot answer.
          </p>

          <p>
            In a wide-ranging conversation published this week, the Chicago Fire striker spoke about the Ballon d’Or, the level of Major League Soccer, and what comes after he stops playing. The most striking part was not his take on Lamine Yamal or Harry Kane. It was the admission that he is afraid of the next stage of his life.
          </p>

          <p className="font-medium">
            “Of course I have that fear,” Lewandowski said. “I have so many questions that I don’t have the answer to yet.”
          </p>

          <p>
            He has been preparing for retirement for years. He has a family. He has money. He has already begun thinking about what he might do next. None of that removes the uncertainty. Football has been the center of his life since he was a teenager. He does not know how it will feel when it is gone.
          </p>

          <p>
            That honesty sits alongside a clearer view of the present.
          </p>

          <p>
            On the Ballon d’Or, Lewandowski is backing Lamine Yamal. He called the Barcelona winger “amazing, especially for his age.” At the same time, he went out of his way to praise Michael Olise. He described the Bayern Munich winger as a “game-changer” and said that if Olise had scored once or twice at the World Cup, he would be in the same conversation as Yamal and Kane.
          </p>

          <p>
            He also noted Kane’s numbers at Bayern. The England captain scored 61 goals in 51 appearances last season, more than Lewandowski managed in his own 55-goal campaign in 2020-21. Lewandowski called the production “amazing” and said Bayern had been missing a striker of that type after he left.
          </p>

          <p>
            None of this is a complaint. It is an observation from someone who spent years competing for the same individual award and who now watches the race from outside Europe.
          </p>

          <p>
            His own numbers in Chicago are more modest. Six goals and four assists in just over 1,000 minutes. The Fire have clinched a playoff place for a second straight season. Lewandowski has not scored in his last six league games, but he has contributed assists and the team sits higher in the Eastern Conference than it did a year ago.
          </p>

          <p>
            The adjustment has not been seamless. He spent his first weeks in a hotel. He has played on turf more often in a few months in MLS than he did across his entire European career. He has had to learn how hard to push teammates who are not used to the standards he brought from Bayern and Barcelona.
          </p>

          <p>
            “Sometimes it is also a huge challenge for me because I don’t know exactly where is the line that I should step back or step up,” he said.
          </p>

          <p>
            He believes the connection will come. He has four weeks until the playoffs begin. He thinks that is enough time to improve the way the team creates chances and keeps the ball.
          </p>

          <p>
            What he cannot control is the calendar. At 38, every season shortens the list of remaining years. The fear he described is not about money or purpose. It is about identity. He has spent most of his adult life being a footballer. He does not yet know who he will be when that stops.
          </p>

          <p>
            The Ballon d’Or will be decided in a few days. Lewandowski has made his preference clear. The rest of his future is less settled. He has questions. He does not have the answers yet.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/news/americans-abroad-reyna-pulisic-mckennie-aaronson" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2300107618/crop/MM5DENZWGM5DCNJVGQ5G433XMU5DAORRGQ2A====/GettyImages-2300107618.jpg?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Gio Reyna"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Reyna Scored Against PSG. Pulisic Is Finding His Feet. McKennie Started in a Collapse. Aaronson Watched From the Bench.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 20, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/damet-st-louis-first-job" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt577ca013fa3871fc/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-10T122830.270.png?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Yoann Damet"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Damet Is 36 and in His First Job. St. Louis Is One Game From a Trophy.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 20, 2026</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 22, 2026</p>
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