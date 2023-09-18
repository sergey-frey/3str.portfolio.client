import { ProjectModel } from "@/shared/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProjects = async (): Promise<ProjectModel[]> => {
  try {
    const response = await axios.get<{ data: ProjectModel[] }>(
      "/api/v1/projects"
    );
    return response.data.data;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error("Fail to fetch projects");
    }
  }

  return [];
};

export const useProjectsQuery = () => {
  return useQuery({
    queryFn: fetchProjects,
    queryKey: ["projects"],
  });
};
