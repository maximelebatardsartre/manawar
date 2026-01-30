import { ServiceItem, ExperienceItem, StatItem, PricingItem, CertificationItem } from './types';

export const NAVIGATION_LINKS = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Tarifs', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
];

export const PROFILE_IMAGE = "https://media.licdn.com/dms/image/v2/D4E22AQH4-13oB10C7w/feedshare-shrink_800/feedshare-shrink_800/0/1716918643024?e=2147483647&v=beta&t=cdL7Zx13s96HCmyJoDvQ6IThro1Rz_Wfd2-XPuZk0wc";
export const ACTION_IMAGE = "https://i.postimg.cc/5yHxFLKv/Whats-App-Image-2026-01-30-at-13-45-10.jpg";

export const HERO_CONTENT = {
  title: "Optimisation. Automatisation. IA. Efficacité.",
  subtitle: "J’accompagne les entreprises dans l’amélioration de leurs processus, l’intégration d’outils modernes et la mise en place de solutions IA concrètes, fiables et durables."
};

export const QUICK_SERVICES: ServiceItem[] = [
  {
    id: 'process',
    title: 'Optimisation de Processus',
    description: 'Audit, simplification, standardisation, documentation. Je transforme des workflows complexes en processus clairs et performants.',
    icon: 'Settings'
  },
  {
    id: 'tools',
    title: 'Intégration & Automatisation',
    description: 'CRM, Notion, automatisations, API, tableaux de bord. Je mets en place des solutions concrètes qui réduisent la charge opérationnelle.',
    icon: 'Zap'
  },
  {
    id: 'ai',
    title: 'IA & Solutions Génératives',
    description: 'Agents IA, automatisations intelligentes, outils IA internes. L’IA devient un levier opérationnel, pas un gadget.',
    icon: 'Brain'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'paramount',
    company: 'Paramount Global',
    role: 'Sponsorship & Entertainment Sales',
    period: 'Août 2024 - Août 2025',
    location: 'Paris',
    description: 'Participation au développement commercial et au pilotage de partenariats dans l’univers du divertissement et des médias.',
    missions: [
      'Contribution à des opérations événementielles de référence (Paris Games Week, Mondial de l’Auto, Japan Expo)',
      'Automatisation de processus internes liés à la récupération et structuration de données',
      'Analyse de performance et reporting de campagnes publicitaires multi-supports'
    ]
  },
  {
    id: 'spri',
    company: 'Spri Esport',
    role: 'Co-fondateur & COO',
    period: 'Oct 2021 - Aujourd\'hui',
    description: 'Pilotage de la vision stratégique et du développement global d’une startup esport en phase MVP.',
    missions: [
      'Définition de la vision produit et stratégique',
      'Structuration et coordination d’une équipe de 5 personnes',
      'Contribution à une levée de fonds de 100k €',
      'Incubation à la CCI de La Défense'
    ]
  },
  {
    id: 'freelance',
    company: 'Spri Agency / Freelance',
    role: 'Consultant Digital & Opérations',
    period: 'Nov 2019 - Aujourd\'hui',
    description: 'Expertise polyvalente en gestion de communautés, audit SEO, et développement web.',
    missions: [
      'Création et déploiement de bots Discord pour automatisation',
      'Réalisation de plus de 100 audits techniques SEO',
      'Gestion de communautés de 300 à 10 000 membres'
    ]
  },
  {
    id: 'estack',
    company: 'ESTACK',
    role: 'Président & Fondateur',
    period: 'Déc 2021 - Août 2024',
    description: 'Création et pilotage d’un projet de carte de visite connectée écologique.',
    missions: [
      'Conception du produit et stratégie marketing',
      'Gestion de la chaîne d’approvisionnement et partenaires'
    ]
  },
   {
    id: 'xp',
    company: 'XP School',
    role: 'Ambassadeur',
    period: 'Oct 2022 - Juin 2024',
    description: 'Représentation institutionnelle et coordination événementielle.',
    missions: [
      'Participation à plus de 30 salons et forums',
      'Référent des ambassadeurs pendant 2 ans',
      'Prise de parole en public et animation'
    ]
  }
];

export const KEY_STATS: StatItem[] = [
  { value: '+1100', label: 'Professionnels dans mon réseau' },
  { value: '3+', label: 'Années d\'expérience entrepreneuriale' },
  { value: '100+', label: 'Audits & Optimisations réalisés' },
  { value: '30+', label: 'Événements coordonnés' }
];

export const SKILLS = [
  'Optimisation de workflows',
  'Automatisation (API / Low-code)',
  'Intégration CRM / Notion',
  'Solutions IA & Agents',
  'Structuration de données',
  'Coordination d\'équipes',
  'Gestion de projets',
  'Communication'
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: 'Sales Hub', issuer: 'HubSpot', date: 'Janv 2026' },
  { name: 'Formation Jira', issuer: 'Udemy', date: 'Juin 2024' },
  { name: 'EF SET Certificate [C2]', issuer: 'EF SET', date: 'Juil 2023' },
  { name: 'Marketing Numérique', issuer: 'Google', date: 'Avr 2022' },
  { name: 'Fondamentaux Négociation', issuer: 'ESSEC', date: 'Févr 2022' },
  { name: 'Sécurité Informatique', issuer: 'ANSSI', date: 'Nov 2021' }
];

export const PRICING_DATA: PricingItem[] = [
  {
    service: 'Optimisation / Process / IA',
    price: '350 – 500 € / jour',
    description: 'Audit, documentation, standardisation et implémentation de solutions IA.'
  },
  {
    service: 'Automatisation avancée',
    price: '400 – 700 € / jour',
    description: 'Connexions API, scripts complexes, bots, dashboards automatisés.'
  },
  {
    service: 'Coordination & Opérations',
    price: '200 – 350 € / jour',
    description: 'Gestion événementielle, logistique, coordination d\'équipe terrain.'
  }
];

export const CONTACT_INFO = {
  email: 'maxime.lebatard.sartre@gmail.com',
  linkedin: 'https://www.linkedin.com/in/maxime-lebatard-sartre',
  location: 'Paris, France'
};