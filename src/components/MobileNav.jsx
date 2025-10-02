'use client';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
  { name: 'home', path: '/' },
  { name: 'experience', path: '/experience' },
  { name: 'projects', path: '/projects' },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      {/* burger button */}
      <SheetTrigger className="flex justify-center items-center p-2">
        <CiMenuFries className="text-3xl sm:text-[32px] text-accent" />
      </SheetTrigger>

      {/* mobile drawer */}
      <SheetContent
        side="right"
        className="flex flex-col w-[75%] sm:max-w-sm p-6 bg-primary text-white"
      >
        {/* logo */}
        <div className="mt-12 mb-16 text-center">
          <Link href="/">
            <h1 className="text-3xl sm:text-4xl font-semibold">
              Milton<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav links */}
        <nav className="flex flex-col items-center gap-6">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname
                  ? 'text-accent border-b-2 border-accent'
                  : ''
              } text-lg sm:text-xl capitalize hover:text-accent transition-all py-2`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
