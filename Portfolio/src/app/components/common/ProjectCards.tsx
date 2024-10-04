import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCards: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div className="w-80 h-full border-20 border-transparent rounded-[24px] bg-gradient-to-r from-[#a481b6] via-[#8a30b8] to-[rgb(107,3,252)] p-[2px] hover:border-purple-500 hover:shadow-[0_0_15px_5px_rgba(128,0,128,0.5)] transition-all">
      <div className="bg-[#1a1a1a] h-full p-4 rounded-[24px] flex flex-col">
        <div className="h-36 w-full relative group overflow-hidden rounded-t-xl">
          <img
            src={imgUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link
              href={gitUrl}
              className="h-10 w-10 mr-2 border-2 border-[#ADB7BE] rounded-full hover:border-white flex items-center justify-center group/link"
            >
              <CodeBracketIcon className="h-8 w-8 text-[#ADB7BE] group-hover/link:text-white" />
            </Link>
            <Link
              href={previewUrl}
              className="h-10 w-10 border-2 border-[#ADB7BE] rounded-full hover:border-white flex items-center justify-center group/link"
            >
              <EyeIcon className="h-8 w-8 text-[#ADB7BE] group-hover/link:text-white" />
            </Link>
          </div>
        </div>
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-4 px-4 flex-1">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
