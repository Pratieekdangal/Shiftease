
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Trophy, Clock, MapPin, Building, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Story</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              ShiftEase has been helping people and businesses move with confidence since 2010.
              We're dedicated to making your transition as smooth as possible.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Info Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Moving Made Simple</h2>
              <p className="text-muted-foreground mb-6">
                ShiftEase was founded with a single mission: to take the stress out of moving. 
                After experiencing the chaos of poorly managed moves firsthand, our founders were 
                inspired to create a moving company that prioritizes efficiency, care, and clear communication.
              </p>
              <p className="text-muted-foreground mb-6">
                What began as a small local operation has grown into a trusted service provider
                across Kathmandu Valley, maintaining the same personalized care and attention to detail
                that defined us from day one.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Card className="w-full sm:w-[calc(50%-8px)]">
                  <CardContent className="flex flex-col items-center p-6">
                    <Trophy className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-medium text-lg">12+ Years</h3>
                    <p className="text-sm text-muted-foreground text-center">Of Experience</p>
                  </CardContent>
                </Card>
                <Card className="w-full sm:w-[calc(50%-8px)]">
                  <CardContent className="flex flex-col items-center p-6">
                    <Users className="h-10 w-10 text-primary mb-3" />
                    <h3 className="font-medium text-lg">20,000+</h3>
                    <p className="text-sm text-muted-foreground text-center">Satisfied Customers</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[400px] border shadow-md">
              <img 
                src="/lovable-uploads/5f9a3ed0-480f-4682-a518-a0e827dd7d9f.png" 
                alt="ShiftEase Moving Service in Kathmandu" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Image Showcase Section - New Section */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Services in Action</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              See how we carefully handle your belongings with our specialized equipment and trained staff.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden border shadow-md">
              <img 
                src="/lovable-uploads/5f9a3ed0-480f-4682-a518-a0e827dd7d9f.png" 
                alt="Furniture moving in Kathmandu" 
                className="w-full h-[300px] object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-lg mb-2">Furniture Moving</h3>
                <p className="text-muted-foreground">
                  Our team carefully loads and secures furniture using our specialized trucks designed for Kathmandu's narrow streets.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg border shadow-md">
                <h3 className="font-medium text-lg mb-3">Why Choose Our Moving Service in Kathmandu?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Specialized vehicles for navigating Kathmandu's narrow streets and slopes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Expert handling of furniture through tight staircases and limited spaces</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Weather-proof packing solutions for monsoon season protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Affordable local rates with transparent pricing policy</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="italic text-muted-foreground">
                  "ShiftEase helped us move our entire home from Baluwatar to Patan during peak traffic season. Their team was punctual, professional, and took great care with our belongings. Highly recommended!"
                </p>
                <p className="mt-3 font-medium">— Rajesh Sharma, Patan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              These principles guide our daily operations and long-term vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Reliability</h3>
                <p className="text-muted-foreground">
                  We show up on time, every time, and deliver on our promises. Your belongings are safe with us.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  No hidden fees or surprise charges. We provide clear, upfront pricing and keep you informed at every step.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-medium mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We're committed to exceeding expectations with superior service, equipment, and trained staff.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Meet the dedicated professionals who make ShiftEase the trusted choice for your moving needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((person) => (
              <div key={person} className="flex flex-col items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/10">
                  <img 
                    src="/placeholder.svg" 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">Jane Doe</h3>
                <p className="text-primary mb-2">Position Title</p>
                <p className="text-sm text-muted-foreground text-center max-w-xs">
                  Short bio about the team member and their expertise in the moving industry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Locations Section */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Areas</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              ShiftEase proudly serves customers across Kathmandu Valley and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['Kathmandu', 'Lalitpur', 'Bhaktapur', 'Kirtipur', 'Budhanilkantha', 'Godawari'].map((city) => (
              <Card key={city}>
                <CardContent className="p-6 flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>{city}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary text-primary-foreground rounded-xl p-8 md:p-12 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Stress-Free Moving?</h2>
            <p className="max-w-2xl mb-8">
              Let ShiftEase handle your next move with the care and expertise you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link to="/booking">Book a Move</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white hover:bg-white hover:text-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
