'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

export default function NeymarCincinnati2026() {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") setCurrentUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      alert("✅ Link copied to clipboard!");
    }
  };

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(
    "What If Neymar Jr. Joined FC Cincinnati? The Reality, The Hype, and What It Would Mean"
  )}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Neymar to FC Cincinnati? Preliminary Talks Underway as MLS Rumors Heat Up
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-04-11">April 11, 2026</time>
          </div>

          {/* SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition"><FaFacebookF size={20} /></a>
            <a href={twitterShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition"><FaTwitter size={20} /></a>
            <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition"><FaWhatsapp size={20} /></a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition"><FiCopy size={20} /></button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://assets.goal.com/images/v3/getty-2202920638/crop/MM5DGMJSGA5DCNZVGU5G433XMU5DEMRUHIYTENY=/GettyImages-2202920638.jpg?auto=webp&format=pjpg&width=3840&quality=60"
            alt="Neymar Jr. FC Cincinnati transfer rumor"
            width={1200}
            height={675}
            className="w-full h-auto object-cover object-center"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Licence details
        
            Credit: Getty Images
            Copyright: 2025 Getty Images
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none mb-8 leading-relaxed space-y-6">
          
          <p>
            When reports surfaced this week that FC Cincinnati had initiated exploratory contact with Neymar Jr.’s camp, the reaction followed a now familiar MLS pattern — excitement, skepticism, and rapid global amplification.
          </p>

          <p>
            Within hours, the story had moved beyond its original reporting and into the broader football conversation, framed less as a possibility and more as the league’s next inevitable headline move.
          </p>

          <p>
            But beneath that noise, the reality is far more measured.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Early Contact, Not a Deal</h2>

          <p>
            At this stage, there is no agreement to analyze — only initial dialogue.
          </p>

          <p>
            FC Cincinnati have made contact to understand the parameters: Neymar’s level of interest, potential salary expectations, and long-term timing. No formal offer has been submitted, and discussions remain in a preliminary phase.
          </p>

          <p>
            Neymar, currently under contract with Santos through December 2026, is not actively pushing for an exit. For now, this is best understood as a strategic inquiry rather than an active negotiation.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Why This Conversation Exists</h2>

          <p>
            The more revealing aspect of the story is not whether the move happens, but why it is being explored at all.
          </p>

          <p>
            For Cincinnati, the motivation is clear. The club has spent recent seasons building competitive credibility within MLS. Engaging with a player of Neymar’s profile represents a shift — from participation to ambition on a global scale.
          </p>

          <p>
            For Neymar, the calculation reflects a familiar late-career dynamic: reduced physical intensity, continued commercial relevance, and the opportunity to remain the focal point of a team.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Football Reality</h2>

          <p>
            At his peak, Neymar was among the most decisive attacking players in the world — capable of altering matches through individual creativity and technical control.
          </p>

          <p>
            The question now is less about ability, and more about consistency and availability.
          </p>

          <p>
            Recent seasons have been shaped by recurring injuries, raising a key consideration for any potential move: not just what he can deliver, but how often he can deliver it.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">Off the Pitch Impact</h2>

          <p>
            If a move were to materialize, the commercial effects would be immediate and substantial.
          </p>

          <p>
            Shirt sales would spike globally. Matchday demand would increase. FC Cincinnati would shift overnight from a strong MLS side to an internationally recognized brand.
          </p>

          <p>
            This is no longer hypothetical within the league — similar moves have already demonstrated the scale of that impact.
          </p>

          <h2 className="text-3xl font-bold mt-10 mb-4">How Realistic Is It?</h2>

          <p>
            For now, the probability remains limited.
          </p>

          <p>
            Structural challenges — including MLS salary mechanisms, roster rules, and the timing of Neymar’s current contract — present significant obstacles. There is also the personal dimension: whether a move to Ohio aligns with his priorities at this stage.
          </p>

          <p>
            What can be said with certainty is that this is an early-stage scenario, not an advanced negotiation.
          </p>

          <p className="font-semibold mt-8">
            Whether or not Neymar ultimately arrives, the broader signal is clear: MLS clubs are no longer waiting for opportunities at the top level — they are actively creating them.
          </p>

        </section>

        {/* FOOTER */}
        <footer className="mt-12 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-600">
            <p>Published: April 11, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <div className="flex gap-2">
            <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-800">← Back to blog</Link>
          </div>
        </footer>

      </div>
    </article>
  );
}