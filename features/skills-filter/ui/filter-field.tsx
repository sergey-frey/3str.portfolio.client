import { classes } from "@/shared/lib";
import { SkillModel } from "@/shared/types";
import { UIBadge } from "@/shared/ui";
import { HTMLAttributes } from "react";

interface FilterFieldProps extends HTMLAttributes<HTMLDivElement> {
  selectedSkills: SkillModel[];
  onDeleteSkill: (skill: SkillModel) => void;
}

export const FilterField = ({
  selectedSkills,
  onDeleteSkill,
  className,
  ...props
}: FilterFieldProps) => {
  if (!selectedSkills.length) {
    return null;
  }

  return (
    <div
      {...props}
      className={classes(className, "bg-neutral-500 rounded-2xl px-2 py-2")}
    >
      <ul className="flex flex-wrap items-center gap-2">
        {selectedSkills.map((skill) => {
          return (
            <li key={`selected_skill_${skill.id}`}>
              <UIBadge variant="delete" onClick={() => onDeleteSkill(skill)}>
                <p className="whitespace-nowrap">{skill.title}</p>
              </UIBadge>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
