import { CrossIcon } from "@/shared/ui/icons";
import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface ProjectFormCloseButton
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ProjectFormCloseButton = ({
  className,
  ...props
}: ProjectFormCloseButton) => {
  return (
    <button
      {...props}
      className={clsx(className, "p-2 rounded-md bg-neutral-500")}
    >
      <CrossIcon className="w-4 h-4" />
    </button>
  );
};
