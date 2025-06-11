
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <h2 className="text-3xl font-bold">Ready for a Stress-Free Move?</h2>
            <p className="text-white/80 text-lg">
              Take the first step towards your easiest move ever. Our team is ready to provide you with a personalized quote.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                <p>Free, no-obligation quotes tailored to your specific needs</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                <p>Flexible scheduling to accommodate your timeline</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                <p>Comprehensive insurance coverage for your peace of mind</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                <p>Professional team with years of experience in the industry</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button 
                onClick={() => navigate('/booking')}
                size="lg" 
                variant="secondary" 
                className="rounded-full text-primary"
              >
                Get Your Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={() => navigate('/contact')}
                size="lg" 
                variant="outline" 
                className="rounded-full border-white text-white hover:bg-white/20"
              >
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in-delay-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Our Guarantee</h3>
                  <p className="text-white/80">
                    We're committed to making your move as smooth as possible. If you're not completely satisfied with our service, we'll work with you to make it right.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-3xl font-bold mb-1">98%</div>
                    <p className="text-white/80 text-sm">Customer satisfaction rate</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-3xl font-bold mb-1">10k+</div>
                    <p className="text-white/80 text-sm">Successful moves completed</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-3xl font-bold mb-1">15+</div>
                    <p className="text-white/80 text-sm">Years of industry experience</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-3xl font-bold mb-1">24/7</div>
                    <p className="text-white/80 text-sm">Customer support available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
