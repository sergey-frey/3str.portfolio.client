"use client";

import { AdminProject } from "@/entities/admin-project";
import { EditProject } from "@/features/edit-project";
import { useProjectsQuery } from "@/shared/hooks";
import { usePutProjectMutation } from "@/shared/hooks/use-put-project-mutation";
import { ProjectModel } from "@/shared/types";
import { UIButton } from "@/shared/ui";
import { useState } from "react";

export default function AdminProjectsPage() {
  const [editedProject, setEditedProject] = useState<ProjectModel | undefined>(
    undefined
  );
  const { data: projects, isSuccess: projectsSuccess } = useProjectsQuery();
  const { mutate: updateProject } = usePutProjectMutation();

  const getAdminProjectKey = (index: number) => `admin_project_${index}`;

  const editProject = (id: ProjectModel["id"]) => {
    if (!projectsSuccess) return;

    const project = projects.find((proj) => proj.id === id);

    if (project) {
      setEditedProject(project);
    }
  };

  const handleSubmitEditedProject = async (data: FormData) => {
    if (!editedProject) return;

    updateProject({ id: editedProject.id, data });
  };

  return (
    <div className="flex flex-col gap-3 h-full overflow-hidden">
      <ul className="flex-1 flex flex-col gap-4 overflow-y-auto">
        {projectsSuccess &&
          projects.map((project, i) => {
            return (
              <li key={getAdminProjectKey(i)}>
                <AdminProject
                  project={project}
                  actions={
                    <UIButton
                      disabled={editedProject?.id === project.id}
                      size="sm"
                      onClick={() => editProject(project.id)}
                    >
                      Редактировать
                    </UIButton>
                  }
                />
              </li>
            );
          })}
      </ul>
      <EditProject
        isOpen={!!editedProject}
        project={editedProject}
        onClose={() => setEditedProject(undefined)}
        onSubmit={handleSubmitEditedProject}
      />
    </div>
  );
}
