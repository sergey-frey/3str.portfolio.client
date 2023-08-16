import { SkillsFilter } from "@/features/skills-filter";
import { classes } from "@/shared/lib";
import { SkillModel } from "@/shared/types";
import { HTMLAttributes, useContext } from "react";
import { skills } from "./constants/skills";
import { SkillsContext } from "./context/skills-context";
import { ProjectsList } from "./ui/projects-list";

interface ProjectsResearchLayoutProps extends HTMLAttributes<HTMLElement> {}

export const ProjectsResearchLayout = ({
  className,
  ...props
}: ProjectsResearchLayoutProps) => {
  const { setSelectedSkills } = useContext(SkillsContext);

  const handleChangeSkills = (skills: SkillModel[]) => {
    if (setSelectedSkills) {
      setSelectedSkills(skills);
    }
  };
  return (
    <article {...props} className={classes(className, "flex flex-col gap-10")}>
      <SkillsFilter skills={skills} onChangeSkills={handleChangeSkills} />
      <ProjectsList />
    </article>
  );
};
