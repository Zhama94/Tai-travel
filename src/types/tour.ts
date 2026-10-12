export type Currency = 'USD' | 'EUR' | 'KGS' | 'RUB';

export interface CurrencyRate {
  symbol: string;
  rateFromUsd: number; // 1 USD = rate
  format: (amount: number) => string;
}

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export interface TourPackage {
  id: string;
  name: string;
  subtitle: string;
  days: number;
  nights: number;
  basePriceUsd: number;
  highlight: string;
  description: string;
  badge?: string;
  difficulty: 'Легкий' | 'Средний' | 'Для активных';
  totalDistanceKm: number;
  maxAltitudeM: number;
  schedule: ItineraryDay[];
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  route: string;
  altitudeRange: string;
  distanceKm: number;
  saddleHours: string;
  accommodation: string;
  meals: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'lake' | 'horses' | 'yurts' | 'mountains' | 'culture';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  location: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  countryFlag: string;
  avatar: string;
  date: string;
  tour: string;
  rating: number;
  review: string;
  riderExperience: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'horses' | 'comfort' | 'gear';
}

export interface GearItem {
  id: string;
  category: 'Одежда' | 'Обувь' | 'Снаряжение' | 'Аптечка и личное';
  name: string;
  description: string;
  essential: boolean;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  startDate: string;
  tourPackageId: string;
  participantsCount: number;
  ridingLevel: SkillLevel;
  addons: string[];
  comments: string;
}
