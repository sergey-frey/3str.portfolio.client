"use client";

import { SkillModel } from "@/shared/types";
import { HTMLAttributes, useEffect, useState } from "react";
import { FilterField } from "./ui/filter-field";
import { SkillsList } from "./ui/skills-list";

interface SkillsFilterProps extends HTMLAttributes<HTMLElement> {
  skills: SkillModel[];
  onChangeSkills: (skills: SkillModel[]) => void;
}

export const SkillsFilter = ({
  skills,
  onChangeSkills,
  ...props
}: SkillsFilterProps) => {
  const [selectedSkills, setSelectedSkills] = useState<SkillModel[]>([]);
  const freeSkills = skills.filter((skill) => !selectedSkills.includes(skill));

  const handleSelectSkill = (skill: SkillModel) => {
    setSelectedSkills((prev) => [...prev, skill]);
  };

  const handleDeleteSkill = (skill: SkillModel) => {
    setSelectedSkills((prev) => prev.filter((s) => s.id !== skill.id));
  };

  useEffect(() => {
    onChangeSkills(selectedSkills);
  }, [selectedSkills, onChangeSkills]);

  return (
    <section {...props}>
      <FilterField
        selectedSkills={selectedSkills}
        onDeleteSkill={handleDeleteSkill}
      />
      <SkillsList
        className="mt-2"
        freeSkills={freeSkills}
        onSelectSkill={handleSelectSkill}
      />
    </section>
  );
};
