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
import { useEffect, useState } from "react";

export default function About() {
  const images = [
    "https://www.diftz.dj/uploads/allimg/20240731/1-240I1154G0228.jpg",
    "https://i.pinimg.com/1200x/c9/89/fd/c989fd71e10840a46963f7b11dc3c5c4.jpg",
    "https://i.pinimg.com/736x/20/e2/72/20e272de483003c29fec4d58cebf618b.jpg",
  ];

  const [active, setActive] = useState(0);

  // Auto-rotate images every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F5F7]">
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 border-b"
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
            industrial growth and development.
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

          {/* 3 Image Card Rotation (styled like screenshot) */}
          <div className="relative h-[320px] sm:h-[360px] flex items-center justify-center">
            {images.map((img, idx) => {
              const isActive = idx === active;
              const isPrev =
                (active - 1 + images.length) % images.length === idx;
              const isNext = (active + 1) % images.length === idx;

              return (
                <div
                  key={idx}
                  className={`
          absolute w-[85%] h-[85%] bg-cover bg-center rounded-xl shadow-2xl 
          transition-all duration-[900ms] ease-[cubic-bezier(.4,0,.2,1)]
          ${isActive ? "z-30 scale-105 opacity-100 rotate-[2deg]" : ""}
          ${
            isPrev
              ? "z-20 scale-95 opacity-70 -rotate-[6deg] -translate-x-6"
              : ""
          }
          ${
            isNext ? "z-10 scale-90 opacity-50 rotate-[6deg] translate-x-6" : ""
          }
        `}
                  style={{
                    backgroundImage: `url('${img}')`,
                  }}
                ></div>
              );
            })}
          </div>
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
              className="p-10 bg-white shadow-2xl rounded-xl hover:shadow-2xl transition"
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
                className="p-6 bg-white shadow-2xl hover:shadow-2xl transition rounded-xl"
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
                <div className="p-6 bg-white shadow-2xl hover:shadow-2xl transition flex-1 rounded-xl">
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
