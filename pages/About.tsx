import React from 'react';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Header with Image */}
      <div className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center rounded-b-[3rem] overflow-hidden mb-12">
         {/* Background Image */}
         <img 
            src="https://lh3.googleusercontent.com/p/AF1QipMdl4J_CAK3yvWg61seFeShFShRIPJbP5AlK-v0=s2048-v1" 
            alt="Bangin Hair BK Interior" 
            className="absolute inset-0 w-full h-full object-cover"
         />
         {/* Overlay */}
         <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

         {/* Content */}
         <div className="relative z-10 text-center px-4 animate-fadeIn">
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">Our Story</h1>
            <p className="font-sans text-xl md:text-2xl max-w-2xl mx-auto text-white/90 font-medium drop-shadow-md">
              Evolution, Inclusivity, and Sweet Artistry.
            </p>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-24">
        
        {/* Story Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center animate-slideUp">
          <div className="relative group">
            <div className="absolute inset-0 bg-brand-mauve rounded-[2rem] rotate-3 transform translate-x-2 translate-y-2 opacity-20 group-hover:rotate-6 transition-transform duration-700"></div>
            <img 
              src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxUkcfuV7uL2VK3i33gZUzIXoqOCMYPMAH64wLe7j2MoqM5UmxYf9iS2TSMk1SWCrtNO7ur-OiAS9qKd7BeIOxL1GO9MDaiR_GFy01tSo9iEDnStx7AaAUHKVMFT3kOxz8b1cErDw=w224-h398-k-no" 
              alt="Salon Interior Detail" 
              className="relative rounded-[2rem] shadow-xl w-full h-auto object-cover max-h-[600px]"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl text-brand-dark mb-8">From Brooklyn with Love</h2>
            <div className="prose font-sans text-brand-text space-y-6 text-lg leading-relaxed">
              <p>
                <span className="font-bold text-brand-mauve">Bangin Hair BK</span> is the fresh face of what was formerly 'Bangin Hair BK' (briefly known as Off Primary Salon). Established in 2020 by Diane Ramirez, a full-time stylist since 2005, the salon quickly gained acclaim in San Francisco before bringing its unique flair to Greenpoint, Brooklyn.
              </p>
              <p>
                In 2025, a new chapter began under the visionary ownership of <span className="text-brand-dark font-bold">Juliann</span>. We represent an evolution – a space where creativity thrives, individuality is celebrated, and every client leaves feeling empowered and beautiful.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-brand-paper p-12 rounded-[3rem] shadow-sm border border-brand-softpink text-center max-w-4xl mx-auto relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-mauve via-brand-softpink to-brand-gold"></div>
          <h2 className="font-serif text-3xl text-brand-dark mb-6">Our Mission</h2>
          <p className="font-sans text-xl text-brand-text italic leading-relaxed">
            "To empower individuals through exceptional hair artistry, fostering a welcoming and inclusive environment where creativity, expertise, and personalized care converge to enhance natural beauty and inspire confidence."
          </p>
        </section>

        {/* Team */}
        <section>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">Meet The Artists</h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col gap-12">
            {TEAM.map((member, index) => (
              <div 
                key={member.id} 
                className={`bg-brand-paper rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col md:flex-row border border-brand-cream group transform ${
                   'animate-fadeIn'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="md:w-2/5 overflow-hidden relative">
                   <div className="absolute inset-0 bg-brand-mauve/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-multiply"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top min-h-[400px] transition-transform duration-1000 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0" 
                  />
                </div>
                <div className="p-10 md:w-3/5 flex flex-col justify-center bg-brand-paper relative">
                   {/* Decorative quote mark */}
                   <div className="absolute top-8 right-8 text-brand-softpink text-9xl font-serif opacity-20 leading-none pointer-events-none group-hover:text-brand-gold transition-colors duration-500">"</div>
                   
                  <h3 className="font-serif text-3xl font-bold text-brand-dark mb-1 group-hover:text-brand-mauve transition-colors">{member.name}</h3>
                  {member.role && (
                    <span className="font-sans text-sm text-brand-mauve uppercase tracking-wider font-bold mb-6 block border-b border-brand-cream pb-4 w-fit">
                        {member.role}
                    </span>
                  )}
                  <p className="font-sans text-brand-text leading-relaxed text-lg">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { title: "Artistry", desc: "Hair is our canvas, and we are dedicated artists." },
              { title: "Inclusivity", desc: "Every client is welcomed and celebrated." },
              { title: "Comfort", desc: "We prioritize your joy and relaxation." },
              { title: "Innovation", desc: "Constantly learning the best techniques." }
            ].map((val, idx) => (
              <div 
                key={idx} 
                className="p-8 bg-brand-paper rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-500 border border-brand-softpink hover:-translate-y-2 group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h4 className="font-serif text-xl text-brand-gold mb-3 group-hover:text-brand-mauve transition-colors">{val.title}</h4>
                <p className="font-sans text-sm text-brand-text">{val.desc}</p>
              </div>
            ))}
        </section>

      </div>
    </div>
  );
};

export default About;