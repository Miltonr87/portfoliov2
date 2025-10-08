'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'home', path: '/' },
  { name: 'experience', path: '/experience' },
  { name: 'side projects', path: '/sideprojects' },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = pathname === link.path;

        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize font-medium transition-all border-b-2 ${
              isActive
                ? 'text-accent border-accent'
                : 'text-white/70 border-transparent hover:text-accent hover:border-accent'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
