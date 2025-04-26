
import React from 'react';

const testimonials = [
  {
    quote: "VintagePulse brought my grandfather's pocket watch back to life. It's not just keeping time again—it looks and works like it did when he first received it in 1935.",
    author: "Michael R.",
    role: "Heirloom Owner"
  },
  {
    quote: "The attention to detail is remarkable. They managed to source original parts for my vintage chronograph that I thought were impossible to find.",
    author: "Elizabeth T.",
    role: "Watch Collector"
  },
  {
    quote: "As a collector, authenticity is everything to me. VintagePulse understands this perfectly—they preserved the patina and character while ensuring flawless operation.",
    author: "James L.",
    role: "Vintage Watch Enthusiast"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 vintage-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-vintage-darkBrown">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-vintage-gold mx-auto my-4"></div>
          <p className="text-vintage-brown text-lg max-w-2xl mx-auto">
            Discover why collectors and enthusiasts trust us with their most precious timepieces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="vintage-card overflow-hidden"
            >
              <div className="text-center p-1">
                <div className="mb-4 text-vintage-gold">
                  {/* Star rating */}
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="italic text-vintage-brown mb-6">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <p className="font-serif font-semibold text-vintage-darkBrown">{testimonial.author}</p>
                  <p className="text-sm text-vintage-brown">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
