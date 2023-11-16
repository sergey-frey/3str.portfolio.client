import {
  UpdateProjectDto,
  projectsControllerCreateProject,
  projectsControllerDeleteProject,
  projectsControllerGetProjects,
  projectsControllerUpdateProject,
} from "@/shared/api/generated";
import { queryClient } from "@/shared/api/query-client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

const projectsKey = ["projects"];

export const useProjectsQuery = () => {
  return useQuery({
    queryFn: projectsControllerGetProjects,
    queryKey: projectsKey,
  });
};

export const useCreateProject = () => {
  return useMutation({
    mutationFn: projectsControllerCreateProject,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: projectsKey });
    },
  });
};

type UpdateProjectOptions = {
  projectId: number;
  updateProjectDto: UpdateProjectDto;
  options?: AxiosRequestConfig<any> | undefined;
};

export const useUpdateProject = () => {
  return useMutation({
    mutationFn: ({
      projectId,
      updateProjectDto,
      options,
    }: UpdateProjectOptions) =>
      projectsControllerUpdateProject(projectId, updateProjectDto, options),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: projectsKey });
    },
  });
};

export const useDeleteProject = () => {
  return useMutation({
    mutationFn: projectsControllerDeleteProject,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: projectsKey });
    },
  });
};
