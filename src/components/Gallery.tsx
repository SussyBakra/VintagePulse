import React from 'react';
import { ArrowRight, Watch } from 'lucide-react';

// In a real application, these would be actual images of restored watches
const galleryItems = [
  {
    id: 1,
    title: "1940s Pocket Watch",
    description: "Full restoration including movement rebuild and case refinishing.",
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80",
    before: "Before restoration",
    after: "After restoration"
  },
  {
    id: 2,
    title: "Vintage Chronograph",
    description: "Complete overhaul with original parts sourcing and dial restoration.",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80",
    before: "Before restoration",
    after: "After restoration"
  },
  {
    id: 3,
    title: "Art Deco Wristwatch",
    description: "Intricate case repair and movement restoration to factory specifications.",
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&q=80",
    before: "Before restoration",
    after: "After restoration"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-vintage-darkBrown">
            Featured Restorations
          </h2>
          <div className="w-24 h-1 bg-vintage-gold mx-auto my-4"></div>
          <p className="text-vintage-brown text-lg max-w-2xl mx-auto">
            Browse our gallery of meticulously restored timepieces that showcase our expertise and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="vintage-card overflow-hidden group">
              <div className="aspect-square bg-vintage-sepia relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vintage-darkBrown/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="text-white p-4">
                    <p className="font-serif font-medium">{item.title}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-serif font-semibold text-vintage-darkBrown mb-2">{item.title}</h3>
                <p className="text-vintage-brown">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
