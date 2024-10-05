import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  tags: string[];
  gitUrl: string;
  demoUrl?: string; // Optional demoUrl prop
}

const ProjectCards: React.FC<ProjectCardProps> = ({
  title,
  description,
  imgUrl,
  tags,
  gitUrl,
  demoUrl, // Access demoUrl prop
}) => {
  return (
    <div className="w-70 h-[260px] bg-purple-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Image */}
      <img src={imgUrl} alt={title} className="w-full h-20 object-fill" />
      <div className="p-4 text-white">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-600 text-[10px] px-2 py-1 rounded-[6px]"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Title */}
        <h3 className="text-[18px] font-bold mb-2 ">{title}</h3>
        {/* Description */}
        <p className="text-[10px] mb-4 line-clamp-3">{description}</p>
        {/* Buttons */}
        <div className="flex gap-2 justify-s">
          <a
            href={gitUrl}
            className="bg-purple-500 text-xs px-3 py-1 rounded-[8px] hover:bg-purple-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              className="bg-purple-500 text-xs px-3 py-1 rounded-[8px] hover:bg-purple-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
