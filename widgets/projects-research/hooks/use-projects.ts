import { useFetch } from "@/shared/hooks";
import { ProjectModel } from "@/shared/types";

export const useProjects = () => {
  const projectResponse = useFetch<{ data: ProjectModel[] }>(
    "/api/v1/projects"
  );
  return projectResponse;
};
