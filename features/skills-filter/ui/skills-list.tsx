import { classes } from "@/shared/lib";
import { SkillModel } from "@/shared/types";
import { UIBadge } from "@/shared/ui";
import { HTMLAttributes } from "react";

interface SkillsListProps extends HTMLAttributes<HTMLUListElement> {
  freeSkills: SkillModel[];
  onSelectSkill: (skill: SkillModel) => void;
}

export const SkillsList = ({
  freeSkills,
  onSelectSkill,
  className,
  ...props
}: SkillsListProps) => {
  return (
    <ul {...props} className={classes(className, "flex flex-wrap gap-2")}>
      {freeSkills.map((skill) => {
        return (
          <li key={`free_skill_${skill.id}`}>
            <UIBadge onClick={() => onSelectSkill(skill)}>
              <p className="whitespace-nowrap">{skill.title}</p>
            </UIBadge>
          </li>
        );
      })}
    </ul>
  );
};
