import type { SkillDto } from "@/shared/api/types";
import { UIBadge } from "@/shared/ui";
import clsx from "clsx";
import { type HTMLMotionProps, motion } from "framer-motion";
import { useEffect, useRef, type HTMLAttributes } from "react";

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
					<motion.li
						key={`free_skill_${skill.id}`}
						{...skillsAnimationProps(animationIndex)}
					>
						<UIBadge onClick={() => onSelectSkill(skill)}>
							<p className="whitespace-nowrap">{skill.attributes.title}</p>
						</UIBadge>
					</motion.li>
				);
			})}
		</ul>
	);
};
