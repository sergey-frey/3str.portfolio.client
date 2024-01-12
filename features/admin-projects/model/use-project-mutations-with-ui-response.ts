import { useCreateProject } from "@/entities/project";
import { useDeleteProject, useUpdateProject } from "@/entities/project/queries";
import { useToastsAPIStore } from "@/features/toasts-api";

export const useProjectMutationsWithUIResponse = () => {
  const addToast = useToastsAPIStore((state) => state.addToast);

  const createProjectMutation = useCreateProject({
    onSuccess: () => {
      addToast({
        status: "success",
        title: "Успех!",
        text: "Новый проект успешно создан",
        time: 3000,
      });
    },
    onError: () => {
      addToast({
        status: "error",
        title: "Ошибка",
        text: "Ошибка при создании проекта",
      });
    },
  });

  const updateProjectMutation = useUpdateProject({
    onSuccess: () => {
      addToast({
        status: "success",
        title: "Успех!",
        text: "Проект успешно изменён",
        time: 3000,
      });
    },
    onError: () => {
      addToast({
        status: "error",
        title: "Ошибка",
        text: "Ошибка при изменении проекта",
      });
    },
  });

  const deleteProjectMutation = useDeleteProject({
    onSuccess: () => {
      addToast({
        status: "success",
        title: "Успех!",
        text: `Проект успешно удалён`,
        time: 3000,
      });
    },
    onError: () => {
      addToast({
        status: "error",
        title: "Ошибка",
        text: "Ошибка при удалении проекта",
      });
    },
  });

  return {
    createProjectMutation,
    updateProjectMutation,
    deleteProjectMutation,
  };
};
