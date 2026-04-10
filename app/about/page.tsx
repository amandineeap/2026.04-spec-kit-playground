import CredentialCard from '@/components/about/CredentialCard';
import type { Credential } from '@/data/types';

export const metadata = {
  title: 'About — Happy Paws Dog Walking',
  description: 'Learn about our insurance, certifications, and professional dog care philosophy.',
};

const credentials: Credential[] = [
  {
    type: 'insurance',
    title: 'Pet Business Insurance',
    description:
      'All walks and daycare sessions are covered by comprehensive pet business liability insurance, giving you complete peace of mind that your dog is protected at all times.',
    issuer: 'PetPlan Business',
  },
  {
    type: 'certification',
    title: 'Pet First Aid & CPR Certified',
    description:
      'Fully trained in pet first aid and CPR, so every emergency — from cuts and sprains to more serious situations — is handled with calm, competence, and care.',
    issuer: 'Pet First Aid 4 U',
  },
  {
    type: 'certification',
    title: 'Professional Dog Walker Certification',
    description:
      'Completed a recognised professional dog walking certification covering canine behaviour, safe handling techniques, group management, and emergency protocols.',
    issuer: 'Pet Professional Guild',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-bark mb-4 text-center">About Us</h1>
      <p className="text-bark/70 text-center mb-12 max-w-xl mx-auto leading-relaxed">
        Hi! I&apos;m Alex, a passionate dog lover with years of experience caring for dogs of all
        breeds and sizes. I believe every dog deserves personal attention, fresh air, and lots of
        tail wags.
      </p>

      <section aria-label="Credentials and insurance">
        <h2 className="text-xl font-bold text-bark mb-6">Credentials &amp; Insurance</h2>
        <div className="flex flex-col gap-4">
          {credentials.map((credential) => (
            <CredentialCard key={credential.title} credential={credential} />
          ))}
        </div>
      </section>
    </div>
  );
}
