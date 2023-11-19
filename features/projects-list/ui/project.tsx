"use client";

import { ProjectDto, SkillDto } from "@/shared/api/generated";
import { UIBadge, UIImage } from "@/shared/ui";
import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

interface ProjectProps extends HTMLAttributes<HTMLElement> {
  project: ProjectDto;
  selectedSkills: SkillDto[];
  actions?: ReactNode;
}

export const Project = ({
  project,
  selectedSkills,
  actions,
  className,
  ...props
}: ProjectProps) => {
  return (
    <article
      {...props}
      className={clsx(className, "flex flex-col gap-[15px]", "md:flex-row")}
    >
      <UIImage
        src={`/api/${project.image}`}
        alt={`${project.title} main image`}
        className={clsx(
          "w-full h-auto rounded-xl shadow-primary-500 shadow-sm md:max-w-xs lg:max-w-md",
        )}
        width={1200}
        height={840}
      />

      <div className="overflow-hidden w-full">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-h2 font-h2 sm:text-h1 sm:font-h1">
            {project.title}
          </h3>
          {actions}
        </div>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          {project.labels.split(" ").map((label, index) => {
            return (
              <p
                key={`project_${project.id}_label_${index}`}
                className="text-primary-300 px-2 py-1 rounded-xl border-[1px] border-primary-300 select-none"
              >
                {label}
              </p>
            );
          })}
        </div>
        <ul className="flex gap-[10px] overflow-x-auto mt-3 pb-2">
          {project.skills.map((skill) => {
            const isMatched = selectedSkills.find((s) => s.id === skill.id);
            const variant = isMatched ? "match" : "default";

            return (
              <li key={`project_${project.id}_skill_${skill.id}`}>
                <UIBadge variant={variant} className="pointer-events-none">
                  <p className="whitespace-nowrap">{skill.title}</p>
                </UIBadge>
              </li>
            );
          })}
        </ul>
        <p
          className={clsx("text-neutral-300 mt-5 line-clamp-4 md:line-clamp-2")}
        >
          {project.description}
        </p>
      </div>
    </article>
  );
};
