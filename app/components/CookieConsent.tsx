"use client";   // ← OVO MORA BITI NA SAMOM VRHU

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie_consent");
    if (!saved) {
      setOpen(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "true");
    setOpen(false);
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
  };

  const reject = () => {
    localStorage.setItem("cookie_consent", "false");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 md:p-8 mx-4">
        <h2 className="text-2xl font-bold text-black mb-4">US11 Cookies</h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          We use cookies to improve your experience, analyze traffic and show relevant content.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={accept}
            className="flex-1 bg-black hover:bg-gray-900 text-white py-3.5 rounded-xl font-medium transition"
          >
            Accept All
          </button>
          <button
            onClick={reject}
            className="flex-1 border border-gray-300 hover:bg-gray-100 text-black py-3.5 rounded-xl font-medium transition"
          >
            Reject
          </button>
        </div>

        <p className="text-[11px] text-gray-500 mt-6 text-center">
          You can change your preferences anytime in settings.
        </p>
      </div>
    </div>
  );
}