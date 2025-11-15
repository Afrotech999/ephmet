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
        background:
          "linear-gradient(135deg, #00A3DD, #FFFFFF, #007847, #FF0000)",
      }}
    >
      {/* Logo */}
      <img
        src="/logo.png"
        alt="EPHMET Logo"
        className="w-24 h-24 mb-6 animate-pulse"
      />
      {/* Company Name */}
      <h1 className="text-3xl font-bold text-white mb-6">EPHMET</h1>
      {/* Loading Spinner */}
      <div className="w-12 h-12 border-4 border-white border-t-blue-900 rounded-full animate-spin"></div>
    </div>
  );
}
