"use client";

import { useProjectsQuery } from "@/entities/project";
import { useSkillsQuery } from "@/entities/skill";
import { ProjectsList } from "@/features/projects-list";
import { ProjectsListSkeleton } from "@/features/projects-list/ui/skeletons/projects-list-skeleton";
import { SkillsFilter } from "@/features/skills-filter";
import { useToastsAPIStore } from "@/features/toasts-api";
import { UILoadableContent } from "@/shared/ui";
import { BadgeListSkeleton } from "@/shared/ui/skeletons";
import { type HTMLAttributes, useContext, useEffect } from "react";
import { SkillsContext, SkillsProvider } from "../context/skills-provider";
import {
	getProjectsAnimationProps,
	getSkillsAnimationProps,
} from "../model/animation-functions";
import { getFilteredProjects } from "../model/projects-filter";
import { useErrorHandling } from "../model/use-error-handling";
import { ProjectsNotFoundStub } from "./projects-not-found-stub";
import { ProjectsResearchLayout } from "./projects-research-layout";

interface ProjectsResearchProps extends HTMLAttributes<HTMLElement> {}

const ProjectsResearchComponent = ({ ...props }: ProjectsResearchProps) => {
	const { selectedSkills, setSelectedSkills } = useContext(SkillsContext);

	const skillsQuery = useSkillsQuery();

	const addToast = useToastsAPIStore((state) => state.addToast);
	const projectsQuery = useProjectsQuery();

	const filteredProjects = getFilteredProjects(
		projectsQuery.data ?? [],
		selectedSkills,
	);

	useEffect(() => {
		if (projectsQuery.error) {
			addToast({
				status: "error",
				title: "Ошибка",
				text: "Не удалось загрузить проекты",
			});
		}
	}, [addToast, projectsQuery.error]);

	// Это необходимо т.к станица рендерится дважды - скелетоны и данные
	// Чтобы тосты не двоились, ждём завершения запроса
	useErrorHandling({
		pageReady: !projectsQuery.isLoading,
	});

	return (
		<ProjectsResearchLayout
			{...props}
			skillsFilter={
				<UILoadableContent
					loader={<BadgeListSkeleton count={15} minWidth={70} maxWidth={150} />}
					isLoading={skillsQuery.isLoading}
					canShow={skillsQuery.isSuccess}
				>
					<SkillsFilter
						skills={skillsQuery.data ?? []}
						onChangeSkills={setSelectedSkills}
						skillsAnimationProps={getSkillsAnimationProps}
					/>
				</UILoadableContent>
			}
			projectsList={
				<UILoadableContent
					loader={<ProjectsListSkeleton />}
					isLoading={projectsQuery.isLoading}
					canShow={projectsQuery.isSuccess}
				>
					<ProjectsList
						projects={filteredProjects}
						selectedSkills={selectedSkills}
						projectsAnimationProps={getProjectsAnimationProps}
						projectsNotFountStub={<ProjectsNotFoundStub />}
					/>
				</UILoadableContent>
			}
		/>
	);
};

export const ProjectsResearch = ({ ...props }: ProjectsResearchProps) => {
	return (
		<SkillsProvider>
			<ProjectsResearchComponent {...props} />
		</SkillsProvider>
	);
};
