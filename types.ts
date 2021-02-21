export type Languages = 'FI' | 'EN';

export interface User {
  name: string;
  key: string;
  email: string;
  sweden: boolean;
  day: boolean;
  evening: boolean;
  registrations_available: number;
  registrations_made: number;
  language: Languages;
}
