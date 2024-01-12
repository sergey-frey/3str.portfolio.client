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

type ProjectMutationOptions = {
  onSuccess?: () => void;
  onError?: () => void;
};

const projectsKey = ["projects"];

export const useProjectsQuery = ({
  onSuccess,
  onError,
}: ProjectMutationOptions) => {
  return useQuery({
    queryFn: projectsControllerGetProjects,
    queryKey: projectsKey,
    onSuccess,
    onError,
  });
};

export const useCreateProject = ({
  onSuccess,
  onError,
}: ProjectMutationOptions) => {
  return useMutation({
    mutationFn: projectsControllerCreateProject,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: projectsKey });
      if (onSuccess) {
        onSuccess();
      }
    },
    onError,
  });
};

type UpdateProjectOptions = {
  projectId: number;
  updateProjectDto: UpdateProjectDto;
  options?: AxiosRequestConfig<any> | undefined;
};

export const useUpdateProject = ({
  onSuccess,
  onError,
}: ProjectMutationOptions) => {
  return useMutation({
    mutationFn: ({
      projectId,
      updateProjectDto,
      options,
    }: UpdateProjectOptions) =>
      projectsControllerUpdateProject(projectId, updateProjectDto, options),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: projectsKey });
      if (onSuccess) {
        onSuccess();
      }
    },
    onError,
  });
};

export const useDeleteProject = ({
  onSuccess,
  onError,
}: ProjectMutationOptions) => {
  return useMutation({
    mutationFn: projectsControllerDeleteProject,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: projectsKey });
      if (onSuccess) {
        onSuccess();
      }
    },
    onError,
  });
};
