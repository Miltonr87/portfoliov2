import { motion as Motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-blue-900 to-black-500 flex flex-col-reverse xl:flex-row items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      {/* Left Section */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <Motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl z-10 mb-6 font-bold text-white"
        >
          Milton Rodrigues
        </Motion.h1>
        <Motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xl md:text-1xl lg:text-2xl text-yellow-300 max-w-2xl"
        >
          Self-taught programmer with 5 years of experience in Frontend
          Development, specializing in the creation of scalable and
          high-performance web applications with Reactjs, Typescript and Nextjs,
          always striving to optimize the quality and efficiency of my work.
        </Motion.p>
      </div>
      {/* Right Section */}
      <div className="hidden xl:flex flex-1 justify-end">
        <img
          src="/path/to/your/image.jpg"
          alt="Hero"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
