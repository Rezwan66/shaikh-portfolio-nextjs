import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'React Portfolio Website',
    description: 'Project 1 description',
    image: '/images/projects/explore-nest.jpg',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Potography Portfolio Website',
    description: 'Project 2 description',
    image: '/images/projects/auto-maniac.jpg',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'E-commerce Application',
    description: 'Project 3 description',
    image: '/images/projects/travel-buddy.jpg',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Food Ordering Application',
    description: 'Project 4 description',
    image: '/images/projects/task-master.jpg',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'React Firebase Template',
    description: 'Authentication and CRUD operations',
    image: '/images/projects/entertainment-freak.jpg',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Full-stack Roadmap',
    description: 'Project 5 description',
    image: '/images/projects/bistro-boss.jpg',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 7,
    title: 'Stay Vista',
    description: 'Project 5 description',
    image: '/images/projects/stay-vista.jpg',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
];

const ProjectsSection = () => {
  return (
    <>
      {/* title */}
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        {' '}
        My Projects{' '}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <button className="rounded-full border-2 border-yellow-500 px-4 py-2 text-xl cursor-pointer">
          All
        </button>
        <button className="rounded-full border-2 border-slate-500 hover:border-white px-4 py-2 text-xl cursor-pointer">
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
        </button>
      </div>
      {/* project cards */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData?.map(project => (
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
