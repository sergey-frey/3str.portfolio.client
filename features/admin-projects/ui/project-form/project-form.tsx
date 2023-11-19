import { ProjectDto } from "@/shared/api/generated";
import { UIButton, UIModalPortal } from "@/shared/ui";
import { useId, type HTMLAttributes } from "react";
import { ProjectFormModel } from "../..";
import { useEditProjectForm } from "../../model/use-edit-project-form";
import { ProjectFormCloseButton } from "./project-form-close-button";
import { ProjectFormDescriptionController } from "./project-form-description";
import { ProjectFormFacade } from "./project-form-facade";
import { ProjectFormImageController } from "./project-form-image";
import { ProjectFormLabelsController } from "./project-form-labels";
import { ProjectFormLinksController } from "./project-form-links";
import { ProjectFormSkillsController } from "./project-form-skills";
import { ProjectFormTitleController } from "./project-form-title";

interface EditProjectProps
  extends Omit<HTMLAttributes<HTMLElement>, "onSubmit"> {
  project: ProjectDto | undefined;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ProjectFormModel) => void;
}

export const EditProject = ({
  project,
  isOpen,
  onClose,
  className,
  onSubmit,
  ...props
}: EditProjectProps) => {
  const formId = useId();
  const { control, onSubmitForm, handleReset, firstInputRef } =
    useEditProjectForm({
      project,
      onSubmit,
    });

  return (
    <UIModalPortal>
      <ProjectFormFacade
        {...props}
        isOpen={isOpen}
        isProjectSelected={Boolean(project)}
        formCloseButton={<ProjectFormCloseButton onClick={onClose} />}
        formTitle={
          <>
            Проект <strong className="font-h2">{project?.title}</strong>
          </>
        }
        formElement={
          <form
            id={formId}
            onSubmit={onSubmitForm}
            className="flex-1 mt-5 px-8 flex flex-col gap-6"
          >
            <ProjectFormTitleController control={control} ref={firstInputRef} />

            <ProjectFormSkillsController control={control} />

            <ProjectFormImageController
              control={control}
              prevImageUrl={project?.image ?? ""}
            />

            <ProjectFormLinksController control={control} />

            <ProjectFormLabelsController control={control} />

            <ProjectFormDescriptionController control={control} />
          </form>
        }
        formActions={
          <>
            <UIButton type="submit" className="flex-1" form={formId}>
              Отправить
            </UIButton>
            <UIButton type="button" color="neutral" onClick={handleReset}>
              Сбросить
            </UIButton>
          </>
        }
      />
    </UIModalPortal>
  );
};
