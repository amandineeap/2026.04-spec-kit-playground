export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bark text-cream py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-lg font-bold mb-1">
          <span role="img" aria-hidden="true">🐾</span> Happy Paws Dog Walking
        </p>
        <p className="text-cream/70 text-sm">
          Professional, insured, and certified dog care you can trust.
        </p>
        <p className="text-cream/40 text-xs mt-4">
          &copy; {year} Happy Paws Dog Walking. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
