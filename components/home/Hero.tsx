import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-cream py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <span role="img" aria-label="Paw print" className="text-5xl block mb-4">
          🐾
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-bark mb-4 leading-tight">
          Happy Paws Dog Walking
        </h1>
        <p className="text-bark/70 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Professional, loving dog care for your four-legged family members. Insured, certified,
          and passionate about every pup.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/services"
            className="px-6 py-3 rounded-full bg-blush text-bark font-semibold hover:bg-blush/70 transition-colors focus-visible:outline-2 focus-visible:outline-bark focus-visible:outline-offset-2"
          >
            View Our Services
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-full bg-lavender text-bark font-semibold hover:bg-lavender/70 transition-colors focus-visible:outline-2 focus-visible:outline-bark focus-visible:outline-offset-2"
          >
            Meet the Team
          </Link>
          <Link
            href="/pack"
            className="px-6 py-3 rounded-full bg-mint text-bark font-semibold hover:bg-mint/70 transition-colors focus-visible:outline-2 focus-visible:outline-bark focus-visible:outline-offset-2"
          >
            Meet the Pack
          </Link>
        </div>
      </div>
    </section>
  );
}
