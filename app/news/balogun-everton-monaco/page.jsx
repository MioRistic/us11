'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function BalogunEvertonMonaco() {
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
    "Everton Reach Agreement With Monaco for Folarin Balogun as Premier League Return Nears";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('Everton reach agreement with Monaco for Folarin Balogun ⚽️')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Everton Reach Agreement With Monaco for Folarin Balogun as Premier League Return Nears
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-09-01">September 1, 2026</time>
          </div>

          <div className="flex items-center gap-3 mt-5">
            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            >
              <FaFacebookF className="text-gray-600" />
            </a>
            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            >
              <FaTwitter className="text-gray-600" />
            </a>
            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
            >
              <FaWhatsapp className="text-gray-600" />
            </a>
            <button
              onClick={handleCopyLink}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
              aria-label="Copy link"
            >
              <FiCopy className="text-gray-600" />
            </button>
          </div>
        </header>

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://assets.goal.com/images/v3/blt14fc8dda9e344682/crop/MM5DEMZYGQ5DCMZUGE5G433XMU5DGOBSHIYTGMA=/GettyImages-2279226293.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Folarin Balogun USMNT Everton Monaco transfer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Copyright: 2026 Getty Images | Credit: Getty Images | Creator: Jamie Squire
          </div>
        </figure>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-6">
          <p>
            Everton have their striker. Folarin Balogun’s Premier League return is no longer a rumor.
          </p>

          <p>
            Everton and Monaco have agreed a deal for the United States international. That part is no longer in dispute. Monaco sources put the numbers at an initial €45 million plus €5 million in add-ons and a sell-on. Everton sources described it as a deal in the region of £40 million. Those figures are the same transfer described in two currencies.
          </p>

          <p>
            Fabrizio Romano later reported that personal terms had been agreed on a four-year contract with a one-year option, and that Balogun had been cleared to travel for a medical on Tuesday — deadline day. Until he is registered, it is an agreement, not a completed signing. It is close enough that the remaining work is administrative, not philosophical.
          </p>

          <p>
            This is the move American fans have been waiting for since the World Cup, and the move David Moyes needed once Beto’s exit to Fiorentina became real. It is also the second-most expensive transfer involving a USMNT player, behind only Christian Pulisic’s move from Chelsea to Dortmund.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why Everton moved now
          </h2>

          <p>
            The Toffees spent the last week of the window trying to solve a simple problem. Beto was heading to Florence. Thierno Barry would have been the only recognized senior striker left. A proposed swap that would have brought Richarlison back from Tottenham stalled on personal terms. Iliman Ndiaye’s path out of Goodison, once tied to that deal, went elsewhere. The attack needed a No. 9 who could start immediately.
          </p>

          <p>
            Balogun fits that brief more cleanly than a reunion with Richarlison ever did. He is 25. He has already scored in Ligue 1, in Europe, and at a home World Cup. He knows English football from the Arsenal academy and a Middlesbrough loan, even if his senior Premier League minutes were scarce. Moyes is not buying a project. He is buying a center forward who has just finished his best season since leaving north London.
          </p>

          <p>
            Last season Balogun scored 19 goals and added five assists in 43 appearances for Monaco after an injury-disrupted 2024–25. Across three years in the principality: 31 goals in 91 matches. Monaco signed him from Arsenal in 2023 for an initial €30 million plus €10 million in add-ons. They are now selling him for more than they paid, with a sell-on attached. That is a successful piece of business for them. It is also the reason they were willing to do it this late. They had already moved for Matthis Abline. They needed the non-EU space. Balogun wanted the next step. The window forced everyone to stop circling.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The player Everton are actually getting
          </h2>

          <p>
            The scouting report on Balogun has not changed much since Reims. He wants to run in behind. He finishes with either foot. He is better when the team plays forward early than when he is asked to hold the ball with his back to goal for 90 minutes. That profile can work for Moyes, who has always liked a striker who occupies center-backs and attacks the space between them.
          </p>

          <p>
            The caution is the same one that followed him out of Arsenal. Consistency over a Premier League calendar is different from a good Ligue 1 season and a four-game World Cup. Monaco asked him to be the reference point in a side that created chances. Everton will ask him to be the reference point in a side that often has fewer of them. If Barry is the rotation option and the wide players are asked to serve the box, Balogun’s job is blunt: score enough that the rest of the construction holds.
          </p>

          <p>
            For the USMNT, the club context matters more than the fee. Mauricio Pochettino’s best version of this team ran through a striker who could stretch defenses and finish the chances Christian Pulisic and the midfield created. A weekly place in the Premier League, in a team that needs him, is a better platform than a rotation role at a Champions League club that was ready to sell. It is not a step down in minutes. It may be a step into a harsher league. That is the trade.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What the fee says
          </h2>

          <p>
            €45 million plus add-ons is serious money for Everton and serious validation for Balogun. Completing it would put him behind only Pulisic among USMNT transfer fees. That ranking is a headline. The more useful read is that American forwards are no longer being priced as upside bets. They are being priced as starters.
          </p>

          <p>
            There is a smaller, quieter clause in the background. Arsenal inserted a sell-on when they sold him to Monaco. If that percentage is still live, the Gunners take a slice of this deal. It does not change anything for Everton. It is a reminder of how long this player’s value has been compounding.
          </p>

          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            What is left
          </h2>

          <p>
            A medical in Merseyside. Registration before the deadline. An announcement that will make official what the reporting already describes.
          </p>

          <p>
            Until those boxes are ticked, the precise line is the one The Athletic used first: Everton have reached an agreement with Monaco. The updated line, as of Tuesday, is that the player side has moved with it. The transfer is not folklore and it is not finished. It is sitting on the last hour of the window, which is exactly where deals like this tend to live.
          </p>

          <p className="font-bold text-xl mt-8">
            If it goes through, Balogun returns to the league he left as an Arsenal prospect and arrives as the striker Everton spent the summer trying to find. For the USMNT, that is the version of his career that always made the most sense: not a cameo in a bigger squad, but the main option in a team that will judge him every weekend.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
                    Zavier Gozo Nears $15 Million Move to Crystal Palace
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/daniel-gazdag-new-england" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="https://i.ibb.co/4ndt3ztQ/images-8.jpg"
                    alt="Daniel Gazdag New England Revolution"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Columbus Bought Out Daniel Gazdag. New England Is Ready to Take the Version Philadelphia Used to Have.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">August 28, 2026</p>
                </div>
              </div>
            </Link>

          </div>
        </section>

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: September 1, 2026</p>
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