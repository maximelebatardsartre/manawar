export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  pseudo: string;
  campus: string;
  level: number;
  rank: string;
  quote: string;
  status: 'APPROVED' | 'PENDING';
  motivation?: string;
  playstyle?: string;
  hasExperience?: boolean;
  photoUrl?: string;
}

export interface Organizer {
  name: string;
  role: string;
  id: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export enum GameMode {
  CLASSIC = 'CLASSIC',
  HARDCORE = 'HARDCORE'
}

export interface ArchiveResult {
  rank: number;
  country: string;
  player: string;
  score: number;
  tags: string[];
  comment: string;
}