import { ProjectDto, SkillDto } from "@/shared/api/generated";
import { UIBadge, UILink } from "@/shared/ui";
import { GitHubIcon, OpenIcon } from "@/shared/ui/icons";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { Project } from "./project";

interface ProjectsListProps extends HTMLAttributes<HTMLUListElement> {
  projects: ProjectDto[];
  selectedSkills: SkillDto[];
}

export const ProjectsList = ({
  projects,
  selectedSkills,
  className,
  ...props
}: ProjectsListProps) => {
  return (
    <div className="gap-3">
      <UIBadge className="inline-block hover:bg-neutral-600 cursor-default">
        Найдено: {projects.length}
      </UIBadge>
      <ul
        {...props}
        className={clsx(className, "w-full flex flex-col gap-10 mt-4")}
      >
        {projects.map((project) => {
          return (
            <li key={`project_${project.id}`}>
              <Project
                project={project}
                selectedSkills={selectedSkills}
                actions={
                  <div className="flex gap-2">
                    <UILink
                      className="px-[8px]"
                      href={project.deploy}
                      target="_blank"
                    >
                      <OpenIcon width={19} height={19} />
                    </UILink>
                    <UILink
                      className="px-[8px]"
                      href={project.github}
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
