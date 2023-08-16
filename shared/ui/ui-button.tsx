import { ButtonHTMLAttributes } from "react";
import { classes } from "../lib";

interface UIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const UIButton = ({ className, children, ...props }: UIButtonProps) => {
  return (
    <button
      {...props}
      className={classes(
        "bg-primary-500 px-4 py-2 text-m rounded-md transition-colors",
        "hover:bg-primary-600",
        className
      )}
    >
      {children}
    </button>
  );
};
