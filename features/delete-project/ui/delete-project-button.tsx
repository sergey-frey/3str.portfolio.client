import { useDeleteProject } from "@/entities/project";
import { Confirm } from "@/features/confirm";
import { UIButton, UIButtonProps, UIModal } from "@/shared/ui";
import clsx from "clsx";
import { MouseEvent, useState } from "react";

type DeleteProjectButtonProps = UIButtonProps & {
  projectId: number;
};

export const DeleteProjectButton = ({
  projectId,
  onClick,
  className,
  ...props
}: DeleteProjectButtonProps) => {
  const [isShowConfirm, setIsShowConfirm] = useState<boolean>(false);
  const deleteProjectMutation = useDeleteProject();

  const handleDeleteProjectClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }

    console.log(projectId);

    setIsShowConfirm(true);
  };

  const handleConfirm = () => {
    deleteProjectMutation.mutate(projectId);
    setIsShowConfirm(false);
  };

  return (
    <>
      <Confirm
        isOpen={isShowConfirm}
        onClose={() => setIsShowConfirm(false)}
        title="Подтверждение"
        message="Вы уверены, что хотите удалить проект?"
        actions={[
          { type: "not-confirm", label: "Отмена" },
          { type: "confirm", label: "Да" },
        ]}
        onConfirm={handleConfirm}
      />

      <UIButton
        {...props}
        className={clsx(className, "bg-rose-500", "hover:bg-rose-700")}
        onClick={handleDeleteProjectClick}
      />
    </>
  );
};
