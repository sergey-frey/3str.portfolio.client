import { useQuery } from "@tanstack/react-query";
import { SkillModel } from "@/shared/types";
import axios from "axios";

const fetchSkills = async (): Promise<SkillModel[]> => {
  try {
    const response = await axios.get<{ data: SkillModel[] }>("/api/v1/skills");
    return response.data.data;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error("Fail to fetch skills");
    }
  }

  return [];
};

export const useSkillsQuery = () => {
  return useQuery({
    queryFn: fetchSkills,
    queryKey: ["skills"],
  });
};
