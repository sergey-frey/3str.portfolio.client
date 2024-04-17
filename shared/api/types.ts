export interface ProjectDto {
	id: number;
	attributes: {
		deploy: string | null;
		description: string;
		github: string | null;
		image: {
			data: ProjectImage[];
		};
		labels: string;
		skills: { data: SkillDto[] };
		title: string;
		updatedAt: string;
		publishedAt: string;
	};
}

export interface SkillDto {
	id: number;
	attributes: {
		title: string;
		createdAt?: string;
		updatedAt?: string;
		publishedAt?: string;
	};
}

export type ProjectImage = {
	id: number;
	attributes: {
		name: string;
		width: number;
		height: number;
		alternativeText: string | null;
		hash: string;
		ext: string;
		mime: string;
		size: number;
		url: string;
		updatedAt: string;
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
	sizeInBytes: number;
	url: string;
};
