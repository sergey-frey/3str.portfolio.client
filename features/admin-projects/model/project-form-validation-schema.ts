import { array, blob, minLength, number, object, string, union } from "valibot";

export const ProjectFormSchema = object({
  title: string([minLength(1, "Название не может быть пустым")]),
  skillIds: array(object({ id: number() }), [
    minLength(1, "Выберите хотя бы 1 навык"),
  ]),
  image: union([blob(), string()]),
  labels: array(string([minLength(1, "Пометка не может быть пустой")])),
  deploy: string(),
  github: string([minLength(1, "Ссылка на Github не может быть пустой")]),
  description: string(),
});
