import { classes } from "@/shared/lib";
import { UICheckbox } from "@/shared/ui";
import type { ButtonHTMLAttributes } from "react";

type EditProjectsSkillsItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isSelected: boolean;
};

export const EditProjectsSkillsItem = ({
  isSelected,
  className,
  children,
  ...props
}: EditProjectsSkillsItemProps) => {
  return (
    <button
      type="button"
      className={classes(
        className,
        "flex items-center w-full gap-2 py-2 px-2 transition-colors rounded-md cursor-pointer",
        "hover:bg-neutral-600"
      )}
      {...props}
    >
      <UICheckbox isChecked={isSelected} />
      {children}
    </button>
  );
};
