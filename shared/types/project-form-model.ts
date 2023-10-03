import { ProjectModel } from "@/shared/types";

export interface ProjectFormModel extends Omit<ProjectModel, "image"> {
  image: File | null;
}
