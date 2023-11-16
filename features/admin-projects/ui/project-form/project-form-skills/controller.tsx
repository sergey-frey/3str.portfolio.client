import { useSkillsQuery } from "@/entities/skill";
import { UIFormElemLayout } from "@/shared/ui";
import { Controller } from "react-hook-form";
import { FormController } from "../../../types/form";
import { ProjectFormSkills } from "./project-form-skills";

export const ProjectFormSkillsController = ({ control }: FormController) => {
  const { data: skills } = useSkillsQuery();

  return (
    <Controller
      name="skillIds"
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <UIFormElemLayout
            label="Задействованные технологии"
            errorText={error?.message}
            isRequired
          >
            <ProjectFormSkills
              allSkills={skills ?? []}
              selectedSkills={value ?? []}
              onChange={onChange}
            />
          </UIFormElemLayout>
        );
      }}
    />
  );
};
