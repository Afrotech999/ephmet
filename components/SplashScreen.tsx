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
        background: "linear-gradient(135deg, #0a192f, #1e3a5f)",
      }}
    >
      {/* Logo */}

      <img
        src="/logo.png"
        alt="EPHMET Logo"
        className="w-36 h-36 mb-6 animate-pulse"
      />

      {/* Company Name */}
      <h1
        className="text-3xl font-bold text-white mb-6"
        style={{ fontFamily: "AquireLight, sans-serif", fontWeight: 400 }}
      >
        EPHMET
      </h1>

      {/* MP4 Loader */}
      <video
        src="/loading.mp4" // make sure it's in /public
        autoPlay
        loop
        muted
        className="w-28 h-28 object-contain"
      />
    </div>
  );
}
