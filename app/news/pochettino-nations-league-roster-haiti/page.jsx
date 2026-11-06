'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PochettinoNationsLeagueRoster() {
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
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const articleTitle =
    "Pochettino’s Nations League Roster Blends Experience and Youth. The Questions Are Clearer Than the Answers.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                
                  </div>
        
                  {/* Header */}
        <header className="mb-8">

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
              USMNT
            </span>

            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              News
            </span>

            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              Pochettino
            </span>
          </div>

                            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
                              The 10 Best-Selling MLS Jerseys of 2026, Ranked From 10 to 1
                            </h1>
                  
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                              <span>By Mio Ristić</span>
                              <span>•</span>
                              <time dateTime="2026-11-04">November 6, 2026</time>
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

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2284795056/crop/MM5DGNZUGQ5DEMJQGY5G433XMU5DAORRHE2Q====/GettyImages-2284795056.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Mauricio Pochettino USMNT"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Credit: Getty Images | Creator: Jamie Squire
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>Mauricio Pochettino named a 25-man roster for the United States’ Concacaf Nations League quarterfinals against Haiti that tries to do two things at once. It brings back Christian Pulisic, Weston McKennie and Folarin Balogun after they missed the September-October window. It also keeps several of the young players who stood out in those four friendlies. The first leg is set for November 14 at Nu Stadium in Miami, where Haiti will host, and the second is November 17 in Cincinnati.</p>

          <p>The approach is consistent with what Pochettino has said he wants. He has talked about adding options and creating competition rather than locking in a fixed group too early in the cycle. The roster reflects that. Pulisic, McKennie and Balogun return to a group that already includes Tyler Adams, Chris Richards, Antonee Robinson, Malik Tillman, Gio Reyna, Alex Freeman, Sebastian Berhalter, Auston Trusty and Sergiño Dest. Around them sit Cavan Sullivan, Mathis Albert, Julian Hall, Justin Ellis, Neil Pierre and Adri Mehmeti, all of whom earned another look after the previous camp. Reed Baker-Whiting and Santiago Castañeda receive their first senior call-ups.</p>

          <p>That mix creates some clear strengths. The midfield has depth and familiarity. Adams and McKennie give Pochettino two players who have been central to recent competitive teams, while Tillman, Reyna and Berhalter offer different ways to control games. In attack, the combination of Pulisic and Balogun with Sullivan, Hall and Ellis gives the coach both established goal threat and players who have already shown they can contribute in a national-team setting.</p>

          <p>There are also clear limitations. The forward line has only five players. If any of them are unavailable or out of form, the options narrow quickly. Brenden Aaronson is not included, and Ricardo Pepi was left out as well. The result is a group that can look potent on paper but does not have much margin for injury or underperformance across two matches that still carry competitive weight.</p>

          <p>The defense presents a similar set of questions. Richards remains the clearest starter, but the partner alongside him is not yet settled. Trusty, Campbell, Pierre and the other center-back options are still being evaluated. Haiti is a physical side, and the first leg will be played in a stadium where the home support will be loud.</p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">Full 25-Man Roster</h2>

          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Goalkeepers</h3>
              <ul className="space-y-1.5 text-gray-700">
                <li>Matt Freese — New York City FC</li>
                <li>Diego Kochen — Lyngby Boldklub</li>
                <li>Brian Schwake — Nashville SC</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Defenders</h3>
              <ul className="space-y-1.5 text-gray-700">
                <li>Reed Baker-Whiting — Nashville SC</li>
                <li>George Campbell — West Bromwich Albion</li>
                <li>Sergiño Dest — PSV Eindhoven</li>
                <li>Alex Freeman — Villarreal</li>
                <li>Neil Pierre — Philadelphia Union</li>
                <li>Bryan Reynolds — Stade Rennais</li>
                <li>Chris Richards — Crystal Palace</li>
                <li>Antonee Robinson — Fulham</li>
                <li>Auston Trusty — Celtic</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Midfielders</h3>
              <ul className="space-y-1.5 text-gray-700">
                <li>Tyler Adams — AFC Bournemouth</li>
                <li>Mathis Albert — Borussia Dortmund</li>
                <li>Sebastian Berhalter — Middlesbrough</li>
                <li>Santiago Castañeda — SC Paderborn</li>
                <li>Weston McKennie — Juventus</li>
                <li>Adri Mehmeti — New York Red Bulls</li>
                <li>Gio Reyna — RC Strasbourg</li>
                <li>Malik Tillman — Bayer Leverkusen</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Forwards</h3>
              <ul className="space-y-1.5 text-gray-700">
                <li>Folarin Balogun — Monaco</li>
                <li>Justin Ellis — Orlando City</li>
                <li>Julian Hall — New York Red Bulls</li>
                <li>Christian Pulisic — AC Milan</li>
                <li>Cavan Sullivan — Philadelphia Union</li>
              </ul>
            </div>
          </div>

          <p>What stands out most is the tension Pochettino is managing. The United States reached the final four in each of the previous four editions of the Nations League and won the first three. Falling short again would not end the 2030 cycle, but it would add another competitive result that needs to be explained. At the same time, the coach has made it clear that he wants to continue integrating younger players rather than reverting entirely to the group that played at the World Cup.</p>

          <p>The first game in Miami will offer an early look at how Pochettino wants to use the returning players alongside the ones who impressed in the last window. Cincinnati will provide a second data point. Neither result will settle the longer-term questions about the 2030 squad. They will, however, indicate whether the current mix of experience and youth is ready to handle a two-legged series against a motivated opponent.</p>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: November 6, 2026</p>
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