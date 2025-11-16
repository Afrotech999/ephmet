"use client";

import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden font-sans">
      {/* Static Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/1200x/9f/d6/0e/9fd60e5821db23d8b5ffbb3b9eeb9b71.jpg"
          alt="Steel background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 className="font-extrabold text-white leading-tight tracking-tight">
            <span className="block leading-tight">
              <span className="block text-3xl sm:text-5xl lg:text-6xl">
                EPHMET
              </span>
              <span className="block text-lg sm:text-xl lg:text-2xl tracking-[0.18em]">
                RED SEA FZCO
              </span>
            </span>
            <span className="block text-1xl sm:text-6xl lg:text-4xl mt-1">
              INDUSTRIAL MATERIALS
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Premier steel import & export solutions proudly operating from
            <span className="font-semibold text-white"> Djibouti</span>,
            supplying high-grade industrial materials across the region.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-700 text-white font-bold rounded-2xl hover:bg-blue-800 transition-colors hover:shadow-lg"
            >
              Request Quote
            </Link>
            <Link
              href="/products"
              className="px-8 py-3 border-2 border-gray-300 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      {/* Arrow Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce">
        <FiChevronDown size={40} />
      </div>
    </section>
  );
}
