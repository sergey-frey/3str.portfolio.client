import type { SkillDto } from "@/shared/api/types";
import { UIBadge } from "@/shared/ui";
import clsx from "clsx";
import {
	type HTMLMotionProps,
	LazyMotion,
	domAnimation,
	m,
	motion,
} from "framer-motion";
import { type HTMLAttributes, useEffect, useRef } from "react";

interface SkillsListProps extends HTMLAttributes<HTMLUListElement> {
	freeSkills: SkillDto[];
	onSelectSkill: (skill: SkillDto) => void;
	skillsAnimationProps?: (skillIndex: number) => HTMLMotionProps<"li">;
}

export const SkillsList = ({
	freeSkills,
	onSelectSkill,
	skillsAnimationProps = () => ({}),
	className,
	...props
}: SkillsListProps) => {
	const freeSkillsPrev = useRef<SkillDto[]>([]);

	useEffect(() => {
		return () => {
			freeSkillsPrev.current = freeSkills;
		};
	}, [freeSkills]);

	return (
		<ul {...props} className={clsx(className, "flex flex-wrap gap-2")}>
			{freeSkills.map((skill, i) => {
				const prevSkills = freeSkillsPrev.current;
				const isRerender = !prevSkills.includes(skill) && prevSkills.length;
				const animationIndex = isRerender ? 0 : i;

				return (
					<LazyMotion key={`free_skill_${skill.id}`} features={domAnimation}>
						<m.li {...skillsAnimationProps(animationIndex)}>
							<UIBadge onClick={() => onSelectSkill(skill)}>
								<p className="whitespace-nowrap">{skill.attributes.title}</p>
							</UIBadge>
						</m.li>
					</LazyMotion>
				);
			})}
		</ul>
	);
};
