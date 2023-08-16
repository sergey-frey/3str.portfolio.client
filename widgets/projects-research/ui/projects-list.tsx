import { Project } from "@/entities/project";
import { classes } from "@/shared/lib";
import { UIBadge, UILink } from "@/shared/ui";
import { GitHubIcon, OpenIcon } from "@/shared/ui/icons";
import { HTMLAttributes, useContext } from "react";
import { projects } from "../constants/projects";
import { SkillsContext } from "../context/skills-context";
import { getFilteredProjects } from "../model/filtered-projects";

interface ProjectsListProps extends HTMLAttributes<HTMLUListElement> {}

export const ProjectsList = ({ className, ...props }: ProjectsListProps) => {
  const { selectedSkills } = useContext(SkillsContext);
  const filteredProjects = getFilteredProjects(projects, selectedSkills);

  return (
    <div className="gap-3">
      <UIBadge className="inline-block hover:bg-neutral-600 cursor-default">
        Найдено: {filteredProjects.length}
      </UIBadge>
      <ul
        {...props}
        className={classes(className, "w-full flex flex-col gap-10 mt-4")}
      >
        {filteredProjects.map((project) => {
          return (
            <li key={`project_${project.id}`}>
              <Project
                project={project}
                actions={
                  <div className="flex gap-2">
                    <UILink
                      className="px-[8px]"
                      href={project.links.deploy}
                      target="_blank"
                    >
                      <OpenIcon width={19} height={19} />
                    </UILink>
                    <UILink
                      className="px-[8px]"
                      href={project.links.github}
                      target="_blank"
                    >
                      <GitHubIcon width={20} height={20} />
                    </UILink>
                  </div>
                }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
