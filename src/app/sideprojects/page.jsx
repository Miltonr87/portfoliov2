'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Worldwide Collectibles',
    description:
      'An e-commerce platform of premium collectible statues from world-renowned studios, it integrates Shopify Storefront API for product management, Stripe for secure payments and Supabase for user authentication and data storage.',
    tech: [
      'React',
      'Typescript',
      'Tailwind CSS',
      'Zustand',
      'Shopify Storefront API',
      'Stripe',
      'Framer Motion',
      'Supabase',
    ],
    link: 'https://worldwidecollectibles.shop/',
    image: '/assets/projects/worldwide.png',
  },
  {
    title: 'Bit Legends',
    description:
      'A nostalgic retro-gaming hub powered by EmulatorJS, where players can relive 16-bit fighting classics, log in with Google to save favorites games. Play directly in the browser with keyboard or joystick.',
    tech: [
      'React',
      'Typescript',
      'Tailwind CSS',
      'OAuth',
      'EmulatorJS',
      'Firebase',
    ],
    link: 'https://bitlegends.vercel.app/',
    image: '/assets/projects/bitlegends.png',
  },
  {
    title: 'Dark Walker',
    description:
      'A refined dark theme for VSCode inspired by the elegance of a famous scotch whisky. Designed for developers who appreciate balance, contrast and accessibility.',
    tech: ['VSCode', 'CSS', 'UI Design', 'Accessibility', 'Colorblind', 'Dark'],
    link: 'https://marketplace.visualstudio.com/items?itemName=Miltonr87.dark-walker',
    image: '/assets/projects/dark_walker.png',
  },
];

const SideProjects = () => {
  const [selected, setSelected] = useState(projects[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.section
      key="side-projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      exit={{ opacity: 0 }}
      className="pt-8 pb-16 px-4 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full text-center mb-14">
        <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-accent">
          Side Projects
        </h3>
        <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          When I&apos;m not coding for clients, I focus on building and refining
          my own projects, from my retro gaming platform{' '}
          <span className="font-semibold text-accent">Bit Legends</span>, to the
          development of{' '}
          <span className="font-semibold text-accent">
            Worldwide Collectibles
          </span>
          , a exclusive e-commerce platform for collectors. Each project
          reflects my passion for innovative tech.
        </p>
      </div>
      <div className="relative flex justify-center mb-12">
        <div className="flex bg-[#1b1b21]/80 border border-accent/30 backdrop-blur-md rounded-full p-1.5 shadow-md">
          {projects.map((p) => {
            const isActive = selected.title === p.title;
            return (
              <motion.button
                key={p.title}
                onClick={() => setSelected(p)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative z-10 px-6 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ${
                  isActive ? 'text-black' : 'text-accent'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-accent rounded-full shadow-[0_0_15px_hsl(var(--accent))]"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 25,
                    }}
                  />
                )}
                <span className="relative z-20">
                  <strong className="font-bold">{p.title}</strong>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
      <div className="relative w-full flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.title}
            initial={{ opacity: 0, y: 40, rotateY: 15, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateY: 0,
              scale: 1,
              transition: { duration: 0.7, ease: 'easeOut' },
            }}
            exit={{
              opacity: 0,
              y: -40,
              rotateY: -10,
              scale: 0.95,
              transition: { duration: 0.4 },
            }}
            className="bg-[#232329] rounded-2xl overflow-hidden shadow-lg hover:shadow-accent/30 
             transition-all duration-300 max-w-xl md:max-w-xl perspective-1000"
          >
            <div className="relative w-full h-[240px] md:h-[362px]">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-cover md:rounded-t-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="p-5 flex flex-col gap-3 text-left">
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/70 transition-colors"
              >
                <h4 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2">
                  {selected.title}
                  <ExternalLink className="w-4 h-4" />
                </h4>
              </a>
              <p className="text-white/70 text-sm leading-relaxed">
                {selected.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {selected.tech.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className="px-2.5 py-1 text-xs bg-accent/10 text-accent font-medium rounded-full 
                     border border-accent/20 transition-all duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default SideProjects;
