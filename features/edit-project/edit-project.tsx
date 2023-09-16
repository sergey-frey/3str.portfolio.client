import { EditCloseButton } from "@/entities/admin-project/ui/edit-close-button";
import { useSkillsQuery } from "@/shared/hooks";
import { classes } from "@/shared/lib";
import { ProjectModel } from "@/shared/types";
import { UIBadge, UIButton, UIInput, UITextarea } from "@/shared/ui";
import type { HTMLAttributes } from "react";
import { Controller, useForm } from "react-hook-form";
import { ProjectFormModel } from "./types/project-form-model";
import { EditProjectImage } from "./ui/edit-project-image";
import { EditProjectLabels } from "./ui/edit-project-labels";
import { EditProjectLinks } from "./ui/edit-project-links";
import { EditProjectSkills } from "./ui/edit-project-skills";

interface EditProjectProps extends HTMLAttributes<HTMLElement> {
  project: ProjectModel | undefined;
  isOpen: boolean;
  onClose: () => void;
}

export const EditProject = ({
  project,
  isOpen,
  onClose,
  className,
  ...props
}: EditProjectProps) => {
  const { handleSubmit, control, reset } = useForm<ProjectFormModel>({
    defaultValues: {
      ...project,
      image: null,
    },
    values: {
      ...project!,
      image: null,
    },
  });

  const { data: skills } = useSkillsQuery();

  const onSubmit = (data: ProjectFormModel) => {
    console.log(data);
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
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1 mt-5 px-8 flex flex-col gap-6 overflow-y-auto"
          >
            <Controller
              name="title"
              control={control}
              render={({ field }) => {
                return (
                  <UIInput
                    label="Название проекта"
                    placeholder="Название проекта"
                    required
                    {...field}
                  />
                );
              }}
            />

            <Controller
              name="skills"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <EditProjectSkills
                    label="Задействованные технологии"
                    required
                    allSkills={skills ?? []}
                    selectedSkills={value ?? []}
                    onChange={onChange}
                  />
                );
              }}
            />

            <Controller
              name="image"
              control={control}
              render={({ field: { value, onChange } }) => {
                return (
                  <EditProjectImage
                    label="Обложка проекта"
                    required
                    value={value}
                    onChange={onChange}
                    prevImageURL={project.image}
                  />
                );
              }}
            />

            <Controller
              name="labels"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <EditProjectLabels
                    label="Пометки"
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
                );
              }}
            />

            <Controller
              name="links"
              control={control}
              render={({ field: { value, onChange } }) => {
                return (
                  <EditProjectLinks
                    label="Ссылки на проект"
                    value={value}
                    onChange={onChange}
                  />
                );
              }}
            />

            <Controller
              name="description"
              control={control}
              render={({ field: { value, onChange } }) => {
                return (
                  <UITextarea
                    label="Описание проекта"
                    value={value}
                    onChange={onChange}
                    className="h-[150px]"
                  />
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
