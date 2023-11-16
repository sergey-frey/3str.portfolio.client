"use client";

import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

interface ProjectsResearchLayoutProps extends HTMLAttributes<HTMLElement> {
  skillsFilter: ReactNode;
  projectsList: ReactNode;
}

export const ProjectsResearchLayout = ({
  skillsFilter,
  projectsList,
  className,
  ...props
}: ProjectsResearchLayoutProps) => {
  return (
    <article {...props} className={clsx(className, "flex flex-col gap-10")}>
      {skillsFilter}
      {projectsList}
    </article>
  );
};
