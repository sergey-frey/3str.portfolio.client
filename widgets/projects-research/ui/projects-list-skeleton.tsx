import { ProjectSkeleton } from "@/entities/project";
import { classes } from "@/shared/lib";
import { UIBadge } from "@/shared/ui";

export const ProjectsListSkeleton = () => {
  return (
    <div className="gap-3">
      <UIBadge className="inline-block hover:bg-neutral-600 cursor-default">
        Найдено: -
      </UIBadge>
      <ul className={"w-full flex flex-col gap-10 mt-4"}>
        <ProjectSkeleton />
        <ProjectSkeleton />
      </ul>
    </div>
  );
};
