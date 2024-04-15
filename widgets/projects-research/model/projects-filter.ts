import type { ProjectDto, SkillDto } from "@/shared/api/types";

export const getFilteredProjects = (
	projects: ProjectDto[],
	selectedSkills: SkillDto[],
): ProjectDto[] => {
	if (!selectedSkills.length) {
		return projects;
	}

	return projects.filter((project) => {
		for (const skill of project.attributes.skills.data) {
			if (selectedSkills.find((s) => s.id === skill.id)) {
				return true;
			}
		}
		return false;
	});
};
