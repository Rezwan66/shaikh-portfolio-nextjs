import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '../../data/projectsData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.id === params.id);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} | Shaikh Rezwan`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Back button */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#1e293b]">
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/#projects"
            className="text-[#94a3b8] hover:text-white transition-colors flex items-center gap-2 w-fit"
          >
            <span>←</span> Back to Portfolio
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 max-w-4xl">
        {/* Hero Banner */}
        <div className="glass-card rounded-2xl overflow-hidden mb-10">
          <div className="relative h-64 md:h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent"></div>
          </div>
          <div className="p-8 -mt-16 relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-space)] mb-4 gradient-text">
              {project.title}
            </h1>
            <p className="text-[#94a3b8] text-lg leading-relaxed">{project.description}</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-10">
          {project.liveUrl && project.liveUrl !== '/' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              🌐 Live Project
            </a>
          )}
          {project.githubUrl && project.githubUrl !== '/' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-[#1e293b] text-[#94a3b8] hover:text-white hover:border-primary-500 transition-all flex items-center gap-2"
            >
              📂 Frontend Repo
            </a>
          )}
          {project.githubServerUrl && (
            <a
              href={project.githubServerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-[#1e293b] text-[#94a3b8] hover:text-white hover:border-primary-500 transition-all flex items-center gap-2"
            >
              🗄️ Backend Repo
            </a>
          )}
        </div>

        {/* Tech Stack */}
        <div className="glass-card p-6 rounded-xl mb-8">
          <h2 className="text-xl font-bold font-[family-name:var(--font-space)] mb-4 text-white flex items-center gap-2">
            <span className="text-primary-400">⚡</span> Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="glass-card p-6 rounded-xl mb-8">
          <h2 className="text-xl font-bold font-[family-name:var(--font-space)] mb-4 text-white flex items-center gap-2">
            <span className="text-secondary-400">🧩</span> Challenges Faced
          </h2>
          <p className="text-[#94a3b8] leading-relaxed">{project.challenges}</p>
        </div>

        {/* Future Improvements */}
        <div className="glass-card p-6 rounded-xl mb-8">
          <h2 className="text-xl font-bold font-[family-name:var(--font-space)] mb-4 text-white flex items-center gap-2">
            <span className="text-tertiary-400">🚀</span> Future Improvements
          </h2>
          <p className="text-[#94a3b8] leading-relaxed">{project.improvements}</p>
        </div>

        {/* Back link */}
        <div className="text-center mt-12">
          <Link
            href="/#projects"
            className="text-primary-400 hover:text-primary-300 font-medium transition-colors"
          >
            ← Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}
