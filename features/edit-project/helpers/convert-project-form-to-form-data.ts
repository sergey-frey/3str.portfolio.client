import { ProjectFormModel } from "../types/project-form-model";

export const convertProjectFormToFormData = (
  data: ProjectFormModel
): FormData => {
  const formData = new FormData();
  for (const key of Object.keys(data) as Array<keyof ProjectFormModel>) {
    if (!data.hasOwnProperty(key)) {
      continue;
    }
    let value = data[key];
    if (typeof value !== "string" && !(value instanceof Blob)) {
      formData.set(key, JSON.stringify(value));
    } else {
      formData.set(key, value);
    }
  }

  return formData;
};
