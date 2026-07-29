'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MLSvsLigaMXAllStar() {
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

  const articleTitle = "MLS vs. Liga MX: The Rivalry That Never Sleeps Arrives in Charlotte";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('MLS vs Liga MX All-Star Game 2026 in Charlotte ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            MLS vs. Liga MX: The Rivalry That Never Sleeps Arrives in Charlotte
          </h1>
          <p className="text-gray-500 text-sm">
            Published: July 29, 2026 · Author: Mio Ristić
          </p>
        </header>

        {/* SHARE BUTTONS */}
        <div className="flex items-center gap-3 mb-8">
          <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition">
            <FaFacebookF size={16} />
          </a>
          <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition">
            <FaTwitter size={16} />
          </a>
          <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition">
            <FaWhatsapp size={16} />
          </a>
          <button onClick={handleCopyLink} className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition">
            <FiCopy size={16} />
          </button>
        </div>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2230677284/crop/MM5DIMBQGA5DEMRVGA5G433XMU5DAORSGA4Q====/GettyImages-2230677284.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="MLS vs Liga MX All-Star Game 2026"
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
            CHARLOTTE — Ten days after the final whistle of the 2026 World Cup, North American soccer refuses to take a breath.
          </p>

          <p>
            On Wednesday night at Bank of America Stadium, the best available players from Major League Soccer and Liga MX will face each other in the fifth edition of the All-Star Game format that has become one of the most consistent measuring sticks between the two leagues. Kickoff is set for 8 p.m. ET, live on Apple TV.
          </p>

          <p>
            This is not a midsummer exhibition that exists in isolation. It is the first major club-level chapter of the post-World Cup era — and another reminder that the MLS–Liga MX rivalry has evolved far beyond occasional friendlies.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Series With Weight
          </h2>

          <p>
            MLS holds a 3-1 lead in the All-Star series:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>2021 in Los Angeles: 1-1 (MLS won on penalties)</li>
            <li>2022 in St. Paul: MLS 2-1</li>
            <li>2024 in Columbus: Liga MX 4-1</li>
            <li>2025 in Austin: MLS 3-1</li>
          </ul>

          <p>
            The 2024 thrashing remains the clearest statement Liga MX has made in this format. Everything since then has tilted back toward the American side. Last year’s comfortable win in Austin suggested the gap may be narrowing — or at least fluctuating more than either league would like to admit.
          </p>

          <p>
            Tonight’s game arrives with an added layer of context. Both leagues just watched their national teams compete on home soil at the World Cup. Several players who featured in that tournament will line up again, this time wearing club colors under All-Star banners.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Absences and the New Faces
          </h2>

          <p>
            The most notable absence is the most predictable one. Lionel Messi and Rodrigo De Paul were excused under the post-World Cup rest agreement between MLS and the MLS Players Association. Their absence removes the single biggest star power from the night, but it also shifts the spotlight.
          </p>

          {/* SON IMAGE */}
          <figure className="relative w-full rounded-3xl overflow-hidden shadow-md my-10 aspect-[16/9]">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIxljX3rz95kLikJAR0lZXPdVj1UrlAVaEmsDs8N2QT-pP0B-8NdP84ld&s=10"
              alt="Son Heung-min LAFC"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
              Credit: Getty Images
            </div>
          </figure>

          <p>
            In their place, two of the most high-profile recent arrivals in MLS take center stage: Son Heung-min of LAFC and Thomas Müller of the Vancouver Whitecaps. Both were selected, both have already made an impact in the league, and both arrive with something to prove in a showcase setting.
          </p>

          <p>
            Petar Musa, currently leading the MLS Golden Boot race, gives the hosts a clinical presence up front. Tim Ream, fresh off captaining the United States, adds leadership and experience at the back. Sebastian Berhalter was also named to the squad, though his impending move to Middlesbrough has already shifted the narrative around his future.
          </p>

          <p>
            On the Liga MX side, Antonio Mohamed — fresh off winning the Concacaf Champions Cup with Toluca — will manage a squad that features a heavy Cruz Azul contingent and several players who represented Mexico at the World Cup. Salomón Rondón, Erik Lira, Jesús Gallardo and Israel Reyes provide the core of experience and quality. Keylor Navas and João Pedro are among the notable withdrawals.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            More Than One Night
          </h2>

          <p>
            The All-Star Game is only one piece of a broader, deliberately constructed rivalry. The Leagues Cup, the Campeones Cup, and regular meetings in the Concacaf Champions Cup have turned MLS vs. Liga MX into a year-round conversation rather than a once-a-summer event.
          </p>

          <p>
            The two leagues no longer meet by accident. They schedule these confrontations because the product benefits from the tension. Fans on both sides of the border care about the result in a way they did not a decade ago. The scoreboard still matters.
          </p>

          <p>
            That reality was visible on Tuesday night as well. In the Skills Challenge at Truist Field, the MLS contingent edged Liga MX 3-2, winning three of the five disciplines. It was a small result, but another data point in a rivalry that accumulates them.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Tonight Actually Measures
          </h2>

          <p>
            All-Star Games are imperfect barometers. Players arrive with different levels of motivation, the tactical preparation is limited, and the format encourages entertainment over structure. Still, patterns emerge over time.
          </p>

          <p>
            MLS has generally controlled the recent editions. Liga MX produced the most dominant single performance in 2024. The presence of established European stars in MLS kits changes the visual and competitive dynamic. The Mexican side continues to rely on a deeper pool of technically polished, tactically disciplined players who understand these occasions.
          </p>

          <p>
            Dean Smith, coaching the MLS side on home soil in Charlotte, will look to set a tone. Mohamed will look to restore some pride after last year’s defeat.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Picture
          </h2>

          <p>
            For years the question lingered: when would the quality gap between the two leagues truly close? The answer has never been clean. Some seasons favor one side, some the other. What has changed is the frequency and the intentionality of the meetings.
          </p>

          <p>
            The 2026 All-Star Game is not the final word on the rivalry. It is simply the latest chapter — played under the lights in Charlotte, ten days after the World Cup ended, with new stars in the lineup and old questions still unresolved.
          </p>

          <p className="font-bold text-xl mt-10">
            The best available players from both leagues will walk onto the same field tonight. For two hours, the debate will have a scoreboard attached to it.
          </p>

          <p className="font-semibold text-lg">
            That is more than enough reason to pay attention.
          </p>

        </section>

        {/* READ NEXT */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Next For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link href="/news/sebastian-berhalter-middlesbrough" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">1</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Sebastian Berhalter Leaves Vancouver for Middlesbrough
                </h3>
              </div>
            </Link>

            <Link href="/news/iraola-liverpool-nycfc" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">2</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Andoni Iraola’s Path to Liverpool via New York City
                </h3>
              </div>
            </Link>

            <Link href="/news/makhanya-rangers" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">3</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  Rangers Close In on Olwethu Makhanya from Philadelphia Union
                </h3>
              </div>
            </Link>

            <Link href="/news/mls-all-star-game-2026-preview" className="border rounded-lg p-6 hover:bg-gray-50 transition shadow-md">
              <div className="flex items-center gap-8">
                <span className="w-10 text-center text-[#ff5a36] text-4xl font-bold flex-shrink-0">4</span>
                <h3 className="font-semibold text-lg leading-6 hover:text-[#ff5a36] transition duration-300">
                  MLS All-Star Game 2026: Full Preview & Rosters
                </h3>
              </div>
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 29, 2026</p>
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