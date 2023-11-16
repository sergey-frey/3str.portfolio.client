import { UIFormElemLayout } from "@/shared/ui";
import { Controller } from "react-hook-form";
import { FormController } from "../../../types/form";
import { ProjectFormImage } from "./project-form-image";

type ProjectFormImageControllerProps = FormController & {
  prevImageUrl: string;
};

export const ProjectFormImageController = ({
  control,
  prevImageUrl,
}: ProjectFormImageControllerProps) => {
  return (
    <Controller
      name="image"
      control={control}
      render={({ field: { value, onChange } }) => {
        return (
          <UIFormElemLayout label="Обложка проекта">
            <ProjectFormImage
              value={value}
              onChange={onChange}
              prevImageURL={prevImageUrl}
            />
          </UIFormElemLayout>
        );
      }}
    />
  );
};
