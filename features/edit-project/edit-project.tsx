import { EditCloseButton } from "@/entities/admin-project/ui/edit-close-button";
import { useSkillsQuery } from "@/shared/hooks";
import { classes } from "@/shared/lib";
import { ProjectModel } from "@/shared/types";
import { ProjectFormModel } from "@/shared/types/project-form-model";
import {
  UIBadge,
  UIButton,
  UIFormElemLayout,
  UIInput,
  UITextarea,
} from "@/shared/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, type HTMLAttributes } from "react";
import { Controller, useForm } from "react-hook-form";
import { convertProjectFormToFormData } from "./helpers/convert-project-form-to-form-data";
import { EditProjectImage } from "./ui/edit-project-image";
import { EditProjectLabels } from "./ui/edit-project-labels";
import { EditProjectLinks } from "./ui/edit-project-links";
import { EditProjectSkills } from "./ui/edit-project-skills";
import { validationSchema } from "./validation";

interface EditProjectProps
  extends Omit<HTMLAttributes<HTMLElement>, "onSubmit"> {
  project: ProjectModel | undefined;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

export const EditProject = ({
  project,
  isOpen,
  onClose,
  className,
  onSubmit,
  ...props
}: EditProjectProps) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm<ProjectFormModel>({
    defaultValues: {
      ...project,
      image: null,
    },
    values: {
      ...project!,
      image: null,
    },
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const { data: skills } = useSkillsQuery();
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (project && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [project]);

  const onSubmitForm = (data: ProjectFormModel) => {
    console.log(data);
    if (isValid) {
      console.log("Data before onChange: ", data);

      const formData = convertProjectFormToFormData(data);

      onSubmit(formData);
    } else {
      console.log("Invalid");
    }
  };

  const handleReset = () => {
    reset();
  };

  return (
    <section
      {...props}
      className={classes(
        className,
        "flex flex-col py-7 overflow-hidden",
        "fixed right-0 top-0 max-w-[700px] w-full h-screen transition-transform duration-500",
        "bg-neutral-600 border-l-2 border-l-primary-600",
        isOpen ? "transform-none" : "translate-x-full"
      )}
    >
      <div className="px-8 flex justify-end">
        <EditCloseButton onClick={onClose} />
      </div>
      {project && (
        <>
          <h3 className="px-8 text-h2">
            Проект <strong className="font-h2">{project?.title}</strong>
          </h3>

          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="flex-1 mt-5 px-8 flex flex-col gap-6 overflow-y-auto"
          >
            <Controller
              name="title"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                return (
                  <UIFormElemLayout
                    label="Название проекта"
                    errorText={error?.message}
                    isRequired
                  >
                    <UIInput
                      placeholder="Название проекта"
                      ref={firstInputRef}
                      value={value}
                      onChange={onChange}
                    />
                  </UIFormElemLayout>
                );
              }}
            />

            <Controller
              name="skills"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <UIFormElemLayout
                    label="Задействованные технологии"
                    errorText={error?.message}
                    isRequired
                  >
                    <EditProjectSkills
                      allSkills={skills ?? []}
                      selectedSkills={value ?? []}
                      onChange={onChange}
                    />
                  </UIFormElemLayout>
                );
              }}
            />

            <Controller
              name="image"
              control={control}
              render={({ field: { value, onChange } }) => {
                return (
                  <UIFormElemLayout label="Обложка проекта">
                    <EditProjectImage
                      value={value}
                      onChange={onChange}
                      prevImageURL={project.image}
                    />
                  </UIFormElemLayout>
                );
              }}
            />

            <Controller
              name="labels"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <UIFormElemLayout label="Пометки">
                    <EditProjectLabels
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

            <Controller
              name="links"
              control={control}
              render={({ field: { value, onChange } }) => {
                return (
                  <UIFormElemLayout label="Ссылки на проект">
                    <EditProjectLinks value={value} onChange={onChange} />
                  </UIFormElemLayout>
                );
              }}
            />

            <Controller
              name="description"
              control={control}
              render={({ field: { value, onChange } }) => {
                return (
                  <UIFormElemLayout label="Описание проекта">
                    <UITextarea
                      value={value}
                      onChange={onChange}
                      className="h-[150px]"
                    />
                  </UIFormElemLayout>
                );
              }}
            />

            <div className="flex gap-3">
              <UIButton type="submit" className="flex-1">
                Отправить
              </UIButton>
              <UIButton type="button" color="neutral" onClick={handleReset}>
                Сбросить
              </UIButton>
            </div>
          </form>
        </>
      )}
    </section>
  );
};
