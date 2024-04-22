"use client";

import type { ProjectDto, SkillDto } from "@/shared/api/types";
import { UIImage } from "@/shared/ui";
import clsx from "clsx";
import {
	type HTMLMotionProps,
	LazyMotion,
	domAnimation,
	m,
} from "framer-motion";
import type { ReactNode } from "react";
import { ProjectInfo } from "./project-info";

interface ProjectProps extends HTMLMotionProps<"article"> {
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
		<LazyMotion features={domAnimation}>
			<m.article
				{...props}
				className={clsx(
					className,
					"flex flex-col gap-[15px] overflow-hidden",
					"lg:flex-row",
				)}
			>
				<div className={clsx("flex gap-[15px] w-full", "lg:block lg:max-w-md")}>
					<UIImage
						src={project.attributes.image.data[0].attributes.url}
						alt={`${project.attributes.title} main image`}
						className={clsx(
							"w-full h-auto self-start rounded-xl shadow-primary-500 shadow-sm",
							"md:max-w-[320px]",
							"lg:max-w-md",
						)}
						width={1200}
						height={840}
					/>
					<ProjectInfo
						project={project}
						actions={actions}
						selectedSkills={selectedSkills}
						className="hidden overflow-hidden md:block lg:hidden"
					/>
				</div>

				<div className="overflow-hidden w-full">
					<ProjectInfo
						project={project}
						actions={actions}
						selectedSkills={selectedSkills}
						className="md:hidden lg:block"
					/>
					<p className={clsx("text-neutral-300 mt-2 lg:mt-5 line-clamp-3")}>
						{project.attributes.description}
					</p>
				</div>
			</m.article>
		</LazyMotion>
	);
};
