import { SkillModel } from "@/shared/types";

export interface ProjectModel {
  id: number;
  title: string;
  description: string;
  skills: SkillModel[];
  image: string;
  links: {
    github: string;
    deploy: string;
  };
  labels: string[];
}
