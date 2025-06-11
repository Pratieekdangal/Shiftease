
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold">ShiftEase</h2>
            <p className="text-muted-foreground">
              Professional moving and logistics services for individuals and businesses. We make moving easy.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Home
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Services
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                <ArrowRight size={14} className="mr-2" />
                About Us
              </Link>
              <Link to="/booking" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Booking
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/services/residential" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Residential Moving
              </Link>
              <Link to="/services/commercial" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Commercial Moving
              </Link>
              <Link to="/services/packing" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Packing Services
              </Link>
              <Link to="/services/storage" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Storage Solutions
              </Link>
              <Link to="/services/specialized" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                <ArrowRight size={14} className="mr-2" />
                Specialized Items
              </Link>
            </nav>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 mt-0.5 text-primary" />
                <span className="text-muted-foreground">
                  123 Moving Street, Suite 100<br />
                  San Francisco, CA 94107
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 text-primary" />
                <a href="tel:+18001234567" className="text-muted-foreground hover:text-primary transition-colors">
                  (800) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-primary" />
                <a href="mailto:info@shiftease.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@shiftease.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ShiftEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
