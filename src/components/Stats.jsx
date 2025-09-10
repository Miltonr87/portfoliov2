'use client';

import CountUp from 'react-countup';

const stats = [
  { num: 5, text: 'Years of experience' },
  { num: 7, text: 'Technologies mastered' },
  { num: 2582, text: 'Code commits' },
];
const Stats = () => {
  return (
    <section className=" pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div
          className=" flex flex-wrap gap-6 max-w-[80vh]
         mx-auto xl:max-w-none"
        >
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex flex-1 gap-4 items-center
                 justify-center xl:justify-start mb-[150px] "
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className=" text-2xl xl:text-4xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length > 15 ? 'max-w-[100px]' : ' max-w-[150px]'
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
