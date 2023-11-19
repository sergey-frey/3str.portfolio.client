import clsx from "clsx";
import { AnchorHTMLAttributes } from "react";

interface UIIconLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const UIIconLink = ({
  className,
  children,
  ...props
}: UIIconLinkProps) => {
  return (
    <a
      {...props}
      className={clsx(
        "bg-primary-500 px-4 py-2 text-m rounded-md transition-colors cursor-pointer",
        "hover:bg-primary-600",
        className,
      )}
    >
      {children}
    </a>
  );
};
