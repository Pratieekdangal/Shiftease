
import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowRight, 
  MapPin, 
  Calendar, 
  TruckIcon 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [moveDate, setMoveDate] = useState('');

  const handleGetQuote = (e: React.FormEvent) => {
    e.preventDefault();
    // Store the data in session/local storage
    const quoteData = {
      fromAddress,
      toAddress,
      moveDate
    };
    sessionStorage.setItem('quoteData', JSON.stringify(quoteData));
    navigate('/booking');
  };

  return (
    <section className="relative pt-24 pb-24 overflow-hidden hero-gradient">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-blue-200 mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-blue-100 mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12">
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight opacity-0 animate-fade-in">
              Move with Ease,<br />
              <span className="text-primary opacity-0 animate-fade-in-delay-1">Live with Peace</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-2">
              Professional moving services that take the stress out of relocation. Your journey begins with us.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start opacity-0 animate-fade-in-delay-3">
            <Button size="lg" className="rounded-full text-base px-8 py-6">
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full text-base px-8 py-6"
              onClick={() => {
                const element = document.getElementById('quote-form');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get a Quote
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-x-8 opacity-0 animate-fade-in-delay-4">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-primary/10 p-2">
                <TruckIcon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium">100% Insured Moving</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-primary/10 p-2">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium">Flexible Scheduling</span>
            </div>
          </div>
        </div>

        <div 
          id="quote-form"
          className="w-full lg:w-1/2 opacity-0 animate-fade-in-delay-3"
        >
          <GlassCard 
            className="p-8 max-w-md mx-auto"
            intensity="heavy"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Get Your Free Quote</h2>
              <p className="text-muted-foreground">Fill out the form below to start your seamless moving experience</p>
            </div>
            
            <form onSubmit={handleGetQuote} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="from-address">
                  Moving From
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    id="from-address"
                    type="text" 
                    placeholder="Enter your current address" 
                    className="pl-10 py-6 rounded-xl"
                    value={fromAddress}
                    onChange={(e) => setFromAddress(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="to-address">
                  Moving To
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    id="to-address"
                    type="text" 
                    placeholder="Enter your destination address" 
                    className="pl-10 py-6 rounded-xl"
                    value={toAddress}
                    onChange={(e) => setToAddress(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="move-date">
                  Moving Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    id="move-date"
                    type="date" 
                    className="pl-10 py-6 rounded-xl"
                    value={moveDate}
                    onChange={(e) => setMoveDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full py-6 rounded-xl text-base">
                Get Instant Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
