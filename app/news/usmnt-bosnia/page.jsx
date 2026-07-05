'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function USMNTBosniaVictory() {
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

  const articleTitle = "USMNT Advance to World Cup Round of 16 with 2-0 Win Over Bosnia and Herzegovina – Balogun Shines Before Controversial Red Card";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT advance to Round of 16 after beating Bosnia ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            USMNT Advance to World Cup Round of 16 with 2-0 Win Over Bosnia and Herzegovina – Balogun Shines Before Controversial Red Card
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-07-02">July 2, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-6">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={20} />
            </a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={20} />
            </a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={20} />
            </a>
            <button onClick={handleCopyLink} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2284249560/crop/MM5DINJSGI5DENJUGQ5G433XMU5DAORSGM3A====/GettyImages-2284249560.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="USMNT vs Bosnia World Cup 2026"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: Michael Steele
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">

          <p className="text-xl">
            SANTA CLARA, Calif. — July 2, 2026
          </p>

          <p>
            The United States Men’s National Team is moving on.
          </p>

          <p>
            In a tense and dramatic Round of 32 matchup at San Francisco Bay Area Stadium, the USMNT defeated Bosnia and Herzegovina <strong>2-0</strong> to advance to the World Cup knockout stage for the first time since 2002.
          </p>

          <p>
            Folarin Balogun gave the hosts the lead on the brink of halftime, and Malik Tillman sealed the victory with a stunning free-kick goal in the 82nd minute. However, the night was not without controversy, as Balogun was sent off in the second half.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Balogun the Hero — Then the Red Card That Changed Everything
          </h2>
          <p>
            For the first hour, Folarin Balogun was the best player on the pitch. The Monaco striker constantly threatened the Bosnian defense with his movement and pace. He had a goal disallowed for offside in the 31st minute, but made no mistake in the 45th, finishing neatly with his left foot to send the American fans into delirium.
          </p>

          <p>
            Then, in the 64th minute, the game flipped. After a video review, referee Raphael Claus showed Balogun a straight red card for a challenge on Tarik Muharemović. Replays showed Balogun landing awkwardly on the defender’s ankle. Many viewed the decision as harsh, but it left the USMNT with 10 men for the final half-hour of the match.
          </p>

          <p>
            Despite the numerical disadvantage, the Americans showed tremendous character. They defended deep, stayed organized, and waited for their moment.
          </p>

          <p>
            That moment came in the 82nd minute. Christian Pulisic won a free kick on the edge of the box. Malik Tillman stepped up and delivered a brilliant left-footed strike over the wall and into the top corner. The stadium erupted. Tillman’s goal not only secured the win but also sent a clear message: this USMNT team has resilience.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            A Historic Night for American Soccer
          </h2>
          <p>
            This victory carries significant weight:
          </p>
          <ul>
            <li>It is only the second knockout-stage win in USMNT World Cup history.</li>
            <li>It is the first time the United States has won three matches at a single World Cup.</li>
            <li>It snapped a long losing streak against European opponents.</li>
            <li>For the first time, a USMNT knockout win happened in primetime on home soil, with millions of Americans watching.</li>
          </ul>

          <p>
            The atmosphere at Levi’s Stadium was electric. “USA! USA!” chants echoed throughout the night, and the celebrations after Tillman’s goal will be remembered for years.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What’s Next? A Rematch with Belgium
          </h2>
          <p>
            With the win, the USMNT advances to face Belgium in the Round of 16 on Monday, July 6 in Seattle.
          </p>

          <p>
            Belgium came from 2-0 down to beat Senegal and advance. They remain a dangerous side with world-class talent. However, the USMNT will have home advantage and growing belief.
          </p>

          <p>
            The only downside? Folarin Balogun, the team’s leading scorer with three goals at this tournament, will miss the Belgium match due to suspension.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Final Thoughts
          </h2>
          <p>
            This was more than just a result. It was a statement.
          </p>

          <p>
            Mauricio Pochettino’s side showed maturity, character, and the ability to win ugly when necessary. They are no longer just “promising.” They are a team that believes it belongs among the best.
          </p>

          <p className="font-bold text-xl mt-8">
            The 2026 World Cup journey continues. For the United States, it just got a lot more exciting.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: July 2, 2026</p>
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