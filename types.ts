export enum Sheet {
  Login = 0,
  Map = 1,
}

export type Languages = 'FI' | 'EN';

export interface User {
  name: string;
  key: string;
  email: string;
  sweden: boolean;
  day: boolean;
  evening: boolean;
  registrations_available?: number;
  registrations_made?: number;
  language: Languages;
}

export interface Countries {
  fin: 'Suomi' | 'Ruotsi' | 'Tanska' | 'Saksa' | 'Tanska_paluu' | 'Ruotsi_paluu';
  eng: 'Finland' | 'Sweden' | 'Denmark' | 'Germany' | 'Denmark_returm' | 'Sweden_return';
}

export interface Present {
  itemFin: string;
  itemEng: string;
  countryFin: Countries['fin'];
  countryEng: Countries['eng'];
  priceShown?: number;
  paid: boolean;
}

export interface PresentData {
  id: number;
  key: Countries['fin'];
  data: Present[];
  totalPrice: number;
  totalPaid: number;
}
