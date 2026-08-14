'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function AleksaCvetkovicWhitecaps() {
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
    "What Aleksa Cvetković Can Bring to the Vancouver Whitecaps";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            What Aleksa Cvetković Can Bring to the Vancouver Whitecaps
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-14">August 14, 2026</time>
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
            src="https://i.ibb.co/LX5n48qD/images-4.jpg"
            alt="Aleksa Cvetković Vancouver Whitecaps"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: © 2024 Dimitrije Vasiljevic/STARSPORT
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            The Vancouver Whitecaps have signed 21-year-old Serbian midfielder Aleksa Cvetković from OFK Beograd on a U22 Initiative deal through 2029-30, with a club option for the following season. The fee is reported around €1.5 million.
          </p>

          <p>
            On paper it is another low-to-mid range European prospect. In reality, the profile is more interesting than the price tag suggests.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">The engine</h3>
          <p>
            Cvetković’s primary value is physical. He is a high-motor box-to-box midfielder who regularly covered close to 11 kilometres per match in the Serbian SuperLiga and ranked among the top under-23 players in Europe for sprints, according to CIES data. That kind of output travels well to MLS, where the distances and intensity reward players who can press and recover repeatedly.
          </p>
          <p>
            Axel Schuster called out exactly those traits when the deal was announced: energy, intensity, and a relentless work rate. Those are not empty words. Vancouver’s midfield has often relied on players willing to cover ground and win the ball high. Cvetković is built for that role.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Versatility and role</h3>
          <p>
            Most of his 73 appearances for OFK Beograd came as a central midfielder, but he has also been used higher up the pitch and on the wing. He is not a pure destroyer or a classic No. 10. He is a modern No. 8 — comfortable receiving under pressure, capable of progressive runs, and willing to track back.
          </p>
          <p>
            With Sebastian Berhalter now at Middlesbrough, Vancouver needed someone who could offer similar energy in the middle of the park. Cvetković will not replace Berhalter’s American experience or left foot, but he can occupy a similar tactical space: a midfielder who links phases and keeps the team vertical.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">What to realistically expect</h3>
          <p>
            Short term, this is a rotation and development signing. The jump from the Serbian SuperLiga to MLS is real, and the tactical demands under Vancouver’s system will take time. He should not be expected to start every week immediately.
          </p>
          <p>
            Medium term, the upside is clearer. If his engine translates and he adapts to the physical and positional demands of the league, he has the tools to become a reliable starter. The goal contributions (seven goals and nine assists in 73 games) are modest but respectable for his age and role. The bigger question is whether he can add more consistency in the final third while maintaining the defensive work rate that makes him valuable.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">The larger context</h3>
          <p>
            This is the Whitecaps’ preferred model: identify a young player with proven senior minutes in a competitive league, secure him on a U22 deal, and give him time to grow. It is the same pathway that once brought Berhalter to the club as an unheralded prospect.
          </p>
          <p>
            Cvetković arrives motivated, already familiar with Ranko Veselinović’s feedback on the club and the city, and clear about the style of football he wants to play. Whether he becomes a long-term piece or a useful squad player will depend on how quickly he adapts. The raw materials — work rate, athleticism, and positional flexibility — are already there.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/breel-embolo-atlanta-united" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbwzV8zjhlrGysUyoFj63vuCBg-DpmwygmARa2ASDwTA&s=10"
                    alt="Breel Embolo Atlanta United"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Atlanta United Finalizing $18m Deal for Switzerland Forward Breel Embolo
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 14, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/kevin-kelsy-rangers-bid" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/QvHNgtP7/images-3.jpg"
                    alt="Kevin Kelsy Rangers bid"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Rangers Submit ~$10m Bid for Portland Timbers Striker Kevin Kelsy
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 13, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/alexis-sanchez-cf-montreal" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUx2mcZSv0C23oFnU7J4uT_jCAJ5y9KGMFw0_vn3vHQ&s=10"
                    alt="Alexis Sánchez CF Montréal"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    CF Montréal Sign Chilean Great Alexis Sánchez as Designated Player
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 11, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/middlesbrough-usmnt-trio" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/G4WV0yhL/images.jpg"
                    alt="USMNT Trio Middlesbrough"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    USMNT Trio Living Together at Middlesbrough as Premier League Dream Takes Shape
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 10, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex justify-between text-sm text-gray-600">
          <span>Published: August 14, 2026</span>
          <Link href="/news" className="hover:text-gray-800">
            ← Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}