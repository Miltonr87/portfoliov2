'use client';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
  { name: 'AI Band', path: 'https://manifest-404.vercel.app/' },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      {/* burger button */}
      <SheetTrigger className="flex justify-center items-center p-2 rounded-md hover:bg-white/10 transition">
        <CiMenuFries className="text-3xl sm:text-[32px] text-accent" />
      </SheetTrigger>

      {/* mobile drawer */}
      <SheetContent
        side="right"
        className="flex flex-col w-[70%] sm:max-w-sm p-8 bg-gradient-to-b from-[#1a1a1f] to-[#0f0f12] text-white shadow-xl"
      >
        {/* logo */}
        <div className="mt-8 mb-12 text-center">
          <Link href="/">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">
              Milton<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav links */}
        <nav className="flex flex-col items-center gap-6">
          {links.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={index}
                href={link.path}
                className={`w-full text-center py-3 rounded-lg text-lg sm:text-xl font-medium transition-all duration-300
                  ${
                    isActive
                      ? 'bg-accent text-primary shadow-lg'
                      : 'text-white/80 hover:text-accent hover:bg-white/5'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* footer */}
        <div className="mt-auto pt-10 text-center text-sm text-white/50 border-t border-white/10">
          <p>© {new Date().getFullYear()} Milton Rodrigues</p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
