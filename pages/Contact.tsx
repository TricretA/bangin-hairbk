import React, { useState } from 'react';
import { GOOGLE_MAPS_EMBED_URL, VAGARO_LINK } from '../constants';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    source: 'Google'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: '', email: '', phone: '', subject: '', message: '', source: 'Google' });
  };

  return (
    <div className="w-full min-h-screen">
      {/* Hero Header with Image */}
      <div className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center rounded-b-[3rem] overflow-hidden mb-12">
         {/* Background Image */}
         <img 
            src="https://lh3.googleusercontent.com/p/AF1QipMGwfxLUgxJ0I9NIYB6v66PbM8_T6p-7j-r1RhV=s507-k-no" 
            alt="Contact Reception" 
            className="absolute inset-0 w-full h-full object-cover"
         />
         {/* Overlay */}
         <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-black/20"></div>

         {/* Content */}
         <div className="relative z-10 text-center px-4 animate-fadeIn">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">Get in Touch</h1>
            <p className="font-sans text-xl max-w-2xl mx-auto text-white/90 font-medium drop-shadow-md">
              Questions? We'd love to hear from you.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-12">
            <div className="bg-brand-softpink/40 p-10 rounded-[2.5rem] border border-brand-softpink">
              <h2 className="font-serif text-2xl text-brand-dark mb-4">Book Your Visit</h2>
              <p className="font-sans text-brand-text mb-8">
                For the fastest service, please use our online booking system to see real-time availability.
              </p>
              <a 
                href={VAGARO_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-mauve text-white font-bold font-sans py-3 px-8 rounded-full hover:bg-brand-gold transition-colors shadow-md hover:shadow-lg"
              >
                <Calendar className="h-5 w-5" />
                Book Now via Vagaro
              </a>
            </div>

            <div className="space-y-8 font-sans text-brand-dark pl-4">
              <div className="flex items-start gap-6 group">
                <div className="bg-brand-cream p-3 rounded-2xl group-hover:bg-brand-softpink transition-colors">
                    <MapPin className="h-6 w-6 text-brand-mauve" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Address</h3>
                  <p className="text-brand-text">219 Calyer St,<br />Brooklyn, NY 11222</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                 <div className="bg-brand-cream p-3 rounded-2xl group-hover:bg-brand-softpink transition-colors">
                    <Phone className="h-6 w-6 text-brand-mauve" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Phone</h3>
                  <p className="text-brand-text">+1 (718) 389-6700</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                 <div className="bg-brand-cream p-3 rounded-2xl group-hover:bg-brand-softpink transition-colors">
                    <Mail className="h-6 w-6 text-brand-mauve" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Email</h3>
                  <p className="text-brand-text">banginhairbk@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                 <div className="bg-brand-cream p-3 rounded-2xl group-hover:bg-brand-softpink transition-colors">
                    <Clock className="h-6 w-6 text-brand-mauve" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Hours</h3>
                  <ul className="text-brand-text text-sm space-y-2 mt-1">
                    <li className="flex justify-between w-48"><span className="font-bold">Mon:</span> Closed</li>
                    <li className="flex justify-between w-48"><span className="font-bold">Tue - Fri:</span> 12 PM – 7 PM</li>
                    <li className="flex justify-between w-48"><span className="font-bold">Sat:</span> 11 AM – 6 PM</li>
                    <li className="flex justify-between w-48"><span className="font-bold">Sun:</span> Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-brand-paper p-10 rounded-[3rem] shadow-xl shadow-brand-mauve/5 h-fit border border-brand-cream">
            <h2 className="font-serif text-3xl text-brand-dark mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-brand-dark mb-2 font-sans ml-2">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  value={formData.name} 
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-brand-cream border border-transparent focus:border-brand-mauve focus:bg-brand-paper outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2 font-sans ml-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    value={formData.email} 
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-brand-cream border border-transparent focus:border-brand-mauve focus:bg-brand-paper outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2 font-sans ml-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-brand-cream border border-transparent focus:border-brand-mauve focus:bg-brand-paper outline-none transition-all"
                    placeholder="(555) 555-5555"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-dark mb-2 font-sans ml-2">How did you hear about us?</label>
                <div className="relative">
                    <select 
                    name="source" 
                    value={formData.source} 
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-brand-cream border border-transparent focus:border-brand-mauve focus:bg-brand-paper outline-none transition-all appearance-none cursor-pointer"
                    >
                    <option value="Google">Google Search</option>
                    <option value="Social Media">Social Media (Instagram/Facebook)</option>
                    <option value="Referral">Friend/Family Referral</option>
                    <option value="Existing Client">Existing Client</option>
                    <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-brand-text">▼</div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-dark mb-2 font-sans ml-2">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  required
                  value={formData.subject} 
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-brand-cream border border-transparent focus:border-brand-mauve focus:bg-brand-paper outline-none transition-all"
                  placeholder="Inquiry about..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-dark mb-2 font-sans ml-2">Message</label>
                <textarea 
                  name="message" 
                  rows={4}
                  required
                  value={formData.message} 
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-brand-cream border border-transparent focus:border-brand-mauve focus:bg-brand-paper outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-dark text-white font-bold font-sans py-4 rounded-full hover:bg-brand-mauve transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
         {/* Map */}
         <div className="mt-16 w-full h-80 bg-gray-200 rounded-[3rem] overflow-hidden shadow-inner border-4 border-brand-paper">
            <iframe 
            src={GOOGLE_MAPS_EMBED_URL} 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Bangin Hair BK Location"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;