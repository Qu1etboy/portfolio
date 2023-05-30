'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
  {
    href: '/blog',
    name: 'Blog',
  },
];

export default function Navbar() {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const pathname = usePathname();
  return (
    <header className="mx-auto max-w-3xl p-4">
      <nav>
        <ul className="flex">
          {navItems.map((nav) => (
            <li key={nav.href} className="py-2">
              <Link
                href={nav.href}
                onMouseEnter={() => setHoveredNav(nav.href)}
                onMouseLeave={() => setHoveredNav(null)}
                className={`${
                  pathname == nav.href ? 'font-medium text-pink-500' : ''
                } relative rounded-lg px-4 py-2 duration-200 hover:text-pink-500`}
              >
                {hoveredNav === nav.href && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 bg-pink-100"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{nav.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
