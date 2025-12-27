export interface LaptopModel {
  label: string;
  value: string;
  category: 'mac' | 'windows' | 'chromebook';
}

export const laptopModels: LaptopModel[] = [
  // Macs
  { label: 'MacBook Pro 13"', value: 'macbook-pro-13', category: 'mac' },
  { label: 'MacBook Pro 15"', value: 'macbook-pro-15', category: 'mac' },
  { label: 'MacBook Pro 14"', value: 'macbook-pro-14', category: 'mac' },
  { label: 'MacBook Pro 16"', value: 'macbook-pro-16', category: 'mac' },
  { label: 'MacBook Air 13"', value: 'macbook-air-13', category: 'mac' },
  { label: 'MacBook Air 11"', value: 'macbook-air-11', category: 'mac' },
  { label: 'MacBook Air 15"', value: 'macbook-air-15', category: 'mac' },
  { label: 'MacBook 12"', value: 'macbook-12', category: 'mac' },
  { label: 'Other Mac laptop', value: 'mac-other', category: 'mac' },

  // Dell
  { label: 'Dell XPS', value: 'dell-xps', category: 'windows' },
  { label: 'Dell Inspiron', value: 'dell-inspiron', category: 'windows' },
  { label: 'Dell Latitude', value: 'dell-latitude', category: 'windows' },
  { label: 'Dell Vostro', value: 'dell-vostro', category: 'windows' },
  { label: 'Other Dell', value: 'dell-other', category: 'windows' },

  // HP
  { label: 'HP Pavilion', value: 'hp-pavilion', category: 'windows' },
  { label: 'HP Envy', value: 'hp-envy', category: 'windows' },
  { label: 'HP Spectre', value: 'hp-spectre', category: 'windows' },
  { label: 'HP EliteBook', value: 'hp-elitebook', category: 'windows' },
  { label: 'HP ProBook', value: 'hp-probook', category: 'windows' },
  { label: 'HP Stream', value: 'hp-stream', category: 'windows' },
  { label: 'Other HP', value: 'hp-other', category: 'windows' },

  // Lenovo
  { label: 'Lenovo ThinkPad', value: 'lenovo-thinkpad', category: 'windows' },
  { label: 'Lenovo IdeaPad', value: 'lenovo-ideapad', category: 'windows' },
  { label: 'Lenovo Yoga', value: 'lenovo-yoga', category: 'windows' },
  { label: 'Other Lenovo', value: 'lenovo-other', category: 'windows' },

  // ASUS
  { label: 'ASUS ZenBook', value: 'asus-zenbook', category: 'windows' },
  { label: 'ASUS VivoBook', value: 'asus-vivobook', category: 'windows' },
  { label: 'ASUS ROG', value: 'asus-rog', category: 'windows' },
  { label: 'Other ASUS', value: 'asus-other', category: 'windows' },

  // Acer
  { label: 'Acer Aspire', value: 'acer-aspire', category: 'windows' },
  { label: 'Acer Swift', value: 'acer-swift', category: 'windows' },
  { label: 'Other Acer', value: 'acer-other', category: 'windows' },

  // Microsoft
  { label: 'Microsoft Surface Laptop', value: 'surface-laptop', category: 'windows' },
  { label: 'Microsoft Surface Pro', value: 'surface-pro', category: 'windows' },
  { label: 'Microsoft Surface Go', value: 'surface-go', category: 'windows' },

  // Other Windows
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
  { label: 'Acer Chromebook', value: 'acer-chromebook', category: 'chromebook' },
  { label: 'Other Chromebook', value: 'chromebook-other', category: 'chromebook' },
];
