'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function SergiRobertoGalaxy() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
    setMounted(true);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle =
    "LA Galaxy Sign Former Barcelona Captain Sergi Roberto: Leadership, Versatility and Winning DNA Arrive in Carson";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            LA Galaxy Sign Former Barcelona Captain Sergi Roberto: Leadership, Versatility and Winning DNA Arrive in Carson
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-09">August 9, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2208662373/crop/MM5DINJSHA5DENJUG45G433XMU5DAORQ/GettyImages-2208662373.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Sergi Roberto LA Galaxy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            The LA Galaxy continue their midseason roster rebuild with a distinctly Barcelona flavour.
          </p>

          <p>
            On Saturday the club confirmed the signing of Spanish midfielder <strong>Sergi Roberto</strong> as a free agent. The 34-year-old has agreed a contract through June 30, 2028, with a club option for the 2028-29 season, pending receipt of his P-1 visa.
          </p>

          <p>
            Roberto arrives after two seasons at Como 1907 in Serie A and an 18-year association with FC Barcelona that produced 25 major trophies. He will reunite with former Barça teammate Riqui Puig and join a Galaxy side still searching for consistency after winning the 2024 MLS Cup.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">A career defined by adaptability</h3>

          <p>
            Roberto made his Barcelona first-team debut at 18 and went on to make 373 appearances, scoring 19 goals and providing 43 assists. He won seven La Liga titles, two Champions Leagues, six Copas del Rey and a host of other silverware. In his final season at Camp Nou he served as club captain.
          </p>

          <p>
            What always set him apart was positional flexibility. Under Luis Enrique he once featured in seven different roles in a single season. Coaches used him as a central midfielder, defensive midfielder, box-to-box No. 8, right-back and even occasionally higher up the pitch. Luis Enrique once said of him: “Except in goal, he could play in any position… and do it well.”
          </p>

          <p>
            That versatility remained useful at Como, where he made 37 appearances across two campaigns, contributed to a top-10 finish in the club’s first season back in Serie A, and helped the side secure its first-ever Champions League qualification in 2025-26.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">What he brings to the Galaxy</h3>

          <p>
            Galaxy general manager Will Kuntz framed the signing clearly: “Sergi brings a combination of leadership, technical quality, tactical intelligence and championship experience that few players have. He has been a key member of some of the greatest teams of his generation and understands not only what it takes to win, but what it means to be a winning team. Sergi’s character, positional versatility and leadership will be invaluable.”
          </p>

          <p>
            Those traits address several current needs in Carson.
          </p>

          <p>
            Galaxy have lacked consistent midfield control and experienced leadership since their 2024 title. Roberto offers calm on the ball, accurate progressive passing and an ability to dictate tempo — qualities that should complement Marco Reus and, when fully fit, Riqui Puig. His willingness to fill multiple roles also gives Greg Vanney tactical flexibility at a time when the squad is still being reshaped.
          </p>

          <p>
            At 34 he is no longer the athletic dynamo of his mid-20s, and recent minutes at Como suggest he is best used in carefully managed doses rather than as a 90-minute every-week starter. But his football intelligence and professional habits remain high. He is the type of player who can organise those around him, mentor younger squad members and raise standards in training.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Context and timing</h3>

          <p>
            The move comes one day after the Galaxy agreed a loan for Hirving “Chucky” Lozano from San Diego FC and follows the earlier arrival of Japanese forward Kyogo Furuhashi. The club is clearly trying to inject both quality and experience into a roster that has struggled for consistency in 2026.
          </p>

          <p>
            Roberto’s arrival also carries symbolic weight. He is the latest in a line of former Barcelona players to choose MLS, and his presence should ease Puig’s reintegration after two injury-hit seasons. The pair shared a dressing room between 2018 and 2022 and won a La Liga title and Copa del Rey together.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Looking ahead</h3>

          <p>
            Sergi Roberto will not transform the Galaxy overnight. He is not a Designated Player-level attacker or a pure destroyer. What he offers is rarer in the current squad: proven winning experience at the highest level, genuine positional versatility, and the quiet authority of a player who has captained one of the world’s biggest clubs.
          </p>

          <p className="font-bold text-xl mt-8">
            If Vanney can integrate him effectively — rotating him intelligently and leaning on his leadership — Roberto has the profile to become one of the more influential mid-season additions of the year. For a Galaxy side still searching for its post-title identity, that combination of pedigree and practicality is exactly what the moment requires.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16 pt-10 border-t border-zinc-200">
          <h3 className="text-2xl font-bold mb-6">Next to read</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/la-galaxy-chucky-lozano-loan" className="group block">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2249117363/crop/MM5DGOJVHA5DEMRSGY5G433XMU5DAORSGA3A====/GettyImages-2249117363.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Chucky Lozano"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    LA Galaxy Finalizing Deal for Chucky Lozano on Loan from San Diego FC
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 6, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/gonzalo-tapia-columbus-crew" className="group block">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/KzsYw3SH/Getty-Images-2279876069.webp"
                    alt="Gonzalo Tapia"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Columbus Crew Add Chilean Forward Gonzalo Tapia on Loan from São Paulo
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 6, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/larry-berg-mls-commissioner" className="group block">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/bltc33c70b1ae46424b/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/Garber_Berg_Rosenthal%20at%20Press%20Conference.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Larry Berg"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Larry Berg and the One Opportunity MLS Cannot Afford to Miss
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 6, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/messi-leagues-cup-record" className="group block">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2289259073/crop/MM5DGMJYGQ5DCNZZGE5G433XMU5DGOJRHI2DK===/GettyImages-2289259073.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Messi Leagues Cup"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Messi Sets Leagues Cup Scoring Record as Inter Miami Open Tournament with 4-2 Win
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 6, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: August 9, 2026</span>
          <Link href="/news" className="hover:text-gray-800">
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}