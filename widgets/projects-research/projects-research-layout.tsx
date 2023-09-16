"use client";

import { SkillsFilter, SkillsFilterSkeleton } from "@/features/skills-filter";
import { useProjectsQuery, useSkillsQuery } from "@/shared/hooks";
import { classes } from "@/shared/lib";
import { SkillModel } from "@/shared/types";
import { HTMLAttributes, useContext } from "react";
import { SkillsContext } from "./context/skills-context";
import { ProjectsList } from "./ui/projects-list";
import { ProjectsListSkeleton } from "./ui/projects-list-skeleton";

interface ProjectsResearchLayoutProps extends HTMLAttributes<HTMLElement> {}

export const ProjectsResearchLayout = ({
  className,
  ...props
}: ProjectsResearchLayoutProps) => {
  const {
    data: skills,
    isLoading: skillsLoading,
    isSuccess: skillsSuccess,
  } = useSkillsQuery();

  const {
    data: projects,
    isLoading: projectsLoading,
    isSuccess: projectsSuccess,
  } = useProjectsQuery();

  const { setSelectedSkills } = useContext(SkillsContext);

  const handleChangeSkills = (skills: SkillModel[]) => {
    if (setSelectedSkills) {
      setSelectedSkills(skills);
    }
  };

  const getSkillsFilterView = () => {
    if (skillsLoading) {
      return <SkillsFilterSkeleton />;
    }
    if (skillsSuccess) {
      return (
        <SkillsFilter skills={skills} onChangeSkills={handleChangeSkills} />
      );
    }
  };

  const getProjectsListView = () => {
    if (projectsLoading) {
      return <ProjectsListSkeleton />;
    }
    if (projectsSuccess) {
      return <ProjectsList projects={projects} />;
    }
  };

  return (
    <article {...props} className={classes(className, "flex flex-col gap-10")}>
      {getSkillsFilterView()}
      {getProjectsListView()}
    </article>
  );
};
