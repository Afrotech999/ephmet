"use client";

import type React from "react";
import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    productInterest: "rebars",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        productInterest: "rebars",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again later.");
    } finally {
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7]">
      <Header />

      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center items-center pt-32 sm:pt-40 pb-20 sm:pb-28 border-b"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(10, 25, 50, 1), rgba(0, 0, 0, 0.5))",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="text-base sm:text-xl text-white/90 leading-relaxed drop-shadow-md">
            Have questions about our products or services? We're here to help.
            Reach out to us today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="p-6 bg-white border border-gray-200 rounded-none shadow-md">
              <Phone size={32} className="text-gray-800 mb-4" />
              <h3 className="text-lg font-bold text-[#333] mb-2">Phone</h3>
              <p className="text-gray-600 text-sm mb-2">+253 7750 6510</p>
              <p className="text-gray-600 text-sm">
                Available during business hours
              </p>
            </div>

            {/* Email */}
            <div className="p-6 bg-white border border-gray-200 rounded-none shadow-md">
              <Mail size={32} className="text-gray-800 mb-4" />
              <h3 className="text-lg font-bold text-[#333] mb-2">Email</h3>
              <p className="text-gray-600 text-sm mb-2">Ephmetdji@gmail.com</p>
              <p className="text-gray-600 text-sm">
                We'll respond within 24 hours
              </p>
            </div>

            {/* Location */}
            <div className="p-6 bg-white border border-gray-200 rounded-none shadow-md">
              <MapPin size={32} className="text-gray-800 mb-4" />
              <h3 className="text-lg font-bold text-[#333] mb-2">Location</h3>
              <p className="text-gray-600 text-sm mb-2">Djibouti free zone</p>
              <p className="text-gray-600 text-sm">Main Office</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-bold text-[#333] mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {["name", "email", "phone", "company"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-[#333] mb-2 capitalize">
                      {field === "name"
                        ? "Full Name *"
                        : field === "email"
                        ? "Email Address *"
                        : field === "phone"
                        ? "Phone Number"
                        : "Company Name"}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required={field === "name" || field === "email"}
                      className="w-full px-4 py-2 bg-white border border-gray-200 rounded text-[#333] placeholder:text-gray-400 focus:outline-none focus:border-gray-800"
                      placeholder={
                        field === "name"
                          ? "Your Name"
                          : field === "email"
                          ? "your@email.com"
                          : field === "phone"
                          ? "+253 7750 6510"
                          : "Your Company"
                      }
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-[#333] mb-2">
                    Product Interest
                  </label>
                  <select
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded text-[#333] focus:outline-none focus:border-gray-800"
                  >
                    <option value="rebars">Steel Rebars</option>
                    <option value="structural">Structural Steel</option>
                    <option value="plates">Steel Plates</option>
                    <option value="fabrication">Metal Fabrication</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#333] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded text-[#333] placeholder:text-gray-400 focus:outline-none focus:border-gray-800 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-600 transition-colors"
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </button>

                {submitted && (
                  <div className="p-4 bg-green-100 border border-green-300 rounded text-green-700 text-sm">
                    Thank you! We'll get back to you shortly.
                  </div>
                )}
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-xl font-bold text-[#333] mb-6">
                Business Hours
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-white border border-gray-200 rounded-none shadow-md">
                  <Clock size={24} className="text-gray-800 mb-4" />
                  <h3 className="text-lg font-bold text-[#333] mb-4">
                    Office Hours
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-white border border-gray-200 rounded-none shadow-md">
                  <h3 className="text-lg font-bold text-[#333] mb-4">
                    Quick Response Times
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>Email inquiries: Typically within 24 hours</li>
                    <li>Phone calls: During business hours</li>
                    <li>Quote requests: Within 48 hours</li>
                    <li>Project consultations: By appointment</li>
                  </ul>
                </div>

                <div className="p-6 bg-white border border-gray-200 rounded-none shadow-md">
                  <h3 className="text-lg font-bold text-[#333] mb-4">
                    Service Options
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>✓ On-site facility tours</li>
                    <li>✓ Product samples available</li>
                    <li>✓ Custom quote requests</li>
                    <li>✓ Project consultation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
