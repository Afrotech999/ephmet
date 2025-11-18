"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Award,
  Target,
  Globe2,
  Factory,
  ShieldCheck,
  Layers,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F4F5F7]">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 border-b"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(10, 25, 50, 1), rgba(0, 0, 0, 0.5))",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            Precision. Strength. Reliability.
          </h1>
          <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            As a forward-thinking steel import and export company, we provide
            world-class steel solutions engineered to support Africa’s
            industrial growth.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#333] mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With decades of industrial expertise, we are one of Djibouti’s
              most trusted suppliers of high-grade steel products.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our portfolio spans structural steel, coils, pipes, and more —
              supporting contractors and major infrastructure projects.
            </p>
          </div>

          <div
            className="h-[300px] rounded-xl border shadow bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1zlGDl-mkAf0tmvM5jTc4-EPgvVrExPFoLQbgZM7JpFvSAkJNmjNcbjPxvXs73YIm8yqhTj3b')",
            }}
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          {[
            {
              icon: <Target className="text-blue-600 mb-4" size={36} />,
              title: "Our Mission",
              desc: "To deliver world-class steel products with unmatched precision and reliability.",
            },
            {
              icon: <Award className="text-blue-600 mb-4" size={36} />,
              title: "Our Vision",
              desc: "To be Africa’s most trusted steel supplier and industrial partner.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-10 bg-white   shadow-2xl rounded-xl hover:shadow-2xl transition"
            >
              {item.icon}
              <h3 className="text-xl font-bold text-[#333] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 sm:py-24 bg-[#F4F5F7] border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-center text-[#333] mb-14">
            Why Clients Trust Us
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheck className="text-blue-700" size={32} />,
                title: "Global Standard Quality",
                desc: "We source from certified mills with strict QA.",
              },
              {
                icon: <Factory className="text-blue-700" size={32} />,
                title: "Reliable Supply Chain",
                desc: "Strong global partnerships ensure continuous supply.",
              },
              {
                icon: <Layers className="text-blue-700" size={32} />,
                title: "Wide Product Portfolio",
                desc: "From structural steel to specialty alloys.",
              },
              {
                icon: <Globe2 className="text-blue-700" size={32} />,
                title: "International Reach",
                desc: "We partner with world-leading manufacturers.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white border rounded-none shadow-lg hover:shadow-2xl transition"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-[#333] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#333] mb-12 text-center">
            Our Journey
          </h2>
          <div className="space-y-10">
            {[
              {
                year: "2010",
                event: "Company Established",
                desc: "Launched with a mission to elevate steel supply.",
              },
              {
                year: "2016",
                event: "Global Expansion",
                desc: "Formed strong partnerships with global mills.",
              },
              {
                year: "2021",
                event: "Quality Certifications",
                desc: "Achieved multiple international certifications.",
              },
              {
                year: "2024",
                event: "Regional Leadership",
                desc: "Recognized as a top steel supplier in the region.",
              },
            ].map((item) => (
              <div key={item.year} className="flex gap-6">
                <div className="text-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mx-auto mb-4" />
                  <div className="text-blue-700 font-bold">{item.year}</div>
                </div>
                <div className="p-6 bg-white border rounded-none shadow-lg hover:shadow-2xl transition flex-1">
                  <h3 className="font-bold text-[#333] mb-1">{item.event}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
