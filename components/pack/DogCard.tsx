import type { Dog } from '@/data/types';

interface DogCardProps {
  dog: Dog;
}

export default function DogCard({ dog }: DogCardProps) {
  return (
    <article
      className="bg-peach/40 rounded-2xl p-4 flex flex-col items-center gap-2 border border-peach text-center hover:shadow-md transition-shadow"
      aria-label={`${dog.name} — ${dog.breed}`}
    >
      <span role="img" aria-label={`${dog.name} the dog`} className="text-5xl leading-none">
        {dog.emoji}
      </span>
      <h2 className="text-base font-bold text-bark">{dog.name}</h2>
      <p className="text-bark/60 text-xs font-medium uppercase tracking-wide">{dog.breed}</p>
      {dog.description && (
        <p className="text-bark/70 text-xs leading-relaxed">{dog.description}</p>
      )}
    </article>
  );
}
