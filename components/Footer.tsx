import React from 'react';
import { Page } from '../types';
import { Instagram, MapPin, Phone, Mail, Scissors } from 'lucide-react';
import { INSTAGRAM_LINK } from '../constants';

interface FooterProps {
  setPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-brand-softpink text-brand-dark pt-16 pb-8 rounded-t-[3rem] mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <div className="bg-brand-paper p-2 rounded-full">
                  <Scissors className="h-5 w-5 text-brand-mauve transform -rotate-45" />
               </div>
               <h3 className="font-serif text-2xl font-bold text-brand-dark">
                 Bangin Hair <span className="text-brand-mauve font-sans">BK</span>
               </h3>
            </div>
            <p className="font-sans text-brand-text leading-relaxed pl-1">
              Where beauty meets artistry. <br/>A space for everyone to shine.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl text-brand-dark font-semibold">Explore</h4>
            <ul className="space-y-2 font-sans text-brand-text">
              {[
                { label: 'Home', val: Page.HOME },
                { label: 'About Us', val: Page.ABOUT },
                { label: 'Services', val: Page.SERVICES },
                { label: 'Gallery', val: Page.GALLERY },
                { label: 'Contact', val: Page.CONTACT },
              ].map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => { setPage(link.val); window.scrollTo(0,0); }}
                    className="hover:text-brand-mauve hover:translate-x-1 transition-all duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl text-brand-dark font-semibold">Visit Us</h4>
            <ul className="space-y-4 font-sans text-brand-text">
              <li className="flex items-start gap-3">
                <div className="bg-brand-paper p-2 rounded-full shadow-sm">
                  <MapPin className="h-4 w-4 text-brand-mauve" />
                </div>
                <span className="mt-1">219 Calyer St, Brooklyn, NY 11222</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-brand-paper p-2 rounded-full shadow-sm">
                  <Phone className="h-4 w-4 text-brand-mauve" />
                </div>
                <a href="tel:+17183896700" className="hover:text-brand-mauve transition-colors">+1 (718) 389-6700</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-brand-paper p-2 rounded-full shadow-sm">
                  <Mail className="h-4 w-4 text-brand-mauve" />
                </div>
                <a href="mailto:hello@offprimarysalon.com" className="hover:text-brand-mauve transition-colors">hello@offprimarysalon.com</a>
              </li>
              <li className="pt-2">
                <a 
                  href={INSTAGRAM_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-mauve hover:text-brand-gold transition-colors font-medium bg-brand-paper px-4 py-2 rounded-full shadow-sm hover:shadow-md"
                >
                  <Instagram className="h-5 w-5" />
                  <span>@banginhairbk</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-mauve/20 pt-8 text-center">
          <p className="font-sans text-sm text-brand-text/60">
            &copy; {new Date().getFullYear()} Bangin Hair BK. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;