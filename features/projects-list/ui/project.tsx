"use client";

import type { ProjectDto, SkillDto } from "@/shared/api/types";
import { parseLabels } from "@/shared/lib/parse-labels";
import { UIBadge, UIImage } from "@/shared/ui";
import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

interface ProjectProps extends HTMLAttributes<HTMLElement> {
	project: ProjectDto;
	selectedSkills: SkillDto[];
	actions?: ReactNode;
}

export const Project = ({
	project,
	selectedSkills,
	actions,
	className,
	...props
}: ProjectProps) => {
	return (
		<article
			{...props}
			className={clsx(className, "flex flex-col gap-[15px]", "md:flex-row")}
		>
			<UIImage
				src={project.attributes.image.data[0].attributes.formats.medium.url}
				alt={`${project.attributes.title} main image`}
				className={clsx(
					"w-full h-auto rounded-xl shadow-primary-500 shadow-sm md:max-w-xs lg:max-w-md",
				)}
				width={1200}
				height={840}
			/>

			<div className="overflow-hidden w-full">
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
				<ul className="flex gap-[10px] overflow-x-auto mt-3 pb-2">
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
				<p
					className={clsx("text-neutral-300 mt-5 line-clamp-4 md:line-clamp-2")}
				>
					{project.attributes.description}
				</p>
			</div>
		</article>
	);
};
