'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/pack', label: 'The Pack' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="bg-cream border-b border-paw/20 sticky top-0 z-10">
      <nav
        aria-label="Main navigation"
        className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between flex-wrap gap-3"
      >
        <Link
          href="/"
          className="text-bark font-bold text-lg tracking-tight hover:text-paw transition-colors"
          aria-label="Happy Paws Dog Walking — Home"
        >
          <span role="img" aria-hidden="true">🐾</span> Happy Paws
        </Link>

        <ul className="flex flex-wrap gap-1" role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={pathname === href ? 'page' : undefined}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-bark focus-visible:outline-offset-2 ${
                  pathname === href
                    ? 'bg-blush text-bark'
                    : 'text-bark/70 hover:text-bark hover:bg-blush/50'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
