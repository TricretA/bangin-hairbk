import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { Page } from '../types';
import { VAGARO_LINK } from '../constants';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: Page.HOME, label: 'Home' },
    { id: Page.ABOUT, label: 'About Us' },
    { id: Page.SERVICES, label: 'Services' },
    { id: Page.GALLERY, label: 'Gallery' },
    { id: Page.CONTACT, label: 'Contact' },
  ];

  const handleNav = (page: Page) => {
    setPage(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-paper/95 shadow-md backdrop-blur-sm py-2' : 'bg-brand-paper py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer group" onClick={() => handleNav(Page.HOME)}>
            <div className="flex items-center gap-3">
              <div className="bg-brand-softpink p-2.5 rounded-full group-hover:bg-brand-mauve transition-colors duration-300 shadow-sm border border-brand-cream group-hover:border-transparent">
                <Scissors className="h-5 w-5 text-brand-mauve group-hover:text-white transform -rotate-45" />
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline">
                <span className="font-serif font-bold text-2xl tracking-tight text-brand-dark group-hover:text-brand-mauve transition-colors leading-none">
                  Bangin Hair
                </span>
                <span className="font-sans font-bold text-lg text-brand-mauve md:ml-1 leading-none tracking-wide">
                  BK
                </span>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`font-sans text-sm font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                  currentPage === link.id 
                    ? 'bg-brand-softpink text-brand-mauve' 
                    : 'text-brand-text hover:text-brand-mauve hover:bg-brand-cream'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={VAGARO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-brand-mauve hover:bg-brand-gold text-white font-sans font-bold py-2.5 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-brand-mauve hover:bg-brand-softpink focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-brand-paper shadow-inner">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-2xl text-base font-bold transition-colors ${
                currentPage === link.id
                  ? 'bg-brand-softpink text-brand-mauve'
                  : 'text-brand-text hover:bg-brand-cream hover:text-brand-mauve'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 px-2">
            <a
              href={VAGARO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-brand-mauve hover:bg-brand-gold text-white font-bold py-3 px-6 rounded-full transition-colors shadow-sm"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;