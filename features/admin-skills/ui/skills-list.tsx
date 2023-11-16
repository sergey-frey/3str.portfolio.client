"use client";

import { useSkillsQuery } from "@/entities/skill";
import { UIInput, UILoadableContent } from "@/shared/ui";
import { BadgeListSkeleton } from "@/shared/ui/skeletons";
import { ChangeEvent, useState } from "react";
import { useFilterSkills } from "../model/use-filter-skills";
import { SkillBadge } from "./skill-badge";

export const SkillsList = () => {
  const [search, setSearch] = useState<string>("");
  const skillsQuery = useSkillsQuery();
  const filteredSkills = useFilterSkills(search, skillsQuery.data ?? []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col gap-3">
      <input type="text" name="skill-search" hidden />
      <UIInput
        type="text"
        placeholder="Поиск по навыкам..."
        name="skill-search"
        value={search}
        onChange={handleSearchChange}
        autoFocus
      />

      <UILoadableContent
        loader={<BadgeListSkeleton count={30} minWidth={65} maxWidth={200} />}
        isLoading={skillsQuery.isLoading}
        canShow={skillsQuery.isSuccess}
      >
        <ul className="flex flex-wrap gap-2">
          {filteredSkills.map((skill) => {
            return (
              <li key={skill.id}>
                <SkillBadge skill={skill} />
              </li>
            );
          })}
        </ul>
      </UILoadableContent>
    </div>
  );
};
