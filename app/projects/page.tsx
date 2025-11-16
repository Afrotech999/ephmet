"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 0,
      title: "Steel Structure Project",
      category: "industrial",
      image:
        "https://i.pinimg.com/736x/0e/d2/38/0ed238b406e22faa05ca7fc47235aeb7.jpg",
      details: [
        "Fabrication of heavy steel beams and load-bearing columns",
        "High-precision welding, plasma cutting, and assembly",
        "On-site steel erection using hydraulic cranes",
        "Industrial-grade corrosion-resistant coating",
        "ISO-certified quality inspection & load testing",
      ],
      description:
        "A complete structural steel solution for a multi-purpose industrial facility. The project included precision fabrication, structural integration, and durability engineering for long-term operation.",
    },
    {
      id: 1,
      title: "Highway Bridge Construction",
      category: "infrastructure",
      image:
        "https://i.pinimg.com/736x/0c/fa/52/0cfa522d193bb2fcfd6e5fe400970e77.jpg",
      details: [
        "Steel truss and bridge girder fabrication",
        "Advanced load-bearing design for high-capacity roads",
        "Bridge deck reinforcement and concrete integration",
        "On-site anti-corrosion treatment & weather sealing",
      ],
      description:
        "A major national-road project featuring heavy steel truss systems, engineered for stability, load distribution, and long-term resilience under extreme traffic conditions.",
    },
    {
      id: 3,
      title: "Industrial Warehouse Facility",
      category: "industrial",
      image:
        "https://i.pinimg.com/1200x/48/11/7f/48117f1f89f05d0acc8e848cb0065067.jpg",
      details: [
        "Wide-span steel framing for open-floor operations",
        "Heavy-load roof trusses and reinforced joints",
        "Customized fabrication accommodating machinery movement",
        "Fire-resistant coating and industrial-grade finishing",
      ],
      description:
        "A high-capacity warehouse facility built with precision steel engineering, optimized for manufacturing, logistics, and long-term heavy-duty operations.",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F4F5F7]">
      <Header />

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-24 bg-[#ECEEEF] border-b"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#333] mb-6">
            Projects Portfolio
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            A selection of our completed steel, infrastructure, and industrial
            engineering projects — delivered with precision, durability, and
            world-class standards.
          </p>
        </div>
      </motion.section>

      {/* FILTER BUTTONS */}
      <section className="py-12 bg-[#ECEEEF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`px-7 py-2.5 rounded font-semibold transition-all text-base ${
                selectedCategory === cat.id
                  ? "bg-[#333] text-white shadow"
                  : "bg-white border text-[#333] hover:border-[#555]"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white border border-gray-200 rounded-none shadow-md hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <span className="inline-block px-3 py-1 bg-gray-200 text-gray-800 text-xs font-semibold rounded-none mb-4">
                    {categories.find((c) => c.id === project.category)?.label}
                  </span>

                  <h3 className="text-xl font-bold text-[#333] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 text-base mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="text-gray-700 text-base list-disc pl-5 space-y-1">
                    {project.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-[#ECEEEF] border-t"
      >
        <div className="max-w-3xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333] mb-6">
            Ready for Your Project?
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Partner with us to bring your construction, infrastructure, or
            industrial project to life using world-class steel solutions and
            expert engineering.
          </p>

          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-[#333] text-white text-lg font-bold rounded-lg hover:bg-[#555] transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
