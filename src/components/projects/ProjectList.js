import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  const projectList =
    projects &&
    projects.map((project) => {
      return <ProjectSummary project={project} key={project.id} />;
    });

  return <div className="Project-list-wrapper">{projectList}</div>;
};

export default ProjectList;
