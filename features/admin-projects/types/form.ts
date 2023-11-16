import { SkillDto } from "@/shared/api/generated";
import { Control } from "react-hook-form";
import { Output } from "valibot";
import { ProjectFormSchema } from "../model/project-form-validation-schema";

export type SkillId = Pick<SkillDto, "id">;

export type ProjectFormModel = Output<typeof ProjectFormSchema>;

export type FormController = {
  control: Control<ProjectFormModel>;
};
