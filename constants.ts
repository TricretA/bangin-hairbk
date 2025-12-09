import { FaqItem, ServiceCategory, StylistPricing, TeamMember, Testimonial } from "./types";

export const VAGARO_LINK = "https://www.vagaro.com/banginhair/services";
export const INSTAGRAM_LINK = "https://www.instagram.com/banginhairbk";
export const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.645634563829!2d-73.95768992346766!3d40.73061097139091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25966eb85764d%3A0x2614741369527588!2s219%20Calyer%20St%2C%20Brooklyn%2C%20NY%2011222!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Shiran Cohen",
    text: "Julian is the new owner, and I had the best first experience with her. She took on a real challenge and knew exactly what she was doing. I’m super picky and had so many colors in my hair, so I wanted to be sure the process was right for me — and after four hours of hard work, the result is unreal. The color is even and gorgeous, and the haircut is exactly what I pictured. Thank you, and best of luck - you deserve 10 stars."
  },
  {
    id: 2,
    name: "Ann T.C",
    text: "I had a consultation and haircut with Kristen, and I can't thank her enough for the wonderful experience. When I walked into the salon, she greeted me with a warm smile, which made me feel comfortable. She asked insightful questions, showed genuine interest in my preferences, and shared professional tips on various styles. I am thrilled with the haircut I received! I truly appreciate Kristen's talent and attentiveness; she genuinely values her clients."
  },
  {
    id: 3,
    name: "Marisol Ramirez",
    text: "Bangin Hair is the best haircut in town! I’ve been following Diane for years and was so excited that she not only opened up her own salon in San Francisco but is now bicoastal and opening up a second Bagin Hair in Brooklyn. I swear by her haircuts. They always turn out how I imagined and grow out beautifully! She also gives the best head massages when you are getting your hair shampooed. Talk about a two for one. The salon itself is super cute and fun! Always has the best music playing. I highly recommend Bangin Hair! You will not be disappointed 😋"
  },
  {
    id: 4,
    name: "Sarah Mendoza",
    text: "Had my hair cut with Sabrina and it was a great experience. The salon itself is very cute and clean. I am new to the area and chose this salon based on its proximity and overall aesthetic and am so happy it worked out. I have gotten SO MANY compliments on my hair cut! I wanted to do something different and Sabrina asked the right questions and really did a good job. Will definitely be back!"
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Juliann",
    role: "Owner / Stylist",
    bio: "Born and raised in San Francisco, Juliann loves being inspired by the west coast lifestyle. They went to cosmetology school in 2009 after years of being a makeup artist, and decided to focus their attention on working as a hairstylist behind the chair. They’ve learned early on that they prioritize building a trusting rapport with everyone who sits in their chair. They think bangs look good on everyone, and love huge color transformations, whether it’s a correction or going from dark to blonde in one sitting. They have been splitting their time doing hair in NYC and SF since 2018.",
    image: "https://images.squarespace-cdn.com/content/v1/623b56b854103f14c1bbb44d/9a54545c-0b84-4de4-93e9-20638b68d34a/0-1.jpg?format=1000w"
  },
  {
    id: 2,
    name: "Diane Ramirez",
    role: "Founder / Master Stylist",
    bio: "Diane Ramirez has been a full time hair stylist since 2005 and has been working in San Francisco for twelve years, opening Bangin Hair Salon in 2020. She has built a clientele that reflects her previous employment time spent at both high end salons and hip mid-range barber shops. Her career started in Southern California with Toni & Guy hairdressing. Toni & Guy provided a strong foundational education in haircutting and styling but the culture of San Francisco was beckoning and in late 2009 Diane packed up and headed North. Diane has taken cut and color classes with some of the leading hairdressers in the industry including Howard McLaren, Corinna Hernandez, Shannon Rha, Briana Cisneros, and Whittmore House, to name a few. She is looking forward to splitting her time between San Francisco and Brooklyn, focusing her time in New York on only haircuts. She enjoys and excels in barber work, razor cuts, curly ‘dos and soft layers.",
    image: "https://images.squarespace-cdn.com/content/v1/623b56b854103f14c1bbb44d/a7ff3680-5c60-45ae-9e00-413a5f509dc4/0.jpg?format=750w"
  },
  {
    id: 3,
    name: "Shannon McNair",
    role: "Color Specialist",
    bio: "After graduating from Aveda Institute Soho in 2008, Shannon began her training as a colorist under Marie Robinson at her eponymous salon located in New York’s trendy Flatiron District. A short time later, she joined Serge Normant at John Frieda working at both of his high-volume Manhattan locations. Shannon specializes in blondes and sun-kissed brunettes, using balayage techniques. She also prides herself in the art of the double process blonde and enjoys the formulation of a good redhead. Her personal philosophy is simple: A color should complement an individual’s outward beauty, while inspiring their confidence from within.",
    image: "https://images.squarespace-cdn.com/content/v1/623b56b854103f14c1bbb44d/67141b3f-3c29-41cf-93cc-94fcaf0dd4ab/0-2.jpg?format=750w"
  },
  {
    id: 4,
    name: "Kristen Bretz",
    role: "Stylist / Educator",
    bio: "Kristen Bretz moved from Ohio to NY in 2010. She began her career at the Aveda institute and has since fine tuned her skills and creativity. She has worked as a color specialist, educator and continues to seek education. Kristen specializes in believable hair, haircuts and color that enhances your already gorgeous face. Hair that makes people say, “maybe she was born with it!”.",
    image: "https://images.squarespace-cdn.com/content/v1/623b56b854103f14c1bbb44d/bd016cae-2529-4cb3-b387-2635bfa57cf4/IMG_AF09D8319CB5-1.jpeg?format=1000w"
  }
];

export const PRICING_DISCLAIMER = "Please note that all color prices listed are starting rates. Additional charges may occur to accommodate extra time and product used. We encourage consultations! They are complimentary, and can be booked online or over the phone.";

export const STYLIST_PRICING: StylistPricing[] = [
  {
    name: "DIANE",
    services: [
      { name: "Haircut", price: "$150" },
      { name: "Transformational Haircut", price: "$175" },
      { name: "Barber Cut", price: "$85" },
      { name: "Bang Trim", price: "$25" },
      { name: "Full Highlight", price: "$360" },
      { name: "Half Highlight", price: "$300" },
      { name: "Single Process Roots", price: "$150" },
      { name: "Single Process Full", price: "$185" },
      { name: "Gloss", price: "$80" }
    ]
  },
  {
    name: "JULIANN",
    services: [
      { name: "Haircut", price: "$150" },
      { name: "Transformational Haircut", price: "$200" },
      { name: "Barber Cut", price: "$85" },
      { name: "Bang/Neck Trim", price: "$30" },
      { name: "Blowout", price: "$100" },
      { name: "Double Process Roots", price: "$300" },
      { name: "Full Highlight", price: "$360" },
      { name: "Half Highlight", price: "$300" },
      { name: "Surface Highlight", price: "$220" },
      { name: "Single Process Roots", price: "$150" },
      { name: "Single Process Full", price: "$185" },
      { name: "Gloss", price: "$125" },
      { name: "Add-ons: Root Melt", price: "$45/$60" },
      { name: "Add-ons: Tip Out", price: "$90" }
    ]
  },
  {
    name: "KRISTEN",
    services: [
      { name: "Haircut", price: "$130" },
      { name: "Barber Cut", price: "$85" },
      { name: "Bang/Neck Trim", price: "$25" },
      { name: "Double Process Roots", price: "$300+" },
      { name: "Full Highlight", price: "$345" },
      { name: "Half Highlight", price: "$285" },
      { name: "Surface Highlight", price: "$215" },
      { name: "Gloss", price: "$110" },
      { name: "Single Process Roots", price: "$150" },
      { name: "Single Process Full", price: "$185" }
    ]
  },
  {
    name: "SHANNON",
    services: [
      { name: "Full Highlight", price: "$330+" },
      { name: "Half Highlight", price: "$280+" },
      { name: "Surface Highlight", price: "$220" },
      { name: "Double Process Roots*", price: "$250+" },
      { name: "Single Process Roots*", price: "$135" },
      { name: "Single Process Full", price: "$175" },
      { name: "Gloss", price: "$100" },
      { name: "Color Correction", price: "$130/hr" }
    ]
  },
  {
    name: "PRISCILA",
    services: [
      { name: "Haircut", price: "$135" },
      { name: "Transformational Cut", price: "$175" },
      { name: "Bang/Neck Trim", price: "$35" },
      { name: "Full Highlight", price: "$455" },
      { name: "Half Highlight", price: "$350" },
      { name: "Surface Highlight", price: "$220" },
      { name: "Single Process Roots", price: "$175" },
      { name: "Single Process Full", price: "$260" }
    ]
  }
];

// Keeping generic services for home page summary if needed, or deprecating
export const SERVICES: ServiceCategory[] = [
  {
    title: "Haircuts & Styling",
    items: [
      { name: "Haircuts", description: "Tailored cuts for all lengths and textures.", price: "Varies" },
      { name: "Curly Haircut", description: "Specialized techniques for enhancing and defining curly and wavy textures.", price: "Varies" },
      { name: "Clipper Cuts", description: "Precision cuts for shorter styles.", price: "Varies" },
    ]
  },
  {
    title: "Color & Highlights",
    items: [
      { name: "Balayage", description: "Hand-painted highlights for a natural, sun-kissed look.", price: "Varies" },
      { name: "Highlights", description: "Traditional foil highlights for dimension and brightness.", price: "Varies" },
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "How do I book an appointment?",
    answer: "You can easily book online through our website's 'Book Now' button, which links directly to our Vagaro booking system, or by calling us during business hours."
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer: "We kindly request at least 24 hours' notice for cancellations or rescheduling. Please refer to our booking policy on Vagaro for full details."
  },
  {
    question: "Do you offer consultations?",
    answer: "Yes, we offer complimentary consultations for color services, extensions, and major transformations to ensure we align perfectly with your vision."
  },
  {
    question: "What products do you use?",
    answer: "We proudly use and recommend Kevin Murphy styling products, known for their high quality and eco-friendly approach."
  }
];