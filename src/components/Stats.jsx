'use client';

import CountUp from 'react-countup';

const stats = [
  { num: 5, text: 'Years of experience' },
  { num: 18, text: 'Technologies mastered' },
];

const Stats = () => {
  return (
    <section className="pt-8 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto px-4 md:px-6 xl:px-0">
        <div className="flex flex-wrap justify-center md:justify-start gap-6 max-w-xs sm:max-w-md mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 flex-1 text-center sm:text-left"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-accent"
              />
              <p
                className={`${
                  item.text.length > 15 ? 'max-w-[120px]' : 'max-w-[160px]'
                } text-sm sm:text-base leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
