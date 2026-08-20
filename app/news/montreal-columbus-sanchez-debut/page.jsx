'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function MontrealColumbusSanchezDebut() {
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
    'CF Montréal Edge Columbus 2-1 as Streit’s Strike Seals a Much-Needed Road Win';

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'CF Montréal edge Columbus 2-1 — Alexis Sánchez debuts late 🇨🇦⚽️'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    articleTitle + ' ' + currentUrl
  )}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            CF Montréal Edge Columbus 2-1 as Streit’s Strike Seals a Much-Needed Road Win
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-20">August 20, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-3 mt-5">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:opacity-90 transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90 transition"
            >
              <FaWhatsapp size={18} />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
              aria-label="Copy link"
            >
              <FiCopy size={16} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/imago-sport-1077615335/crop/MM5DEOJZGI5DCNRYGM5G433XMU5DAORRGIYA====/imago-image.jpeg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="CF Montréal vs Columbus Crew - Alexis Sánchez debut"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Pressinphoto
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            <strong>COLUMBUS, Ohio</strong> — For long stretches of the season, CF Montréal have looked like a team searching for answers. On Wednesday night at ScottsMiracle-Gro Field, they finally found a result that mattered.
          </p>

          <p>
            A 2-1 victory over Columbus Crew ended a long winless run in MLS and gave the club a small but meaningful boost in the Eastern Conference standings. It was not always pretty. It was not always controlled. But it was three points — and for a side sitting near the bottom of the table, that was enough.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Early Lead, Familiar Fragility
          </h2>

          <p>
            Montréal started with purpose. Just five minutes in, <strong>Prince Osei Owusu</strong> opened the scoring, giving the visitors a dream start on the road. The early goal settled the team and forced Columbus to chase the game.
          </p>

          <p>
            That advantage did not last.
          </p>

          <p>
            In the 20th minute, the night took a strange turn. Montréal goalkeeper <strong>Thomas Gillier</strong>, under little pressure after a back pass, mishit the ball and turned it into his own net. The equalizer was soft, unexpected, and completely avoidable. Suddenly, a promising away performance was level again.
          </p>

          <p>
            Columbus pushed. Montréal absorbed pressure. The game became tighter, more physical, and less open. Both sides created moments, but neither could find a decisive second-half breakthrough until late.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Streit Changes Everything
          </h2>

          <p>
            With the match drifting toward a draw, <strong>Noah Streit</strong> produced the moment of quality Montréal had been missing.
          </p>

          <p>
            In the 78th minute, the young midfielder drove forward and unleashed a powerful strike from distance. The shot left the Columbus goalkeeper with no chance. 1-2. The visitors had the lead again — and this time, they would not give it back.
          </p>

          <p>
            It was the kind of goal that changes the mood of a dressing room. Streit had given Montréal belief. The late strike also pushed the club to 20 points and kept them within touching distance of the play-in places, four points behind D.C. United with games still to play.
          </p>

          <p>
            For Columbus, it was another frustrating home result. For Montréal, it was validation that the season is not over.
          </p>

          {/* VIDEO + RESULT SECTION */}
          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Watch: Highlights & Final Score
          </h2>

          <p className="font-medium text-lg">
            Final Score: Columbus Crew 1–2 CF Montréal
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>5′ — Prince Osei Owusu (Montréal)</li>
            <li>20′ — Thomas Gillier (own goal)</li>
            <li>78′ — Noah Streit (Montréal)</li>
          </ul>

          <div className="my-8 not-prose">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-md aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/nk-0fd5XCdY"
                title="CF Montréal vs Columbus Crew Highlights"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-2xl"
              ></iframe>
            </div>
          </div>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Brief First Look at Alexis Sánchez
          </h2>

          <p>
            There was one more subplot on the night.
          </p>

          <p>
            In the 79th minute, just after Streit’s winner, <strong>Alexis Sánchez</strong> entered the pitch for the first time in a CF Montréal shirt. Wearing the No. 10, the Chilean Designated Player replaced Owusu and completed the final stretch of the match.
          </p>

          <p>
            It was a carefully managed debut. Sánchez had only trained with his new teammates for a few days and had gone months without competitive minutes. In roughly 11 to 15 minutes on the field, he showed intent — organizing, demanding the ball, trying to set the tempo — but there was never enough time for him to influence the result.
          </p>

          <p>
            That was never the expectation. This was about getting him on the pitch, introducing him to the intensity of MLS, and starting the process of building match fitness.
          </p>

          <p>
            The headlines will still mention his name. The three points, however, belonged to Owusu, Streit, and a Montréal side that finally found a way to win again.
          </p>

          <p className="font-semibold text-lg mt-10">
            Next up is a home match against LA Galaxy on Saturday at Stade Saputo. By then, Sánchez may be closer to a larger role. For one night in Columbus, though, the story was simpler: Montréal needed a win — and they got it.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/blog/mls-archive-collection-2026" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://images.mlssoccer.com/image/private/t_editorial_landscape_12_desktop_2x/f_auto/mls/rsyenouylj95wi8oeipx.jpg"
                    alt="MLS Archive Collection 2026"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    2026 MLS Archive Collection: Ranking the Retro Kits
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 17, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/griezmann-lewandowski-orlando-chicago" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/1GVM9GVD/images-5.jpg"
                    alt="Griezmann vs Lewandowski"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Griezmann vs Lewandowski: Lightning Delay, Retro Kits and a 2-1 Fire Win
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 20, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/chucky-lozano-la-galaxy" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2249117363/crop/MM5DGOJVHA5DEMRSGY5G433XMU5DAORSGA3A====/GettyImages-2249117363.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Chucky Lozano LA Galaxy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    LA Galaxy Finalizing Chucky Lozano Loan Deal
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 15, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/zavier-gozo-crystal-palace" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2277148248/crop/MM5DENRSGQ5DCNBXGY5G433XMU5DCORU/GettyImages-2277148248.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Zavier Gozo Crystal Palace"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Zavier Gozo Nears $15m Move to Crystal Palace
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 12, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 20, 2026</p>
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