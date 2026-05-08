'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok, FaTwitter, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Postavljanje dark mode-a pri učitavanju
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setDarkMode(isDark);

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle funkcija
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <footer className="bg-black text-white py-4">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} US11. All rights reserved.</p>

          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex">
              <a href="https://www.youtube.com/@us11fc" className="text-sm hover:underline mx-2">
                <FaYoutube size={20} />
              </a>
              <a href="https://www.instagram.com/us11fc/" className="text-sm hover:underline mx-2">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61565465891580" className="text-sm hover:underline mx-2">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.tiktok.com/@us11fc" className="text-sm hover:underline mx-2">
                <FaTiktok size={20} />
              </a>
              <a href="https://x.com/US11FC" className="text-sm hover:underline mx-2">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/us11" className="text-sm hover:underline mx-2">
                <FaLinkedin size={20} />
              </a>
            </div>

            {/* Dark Mode Switcher */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle dark mode"
              suppressHydrationWarning={true}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400">
          <p>
            This site is for promoting products available on
            <a href="https://www.mlsstore.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> MLS Store</a> & 
            <a href="https://www.fanatics.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> Fanatics</a>.
            We are affiliate partners with MLS Store and Fanatics. This site is independently operated and is not officially endorsed by or affiliated with MLS, its clubs, or their subsidiaries. All logos, images, and trademarks belong to their respective owners and are used for promotional purposes only.
          </p>

          <Script
            id="iubenda-loader"
            strategy="afterInteractive"
            src="https://cdn.iubenda.com/iubenda.js"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;