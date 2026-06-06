'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTGermanyFriendlyPage() {
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
    "USMNT Fall to Germany in Final World Cup Send-Off, But Deliver Plenty of Reasons for Optimism";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'USMNT fall 2-1 to Germany but show real promise ahead of the 2026 FIFA World Cup 🇺🇸⚽'
  )}`;

  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT Fall to Germany in Final World Cup Send-Off, But Deliver Plenty of Reasons for Optimism
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-06">June 6, 2026</time>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black text-white hover:opacity-80"
            >
              <FaTwitter size={20} />
            </a>

            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80"
            >
              <FaWhatsapp size={20} />
            </a>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300"
            >
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/bltf6b8614c13a32667/crop/MM5DINZUGA5DENRWGY5G433XMU5DAORSGQ3Q====/GettyImages-2280213323.jpg?auto=webp&format=pjpg&width=1920&quality=60"
            alt="USMNT vs Germany"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />

          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Creator: Alexander Hassenstein
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>
            CHICAGO — There are no more excuses. No more friendlies. No more “we’re still building something.”
          </p>

          <p>
            On Saturday night at Soldier Field, the United States lost their final preparation match before the 2026 FIFA World Cup, falling 2-1 to a strong German side.
          </p>

          

          <p>
            But while the result went against them, the performance told a more nuanced and ultimately encouraging story.
          </p>

          {/* VIDEO */}
<div className="my-10">
  <h2 className="text-3xl font-bold mb-4">
    Match Highlights
  </h2>

  <div className="relative w-full overflow-hidden rounded-2xl shadow-lg aspect-video">
    <iframe
      src="https://www.youtube.com/embed/epg75De5I5k"
      title="Match Highlights"
      className="absolute inset-0 w-full h-full"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
</div>

          <h1 className="text-3xl font-bold mt-10 mb-4">
            Early Setback, Strong Response
          </h1>

          <p>
            Germany needed just two minutes to draw first blood.
          </p>

          <p>
            A well-delivered set piece saw Kai Havertz rise unmarked and power a header past Matt Freese.
          </p>

          <p>
            It was the kind of clinical start expected from a four-time world champion.
          </p>

          <p>
            What followed, however, was impressive from the USMNT.
          </p>

          <p>
            Instead of folding, Mauricio Pochettino’s side grew into the game. They pressed higher, moved the ball with more purpose, and began asking real questions of the German defense.
          </p>

          <p className="font-semibold text-xl">
            Then came the moment of the night.
          </p>

          <p>
            In the 37th minute, Antonee Robinson produced something special.
          </p>

          <p>
            Collecting the ball on the left side, the Fulham full-back took a touch and unleashed a rocket of a left-footed volley from 25 yards.
          </p>

          <p>
            The ball smashed against the underside of the crossbar and bounced into the net.
          </p>

          <p className="font-semibold">
            Pure thunder. Pure quality.
          </p>

          <p>
            The Soldier Field crowd erupted, and for a moment, the USMNT looked like they could beat anyone.
          </p>

          <h1 className="text-3xl font-bold mt-10 mb-4">
            Germany’s Quality Proves Decisive
          </h1>

          <p>
            The Americans carried momentum into the second half, but Germany’s superior individual quality eventually told.
          </p>

          <p>
            In the 57th minute, Leroy Sané found space on the right and curled a precise effort into the far corner, restoring the lead.
          </p>

          <p>
            Despite pushing for an equalizer late on, the USMNT couldn’t find a second goal.
          </p>

          <p className="font-semibold text-xl">
            Final score: Germany 2, United States 1.
          </p>

          <h1 className="text-3xl font-bold mt-10 mb-4">
            What We Learned
          </h1>

          <h2 className="text-2xl font-bold">
            The Good
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              The attack showed real teeth. Robinson’s goal was world-class, and there were promising combinations involving Christian Pulisic, Gio Reyna, and the strikers.
            </li>
            <li>
              Character and resilience were evident. Coming back from an early deficit against a top European side is no small thing.
            </li>
            <li>
              Depth is starting to look legitimate. Players like Folarin Balogun and Ricardo Pepi are pushing each other hard.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8">
            The Concerns
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              Defensive lapses on set pieces and in transition remain an issue. Germany punished them twice with relatively little fuss.
            </li>
            <li>
              Consistency over 90 minutes is still a work in progress. The USMNT looked excellent in patches but faded at key moments.
            </li>
          </ul>

          <h1 className="text-3xl font-bold mt-10 mb-4">
            Pochettino’s View
          </h1>

          <blockquote className="border-l-4 border-gray-300 pl-4 italic">
            “We showed good things tonight, especially after going down early. We need to eliminate those small mistakes at this level. But I saw progress, and that’s important.”
          </blockquote>

          <p>
            After the match, the Argentine coach was measured but positive about the direction of the team.
          </p>

          <h1 className="text-3xl font-bold mt-10 mb-4">
            Final World Cup Warm-Up Complete
          </h1>

          <p>
            This result caps a mixed but ultimately upward-trending preparation period.
          </p>

          <p>
            The win over Senegal last weekend combined with a competitive showing against Germany should give the squad genuine belief heading into the tournament.
          </p>

          <p>
            The USMNT now turns its full attention to Friday, June 12, when they open Group D against Paraguay in Los Angeles.
          </p>

          <p>
            A strong start on home soil could set the tone for what everyone hopes will be a memorable summer.
          </p>

          <p className="font-semibold text-xl">
            For one night, Soldier Field got to see both the potential and the ceiling of this young American side. Now the real test begins.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: June 6, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>

          <Link
            href="/news"
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            Back to news
          </Link>
        </footer>

      </div>
    </article>
  );
}