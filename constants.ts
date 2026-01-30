import { Player, Organizer, NavItem, ArchiveResult } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'ACCUEIL', path: '/' },
  { label: 'CONCEPT', path: '/concept' },
  { label: 'RÈGLES', path: '/rules' },
  { label: 'VOTE', path: '/vote' },
  { label: 'SOLDATS', path: '/players' },
  { label: 'ENRÔLEMENT', path: '/register' },
  { label: 'ÉTAT-MAJOR', path: '/organizers' },
];

export const ORGANIZERS: Organizer[] = [
  { name: 'Maxime Sartre', role: 'Organisateur & Communication Gazette', id: 'cmd-01' },
  { name: 'Benjamin Milot', role: 'Stratégie & Opérations', id: 'ops-01' },
  { name: 'Abderrahim Sari', role: 'Host Externe', id: 'com-01' },
];

export const MOCK_PLAYERS: Player[] = [
  {
    id: '001',
    firstName: 'Maxime',
    lastName: 'Sartre',
    pseudo: 'Az2uP',
    campus: '26XP',
    level: 46,
    rank: 'Sergent',
    quote: "Ca va etre Showwwwwtime !",
    status: 'APPROVED',
    motivation: "Parce que je suis l'host",
    playstyle: 'Industriel',
    hasExperience: true,
    photoUrl: 'https://thumbs.dreamstime.com/b/soldat-dr-le-dans-les-militaires-46984198.jpg'
  }
];

export const HISTORY_EVENTS = [
  { year: '2022', title: 'Opération Zero Dawn', status: 'DATA_LOST' },
  { year: '2023', title: 'Opération Iron Dawn', status: 'ARCHIVED' },
  { year: '2024', title: 'Opération Final Front', status: 'DATA_LOST' },
];

export const MANAWAR_2023_RESULTS: ArchiveResult[] = [
  { rank: 1, country: 'États du Nord', player: 'BlizzaR', score: 400, tags: ['VICTORY', 'ALLIANCE', 'HIGH_LEVEL'], comment: "Domination militaire et diplomatique totale." },
  { rank: 2, country: 'États du Sud', player: 'Az2uP', score: 370, tags: ['SILVER'], comment: "Très forte progression, finish très solide." },
  { rank: 3, country: 'Suède', player: 'Benjy_y', score: 180, tags: ['BRONZE', 'GROWTH'], comment: "Belle performance stratégique." },
  { rank: 4, country: 'Canada', player: 'LeVraiNypo', score: 170, tags: ['PRODUCTION'], comment: "Performance stable et régulière." },
  { rank: 5, country: 'Pologne', player: 'BillyVersion2', score: 120, tags: ['AGGRESSIVE'], comment: "Joueur très agressif, tourné sur l'assaut." },
  { rank: 6, country: 'Turquie', player: 'Kadesh', score: 90, tags: ['WAR_TOTAL'], comment: "Bon jeu offensif malgré la position risquée." },
  { rank: 7, country: 'Caucase', player: 'XpPaf', score: 50, tags: ['MILITARY'], comment: "Début agressif mais difficulté mid-game." },
  { rank: 8, country: 'Russie Com.', player: 'ImFanta', score: 10, tags: ['PEACE'], comment: "Probable early crash ou élimination précoce." },
  { rank: 9, country: 'Royaume-Uni', player: 'Ploufeu', score: 0, tags: ['ATTACK', 'ALLIANCE'], comment: "Probable élimination ou abandon début de partie." },
  { rank: 10, country: 'Italie', player: 'Chadssolini', score: 0, tags: ['PEACE'], comment: "Défaite rapide." },
  { rank: 11, country: 'Espagne', player: 'BNI05', score: 0, tags: ['PEACE'], comment: "Retrait ou élimination très rapide." }
];