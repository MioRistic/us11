
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PochettinoUSMNTDeparture2026() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const title = 'Pochettino Cried When He Left the USMNT. Most People Didn’t.';
  const shareText = title;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              USMNT
            </span>
            <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Mauricio Pochettino
            </span>
            <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Manchester United
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-11-14">November 14, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={20} />
            </a>

            <button
              onClick={handleCopyLink}
              aria-label="Copy article link"
              className="p-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition"
            >
              <FiCopy size={20} />
            </button>

            {copied && (
              <span className="text-sm text-gray-500">
                Link copied!
              </span>
            )}
          </div>
        </header>

        {/* HERO IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2304964763/crop/MM5DGOJTGY5DEMRRGQ5G433XMU5DGOBYHI4DK===/GettyImages-2304964763.jpg"
            alt="Mauricio Pochettino during his departure from the USMNT"
            fill
            className="object-cover"
            priority
            unoptimized
          />

          <figcaption className="absolute bottom-3 right-3 bg-black/75 text-white text-[10px] sm:text-xs px-3 py-2 rounded font-medium text-right leading-relaxed">
            Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE BODY */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Mauricio Pochettino sat between JT Batson and Cindy Parlow Cone on Friday and struggled to finish a sentence. He is not a man who usually loses control in public. On this occasion he did. He wiped his eyes with a napkin more than once, paused, and called the decision to leave the United States for Manchester United one of the most difficult of his career. “I’m a very emotional guy,” he said. “In some part, this is a very sad decision.”
          </p>

          <p>
            The tears were real. The timing made them more complicated.
          </p>

          <p>
            Pochettino had signed a new deal in the summer that was meant to take him through the 2030 World Cup. Roughly three months later, Manchester United triggered the release clause. The club is in the relegation zone after its worst start in decades. Michael Carrick was sacked on Thursday. By Friday morning the job was Pochettino’s. He will still take the two Nations League games against Haiti this weekend, then fly to Manchester and start work on November 18. His first match is at Anfield against Liverpool four days later.
          </p>

          <p>
            He described the sequence as something that “happened so quickly.” Contact began on Sunday. By Thursday the agreement was done. United paid a fee reported in the region of £7–9 million. Pochettino will bring some of his staff with him. Steve Cherundolo will handle the December camp that was already scheduled. The federation has already begun looking for a permanent replacement. Emma Hayes is among those involved in the search.
          </p>

          <p>
            That is the practical side of the story. The emotional side is what made the press conference unusual.
          </p>

          <p>
            Pochettino has always worn his feelings openly. He has cried after losses and after big wins. Friday was different because he was choosing to leave. He made the point himself. “Normally it’s the opposite,” he said. “You get sacked and you cry because you want to stay.” This time he was leaving a project he said he believed in, one he had only recently extended, because an opportunity he described as rare had arrived. He thanked Batson and Parlow Cone for being transparent and for putting people first. Batson reached over and patted him on the back while he composed himself.
          </p>

          <p>
            None of that changes the basic facts. The contract he signed in August no longer exists. The cycle he was supposed to lead through 2030 will now be led by someone else. The United States will play Haiti twice under Pochettino and then begin again. The relationship with the federation ends on relatively good terms, which is not nothing, but the project resets anyway.
          </p>

          <p>
            The question of whether anyone else cried is less interesting than why so few people seemed surprised. Pochettino was always a coach with a high profile and a clause in his contract. Once United’s situation deteriorated, the possibility existed. The speed still caught people off guard, including, apparently, some inside the federation. But the outcome itself did not. National-team jobs of this type are temporary by nature. Coaches who want to manage in the Premier League tend to take those jobs when they are offered. Pochettino has said he never ruled out a return to club football. When the right one appeared, he took it.
          </p>

          <p>
            That does not make the tears fake. It does make them incomplete as an explanation. He is leaving a group of players he clearly likes, a federation that gave him a long runway, and a cycle that was still in its early stages. He is also leaving for one of the biggest jobs in the sport, with a contract until 2029 and the chance to rebuild a club that is currently near the bottom of the table. Both things can be true at the same time. He can mean it when he says the decision was difficult and still be certain it was the right one.
          </p>

          <p>
            For the USMNT the immediate priority is the two matches against Haiti. Pochettino will try to leave the team in a position to advance. After that the focus shifts to who comes next and how much of what he put in place survives the change. The federation will have the money from the release clause. It will also have the knowledge that even a coach who publicly committed to 2030 can be gone by November.
          </p>

          <p>
            Pochettino will spend the next few days in the United States, then the next few years at Old Trafford. On Friday he sat in front of the US Soccer backdrop, wiped his eyes, and said the hardest part was over. The rest of the work, for both him and the team he is leaving, starts now.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: November 14, 2026</p>
            <p>Written by Mio Ristić</p>
          </div>

          <Link
            href="/news"
            className="mt-4 sm:mt-0 hover:text-black transition-colors"
          >
            ← Back to News
          </Link>
        </footer>

      </div>
    </article>
  );
}
