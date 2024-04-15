import { SkillDto } from "@/shared/api/types";
import { ReactNode, createContext, useState } from "react";

interface SkillsContextValue {
	selectedSkills: SkillDto[];
	setSelectedSkills: (skills: SkillDto[]) => void;
}

export const SkillsContext = createContext<SkillsContextValue>({
	selectedSkills: [],
	setSelectedSkills: () => {},
});

export const SkillsProvider = ({ children }: { children: ReactNode }) => {
	const [selectedSkills, setSelectedSkillsFunc] = useState<SkillDto[]>([]);

	const setSelectedSkills = (skills: SkillDto[]) => {
		setSelectedSkillsFunc(skills);
	};

	return (
		<SkillsContext.Provider
			value={{
				selectedSkills,
				setSelectedSkills,
			}}
		>
			{children}
		</SkillsContext.Provider>
	);
};
