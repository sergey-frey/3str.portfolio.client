import { UILink } from "@/shared/ui";
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
      <UILink href={href} component="a" inNewTab>
        {text}
      </UILink>
    </div>
  );
};
