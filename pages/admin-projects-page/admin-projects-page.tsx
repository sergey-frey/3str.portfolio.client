"use client";

import { useCreateProject, useProjectsQuery } from "@/entities/project";
import { useUpdateProject } from "@/entities/project/queries";
import {
  AdminProjectsList,
  EditProject,
  ProjectFormModel,
} from "@/features/admin-projects";
import { ProjectDto } from "@/shared/api/generated";
import { UIButton } from "@/shared/ui";
import { PlusIcon } from "@/shared/ui/icons";
import { useState } from "react";

export const AdminProjectsPage = () => {
  const [isCreatingProject, setIsCreatingProject] = useState<boolean>(false);
  const [editedProject, setEditedProject] = useState<ProjectDto | undefined>();

  const projectsQuery = useProjectsQuery();
  const createProjectMutation = useCreateProject();
  const updateProjectMutation = useUpdateProject();

  const editProject = (id: ProjectDto["id"]) => {
    if (!projectsQuery.isSuccess) return;

    const project = projectsQuery.data.find((proj) => proj.id === id);

    if (project) {
      setEditedProject(project);
      setIsCreatingProject(false);
    }
  };

  const handleCreateProjectClick = () => {
    setEditedProject({
      id: -1,
      title: "Новый проект",
      skills: [],
      image: "",
      labels: "",
      deploy: "",
      github: "",
      description: "",
    });
    setIsCreatingProject(true);
  };

  const handleSubmitEditedProject = async (data: ProjectFormModel) => {
    if (!editedProject) return;

    console.log(data);
    if (isCreatingProject) {
      createProjectMutation.mutate({
        title: data.title,
        image: data.image as Blob,
        labels: data.labels.join(" "),
        skillIds: JSON.stringify(data.skillIds),
        deploy: data.deploy,
        github: data.github,
        description: data.description,
      });
    } else {
      updateProjectMutation.mutate({
        projectId: editedProject.id,
        updateProjectDto: {
          title: data.title,
          image: data.image as Blob,
          labels: data.labels.join(" "),
          skillIds: JSON.stringify(data.skillIds),
          deploy: data.deploy,
          github: data.github,
          description: data.description,
        },
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 h-full overflow-hidden">
      <div>
        <UIButton
          onClick={handleCreateProjectClick}
          className="flex items-center gap-3 pr-3"
        >
          Добавить
          <PlusIcon />
        </UIButton>
      </div>

      <AdminProjectsList
        projects={projectsQuery.data ?? []}
        editedProject={editedProject}
        isLoading={projectsQuery.isLoading}
        isSuccess={projectsQuery.isSuccess}
        onEditProject={editProject}
      />

      <EditProject
        isOpen={!!editedProject}
        project={editedProject}
        onClose={() => setEditedProject(undefined)}
        onSubmit={handleSubmitEditedProject}
      />
    </div>
  );
};
