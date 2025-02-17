import React from "react";

import projects from "../../data/projects.json";
import { getImageUrl } from "../../utils";
import { ProjectCard } from "./ProjectCard";

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        {projects.map((project, id) => {
          return <ProjectCard key={id} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
