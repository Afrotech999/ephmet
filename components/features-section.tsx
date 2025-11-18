import { Zap, Shield, Gauge } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "International standards compliance with rigorous quality control at every stage of production.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Efficient production and logistics ensuring timely delivery of your orders.",
    },
    {
      icon: Gauge,
      title: "Precision Fabrication",
      description:
        "State-of-the-art technology for custom metal fabrication and steel processing.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-xl">
            Excellence in every aspect of steel manufacturing and supply.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="p-8 bg-gray-100  border-gray-200 shadow-lg 
                hover:shadow-md transition-transform transform hover:-translate-y-1 
                group text-center"
              >
                <div
                  className="w-16 h-16 mx-auto bg-gray-200 
                  flex items-center justify-center mb-6 transition-all group-hover:scale-110"
                >
                  <Icon size={24} className="text-blue-600" />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-base">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
