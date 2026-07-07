'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

const groupDStandings = [
  {
    position: 1,
    team: "USA",
    flag: "🇺🇸",
    played: 3,
    won: 2,
    drawn: 0,
    lost: 1,
    gf: 8,
    ga: 4,
    gd: 4,
    points: 6,
    form: ["W", "W", "L"]
  },
  {
    position: 2,
    team: "Australia",
    flag: "🇦🇺",
    played: 3,
    won: 1,
    drawn: 1,
    lost: 1,
    gf: 4,
    ga: 4,
    gd: 0,
    points: 4,
    form: ["W", "L", "D"]
  },
  {
    position: 3,
    team: "Paraguay",
    flag: "🇵🇾",
    played: 3,
    won: 1,
    drawn: 1,
    lost: 1,
    gf: 3,
    ga: 5,
    gd: -2,
    points: 4,
    form: ["L", "W", "D"]
  },
  {
    position: 4,
    team: "Türkiye",
    flag: "🇹🇷",
    played: 3,
    won: 1,
    drawn: 0,
    lost: 2,
    gf: 3,
    ga: 5,
    gd: -2,
    points: 3,
    form: ["L", "L", "W"]
  }
];

export default function USMNTWorldCupBrief() {
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

  const articleTitle = "USMNT World Cup Brief";

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent('USMNT World Cup Brief 🇺🇸')}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* NASLOV */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight">USMNT World Cup Brief</h1>
        <p className="text-gray-500 mt-2">Daily updates from the 2026 FIFA World Cup</p>
      </div>

      {/* SHARE DUGMAD */}
      <div className="flex items-center gap-3 mb-8">
        <a href={facebookShare} target="_blank" rel="noopener noreferrer" 
           className="p-3 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
          <FaFacebookF size={18} />
        </a>
        <a href={twitterShare} target="_blank" rel="noopener noreferrer" 
           className="p-3 rounded-full bg-black text-white hover:opacity-80 transition">
          <FaTwitter size={18} />
        </a>
        <a href={whatsappShare} target="_blank" rel="noopener noreferrer" 
           className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
          <FaWhatsapp size={18} />
        </a>
        <button 
          onClick={handleCopyLink}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        >
          <FiCopy size={18} />
        </button>
        {copied && <span className="text-green-600 text-sm ml-2">Link copied!</span>}
      </div>

      {/* FEATURE IMAGE */}
      <figure className="w-full rounded-3xl overflow-hidden shadow-xl mb-10">
        <Image
          src="https://i.ibb.co/7N0zcfsC/usmntlogo.png"
          alt="USMNT World Cup 2026"
          width={1200}
          height={675}
          className="w-full h-auto object-cover"
          priority
        />
        <figcaption className="text-xs text-gray-400 px-3 py-2">
          USMNT logo
        </figcaption>
      </figure>

    

      {/* Najnovija - Belgija */}
        <div className="border border-gray-200 rounded-2xl p-6 mb-6 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-sm font-medium text-gray-500">July 6, 2026</span>
              <h3 className="text-xl font-semibold mt-1">United States 1 - 4 Belgium</h3>
            </div>
            <span className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-full font-medium">
              Loss
            </span>
          </div>

          <div className="space-y-3 text-gray-700">
            <p>• Malik Tillman scored a free-kick goal for the USA.</p>
            <p>• Belgium dominated with goals from De Ketelaere (2), Vanaken and Lukaku.</p>
            <p>• Matt Freese made a costly error leading to Belgium's third goal.</p>
            <p>• Christian Pulisic substituted due to injury.</p>
            <p>• USMNT eliminated.</p>
          </div>

          <div className="mt-5">
            <Link 
              href="/news/usmnt-regression-belgium" 
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Read full match recap →
            </Link>
          </div>
        </div>

        {/* Bosna */}
        <div className="border border-gray-200 rounded-2xl p-6 mb-6 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-sm font-medium text-gray-500">July 2, 2026</span>
              <h3 className="text-xl font-semibold mt-1">United States 2 - 0 Bosnia and Herzegovina</h3>
            </div>
            <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full font-medium">
              Win
            </span>
          </div>

          <div className="space-y-3 text-gray-700">
            <p>• Folarin Balogun scored in the 45th minute.</p>
            <p>• Balogun controversially sent off in the 64th minute.</p>
            <p>• Malik Tillman scored a brilliant free-kick in the 82nd minute.</p>
          
          </div>

          <div className="mt-5">
            <Link 
              href="/news/usmnt-advance-to-round-of-16-bosnia" 
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Read full match recap →
            </Link>
          </div>
        </div>

      {/* GROUP D STANDINGS - TAČNO PREMA SLICI */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6 text-gray-700">Group D Standings (Final)</h2>

        <div className="overflow-x-auto border border-gray-200 rounded-2xl bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500">
                <th className="py-4 px-5 text-left font-medium">Team</th>
                <th className="py-4 px-3 text-center font-medium">P</th>
                <th className="py-4 px-3 text-center font-medium">W</th>
                <th className="py-4 px-3 text-center font-medium">D</th>
                <th className="py-4 px-3 text-center font-medium">L</th>
                <th className="py-4 px-3 text-center font-medium">GD</th>
                <th className="py-4 px-4 text-center font-medium">Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🇺🇸</span>
                    <span className="font-semibold text-gray-900">USA</span>
                  </div>
                </td>
                <td className="py-4 px-3 text-center text-gray-700">3</td>
                <td className="py-4 px-3 text-center text-gray-700">2</td>
                <td className="py-4 px-3 text-center text-gray-700">0</td>
                <td className="py-4 px-3 text-center text-gray-700">1</td>
                <td className="py-4 px-3 text-center font-medium text-emerald-600">+4</td>
                <td className="py-4 px-4 text-center font-bold text-lg text-gray-900">6</td>
              </tr>

              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🇦🇺</span>
                    <span className="font-semibold text-gray-900">Australia</span>
                  </div>
                </td>
                <td className="py-4 px-3 text-center text-gray-700">3</td>
                <td className="py-4 px-3 text-center text-gray-700">1</td>
                <td className="py-4 px-3 text-center text-gray-700">1</td>
                <td className="py-4 px-3 text-center text-gray-700">1</td>
                <td className="py-4 px-3 text-center font-medium text-gray-700">0</td>
                <td className="py-4 px-4 text-center font-bold text-lg text-gray-900">4</td>
              </tr>

              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🇵🇾</span>
                    <span className="font-semibold text-gray-900">Paraguay</span>
                  </div>
                </td>
                <td className="py-4 px-3 text-center text-gray-700">3</td>
                <td className="py-4 px-3 text-center text-gray-700">1</td>
                <td className="py-4 px-3 text-center text-gray-700">1</td>
                <td className="py-4 px-3 text-center text-gray-700">1</td>
                <td className="py-4 px-3 text-center font-medium text-red-600">-2</td>
                <td className="py-4 px-4 text-center font-bold text-lg text-gray-900">4</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="py-4 px-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🇹🇷</span>
                    <span className="font-semibold text-gray-900">Türkiye</span>
                  </div>
                </td>
                <td className="py-4 px-3 text-center text-gray-700">3</td>
                <td className="py-4 px-3 text-center text-gray-700">1</td>
                <td className="py-4 px-3 text-center text-gray-700">0</td>
                <td className="py-4 px-3 text-center text-gray-700">2</td>
                <td className="py-4 px-3 text-center font-medium text-red-600">-2</td>
                <td className="py-4 px-4 text-center font-bold text-lg text-gray-900">3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* MATCH UPDATES - SA BELGIJOM NA VRHU */}
      <div>
        <h2 className="text-xl font-semibold mb-6 text-gray-700">Match Updates</h2>

        

        {/* Bosna */}
        <div className="border border-gray-200 rounded-2xl p-6 mb-6 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-sm font-medium text-gray-500">July 2, 2026</span>
              <h3 className="text-xl font-semibold mt-1">United States 2 - 0 Bosnia and Herzegovina</h3>
            </div>
            <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full font-medium">
              Win
            </span>
          </div>

          <div className="space-y-3 text-gray-700">
            <p>• Folarin Balogun scored in the 45th minute.</p>
            <p>• Balogun controversially sent off in the 64th minute.</p>
            <p>• Malik Tillman scored a brilliant free-kick in the 82nd minute.</p>
          
          </div>

          <div className="mt-5">
            <Link 
              href="/news/usmnt-advance-to-round-of-16-bosnia" 
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Read full match recap →
            </Link>
          </div>
        </div>

        {/* Ostale utakmice */}
        <div className="border border-gray-200 rounded-2xl p-6 mb-6 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-sm font-medium text-gray-500">June 25, 2026</span>
              <h3 className="text-xl font-semibold mt-1">United States 2 - 3 Türkiye</h3>
            </div>
            <span className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded-full font-medium">
              Loss
            </span>
          </div>

          <div className="space-y-3 text-gray-700">
            <p>• Strong start with goals from Berhalter and Trusty.</p>
            <p>• Christian Pulisic returned from injury.</p>
            <p>• Late collapse allowed Türkiye to win.</p>
          </div>

          <div className="mt-5">
            <Link 
              href="/news/usmnt-fall-to-turkiye-group-finale" 
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Read full match recap →
            </Link>
          </div>
        </div>

        <div className="border border-gray-200 rounded-2xl p-6 mb-6 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-sm font-medium text-gray-500">June 19, 2026</span>
              <h3 className="text-xl font-semibold mt-1">United States 2 - 0 Australia</h3>
            </div>
            <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full font-medium">
              Win
            </span>
          </div>

          <div className="space-y-3 text-gray-700">
            <p>• Dominant performance with 62% possession.</p>
            <p>• Folarin Balogun key in attack.</p>
            <p>• Alex Freeman scored his first World Cup goal.</p>
          </div>

          <div className="mt-5">
            <Link 
              href="/news/usmnt-statement-win-australia-seattle" 
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Read full match recap →
            </Link>
          </div>
        </div>

        <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-sm font-medium text-gray-500">June 12, 2026</span>
              <h3 className="text-xl font-semibold mt-1">United States 4 - 1 Paraguay</h3>
            </div>
            <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full font-medium">
              Win
            </span>
          </div>

          <div className="space-y-3 text-gray-700">
            <p>• Early own goal by Damián Bobadilla (7').</p>
            <p>• Folarin Balogun scored twice.</p>
            <p>• Dominant first-half performance.</p>
          </div>

          <div className="mt-5">
            <Link 
              href="/news/usmnt-deliver-the-statement-theyve-been-waiting-for" 
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Read full match recap →
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}