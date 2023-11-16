import { useDeleteSkill } from "@/entities/skill";
import { Confirm } from "@/features/confirm";
import { SkillDto } from "@/shared/api/generated";
import { UIBadge } from "@/shared/ui";
import clsx from "clsx";
import { useState } from "react";

type SkillBadgeProps = {
  skill: SkillDto;
};

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  const [isShowConfirm, setIsShowConfirm] = useState<boolean>(false);
  const deleteSkillMutation = useDeleteSkill();

  const handleBadgeClick = () => {
    setIsShowConfirm(true);
  };

  return (
    <>
      <Confirm
        isOpen={isShowConfirm}
        onClose={() => setIsShowConfirm(false)}
        title="Подтверждение"
        message="Вы уверены, что хотите удалить навык?"
        actions={[
          { type: "not-confirm", label: "Отмена" },
          { type: "confirm", label: "Да" },
        ]}
        onConfirm={() => deleteSkillMutation.mutate(skill.id)}
      />

      <UIBadge
        variant="delete"
        className={clsx(
          "border-[1px] border-primary-500",
          "hover:border-primary-500",
        )}
        onClick={handleBadgeClick}
      >
        {skill.title}
      </UIBadge>
    </>
  );
};
