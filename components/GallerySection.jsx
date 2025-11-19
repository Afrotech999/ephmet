"use client";

import { motion } from "framer-motion";

const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/gallery/photo${i + 1}.jpeg`,
}));

export default function GallerySection() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-100"
      id="gallery"
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
            Our <span className="text-gray-900">Gallery</span>
          </motion.h2>
          <p className="text-gray-600 text-base mt-4 max-w-2xl mx-auto">
            A glimpse of our work, products, operations, and industrial
            presence.
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl bg-gray-200"
            >
              <img
                src={img.src}
                alt={`Gallery Photo ${img.id}`}
                className="w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
