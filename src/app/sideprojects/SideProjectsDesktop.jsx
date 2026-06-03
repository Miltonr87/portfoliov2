'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
    image: '/assets/projects/worldwidecollectibles.jpeg',
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
  {
    title: 'Manifest 404',
    description: 'Your description here',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    link: 'https://your-link.com',
    image: '/assets/projects/manifest404.png',
  },
];

const SideProjectsDesktop = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.section
      key="side-projects-desktop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      exit={{ opacity: 0 }}
      className="min-h-[70vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue={projects[0].title}
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 h-auto bg-transparent">
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-accent">Side Projects</h3>
              <p className="text-white/70 text-sm mt-2 leading-relaxed">
                Personal projects showcasing my skills and passion for
                development.
              </p>
            </div>
            {projects.map((project) => (
              <TabsTrigger
                key={project.title}
                value={project.title}
                className="w-full justify-start text-left px-4 py-3 bg-[#1b1b21]/60 border border-white/10 hover:border-accent/30 hover:bg-[#1b1b21]/80 data-[state=active]:bg-accent data-[state=active]:text-black data-[state=active]:shadow-[0_0_20px_hsl(var(--accent))/50] rounded-lg transition-all duration-300"
              >
                {project.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="min-h-[600px] w-full">
            {projects.map((project) => (
              <TabsContent
                key={project.title}
                value={project.title}
                className="w-full h-full"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, ease: 'easeOut' },
                    }}
                    exit={{ opacity: 0, x: -40, transition: { duration: 0.3 } }}
                    className="bg-[#232329] rounded-2xl overflow-hidden shadow-lg hover:shadow-accent/30 transition-all duration-300 max-w-3xl"
                  >
                    <div className="relative w-full h-[400px]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-t-2xl"
                        sizes="(max-width: 1200px) 100vw, 50vw"
                        priority
                      />
                    </div>
                    <div className="p-8 flex flex-col gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/70 transition-colors w-fit"
                      >
                        <h4 className="text-3xl font-semibold text-white flex items-center gap-3">
                          {project.title}
                          <ExternalLink className="w-5 h-5" />
                        </h4>
                      </a>
                      <p className="text-white/70 text-base leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mt-2">
                        {project.tech.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1.5 text-sm bg-accent/10 text-accent font-medium rounded-full border border-accent/20 transition-all duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default SideProjectsDesktop;
