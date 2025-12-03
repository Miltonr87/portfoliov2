'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  FaTrello,
  FaUsers,
  FaChartLine,
  FaClipboardList,
  FaTasks,
} from 'react-icons/fa';
import { SiGrapheneos } from 'react-icons/si';
import { GiCycle } from 'react-icons/gi';

const about = {
  title: 'Experience',
  description:
    'With over 5 years in the tech industry, my journey began with a drive to improve how product and development teams collaborate. As a former software developer, I discovered that the biggest challenges were often organizational, not technical. That insight led me to move into Product Management and Ownership, bridging vision and execution to deliver measurable business value.',
  info: [
    { fieldName: 'Name', fieldValue: 'Milton Rodrigues' },
    { fieldName: 'Nationality', fieldValue: '🇧🇷 Brazil' },
    { fieldName: 'Role', fieldValue: 'Product Management' },
    { fieldName: 'Tech Industries', fieldValue: '5+ Years' },
  ],
};

const career = {
  title: 'Career',
  items: [
    {
      company: '7Things Network',
      position: 'Fullstack Developer',
      duration: '2025',
      href: 'https://7things.com.br/',
      image: '/assets/work/7things.png',
    },
    {
      company: 'Close-Up International',
      position: 'Frontend Developer',
      duration: '2022–2025',
      href: 'https://close-upinternational.com/',
      image: '/assets/work/closeup.png',
    },
    {
      company: 'Loja do Mecânico',
      position: 'Frontend Developer',
      duration: '2021–2022',
      href: 'https://www.lojadomecanico.com.br/',
      image: '/assets/work/mecanico.png',
    },
    {
      company: 'GlobeCoin',
      position: 'Frontend Developer',
      duration: '2020–2021',
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
      degree: 'Product Manager',
      duration: '2025',
      href: 'https://cursos.alura.com.br/user/miltonrodrigues713',
    },
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
      title: 'Product Management & Ownership',
      skills: [
        { icon: <FaTrello />, name: 'Agile & Scrum Methodologies' },
        { icon: <FaChartLine />, name: 'Product Strategy & Roadmapping' },
        { icon: <FaClipboardList />, name: 'Backlog Prioritization' },
        { icon: <FaUsers />, name: 'Stakeholder Communication' },
        { icon: <FaTasks />, name: 'User Story Mapping' },
        { icon: <SiGrapheneos />, name: 'Data-Driven Decisions' },
      ],
      center: { icon: <GiCycle />, name: 'Cross-Functional Leadership' },
    },
    {
      title: 'Software Development',
      description:
        'Proficient in building scalable, responsive and accessible interfaces using React.js, TypeScript, Next.js, Redux, Tailwind CSS, and modern CI/CD workflows with Vite, Docker, and SonarQube integration.',
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
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <div className="min-h-[1200px] min-w-[800px]">
            <TabsContent
              value="experience"
              className="text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-3xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-3xl font-bold text-center xl:text-left">
                  {skills.title}
                </h3>
                <div className="flex flex-col gap-[30px]">
                  {skills.categories.map((category, i) => (
                    <div key={i}>
                      <h4 className="text-2xl font-semibold mb-4">
                        {category.title}
                      </h4>

                      {category.description ? (
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                          {category.description}
                        </p>
                      ) : (
                        <>
                          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-[15px]">
                            {category.skills.map((skill, index) => (
                              <li key={index}>
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger className="w-full h-[110px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group hover:bg-[#2d2d34] transition-all duration-200">
                                      <div className="text-3xl group-hover:text-accent transition-all duration-200">
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
                            <motion.li
                              whileHover={{ scale: 1.05 }}
                              className="col-span-full flex flex-col items-center justify-center h-[110px] rounded-xl bg-[#1f1f25] border border-accent/40 text-center shadow-[0_0_12px_rgba(0,255,255,0.15)]"
                            >
                              <div className="text-4xl mb-1 text-accent">
                                {category.center.icon}
                              </div>
                              <p className="text-sm text-white font-medium">
                                {category.center.name}
                              </p>
                            </motion.li>
                          </ul>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="career" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{career.title}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
                  {career.items.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#232329] rounded-xl overflow-hidden hover:bg-[#2d2d34] transition-colors flex flex-col"
                      >
                        {item.image && (
                          <div className="relative w-full h-[120px]">
                            <Image
                              src={item.image}
                              alt={item.company}
                              fill
                              className="object-fill"
                              sizes="100vw"
                            />
                          </div>
                        )}
                        <div className="p-4 flex flex-col gap-2 text-center lg:text-left">
                          <span className="text-accent text-sm">
                            {item.duration}
                          </span>
                          <h3 className="text-lg font-semibold">
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

            {/* EDUCATION */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{education.title}</h3>
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
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Experience;
