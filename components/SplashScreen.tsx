"use client";

import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 2500); // show for 2.5s
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      style={{
        background: "linear-gradient(135deg, #0a192f, #1e3a5f)", // soft blue-black gradient
      }}
    >
      {/* Logo */}
      <img
        src="/logo.png"
        alt="EPHMET Logo"
        className="w-24 h-24 mb-6 animate-pulse"
      />

      {/* Company Name with same font as header */}
      <h1
        className="text-3xl font-bold text-white mb-6"
        style={{ fontFamily: "AquireLight, sans-serif", fontWeight: 400 }}
      >
        EPHMET
      </h1>

      {/* Loading Spinner */}
      <div className="w-12 h-12 border-4 border-white border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}
