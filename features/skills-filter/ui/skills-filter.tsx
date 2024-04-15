"use client";

import type { SkillDto } from "@/shared/api/types";
import { type HTMLAttributes, useEffect, useState } from "react";
import { FilterField } from "./filter-field";
import { SkillsList } from "./skills-list";

interface SkillsFilterProps extends HTMLAttributes<HTMLElement> {
	skills: SkillDto[];
	onChangeSkills: (skills: SkillDto[]) => void;
}

export const SkillsFilter = ({
	skills,
	onChangeSkills,
	...props
}: SkillsFilterProps) => {
	const [selectedSkills, setSelectedSkills] = useState<SkillDto[]>([]);
	const freeSkills = skills.filter((skill) => !selectedSkills.includes(skill));

	const handleSelectSkill = (skill: SkillDto) => {
		setSelectedSkills((prev) => [...prev, skill]);
	};

	const handleDeleteSkill = (skill: SkillDto) => {
		setSelectedSkills((prev) => prev.filter((s) => s.id !== skill.id));
	};

	useEffect(() => {
		onChangeSkills(selectedSkills);
	}, [selectedSkills, onChangeSkills]);

	return (
		<section {...props}>
			<FilterField
				selectedSkills={selectedSkills}
				onDeleteSkill={handleDeleteSkill}
			/>
			<SkillsList
				className="mt-2"
				freeSkills={freeSkills}
				onSelectSkill={handleSelectSkill}
			/>
		</section>
	);
};
