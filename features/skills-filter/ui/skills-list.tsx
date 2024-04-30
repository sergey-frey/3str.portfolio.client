import type { SkillDto } from "@/shared/api/types";
import { UIBadge } from "@/shared/ui";
import clsx from "clsx";
import {
	type HTMLMotionProps,
	LazyMotion,
	domAnimation,
	m,
} from "framer-motion";
import type { HTMLAttributes } from "react";

interface SkillsListProps extends HTMLAttributes<HTMLUListElement> {
	freeSkills: SkillDto[];
	onSelectSkill: (skill: SkillDto) => void;
	skillsAnimationProps?: () => HTMLMotionProps<"ul">;
}

export const SkillsList = ({
	freeSkills,
	onSelectSkill,
	skillsAnimationProps = () => ({}),
	className,
	...props
}: SkillsListProps) => {
	return (
		<LazyMotion features={domAnimation}>
			<m.ul
				{...props}
				// framer-motion types bug
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				{...(skillsAnimationProps() as any)}
				className={clsx(className, "flex flex-wrap gap-2")}
			>
				{freeSkills.map((skill) => {
					return (
						<m.li key={`free_skill_${skill.id}`}>
							<UIBadge onClick={() => onSelectSkill(skill)}>
								<p className="whitespace-nowrap">{skill.attributes.title}</p>
							</UIBadge>
						</m.li>
					);
				})}
			</m.ul>
		</LazyMotion>
	);
};
