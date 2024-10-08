const achievementsList = [
  {
    metric: 'Projects',
    value: '50',
    postfix: '+',
  },
  {
    prefix: '~',
    metric: 'Users',
    value: '1,000',
  },
  {
    metric: 'Awards',
    value: '2',
  },
  {
    metric: 'Years',
    value: '1.5',
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
        {achievementsList.map((achievement, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-4xl font-bold">
                {achievement.value}
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
