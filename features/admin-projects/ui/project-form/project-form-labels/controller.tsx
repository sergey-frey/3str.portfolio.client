import { UIBadge, UIFormElemLayout } from "@/shared/ui";
import { Controller } from "react-hook-form";
import { ProjectFormLabels } from "./project-form-labels";
import { FormController } from "../../../types/form";

type ProjectFormLabelsControllerProps = FormController;

export const ProjectFormLabelsController = ({
  control,
}: ProjectFormLabelsControllerProps) => {
  return (
    <Controller
      name="labels"
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <UIFormElemLayout label="Пометки">
            <ProjectFormLabels
              labels={value ?? []}
              onChange={onChange}
              render={(label, deleteFunc) => {
                return (
                  <UIBadge
                    variant="delete"
                    className="border-[1px] !border-neutral-300"
                    onClick={() => deleteFunc(label)}
                  >
                    {label}
                  </UIBadge>
                );
              }}
            />
          </UIFormElemLayout>
        );
      }}
    />
  );
};
