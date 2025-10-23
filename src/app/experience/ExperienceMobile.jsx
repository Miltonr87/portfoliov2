'use client';

import { FaHtml5, FaCss3, FaJs, FaNode, FaReact } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiJest,
  SiVite,
  SiMaterialdesign,
  SiLucid,
  SiRadixui,
  SiFramer,
  SiSass,
  SiStyledcomponents,
  SiSonarqube,
  SiDocker,
  SiWebpack,
} from 'react-icons/si';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const about = {
  title: 'Experience',
  description:
    'My core expertise is in ReactJS with JavaScript and TypeScript, building modern, responsive, and scalable user interfaces. I have strong experience with server-side rendering (SSR) using Next.js and Tailwind CSS, as well as SPA architectures with Webpack and Micro-Frontend design. I consistently apply SOLID principles and unit testing to ensure clean, maintainable, and high-quality code.',
  info: [
    { fieldName: 'Name', fieldValue: 'Milton Rodrigues' },
    { fieldName: 'Phone', fieldValue: '(+55) 82 98112-2732' },
    { fieldName: 'Experience', fieldValue: '5+ Years' },
    { fieldName: 'Nationality', fieldValue: '🇧🇷 Brazil' },
  ],
};

const career = {
  title: 'Career',
  items: [
    {
      company: '7Things Network',
      position: 'Software Engineer',
      duration: '2025',
      href: 'https://7things.com.br/',
      image: '/assets/work/7things.png',
    },
    {
      company: 'Close-Up International',
      position: 'Frontend Developer',
      duration: '2022-2025',
      href: 'https://close-upinternational.com/',
      image: '/assets/work/closeup.png',
    },
    {
      company: 'Loja do Mecânico',
      position: 'Frontend Developer',
      duration: '2021-2022',
      href: 'https://www.lojadomecanico.com.br/',
      image: '/assets/work/mecanico.png',
    },
    {
      company: 'GlobeCoin',
      position: 'Freelance Web Developer',
      duration: '2020 - 2021',
      href: 'https://globecoin-miltonr87.vercel.app/',
      image: '/assets/work/portfolio1.png',
    },
  ],
};

const education = {
  title: 'Education',
  items: [
    {
      institution: 'Alura Online Courses',
      degree: 'Software Engineer',
      duration: '2020–2021',
      href: 'https://cursos.alura.com.br/user/miltonrodrigues713',
    },
    {
      institution: 'Federal University of Alagoas',
      degree: 'Journalism',
      duration: '2005–2009',
      href: 'https://ufal.br/',
    },
  ],
};

const skills = {
  title: 'Skills',
  categories: [
    {
      title: 'Main',
      skills: [
        { icon: <FaHtml5 />, name: 'HTML 5' },
        { icon: <FaCss3 />, name: 'CSS 3' },
        { icon: <FaJs />, name: 'JavaScript' },
        { icon: <SiTypescript />, name: 'TypeScript' },
        { icon: <FaReact />, name: 'React.js' },
        { icon: <SiRedux />, name: 'Redux' },
      ],
    },
    {
      title: 'Design',
      skills: [
        { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
        { icon: <SiLucid />, name: 'Lucide React' },
        { icon: <SiRadixui />, name: 'Radix UI' },
        { icon: <SiFramer />, name: 'Framer Motion' },
        { icon: <SiMaterialdesign />, name: 'Material UI' },
        { icon: <SiSass />, name: 'Sass' },
        { icon: <SiStyledcomponents />, name: 'Styled Components' },
      ],
    },
    {
      title: 'Testing',
      skills: [
        { icon: <SiJest />, name: 'Jest' },
        { icon: <SiSonarqube />, name: 'SonarQube' },
      ],
    },
    {
      title: 'Bundler & Deploy',
      skills: [
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <SiVite />, name: 'Vite' },
        { icon: <FaNode />, name: 'Node.js' },
        { icon: <SiWebpack />, name: 'Webpack' },
        { icon: <SiDocker />, name: 'Docker' },
      ],
    },
  ],
};

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[70vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-4 md:px-6 xl:px-0 w-full">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full flex items-center justify-between gap-2 sm:gap-4 overflow-x-auto rounded-none bg-transparent p-0 border-b border-white/10">
            <TabsTrigger
              value="about"
              className="relative px-3 sm:px-4 py-3 text-sm sm:text-base font-medium rounded-none data-[state=active]:text-accent data-[state=active]:border-b-2 data-[state=active]:border-accent"
            >
              About
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="relative px-3 sm:px-4 py-3 text-sm sm:text-base font-medium rounded-none data-[state=active]:text-accent data-[state=active]:border-b-2 data-[state=active]:border-accent"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              value="career"
              className="relative px-3 sm:px-4 py-3 text-sm sm:text-base font-medium rounded-none data-[state=active]:text-accent data-[state=active]:border-b-2 data-[state=active]:border-accent"
            >
              Career
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="relative px-3 sm:px-4 py-3 text-sm sm:text-base font-medium rounded-none data-[state=active]:text-accent data-[state=active]:border-b-2 data-[state=active]:border-accent"
            >
              Education
            </TabsTrigger>
          </TabsList>
          <div className="pt-6">
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {about.title}
                </h3>
                <p className="max-w-lg text-white/60 mx-auto xl:mx-0 text-sm sm:text-base">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-2 sm:gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-base sm:text-lg">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-6">
                <div className="text-center xl:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {skills.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-6">
                  {skills.categories.map((category, i) => (
                    <div key={i}>
                      <h4 className="text-xl sm:text-2xl font-semibold mb-4">
                        {category.title}
                      </h4>
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {category.skills.map((skill, index) => (
                          <li key={index}>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-24 bg-[#232329] rounded-xl flex flex-col justify-center items-center group">
                                  <div className="text-3xl sm:text-4xl group-hover:text-accent transition-all duration-200">
                                    {skill.icon}
                                  </div>
                                  <p className="text-xs text-white/60 mt-2">
                                    {skill.name}
                                  </p>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="career" className="w-full">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {career.title}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {career.items.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#232329] rounded-xl overflow-hidden hover:bg-[#2d2d34] transition-colors flex flex-col"
                      >
                        {item.image && (
                          <div className="relative w-full h-32 sm:h-40">
                            <Image
                              src={item.image}
                              alt={item.company}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 100vw, 50vw"
                            />
                          </div>
                        )}
                        <div className="p-4 flex flex-col gap-2 text-center lg:text-left">
                          <span className="text-accent text-sm">
                            {item.duration}
                          </span>
                          <h3 className="text-base sm:text-lg font-semibold">
                            {item.position}
                          </h3>
                          <div className="flex items-center justify-center lg:justify-start gap-2">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {education.title}
                </h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {education.items.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#232329] h-44 py-6 px-4 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:bg-[#2d2d34] transition-colors"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-sm sm:text-base text-center">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Experience;
