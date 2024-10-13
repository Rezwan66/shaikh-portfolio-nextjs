'use client';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
  () => {
    return import('react-animated-numbers');
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: 'Projects',
    value: '50',
    postfix: '+',
  },
  {
    prefix: '~',
    metric: 'Users',
    value: '1000',
  },
  {
    metric: 'Awards',
    value: '2',
  },
  {
    metric: 'Years',
    value: '1.5',
    postfix: '+',
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex md:flex-row flex-col gap-4 md:gap-0 items-center justify-between">
        {achievementsList.map((achievement, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement?.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, idx) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (idx + 1),
                    };
                  }}
                />
                {achievement?.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default AchievementsSection;
