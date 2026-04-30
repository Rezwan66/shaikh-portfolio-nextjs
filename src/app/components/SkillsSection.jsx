'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from './SectionHeading';

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: [
      { name: 'JavaScript (ES6)', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Python', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React / Next.js', level: 88 },
      { name: 'Angular', level: 65 },
      { name: 'Vue', level: 55 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Backend & Architecture',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'REST APIs', level: 92 },
      { name: 'Prisma', level: 70 },
      { name: 'Microservices', level: 72 },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 78 },
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 68 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'Docker', level: 78 },
      { name: 'Kubernetes', level: 65 },
      { name: 'Azure Databricks', level: 60 },
    ],
  },
  {
    title: 'CI/CD & Tools',
    icon: '🔧',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Jenkins', level: 68 },
      { name: 'GitHub Actions', level: 70 },
    ],
  },
];

const SkillBar = ({ name, level, delay, isInView }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-[#e2e8f0]">{name}</span>
        <span className="text-xs text-[#94a3b8]">{level}%</span>
      </div>
      <div className="h-2 bg-[#1e293b] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-16 md:py-24">
      <SectionHeading subtitle="Technologies and tools I work with">
        Skills & Expertise
      </SectionHeading>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 xl:px-16"
      >
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            className="glass-card glass-card-hover p-6 rounded-xl skill-card"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-white text-lg font-semibold font-[family-name:var(--font-space)]">
                {category.title}
              </h3>
            </div>
            {category.skills.map((skill, skillIdx) => (
              <SkillBar
                key={skillIdx}
                name={skill.name}
                level={skill.level}
                delay={catIdx * 0.1 + skillIdx * 0.15}
                isInView={isInView}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default SkillsSection;
