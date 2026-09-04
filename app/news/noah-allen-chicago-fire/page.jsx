'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function NoahAllenChicagoFire() {
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
    "Chicago Fire Sign Noah Allen on Loan From Inter Miami as Europe Wait Continues";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Chicago Fire sign Noah Allen on loan from Inter Miami ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Chicago Fire Sign Noah Allen on Loan From Inter Miami as Europe Wait Continues
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-09-04">September 4, 2026</time>
          </div>
        </header>

        {/* SHARE */}
        <div className="flex items-center gap-3 mb-8">
          <a
            href={facebookShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href={twitterShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on X"
          >
            <FaTwitter />
          </a>
          <a
            href={whatsappShare}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <button
            onClick={handleCopyLink}
            className="p-2 rounded-full border hover:bg-gray-50 transition"
            aria-label="Copy link"
          >
            <FiCopy />
          </button>
          {copied && <span className="text-sm text-green-600">Copied</span>}
        </div>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2231738550/crop/MM5DGNZVG45DEMJRGM5G433XMU5DAORRHE3A====/GettyImages-2231738550.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Noah Allen Inter Miami defender joins Chicago Fire on loan"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: 2025 Getty Images | Credit: Getty Images | Creator: Greg Fiume
          </div>
        </figure>

        {/* ARTICLE */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            The Chicago Fire have signed defender Noah Allen on loan from Inter Miami through the end of the 2026 MLS season, with a permanent trade option attached.
          </p>

          <p>
            What began as a source report from Tom Bogert at The Athletic is now official. Inter Miami and Chicago confirmed the move on September 3. CL Merlo first reported the transaction. The Fire will place Allen in a U-22 Initiative slot.
          </p>

          <p>
            Allen is 22, a Pembroke Pines native, and the rare academy product who actually became part of Inter Miami’s history rather than a footnote next to the stars. He made 132 first-team appearances. He was there for the 2023 Leagues Cup, the 2024 Supporters’ Shield, and the 2025 MLS Cup. The club lists him as its all-time appearance leader. In 2025 he made the Concacaf Champions Cup Best XI, won the competition’s Best Young Player award, started a match as captain — the first academy player to do so — and landed on the MLS 22 Under 22 list.
          </p>

          <p>
            A natural left back, he can also play center back in a back three. He debuted for Miami in 2022. The opponent that night was Chicago Fire.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why Miami sold minutes in September
          </h2>

          <p>
            This was not a football decision dressed up as something else. It was roster math.
          </p>

          <p>
            Miami needed salary-cap flexibility in the same window it added Brazilian forward Riquelme Fillipi and Paraguay international Matías Galarza. Casemiro had already arrived after the World Cup. Kily González is the new head coach. Homegrown minutes became expendable. On the same deadline stretch, Miami also loaned midfielder David Ruiz to the New York Red Bulls.
          </p>

          <p>
            Allen’s own words sounded like a goodbye, not a pause. He thanked the club for letting him grow with it. Teammate Yannick Bright said he was losing one of the closest people in his life and that the mood at training changed the day Allen was gone.
          </p>

          <p>
            The Miami Herald reported a structure around $3 million: loan plus general allocation money through the end of the year, then a purchase timed for January so more of the fee hits Miami’s 2027 salary pot. The clubs’ public language is cleaner — loan with a permanent option. Both versions point the same way. Chicago is not borrowing a body for two months. It is testing a starter it expects to keep.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What Chicago is buying
          </h2>

          <p>
            The Fire have been busy. They moved U-22 left back Viktor Radojević to CF Montréal on loan. They need a defender who can play now, not a project who needs a year of translation. Allen has already done the hard part in this league: regular minutes next to elite attackers, playoff nights, a trophy run. Gregg Berhalter’s side gets a left-sided defender who knows MLS speed and does not need a settling-in period before October.
          </p>

          <p>
            He is also a dual national. After representing the United States at youth level, Allen filed a one-time switch and now plays for Greece’s under-21s. A senior debut for Greece is the next international question, not a USMNT recall.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A European chapter that did not open
          </h2>

          <p>
            There is a second story underneath the loan, and it should not be buried.
          </p>

          <p>
            Allen had been on Europe’s radar since January. The Athletic reported then that Gent and Panathinaikos were monitoring him, with no formal bids yet. Through the winter and spring his name circulated around Olympiacos, Sporting CP, Anderlecht, and, more loosely, Fiorentina and Stuttgart. Greek reports said price was the problem — talks in the €2–3 million range that climbed toward €4–5 million with add-ons, against a contract in Miami through 2028.
          </p>

          <p>
            Those clubs were scouting a young left back who had played through a title cycle beside Lionel Messi and then chosen Greece. None of them closed a deal before the MLS window shut. Chicago did.
          </p>

          <p>
            That does not kill the European idea. It delays it. If Allen plays every week in Chicago and the Fire exercise the option, he becomes a $3 million MLS defender with a clearer sample. If he plays well enough, Europe can still come back in the winter or next summer from a stronger place than a deadline-day loan between conference rivals.
          </p>

          <p>
            For now the move is simpler than the rumor mill wanted it to be. Inter Miami needed cap space. Chicago needed a left back. Noah Allen, the homegrown who grew up inside the Messi project, is going to the Midwest to prove he is more than a depth piece in pink.
          </p>

          <p className="font-semibold text-lg mt-10">
            Note: Allen had made no secret of a longer-term ambition to test himself in Europe. Clubs in Greece, Belgium and Portugal tracked him for months. No formal European transfer materialized this window. The Chicago loan is the path in front of him — and, if he plays well enough, it may still be the bridge he wanted rather than the detour.
          </p>
        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/messi-retires-argentina-inter-miami" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt17f9a8f2fd6b8229/GOAL_-_Blank_WEB_-_Facebook_-_2023-08-31T080917.696.jpg?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Lionel Messi Inter Miami"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Lionel Messi Retires From Argentina — Inter Miami Is Where We Watch Him Now
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 3, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/folarin-balogun-everton" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt14fc8dda9e344682/crop/MM5DEMZYGQ5DCMZUGE5G433XMU5DGOBSHIYTGMA=/GettyImages-2279226293.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Folarin Balogun Everton"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Everton Reach Agreement With Monaco for Folarin Balogun
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 30, 2026</p>
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
                    Inter Miami Appoint Kily González as New Head Coach
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 27, 2026</p>
                </div>
              </div>
            </Link>

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
                    New York Red Bulls Sign Julian Hall to Four-Year Extension
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 27, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: September 4, 2026</p>
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