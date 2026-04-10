import Hero from '@/components/home/Hero';

export const metadata = {
  title: 'Happy Paws Dog Walking',
  description:
    'Professional, insured, and certified dog walking and daycare. Solo walks, group walks, and full-day daycare available.',
};

const whyUs = [
  {
    icon: '🛡️',
    title: 'Fully Insured',
    desc: 'Your dog is covered by comprehensive pet business liability insurance at all times.',
  },
  {
    icon: '🎓',
    title: 'Certified Pro',
    desc: 'Pet First Aid & CPR certified and professionally trained in canine behaviour.',
  },
  {
    icon: '❤️',
    title: 'Personal Care',
    desc: 'Every dog gets individual attention, love, and plenty of tail wags every session.',
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-bark mb-10 text-center">
          Why Choose Happy Paws?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {whyUs.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-sky/30 rounded-2xl p-6 border border-sky text-center"
            >
              <span role="img" aria-label={title} className="text-3xl block mb-3">
                {icon}
              </span>
              <h3 className="font-bold text-bark mb-2">{title}</h3>
              <p className="text-bark/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
