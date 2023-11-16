import { SkillDto } from "@/shared/api/generated";
import clsx from "clsx";
import { type HTMLAttributes } from "react";
import { SkillId } from "../../../types/form";
import { ProjectsFormSkillsItem } from "./project-form-skills-item";

type ProjectFormSkillsProps = HTMLAttributes<HTMLUListElement> & {
  allSkills: SkillDto[];
  selectedSkills: SkillId[];
  onChange: (data: SkillId[]) => void;
};

export const ProjectFormSkills = ({
  allSkills,
  selectedSkills,
  onChange,
  className,
}: ProjectFormSkillsProps) => {
  const getSkillKey = (index: number) => `admin_edit_projects_skills_${index}`;

  const handleSkillClick = (skill: SkillId) => {
    const isSelected = !!selectedSkills.find((s) => s.id === skill.id);
    if (isSelected) {
      onChange(selectedSkills.filter((s) => s.id !== skill.id));
    } else {
      onChange([...selectedSkills, skill].map((s) => ({ id: s.id })));
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <ul
        className={clsx(
          className,
          "px-2 py-2 flex flex-col bg-neutral-1 rounded-lg overflow-y-auto max-h-72",
        )}
      >
        {allSkills.map((skill, i) => {
          const isSelected = !!selectedSkills.find((s) => s.id === skill.id);
          return (
            <li key={getSkillKey(i)}>
              <ProjectsFormSkillsItem
                isSelected={isSelected}
                onClick={() => handleSkillClick(skill)}
              >
                {skill.title}
              </ProjectsFormSkillsItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
