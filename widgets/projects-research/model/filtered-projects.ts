import { ProjectModel, SkillModel } from "@/shared/types";

export const getFilteredProjects = (
  projects: ProjectModel[],
  selectedSkills: SkillModel[]
): ProjectModel[] => {
  if (!selectedSkills.length) {
    return projects;
  }

  return projects.filter((project) => {
    for (const skill of project.skills) {
      if (selectedSkills.find((s) => s.id === skill.id)) {
        return true;
      }
    }

    return false;
  });
};
