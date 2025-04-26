
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 vintage-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-video bg-vintage-sepia rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-vintage-gold/30 to-transparent mix-blend-overlay"></div>
              {/* This would be replaced with a real image in a production environment */}
              <div className="h-full w-full flex items-center justify-center p-8 bg-vintage-darkBrown/5">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 rounded-full gold-gradient mx-auto flex items-center justify-center">
                    <Watch className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif text-vintage-darkBrown">The Art of Restoration</h3>
                  <p className="text-vintage-brown">A perfect blend of tradition and technology</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-vintage-cream rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 border border-vintage-gold/20 rounded-lg -z-10"></div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-vintage-darkBrown">
              The VintagePulse Difference
            </h2>
            <div className="w-24 h-1 bg-vintage-gold"></div>
            <p className="text-lg text-vintage-brown">
              At VintagePulse, we believe that every vintage timepiece has a story to tell. Our mission is to revive these stories through meticulous restoration that honors the original craftsmanship while ensuring reliable functionality for years to come.
            </p>
            <p className="text-lg text-vintage-brown">
              Our team combines decades of traditional watchmaking expertise with cutting-edge AI technology that allows us to diagnose and restore even the most challenging vintage pieces with unprecedented precision and care.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="vintage-card">
                <h4 className="font-serif font-semibold text-vintage-darkBrown mb-2">Master Craftsmen</h4>
                <p className="text-sm text-vintage-brown">Our watchmakers have over 50 years of combined experience.</p>
              </div>
              <div className="vintage-card">
                <h4 className="font-serif font-semibold text-vintage-darkBrown mb-2">Advanced Technology</h4>
                <p className="text-sm text-vintage-brown">Proprietary AI systems for precision diagnostics and repair.</p>
              </div>
              <div className="vintage-card">
                <h4 className="font-serif font-semibold text-vintage-darkBrown mb-2">Historical Research</h4>
                <p className="text-sm text-vintage-brown">We research and document each timepiece's unique history.</p>
              </div>
              <div className="vintage-card">
                <h4 className="font-serif font-semibold text-vintage-darkBrown mb-2">Authentic Parts</h4>
                <p className="text-sm text-vintage-brown">Access to rare original parts or precision-crafted reproductions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
