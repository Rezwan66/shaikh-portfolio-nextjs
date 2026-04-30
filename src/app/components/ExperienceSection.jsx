'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    title: 'Working Student — Intelligent Search Developer',
    company: 'SAP',
    location: 'Walldorf, Baden-Württemberg',
    period: 'May 2024 — Present',
    description: [
      'Develop and maintain backend services and data extraction pipelines for large-scale search systems.',
      'Process structured and unstructured data to improve search accuracy and system performance.',
      'Work with Azure Databricks for data transformation and analysis in distributed environments.',
      'Support containerised deployments using Docker and Kubernetes.',
      'Contribute to CI/CD pipelines (Jenkins) for automated deployment and system reliability.',
      'Collaborate in Agile teams to improve scalability and optimise system performance.',
    ],
    skills: ['TypeScript', 'Node.js', 'Docker', 'Kubernetes', 'Jenkins', 'Angular', 'Azure Databricks'],
  },
  {
    title: 'Student Assistant — Web Developer',
    company: 'DZHW',
    location: 'German Centre for Higher Education Research and Science Studies',
    period: 'May 2024 — August 2024',
    description: [
      'Built data-driven dashboards using JavaScript and REST APIs for real-time data visualisation.',
      'Improved performance of web applications, reducing load times by 20%.',
      'Worked closely with teams to deliver reliable and maintainable frontend solutions.',
    ],
    skills: ['JavaScript', 'HTML', 'CSS', 'Highcharts', 'REST APIs'],
  },
];

const ExperienceCard = ({ exp }) => (
  <div className="glass-card glass-card-hover p-6 rounded-xl">
    <span className="text-primary-400 text-sm font-medium">{exp.period}</span>
    <h3 className="text-white text-lg font-bold mt-2 font-[family-name:var(--font-space)]">
      {exp.title}
    </h3>
    <p className="text-secondary-400 text-sm mt-1">
      {exp.company} — <span className="text-[#64748b]">{exp.location}</span>
    </p>
    <ul className="mt-4 space-y-2">
      {exp.description.map((item, i) => (
        <li key={i} className="text-[#94a3b8] text-sm flex gap-2">
          <span className="text-primary-500 mt-1 flex-shrink-0">▹</span>
          {item}
        </li>
      ))}
    </ul>
    <div className="flex flex-wrap gap-2 mt-4">
      {exp.skills.map((skill, i) => (
        <span
          key={i}
          className="text-xs px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <SectionHeading subtitle="My professional journey so far">
        Experience
      </SectionHeading>

      {/* Mobile layout */}
      <div className="md:hidden px-4 relative">
        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500 via-secondary-500 to-tertiary-500"></div>
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="relative mb-10 pl-12"
          >
            <div className="absolute left-[25px] top-6 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 shadow-[0_0_12px_rgba(59,130,246,0.5)] z-10"></div>
            <ExperienceCard exp={exp} />
          </motion.div>
        ))}
      </div>

      {/* Desktop layout — 3-column grid: card | timeline | card */}
      <div className="hidden md:block px-4 xl:px-16 max-w-5xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="grid grid-cols-[1fr_60px_1fr] mb-12"
          >
            {/* Left column */}
            <div className={idx % 2 === 0 ? '' : 'order-3'}>
              {idx % 2 === 0 && <ExperienceCard exp={exp} />}
              {idx % 2 !== 0 && <ExperienceCard exp={exp} />}
            </div>

            {/* Center column — timeline line + node */}
            <div className="flex flex-col items-center order-2">
              <div className="w-[2px] flex-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-tertiary-500"></div>
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 shadow-[0_0_12px_rgba(59,130,246,0.5)] my-2 flex-shrink-0"></div>
              <div className="w-[2px] flex-1 bg-gradient-to-b from-secondary-500 via-tertiary-500 to-primary-500"></div>
            </div>

            {/* Right column */}
            <div className={idx % 2 === 0 ? 'order-3' : ''}>
              {/* Empty side */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default ExperienceSection;
