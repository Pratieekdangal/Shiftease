
import React from 'react';
import Hero from '@/components/home/Hero';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServiceHighlights />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
