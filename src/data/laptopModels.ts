// Common laptop models from the last 10-15 years
// Macs are prioritized (2013-2018 Intel Macs are first wave)

export interface LaptopModel {
  label: string;
  value: string;
  category: 'mac-priority' | 'mac-other' | 'windows' | 'chromebook';
}

export const laptopModels: LaptopModel[] = [
  // Priority Macs (2013-2018 Intel)
  { label: 'MacBook Pro 13" (2013)', value: 'macbook-pro-13-2013', category: 'mac-priority' },
  { label: 'MacBook Pro 15" (2013)', value: 'macbook-pro-15-2013', category: 'mac-priority' },
  { label: 'MacBook Pro 13" (2014)', value: 'macbook-pro-13-2014', category: 'mac-priority' },
  { label: 'MacBook Pro 15" (2014)', value: 'macbook-pro-15-2014', category: 'mac-priority' },
  { label: 'MacBook Pro 13" (2015)', value: 'macbook-pro-13-2015', category: 'mac-priority' },
  { label: 'MacBook Pro 15" (2015)', value: 'macbook-pro-15-2015', category: 'mac-priority' },
  { label: 'MacBook Pro 13" (2016)', value: 'macbook-pro-13-2016', category: 'mac-priority' },
  { label: 'MacBook Pro 15" (2016)', value: 'macbook-pro-15-2016', category: 'mac-priority' },
  { label: 'MacBook Pro 13" (2017)', value: 'macbook-pro-13-2017', category: 'mac-priority' },
  { label: 'MacBook Pro 15" (2017)', value: 'macbook-pro-15-2017', category: 'mac-priority' },
  { label: 'MacBook Pro 13" (2018)', value: 'macbook-pro-13-2018', category: 'mac-priority' },
  { label: 'MacBook Pro 15" (2018)', value: 'macbook-pro-15-2018', category: 'mac-priority' },
  { label: 'MacBook Air 13" (2013)', value: 'macbook-air-13-2013', category: 'mac-priority' },
  { label: 'MacBook Air 11" (2013)', value: 'macbook-air-11-2013', category: 'mac-priority' },
  { label: 'MacBook Air 13" (2014)', value: 'macbook-air-13-2014', category: 'mac-priority' },
  { label: 'MacBook Air 11" (2014)', value: 'macbook-air-11-2014', category: 'mac-priority' },
  { label: 'MacBook Air 13" (2015)', value: 'macbook-air-13-2015', category: 'mac-priority' },
  { label: 'MacBook Air 11" (2015)', value: 'macbook-air-11-2015', category: 'mac-priority' },
  { label: 'MacBook Air 13" (2017)', value: 'macbook-air-13-2017', category: 'mac-priority' },
  { label: 'MacBook Air 13" (2018)', value: 'macbook-air-13-2018', category: 'mac-priority' },
  { label: 'MacBook 12" (2015)', value: 'macbook-12-2015', category: 'mac-priority' },
  { label: 'MacBook 12" (2016)', value: 'macbook-12-2016', category: 'mac-priority' },
  { label: 'MacBook 12" (2017)', value: 'macbook-12-2017', category: 'mac-priority' },

  // Other Macs (newer Intel or M1+)
  { label: 'MacBook Pro 13" (2019)', value: 'macbook-pro-13-2019', category: 'mac-other' },
  { label: 'MacBook Pro 16" (2019)', value: 'macbook-pro-16-2019', category: 'mac-other' },
  { label: 'MacBook Pro 13" (2020, Intel)', value: 'macbook-pro-13-2020-intel', category: 'mac-other' },
  { label: 'MacBook Pro 13" (2020, M1)', value: 'macbook-pro-13-2020-m1', category: 'mac-other' },
  { label: 'MacBook Air 13" (2019)', value: 'macbook-air-13-2019', category: 'mac-other' },
  { label: 'MacBook Air 13" (2020, Intel)', value: 'macbook-air-13-2020-intel', category: 'mac-other' },
  { label: 'MacBook Air 13" (2020, M1)', value: 'macbook-air-13-2020-m1', category: 'mac-other' },
  { label: 'MacBook Air (M2)', value: 'macbook-air-m2', category: 'mac-other' },
  { label: 'MacBook Pro 14" (M1 Pro/Max)', value: 'macbook-pro-14-m1', category: 'mac-other' },
  { label: 'MacBook Pro 16" (M1 Pro/Max)', value: 'macbook-pro-16-m1', category: 'mac-other' },
  { label: 'Other Mac (older)', value: 'mac-older', category: 'mac-other' },
  { label: 'Other Mac (newer)', value: 'mac-newer', category: 'mac-other' },

  // Windows laptops - Dell
  { label: 'Dell XPS 13', value: 'dell-xps-13', category: 'windows' },
  { label: 'Dell XPS 15', value: 'dell-xps-15', category: 'windows' },
  { label: 'Dell Inspiron 15', value: 'dell-inspiron-15', category: 'windows' },
  { label: 'Dell Inspiron 14', value: 'dell-inspiron-14', category: 'windows' },
  { label: 'Dell Latitude (any)', value: 'dell-latitude', category: 'windows' },
  { label: 'Other Dell laptop', value: 'dell-other', category: 'windows' },

  // Windows laptops - HP
  { label: 'HP Pavilion', value: 'hp-pavilion', category: 'windows' },
  { label: 'HP Envy', value: 'hp-envy', category: 'windows' },
  { label: 'HP Spectre', value: 'hp-spectre', category: 'windows' },
  { label: 'HP EliteBook', value: 'hp-elitebook', category: 'windows' },
  { label: 'HP ProBook', value: 'hp-probook', category: 'windows' },
  { label: 'HP Stream', value: 'hp-stream', category: 'windows' },
  { label: 'Other HP laptop', value: 'hp-other', category: 'windows' },

  // Windows laptops - Lenovo
  { label: 'Lenovo ThinkPad (any)', value: 'lenovo-thinkpad', category: 'windows' },
  { label: 'Lenovo IdeaPad', value: 'lenovo-ideapad', category: 'windows' },
  { label: 'Lenovo Yoga', value: 'lenovo-yoga', category: 'windows' },
  { label: 'Other Lenovo laptop', value: 'lenovo-other', category: 'windows' },

  // Windows laptops - ASUS
  { label: 'ASUS ZenBook', value: 'asus-zenbook', category: 'windows' },
  { label: 'ASUS VivoBook', value: 'asus-vivobook', category: 'windows' },
  { label: 'ASUS ROG', value: 'asus-rog', category: 'windows' },
  { label: 'Other ASUS laptop', value: 'asus-other', category: 'windows' },

  // Windows laptops - Acer
  { label: 'Acer Aspire', value: 'acer-aspire', category: 'windows' },
  { label: 'Acer Swift', value: 'acer-swift', category: 'windows' },
  { label: 'Acer Chromebook', value: 'acer-chromebook', category: 'chromebook' },
  { label: 'Other Acer laptop', value: 'acer-other', category: 'windows' },

  // Windows laptops - Microsoft
  { label: 'Microsoft Surface Laptop', value: 'surface-laptop', category: 'windows' },
  { label: 'Microsoft Surface Pro', value: 'surface-pro', category: 'windows' },
  { label: 'Microsoft Surface Go', value: 'surface-go', category: 'windows' },

  // Windows laptops - Other brands
  { label: 'Samsung laptop', value: 'samsung', category: 'windows' },
  { label: 'Toshiba laptop', value: 'toshiba', category: 'windows' },
  { label: 'Sony VAIO', value: 'sony-vaio', category: 'windows' },
  { label: 'MSI laptop', value: 'msi', category: 'windows' },
  { label: 'Razer laptop', value: 'razer', category: 'windows' },
  { label: 'Other Windows laptop', value: 'windows-other', category: 'windows' },

  // Chromebooks
  { label: 'Google Chromebook', value: 'google-chromebook', category: 'chromebook' },
  { label: 'HP Chromebook', value: 'hp-chromebook', category: 'chromebook' },
  { label: 'Lenovo Chromebook', value: 'lenovo-chromebook', category: 'chromebook' },
  { label: 'Samsung Chromebook', value: 'samsung-chromebook', category: 'chromebook' },
  { label: 'ASUS Chromebook', value: 'asus-chromebook', category: 'chromebook' },
  { label: 'Other Chromebook', value: 'chromebook-other', category: 'chromebook' },
];

export function getReadinessMessage(category: LaptopModel['category'] | 'unknown'): {
  title: string;
  message: string;
  status: 'ready' | 'coming-soon' | 'unknown';
} {
  switch (category) {
    case 'mac-priority':
      return {
        title: 'Great news!',
        message: 'Your laptop is in our first wave of support, launching April 2026.',
        status: 'ready',
      };
    case 'mac-other':
      return {
        title: 'Coming soon',
        message: "Your Mac model is on our roadmap. We'll prioritize it based on demand.",
        status: 'coming-soon',
      };
    case 'windows':
      return {
        title: 'On the roadmap',
        message: "Windows support is coming after our Mac launch. We'll let you know when it's ready.",
        status: 'coming-soon',
      };
    case 'chromebook':
      return {
        title: 'On the roadmap',
        message: "Chromebook support is planned for the future. We'll keep you posted.",
        status: 'coming-soon',
      };
    default:
      return {
        title: "We'll take a look",
        message: "We'll review your laptop and get back to you within 24 hours.",
        status: 'unknown',
      };
  }
}
