import DogCard from '@/components/pack/DogCard';
import { dogs } from '@/data/dogs';

export const metadata = {
  title: 'The Pack — Happy Paws Dog Walking',
  description: 'Meet our 12 regular walkers — every single one a very good dog.',
};

export default function PackPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-bark mb-3 text-center">The Pack</h1>
      <p className="text-bark/70 text-center mb-12 max-w-xl mx-auto leading-relaxed">
        Meet our amazing crew of regular walkers. Every one of them is a very good dog.
      </p>
      <section
        aria-label="Pack members"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {dogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </section>
    </div>
  );
}
