export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      company: "Construction Excellence Ltd",
      text: "Exceptional quality and reliability. Their steel products have consistently met our project specifications and timelines.",
    },
    {
      name: "Fatima Abebe",
      company: "Industrial Development Corp",
      text: "Professional team, competitive pricing, and superior product quality. Highly recommended for any steel requirements.",
    },
    {
      name: "Dawit Tekle",
      company: "Infrastructure Projects Inc",
      text: "Outstanding customer service and quick delivery. They understand the importance of meeting project deadlines.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg sm:text-xl">
            Trusted by leading construction and industrial companies across
            Ethiopia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-xs">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
