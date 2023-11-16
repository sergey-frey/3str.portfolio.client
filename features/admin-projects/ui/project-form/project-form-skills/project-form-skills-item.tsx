import { UICheckbox } from "@/shared/ui";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

type ProjectsFormSkillsItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isSelected: boolean;
};

export const ProjectsFormSkillsItem = ({
  isSelected,
  className,
  children,
  ...props
}: ProjectsFormSkillsItemProps) => {
  return (
    <button
      type="button"
      className={clsx(
        className,
        "flex items-center w-full gap-2 py-2 px-2 transition-colors rounded-md cursor-pointer",
        "hover:bg-neutral-600",
      )}
      {...props}
    >
      <UICheckbox isChecked={isSelected} />
      {children}
    </button>
  );
};
