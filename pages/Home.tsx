import React from 'react';
import { Page } from '../types';
import { TESTIMONIALS, VAGARO_LINK } from '../constants';
import { Scissors, Palette, Sparkles, Star, ArrowRight, Heart } from 'lucide-react';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.squarespace-cdn.com/content/v1/623b56b854103f14c1bbb44d/ce5296c1-1829-46a3-87c8-5e121e9045e2/image2.jpeg?format=2500w" 
            alt="Salon Interior" 
            className="w-full h-full object-cover"
          />
          {/* Darker overlay for better contrast if needed, but the card handles it mostly */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Frosted Glass Card for Text Visibility */}
          <div className="space-y-8 animate-slideUp bg-brand-paper/80 backdrop-blur-md p-8 md:p-12 rounded-[3rem] shadow-2xl border border-brand-paper/50">
            <div className="inline-block bg-brand-softpink px-4 py-2 rounded-full">
               <span className="text-brand-mauve font-bold tracking-widest text-xs uppercase">Welcome to</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-brand-dark leading-tight">
              <span className="block text-brand-mauve lowercase mb-2">banginhairbk</span>
              Your Beauty, <br/> 
              <span className="italic text-brand-gold">Reimagined.</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-brand-dark max-w-md font-medium leading-relaxed">
              Brooklyn's sweetest destination for masterful cuts and transformative color. Where your vision becomes our art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={VAGARO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-mauve text-white font-bold font-sans py-4 px-10 rounded-full hover:bg-brand-gold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-brand-mauve/30 text-center"
              >
                Book Your Glow
              </a>
              <button
                onClick={() => setPage(Page.SERVICES)}
                className="bg-brand-paper text-brand-dark font-bold font-sans py-4 px-10 rounded-full hover:bg-brand-softpink transition-all duration-300 border-2 border-brand-softpink hover:border-brand-mauve text-center"
              >
                View Services
              </button>
            </div>
          </div>
          {/* Decorative floating images could go here on desktop, or just keep layout clean */}
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-brand-paper rounded-t-[3rem] -mt-10 relative z-20 shadow-[-10px_-10px_30px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-brand-gold font-serif italic text-xl">What we do best</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mt-2 mb-4">Our Artistry</h2>
            <div className="w-24 h-1 bg-brand-softpink mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cut */}
            <div 
              className="bg-brand-cream p-10 rounded-[2rem] hover:shadow-xl transition-all duration-500 cursor-pointer group border border-transparent hover:border-brand-softpink transform hover:-translate-y-2"
              onClick={() => { setPage(Page.SERVICES); window.scrollTo(0,0); }}
            >
              <div className="w-20 h-20 bg-brand-paper rounded-2xl rotate-3 flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:rotate-0 transition-transform duration-500">
                <Scissors className="h-10 w-10 text-brand-mauve" />
              </div>
              <h3 className="font-serif text-2xl text-center text-brand-dark mb-4">Precision Cuts</h3>
              <p className="font-sans text-center text-brand-text mb-8 leading-relaxed">
                Tailored shapes that frame your face and fit your lifestyle, from classic bobs to avant-garde styles.
              </p>
              <div className="text-center">
                <span className="inline-flex items-center justify-center gap-2 text-brand-mauve font-bold text-sm bg-brand-paper px-6 py-2 rounded-full shadow-sm group-hover:bg-brand-mauve group-hover:text-white transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>

            {/* Color */}
            <div 
              className="bg-brand-softpink/50 p-10 rounded-[2rem] hover:shadow-xl transition-all duration-500 cursor-pointer group border border-transparent hover:border-brand-mauve/20 transform hover:-translate-y-2"
              onClick={() => { setPage(Page.SERVICES); window.scrollTo(0,0); }}
            >
              <div className="w-20 h-20 bg-brand-paper rounded-2xl -rotate-3 flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:rotate-0 transition-transform duration-500">
                <Palette className="h-10 w-10 text-brand-gold" />
              </div>
              <h3 className="font-serif text-2xl text-center text-brand-dark mb-4">Dreamy Color</h3>
              <p className="font-sans text-center text-brand-text mb-8 leading-relaxed">
                Lived-in balayage, vivid transformations, and sun-kissed highlights that grow out beautifully.
              </p>
              <div className="text-center">
                <span className="inline-flex items-center justify-center gap-2 text-brand-gold font-bold text-sm bg-brand-paper px-6 py-2 rounded-full shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>

            {/* Treatments */}
            <div 
              className="bg-brand-cream p-10 rounded-[2rem] hover:shadow-xl transition-all duration-500 cursor-pointer group border border-transparent hover:border-brand-softpink transform hover:-translate-y-2"
              onClick={() => { setPage(Page.SERVICES); window.scrollTo(0,0); }}
            >
              <div className="w-20 h-20 bg-brand-paper rounded-2xl rotate-3 flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:rotate-0 transition-transform duration-500">
                <Sparkles className="h-10 w-10 text-brand-mauve" />
              </div>
              <h3 className="font-serif text-2xl text-center text-brand-dark mb-4">Healthy Hair</h3>
              <p className="font-sans text-center text-brand-text mb-8 leading-relaxed">
                Luxurious keratin treatments and restorative care to keep your hair feeling as good as it looks.
              </p>
              <div className="text-center">
                <span className="inline-flex items-center justify-center gap-2 text-brand-mauve font-bold text-sm bg-brand-paper px-6 py-2 rounded-full shadow-sm group-hover:bg-brand-mauve group-hover:text-white transition-all">
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-softpink relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-paper/30 rounded-full mix-blend-overlay filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full mix-blend-overlay filter blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="mb-12 flex justify-center">
             <div className="bg-brand-paper p-3 rounded-full shadow-sm">
                <Heart className="h-6 w-6 text-brand-mauve fill-current" />
             </div>
          </div>
          
          <div className="space-y-8 animate-fadeIn">
               <p className="font-serif text-2xl md:text-4xl text-brand-dark leading-relaxed italic">
                  "{TESTIMONIALS[0].text}"
               </p>
               <div className="flex flex-col items-center gap-4">
                 <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-brand-gold fill-current" />
                    ))}
                 </div>
                 <cite className="not-italic font-sans font-bold text-brand-mauve text-lg">
                   {TESTIMONIALS[0].name}
                 </cite>
               </div>
          </div>
          
          <div className="mt-12">
              <button 
                onClick={() => { setPage(Page.ABOUT); window.scrollTo(0,0); }}
                className="text-sm font-sans font-bold text-brand-text hover:text-brand-mauve transition-colors"
              >
                Read more stories
              </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-brand-cream relative">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl text-brand-dark mb-8">
            Ready to feel beautiful?
          </h2>
          <p className="font-sans text-xl text-brand-text mb-12 max-w-2xl mx-auto">
            Our stylists are ready to create magic with you. Schedule your visit today and let your hair do the talking.
          </p>
          <a
            href={VAGARO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-dark text-white font-bold font-sans py-5 px-16 rounded-full hover:bg-brand-mauve transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
          >
            Book Appointment
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;