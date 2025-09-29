import React from 'react';

interface ProjectCardProps {
  title: string;
  role: string;
  challenge: string;
  tech: string[];
  liveLink: string;
  codeLink: string;
  imageAlt: string;
  reverse?: boolean; // For alternating layout
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  role,
  challenge,
  tech,
  liveLink,
  codeLink,
  imageAlt,
  reverse = false,
}) => {
  return (
    <div
      className={`bg-gray-800 p-8 rounded-lg shadow-xl mb-10 flex flex-col md:flex-row gap-8 items-center transition-all duration-500 hover:shadow-neon ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Project Image Placeholder */}
      <div className={`flex-1 max-w-full ${reverse ? 'md:pl-8' : 'md:pr-8'}`}>
        <div className="border-2 border-neon overflow-hidden shadow-md shadow-neon/40">
          <img
            src="https://via.placeholder.com/600x400/333333/FFFFFF?text=Project+Screenshot"
            alt={imageAlt}
            // Use group-hover utility for a nice scrolling effect
            className="w-full h-auto block transition-transform duration-[5000ms] ease-in-out group-hover:translate-y-[-50%]"
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="flex-1">
        <h3 className="font-mono text-2xl text-white mb-3">{title}</h3>
        <p className="text-sm text-gray-400 mb-2">
          <strong>My Role:</strong> {role}
        </p>
        <p className="text-sm text-gray-400 mb-4">
          <strong>Challenge:</strong> {challenge}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="bg-neon text-gray-900 font-mono text-xs px-3 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a href={liveLink} target="_blank" className="cta-button">
            Live Demo
          </a>
          <a href={codeLink} target="_blank" className="cta-button-secondary">
            Code Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;