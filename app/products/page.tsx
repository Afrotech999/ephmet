"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { useState } from "react";

export default function Products() {
  const steelColor = "text-[#6E7C87]"; // Steel-like color

  const categories = [
    "All",
    "Flat Products",
    "Long Products",
    "Bitumen",
    "Sinotruck",
  ];

  const products = [
    // ---------------- FLAT PRODUCTS ----------------
    {
      name: "Hot Rolled Coils & Sheets",
      category: "Flat Products",
      image:
        "https://i.pinimg.com/1200x/c9/89/fd/c989fd71e10840a46963f7b11dc3c5c4.jpg",
    },
    {
      name: "Hot Rolled Pickled & Oiled",
      category: "Flat Products",
      image:
        "https://i.pinimg.com/736x/92/e3/24/92e324b6caf9304cd6efc3144057b71f.jpg",
    },
    {
      name: "Hot Dip Galvanized Coils & Sheets",
      category: "Flat Products",
      image:
        "https://i.pinimg.com/736x/ff/a2/a4/ffa2a4ce86a854bb56cf9658d4fcaa49.jpg",
    },
    {
      name: "Cold Rolled Coils & Sheets",
      category: "Flat Products",
      image:
        "https://i.pinimg.com/1200x/59/d8/8a/59d88a8fb7be14cae46fe8296108bbad.jpg",
    },
    {
      name: "Full Hard",
      category: "Flat Products",
      image:
        "https://i.pinimg.com/736x/f7/5d/7d/f75d7db0c07d7c12abb1fca0ddb2ee58.jpg",
    },
    {
      name: "Heavy Plates",
      category: "Flat Products",
      image:
        "https://i.pinimg.com/1200x/66/70/ba/6670baf5ab0203bec31705964e86e234.jpg",
    },
    {
      name: "Pre-Painted Galvanized Sheets",
      category: "Flat Products",
      image:
        "https://i.pinimg.com/736x/a1/11/8b/a1118bbb50103c172e039e2bbaa01ebf.jpg",
    },
    {
      name: "Hot Rolled Chequered Sheets",
      category: "Flat Products",
      image:
        "https://i.pinimg.com/1200x/b1/05/2c/b1052c59402162d094ac58fbda940b69.jpg",
    },
    {
      name: "Tinplate",
      category: "Flat Products",
      image:
        "https://i.pinimg.com/736x/cd/8f/8b/cd8f8b180343449331093913849c75cc.jpg",
    },

    // ---------------- LONG PRODUCTS ----------------
    {
      name: "Billets",
      category: "Long Products",
      image:
        "https://i.pinimg.com/1200x/83/80/56/8380560a1d4872c94e292249e835446f.jpg",
    },
    {
      name: "Reinforcing Deformed Steel Bars",
      category: "Long Products",
      image:
        "https://i.pinimg.com/1200x/bf/b7/ad/bfb7ade377201f1e00a1e459b76f6ce6.jpg",
    },
    {
      name: "Wire Rods",
      category: "Long Products",
      image:
        "https://i.pinimg.com/736x/88/fd/cd/88fdcd991f51c5036833d68f55ee4db1.jpg",
    },
    {
      name: "Wire Mesh",
      category: "Long Products",
      image:
        "https://i.pinimg.com/1200x/02/a8/e0/02a8e0f0e9ba3779f2708b35f19a4b7f.jpg",
    },
    {
      name: "Profiles",
      category: "Long Products",
      image:
        "https://i.pinimg.com/736x/b2/29/66/b229662a74016334ec9ed3dacc254333.jpg",
    },
    {
      name: "Merchant Bars",
      category: "Long Products",
      image:
        "http://i.pinimg.com/736x/0f/9f/16/0f9f16ca6c4ff6d905bb5828c6605de4.jpg",
    },
    {
      name: "Hollow Sections",
      category: "Long Products",
      image:
        "https://i.pinimg.com/736x/9c/60/8f/9c608f688c1fe6e9776d0a0cbcd3f692.jpg",
    },
    {
      name: "Crane Rails",
      category: "Long Products",
      image:
        "https://i.pinimg.com/1200x/2a/0d/7c/2a0d7c7d43248583d1df08c50c0eb68d.jpg",
    },

    // ---------------- BITUMEN ----------------
    {
      name: "Road Grade Bitumen",
      category: "Bitumen",
      image:
        "https://i.pinimg.com/736x/a6/b8/b3/a6b8b33776a470c72978ce8315cb87c7.jpg",
    },
    {
      name: "Penetration Grade Bitumen",
      category: "Bitumen",
      image:
        "https://i.pinimg.com/736x/de/bf/37/debf37b842bf359097a2f25c755aa3e6.jpg",
    },

    // ---------------- SINOTRUCK ----------------
    {
      name: "Sinotruk Howo Dump Truck",
      category: "Sinotruck",
      image:
        "https://i.pinimg.com/736x/2a/1a/67/2a1a6742539bf0815c8436f3317f51e4.jpg",
    },
    {
      name: "Sinotruk Howo Cargo Truck",
      category: "Sinotruck",
      image:
        "https://i.pinimg.com/1200x/c9/11/41/c91141b4700fe62f6113ad91dc73a72d.jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  // -----------------------------
  // FILTERED DATA
  // -----------------------------
  const flat = products.filter((p) => p.category === "Flat Products");
  const long = products.filter((p) => p.category === "Long Products");
  const bitumen = products.filter((p) => p.category === "Bitumen");
  const sinotruck = products.filter((p) => p.category === "Sinotruck");

  // When filter applied → use normal filtered grid
  const filteredProducts =
    selectedCategory === "All"
      ? [] // empty array instead of null
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />

      {/* HERO */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-zinc-100 to-zinc-200 border-b border-zinc-300">
        <div className="max-w-7xl mx-auto px-4 flex gap-3 overflow-x-auto no-scrollbar">
          <h1 className="text-2xl sm:text-5xl font-bold text-zinc-800 mb-6">
            Products & Services
          </h1>
          <p className="text-lg text-zinc-600 max-w-3xl">
            Explore our range of high-quality steel products, bitumen solutions,
            and heavy-duty trucks.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="bg-white border-b border-zinc-300 py-4 sticky top-[66px] z-40">
        <div className="max-w-7xl mx-auto px-4 flex gap-3 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap transition
                ${
                  selectedCategory === cat
                    ? "bg-[#6E7C87] text-white border-[#6E7C87]"
                    : "bg-white text-zinc-700 border-zinc-400 hover:bg-zinc-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID SECTION */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4">
          {/* If filtered category selected → normal grid */}
          {selectedCategory !== "All" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          ) : (
            <>
              {/* ------------------ FLAT + LONG (side by side) ------------------ */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
                {/* LEFT = FLAT PRODUCTS */}
                <div>
                  <h2 className="text-xl font-bold mb-6 text-zinc-700">
                    Flat Products
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {flat.map((product) => (
                      <ProductCard key={product.name} product={product} />
                    ))}
                  </div>
                </div>

                {/* RIGHT = LONG PRODUCTS */}
                <div>
                  <h2 className="text-xl font-bold mb-6 text-zinc-700">
                    Long Products
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {long.map((product) => (
                      <ProductCard key={product.name} product={product} />
                    ))}
                  </div>
                </div>
              </div>

              {/* ------------------ BITUMEN + SINOTRUCK BELOW ------------------ */}
              <h2 className="text-xl font-bold mt-16 mb-6 text-zinc-700">
                Other Products
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {bitumen.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
                {sinotruck.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProductCard({ product }: any) {
  return (
    <div
      className="group bg-white border border-zinc-300 rounded-lg shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col 
  min-h-[270px] sm:min-h-[300px]"
    >
      {/* IMAGE */}
      <div
        className="w-full h-32 sm:h-40 bg-gray-200"
        style={{
          backgroundImage: `url(${product.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="p-4 pb-3 flex flex-col flex-grow">
        <p className="text-[11px] uppercase text-[#6E7C87] font-semibold">
          {product.category}
        </p>

        <h3 className="text-sm sm:text-base font-bold text-zinc-800 mt-1 mb-2 leading-snug line-clamp-2">
          {product.name}
        </h3>

        <Link
          href="/contact"
          className="mt-auto inline-block text-xs sm:text-sm px-3 py-2 bg-[#6E7C87] text-white rounded hover:bg-[#626F78] transition"
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
}
