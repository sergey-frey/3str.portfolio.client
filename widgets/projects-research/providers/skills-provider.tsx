import { SkillModel } from "@/shared/types";
import { ReactNode, useEffect, useState } from "react";
import { SkillsContext } from "../context/skills-context";

export const SkillsProvider = ({ children }: { children: ReactNode }) => {
  const [selectedSkills, setSelectedSkillsFunc] = useState<SkillModel[]>([]);

  const setSelectedSkills = (skills: SkillModel[]) => {
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
