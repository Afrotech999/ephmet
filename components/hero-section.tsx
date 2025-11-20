"use client";

import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/1200x/3c/90/58/3c905873bebed296579502bf6b3bc933.jpg"
          alt="Steel background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* HEADLINE SECTION */}
        <h1 className="font-extrabold text-white leading-tight tracking-tight">
          {/* EPHMET */}
          <span className="block text-3xl sm:text-5xl lg:text-6xl opacity-0 animate-[fadeDown_0.9s_cubic-bezier(0.33,1,0.68,1)_forwards]">
            EPHMET
          </span>

          {/* RED SEA FZCO */}
          <span className="block text-lg sm:text-xl lg:text-2xl tracking-[0.18em] opacity-0 animate-[fadeUp_1s_cubic-bezier(0.33,1,0.68,1)_forwards_0.2s]">
            RED SEA FZCO
          </span>

          {/* INDUSTRIAL MATERIALS */}
          <span className="block text-xl sm:text-4xl lg:text-5xl mt-2 opacity-0 animate-[fadeLeft_1.1s_cubic-bezier(0.33,1,0.68,1)_forwards_0.35s]">
            INDUSTRIAL MATERIALS
          </span>
        </h1>

        {/* PARAGRAPH */}
        <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto opacity-0 animate-[fadeRight_1s_cubic-bezier(0.33,1,0.68,1)_forwards_0.55s]">
          Premier steel import & export solutions proudly operating from
          <span className="font-semibold text-white"> Djibouti</span>, supplying
          high-grade industrial materials across the region.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 opacity-0 animate-[scaleIn_0.9s_cubic-bezier(0.33,1,0.68,1)_forwards_0.75s]">
          <Link
            href="/contact"
            className="px-6 py-2 sm:px-8 sm:py-3 bg-blue-700 text-white font-bold rounded-2xl hover:bg-blue-800 transition-colors hover:shadow-lg w-full sm:w-auto max-w-[200px] sm:max-w-none mx-auto sm:mx-0"
          >
            Request Quote
          </Link>

          <Link
            href="/products"
            className="px-6 py-2 sm:px-8 sm:py-3 border-2 border-gray-300 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors w-full sm:w-auto max-w-[200px] sm:max-w-none mx-auto sm:mx-0"
          >
            Explore Products
          </Link>
        </div>
      </div>

      {/* SCROLL ICON */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce">
        <FiChevronDown size={40} />
      </div>
    </section>
  );
}
