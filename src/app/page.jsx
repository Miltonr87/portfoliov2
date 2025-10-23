import { FiDownload } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <section>
      <div className="container mx-auto h-full px-4 md:px-6 xl:px-0">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none max-w-xl">
            <span className="text-lg sm:text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello, I&apos;m
              <br />
              <span className="text-accent">Milton Rodrigues</span>
            </h1>
            <p className="max-w-[500px] text-white/80 mb-6 text-sm sm:text-base">
              Self-driven Frontend Engineer with 5 years of experience building
              scalable, high-performance web applications and SaaS platforms.
              Passionate about crafting clean, efficient code and delivering
              user-focused solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a href="https://resume.io/r/LIdaD2cGI" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <span>Download CV</span>
                  <FiDownload />
                </Button>
              </a>
              <div className="mt-4 sm:mt-0">
                <Socials
                  containerStyles="flex justify-center sm:justify-start gap-4"
                  iconsStyles="w-9 h-9 border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 w-full flex justify-center">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
