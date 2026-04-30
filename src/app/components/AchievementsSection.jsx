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
    metric: 'Projects Built',
    value: '50',
    postfix: '+',
  },
  {
    metric: 'Years Experience',
    value: '1',
    postfix: '.5+',
  },
  {
    metric: 'Technologies',
    value: '15',
    postfix: '+',
  },
  {
    metric: 'Professional Roles',
    value: '2',
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="glass-card py-8 px-8 md:px-16 flex md:flex-row flex-col gap-6 md:gap-0 items-center justify-between">
        {achievementsList.map((achievement, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col items-center justify-center mx-4 group cursor-pointer"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row font-[family-name:var(--font-space)] group-hover:text-primary-400 transition-colors">
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
              <p className="text-[#94a3b8] text-sm mt-1">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default AchievementsSection;
