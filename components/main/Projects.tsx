import React from "react";
import ProjectsCard from "../sub/ProjectsCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-full h-full flex flex-col md:flex-ro gap-10 px-10">
        <ProjectsCard
          src="/NextWebsite.png"
          title="Next Project"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, ipsam!"
        />
      </div>
    </div>
  );
};

export default Projects;
