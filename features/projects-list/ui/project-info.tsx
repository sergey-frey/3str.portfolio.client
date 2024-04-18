import type { ProjectDto, SkillDto } from "@/shared/api/types";
import { parseLabels } from "@/shared/lib/parse-labels";
import { UIBadge } from "@/shared/ui";
import clsx from "clsx";
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
				<h3 className="text-h2 font-h2 sm:text-h1 sm:font-h1">
					{project.attributes.title}
				</h3>
				{actions}
			</div>
			<div className="flex items-center gap-2 mt-2 overflow-x-auto pb-2">
				{parseLabels(project.attributes.labels).map((label, index) => {
					return (
						<p
							key={`project_${project.id}_label_${index}`}
							className={clsx(
								"text-primary-300 px-2 py-1 rounded-xl border-[1px] border-primary-300 select-none",
								"text-nowrap",
							)}
						>
							{label}
						</p>
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
