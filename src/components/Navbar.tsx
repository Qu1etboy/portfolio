"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/projects",
    name: "Projects",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="max-w-3xl mx-auto p-4">
      <nav>
        <ul className="flex">
          {navItems.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              className={`${
                pathname == nav.href ? "text-pink-500 font-medium" : ""
              } hover:bg-pink-50 hover:text-pink-500 rounded-lg px-4 py-2 duration-200`}
            >
              {nav.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
