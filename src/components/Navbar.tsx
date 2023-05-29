'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    href: '/',
    name: 'Home',
  },
  {
    href: '/about',
    name: 'About',
  },
  {
    href: '/projects',
    name: 'Projects',
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="mx-auto max-w-3xl p-4">
      <nav>
        <ul className="flex">
          {navItems.map((nav) => (
            <li key={nav.href} className="py-2">
              <Link
                href={nav.href}
                className={`${
                  pathname == nav.href ? 'font-medium text-pink-500' : ''
                } rounded-lg px-4 py-2 duration-200 hover:bg-pink-50 hover:text-pink-500`}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
