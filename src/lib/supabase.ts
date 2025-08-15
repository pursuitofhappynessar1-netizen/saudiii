import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface ScientificCommittee {
  id: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image_url?: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface Speaker {
  id: string;
  name_ar: string;
  name_en: string;
  title_ar: string;
  title_en: string;
  bio_ar: string;
  bio_en: string;
  image_url?: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface Accommodation {
  id: string;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en: string;
  location_ar: string;
  location_en: string;
  price: number;
  image_url?: string;
  contact_info?: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface MediaCoverage {
  id: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  media_type: 'article' | 'video' | 'image' | 'press_release';
  media_url?: string;
  published_date: string;
  source_ar: string;
  source_en: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface Exhibition {
  id: string;
  company_name_ar: string;
  company_name_en: string;
  description_ar: string;
  description_en: string;
  booth_number?: string;
  category_ar: string;
  category_en: string;
  logo_url?: string;
  website_url?: string;
  contact_info?: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}