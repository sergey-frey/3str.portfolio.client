"use client";

import { ProjectsResearch } from "@/widgets/projects-research";
import { ProjectPageFacade } from "./facades/projects-page-facade";

export const ProjectsPage = () => {
  return <ProjectPageFacade projectsResearch={<ProjectsResearch />} />;
};
