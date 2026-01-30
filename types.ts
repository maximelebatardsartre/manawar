export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  missions?: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface PricingItem {
  service: string;
  price: string;
  description?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}