"use client";

import { useCreateSkill } from "@/entities/skill";
import { AddSkillDto } from "@/shared/api/generated";
import { useForm } from "react-hook-form";

export const useAddSkillForm = () => {
  const createSkillMutation = useCreateSkill();
  const { handleSubmit, control, reset } = useForm<AddSkillDto>({
    defaultValues: {
      title: "",
    },
  });

  const onSubmitForm = handleSubmit((data) => {
    createSkillMutation.mutate(data);
    reset();
  });

  return { onSubmitForm, control };
};
