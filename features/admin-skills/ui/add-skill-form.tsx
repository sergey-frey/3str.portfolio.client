"use client";

import { UIButton, UIFormElemLayout, UIInput } from "@/shared/ui";
import { Controller } from "react-hook-form";
import { useAddSkillForm } from "../model/use-add-skill-form";

export const AddSkillForm = () => {
  const { onSubmitForm, control } = useAddSkillForm();

  return (
    <form className="flex items-center gap-3" onSubmit={onSubmitForm}>
      <Controller
        name="title"
        control={control}
        render={({ field }) => {
          return (
            <UIFormElemLayout className="grow">
              <UIInput {...field} placeholder="Введите название навыка" />
            </UIFormElemLayout>
          );
        }}
      />
    </form>
  );
};
