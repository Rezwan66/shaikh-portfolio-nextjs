import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ProjectCard = ({ id, imgUrl, title, description, techStack, githubUrl, liveUrl }) => {
  return (
    <div className="glass-card glass-card-hover rounded-xl overflow-hidden group">
      {/* Image */}
      <div
        className="h-52 md:h-60 relative overflow-hidden"
        style={{ background: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[#0a0a0f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {githubUrl && githubUrl !== '/' && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 rounded-full border-2 border-[#94a3b8] hover:border-primary-400 flex items-center justify-center hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all"
            >
              <CodeBracketIcon className="h-6 w-6 text-[#94a3b8] hover:text-white" />
            </a>
          )}
          {liveUrl && liveUrl !== '/' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-12 rounded-full border-2 border-[#94a3b8] hover:border-secondary-400 flex items-center justify-center hover:shadow-[0_0_12px_rgba(6,182,212,0.4)] transition-all"
            >
              <EyeIcon className="h-6 w-6 text-[#94a3b8] hover:text-white" />
            </a>
          )}
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
        <h5 className="text-white text-lg font-semibold mb-2 font-[family-name:var(--font-space)]">
          {title}
        </h5>
        <p className="text-[#94a3b8] text-sm mb-4 line-clamp-2">{description}</p>
        {/* Tech badges */}
        {techStack && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {techStack.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 4 && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1e293b] text-[#64748b]">
                +{techStack.length - 4}
              </span>
            )}
          </div>
        )}
        {/* View Details link */}
        <Link
          href={`/projects/${id}`}
          className="text-sm text-primary-400 hover:text-primary-300 font-medium transition-colors flex items-center gap-1 group/link"
        >
          View Details
          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
};
export default ProjectCard;
