'use client';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
  {
    id: 1,
    title: 'Explore Nest',
    description:
      'Tourist guide platform with role-based dashboards, JWT auth, and user-personalised offers on booking.',
    image: '/images/projects/explore-nest.jpg',
    tag: ['All', 'Travel & Tourism'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Auto Maniac',
    description:
      'Car marketplace with brand-based product filtering and shopping cart checkout option.',
    image: '/images/projects/auto-maniac.jpg',
    tag: ['All', 'E-commerce'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'Travel Buddy',
    description: 'Project 3 description',
    image: '/images/projects/travel-buddy.jpg',
    tag: ['All', 'Travel & Tourism'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Task Master',
    description: 'Project 4 description',
    image: '/images/projects/task-master.jpg',
    tag: ['All', 'Task Management'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'Entertainment Freak',
    description: 'Authentication and CRUD operations',
    image: '/images/projects/entertainment-freak.jpg',
    tag: ['All', 'Events Management'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Bistro Boss',
    description: 'Project 5 description',
    image: '/images/projects/bistro-boss.jpg',
    tag: ['All', 'E-commerce'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 7,
    title: 'Stay Vista',
    description: 'Project 5 description',
    image: '/images/projects/stay-vista.jpg',
    tag: ['All', 'Travel & Tourism'],
    gitUrl: '/',
    previewUrl: '/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const handleTagChange = newTag => {
    setTag(newTag);
  };
  const filteredProjects = projectsData?.filter(project =>
    project.tag.includes(tag)
  );
  return (
    <>
      {/* title */}
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {' '}
        My Projects{' '}
      </h2>
      {/* project tags selector */}
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Travel & Tourism"
          isSelected={tag === 'Travel & Tourism'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Task Management"
          isSelected={tag === 'Task Management'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="E-commerce"
          isSelected={tag === 'E-commerce'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Events Management"
          isSelected={tag === 'Events Management'}
        />
        {/* <button className="rounded-full border-2 border-slate-500 hover:border-white px-4 py-2 text-xl cursor-pointer">
          Travel & Tourism
        </button>
        <button className="rounded-full border-2 border-slate-500 hover:border-white px-4 py-2 text-xl cursor-pointer">
          Task Management
        </button>
        <button className="rounded-full border-2 border-slate-500 hover:border-white px-4 py-2 text-xl cursor-pointer">
          E-commerce
        </button>
        <button className="rounded-full border-2 border-slate-500 hover:border-white px-4 py-2 text-xl cursor-pointer">
          Events Management
        </button> */}
      </div>
      {/* project cards */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects?.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};
export default ProjectsSection;
