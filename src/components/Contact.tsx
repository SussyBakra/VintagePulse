
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-vintage-darkBrown">
              Book a Consultation
            </h2>
            <div className="w-24 h-1 bg-vintage-gold"></div>
            <p className="text-lg text-vintage-brown">
              Have a vintage timepiece in need of expert attention? Contact us to schedule a consultation with our master watchmakers.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-vintage-darkBrown">Phone</h3>
                  <p className="text-vintage-brown">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-vintage-darkBrown">Email</h3>
                  <p className="text-vintage-brown">info@vintagepulse.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-vintage-darkBrown">Visit Us</h3>
                  <p className="text-vintage-brown">123 Timepiece Lane, Watchville, CA 90210</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="vintage-card">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-serif text-vintage-darkBrown">Name</label>
                  <Input id="name" type="text" className="border-vintage-brown/30 focus:border-vintage-gold" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-serif text-vintage-darkBrown">Email</label>
                  <Input id="email" type="email" className="border-vintage-brown/30 focus:border-vintage-gold" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block font-serif text-vintage-darkBrown">Subject</label>
                <Input id="subject" type="text" className="border-vintage-brown/30 focus:border-vintage-gold" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block font-serif text-vintage-darkBrown">Message</label>
                <Textarea 
                  id="message" 
                  rows={5}
                  className="border-vintage-brown/30 focus:border-vintage-gold"
                  placeholder="Tell us about your timepiece..."
                />
              </div>
              
              <Button className="w-full bg-vintage-brown hover:bg-vintage-darkBrown text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
