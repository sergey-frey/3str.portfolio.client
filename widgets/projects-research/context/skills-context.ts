import { SkillModel } from "@/shared/types";
import { createContext } from "react";

interface SkillsContextValue {
  selectedSkills: SkillModel[];
  setSelectedSkills: (skills: SkillModel[]) => void;
}

export const SkillsContext = createContext<SkillsContextValue>({
  selectedSkills: [],
  setSelectedSkills: () => {},
});
