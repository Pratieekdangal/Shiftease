import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { NavigationMenuItem, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 glass' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <span className="text-primary font-bold text-2xl">ShiftEase</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : 'text-foreground/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="rounded-full" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button variant="outline" className="rounded-full" asChild>
              <Link to="/signup">Sign up</Link>
            </Button>
            <Button className="rounded-full">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground p-2 focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-primary font-bold text-2xl">ShiftEase</span>
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 text-foreground"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-8 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : 'text-foreground/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col space-y-4">
            <Button variant="outline" className="w-full rounded-full" asChild>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>Log in</Link>
            </Button>
            <Button variant="outline" className="w-full rounded-full" asChild>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign up</Link>
            </Button>
            <Button className="w-full rounded-full">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
