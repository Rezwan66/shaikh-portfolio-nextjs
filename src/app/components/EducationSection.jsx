'use client';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const educationData = [
  {
    degree: 'M.Sc. in Digital Engineering',
    institution: 'Otto von Guericke University Magdeburg',
    location: 'Germany',
    period: 'Oct 2019 — 2025',
    icon: '🎓',
    highlights: [
      'Master\'s Thesis: Code Generation for Web Automation using LLMs',
      'Built a backend system using Python (FastAPI) for automated code generation',
      'Designed data flow pipelines for structured input/output handling',
      'Integrated LLMs for intelligent automation processes',
    ],
    project: 'Academic Project: Blogging Website using HTML, CSS, PHP, and MySQL',
  },
  {
    degree: 'B.Sc. in Electrical Engineering',
    institution: 'Islamic University of Technology (IUT)',
    location: 'Bangladesh',
    period: 'Jan 2015 — Nov 2018',
    icon: '⚡',
    highlights: [
      'Relevant coursework: C/C++ Programming, Assembly Language, Mathematics & Statistics',
      'Foundation in systems thinking and engineering principles',
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-16 md:py-24">
      <SectionHeading subtitle="My academic background">
        Education
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 xl:px-16 max-w-5xl mx-auto">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="glass-card glass-card-hover p-6 rounded-xl relative overflow-hidden"
          >
            {/* Gradient accent at top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-tertiary-500"></div>
            
            <div className="flex items-start gap-4 mt-2">
              <span className="text-3xl">{edu.icon}</span>
              <div className="flex-1">
                <h3 className="text-white text-lg font-bold font-[family-name:var(--font-space)]">
                  {edu.degree}
                </h3>
                <p className="text-secondary-400 text-sm mt-1">{edu.institution}</p>
                <p className="text-[#64748b] text-sm">{edu.location} · {edu.period}</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {edu.highlights.map((item, i) => (
                <li key={i} className="text-[#94a3b8] text-sm flex gap-2">
                  <span className="text-primary-500 mt-0.5 flex-shrink-0">▹</span>
                  {item}
                </li>
              ))}
            </ul>

            {edu.project && (
              <div className="mt-4 pt-3 border-t border-[#1e293b]">
                <p className="text-xs text-[#64748b]">{edu.project}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default EducationSection;
