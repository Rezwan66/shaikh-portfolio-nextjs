'use client';
import { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { projectsData } from '../data/projectsData';

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = newTag => {
    setTag(newTag);
  };

  const filteredProjects = projectsData?.filter(project =>
    project.tag.includes(tag)
  );

  const tags = ['All', 'Full Stack', 'Frontend'];

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <SectionHeading subtitle="Some of the projects I've built">
        My Projects
      </SectionHeading>
      {/* project tags selector */}
      <div className="flex flex-row justify-center items-center gap-3 mb-10 px-4">
        {tags.map((tagName) => (
          <ProjectTag
            key={tagName}
            onClick={handleTagChange}
            name={tagName}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      {/* project cards */}
      <ul
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 xl:px-16"
      >
        {filteredProjects?.map((project, idx) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: idx * 0.15 }}
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default ProjectsSection;
