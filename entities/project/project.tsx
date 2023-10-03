"use client";

import { classes } from "@/shared/lib";
import { ProjectModel } from "@/shared/types";
import { UIBadge, UIImage } from "@/shared/ui";
import { SkillsContext } from "@/widgets/projects-research/context/skills-context";
import { HTMLAttributes, ReactNode, useContext } from "react";

interface ProjectProps extends HTMLAttributes<HTMLElement> {
  project: ProjectModel;
  actions?: ReactNode;
}

export const Project = ({
  project,
  actions,
  className,
  ...props
}: ProjectProps) => {
  const { selectedSkills } = useContext(SkillsContext);

  return (
    <article
      {...props}
      className={classes(className, "flex flex-col gap-[15px]", "md:flex-row")}
    >
      <UIImage
        src={project.image}
        alt={`${project.title} main image`}
        className={classes(
          "w-full h-auto rounded-xl shadow-primary-500 shadow-sm md:max-w-xs lg:max-w-md"
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
        <div className="flex items-center mt-2 md:mt-0">
          {project.labels.map((label, index) => {
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
          className={classes(
            "text-neutral-300 mt-5 line-clamp-4 md:line-clamp-2"
          )}
        >
          {project.description}
        </p>
      </div>
    </article>
  );
};
