import { ProjectDto } from "@/shared/api/generated";
import { UIBadge } from "@/shared/ui";
import { GitHubIcon, OpenIcon } from "@/shared/ui/icons";
import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";
import { AdminProjectLink } from "./admin-project-link";

interface AdminProjectProps extends HTMLAttributes<HTMLDivElement> {
  project: ProjectDto;
  actions: ReactNode;
}

export const AdminProject = ({
  project,
  actions,
  className,
  ...props
}: AdminProjectProps) => {
  return (
    <article
      {...props}
      className={clsx(
        className,
        "flex flex-col gap-[15px] pl-5 border-l-4 border-l-primary-600",
        "md:flex-row",
      )}
    >
      <div className="overflow-hidden w-full">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-h2 font-h2 sm:text-h1 sm:font-h1">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">{actions}</div>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          {project.labels.split(" ").map((label, index) => {
            return (
              <p
                key={`project_${project.id}_label_${index}`}
                className="text-primary-300 select-none"
              >
                {label}
              </p>
            );
          })}
        </div>
        <ul className="flex flex-wrap gap-[10px] overflow-x-auto mt-3 pb-2">
          {project.skills.map((skill) => {
            return (
              <li key={`project_${project.id}_skill_${skill.id}`}>
                <UIBadge className="pointer-events-none border-[1px] border-primary-600">
                  <p className="whitespace-nowrap">{skill.title}</p>
                </UIBadge>
              </li>
            );
          })}
        </ul>
        <AdminProjectLink
          className="mt-4"
          href={project.deploy}
          text={project.deploy}
          icon={<OpenIcon className="w-5 h-5" />}
        />
        <AdminProjectLink
          className="mt-2"
          href={project.github}
          text={project.github}
          icon={<GitHubIcon className="w-5 h-5" />}
        />
        <p className={clsx("text-neutral-300 mt-4 line-clamp-2")}>
          {project.description}
        </p>
      </div>
    </article>
  );
};
