import { ProjectModel } from "@/shared/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const putProjectQuery = async ({
  id,
  data,
}: {
  id: ProjectModel["id"];
  data: FormData;
}) => {
  const response = await axios.put(`/api/v1/projects/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return await response.data;
};

export const usePutProjectMutation = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: putProjectQuery,
    onSuccess: () => {
      client.invalidateQueries(["projects"]);
    },
  });
};
