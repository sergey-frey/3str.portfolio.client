"use client";

import { HTMLAttributes } from "react";
import { ProjectsResearchLayout } from "./projects-research-layout";
import { SkillsProvider } from "./providers/skills-provider";

interface ProjectsResearchProps extends HTMLAttributes<HTMLElement> {}

export const ProjectsResearch = ({ ...props }: ProjectsResearchProps) => {
  return (
    <SkillsProvider>
      <ProjectsResearchLayout {...props} />
    </SkillsProvider>
  );
};
