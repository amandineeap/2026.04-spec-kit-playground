import type { Service } from './types';

export const services: Service[] = [
  {
    id: 'solo-walk',
    name: 'Solo Walk',
    description:
      'One-on-one time with your dog — a dedicated 60-minute walk focused entirely on your pup. Perfect for dogs who prefer individual attention or need extra training support.',
    price: '$25 per walk',
    icon: '🐕',
  },
  {
    id: 'group-walk',
    name: 'Group Walk',
    description:
      'Socialise and explore with a small group of friendly dogs. Group walks are a fantastic way for dogs to build confidence and make new friends on a 60-minute adventure.',
    price: '$18 per walk',
    icon: '🐕‍🦺',
  },
  {
    id: 'daycare',
    name: 'Daycare',
    description:
      'A full day of fun, play, and cuddles at our home. Ideal for busy days when your dog needs company, stimulation, and love from sunrise to sunset.',
    price: '$40 per day',
    icon: '🏠',
  },
];
