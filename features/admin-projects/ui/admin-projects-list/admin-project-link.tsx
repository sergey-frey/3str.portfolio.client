import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

type AdminProjectLinkProps = HTMLAttributes<HTMLDivElement> & {
  href: string;
  text: string;
  icon: ReactNode;
};

export const AdminProjectLink = ({
  href,
  icon,
  text,
  className,
  ...props
}: AdminProjectLinkProps) => {
  if (!href) {
    return null;
  }

  return (
    <div
      {...props}
      className={clsx(className, "flex items-center gap-2 text-primary-300")}
    >
      {icon}
      <a
        href={href}
        target="_blank"
        className={clsx(
          "underline underline-offset-2 transition-all",
          "hover:underline hover:underline-offset-4",
        )}
      >
        {text}
      </a>
    </div>
  );
};
