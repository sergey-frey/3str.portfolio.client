import { UIBadge } from "@/shared/ui";
import { ProjectSkeleton } from "./projects-skeleton";

export const ProjectsListSkeleton = () => {
  return (
    <div className="gap-3">
      <UIBadge className="inline-block hover:bg-neutral-600 cursor-default">
        Найдено: 0
      </UIBadge>
      <ul className={"w-full flex flex-col gap-10 mt-4"}>
        <ProjectSkeleton />
        <ProjectSkeleton />
      </ul>
    </div>
  );
};
