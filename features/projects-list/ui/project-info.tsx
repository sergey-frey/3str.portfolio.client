import type { ProjectDto, SkillDto } from "@/shared/api/types";
import { parseLabels } from "@/shared/lib/parse-labels";
import { UIBadge } from "@/shared/ui";
import { ProjectLabel } from "@/shared/ui/project-label";
import clsx from "clsx";
import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";

type ProjectInfoProps = HTMLAttributes<HTMLDivElement> & {
	project: ProjectDto;
	actions: ReactNode;
	selectedSkills: SkillDto[];
};

export const ProjectInfo = ({
	project,
	actions,
	selectedSkills,
	...props
}: ProjectInfoProps) => {
	return (
		<div {...props}>
			<div className="flex items-center gap-3 flex-wrap">
				<h3
					className={clsx(
						"text-h2 font-h2 underline-offset-8",
						"sm:text-h1 sm:font-h1",
						"hover:underline cursor-pointer",
					)}
				>
					<Link
						href={`/projects/${project.id}`}
						title={`Подробнее о проекте ${project.attributes.title}`}
					>
						{project.attributes.title}
					</Link>
				</h3>
				{actions}
			</div>
			<div className="flex items-center gap-2 mt-2 overflow-x-auto pb-2">
				{parseLabels(project.attributes.labels).map((label, index) => {
					return (
						<ProjectLabel key={`project_${project.id}_label_${index}`}>
							{label}
						</ProjectLabel>
					);
				})}
			</div>
			<ul
				className={clsx(
					"flex gap-[10px] overflow-x-auto mt-3 pb-2",
					"md:overflow-y-auto md:flex-wrap",
					"lg:overflow-y-hidden lg:flex-nowrap",
				)}
			>
				{project.attributes.skills.data.map((skill) => {
					const isMatched = selectedSkills.find((s) => s.id === skill.id);
					const variant = isMatched ? "match" : "default";

					return (
						<li key={`project_${project.id}_skill_${skill.id}`}>
							<UIBadge variant={variant} className="pointer-events-none">
								<p className="whitespace-nowrap">{skill.attributes.title}</p>
							</UIBadge>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
