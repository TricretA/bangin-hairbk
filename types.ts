export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  GALLERY = 'gallery',
  CONTACT = 'contact'
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role?: string;
  bio: string;
  image: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  price?: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

export interface StylistService {
  name: string;
  price: string;
}

export interface StylistPricing {
  name: string;
  services: StylistService[];
}

export interface FaqItem {
  question: string;
  answer: string;
}