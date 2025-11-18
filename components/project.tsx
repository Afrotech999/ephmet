import { Play, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function EphmetSpotlight() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
          {/* Video Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black">
              {/* YouTube Player */}
              {isPlaying ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/086dMAnmI6g?autoplay=1&rel=0&modestbranding=1&playsinline=1"
                  title="EPHMET Steel Structure Project"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <div
                    className="absolute inset-0 bg-cover bg-center cursor-pointer"
                    style={{
                      backgroundImage: `url(https://img.youtube.com/vi/086dMAnmI6g/maxresdefault.jpg)`,
                    }}
                    onClick={() => setIsPlaying(true)}
                  />

                  <div
                    className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-all duration-300 cursor-pointer flex items-center justify-center"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div className="w-14 h-14 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                      <Play
                        className="w-8 h-8 sm:w-12 sm:h-12 text-white ml-1 sm:ml-2"
                        fill="white"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Close Button */}
              {isPlaying && (
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center"
                >
                  <X className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </button>
              )}

              {/* COMPACT Badge */}
              <Link
                href="/"
                className="absolute top-3 sm:top-5 left-3 sm:left-5 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <img
                  src="/logo.png"
                  alt="EPHMET Logo"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover ring-1 ring-blue-600/20 shadow-sm"
                />
                <span
                  className="text-sm sm:text-lg tracking-wider text-gray-900 font-normal group-hover:text-blue-700 transition-colors"
                  style={{
                    fontFamily: "AquireLight, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  EPHMET
                </span>
              </Link>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Steel Structure Project
            </h2>

            <p className="text-base sm:text-lg lg:text-2xl text-gray-700 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0">
              A complete structural steel solution for a multi-purpose
              industrial facility. Precision fabrication, advanced structural
              integration, and engineered durability ensure decades of reliable
              performance in demanding conditions.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="/projects"
                className="group inline-flex items-center px-8 sm:px-10 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base sm:text-lg rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                View Full Project
                <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
