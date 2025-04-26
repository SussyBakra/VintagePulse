
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen pt-24 pb-12 vintage-bg relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-vintage-darkBrown">
              Where Timeless <span className="text-vintage-gold">Elegance</span> Meets Modern Innovation
            </h1>
            
            <p className="text-lg md:text-xl text-vintage-brown max-w-2xl mx-auto lg:mx-0">
              VintagePulse revives classic and vintage watches by combining expert craftsmanship with advanced AI technology. We offer professional restoration that not only brings timepieces back to peak performance but also preserves their historical charm.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-vintage-brown hover:bg-vintage-darkBrown text-white text-lg px-6 py-5"
                onClick={() => scrollToSection('services')}
              >
                Explore Our Services
              </Button>
              <Button 
                variant="outline" 
                className="border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-white text-lg px-6 py-5"
                onClick={() => scrollToSection('gallery')}
              >
                View Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-vintage-paper/80 to-transparent rounded-lg -m-6"></div>
              <img 
                src="/lovable-uploads/1d33dea1-1037-4506-9ebf-c0d5bcfac4d6.png" 
                alt="VintagePulse Logo" 
                className="relative max-w-md w-full h-auto animate-ticking"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-vintage-paper to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-vintage-sepia/20 to-transparent"></div>
      <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-vintage-gold/10 blur-2xl"></div>
      <div className="absolute top-20 -left-6 w-24 h-24 rounded-full bg-vintage-gold/10 blur-xl"></div>
    </section>
  );
};

export default Hero;
