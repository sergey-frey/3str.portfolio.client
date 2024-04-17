import type { ProjectDto, SkillDto } from "@/shared/api/types";
import { UIBadge, UIIconLink } from "@/shared/ui";
import { GitHubIcon, OpenIcon } from "@/shared/ui/icons";
import clsx from "clsx";
import type { HTMLMotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";
import { Project } from "./project";

interface ProjectsListProps extends HTMLAttributes<HTMLUListElement> {
	projects: ProjectDto[];
	selectedSkills: SkillDto[];
	projectsAnimationProps: (projectIndex: number) => HTMLMotionProps<"base">;
}

export const ProjectsList = ({
	projects,
	selectedSkills,
	projectsAnimationProps = () => ({}),
	className,
	...props
}: ProjectsListProps) => {
	return (
		<div className="gap-3">
			<UIBadge className="inline-block hover:bg-neutral-600 cursor-default">
				Найдено: {projects.length}
			</UIBadge>
			<ul
				{...props}
				className={clsx(className, "w-full flex flex-col gap-10 mt-4")}
			>
				{projects.map((project, i) => {
					return (
						<li key={`project_${project.id}`}>
							<Project
								{...projectsAnimationProps(i)}
								project={project}
								selectedSkills={selectedSkills}
								actions={
									<div className="flex gap-2">
										{project.attributes.deploy && (
											<UIIconLink
												className="px-[8px]"
												href={project.attributes.deploy}
												target="_blank"
											>
												<OpenIcon width={19} height={19} />
											</UIIconLink>
										)}
										{project.attributes.github && (
											<UIIconLink
												className="px-[8px]"
												href={project.attributes.github}
												target="_blank"
											>
												<GitHubIcon width={20} height={20} />
											</UIIconLink>
										)}
									</div>
								}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
