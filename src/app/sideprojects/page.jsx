'use client';
/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Manifest 404',
    description:
      'A digital AI-powered punk rock band blending cyberpunk aesthetics with distorted guitars and the spirit of futuristic rebellion. I handle the design, code and music direction.',
    tech: [
      'React',
      'TypeScript',
      'Framer Motion',
      'Tailwind CSS',
      'Web Audio API',
      'AI Music',
    ],
    link: 'https://manifest-404.vercel.app/',
    image: '/assets/projects/manifest404.png',
  },
  {
    title: 'Bit Legends',
    description:
      'A nostalgic retro-gaming hub powered by EmulatorJS, where players can relive 16-bit fighting classics, log in with Google to save favorites games. Play directly in the browser with keyboard or joystick.',
    tech: [
      'React',
      'Typescript',
      'Tailwind CSS',
      'Framer Motion',
      'OAuth',
      'EmulatorJS',
      'Firebase',
    ],
    link: 'https://bitlegends.vercel.app/',
    image: '/assets/projects/bitlegends.png',
  },
  {
    title: 'Dark Walker (Theme)',
    description:
      'A refined dark theme for VSCode inspired by the elegance of a famous scotch whisky. Designed for developers who appreciate balance, contrast and aesthetic with accessibility.',
    tech: ['VSCode', 'CSS', 'Design', 'Accessibility'],
    link: 'https://marketplace.visualstudio.com/items?itemName=Miltonr87.dark-walker',
    image: '/assets/projects/dark_walker.png',
  },
];

const SideProjects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: 'easeInOut' },
      }}
      className="pt-8 pb-16 px-4 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full">
        <div className="text-center mb-14">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-accent">
            Side Projects
          </h3>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            When I'm not coding for clients, I dive into passion projects where
            I explore creativity, experimenting with different scenarios and
            technologies — from my AI punk band{' '}
            <span className="font-semibold text-accent">Manifest 404</span> to
            my retro gaming platform{' '}
            <span className="font-semibold text-accent">Bit Legends</span> and
            even my own{' '}
            <span className="font-semibold text-accent">
              Dark Walker VSCode theme
            </span>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="bg-[#232329] rounded-2xl overflow-hidden shadow-lg hover:shadow-accent/30 transition-all duration-300"
            >
              <div className="relative w-full h-[220px] md:h-[320px] md:flex md:items-center md:justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain md:object-cover md:rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 flex flex-col gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/70 transition-colors"
                >
                  <h4 className="text-2xl font-semibold text-white flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-4 h-4" />
                  </h4>
                </a>
                <p className="text-white/70 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-xs sm:text-sm bg-accent/10 text-accent font-medium rounded-full border border-accent/20 transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SideProjects;
