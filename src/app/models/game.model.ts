export interface Game {
  id: number;
  name: string;
  platform: 'PC' | 'PS5' | 'XBOX';
}

export interface GameFormData {
  name: string;
  platform: 'PC' | 'PS5' | 'XBOX';
}
