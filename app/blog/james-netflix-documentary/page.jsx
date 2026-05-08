'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiCopy } from 'react-icons/fi';

export default function JamesNetflixDocumentary() {
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

  const articleTitle = "James. Netflix’s Intimate Portrait of Colombia’s Last True No. 10";

  return (
    <article className="w-full min-h-screen bg-white text-[#020617]">
      <div className="max-w-4xl mx-auto py-12 px-4 md:px-0">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            James. Netflix’s Intimate Portrait of Colombia’s Last True No. 10
          </h1>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>By Mio Ristić</span>
            <span>•</span>
            <time dateTime="2026-05-08">May 8, 2026</time>
          </div>

          {/* SOCIAL SHARE BUTTONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition">
              <FaFacebookF size={20} />
            </a>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(articleTitle)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black text-white hover:opacity-80 transition">
              <FaTwitter size={20} />
            </a>
            <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleTitle + ' ' + currentUrl)}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-[#25D366] text-white hover:opacity-80 transition">
              <FaWhatsapp size={20} />
            </a>
            <button onClick={handleCopyLink} className="p-2 rounded-full bg-gray-200 text-[#020617] hover:bg-gray-300 transition">
              <FiCopy size={20} />
            </button>
          </div>
        </header>

        {/* FEATURE IMAGE */}
        <figure className="w-full rounded-2xl overflow-hidden shadow-md mb-10">
          <Image
            src="https://i.ibb.co/jZk4DKwK/M5-HDXY3-HJ5-HAFMM6-DCSGAK33-KU.avif"
            alt="James Rodríguez Netflix Documentary"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
          <figcaption className="text-xs text-gray-400 px-3 py-2">
            Netflix Original • James.
          </figcaption>
        </figure>

        {/* ARTICLE CONTENT */}
        <section className="prose prose-lg max-w-none leading-relaxed space-y-8">

          <p>On May 21, just weeks before the 2026 World Cup begins in North America, Netflix will release <strong>James.</strong>, a three-part documentary series that Colombian football has been waiting for — perhaps for an entire generation.</p>



          <p>For millions of Colombians, James Rodríguez has never been just a footballer. He has been a symbol. A symbol of elegance amid chaos, of technical brilliance in an increasingly physical game, and of a nation’s stubborn belief that beauty can still triumph.</p>

          <p>Now, at 34, with one final World Cup ahead of him, James is ready to tell his own story — unfiltered.</p>


{/* VIDEO */}
        <div className="my-10">
          <h2 className="text-3xl font-bold mb-4">James. | Tráiler oficial | Netflix</h2>
          <div className="aspect-video w-full bg-black rounded-2xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/QHqV-54JMjQ"
              title="James. | Tráiler oficial | Netflix"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
          <h2 className="text-3xl font-bold mt-10 mb-4">The Timing Is Perfect</h2>
          
          <p>The release of <strong>James.</strong> is no coincidence. It arrives at the precise moment when Colombia — and the football world — is once again looking to their No. 10 for magic. James is no longer the untouchable prodigy of 2014, but he remains the emotional and creative heartbeat of the national team.</p>

          <p>Netflix understands the weight of this moment. By dropping the series right before the tournament, they are positioning it not just as a sports documentary, but as a cultural event.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">What Makes This Different</h2>
        
          <p>According to those familiar with the project, <strong>James.</strong> is not another glossy highlight reel. Directed by Colombian filmmaker Simón Brand, the series is being described as raw, intimate, and deeply personal.</p>

          <p>James opens up about:</p>
          <ul className="list-disc pl-6 space-y-2 my-6">
            <li>His difficult upbringing in Cúcuta</li>
            <li>The explosive 2014 World Cup that made him a global superstar and earned him the Puskás Award for that unforgettable goal against Uruguay</li>
            <li>The immense pressure of wearing the iconic No. 10 shirt at Real Madrid and Bayern Munich</li>
            <li>The injuries, self-doubt, and mental battles that followed</li>
            <li>His complex relationship with fame and the Colombian media</li>
            <li>What the 2026 World Cup truly means to him as he enters the final chapter of his career</li>
          </ul>

          <p>The documentary features never-before-seen archival footage and candid interviews with family members, former coaches, teammates, and James himself — speaking with a level of honesty he has rarely shown before.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">The Last Romantic No. 10</h2>
             <figure className="relative w-full rounded-2xl overflow-hidden shadow-md my-8">
                      <Image
                        src="https://assets.goal.com/images/v3/blta917904c20b81340/crop/MM5DGNBSG45DCOJSHA5G433XMU5DONJVHIYTKNA=/GettyImages-2264433346.jpg?auto=webp&format=pjpg&width=3840&quality=60"
                        alt="USMNT 2026 Home Jersey"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                        priority
                      />
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded font-medium">
                        Creator: David Berding
 | 
Credit: Getty Images
Copyright: 2026 Getty Images
                      </div>
                    </figure>
          <p>Beyond the personal story, <strong>James.</strong> touches on something much larger.</p>
          <p>In an era increasingly dominated by athletic machines, tactical systems, and data-driven football, James Rodríguez stands as one of the last true romantic No. 10s — a player who can slow down time with a single touch, see passes others cannot, and carry the dreams of an entire nation on his shoulders.</p>

          <p>He represents a dying breed: the artist in a sport that has become more and more about science and power.</p>

          <h2 className="text-3xl font-bold mt-10 mb-4">A Cultural Moment for Colombia — and Football</h2>
          <p>Whether James can produce one final magical summer in 2026 remains to be seen. What is already certain is that his place in football history is secure. From the dusty fields of Cúcuta to lighting up the Maracanã, his journey has been anything but ordinary.</p>

          <p><strong>James.</strong> will not be just another sports documentary. For many Colombians, and for football romantics around the world, it will be a love letter — a chance to revisit the joy, the pain, the glory, and the enduring romance of one of modern football’s most compelling figures.</p>

          <p className="text-xl font-semibold mt-10">The countdown to May 21 has already begun.</p>

        </section>

         

        {/* FOOTER */}
        <footer className="mt-16 border-t pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
          <div>
            <p>Published: May 8, 2026</p>
            <p>Author: Mio Ristić</p>
          </div>
          <Link href="/blog" className="hover:text-gray-800">Back to Blog</Link>
        </footer>

      </div>
    </article>
  );
}