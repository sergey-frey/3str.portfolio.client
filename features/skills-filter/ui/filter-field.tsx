import { SkillDto } from "@/shared/api/generated";
import { UIBadge } from "@/shared/ui";
import clsx from "clsx";
import { HTMLAttributes } from "react";

interface FilterFieldProps extends HTMLAttributes<HTMLDivElement> {
  selectedSkills: SkillDto[];
  onDeleteSkill: (skill: SkillDto) => void;
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
      className={clsx(className, "bg-neutral-500 rounded-2xl px-2 py-2")}
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
