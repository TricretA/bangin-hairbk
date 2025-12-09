import React from 'react';
import { VAGARO_LINK } from '../constants';

const Gallery: React.FC = () => {
  // Using real images provided by user
  const images = [
    { 
      url: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyABDdp5qhM9XBRi5F0JLmV8Id6wW2dqdraXdJMR0mrbjUwumVRFtjDkWhqMS02mqMOymbD0gjQqWp5JJHuMH_9IN9PeuAegGPJvMtvIWKSr84N-qEzM0wlmNK8-Db5n6p_1WAn=w224-h298-k-no', 
      size: 'small', 
      label: 'Creative Color' 
    },
    { 
      url: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzROHcI2egeS5SwJQ6TcmazG9JowHwmcecQD4zB_JWTEPTcFQFDpYYjk7GT6XsBuh3cP2dTL8451kN6DVGv8SwTO_3C_KvzSf4QbVFiXWq_rz678F9whFCOCQ-6rL_RV4pR6Ue1=w416-h298-k-no', 
      size: 'wide', 
      label: 'Precision Cut' 
    },
    { 
      url: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwTQeKSWXoOv8By73zK0eaqijDma-zNN68oBCdjsV0kanQejOxShWZs6jjXogy_Fw9W9FquUKtALPfkPADqoidF0PKe46J-k1xa7-oH1vWEaJ5WeQMPpgr_NtSI7AvGs5IV2DBS=w224-h398-k-no', 
      size: 'small', 
      label: 'Natural Balayage' 
    },
    { 
      url: 'https://lh3.googleusercontent.com/p/AF1QipM7sJ_WGjNPYAFSt7xAc300PeO4-itp-OpvvN-X=w203-h250-k-no', 
      size: 'small', 
      label: 'Vivid Details' 
    },
    // Adding a few placeholders to fill the grid if needed, or repeating nicely
    { 
        url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop',
        size: 'large',
        label: 'Styling'
    },
    { 
        url: 'https://images.unsplash.com/photo-1632345031635-7b80009a6339?q=80&w=800&auto=format&fit=crop',
        size: 'small',
        label: 'Transformations'
    }
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Hero Header with Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center rounded-b-[3rem] overflow-hidden mb-12">
         {/* Background Image */}
         <img 
            src="https://lh3.googleusercontent.com/p/AF1QipNpn5DPgfvFNkr5AYJ16ndp4S4BKwFWgLTmw5So=w485-h298-k-no" 
            alt="Artistic Hair Photography" 
            className="absolute inset-0 w-full h-full object-cover"
         />
         {/* Overlay */}
         <div className="absolute inset-0 bg-brand-gold/20 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-black/30"></div>

         {/* Content */}
         <div className="relative z-10 text-center px-4 animate-fadeIn">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">Artistry in Action</h1>
            <p className="font-sans text-xl max-w-2xl mx-auto text-white/90 font-medium drop-shadow-md">
              A glimpse into the beautiful transformations happening every day.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[300px] gap-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative group overflow-hidden rounded-[2rem] shadow-sm cursor-pointer bg-brand-cream ${
                img.size === 'large' ? 'md:row-span-2' : 
                img.size === 'wide' ? 'md:col-span-2' : ''
              }`}
            >
              <img 
                src={img.url} 
                alt={img.label} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-mauve/80 transition-colors duration-500 flex items-center justify-center p-6">
                <div className="bg-brand-paper/90 backdrop-blur-sm px-6 py-3 rounded-full transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="font-serif text-lg text-brand-dark">
                      {img.label}
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-brand-cream py-16 rounded-[3rem]">
           <p className="font-serif text-3xl text-brand-dark mb-8">Feeling Inspired?</p>
           <a
            href={VAGARO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-gold text-white font-bold font-sans py-4 px-12 rounded-full hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl"
          >
            LET'S CREATE YOUR LOOK
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;