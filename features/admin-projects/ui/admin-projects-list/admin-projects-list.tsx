"use client";

import { DeleteProjectButton } from "@/features/delete-project";
import { ProjectDto } from "@/shared/api/generated";
import { UIButton, UILoadableContent } from "@/shared/ui";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { AdminProject } from "./admin-project";
import { AdminProjectsListSkeleton } from "./skeletons/admin-projects-list-skeleton";

type AdminProjectsListProps = {
  projects: ProjectDto[];
  editedProject?: ProjectDto;
  isLoading: boolean;
  isSuccess: boolean;
  onEditProject: (projectId: number) => void;
} & HTMLAttributes<HTMLUListElement>;

export const AdminProjectsList = ({
  projects,
  editedProject,
  isLoading,
  isSuccess,
  onEditProject,
  className,
  ...props
}: AdminProjectsListProps) => {
  const getAdminProjectKey = (index: number) => `admin_project_${index}`;

  return (
    <UILoadableContent
      loader={<AdminProjectsListSkeleton />}
      isLoading={isLoading}
      canShow={isSuccess}
    >
      <ul
        {...props}
        className={clsx(
          className,
          "flex-1 flex flex-col gap-4 overflow-y-auto",
        )}
      >
        {projects.map((project, i) => {
          return (
            <li key={getAdminProjectKey(i)}>
              <AdminProject
                project={project}
                actions={
                  <>
                    <UIButton
                      disabled={editedProject?.id === project.id}
                      size="sm"
                      onClick={() => onEditProject(project.id)}
                    >
                      Редактировать
                    </UIButton>

                    <DeleteProjectButton projectId={project.id} size="sm">
                      Удалить
                    </DeleteProjectButton>
                  </>
                }
              />
            </li>
          );
        })}
      </ul>
    </UILoadableContent>
  );
};
