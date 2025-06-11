
import React from 'react';
import GlassCard from '../ui/GlassCard';
import { cn } from "@/lib/utils";
import { 
  Home, 
  Building, 
  Package, 
  Warehouse, 
  Truck,
  ShieldCheck,
  Clock,
  DollarSign
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
  return (
    <div className={cn(
      "opacity-0",
      index === 0 ? "animate-fade-in-delay-1" : 
      index === 1 ? "animate-fade-in-delay-2" : 
      index === 2 ? "animate-fade-in-delay-3" : 
      "animate-fade-in-delay-4"
    )}>
      <GlassCard className="p-6 h-full flex flex-col items-center text-center">
        <div className="rounded-full bg-primary/10 p-4 mb-4">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </GlassCard>
    </div>
  );
};

const ServiceHighlights = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Moving",
      description: "Comprehensive home relocation services tailored to your specific needs, ensuring a stress-free move."
    },
    {
      icon: Building,
      title: "Commercial Moving",
      description: "Efficient office and business relocations with minimal downtime, so you can get back to work quickly."
    },
    {
      icon: Package,
      title: "Packing Services",
      description: "Professional packing and unpacking services using quality materials to keep your belongings safe."
    },
    {
      icon: Warehouse,
      title: "Storage Solutions",
      description: "Secure, climate-controlled storage facilities for short-term and long-term needs."
    }
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Fully Insured",
      description: "Your belongings are protected with comprehensive insurance coverage throughout the entire moving process."
    },
    {
      icon: Clock,
      title: "Punctual Service",
      description: "We respect your time. Our team arrives on schedule and completes the job within the estimated timeframe."
    },
    {
      icon: Truck,
      title: "Modern Fleet",
      description: "Our well-maintained, modern vehicles are equipped with the latest tools to handle your move safely."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. Get a detailed quote upfront with all costs clearly explained."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-muted-foreground">
            Comprehensive moving solutions designed to make your relocation smooth and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              index={index}
            />
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Why Choose ShiftEase</h2>
          <p className="text-muted-foreground">
            We deliver exceptional moving experiences through our commitment to quality, reliability, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ServiceCard 
              key={feature.title} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
