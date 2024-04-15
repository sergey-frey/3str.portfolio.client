import type { SkillDto } from "@/shared/api/types";
import { UIBadge } from "@/shared/ui";
import clsx from "clsx";
import type { HTMLAttributes } from "react";

interface SkillsListProps extends HTMLAttributes<HTMLUListElement> {
	freeSkills: SkillDto[];
	onSelectSkill: (skill: SkillDto) => void;
}

export const SkillsList = ({
	freeSkills,
	onSelectSkill,
	className,
	...props
}: SkillsListProps) => {
	return (
		<ul {...props} className={clsx(className, "flex flex-wrap gap-2")}>
			{freeSkills.map((skill) => {
				return (
					<li key={`free_skill_${skill.id}`}>
						<UIBadge onClick={() => onSelectSkill(skill)}>
							<p className="whitespace-nowrap">{skill.attributes.title}</p>
						</UIBadge>
					</li>
				);
			})}
		</ul>
	);
};
