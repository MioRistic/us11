'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function LeaguesCupMLSResults() {
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
    "MLS Clubs Make Strong Statement in Leagues Cup as Inter Miami and Sullivan Feature";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            MLS Clubs Make Strong Statement in Leagues Cup as Inter Miami and Sullivan Feature
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-10">August 10, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2289653969/crop/MM5DIMJUHA5DEMZTGM5G433XMU5DAORSGE3A====/GettyImages-2289653969.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Leagues Cup MLS results"
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
            The second round of Leagues Cup group-stage action produced a largely positive set of results for Major League Soccer. Six of the eight MLS sides in action on Sunday secured victories, while Inter Miami and several other clubs continue to navigate a competitive group stage against strong Liga MX opposition.
          </p>

          <p>
            The standout individual performance once again belonged to Philadelphia Union’s 16-year-old midfielder <strong>Cavan Sullivan</strong>. In a 3-1 win over Necaxa at Subaru Park, Sullivan provided the assist for Nathan Harriel’s early opener and then scored himself in the 53rd minute — his first goal of the Leagues Cup.
          </p>

          <p>
            Sullivan has now started 10 of the Union’s last 11 matches across all competitions and has contributed two goals and four assists during that stretch. At just 16, he is already influencing games at both ends of the pitch.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Full MLS Results – Leagues Cup 2026 (Latest Round)</h3>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 pr-4 font-semibold">MLS Team</th>
                  <th className="text-left py-3 pr-4 font-semibold">Score</th>
                  <th className="text-left py-3 pr-4 font-semibold">Opponent</th>
                  <th className="text-left py-3 font-semibold">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Philadelphia Union</td>
                  <td className="py-3 pr-4">3-1</td>
                  <td className="py-3 pr-4">Necaxa</td>
                  <td className="py-3 text-green-600 font-medium">Win</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Seattle Sounders</td>
                  <td className="py-3 pr-4">3-0</td>
                  <td className="py-3 pr-4">Querétaro</td>
                  <td className="py-3 text-green-600 font-medium">Win</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Chicago Fire</td>
                  <td className="py-3 pr-4">3-1</td>
                  <td className="py-3 pr-4">Santos Laguna</td>
                  <td className="py-3 text-green-600 font-medium">Win</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Nashville SC</td>
                  <td className="py-3 pr-4">4-1</td>
                  <td className="py-3 pr-4">Atlético San Luis</td>
                  <td className="py-3 text-green-600 font-medium">Win</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Austin FC</td>
                  <td className="py-3 pr-4">3-0</td>
                  <td className="py-3 pr-4">Puebla</td>
                  <td className="py-3 text-green-600 font-medium">Win</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">San Diego FC</td>
                  <td className="py-3 pr-4">1-0</td>
                  <td className="py-3 pr-4">Tijuana</td>
                  <td className="py-3 text-green-600 font-medium">Win</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">New York City FC</td>
                  <td className="py-3 pr-4">1-2</td>
                  <td className="py-3 pr-4">Cruz Azul</td>
                  <td className="py-3 text-red-600 font-medium">Loss</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Portland Timbers</td>
                  <td className="py-3 pr-4">1-3</td>
                  <td className="py-3 pr-4">Club América</td>
                  <td className="py-3 text-red-600 font-medium">Loss</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-4">Previous Key Results (Round 1 & 2)</h3>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 pr-4 font-semibold">MLS Team</th>
                  <th className="text-left py-3 pr-4 font-semibold">Score</th>
                  <th className="text-left py-3 pr-4 font-semibold">Opponent</th>
                  <th className="text-left py-3 font-semibold">Result</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Inter Miami</td>
                  <td className="py-3 pr-4">4-2</td>
                  <td className="py-3 pr-4">Atlético San Luis</td>
                  <td className="py-3 text-green-600 font-medium">Win</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Inter Miami</td>
                  <td className="py-3 pr-4">1-2</td>
                  <td className="py-3 pr-4">Monterrey</td>
                  <td className="py-3 text-red-600 font-medium">Loss</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Charlotte FC</td>
                  <td className="py-3 pr-4">3-0 / 2-0</td>
                  <td className="py-3 pr-4">Pumas / Atlas</td>
                  <td className="py-3 text-green-600 font-medium">2 Wins</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">FC Cincinnati</td>
                  <td className="py-3 pr-4">3-1 / 2-0</td>
                  <td className="py-3 pr-4">Pachuca / Pumas</td>
                  <td className="py-3 text-green-600 font-medium">2 Wins</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Columbus Crew</td>
                  <td className="py-3 pr-4">3-1 / 2-1</td>
                  <td className="py-3 pr-4">Atlas / Pachuca</td>
                  <td className="py-3 text-green-600 font-medium">2 Wins</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">FC Dallas</td>
                  <td className="py-3 pr-4">2-0 / 1-0</td>
                  <td className="py-3 pr-4">Querétaro / Chivas</td>
                  <td className="py-3 text-green-600 font-medium">2 Wins</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">LAFC</td>
                  <td className="py-3 pr-4">1-1 (5-4 pens) / 1-0</td>
                  <td className="py-3 pr-4">Chivas / Toluca</td>
                  <td className="py-3 text-green-600 font-medium">Win + Draw</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Real Salt Lake</td>
                  <td className="py-3 pr-4">1-1 / 4-0</td>
                  <td className="py-3 pr-4">Tigres / Atlante</td>
                  <td className="py-3 text-green-600 font-medium">Draw + Win</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 pr-4 font-medium">Orlando City</td>
                  <td className="py-3 pr-4">2-1 / 1-2</td>
                  <td className="py-3 pr-4">Monterrey / León</td>
                  <td className="py-3 text-yellow-600 font-medium">Win + Loss</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Inter Miami opened the tournament with a 4-2 victory over Atlético San Luis, in which Lionel Messi scored twice and became the all-time leading goalscorer in Leagues Cup history. They followed that up with a 1-2 defeat to Monterrey, leaving them on three points and still very much in the mix for qualification.
          </p>

          <p>
            After two matchdays, a clear group of frontrunners has emerged. Charlotte FC, FC Cincinnati, Columbus Crew and FC Dallas all sit on six points. Real Salt Lake and LAFC are also well positioned, while Philadelphia Union’s recovery win on Sunday keeps them firmly in the conversation.
          </p>

          <p>
            The next round of fixtures, beginning Tuesday, will be decisive for several teams still sitting on three points or fewer. With only the top four MLS sides progressing to the knockout stage, the margin for error is shrinking quickly.
          </p>

          <p className="font-bold text-xl mt-8">
            Sullivan’s continued emergence remains the most compelling individual storyline. Whether Inter Miami can rediscover their early form and whether Sullivan can maintain this level of influence will be two of the key narratives as the tournament heads toward the decisive stage.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16 pt-10 border-t border-zinc-200">
          <h3 className="text-2xl font-bold mb-6">Next to read</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/sergi-roberto-la-galaxy" className="group block">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2208662373/crop/MM5DINJSHA5DENJUG45G433XMU5DAORQ/GettyImages-2208662373.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Sergi Roberto"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    LA Galaxy Sign Former Barcelona Captain Sergi Roberto
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 9, 2026</p>
                </div>
              </div>
            </Link>

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
          <span>Published: August 10, 2026</span>
          <Link href="/news" className="hover:text-gray-800">
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}