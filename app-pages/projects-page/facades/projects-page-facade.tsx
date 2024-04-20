import type { ReactNode } from "react";

type ProjectPageFacadeProps = {
	projectsResearch: ReactNode;
};

export const ProjectPageFacade = ({
	projectsResearch,
}: ProjectPageFacadeProps) => {
	return (
		<section className="px-4 lg:px-10 pb-[100px]">
			<h1 className="text-h2 font-h2 lg:text-h1 lg:font-h1">
				Мои навыки и примеры их применения
			</h1>
			{projectsResearch}
		</section>
	);
};
