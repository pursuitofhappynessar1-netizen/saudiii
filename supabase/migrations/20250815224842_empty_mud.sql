/*
  # Create Admin Dashboard Tables

  1. New Tables
    - `scientific_committee`
      - `id` (uuid, primary key)
      - `title_ar` (text)
      - `title_en` (text)
      - `description_ar` (text)
      - `description_en` (text)
      - `image_url` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `speakers`
      - `id` (uuid, primary key)
      - `name_ar` (text)
      - `name_en` (text)
      - `title_ar` (text)
      - `title_en` (text)
      - `bio_ar` (text)
      - `bio_en` (text)
      - `image_url` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `accommodation`
      - `id` (uuid, primary key)
      - `name_ar` (text)
      - `name_en` (text)
      - `description_ar` (text)
      - `description_en` (text)
      - `location_ar` (text)
      - `location_en` (text)
      - `price` (decimal)
      - `image_url` (text)
      - `contact_info` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `media_coverage`
      - `id` (uuid, primary key)
      - `title_ar` (text)
      - `title_en` (text)
      - `description_ar` (text)
      - `description_en` (text)
      - `media_type` (text) -- 'article', 'video', 'image', 'press_release'
      - `media_url` (text)
      - `published_date` (date)
      - `source_ar` (text)
      - `source_en` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `exhibition`
      - `id` (uuid, primary key)
      - `company_name_ar` (text)
      - `company_name_en` (text)
      - `description_ar` (text)
      - `description_en` (text)
      - `booth_number` (text)
      - `category_ar` (text)
      - `category_en` (text)
      - `logo_url` (text)
      - `website_url` (text)
      - `contact_info` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage content
*/

-- Scientific Committee Table
CREATE TABLE IF NOT EXISTS scientific_committee (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar text NOT NULL DEFAULT '',
  title_en text NOT NULL DEFAULT '',
  description_ar text NOT NULL DEFAULT '',
  description_en text NOT NULL DEFAULT '',
  image_url text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE scientific_committee ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to manage scientific_committee"
  ON scientific_committee
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Speakers Table
CREATE TABLE IF NOT EXISTS speakers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_ar text NOT NULL DEFAULT '',
  name_en text NOT NULL DEFAULT '',
  title_ar text NOT NULL DEFAULT '',
  title_en text NOT NULL DEFAULT '',
  bio_ar text NOT NULL DEFAULT '',
  bio_en text NOT NULL DEFAULT '',
  image_url text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE speakers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to manage speakers"
  ON speakers
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Accommodation Table
CREATE TABLE IF NOT EXISTS accommodation (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_ar text NOT NULL DEFAULT '',
  name_en text NOT NULL DEFAULT '',
  description_ar text NOT NULL DEFAULT '',
  description_en text NOT NULL DEFAULT '',
  location_ar text NOT NULL DEFAULT '',
  location_en text NOT NULL DEFAULT '',
  price decimal(10,2) DEFAULT 0,
  image_url text DEFAULT '',
  contact_info text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE accommodation ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to manage accommodation"
  ON accommodation
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Media Coverage Table
CREATE TABLE IF NOT EXISTS media_coverage (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar text NOT NULL DEFAULT '',
  title_en text NOT NULL DEFAULT '',
  description_ar text NOT NULL DEFAULT '',
  description_en text NOT NULL DEFAULT '',
  media_type text NOT NULL DEFAULT 'article',
  media_url text DEFAULT '',
  published_date date DEFAULT CURRENT_DATE,
  source_ar text NOT NULL DEFAULT '',
  source_en text NOT NULL DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE media_coverage ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to manage media_coverage"
  ON media_coverage
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Exhibition Table
CREATE TABLE IF NOT EXISTS exhibition (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name_ar text NOT NULL DEFAULT '',
  company_name_en text NOT NULL DEFAULT '',
  description_ar text NOT NULL DEFAULT '',
  description_en text NOT NULL DEFAULT '',
  booth_number text DEFAULT '',
  category_ar text NOT NULL DEFAULT '',
  category_en text NOT NULL DEFAULT '',
  logo_url text DEFAULT '',
  website_url text DEFAULT '',
  contact_info text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE exhibition ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to manage exhibition"
  ON exhibition
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_scientific_committee_order ON scientific_committee(order_index);
CREATE INDEX IF NOT EXISTS idx_speakers_order ON speakers(order_index);
CREATE INDEX IF NOT EXISTS idx_accommodation_order ON accommodation(order_index);
CREATE INDEX IF NOT EXISTS idx_media_coverage_order ON media_coverage(order_index);
CREATE INDEX IF NOT EXISTS idx_exhibition_order ON exhibition(order_index);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_scientific_committee_updated_at BEFORE UPDATE ON scientific_committee FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_speakers_updated_at BEFORE UPDATE ON speakers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_accommodation_updated_at BEFORE UPDATE ON accommodation FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_media_coverage_updated_at BEFORE UPDATE ON media_coverage FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_exhibition_updated_at BEFORE UPDATE ON exhibition FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();