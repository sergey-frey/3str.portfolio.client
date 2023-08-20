"use client";

import { SkillsFilter, SkillsFilterSkeleton } from "@/features/skills-filter";
import { classes } from "@/shared/lib";
import { SkillModel } from "@/shared/types";
import { HTMLAttributes, useContext } from "react";
import { SkillsContext } from "./context/skills-context";
import { useProjects, useSkills } from "./hooks";
import { ProjectsList } from "./ui/projects-list";
import { ProjectsListSkeleton } from "./ui/projects-list-skeleton";

interface ProjectsResearchLayoutProps extends HTMLAttributes<HTMLElement> {}

export const ProjectsResearchLayout = ({
  className,
  ...props
}: ProjectsResearchLayoutProps) => {
  const { data: skillsData, isLoading: skillsLoading } = useSkills();
  const skills = skillsData?.data ?? [];

  const { data: projectsData, isLoading: projectsLoading } = useProjects();
  const projects = projectsData?.data ?? [];

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
    return <SkillsFilter skills={skills} onChangeSkills={handleChangeSkills} />;
  };

  const getProjectsListView = () => {
    if (projectsLoading) {
      return <ProjectsListSkeleton />;
    }
    return <ProjectsList projects={projects} />;
  };

  return (
    <article {...props} className={classes(className, "flex flex-col gap-10")}>
      {getSkillsFilterView()}
      {getProjectsListView()}
    </article>
  );
};
