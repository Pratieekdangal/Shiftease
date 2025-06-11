
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  Send
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Card,
  CardContent
} from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your message has been sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground">
                Have questions about our moving services? We're here to help. 
                Reach out to our team and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground mb-3">Mon-Fri from 8am to 6pm</p>
                  <a href="tel:+18001234567" className="text-primary font-medium hover:underline">
                    (800) 123-4567
                  </a>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-3">We'll respond within 24 hours</p>
                  <a href="mailto:info@shiftease.com" className="text-primary font-medium hover:underline">
                    info@shiftease.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Office</h3>
                  <p className="text-muted-foreground mb-3">Visit our main location</p>
                  <address className="not-italic text-primary font-medium">
                    123 Moving Street, Suite 100<br />
                    San Francisco, CA 94107
                  </address>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Hours</h3>
                  <p className="text-muted-foreground mb-3">We're available:</p>
                  <div className="text-primary font-medium">
                    Monday-Friday: 8am-6pm<br />
                    Saturday: 9am-4pm<br />
                    Sunday: Closed
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-12 md:py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form */}
              <div className="bg-background rounded-lg shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="(123) 456-7890" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your moving needs..." 
                      className="min-h-[150px]" 
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full md:w-auto" size="lg">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </div>
              
              {/* Map & Direct Contact Info */}
              <div className="flex flex-col space-y-6">
                <div className="relative h-80 bg-slate-200 rounded-lg overflow-hidden shadow-lg">
                  {/* Placeholder for map - in a real app, you would insert a Google Maps or similar component here */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <p>Interactive Map - Google Maps embed would go here</p>
                  </div>
                </div>
                
                <div className="bg-background rounded-lg shadow-lg p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-4">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Main Office</p>
                        <address className="not-italic text-muted-foreground">
                          123 Moving Street, Suite 100<br />
                          San Francisco, CA 94107
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Call Us</p>
                        <a href="tel:+18001234567" className="text-muted-foreground hover:text-primary transition-colors">
                          (800) 123-4567
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email Us</p>
                        <a href="mailto:info@shiftease.com" className="text-muted-foreground hover:text-primary transition-colors">
                          info@shiftease.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <h3 className="text-xl font-semibold mb-2">How do I get a moving quote?</h3>
                  <p className="text-muted-foreground">
                    You can get a free quote by filling out our online booking form, calling our customer service team, 
                    or sending us an email with your moving details. We'll respond with a comprehensive quote within 24 hours.
                  </p>
                </div>
                
                <div className="border-b pb-6">
                  <h3 className="text-xl font-semibold mb-2">What areas do you service?</h3>
                  <p className="text-muted-foreground">
                    We currently provide moving services throughout the entire San Francisco Bay Area, with plans to expand 
                    to additional regions soon. Contact us for specific location information.
                  </p>
                </div>
                
                <div className="border-b pb-6">
                  <h3 className="text-xl font-semibold mb-2">How far in advance should I book?</h3>
                  <p className="text-muted-foreground">
                    We recommend booking your move at least 2-4 weeks in advance, especially during peak seasons (summer months). 
                    However, we do accommodate last-minute moves when possible.
                  </p>
                </div>
                
                <div className="border-b pb-6">
                  <h3 className="text-xl font-semibold mb-2">Do you provide packing services?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer comprehensive packing and unpacking services. Our professional team can pack your entire home 
                    or just specific items that require special handling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
