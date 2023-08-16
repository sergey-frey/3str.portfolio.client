import { AnchorHTMLAttributes } from "react";
import { classes } from "../lib";

interface UILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const UILink = ({ className, children, ...props }: UILinkProps) => {
  return (
    <a
      {...props}
      className={classes(
        "bg-primary-500 px-4 py-2 text-m rounded-md transition-colors cursor-pointer",
        "hover:bg-primary-600",
        className
      )}
    >
      {children}
    </a>
  );
};
