import { useFetch } from "@/shared/hooks";
import { SkillModel } from "@/shared/types";

export const useSkills = () => {
  const skillsResponse = useFetch<{ data: SkillModel[] }>("/api/v1/skills");
  return skillsResponse;
};
