
import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Building, Package, Map, CheckCircle, Clock, Shield, DollarSign, Mountain, HomeIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Services = () => {
  const mainServices = [
    {
      icon: HomeIcon,
      title: "Local Kathmandu Moving",
      description: "Specialized moving services within Kathmandu Valley including Lalitpur and Bhaktapur areas with knowledge of narrow streets and local regulations."
    },
    {
      icon: Truck,
      title: "Long Distance Nepal Moving",
      description: "Expert relocation services for moves from Kathmandu to other major cities like Pokhara, Chitwan, and throughout Nepal."
    },
    {
      icon: Building,
      title: "Commercial Relocation",
      description: "Full-service business moves for Kathmandu's growing commercial sector, from small shops to large corporate offices."
    },
    {
      icon: Package,
      title: "Packing & Unpacking",
      description: "Professional packing services using quality materials to secure your belongings during monsoon season and challenging terrain."
    }
  ];

  const specializedServices = [
    {
      icon: Mountain,
      title: "Altitude-Sensitive Moving",
      description: "Specialized handling for moves to high-altitude locations like Nagarkot and Dhulikhel with proper equipment for steep terrain."
    },
    {
      icon: Shield,
      title: "Earthquake-Safe Packing",
      description: "Extra precautions for securing valuable items in Nepal's seismically active regions with earthquake-resistant packing techniques."
    },
    {
      icon: Map,
      title: "Heritage Area Expertise",
      description: "Special care when moving in Kathmandu's UNESCO World Heritage zones including Durbar Square, Patan, and Bhaktapur."
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "Locally Experienced Teams",
      description: "Our staff knows Kathmandu's unique neighborhoods, from the narrow gullies of Asan to the modern layouts of Baluwatar."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "We work around load-shedding schedules and traffic challenges to ensure on-time service throughout the Kathmandu Valley."
    },
    {
      icon: DollarSign,
      title: "Fair Nepali Pricing",
      description: "Transparent pricing with options for all budgets, from student moves to luxury homes in Lazimpat and Maharajgunj."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Services in Kathmandu</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert moving and relocation services tailored for Kathmandu's unique urban landscape, 
              from historic neighborhoods to modern developments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Moving Services</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Comprehensive moving solutions designed for Kathmandu's diverse neighborhoods and challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service, index) => (
              <Card key={index} className="border shadow-md transition-all hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kathmandu Specialized Services */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kathmandu-Specific Solutions</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Services designed specifically for the unique challenges of moving in the Kathmandu Valley.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specializedServices.map((service, index) => (
              <Card key={index} className="border shadow-md transition-all hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach to moving that respects Nepali customs and addresses local challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "01", title: "Initial Consultation", description: "We visit your location in Kathmandu to assess your specific needs." },
              { number: "02", title: "Custom Planning", description: "We create a moving plan considering local factors like traffic restrictions and building access." },
              { number: "03", title: "Efficient Execution", description: "Our trained team arrives with all necessary equipment to handle your move professionally." },
              { number: "04", title: "Setup & Support", description: "We help arrange your belongings at the new location and provide post-move support." }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose ShiftEase in Kathmandu</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our local expertise and dedication to quality service sets us apart in Nepal's moving industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border shadow-md">
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Areas We Serve in Kathmandu</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We provide moving services throughout the Kathmandu Valley and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              "Thamel", "Baluwatar", "Lazimpat", "Boudha", "Patan", 
              "Bhaktapur", "Kirtipur", "Chabahil", "Baneshwor", "Kalanki",
              "Gongabu", "Balkhu", "Budhanilkantha", "Jorpati", "Swayambhu"
            ].map((area) => (
              <Card key={area} className="border">
                <CardContent className="p-4 text-center">
                  <span>{area}</span>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Move in Kathmandu?</h2>
            <p className="max-w-2xl mb-8">
              Let ShiftEase handle your next move with care and expertise tailored for Kathmandu's unique environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link to="/booking">Get a Quote</Link>
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

export default Services;
