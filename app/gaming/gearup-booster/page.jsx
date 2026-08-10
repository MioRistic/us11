'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function GearUPBooster() {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert('✅ Link copied to clipboard!');
    }
  };

  const articleTitle =
    "Tired of High Ping in EA FC and Online Games? Here’s How GearUP Booster Actually Helps";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">

      {/* FULL-BLEED AFFILIATE NOTICE – edge to edge, on top */}
      <div className="w-full bg-zinc-100 border-b border-zinc-200 py-2.5 text-center text-[10px] text-zinc-600">
        This page contains affiliate links. When you purchase through the links provided,{' '}
        <span className="text-zinc-700 font-medium">US11 may earn a commission</span> at no extra cost to you.
      </div>

      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Tired of High Ping in EA FC and Online Games? Here’s How GearUP Booster Actually Helps
          </h1>

          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-08-10">August 10, 2026</time>
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

        {/* FEATURE IMAGE */}
        <figure className="relative w-full rounded-3xl overflow-hidden shadow-md mb-10 aspect-[16/9]">
          <Image
            src="https://i.ibb.co/RGr8G6c7/images.png"
            alt="GearUP Booster - Reduce Ping for Online Games"
            fill
            className="object-cover object-center"
            priority
          />
        </figure>

        {/* STICKY BUY BANNER */}
        <div className="sticky top-[140px] md:top-[148px] z-40 py-4 md:py-6 bg-white border-b border-zinc-100">
          <a
            href="https://gearup.sjv.io/JkWgG7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 bg-white border border-zinc-200 rounded-3xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <div>
              <h3 className="text-[17px] font-semibold text-[#020617] leading-tight">
                Try GearUP Booster – Reduce Ping &amp; Lag
              </h3>
            </div>
            <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center flex-shrink-0 p-2">
              <img
                src="https://i.ibb.co/M5Sfjqx2/logo-469aa6ef.webp"
                alt="GearUP"
                className="w-full h-full object-contain"
              />
            </div>
          </a>
        </div>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-6 pt-6">

          <p>
            Lag is the silent killer of online football. You time a perfect through ball, the defender is beaten… and then the game freezes for half a second. The chance is gone. In competitive modes or late-game moments in Ultimate Team, that delay can decide the entire match.
          </p>

          <p>
            For a lot of players, the problem isn’t their internet speed or their hardware. It’s the route their data takes to the game servers. That’s exactly where a tool like <strong>GearUP Booster</strong> comes in.
          </p>

          {/* GearUP Banner */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
            <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-black p-2">
                <img
                  src="https://i.ibb.co/M5Sfjqx2/logo-469aa6ef.webp"
                  alt="GearUP"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                  Try GearUP Booster Free
                </h3>
              </div>
            </div>
            <a
              href="https://gearup.sjv.io/JkWgG7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Try now
            </a>
          </div>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            What is GearUP Booster?
          </h2>
          <p>
            GearUP is a game network accelerator. Unlike a regular VPN, it doesn’t encrypt everything or hide your location. Its only job is to find a cleaner, more stable path between your device and the game servers.
          </p>
          <p>
            It uses something called <strong>Adaptive Intelligent Routing (AIR)</strong> — basically, it constantly checks different network routes and sends your game traffic through the one with the least congestion and lowest latency.
          </p>
          <p>
            The result? Lower ping, fewer spikes, and less packet loss.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Who actually benefits from it?
          </h2>
          <p>GearUP works best in these situations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You live far from the main game servers</li>
            <li>Your ISP has poor routing to certain regions</li>
            <li>You get random lag spikes even with decent internet</li>
            <li>You play cross-region (for example, European players on NA servers or vice versa)</li>
            <li>You play on console (PlayStation, Xbox, Switch) where network options are limited</li>
          </ul>
          <p>
            If your connection is already excellent and local, the improvement will be smaller. But if you’ve ever felt that frustrating “rubber-banding” or delayed inputs, this is the type of tool that can make a noticeable difference.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Supported platforms and games
          </h2>
          <p>One of the stronger points of GearUP is how wide its support is:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>PC (Windows)</li>
            <li>PlayStation</li>
            <li>Xbox</li>
            <li>Nintendo Switch</li>
            <li>Steam Deck</li>
            <li>Mobile (Android &amp; iOS)</li>
          </ul>
          <p>
            It supports thousands of games, including the big online titles most people care about — EA Sports FC, Call of Duty, Valorant, Apex Legends, Fortnite, and many more. New games are added regularly.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            How it feels in practice
          </h2>
          <p>Most players who benefit from it report two main improvements:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>More stable ping</strong> — the number doesn’t jump around as much</li>
            <li><strong>Fewer sudden lag spikes</strong> during important moments</li>
          </ul>
          <p>
            It won’t magically turn 180ms into 20ms if you’re on the other side of the world, but it can clean up a messy connection and make the game feel more responsive and consistent.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">
            Is it worth trying?
          </h2>
          <p>
            GearUP offers a free trial, which makes the decision easy. You can test it on your own connection and see the difference in real matches instead of relying on marketing claims.
          </p>
          <p>
            If you play a lot of online football (especially Ultimate Team or Clubs) or other competitive games and you’re tired of network issues ruining good moments, it’s one of the more legitimate tools in this category.
          </p>

          {/* FINAL CTA BANNER */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 my-10">
            <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-black p-2">
                <img
                  src="https://i.ibb.co/M5Sfjqx2/logo-469aa6ef.webp"
                  alt="GearUP"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
                  Ready to reduce lag?
                </h3>
              </div>
            </div>
            <a
              href="https://gearup.sjv.io/JkWgG7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap w-full sm:w-auto text-center"
            >
              Try GearUP Free
            </a>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: August 10, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/gaming" className="hover:text-gray-800">
            ← Back to gaming
          </Link>
        </footer>

      </div>
    </article>
  );
}