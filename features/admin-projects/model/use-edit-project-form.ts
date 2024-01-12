import { ProjectDto } from "@/shared/api/generated";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
import { parseLabels } from "../../../shared/lib/parse-labels";
import { ProjectFormModel } from "../types/form";
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

  return { control, onSubmitForm, handleReset };
};
