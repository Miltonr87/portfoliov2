'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
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
      position: 'Software Engineer',
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
      position: 'Freelance Web Developer',
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
        'Proficient in building scalable, responsive, and accessible interfaces using React.js, TypeScript, Next.js, Redux, Tailwind CSS, and modern CI/CD workflows with Vite, Docker, and SonarQube integration.',
    },
  ],
};

const ExperienceMobile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-screen flex items-center justify-center py-10 px-3"
    >
      <div className="w-full max-w-5xl">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="flex justify-between overflow-x-auto border-b border-white/10 pb-1">
            {['about', 'skills', 'career', 'education'].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="text-sm font-medium px-3 py-2 data-[state=active]:text-accent data-[state=active]:border-b-2 data-[state=active]:border-accent"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="about" className="mt-6">
            <h3 className="text-2xl font-bold mb-4 text-center">
              {about.title}
            </h3>
            <p className="text-white/70 text-sm text-center max-w-lg mx-auto leading-relaxed">
              {about.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 max-w-md mx-auto">
              {about.info.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center bg-[#232329] rounded-xl py-3 text-sm"
                >
                  <span className="text-white/50">{item.fieldName}</span>
                  <span className="font-medium">{item.fieldValue}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="skills" className="mt-6">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {skills.title}
            </h3>
            <div className="flex flex-col gap-8">
              {skills.categories.map((category, i) => (
                <div key={i} className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 text-center text-accent">
                    {category.title}
                  </h4>

                  {category.description ? (
                    <p className="text-sm text-white/70 text-center max-w-md mx-auto leading-relaxed">
                      {category.description}
                    </p>
                  ) : (
                    <>
                      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 bg-accent/5 p-3 rounded-2xl">
                        {category.skills.map((skill, index) => (
                          <motion.li
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center justify-center h-24 rounded-2xl bg-[#1f1f25] border border-white/5 text-center transition-all duration-200 hover:shadow-[0_0_10px_rgba(0,255,255,0.2)]"
                          >
                            <div className="text-2xl mb-2 text-accent">
                              {skill.icon}
                            </div>
                            <p className="text-xs text-white/70 px-1 leading-snug">
                              {skill.name}
                            </p>
                          </motion.li>
                        ))}
                        <motion.li
                          whileHover={{ scale: 1.05 }}
                          className="col-span-2 sm:col-span-3 flex flex-col items-center justify-center h-24 rounded-2xl bg-[#1f1f25] border border-accent/40 text-center shadow-[0_0_12px_rgba(0,255,255,0.15)]"
                        >
                          <div className="text-3xl mb-1 text-accent">
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
          </TabsContent>
          <TabsContent value="career" className="mt-6">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {career.title}
            </h3>
            <ul className="flex flex-col gap-5">
              {career.items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl overflow-hidden bg-[#232329] hover:bg-[#2b2b32] transition-colors"
                >
                  {item.image && (
                    <div className="relative w-full h-32">
                      <Image
                        src={item.image}
                        alt={item.company}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                  )}
                  <div className="p-4 text-center">
                    <span className="text-accent text-sm">{item.duration}</span>
                    <h4 className="font-semibold text-base">{item.position}</h4>
                    <p className="text-white/60 text-sm">{item.company}</p>
                  </div>
                </a>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="education" className="mt-6">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {education.title}
            </h3>
            <ScrollArea className="h-[400px] px-2">
              <ul className="flex flex-col gap-5">
                {education.items.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-[#232329] hover:bg-[#2b2b32] transition-colors p-4 flex flex-col items-center text-center"
                  >
                    <span className="text-accent text-sm mb-1">
                      {item.duration}
                    </span>
                    <h4 className="text-sm font-medium mb-1">{item.degree}</h4>
                    <p className="text-white/60 text-xs">{item.institution}</p>
                  </a>
                ))}
              </ul>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ExperienceMobile;
