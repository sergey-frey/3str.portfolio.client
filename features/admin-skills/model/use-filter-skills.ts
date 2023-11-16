import { SkillDto } from "@/shared/api/generated";

export const useFilterSkills = (search: string, skills: SkillDto[]) => {
  return skills.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase()),
  );
};
