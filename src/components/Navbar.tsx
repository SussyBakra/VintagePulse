
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-10 bg-vintage-cream bg-opacity-90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="text-vintage-darkBrown font-serif font-bold text-xl md:text-2xl">
            VintagePulse
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-vintage-brown hover:text-vintage-darkBrown transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-vintage-brown hover:text-vintage-darkBrown transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-vintage-brown hover:text-vintage-darkBrown transition-colors font-medium">
              About
            </a>
            <a href="#gallery" className="text-vintage-brown hover:text-vintage-darkBrown transition-colors font-medium">
              Gallery
            </a>
            <a href="#contact" className="text-vintage-brown hover:text-vintage-darkBrown transition-colors font-medium">
              Contact
            </a>
            <Button className="bg-vintage-brown hover:bg-vintage-darkBrown text-white">
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-vintage-darkBrown"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-vintage-cream shadow-md py-4 px-6 animate-fade-up">
          <div className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-vintage-brown hover:text-vintage-darkBrown transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="text-vintage-brown hover:text-vintage-darkBrown transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-vintage-brown hover:text-vintage-darkBrown transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#gallery" 
              className="text-vintage-brown hover:text-vintage-darkBrown transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              className="text-vintage-brown hover:text-vintage-darkBrown transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-vintage-brown hover:bg-vintage-darkBrown text-white w-full">
              Book Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
