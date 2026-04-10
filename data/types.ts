export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  icon?: string;
}

export interface Dog {
  id: string;
  name: string;
  breed: string;
  description?: string;
  emoji: string;
}

export interface Credential {
  type: 'insurance' | 'certification';
  title: string;
  description: string;
  issuer?: string;
}
