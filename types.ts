
export type PageType = 'home' | 'schedule' | 'licenses' | 'gallery' | 'map' | 'contacts' | 'privacy' | 'terms';

export interface NavItem {
  id: PageType;
  label: string;
}

export interface ScheduleEntry {
  departure: string;
  from: string;
  to: string;
}

export interface PricingItem {
  category: string;
  price: string;
}
