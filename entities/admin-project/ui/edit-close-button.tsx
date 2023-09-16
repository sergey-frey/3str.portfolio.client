import { classes } from "@/shared/lib";
import { CrossIcon } from "@/shared/ui/icons";
import type { ButtonHTMLAttributes } from "react";

interface EditCloseButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const EditCloseButton = ({ className, ...props }: EditCloseButton) => {
  return (
    <button
      {...props}
      className={classes(className, "p-2 rounded-md bg-neutral-500")}
    >
      <CrossIcon className="w-4 h-4" />
    </button>
  );
};
