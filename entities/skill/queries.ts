import {
  skillsControllerCreateSkill,
  skillsControllerDeleteSkill,
  skillsControllerGetSkills,
} from "@/shared/api/generated";
import { queryClient } from "@/shared/api/query-client";
import { useMutation, useQuery } from "@tanstack/react-query";

const skillsKey = ["skills"];

export const useSkillsQuery = () => {
  return useQuery({
    queryFn: skillsControllerGetSkills,
    queryKey: skillsKey,
  });
};

export const useDeleteSkill = () => {
  return useMutation({
    mutationFn: skillsControllerDeleteSkill,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: skillsKey });
    },
  });
};

export const useCreateSkill = () => {
  return useMutation({
    mutationFn: skillsControllerCreateSkill,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: skillsKey });
    },
  });
};
