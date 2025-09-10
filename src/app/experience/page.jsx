'use client';

import { FaHtml5, FaCss3, FaJs, FaNode, FaReact } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiJest,
  SiStorybook,
  SiMaterialdesign,
  SiBootstrap,
  SiSass,
  SiStyledcomponents,
  SiSonarqube,
  SiDocker,
  SiWebpack,
} from 'react-icons/si';

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
    'My main expertise lies in ReactJS with Javascript and Typescript, creating modern and responsive user interfaces.I have strong knowledge of SSR using Nextjs with Tailwind CSS for design, SPA architectures with Webpack, and Micro-Frontend Architecture, always applying SOLID principles and unit testing to ensure maintainability and quality.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Milton Rodrigues',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+55) 82 98112-2732',
    },
    {
      fieldName: 'Experience',
      fieldValue: '5+ Years',
    },
    {
      fieldName: 'Nationality',
      fieldValue: '🇧🇷 Brazil',
    },
  ],
};

const career = {
  icon: '/assets/resume/badge.svg',
  title: 'Career',
  items: [
    {
      company: 'Close-Up International',
      position: 'Senior',
      duration: '2022-2025',
      href: 'https://close-upinternational.com/',
    },
    {
      company: 'Loja do Mecânico',
      position: 'Junior / Mid-Level',
      duration: '2021-2022',
      href: 'https://www.lojadomecanico.com.br/',
    },
    {
      company: 'Freelancer IT',
      position: 'Freelance Web Developer',
      duration: '2020 - 2021',
      href: 'https://www.freelancer.com/',
    },
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Educação',
  items: [
    {
      institution: 'Alura',
      degree: 'Desenvolvedor Front-End',
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
        { icon: <SiSass />, name: 'Sass' },
        { icon: <SiMaterialdesign />, name: 'Material UI' },
        { icon: <SiStyledcomponents />, name: 'Styled Components' },
        { icon: <SiBootstrap />, name: 'Bootstrap' },
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
        { icon: <SiStorybook />, name: 'Storybook' },
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
        transition: { delay: 2.2, duration: 0.4, ease: 'easeIn' },
      }}
      className=" min-h-[70vh] flex items-center justify-center
     py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col
         xl:flex-row gap-[60px]"
        >
          <TabsList
            className="flex flex-col w-full
           max-w-[380px] mx-auto xl:mx-0 gap-6"
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          {/* career  */}
          <div className="min-h-[1200px] min-w-[800px]  ">
            <TabsContent value="career" className="w-full">
              <div
                className=" flex flex-col gap-[30px] text-center
               xl:text-left"
              >
                <h3 className=" text-3xl font-bold">{career.title}</h3>
                <p
                  className=" max-w-[600px] text-white/60
                 mx-auto xl:mx-0"
                >
                  {career.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {career.items.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          target="_blank"
                          className="bg-[#232329] h-[184px] py-8 px-4 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:bg-[#2d2d34] transition-colors"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-center">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education  */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{education.title}</h3>
                {education.description && (
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                )}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#232329] h-[184px] py-8 px-4 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:bg-[#2d2d34] transition-colors"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-center">{item.degree}</h3>
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

            {/* skills  */}
            <TabsContent value="skills" className="w-full h-full">
              <div className=" flex flex-col gap-[30px]">
                <div
                  className=" flex flex-col gap-[30px] text-center
                 xl:text-left"
                >
                  <h3 className=" text-3xl font-bold">{skills.title}</h3>
                  <p
                    className=" max-w-[600px] text-white/60
                   mx-auto xl:mx-0"
                  >
                    {skills.description}
                  </p>
                </div>
                <div className="flex flex-col gap-[30px]">
                  {skills.categories.map((category, i) => (
                    <div key={i}>
                      <h4 className="text-2xl font-semibold mb-4">
                        {category.title}
                      </h4>
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[20px]">
                        {category.skills.map((skill, index) => (
                          <li key={index}>
                            <TooltipProvider defaultValue={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-200">
                                    {skill.icon}
                                  </div>
                                  <p className="text-sm text-white/60 mt-2">
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
            {/* about  */}
            <TabsContent
              value="experience"
              className="w-full
             text-center xl:text-left"
            >
              <div className=" flex flex-col gap-[30px]">
                <h3 className="text-3xl font-bold">{about.title}</h3>
                <p
                  className=" max-w-[600px] text-white/60
                 mx-auto xl:mx-0"
                >
                  {about.description}
                </p>
                <ul
                  className=" grid grid-cols-1 xl:grid-cols-2
                 gap-h-6 max-w-[620px] mx-auto xl:mx-0"
                >
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className=" flex items-center justify-center
                     xl:justify-start gap-4"
                      >
                        <span className=" text-white/60">{item.fieldName}</span>
                        <span className=" text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Experience;
