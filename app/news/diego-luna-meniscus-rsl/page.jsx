'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function DiegoLunaMeniscusRsl() {
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
    "Diego Luna Will Miss the Rest of the MLS Season With a Torn Meniscus";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Diego Luna out for the rest of the MLS season with a torn meniscus ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Diego Luna Will Miss the Rest of the MLS Season With a Torn Meniscus
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-09-16">September 16, 2026</time>
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
            src="https://assets.goal.com/images/v3/getty-2277148145/crop/MM5DKMBQGU5DEOBRGU5G433XMU5DAORSGYYA====/GettyImages-2277148145.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Diego Luna of Real Salt Lake during the 2026 MLS season"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: 2025 Getty Images | Credit: Getty Images 
          </div>
        </figure>

        {/* ARTICLE */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            Diego Luna told the internet before the club told anyone.
          </p>

          <p>
            That is the cleanest version of Tuesday. Real Salt Lake’s 23-year-old midfielder posted that he has a torn meniscus, that it needs to be repaired, and that this MLS season is finished. He used the words frustration, anger, sadness. He said he has not been the Diego Luna people know. He said he will see the field next year.
          </p>

          <p>
            The injury report already had him out for Saturday’s 2-0 loss to New York City FC. The last time he started, he went 70 minutes in a defeat at Houston on Sept. 9. Then the knee. Then the post. Then the season, for him, stopped.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What the year actually was
          </h2>

          <p>
            Eighteen MLS appearances. Five goals and five assists on The Athletic’s sheet, six assists if you prefer the local count. Thirteen starts. Enough production to remain the player RSL builds attacks around and not enough to hide what the table says.
          </p>

          <p>
            Salt Lake are in an 11-game winless run and sitting on the wrong side of a playoff line that still has time to move. Decision Day is Nov. 7. Luna will watch it.
          </p>

          <p>
            This was already a hard year before the meniscus. Mauricio Pochettino left him off a 26-man World Cup roster on home soil. Luna had 18 caps and four goals for the United States since his 2024 debut. The cut was a surprise to people who watch the tape. It was not a surprise to the list. The first window of the new cycle — Peru, Chile, Canada, Mexico — is now gone too. March 2027 is the next realistic national-team conversation, and only if the knee cooperates.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The part he wrote himself
          </h2>

          <p>
            Luna did not issue a bland update. He apologized to people who still believe in him. He described a year-long fight with himself that, in his telling, kept him from playing free. Then the medical line: torn meniscus, repair, a new chapter of recovery, mental and physical.
          </p>

          <p>
            Believe the diagnosis. Be careful with the autobiography. Players write those posts in the worst 24 hours of a season. The useful facts are the ones that survive a week: the knee is done for 2026, the procedure is coming, “next year” is the return window he chose.
          </p>

          <p>
            ESPN had already reported he would miss months and that an arthroscopic look was likely. The Instagram post closed the argument. This is not a two-week rest. It is not a game-time decision.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What it does to everyone else
          </h2>

          <p>
            RSL lose their best creator in the last third of a season that has already slipped. Set pieces, half-spaces, the fouls he draws, the games he drags from ugly to livable — that tape is on the shelf. A winter move abroad had been background noise. It is quieter now. Clubs do not buy a meniscus in November.
          </p>

          <p>
            For the USMNT the timing is cruel in a boring way. The World Cup omission needed a club year that shouted. Instead the year ended with a knee and a caption. Pochettino can say the right things about patience. He cannot call a player who is on crutches.
          </p>

          <p className="font-semibold text-lg mt-10">
            Luna has been RSL’s guy since 2022, the short attacker who plays like the game owes him a duel. That version is the one he promised would come back and take over. The only test is whether he is in a Salt Lake shirt, or someone else’s, when the 2027 season starts. Until then the post is the news. Season over. Meniscus. Next year.
          </p>
        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/cavan-sullivan-usmnt-call" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2295138136/crop/MM5DGOJYGQ5DEMRUGE5G433XMU5DGNZRHIZDONI=/GettyImages-2295138136.jpg?quality=60&auto=webp&format=pjpg&width=1280"
                    alt="Cavan Sullivan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Cavan Sullivan Stays Hot With Two Goals as a USMNT Call Beckons
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 14, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/nashville-sc-clinch-playoffs" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt47978711340c869e/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-15T230033.321.png?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Nashville SC"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    How Nashville SC Can Clinch an MLS Playoff Spot
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 12, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/noah-allen-chicago-fire" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2231738550/crop/MM5DGNZVG45DEMJRGM5G433XMU5DAORRHE3A====/GettyImages-2231738550.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Noah Allen Chicago Fire"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Chicago Fire Sign Noah Allen on Loan From Inter Miami
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 4, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/ac-boise-usl-championship-2027" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://cdn1.sportngin.com/attachments/photo/6128-211830812/Crest-Reveal-Video-Thumbnail_large.png"
                    alt="Athletic Club Boise"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    AC Boise Jumps to USL Championship in 2027 After One League One Season
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">September 9, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: September 16, 2026</p>
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