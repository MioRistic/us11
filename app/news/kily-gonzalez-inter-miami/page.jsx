'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function KilyGonzalezInterMiami() {
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
    "Inter Miami Appoint Kily González — What the Rosario Connection Actually Brings";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Inter Miami appoint Kily González as head coach ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Inter Miami Appoint Kily González — What the Rosario Connection Actually Brings
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-28">August 28, 2026</time>
          </div>

          <div className="flex gap-3 mt-6">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <FaTwitter />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <FaWhatsapp />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              aria-label="Copy link"
            >
              <FiCopy />
            </button>
          </div>
        </header>

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-1736243127/crop/MM5DGNZQGA5DEMBYGE5G433XMU5DAORUGI======/GettyImages-1736243127.jpg?auto=webp&format=pjpg&width=2048&quality=60"
            alt="Kily González Inter Miami head coach"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: 2026 Getty Images | Credit: Getty Images | Creator: Getty Images Sport
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">

          <p>
            Inter Miami have appointed Cristian Alberto “Kily” González as first-team head coach. He will take over once his U.S. work permit is approved. Until then, Guillermo Hoyos remains in charge.
          </p>

          <p>
            That is the official version. The real version is messier. Miami are on a five-match winless run. They sit second in the Eastern Conference, 10 points behind Nashville. They are out of Leagues Cup. Hoyos, who stepped in after Javier Mascherano resigned in April, has been suspended one game for the club’s repeated late returns from halftime. The hiring lands on the same day as that suspension. González becomes Miami’s third head coach of 2026. All three have been Argentine.
          </p>

          <p>
            This is not a glamorous European appointment. It is a bet on familiarity.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Who Kily González Is
          </h2>

          <p>
            González is 52, born in Rosario on August 4, 1974 — the same city as Lionel Messi. He played as a left winger: low center of gravity, direct, technically sharp. He began at Rosario Central, later played for Boca Juniors, Real Zaragoza, Valencia and Inter Milan. With Valencia he won La Liga in 2002. With Inter he won Serie A in 2006. He earned 56 caps for Argentina between 1995 and 2005, scored nine international goals, won Olympic gold in Athens in 2004, and reached the Copa América final the same year.
          </p>

          <p>
            The Messi link is real but thin. They shared the Argentina squad for two World Cup qualifiers in 2005. That is two matches, not a decade of dressing-room history. Still, in a club that has treated Argentine identity as a recruiting principle — Mascherano, Hoyos, now González — the connection is not accidental. Miami keep hiring people who speak Messi’s language, literally and culturally.
          </p>

          <p>
            As a coach, González has never worked outside Argentina. He started at Rosario Central in 2020, lasted until March 2022, then took Unión de Santa Fe from 2023 to April 2025. Last year he spent 14 games at Platense and left in October. The numbers are not kind:
          </p>

          <ul>
            <li>Rosario Central: 68 games, 25 wins — 36.8 percent</li>
            <li>Unión: 78 games, 25 wins — 32.1 percent</li>
            <li>Platense: 14 games, 2 wins — 14.3 percent</li>
            <li>Career: 160 games, 52–46–62 — <strong>32.5 percent</strong></li>
          </ul>

          <p>
            He has lost more matches than he has won at every stop. Unión was the most coherent chapter. Platense was a short, poor run. There is no trophy on the résumé and no previous MLS, Liga MX, or European bench experience.
          </p>

          <p>
            That is the appointment Miami just made to manage Lionel Messi, Luis Suárez, Rodrigo De Paul and Casemiro.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What He Actually Brings Inter Miami
          </h2>

          <p>
            The honest answer is not “a proven winner.” It is a specific set of things this roster might use — and a specific set of risks this roster cannot afford.
          </p>

          <p>
            <strong>A shared football language.</strong> Miami’s locker room is still built around Argentine and Spanish-speaking stars. González does not need a translator to talk to Messi, De Paul or the staff culture that Mascherano left behind. After a chaotic year — Mascherano’s resignation, Hoyos as interim then permanent, a World Cup interruption, and a slump after the break — continuity of language is not nothing. It is also not a tactics board.
          </p>

          <p>
            <strong>A winger’s eye for wide play.</strong> González was a left-sided attacker. His teams in Argentina tended to live in transitions and wide combinations rather than a rigid positional structure. Miami, at their best under Mascherano, attacked with width, third-man runs, and Messi finding pockets between the lines. If González can restore simple, direct patterns — get the ball to Messi and De Paul in dangerous areas, use Casemiro as the rest-defense — that may be enough to stop the bleeding.
          </p>

          <p>
            <strong>Low public profile, high internal pressure.</strong> He is not a brand hire. Miami do not need another personality in the building. They need someone who can organize the non-Messi minutes: when Messi rests, when Suárez fades, when the press is broken and the team has to defend a lead. Hoyos never solved that second act. González has not proven he can either — but the job description is narrower than “reinvent the club.” It is “get this team into the playoffs in a shape that can win a round.”
          </p>

          <p>
            <strong>A structural warning.</strong> A 32.5 percent career win rate is not a rounding error. MLS playoff races punish coaches who cannot close games. Miami already have the talent gap over most of the East. They do not have the defensive discipline or the late-game control they had in 2025. González’s Platense stint — two wins in 14 — is the latest data point, not ancient history.
          </p>

          <p>
            <strong>Timing.</strong> Work permit first. Hoyos still takes the next match under suspension rules that may keep him off the bench. González arrives mid-slump, mid-table fight, with no preseason and no long runway. His first task is not a five-year project. It is stopping a slide before the regular season runs out.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Larger Read
          </h2>

          <p>
            Inter Miami keep solving problems the same way: hire an Argentine who knows the stars, hope chemistry substitutes for a clear sporting plan. Sometimes that works. Mascherano won the club its first MLS Cup. Sometimes it is a holding pattern. Hoyos started well and then the results went away.
          </p>

          <p>
            González is the third version of that idea in one calendar year. He brings local knowledge of Messi’s world, a winger’s feel for attacking space, and almost no evidence that he can manage a star-heavy MLS locker room under American media and travel demands. That does not make the hire irrational. It makes it a short-term stabilization bet dressed as a new era.
          </p>

          <p className="font-bold text-xl mt-8">
            The story Miami will sell is Rosario, the national team, the European medals. The story that will decide the season is simpler: can a coach with a losing career record organize the best attacking talent in the league for two months?
          </p>

        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/owen-wolff-sporting-kc" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/rG89HZj4/01jfvndt3mzgqws5t022.webp"
                    alt="Owen Wolff Sporting Kansas City"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Sporting Kansas City Complete Signing of USYNT Midfielder Owen Wolff from Austin
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 26, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/kevin-kelsy-rangers" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/QvHNgtP7/images-3.jpg"
                    alt="Kevin Kelsy Rangers"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Rangers Agree Deal with Portland Timbers for Kevin Kelsy
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 25, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/dejan-joveljic-seattle" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt1f59038c75fb0191/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202024-11-30T215714.252.jpg?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Dejan Joveljić Seattle Sounders"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Seattle Sounders Acquire Dejan Joveljić in $6 Million Cash Trade
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 25, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/folarin-balogun-barcelona-rumors" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2264578389/crop/MM5DGNJQGA5DCOJWHE5G433XMU5DAORSHA3A====/GettyImages-2264578389.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Folarin Balogun"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Folarin Balogun Transfer Rumors: Would the USMNT Striker Fit at Barcelona?
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 24, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 28, 2026</p>
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