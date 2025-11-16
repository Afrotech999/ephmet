"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-gray-800/40 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <img
              src="/logo.png"
              alt="EPHMET Logo"
              className={`w-12 h-12 md:w-13 md:h-13 rounded-full object-cover transition-all duration-300 ${
                scrolled ? "" : "ring-1 ring-white/40"
              }`}
            />
            <span
              className={`text-xl sm:text-3xl md:text-4xl tracking-wide transition-colors ${
                scrolled
                  ? "text-gray-900 group-hover:text-blue-700"
                  : "text-white drop-shadow-lg group-hover:text-blue-300"
              }`}
              style={{ fontFamily: "AquireLight, sans-serif", fontWeight: 400 }}
            >
              EPHMET
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-4">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/products", label: "Products" },
              { href: "/projects", label: "Projects" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-base md:text-lg font-bold rounded-lg transition-all ${
                  scrolled
                    ? "text-gray-800 hover:text-blue-700 hover:bg-gray-100"
                    : "text-white drop-shadow-md hover:text-white hover:bg-white/20"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`px-5 py-2.5 text-base font-semibold rounded-lg shadow-md transition-colors ${
                scrolled
                  ? "bg-blue-700 text-white hover:bg-blue-800"
                  : "bg-white/25 text-white backdrop-blur hover:bg-white/30"
              }`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 flex flex-col justify-center gap-1 transition-all`}
            aria-label="Toggle menu"
          >
            {/* Custom Hamburger */}
            <span
              className={`block h-1 rounded bg-blue-500 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : "w-6"
              }`}
            ></span>
            <span
              className={`block h-1 rounded bg-blue-500 transition-all duration-300 ${
                isOpen ? "opacity-0" : "w-8"
              }`}
            ></span>
            <span
              className={`block h-1 rounded bg-blue-500 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2 w-4" : "w-5"
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden pb-4 border-t ${
              scrolled
                ? "border-gray-300 bg-white/90"
                : "border-white/20 bg-gray-900/40 backdrop-blur"
            }`}
          >
            <div className="flex flex-col gap-2 pt-4 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/products", label: "Products" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded text-base font-bold transition ${
                    scrolled
                      ? "text-gray-800 hover:bg-gray-100"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`px-5 py-3 mt-2 rounded-lg text-base font-semibold transition-colors ${
                  scrolled
                    ? "bg-blue-700 text-white hover:bg-blue-800"
                    : "bg-white/25 text-white hover:bg-white/30"
                }`}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
