"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Highway Bridge Construction",
      category: "infrastructure",
      image: "/placeholder.svg?key=hwayb",
      description:
        "Large-scale structural steel project for highway bridge construction in Addis Ababa.",
    },
    {
      id: 2,
      title: "Commercial Building Complex",
      category: "commercial",
      image: "/placeholder.svg?key=cmmrc",
      description:
        "Multi-story commercial building with extensive structural steel framework.",
    },
    {
      id: 3,
      title: "Industrial Warehouse Facility",
      category: "industrial",
      image: "/placeholder.svg?key=indst",
      description:
        "Heavy-duty structural steel warehouse with custom metal fabrication.",
    },
    {
      id: 4,
      title: "Water Treatment Plant",
      category: "infrastructure",
      image: "/placeholder.svg?key=wattr",
      description:
        "Reinforced steel structures for water treatment and storage facility.",
    },
    {
      id: 5,
      title: "Shopping Mall Development",
      category: "commercial",
      image: "/placeholder.svg?key=shpml",
      description:
        "Multi-level shopping complex featuring advanced steel construction.",
    },
    {
      id: 6,
      title: "Manufacturing Plant Expansion",
      category: "industrial",
      image: "/placeholder.svg?key=mnfct",
      description:
        "Industrial manufacturing facility with state-of-the-art steel framework.",
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

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-[#ECEEEF] border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-5xl font-bold text-[#333] mb-6">
            Projects Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Showcasing our expertise through completed projects across
            infrastructure, commercial, and industrial sectors.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-[#ECEEEF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#333] text-white shadow"
                    : "bg-white border text-[#333] hover:border-[#555]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gray-100">
                  <div
                    className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <span className="inline-block px-3 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded mb-2">
                    {categories.find((c) => c.id === project.category)?.label}
                  </span>

                  <h3 className="text-lg font-bold text-[#333] mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  <button className="w-full px-4 py-2 bg-[#333] text-white rounded text-sm font-medium hover:bg-[#555] transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#ECEEEF] border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#333] mb-6">
            Ready for Your Project?
          </h2>
          <p className="text-bse text-gray-600 mb-8">
            Let us help you bring your construction or industrial project to
            life with our premium steel solutions.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#333] text-white font-bold rounded hover:bg-[#555] transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
