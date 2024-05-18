import type { ProjectDto, SkillDto } from "@/shared/api/types";

export const getFilteredProjects = (
	projects: ProjectDto[],
	selectedSkills: SkillDto[],
): ProjectDto[] => {
	if (!selectedSkills.length) {
		return projects;
	}

	return projects.filter((project) => {
		const projectsSkills = project.attributes.skills.data;

		for (const skill of selectedSkills) {
			const projectHasSkill = projectsSkills.find((s) => s.id === skill.id);

			if (!projectHasSkill) {
				return false;
			}
		}

		return true;
	});
};
