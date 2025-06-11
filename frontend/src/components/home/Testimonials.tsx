
import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  index: number;
}

const Testimonial = ({ name, role, content, rating, index }: TestimonialProps) => {
  return (
    <div className={`opacity-0 animate-fade-in-delay-${index + 1}`}>
      <GlassCard className="p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <Quote className="h-8 w-8 text-primary/30" />
        </div>
        <p className="text-foreground/90 mb-6 flex-grow">{content}</p>
        <div className="mt-auto">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </GlassCard>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Residential Move",
      content: "ShiftEase made my cross-country move incredibly smooth. The team was professional, careful with my belongings, and even helped set up some furniture at the new place. Highly recommend!",
      rating: 5
    },
    {
      name: "David Martinez",
      role: "Office Relocation",
      content: "We needed to relocate our office with minimal downtime. ShiftEase delivered beyond expectations, working overnight to ensure we were operational by Monday morning. Exceptional service!",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Apartment Move",
      content: "As someone who's moved multiple times, I can confidently say ShiftEase provides the best service I've experienced. From packing to transportation, everything was handled with care.",
      rating: 4
    }
  ];

  return (
    <section className="section-padding bg-primary/5">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what people are saying about their experience with ShiftEase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={testimonial.name} 
              name={testimonial.name} 
              role={testimonial.role} 
              content={testimonial.content} 
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
