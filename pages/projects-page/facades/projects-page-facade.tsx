import { ReactNode } from "react";

type ProjectPageFacadeProps = {
  projectsResearch: ReactNode;
};

export const ProjectPageFacade = ({
  projectsResearch,
}: ProjectPageFacadeProps) => {
  return (
    <main className="px-4 lg:px-10">
      <h1 className="text-h2 font-h2 lg:text-h1 lg:font-h1">
        Мои навыки и примеры их применения
      </h1>
      {projectsResearch}
    </main>
  );
};
