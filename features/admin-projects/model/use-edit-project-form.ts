import { ProjectDto } from "@/shared/api/generated";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { ProjectFormModel } from "../types/form";
import { parseLabels } from "./parse-labels";
import { ProjectFormSchema } from "./project-form-validation-schema";

type UseEditProjectForm = {
  project?: ProjectDto;
  onSubmit: (data: ProjectFormModel) => void;
};

export const useEditProjectForm = ({
  project,
  onSubmit,
}: UseEditProjectForm) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm<ProjectFormModel>({
    defaultValues: {
      ...project,
      image: project?.image,
      labels: parseLabels(project?.labels ?? ""),
    },
    values: {
      ...project!,
      image: project?.image ?? "",
      skillIds: project?.skills.map((skill) => ({ id: skill.id })) ?? [],
      labels: parseLabels(project?.labels ?? ""),
    },
    resolver: valibotResolver(ProjectFormSchema),
    mode: "onChange",
  });

  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (project && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [project]);

  const onSubmitForm = handleSubmit((data: ProjectFormModel) => {
    if (isValid) {
      onSubmit(data);
    } else {
      console.log("Invalid");
    }
  });

  const handleReset = () => {
    reset();
  };

  return { control, onSubmitForm, handleReset, firstInputRef };
};
