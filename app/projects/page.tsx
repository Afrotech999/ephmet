"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Projects with additional details
  const projects = [
    {
      id: 0,
      title: "Steel Structure Project",
      category: "industrial",
      image:
        "https://i.pinimg.com/736x/0e/d2/38/0ed238b406e22faa05ca7fc47235aeb7.jpg",
      details: [
        "Fabrication of heavy steel beams and columns",
        "Welding, cutting, and high-precision assembly",
        "On-site steel erection using cranes",
        "Corrosion protection and industrial coating",
      ],
      description:
        "A complete steel structure project featuring heavy fabrication, precise assembly, and structural finishing designed for long-term industrial use.",
    },
    {
      id: 1,
      title: "Highway Bridge Construction",
      category: "infrastructure",
      image:
        "https://i.pinimg.com/736x/0c/fa/52/0cfa522d193bb2fcfd6e5fe400970e77.jpg",
      details: [
        "Steel truss and girder fabrication",
        "Load-bearing structural design",
        "Bridge deck reinforcement",
      ],
      description:
        "Large-scale steel bridge project incorporating reinforced truss assemblies and advanced engineering for heavy traffic operations.",
    },
    {
      id: 2,
      title: "Commercial Building Complex",
      category: "commercial",
      image:
        "https://i.pinimg.com/1200x/ea/85/a4/ea85a4e479990e0a714cca0f4564e325.jpg",
      details: [
        "Multi-story steel framing",
        "Core and shell structure development",
        "Fire-resistant steel treatment",
      ],
      description:
        "A modern commercial complex with multi-level steel frameworks engineered for durability, safety, and architectural flexibility.",
    },
    {
      id: 3,
      title: "Industrial Warehouse Facility",
      category: "industrial",
      image:
        "https://i.pinimg.com/1200x/48/11/7f/48117f1f89f05d0acc8e848cb0065067.jpg",
      details: [
        "Heavy-load roof trusses",
        "Wide-span open steel framing",
        "Custom fabrication for machinery access",
      ],
      description:
        "High-capacity steel warehouse designed for industrial operations, integrating structural efficiency and customized build features.",
    },
    {
      id: 4,
      title: "Water Treatment Plant",
      category: "infrastructure",
      image:
        "https://i.pinimg.com/1200x/48/be/0b/48be0b71481b166794fb5192da2c4f8e.jpg",
      details: [
        "Reinforced steel tanks and support structures",
        "Corrosion-resistant steel coating",
        "Structural support for high-pressure systems",
      ],
      description:
        "A highly engineered steel build for water treatment operations supporting fluid processing, filtration, and storage functions.",
    },
    {
      id: 5,
      title: "Shopping Mall Development",
      category: "commercial",
      image:
        "https://i.pinimg.com/1200x/20/48/0f/20480ff3c226420e81854d7b38e47238.jpg",
      details: [
        "Steel-supported atrium and open spaces",
        "Multi-level beam and column system",
        "Architectural steel detailing",
      ],
      description:
        "A multi-level shopping mall built with modern structural steel components providing open interior spaces and refined architectural finishes.",
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
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 bg-gray-100">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>

                {/* Info */}
                <div className="p-5">
                  <span className="inline-block px-3 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded mb-3">
                    {categories.find((c) => c.id === project.category)?.label}
                  </span>

                  <h3 className="text-lg font-bold text-[#333] mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  <ul className="text-gray-700 text-sm list-disc pl-4 space-y-1">
                    {project.details.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
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
          <p className="text-base text-gray-600 mb-8">
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
