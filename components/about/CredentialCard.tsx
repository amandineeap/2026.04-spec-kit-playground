import type { Credential } from '@/data/types';

const typeConfig = {
  insurance: {
    cardClass: 'bg-mint/40 border-mint',
    badgeClass: 'bg-mint text-bark',
    label: 'Insurance',
  },
  certification: {
    cardClass: 'bg-lavender/40 border-lavender',
    badgeClass: 'bg-lavender text-bark',
    label: 'Certification',
  },
};

interface CredentialCardProps {
  credential: Credential;
}

export default function CredentialCard({ credential }: CredentialCardProps) {
  const config = typeConfig[credential.type];

  return (
    <article className={`rounded-2xl p-6 border flex flex-col gap-3 ${config.cardClass}`}>
      <span
        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full w-fit ${config.badgeClass}`}
      >
        {config.label}
      </span>
      <h2 className="text-lg font-bold text-bark">{credential.title}</h2>
      <p className="text-bark/70 text-sm leading-relaxed">{credential.description}</p>
      {credential.issuer && (
        <p className="text-bark/50 text-xs">Issued by: {credential.issuer}</p>
      )}
    </article>
  );
}
