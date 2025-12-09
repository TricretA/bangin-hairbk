import React, { useEffect } from 'react';
import { FAQS, STYLIST_PRICING, PRICING_DISCLAIMER, VAGARO_LINK } from '../constants';
import { Sparkles, Calendar, AlertCircle } from 'lucide-react';

const Services: React.FC = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-16');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* Hero Header with Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center rounded-b-[3rem] overflow-hidden mb-12">
         {/* Background Image */}
         <img 
            src="https://lh3.googleusercontent.com/p/AF1QipOqSgppTX9RjCByI1pdDMMk_dTFy2ehzuLnmJ0w=s683-k-no" 
            alt="Salon Tools and Products" 
            className="absolute inset-0 w-full h-full object-cover"
         />
         {/* Overlay */}
         <div className="absolute inset-0 bg-brand-mauve/30 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-black/30"></div>

         {/* Content */}
         <div className="relative z-10 text-center px-4 animate-fadeIn">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">Menu of Artistry</h1>
            <p className="font-sans text-xl max-w-2xl mx-auto text-white/90 font-medium drop-shadow-md">
              Masterful techniques tailored to your unique style.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Disclaimer Note */}
        <div className="bg-brand-softpink/30 border border-brand-mauve/20 p-8 rounded-3xl mb-16 shadow-sm flex items-start gap-4 animate-slideUp">
            <AlertCircle className="h-6 w-6 text-brand-mauve flex-shrink-0 mt-1" />
            <p className="font-sans text-brand-dark/80 leading-relaxed font-medium">
                {PRICING_DISCLAIMER}
            </p>
        </div>

        {/* Pricing By Stylist */}
        <div className="space-y-12">
            <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">Pricing by Artist</h2>
                <div className="w-16 h-1 bg-brand-softpink mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {STYLIST_PRICING.map((stylist, idx) => (
                <div 
                    key={idx} 
                    className="animate-on-scroll opacity-0 translate-y-16 bg-brand-paper rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl border border-brand-cream transition-all duration-700 ease-out hover:-translate-y-2 flex flex-col h-full"
                    style={{ transitionDelay: `${(idx % 3) * 150}ms` }}
                >
                    <div className="mb-8 text-center border-b border-brand-softpink pb-6">
                        <span className="font-sans text-xs font-bold text-brand-mauve uppercase tracking-widest mb-2 block">Stylist</span>
                        <h3 className="font-serif text-3xl text-brand-dark">{stylist.name}</h3>
                    </div>
                    
                    <ul className="space-y-4 flex-grow">
                        {stylist.services.map((service, sIdx) => (
                            <li key={sIdx} className="flex justify-between items-start group">
                                <span className="font-sans text-brand-text/90 group-hover:text-brand-dark transition-colors text-sm font-medium">{service.name}</span>
                                <span className="font-sans font-bold text-brand-mauve whitespace-nowrap ml-4 text-sm">{service.price}</span>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="mt-8 pt-6 border-t border-brand-cream text-center">
                        <a 
                            href={VAGARO_LINK} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block text-xs font-bold text-brand-text hover:text-brand-mauve uppercase tracking-wider border-b border-transparent hover:border-brand-mauve transition-all"
                        >
                            Book with {stylist.name}
                        </a>
                    </div>
                </div>
            ))}
            </div>
        </div>

        {/* Additional Note for Color */}
        <div className="mt-12 text-center max-w-2xl mx-auto px-4">
             <p className="text-brand-text/60 text-sm italic">
                *Double Process Roots price for 6-8 weeks of regrowth.
             </p>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <a
            href={VAGARO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-dark text-white font-bold font-sans py-4 px-12 rounded-full hover:bg-brand-mauve transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
          >
            <Calendar className="h-5 w-5" />
            BOOK YOUR APPOINTMENT
          </a>
        </div>

        {/* FAQ */}
        <div className="mt-32">
          <h2 className="font-serif text-4xl text-center text-brand-dark mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className="animate-on-scroll opacity-0 translate-y-16 bg-brand-softpink/30 p-8 rounded-3xl hover:bg-brand-softpink/50 transition-all duration-700 ease-out cursor-default"
                style={{ transitionDelay: `${(idx % 2) * 150}ms` }}
              >
                <h4 className="font-serif text-xl font-bold text-brand-dark mb-3">
                  {faq.question}
                </h4>
                <p className="font-sans text-brand-text leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;