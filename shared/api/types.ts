export interface ProjectDto {
	id: number;
	attributes: {
		deploy: string;
		description: string;
		github: string;
		image: {
			data: ProjectImage[];
		};
		labels: string;
		skills: { data: SkillDto[] };
		title: string;
	};
}

export interface SkillDto {
	id: number;
	attributes: {
		title: string;
	};
}

export type ProjectImage = {
	id: number;
	attributes: {
		name: string;
		width: number;
		height: number;
		formats: {
			thumbnail: ProjectImageFormat;
			large: ProjectImageFormat;
			small: ProjectImageFormat;
			medium: ProjectImageFormat;
		};
	};
};

type ProjectImageFormat = {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	width: number;
	height: number;
	size: number;
	sieInBytes: number;
	url: string;
};
