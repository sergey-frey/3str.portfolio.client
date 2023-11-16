import { UIFormElemLayout, UITextarea } from "@/shared/ui";
import { Controller } from "react-hook-form";
import { FormController } from "../../../types/form";

type ProjectFormDescriptionController = FormController;

export const ProjectFormDescriptionController = ({
  control,
}: ProjectFormDescriptionController) => {
  return (
    <Controller
      name="description"
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <UIFormElemLayout label="Описание проекта" errorText={error?.message}>
            <UITextarea
              value={value}
              onChange={onChange}
              className="h-[150px]"
            />
          </UIFormElemLayout>
        );
      }}
    />
  );
};
