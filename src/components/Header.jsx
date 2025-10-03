import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="py-6 md:py-8 xl:py-12 text-white">
      <div className="container mx-auto px-4 md:px-6 xl:px-0 flex items-center justify-between">
        {/* logo */}
        <Link href="/">
          <h1 className="text-3xl sm:text-4xl font-semibold">
            Miltøn<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
