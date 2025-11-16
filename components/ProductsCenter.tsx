"use client";

import { motion } from "framer-motion";
import { Boxes } from "lucide-react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

// All products
const products: Product[] = [
  {
    id: 1,
    name: "Hot Rolled Coils & Sheets",
    category: "Flat Products",
    image:
      "https://i.pinimg.com/1200x/c9/89/fd/c989fd71e10840a46963f7b11dc3c5c4.jpg",
    description:
      "Durable hot rolled steel coils suitable for heavy-duty industrial applications.",
  },
  {
    id: 2,
    name: "Cold Rolled Coils & Sheets",
    category: "Flat Products",
    image:
      "https://i.pinimg.com/1200x/59/d8/8a/59d88a8fb7be14cae46fe8296108bbad.jpg",
    description:
      "Precision-finished cold rolled steel sheets used in construction and manufacturing.",
  },
  {
    id: 3,
    name: "Billets",
    category: "Long Products",
    image:
      "https://i.pinimg.com/1200x/83/80/56/8380560a1d4872c94e292249e835446f.jpg",
    description:
      "Strong and durable steel beams ideal for large construction frameworks.",
  },
  {
    id: 4,
    name: "Reinforcing Steel Bar",
    category: "Long Products",
    image:
      "https://i.pinimg.com/1200x/bf/b7/ad/bfb7ade377201f1e00a1e459b76f6ce6.jpg",
    description:
      "High-tensile reinforcing bars for reinforced concrete structures.",
  },
  {
    id: 5,
    name: "Bitumen",
    category: "Bitumen",
    image:
      "https://i.pinimg.com/736x/a6/b8/b3/a6b8b33776a470c72978ce8315cb87c7.jpg",
    description:
      "High-grade Bitumen suitable for road construction, waterproofing, and industrial applications.",
  },
  {
    id: 6,
    name: "Sinotruk Howo Dump Truck",
    category: "Sinotruck",
    image:
      "https://i.pinimg.com/736x/2a/1a/67/2a1a6742539bf0815c8436f3317f51e4.jpg",
    description:
      "Heavy-duty dump truck suitable for construction and industrial transport.",
  },
];

// Select one or two sample products per category
const sampleProducts: Product[] = [
  ...products.filter((p) => p.category === "Flat Products").slice(0, 2),
  ...products.filter((p) => p.category === "Long Products").slice(0, 2),
  ...products.filter((p) => p.category === "Bitumen").slice(0, 1),
  ...products.filter((p) => p.category === "Sinotruck").slice(0, 1),
];

export default function ProductsCenter() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-100 to-gray-50"
      id="products"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-5xl font-extrabold text-gray-800 tracking-tight"
          >
            Featured <span className="text-gray-900">Products</span>
          </motion.h2>
          <p className="text-gray-600 text-base mt-4 max-w-2xl mx-auto">
            Take a look at some of our high-quality steel products and
            industrial solutions.
          </p>
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {sampleProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-xl"
            >
              <div className="h-52 w-full bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm font-medium text-gray-700">
                    {product.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition-all"
          >
            <Boxes className="w-5 h-5" />
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
