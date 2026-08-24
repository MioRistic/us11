'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function BalogunTransferRumors() {
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
    "Folarin Balogun’s Next Move: Barcelona, Tottenham and the Race That Suddenly Got Serious";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    'Folarin Balogun linked with Barcelona, Tottenham and Aston Villa 🇺🇸⚽'
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    articleTitle + ' ' + currentUrl
  )}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Folarin Balogun’s Next Move: Barcelona, Tottenham and the Race That Suddenly Got Serious
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-24">August 24, 2026</time>
          </div>

          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-3">
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
            >
              <FiCopy size={16} />
            </button>
          </div>
        </header>

       {/* FEATURE IMAGE */}
<figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
  <Image
    src="https://assets.goal.com/images/v3/getty-2264578389/crop/MM5DGNJQGA5DCOJWHE5G433XMU5DAORSHA3A====/GettyImages-2264578389.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    alt="Folarin Balogun USMNT"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
    Copyright: AFP or licensors | Credit: AFP via Getty Images | Creator: FRANCK FIFE
  </div>
</figure>
        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6 text-[#020617]">

          <p>
            For most of the summer, Folarin Balogun’s future felt like background noise. Monaco wanted a big fee. Premier League clubs were monitoring. Nothing felt urgent.
          </p>

          <p>
            Then the World Cup ended, the window entered its final stretch, and the picture sharpened.
          </p>

          <p>
            According to <em>L’Équipe</em>, Barcelona and Aston Villa have now formally entered the race for the United States striker. Tottenham had already made contact earlier in August. Suddenly, one of the more understated transfer stories of the summer has become one of its more interesting ones.
          </p>

          <p>
            Balogun, 25, is under contract at Monaco until June 2028. There have been no serious talks about an extension. Both sides appear open to a sale — provided the numbers work. Monaco are understood to be seeking in the region of €50–60 million. Tottenham’s early discussions centered around that higher figure.
          </p>

          <p>
            That valuation reflects both his club form and his international platform. Last season Balogun scored 19 goals in 43 appearances across all competitions for Monaco. At the World Cup he was the United States’ most clinical forward, scoring twice in the opening win over Paraguay and remaining a constant threat until the team’s exit. The tournament did what these events so often do: it raised his profile and accelerated interest.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Competing Projects
          </h2>

          <p>
            Tottenham’s interest made the most intuitive sense on paper. Roberto De Zerbi’s side needs reliable goalscoring and depth at the top of the attack. Balogun’s mobility and ability to attack space behind defensive lines would fit a system that prioritizes verticality. The historical complication — Balogun spent more than a decade in Arsenal’s academy — has been noted, but it has not appeared to be a decisive obstacle for either party.
          </p>

          <p>
            Aston Villa’s interest is more situational. Unai Emery’s side are monitoring Balogun as a potential replacement should Ollie Watkins complete a move to the Saudi Pro League. Villa have shown they can identify and develop forwards who thrive in a structured, high-intensity system. Balogun’s work rate and intelligence in the final third would align with that profile.
          </p>

          <p>
            Barcelona’s entry is the most intriguing. Hansi Flick’s team lost Robert Lewandowski and Ferran Torres over the summer and have been unable to land their primary target, Julián Álvarez, whose release clause at Atlético Madrid remains prohibitive. The Catalan club need a pure finisher. Balogun is not a traditional target man, but he is a modern No. 9: quick over short distances, sharp in the box, and capable of linking play. In a squad that already possesses width and creativity through Lamine Yamal, Raphinha and others, a striker who primarily scores goals fills a clear gap.
          </p>

          <p>
            The price also helps. Álvarez would command a fee several times higher. Balogun, while expensive, remains within a range that Barcelona can realistically contemplate before the window closes on September 1.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Context and Constraints
          </h2>

          <p>
            Monaco are not desperate sellers, but they are pragmatic. They have already cashed in on other assets this window and are prepared to do the same with Balogun if the offer is right. The club is also understood to have identified potential replacements.
          </p>

          <p>
            For Balogun himself, the calculation is straightforward. He has established himself as a consistent starter in Ligue 1 and performed on the biggest international stage. A move to a bigger league, with Champions League football and a clearer path to regular starts, represents the logical next step. Multiple reports indicate he is open to leaving.
          </p>

          <p>
            Premier League interest has been broad throughout the summer — Chelsea, Newcastle and several mid-table clubs have been linked at various points — but the more serious conversations in recent days appear concentrated around Tottenham, Villa and now Barcelona. Galatasaray and Saudi clubs have also made inquiries, according to Fabrizio Romano, though those options look less likely to appeal if European interest solidifies.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What It Means
          </h2>

          <p>
            American players still face a particular scrutiny in the transfer market. Fees are often lower, and clubs sometimes treat them as calculated risks rather than proven commodities. Balogun’s trajectory challenges that pattern. A move for €50–60 million would rank among the highest fees paid for a U.S. international and would signal growing confidence in the current generation.
          </p>

          <p>
            Whether that move materializes in the coming days remains uncertain. Tottenham may decide the fee is too high given other priorities. Villa’s interest hinges partly on Watkins. Barcelona are still weighing options and operating under financial constraints. Monaco will not lower their valuation significantly.
          </p>

          <p>
            What is clear is that Balogun has forced the conversation. A player who left Arsenal three years ago for regular football in France is now being seriously considered by clubs that expect to compete at the highest level. That alone marks progress — both for him and for the pathway he represents.
          </p>

          <p className="font-semibold text-lg mt-10">
            The window has less than two weeks left. For Balogun, the next chapter is beginning to take shape.
          </p>

        </section>

        {/* NEXT TO READ */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Link href="/news/gio-reyna-strasbourg" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt1c7bd4c8d2766389/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-02-20T134449.815.png?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="Gio Reyna Strasbourg"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Gio Reyna Agrees Move to Strasbourg
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/pochettino-usmnt-extension-2030" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/bltdf32edd9113f7080/crop/MM5DGOJQGY5DEMJZG45G433XMU5DAORSGAZQ====/GettyImages-2280211150.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                    alt="Mauricio Pochettino USMNT"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Mauricio Pochettino Returns as USMNT Coach on New Deal Through 2030
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/lucas-herrington-hull-city" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQvO7bUgSI57bGcOGEPJu3bGSl3itgWXKTFCR188aRkwtnbym0LCQCJef&s=10"
                    alt="Lucas Herrington Hull City"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Hull City Agree Deal for Lucas Herrington
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/mls-matchday-roundup-lewandowski-messi" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://assets.goal.com/images/v3/blt7d93faee2a6dac45/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-08-01T224940.165.png?auto=webp&format=pjpg&width=2048&quality=60"
                    alt="MLS Matchday Roundup"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    MLS Matchday Roundup: Lewandowski, Messi and More
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: August 24, 2026</p>
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