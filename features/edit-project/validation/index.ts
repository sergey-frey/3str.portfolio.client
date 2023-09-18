import { object, string, array, number, mixed, MixedSchema } from "yup";

export const validationSchema = object({
  id: number().positive().required(),
  title: string().required("Название проекта не может быть пустым"),
  description: string().required(),
  skills: array()
    .of(
      object({
        id: number().positive().required(),
        title: string().required().required(),
      })
    )
    .required()
    .min(1, "Нужно выбрать хотя бы 1 навык"),
  image: mixed()
    .test("isFile", (value) => value instanceof File || value === null)
    .nullable() as MixedSchema<File | null>,
  links: object({
    deploy: string().required(),
    github: string().required(),
  }).required(),
  labels: array(string().required().min(1)).required(),
});
