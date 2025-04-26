
import React from 'react';
import { Clock, Watch, Calendar } from 'lucide-react';

const services = [
  {
    title: "Expert Restoration",
    description: "Our master watchmakers restore vintage timepieces to their original glory, carefully preserving historical authenticity while ensuring perfect functionality.",
    icon: Watch,
  },
  {
    title: "AI-Powered Diagnostics",
    description: "We use advanced AI technology to analyze and diagnose issues with precision, ensuring accurate restoration without invasive disassembly.",
    icon: Clock,
  },
  {
    title: "Historical Preservation",
    description: "Every restoration project includes detailed documentation of your timepiece's history, preserving its legacy for future generations.",
    icon: Calendar,
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-vintage-darkBrown">
            Our Specialized Services
          </h2>
          <div className="w-24 h-1 bg-vintage-gold mx-auto my-4"></div>
          <p className="text-vintage-brown text-lg max-w-2xl mx-auto">
            Discover how we bring vintage timepieces back to life with a perfect balance of traditional craftsmanship and modern technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="vintage-card hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-vintage-darkBrown mb-3">
                  {service.title}
                </h3>
                <p className="text-vintage-brown">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
