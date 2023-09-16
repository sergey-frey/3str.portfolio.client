import { ProjectModel } from "@/shared/types";
export const EMPTY_PROJECT: ProjectModel = {
  id: NaN,
  title: "",
  labels: [],
  skills: [],
  image: "",
  links: {
    deploy: "",
    github: "",
  },
  description: "",
};
