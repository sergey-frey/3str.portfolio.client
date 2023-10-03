import { ProjectFormModel } from "@/shared/types/project-form-model";

const convertedFields: (keyof ProjectFormModel)[] = [
  "skills",
  "labels",
  "links",
];

export const parseProjectFormData = (formData: FormData): ProjectFormModel => {
  const projectData: ProjectFormModel = {
    id: Number(formData.get("id")),
    title: "",
    description: "",
    image: null,
    labels: [],
    links: {
      deploy: "",
      github: "",
    },
    skills: [],
  };

  //TODO: Исправить TS ошибку
  for (const [key, value] of formData.entries()) {
    if (key === "id") continue;
    if (convertedFields.includes(key as keyof ProjectFormModel)) {
      projectData[key as keyof ProjectFormModel] = JSON.parse(value as string);
    } else {
      projectData[key as keyof ProjectFormModel] = value;
    }
  }

  return projectData;
};
