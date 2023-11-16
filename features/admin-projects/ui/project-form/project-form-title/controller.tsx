import { UIFormElemLayout, UIInput } from "@/shared/ui";
import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import { FormController } from "../../../types/form";

type ProjectFormTitleControllerProps = FormController & {};

export const ProjectFormTitleController = forwardRef<
  HTMLInputElement,
  ProjectFormTitleControllerProps
>(function Title({ control }, ref) {
  return (
    <Controller
      name="title"
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <UIFormElemLayout
            label="Название проекта"
            errorText={error?.message}
            isRequired
          >
            <UIInput
              placeholder="Название проекта"
              ref={ref}
              value={value}
              onChange={onChange}
            />
          </UIFormElemLayout>
        );
      }}
    />
  );
});
