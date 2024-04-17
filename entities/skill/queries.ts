import type { SkillDto } from "@/shared/api/types";
import { addApiAuthHeader } from "@/shared/lib/add-api-auth-header";
import { useQuery } from "@tanstack/react-query";
import axios, { type AxiosResponse } from "axios";
import { SKILLS } from "./__mock__/skills";

const getAllSkills = async () => {
	// try {
	// 	const response = await axios.get<AxiosResponse<SkillDto[]>>(
	// 		"/api/skills",
	// 		addApiAuthHeader(),
	// 	);
	// 	const skills = response.data.data;
	// 	return skills;
	// } catch (e) {
	// 	console.error("Query skills error");
	// 	return [];
	// }

	return SKILLS;
};

const skillsKey = ["skills"];

export const useSkillsQuery = () => {
	return useQuery({
		queryFn: getAllSkills,
		queryKey: skillsKey,
	});
};
