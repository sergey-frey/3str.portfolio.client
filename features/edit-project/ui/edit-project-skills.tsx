import { classes } from "@/shared/lib";
import { SkillModel } from "@/shared/types";
import { type HTMLAttributes } from "react";
import { EditProjectsSkillsItem } from "./edit-project-skills-item";

type EditProjectSkillsProps = HTMLAttributes<HTMLUListElement> & {
  selectedSkills: SkillModel[];
  allSkills: SkillModel[];
  onChange: (data: SkillModel[]) => void;
};

export const EditProjectSkills = ({
  allSkills,
  selectedSkills,
  onChange,
  className,
}: EditProjectSkillsProps) => {
  const getSkillKey = (index: number) => `admin_edit_projects_skills_${index}`;

  const handleSkillClick = (skill: SkillModel) => {
    const isSelected = !!selectedSkills.find((s) => s.id === skill.id);
    if (isSelected) {
      onChange(selectedSkills.filter((s) => s.id !== skill.id));
    } else {
      onChange([...selectedSkills, skill]);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <ul
        className={classes(
          className,
          "px-2 py-2 flex flex-col bg-neutral-1 rounded-lg overflow-y-auto max-h-72"
        )}
      >
        {allSkills.map((skill, i) => {
          const isSelected = !!selectedSkills.find((s) => s.id === skill.id);
          return (
            <li key={getSkillKey(i)}>
              <EditProjectsSkillsItem
                isSelected={isSelected}
                onClick={() => handleSkillClick(skill)}
              >
                {skill.title}
              </EditProjectsSkillsItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
