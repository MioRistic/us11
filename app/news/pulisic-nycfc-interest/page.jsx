'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PulisicNYCFCInterest() {
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
    "Is Christian Pulisic Heading Back to MLS? NYCFC Interested, Milan Say Not For Sale";

  const facebookShare =
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  const twitterShare =
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;

  const whatsappShare =
    `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;


  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">

      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">


        {/* HEADER */}
        <header className="mb-8">

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Is Christian Pulisic Heading Back to MLS? NYCFC Interested, Milan Say “Not for Sale”
          </h1>


          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-06-25">
              June 25, 2026
            </time>
          </div>


          {/* SOCIAL SHARE */}
          <div className="flex items-center gap-4 mt-6">

            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"
            >
              <FaFacebookF size={20}/>
            </a>


            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-black text-white hover:opacity-80 transition"
            >
              <FaTwitter size={20}/>
            </a>


            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"
            >
              <FaWhatsapp size={20}/>
            </a>


            <button
              onClick={handleCopyLink}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
            >
              <FiCopy size={20}/>
            </button>

          </div>

        </header>



        {/* FEATURE IMAGE */}

        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">

          <Image
            src="https://assets.goal.com/images/v3/getty-2281625986/crop/MM5DEMJXGA5DCMRSGE5G433XMU5DAORRGAZQ====/GettyImages-2281625986.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Christian Pulisic AC Milan USMNT"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: Richard Heathcote
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
          </div>

        </figure>



        {/* ARTICLE CONTENT */}

        <section className="prose prose-lg max-w-none leading-relaxed space-y-8 text-gray-800">


          <p className="text-xl">
            New York City FC have made an inquiry for Christian Pulisic, but AC Milan have made their position clear: the American superstar is not available right now.
          </p>



          <p>
            According to reports, NYCFC are exploring the possibility of bringing Pulisic back to Major League Soccer after the 2026 World Cup. The move would represent one of the biggest signings in MLS history, but Milan are currently not interested in selling one of their most important players.
          </p>



          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Why NYCFC Want Pulisic
          </h2>



          <p>
            The motivation behind NYCFC’s interest is clear. The club is preparing for a new era with the opening of their new stadium, Etihad Park in Queens, scheduled for 2027.
          </p>

          
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">

          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdgjcxRVXePMHHcvZpWhsleQspoByKPYSqYyX_xMraYfnpsECNgw3mifnH&s=10"
            alt="Christian Pulisic AC Milan USMNT"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
            Creator: Jordan Bank
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
          </div>

        </figure>


          <p>
            NYCFC have previously built their identity around global stars such as Frank Lampard, Andrea Pirlo, and David Villa. Adding Pulisic would be both a sporting statement and a major commercial opportunity.
          </p>



          <p>
            Bringing home the biggest American soccer star of his generation would instantly make Pulisic the face of MLS and could transform the club’s profile domestically and internationally.
          </p>



          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            Milan’s Position
          </h2>



          <p>
            For now, AC Milan control the situation. Pulisic is under contract until June 2027, with an option extending the deal until 2028.
          </p>

           <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">

          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGQ0JJkkMReyEDBfE56xerC04fP672_YOE7-yn7jrLQ&s=10"
            alt="Christian Pulisic AC Milan USMNT"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
           Creator: Marco Luzzani
 | 
Credit: Getty Images
Copyright: 2026 Getty Image
          </div>

        </figure>


          <p>
            The Rossoneri still view him as an important part of their future plans, especially under new head coach Ruben Amorim.
          </p>



          <p>
            While his 2025/26 season was not as dominant as his previous campaign, with 8 goals and 4 assists and a drop in form after December, Milan are not looking to move him on.
          </p>




          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Realistic Timeline
          </h2>



          <p>
            The most likely scenario is that Pulisic remains in Milan for at least the 2026/27 season.
          </p>


          <p>
            However, if contract discussions do not progress, the summer of 2027 could become a realistic moment for a return to MLS.
          </p>


          <p>
            In that situation, NYCFC would likely be among the strongest candidates thanks to their financial resources, new stadium project, and ambition to make a historic signing.
          </p>




          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Bigger Picture
          </h2>



          <p>
            This story represents more than just one potential transfer. It raises a bigger question: will Christian Pulisic continue building his legacy in Europe, or return home as the biggest American star MLS has ever produced?
          </p>


          <p>
            A move back to MLS in his prime years would be a landmark moment for American soccer and could redefine how global stars view the league.
          </p>




          <h2 className="text-3xl font-black mt-12 mb-5 text-[#020617]">
            The Verdict
          </h2>



          <p>
            Right now, Milan are firmly in control. Pulisic remains a key player and there is no pressure to sell.
          </p>


          <p>
            But 2027 could become one of the most interesting years in American soccer history if NYCFC continue pushing for a deal.
          </p>



          <p className="font-semibold text-lg mt-10">
            For now, Christian Pulisic stays in Italy — but MLS may not have seen the last of its biggest American star.
          </p>



        </section>



        {/* FOOTER */}

        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">

          <div>
            <p>Published: June 25, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>


          <Link
            href="/news"
            className="mt-4 sm:mt-0 hover:text-black transition-colors"
          >
            ← Back to news
          </Link>


        </footer>


      </div>

    </article>
  );
}