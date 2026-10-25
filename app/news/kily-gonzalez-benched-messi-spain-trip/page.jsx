'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function KilyGonzalezBenchedMessi() {
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
    "Kily Gonzalez Benched Messi After a Trip to Spain. Miami Lost 2-0. This Is Why It Happened.";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Kily Gonzalez benched Messi after Spain trip. Miami lost 2-0.')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Kily Gonzalez Benched Messi After a Trip to Spain. Miami Lost 2-0. This Is Why It Happened.
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-10-25">October 25, 2026</time>
          </div>
        </header>

        <div className="flex items-center gap-3 mb-8">
          <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Share on Facebook">
            <FaFacebookF />
          </a>
          <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Share on X">
            <FaTwitter />
          </a>
          <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Share on WhatsApp">
            <FaWhatsapp />
          </a>
          <button onClick={handleCopyLink} className="p-2 rounded-full border hover:bg-gray-50 transition" aria-label="Copy link">
            <FiCopy />
          </button>
          {copied && <span className="text-sm text-green-600">Copied</span>}
        </div>

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/getty-2301840320/crop/MM5DEOBUHA5DCNRQGI5G433XMU5DCNJUHE5DCMRR/GettyImages-2301840320.jpg?quality=60&auto=webp&format=pjpg&width=2160"
            alt="Lionel Messi Inter Miami"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: Getty Images
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            Lionel Messi started on the bench for Inter Miami on Saturday night.
          </p>

          <p>
            That sentence alone was enough to generate attention. The 39-year-old had just returned from Oviedo, where he received the Princess of Asturias Award for Sports on Friday. Less than 48 hours later he was in New Jersey, named among the substitutes against the New York Red Bulls.
          </p>

          <p>
            Inter Miami lost 2-0. Messi came on early in the second half and did not score or assist. A run of 13 consecutive games with a goal contribution for club and country ended. The three-game winning streak ended with it.
          </p>

          <p>
            None of this was an accident.
          </p>

          <h2>The decision was made in advance</h2>

          <p>
            Kily Gonzalez did not treat the benching as a reaction to form or a tactical surprise. He described it as a planned choice.
          </p>

          <p className="font-medium">
            “This was something that had already been agreed upon,” Gonzalez said afterward. “Obviously, he’s been through quite a journey, time zone changes, temperature shifts, and a whole host of other factors. We were fully aware of all of this, and we reached an agreement that this was the best approach to ensure he didn’t suffer any issues, specifically to avoid any injuries considering we have another match this Wednesday. The goal was for him to recover and get some minutes under his belt today; as always, he performed well.”
          </p>

          <p>
            The trip was real. Messi flew to Spain on Thursday, collected the award on Friday, and returned immediately. Gonzalez and the staff had already decided he would not start. The idea was to protect him for the short turnaround that followed.
          </p>

          <p>
            That is the practical version of the story. The more interesting version is what it reveals about how Inter Miami are trying to manage their most important player at this stage of his career.
          </p>

          <h2>Miami without Messi from the start</h2>

          <p>
            The match itself showed the gap.
          </p>

          <p>
            New York Red Bulls scored in the seventh minute through an own goal by Casemiro. Inter Miami struggled to control the ball in midfield and to build from the back. Gonzalez was blunt about it later.
          </p>

          <p>
            “We had far too many turnovers in midfield, played too many passes while facing our own goal, and struggled to build play from deep,” he said. “I have to take responsibility for this. As I told the lads at halftime, we needed to turn things around; we improved a little, though I’m certainly not satisfied and neither are the players. But it’s a useful lesson, a reminder that you can’t afford to get complacent, a hit to the face. We can’t relax.”
          </p>

          <p>
            Messi entered around the 56th minute. He created moments, as he usually does, but the game was already tilted. Emil Forsberg added a second in stoppage time. The result was straightforward.
          </p>

          <p>
            This was not a night when Miami looked capable of controlling a match without their captain starting. That does not mean they are incapable of it. It does mean the margin is thinner than it sometimes appears when Messi is on the pitch from the opening whistle.
          </p>

          <h2>What the decision actually signals</h2>

          <p>
            Inter Miami have already secured a playoff place. Nashville had already wrapped up the Supporters’ Shield. The remaining regular-season games matter for seeding and momentum, but they are not elimination matches. That context made the choice easier.
          </p>

          <p>
            Gonzalez has spoken repeatedly about protecting Messi and about the player’s own commitment. In the days before the game he praised Messi for wanting to be available after the trip to Spain. The benching was not a rejection of that commitment. It was an attempt to manage the physical cost of it.
          </p>

          <p>
            At 39, with a contract that runs through 2028 and a team that wants to compete in the playoffs, those calculations are no longer theoretical. A long-haul trip, a short recovery window, and another match midweek created a situation where starting him carried more risk than resting him.
          </p>

          <p>
            The result was a loss and the end of a personal streak. Those are real costs. The alternative was potentially carrying a tired or slightly compromised Messi into the next game. Gonzalez chose the option that reduced the chance of a longer problem.
          </p>

          <h2>The next test</h2>

          <p>
            Inter Miami host FC Cincinnati next. The schedule does not get lighter. Playoff positioning still matters, and the team will need to generate chances more consistently than it did on Saturday.
          </p>

          <p>
            Messi will almost certainly start that match. The more useful question is whether the midfield and the rest of the attack can function well enough that his presence is an advantage rather than a necessity. Saturday offered a partial answer. It was not a flattering one.
          </p>

          <p>
            Gonzalez accepted responsibility for the performance. He also made clear that the decision to bench Messi was deliberate. Both statements can be true at the same time.
          </p>

          <p>
            The clickbait version of the story is that a coach benched the best player in the world and the team lost. The more accurate version is that a coach who has already decided the postseason is the priority chose to manage minutes after an unusual travel week.
          </p>

          <p>
            The result was still 2-0. The streak is still over. And the question of how much Inter Miami can afford to rest Messi remains open.
          </p>

          <p>
            That is the story worth following from here.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/news/americans-abroad-reyna-pulisic-mckennie-aaronson" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2300107618/crop/MM5DENZWGM5DCNJVGQ5G433XMU5DAORRGQ2A====/GettyImages-2300107618.jpg?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Gio Reyna"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Reyna Scored Against PSG. Pulisic Is Finding His Feet. McKennie Started in a Collapse. Aaronson Watched From the Bench.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 20, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/lewandowski-fear-after-football" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKikJ--39TDT1sM0AWUeA0grnRGIrjoWTuDl-wuz5MXkbmHJ1dxSRnamxI&s=10"
                    alt="Robert Lewandowski"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Lewandowski Has Fear of Life After Football. He Also Thinks Olise Should Be in the Ballon d’Or Conversation.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 22, 2026</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 25, 2026</p>
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
