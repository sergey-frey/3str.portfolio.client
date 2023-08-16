import { SkillModel } from "@/shared/types";
import { StaticImageData } from "next/image";

export interface ProjectModel {
  id: number;
  title: string;
  description: string;
  skills: SkillModel[];
  image: string | StaticImageData;
  links: {
    github: string;
    deploy: string;
  };
  labels: string[];
}
