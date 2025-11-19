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
        background: "linear-gradient(135deg, #fff, #fff)",
      }}
    >
      {/* Logo */}

      <img
        src="/logo.png"
        alt="EPHMET Logo"
        className="w-24 h-24  sm:w-52 sm:h-52 mb-6 animate-pulse"
      />

      {/* Company Name */}
      <h1
        className="text-3xl sm:6x1 font-bold text-blue-600 mb-6"
        style={{ fontFamily: "AquireLight, sans-serif", fontWeight: 500 }}
      >
        EPHMET
      </h1>

      {/* MP4 Loader */}
      <video
        src="/loading.mp4"
        autoPlay
        loop
        muted
        className="w-28 h-28 object-contain"
      />
    </div>
  );
}
