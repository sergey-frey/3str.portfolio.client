import { UIFormElemLayout } from "@/shared/ui";
import { Controller } from "react-hook-form";
import { FormController } from "../../../types/form";
import { DeployLinkInput, GithubLinkInput } from "./project-form-links";

type ProjectFormLinksControllerProps = FormController;

export const ProjectFormLinksController = ({
  control,
}: ProjectFormLinksControllerProps) => {
  return (
    <div className="flex flex-col gap-1">
      <UIFormElemLayout label="Ссылки" isRequired>
        <Controller
          name="deploy"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <UIFormElemLayout>
                <DeployLinkInput value={value} onChange={onChange} />
              </UIFormElemLayout>
            );
          }}
        />

        <Controller
          name="github"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => {
            return (
              <UIFormElemLayout errorText={error?.message}>
                <GithubLinkInput value={value} onChange={onChange} />
              </UIFormElemLayout>
            );
          }}
        />
      </UIFormElemLayout>
    </div>
  );
};
