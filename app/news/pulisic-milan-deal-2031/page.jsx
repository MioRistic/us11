'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function PulisicMilanDeal2031() {
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
    'Pulisic and Milan Have Agreed a Deal in Principle Until 2031. The Signature Is Still Missing.';

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
              Americans Abroad
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
              AC Milan
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Pulisic and Milan Have Agreed a Deal in Principle Until 2031. The Signature Is Still Missing.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            Christian Pulisic is close to a new contract that would keep him at AC Milan through 2031. Multiple Italian outlets report an agreement in principle. The final signature has not been announced.
          </p>

          {/* Share buttons - black & white */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FiCopy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy link'}
            </button>

            <a
              href={facebookShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FaFacebookF className="w-4 h-4" />
              Facebook
            </a>

            <a
              href={twitterShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FaTwitter className="w-4 h-4" />
              X
            </a>

            <a
              href={whatsappShare}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </header>

        {/* Hero image */}
        <figure className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9] bg-gray-100">
          <Image
            src="https://assets.goal.com/images/v3/getty-2302080837/crop/MM5DIOBTGI5DENZRHA5G433XMU5DAORQ/GettyImages-2302080837.jpg?quality=60&auto=webp&format=pjpg&width=2160"
            alt="Christian Pulisic AC Milan"
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-3 py-1.5 rounded font-medium">
            Copyright: Getty Images
          </div>
        </figure>

        {/* Article content */}
        <div className="max-w-none text-lg leading-relaxed">
          <p className="mb-6">
            Christian Pulisic is close to signing a new contract with AC Milan that would keep him at the club until June 2031.
          </p>

          <p className="mb-6">
            The agreement is not yet official. Multiple Italian outlets, including <em>Gazzetta dello Sport</em> and Sky Italia, reported on October 27 that Milan and Pulisic’s camp have reached an agreement in principle. The final details are still being completed, and an announcement is expected in the coming days. Until the paperwork is signed and published by the club, it remains a report rather than a completed transaction.
          </p>

          <p className="mb-6">
            Pulisic’s current deal expires on June 30, 2027. Milan also held a unilateral option to extend it by one more season at the same salary. Instead of exercising that option, the club pushed for a longer agreement. According to the reporting, the new contract would run until 2031 and include a raise to roughly €5 million net per season plus bonuses, up from his current €4 million base.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            Why the timing makes sense for both sides
          </h2>

          <p className="mb-6">
            Pulisic joined Milan from Chelsea in the summer of 2023. He has scored 44 goals in 141 appearances for the club and was the team’s top scorer in the 2024-25 season. After a difficult stretch that included a long goal drought and an injury sustained at the World Cup, he has shown improved form in recent weeks. He scored against Lecce on September 20 and again in the 2-0 win over Udinese on October 25.
          </p>

          <p className="mb-6">
            Owner Gerry Cardinale has made clear for months that he wants to keep Pulisic. Milan turned down interest from MLS clubs earlier in the summer. The club also recently extended center-back Strahinja Pavlović until 2031, signaling a broader effort to secure key players beyond their current contracts.
          </p>

          <p className="mb-6">
            For Pulisic, the new deal would remove any near-term uncertainty about his future and place him among Milan’s highest earners. At 28, he would remain under contract through his early thirties. The reported structure also suggests the club views him as more than a short-term contributor under new coach Ruben Amorim.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            What is still unclear
          </h2>

          <p className="mb-6">
            The reports are consistent across several outlets, but they all describe the same stage: an agreement in principle, not a signed contract. There is no official statement from Milan or Pulisic’s representatives yet. Salary figures and exact length are based on Italian media reporting and have not been confirmed by either party.
          </p>

          <p className="mb-6">
            It is also not yet known whether the deal includes any performance-related clauses beyond the base salary and bonuses, or how Pulisic’s role will be defined under Amorim once the contract is finalized. Those details typically emerge only after the announcement.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-6">
            The practical reality
          </h2>

          <p className="mb-6">
            Milan could have simply triggered the one-year option and deferred a longer conversation until next summer. Choosing to negotiate a multi-year deal now indicates the club preferred certainty over flexibility. Pulisic’s recent goals have strengthened his position at a moment when the team is dealing with several injuries, but the renewal has been under discussion for some time.
          </p>

          <p className="mb-6">
            Until Milan publishes the contract, the situation remains one step short of complete. The direction of travel is clear from the reporting. The signature is not.
          </p>

          <p className="mb-6">
            Pulisic is expected to stay at San Siro. How long that stays a report rather than a fact is now a matter of days, not months.
          </p>
        </div>

        {/* Next to Read */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Next to Read</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/news/messi-fifth-ballon-dor-2026" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative bg-gray-100">
                  <Image
                    src="https://assets.goal.com/images/v3/getty-2301135796/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORSGYYQ====/GettyImages-2301135796.jpg?quality=60&auto=webp&format=pjpg&width=2160"
                    alt="Lionel Messi"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Messi Finished Fifth in the 2026 Ballon d’Or. That Was Not Supposed to Happen.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 28, 2026</p>
                </div>
              </div>
            </Link>

            <Link href="/news/nashville-supporters-shield-2026" className="group">
              <div className="rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition">
                <div className="aspect-[16/10] relative bg-gray-100">
                  <Image
                    src="https://assets.goal.com/images/v3/blt0733c3edcfb41a40/GOAL%20-%20Blank%20WEB%20-%20Facebook%20-%202026-03-22T213603.222.png?quality=60&auto=webp&format=pjpg&width=1920"
                    alt="Nashville SC"
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg group-hover:text-blue-600 transition leading-snug">
                    Nashville SC Won the 2026 Supporters’ Shield. They Did It the Old-Fashioned Way.
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">October 25, 2026</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <div>
            <p>Published: October 28, 2026</p>
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